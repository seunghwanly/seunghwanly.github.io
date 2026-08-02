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
    /<title>Product Engineer · Mobile &amp; Web · 이승환<\/title>/i,
  );
  assert.match(html, /모바일과 웹을 오가며/);
  assert.match(html, /제품을 만들고 운영했습니다/);
  assert.match(html, /Flutter로 모바일 개발을 시작했고/);
  assert.match(html, /12일/);
  assert.match(html, /15회/);
  assert.match(html, /48개/);
  assert.match(html, /55개/);
  assert.match(html, /직접 확인할 수 있는 기록/);
  assert.match(html, /href="\/resume\.pdf"/);
  assert.match(html, /href="\/work"/);
  assert.match(html, /href="\/ai-practice"/);
  assert.match(html, /href="\/proof"/);
  assert.match(html, /href="\/ask"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /본문으로 건너뛰기/);
  assert.match(html, /188,886명/);
  assert.match(html, /4개 브랜드의 예약 상세/);
  assert.match(html, /공용 React 웹/);
  assert.match(html, /Product Engineer/);
  assert.doesNotMatch(html, /class="identity-artifact"/);
  assert.doesNotMatch(html, /flow-grid/);
  assert.doesNotMatch(html, /class="identity-map"/);
  assert.doesNotMatch(html, directTargetCompanyPattern);
  assert.doesNotMatch(html, /RUM · Crash/);
  assert.doesNotMatch(html, /활동량을 제품 성과로 해석하지 않습니다/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders every primary route and all four work cases", async () => {
  const expected = [
    ["/work", "4개 브랜드의 예약 상세"],
    ["/work/connected-commerce", "188,886명을 연결"],
    ["/work/multiplatform-sdk", "Android·iOS·Web을 하나의 Flutter 플러그인"],
    ["/work/observable-reliability", "Datadog의 모바일 url_query 누락 이슈"],
    ["/work/design-to-preview", "일관된 디자인으로 사용자 경험과 생산성"],
    ["/ai-practice", "Flutter SDK 수정에 AI를 사용"],
    ["/proof", "직접 확인할 수 있는 작업 기록"],
    ["/about", "앱과 웹을 함께 만드는 제품 엔지니어"],
    ["/ask", "경력과 작업에서 궁금한 내용"],
  ];

  for (const [pathname, phrase] of expected) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should render`);
    assert.match(await response.text(), new RegExp(phrase));
  }
});

test("uses only primary, secondary, and tertiary button variants", async () => {
  const componentSource = await readFile(
    new URL("../components/content-ui.tsx", import.meta.url),
    "utf8",
  );
  const siteSource = await readFile(
    new URL("../components/site-shell.tsx", import.meta.url),
    "utf8",
  );
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(
    componentSource,
    /type ButtonVariant = "primary" \| "secondary" \| "tertiary"/,
  );
  assert.match(siteSource, /<ButtonLink[^>]+variant="primary"/);
  assert.match(siteSource, /<DisclosureTrigger[^>]+variant="secondary"/);
  assert.match(siteSource, /className="mobile-menu-trigger"/);
  assert.match(css, /\.button-primary\s*\{/);
  assert.match(css, /\.button-secondary\s*\{/);
  assert.match(css, /\.button-tertiary\s*\{/);
  assert.doesNotMatch(
    `${componentSource}\n${siteSource}\n${css}`,
    /Action(?:Link|Group)|action-group|button-quiet|nav-resume/,
  );
});

test("about keeps career, projects, skills, and teaching readable on mobile", async () => {
  const response = await render("/about");
  const html = await response.text();
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(html, /온라인과 오프라인을 연결하고/);
  assert.match(html, /188,886명/);
  assert.match(html, /한일 교류 SNS/);
  assert.match(html, /class="capability-list"/);
  assert.match(html, /Goorm/);
  assert.match(html, /Comento/);
  assert.doesNotMatch(html, /프리랜스/);
  assert.doesNotMatch(html, /capability-table/);
  assert.match(css, /\.capability-list\s*>\s*div\s*\{/);
  assert.match(css, /\.brand-name\s*\{[^}]*font-size:\s*1\.125rem/s);
  assert.match(css, /\.desktop-nav\s*\{[^}]*font-size:\s*0\.86rem/s);
});

test("proof directory merges duplicate destinations and omits the disclaimer slide", async () => {
  const response = await render("/proof");
  const html = await response.text();

  assert.match(html, /kakao_maps_flutter/);
  assert.match(html, /pub\.dev/);
  assert.match(html, /WDS 컴포넌트 미리보기/);
  assert.match(html, /React 미리보기/);
  assert.doesNotMatch(html, /숫자를 출판/);
  assert.doesNotMatch(html, /성과 수치에는 기준과 범위를/);
  assert.doesNotMatch(html, /경험으로 말하지 않는 것/);
});

test("Ask searches only prepared public answers", async () => {
  const response = await render("/ask");
  const html = await response.text();

  assert.match(html, /공개한 답변만 검색합니다/);
  assert.match(html, /검색어는 저장하거나 서버로 보내지 않습니다/);
  assert.match(html, /id="ask-query"/);
  assert.match(html, /제품 엔지니어 역할과 가장 가까운 경험/);
  assert.doesNotMatch(html, /api\/ask|chat\/completions|anthropic|openai/i);
});

test("public pages do not expose location or availability", async () => {
  const forbidden =
    /서울|Seoul|2026년 12월|2026\.12|Dec 2026|근무 가능|입사 가능|available|availability/i;
  const routes = ["/", "/work", "/about", "/proof", "/ask", "/ai-practice"];

  for (const pathname of routes) {
    const response = await render(pathname);
    assert.doesNotMatch(await response.text(), forbidden, pathname);
  }
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
