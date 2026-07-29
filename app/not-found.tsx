import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found site-shell" id="main-content">
      <p className="eyebrow">TRACE LOST · 404</p>
      <h1>이 경로에는 아직 기록이 없습니다.</h1>
      <p>대표 작업으로 돌아가거나 공개 문서 안에서 질문으로 찾아보세요.</p>
      <div>
        <Link className="button button-primary" href="/work">
          Work로 돌아가기
        </Link>
        <Link className="button button-secondary" href="/ask">
          Ask 열기
        </Link>
      </div>
    </main>
  );
}

