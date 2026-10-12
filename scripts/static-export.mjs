/**
 * Shared by the scripts that derive files from the static export (`out/`):
 * the résumé PDF and the share image.
 */
import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const projectRoot = fileURLToPath(new URL("../", import.meta.url));
export const exportDir = path.join(projectRoot, "out");

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

export function findChrome() {
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
export async function serveExport() {
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
