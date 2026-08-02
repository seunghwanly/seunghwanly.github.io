import type { Metadata } from "next";
import Link from "next/link";
import {
  ButtonGroup,
  ButtonLink,
  CaseRow,
  Eyebrow,
  LayerDiagram,
  ProofStrip,
} from "@/components/content-ui";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Product Engineer · Mobile & Web",
  description:
    "Flutter 앱과 React 웹을 만들고, 제품 API와 Kotlin·Swift 연동부터 빌드·배포 자동화와 운영 중 오류 추적까지 맡아 온 Product Engineer 이승환의 대표 작업.",
};

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "이승환",
    alternateName: "Seunghwan Lee",
    jobTitle: "Product Engineer — Mobile & Web",
    email: "mailto:seunghwanly@gmail.com",
    sameAs: [
      "https://github.com/seunghwanly",
      "https://medium.com/@seunghwanly",
      "https://www.linkedin.com/in/seunghwanly",
    ],
    knowsAbout: [
      "Flutter",
      "React",
      "TypeScript",
      "Kotlin",
      "Swift",
      "REST API design",
      "FastAPI",
      "Client SDK",
      "Mobile observability",
      "Design systems",
      "AI-assisted software delivery",
    ],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="hero site-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Eyebrow>Product Engineer ⋅ Mobile &amp; Web</Eyebrow>
          <h1 id="hero-title">
            모바일과 웹을 오가며
            <br />
            <span>제품을 만들고 운영했습니다.</span>
          </h1>
          <p className="hero-lede">
            Flutter로 모바일 개발을 시작했고, 비즈니스 요구에 맞춰 React
            웹까지 영역을 넓혔습니다. 여러 브랜드의 예약 화면을 공용 웹으로
            합치면서 예약 상태 API도 직접 설계·구현했습니다. 필요하면
            Kotlin·Swift 연동과 배포 자동화까지 다룹니다. AI는 탐색과 초안에
            활용하고 결과는 테스트와 리뷰로 확인합니다.
          </p>
          <ButtonGroup className="hero-actions" stackOnMobile>
            <ButtonLink href="/work" variant="primary" trailing="arrow">
              대표 작업 보기
            </ButtonLink>
            <ButtonLink href="/resume.pdf" variant="secondary" trailing="external">
              이력서 보기
            </ButtonLink>
          </ButtonGroup>
        </div>
        <LayerDiagram />
      </section>

      <section className="proof-section site-shell" aria-labelledby="proof-title">
        <div className="section-heading inline-heading">
          <div>
            <Eyebrow>작업 기록</Eyebrow>
            <h2 id="proof-title">직접 확인할 수 있는 기록</h2>
          </div>
          <Link className="text-link" href="/proof">
            확인하기 <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ProofStrip />
      </section>

      <section className="work-preview site-shell" aria-labelledby="work-title">
        <div className="section-heading inline-heading">
          <div>
            <h2 id="work-title">대표 작업</h2>
          </div>
          <p>맡은 일 · 선택한 방법 · 결과</p>
        </div>
        <div className="case-list">
          {caseStudies.map((item) => (
            <CaseRow item={item} key={item.slug} />
          ))}
        </div>
      </section>

      <section className="page-cta site-shell" aria-labelledby="home-cta-title">
        <div>
          <Eyebrow>이력서와 연락처</Eyebrow>
          <h2 id="home-cta-title">더 자세한 경력은 이력서에서 확인할 수 있습니다.</h2>
        </div>
        <ButtonGroup>
          <ButtonLink href="/resume.pdf" variant="primary" trailing="external">
            이력서 보기
          </ButtonLink>
          <ButtonLink href="mailto:seunghwanly@gmail.com" variant="secondary">
            이메일 보내기
          </ButtonLink>
        </ButtonGroup>
      </section>
    </main>
  );
}
