/**
 * Publishes the static export in ./out to the gh-pages branch.
 *
 * Uses a temporary git worktree and clears the branch before copying, so
 * routes that no longer exist (a deleted page, a renamed path) disappear from
 * the live site instead of lingering as stale URLs.
 *
 * Run `npm run build:pages` first, then `npm run deploy`.
 * Pass --dry-run to see what would be published without pushing.
 */
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const exportDir = path.join(projectRoot, "out");
const BRANCH = "gh-pages";
const dryRun = process.argv.includes("--dry-run");

function git(args, options = {}) {
  return execFileSync("git", args, {
    cwd: projectRoot,
    encoding: "utf8",
    ...options,
  }).trim();
}

if (!existsSync(path.join(exportDir, "index.html"))) {
  console.error("out/index.html is missing. Run `npm run build:pages` first.");
  process.exit(1);
}
if (!existsSync(path.join(exportDir, ".nojekyll"))) {
  console.error("out/.nojekyll is missing — GitHub Pages would skip _next/.");
  process.exit(1);
}

const sourceBranch = git(["rev-parse", "--abbrev-ref", "HEAD"]);
const sourceCommit = git(["rev-parse", "--short", "HEAD"]);
const worktree = mkdtempSync(path.join(tmpdir(), "ghpages-"));

// Never call process.exit() inside the try below — it skips the finally block
// and leaves the worktree registered, which blocks the next run.
let exitCode = 0;

try {
  git(["worktree", "add", "--quiet", worktree, BRANCH]);

  // Clear the branch so deleted routes do not survive as stale pages.
  for (const entry of readdirSync(worktree)) {
    if (entry === ".git") continue;
    rmSync(path.join(worktree, entry), { recursive: true, force: true });
  }

  for (const entry of readdirSync(exportDir)) {
    cpSync(path.join(exportDir, entry), path.join(worktree, entry), {
      recursive: true,
    });
  }

  const status = git(["status", "--porcelain"], { cwd: worktree });
  if (!status) {
    console.log("gh-pages is already up to date — nothing to publish.");
  } else {
    const lines = status.split("\n");
    const removed = lines.filter((line) => line.trim().startsWith("D ")).length;
    console.log(`${lines.length} path(s) change on ${BRANCH} (${removed} removed):`);
    console.log(lines.slice(0, 20).map((line) => `  ${line}`).join("\n"));
    if (lines.length > 20) console.log(`  … ${lines.length - 20} more`);

    if (dryRun) {
      console.log("\n--dry-run: nothing committed or pushed.");
    } else {
      git(["add", "--all"], { cwd: worktree });
      git(
        [
          "commit",
          "--quiet",
          "-m",
          `정적 사이트 배포 (${sourceBranch}@${sourceCommit})`,
        ],
        { cwd: worktree },
      );
      git(["push", "origin", BRANCH], { cwd: worktree });
      console.log(
        `\npublished ${lines.length} path(s) to ${BRANCH} from ${sourceBranch}@${sourceCommit}`,
      );
    }
  }
} catch (error) {
  console.error(error.message);
  exitCode = 1;
} finally {
  git(["worktree", "remove", "--force", worktree]);
}

process.exit(exitCode);
