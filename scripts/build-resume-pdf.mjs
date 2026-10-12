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
import { existsSync } from "node:fs";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { exportDir, findChrome, projectRoot, serveExport } from "./static-export.mjs";

const output = path.join(projectRoot, "public", "resume.pdf");

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
