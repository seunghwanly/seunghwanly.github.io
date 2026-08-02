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
- `lib/content.ts`: 공개할 수 있는 프로젝트와 경력 데이터
- `public/`: Pretendard, 이력서 PDF, Open Graph 이미지
- `tests/`: 주요 경로와 공개 범위를 검사하는 렌더링 테스트
- `.openai/hosting.json`: Sites 프로젝트 연결 설정

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build and verify the rendered portfolio routes
- `npm run lint`: check TypeScript and React source

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
