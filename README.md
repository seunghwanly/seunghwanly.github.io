# Seunghwan Lee · Product Engineer Portfolio

Flutter로 시작해 React 웹, 네이티브 연동, 배포와 운영으로 작업 범위를 넓혀
왔습니다. 이 경험을 정리한 개인 포트폴리오이며
[vinext](https://github.com/cloudflare/vinext)와 OpenAI Sites에서 실행합니다.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This project does not use `wrangler.jsonc`.

## Project Structure

- `app/`: 페이지와 전역 스타일
- `components/`: 공통 UI와 사이트 레이아웃
- `lib/content.ts`: **화면에 보이는 모든 문구** — 여기만 고치면 된다
- `lib/schema.dto.ts`: `content.ts`의 타입 정의
- `public/`: Pretendard, 이력서 PDF, Open Graph 이미지
- `tests/`: 주요 경로와 공개 범위를 검사하는 렌더링 테스트
- `.openai/hosting.json`: Sites 프로젝트 연결 설정

## Content

문구는 `lib/content.ts` **한 곳**에만 있습니다. 페이지와 컴포넌트에는 한글
문자열이 없고, 구조와 스타일만 있습니다. 타입은 `lib/schema.dto.ts`에 있으니
문구를 고칠 때는 볼 필요가 없습니다.

| 무엇을 고치고 싶을 때 | 볼 export |
| --- | --- |
| 헤더·푸터·메타데이터·404 | `site`, `notFound` |
| 홈 / 대표 작업 목록 | `home`, `workIndex` |
| 작업 상세의 공통 라벨과 개념도 | `caseDetail` |
| 개별 사례 본문 | `caseStudies` |
| 소개와 경력 | `about` |
| AI 활용 | `aiPractice` |
| 질문 찾기 | `ask`(화면 라벨), `askEntries`(질문·답변) |
| 작업 기록 | `proof`, `publicProof` |
| 이력서 | `resume`(이력서 전용 문구) + `about`·`publicProof` 재사용 |
| 여러 화면이 공유하는 라벨 | `ui` |
| 홈의 영역 다이어그램 / 고객 식별 흐름 / AI 역할 분담 | `layerDiagram`, `identityFlow`, `humanAiContract` |

`app/`이나 `components/`에는 한글 문자열을 두지 않는 것이 규칙입니다.
화면에 보이는 글자는 모두 `lib/content.ts`에서 가져옵니다.

## Resume

이력서는 `/resume` 한 곳에서 나옵니다. `public/resume.pdf`는 **그 페이지를 인쇄해 만든 파생물**이고, 직접 편집하지 않습니다.

```bash
npm run build:pages   # out/resume/index.html 생성
npm run resume:pdf    # headless Chrome 으로 인쇄 → public/resume.pdf
```

경력·프로젝트·기술·학력·강의는 `about`에서, 공개 기록은 `publicProof`에서 그대로
읽습니다. 문구를 한 번 고치면 `/about`·`/resume`·PDF가 함께 바뀝니다.

인쇄 레이아웃은 `app/globals.css`의 `@media print` 블록이 담당합니다 — 헤더·푸터·
다운로드 버튼을 숨기고 A4 여백으로 전환합니다. Chrome 경로가 다르면
`CHROME_PATH` 환경변수로 지정하세요. PDF 생성은 배포 파이프라인에 넣지 않았습니다
(GitHub Actions에 Chrome 의존성이 생기므로 로컬에서 만들어 커밋합니다).

## Styling

Tailwind CSS v4를 사용합니다. 스타일은 JSX의 `className`에 직접 씁니다.
`app/globals.css`에는 토큰과 예외적인 것만 둡니다.

**타이포그래피는 9개 역할로 고정**되어 있습니다. 기본 스케일(`text-sm`,
`text-lg` …)은 `--text-*: initial`로 지워 두었으니, 아래에서 하나를 고르면
크기·행간·자간·굵기가 함께 따라옵니다.

| 역할 | 용도 |
| --- | --- |
| `text-display` | 페이지 대표 제목 (h1) |
| `text-heading` | 섹션 제목 (h2) |
| `text-title` | 블록·카드 제목 (h3, 작은 h2) |
| `text-subtitle` | 항목 제목 (h4, strong) |
| `text-lede` | 도입 문단 |
| `text-body` | 본문 |
| `text-caption` | 보조 설명·각주 |
| `text-label` | 모노 라벨 (`font-mono tabular-nums`와 함께) |
| `text-metric` | 숫자 강조 (`font-mono tabular-nums`와 함께) |

색도 같은 방식으로 고정입니다: `ink` `ink-soft` `muted` `muted-dark`
`accent` `accent-soft` `accent-strong` `warn` `canvas` `canvas-raised`
`line` `line-strong`. 기본 팔레트(`text-red-500` 등)는 지워져 있습니다.

CSS에 남아 있는 것은 네 가지뿐입니다.

- `.site-shell` — 페이지 좌우 여백과 최대 너비
- `.surface` / `.surface-lift` — 카드 표면
- `.button` + `.button-primary` / `-secondary` / `-tertiary`
- `glass`, `surface-wash` — 블러와 하이라이트 유틸리티

반복되는 구조는 CSS 클래스가 아니라 `components/content-ui.tsx`의 컴포넌트로
있습니다: `Section` `SectionHeading` `PageIntro` `PageCta`
`DefinitionList`/`DefinitionRow`, 그리고 라벨+내용 한 줄을 만드는
`rowGrid`·`rowLabel`·`rowList` 문자열.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm run build:pages`: build the static export for GitHub Pages
- `npm run lint`: check TypeScript and React source

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
