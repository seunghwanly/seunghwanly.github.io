/**
 * Prints /resume to public/resume.pdf with headless Chrome.
 *
 * The PDF is derived, never authored: the page reads lib/content.ts and the
 * @media print block in app/globals.css already hides the header, footer and
 * download button and switches to A4. That keeps one source instead of a web
 * résumé and a PDF that drift apart.
 *
 * Run `npm run build:pages` first, then `npm run resume:pdf`.
 */
import { createReadStream, existsSync } from "node:fs";
import { mkdir, stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const exportDir = path.join(projectRoot, "out");
const output = path.join(projectRoot, "public", "resume.pdf");

const CHROME_CANDIDATES = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};

function findChrome() {
  const fromEnv = process.env.CHROME_PATH;
  if (fromEnv && existsSync(fromEnv)) return fromEnv;
  const found = CHROME_CANDIDATES.find((candidate) => existsSync(candidate));
  if (!found) {
    throw new Error(
      "Chrome not found. Install Chrome or set CHROME_PATH to its binary.",
    );
  }
  return found;
}

/** Serves ./out so the page loads its real absolute asset paths. */
async function serveExport() {
  const server = createServer(async (request, response) => {
    const requestPath = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    const candidates = [
      path.join(exportDir, requestPath),
      path.join(exportDir, requestPath, "index.html"),
      path.join(exportDir, `${requestPath}.html`),
    ];

    for (const candidate of candidates) {
      // Never serve outside the export directory.
      if (!candidate.startsWith(exportDir)) break;
      try {
        const info = await stat(candidate);
        if (!info.isFile()) continue;
        response.writeHead(200, {
          "content-type": MIME[path.extname(candidate)] ?? "application/octet-stream",
        });
        createReadStream(candidate).pipe(response);
        return;
      } catch {
        // Try the next candidate.
      }
    }

    response.writeHead(404).end("Not found");
  });

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  return { server, port: server.address().port };
}

if (!existsSync(path.join(exportDir, "resume", "index.html"))) {
  console.error(
    "out/resume/index.html is missing. Run `npm run build:pages` first.",
  );
  process.exit(1);
}

const chrome = findChrome();
const { server, port } = await serveExport();
await mkdir(path.dirname(output), { recursive: true });

const exitCode = await new Promise((resolve) => {
  const child = spawn(
    chrome,
    [
      "--headless",
      "--disable-gpu",
      "--no-sandbox",
      "--no-first-run",
      "--hide-scrollbars",
      // Let webfonts and layout settle before the snapshot.
      "--virtual-time-budget=10000",
      "--no-pdf-header-footer",
      `--print-to-pdf=${output}`,
      `http://127.0.0.1:${port}/resume/`,
    ],
    { stdio: ["ignore", "inherit", "inherit"] },
  );
  child.on("exit", resolve);
});

server.close();

if (exitCode !== 0) {
  console.error(`Chrome exited with ${exitCode}.`);
  process.exit(exitCode ?? 1);
}

const { size } = await stat(output);
console.log(
  `resume.pdf written from /resume — ${(size / 1024).toFixed(1)}KB`,
);
