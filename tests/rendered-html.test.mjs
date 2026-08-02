import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const directTargetCompanyPattern = new RegExp(
  `${["토", "스"].join("")}\\s*${["플레", "이스"].join("")}|${[
    "toss",
    "place",
  ].join("\\s*")}|${["toss", "place"].join("")}`,
  "i",
);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${pathname.replaceAll("/", "-")}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function sourceFiles(root) {
  const entries = await readdir(root, {
    recursive: true,
    withFileTypes: true,
  });

  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        [".ts", ".tsx", ".css"].includes(path.extname(entry.name)),
    )
    .map((entry) => path.join(entry.parentPath, entry.name));
}

test("home is a complete Korean portfolio with public proof", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ko"/i);
  assert.match(
    html,
    /<title>Product Engineer · Mobile &amp; Frontend · 이승환<\/title>/i,
  );
  assert.match(html, /모바일과 웹을 오가며/);
  assert.match(html, /제품을 만들고 운영했습니다/);
  assert.match(html, /12 days/);
  assert.match(html, /15 releases/);
  assert.match(html, /48 PRs/);
  assert.match(html, /55 tests/);
  assert.match(html, /href="\/resume\.pdf"/);
  assert.match(html, /href="\/work"/);
  assert.match(html, /href="\/ai-practice"/);
  assert.match(html, /href="\/proof"/);
  assert.match(html, /href="\/ask"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /본문으로 건너뛰기/);
  assert.match(html, /class="identity-artifact"/);
  assert.match(html, /본인인증 · 동의/);
  assert.match(html, /통합 고객 식별/);
  assert.match(html, /31,124명/);
  assert.match(html, /레거시 약 20만 계정/);
  assert.match(html, /4개 브랜드 앱·웹/);
  assert.match(html, /공용 웹으로 통합/);
  assert.match(html, /Winc 앱 업데이트까지 마쳤습니다/);
  assert.match(html, /개념도이며 실제 고객 분포와 무관합니다/);
  assert.match(html, /ENGINEERING NOTES/);
  assert.doesNotMatch(html, /flow-grid/);
  assert.doesNotMatch(html, directTargetCompanyPattern);
  assert.doesNotMatch(html, /RUM · Crash/);
  assert.doesNotMatch(html, /활동량을 제품 성과로 해석하지 않습니다/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders every primary route and all four work cases", async () => {
  const expected = [
    ["/work", "코드보다 먼저"],
    ["/work/connected-commerce", "온라인 계정과 오프라인 매장 경험"],
    ["/work/multiplatform-sdk", "하나의 Dart API"],
    ["/work/observable-reliability", "보이지 않던 화면"],
    ["/work/design-to-preview", "디자인 QA"],
    ["/ai-practice", "매장 운영에 AI를 적용한다면"],
    ["/proof", "클릭해서 확인할 수 있는 것"],
    ["/about", "제품의 경계까지 책임지는"],
    ["/ask", "문서 안의 답"],
  ];

  for (const [pathname, phrase] of expected) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should render`);
    assert.match(await response.text(), new RegExp(phrase));
  }
});

test("Ask is explicitly static and has honest unknown handling", async () => {
  const response = await render("/ask");
  const html = await response.text();

  assert.match(html, /정적 Q&amp;A · 서버 AI\/RAG 아님/);
  assert.match(html, /이 사이트에 공개된 문장만 검색/);
  assert.match(html, /확인 가능한 자료에는 이 답이 없습니다/);
  assert.match(html, /id="ask-query"/);
  assert.match(html, /질문은 서버로 전송하거나 저장하지 않습니다/);
  assert.match(html, /제품 엔지니어 역할과 가장 가까운 경험/);
  assert.doesNotMatch(html, /api\/ask|chat\/completions|anthropic|openai/i);
});

test("public source code excludes private raw links and editorial claim tags", async () => {
  const roots = ["app", "components", "lib"].map((directory) =>
    path.join(projectRoot, directory),
  );
  const files = (
    await Promise.all(roots.map((root) => sourceFiles(root)))
  ).flat();
  const source = (
    await Promise.all(files.map((file) => readFile(file, "utf8")))
  ).join("\n");

  assert.doesNotMatch(
    source,
    /app\.notion\.com|slack\.com\/archives|app\.datadoghq\.com/i,
  );
  assert.doesNotMatch(
    source,
    /github\.com\/ppbstudios\/(?!wds_flutter\b)/i,
  );
  assert.doesNotMatch(
    source,
    /inner-order-web|ppb-clients|#(?:3483|3489|719|724|727|710)\b/i,
  );
  assert.doesNotMatch(
    source,
    /\b(?:ID|P|PERF|WEB|OSS|AI|DS|CI|OLD|LEAD)-\d+\b/,
  );
  assert.doesNotMatch(source, directTargetCompanyPattern);
});

test("uses the self-hosted Pretendard font and ships an absolute OG image", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );
  const response = await render("/");
  const html = await response.text();

  assert.match(css, /font-family:\s*"Pretendard"/);
  assert.match(css, /\/fonts\/PretendardVariable\.ttf/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  await access(new URL("../public/fonts/PretendardVariable.ttf", import.meta.url));
  await access(new URL("../public/og.png", import.meta.url));
  assert.match(
    html,
    /<meta property="og:image" content="http:\/\/localhost\/og\.png"/,
  );
  assert.match(
    html,
    /<meta name="twitter:card" content="summary_large_image"/,
  );
  await assert.rejects(
    access(new URL("../app/_sites-preview", import.meta.url)),
  );
});
