/**
 * Screenshots /og to public/og.png with headless Chrome.
 *
 * Like the résumé PDF, the image is derived, never authored: /og reads
 * lib/content.ts and the design tokens, so the share card changes when the
 * site does.
 *
 * Run `npm run build:pages` first, then `npm run og:image`.
 */
import { existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { exportDir, findChrome, projectRoot, serveExport } from "./static-export.mjs";

const output = path.join(projectRoot, "public", "og.png");

if (!existsSync(path.join(exportDir, "og", "index.html"))) {
  console.error("out/og/index.html is missing. Run `npm run build:pages` first.");
  process.exit(1);
}

const chrome = findChrome();
const { server, port } = await serveExport();

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
      "--window-size=1200,630",
      `--screenshot=${output}`,
      `http://127.0.0.1:${port}/og/`,
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
console.log(`og.png written from /og — ${(size / 1024).toFixed(1)}KB`);
