import { ButtonGroup, ButtonLink } from "@/components/content-ui";

export default function NotFound() {
  return (
    <main className="not-found site-shell" id="main-content">
      <p className="eyebrow">404</p>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>주소를 확인하거나 대표 작업으로 돌아가세요.</p>
      <ButtonGroup>
        <ButtonLink href="/work" variant="primary" trailing="arrow">
          대표 작업 보기
        </ButtonLink>
        <ButtonLink href="/" variant="secondary" trailing="arrow">
          홈으로
        </ButtonLink>
      </ButtonGroup>
    </main>
  );
}
