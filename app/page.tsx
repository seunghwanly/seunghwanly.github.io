import type { Metadata } from "next";
import Link from "next/link";
import {
  CaseRow,
  Eyebrow,
  HumanAIContract,
  IdentityArtifact,
  LayerDiagram,
  ProofStrip,
} from "@/components/content-ui";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Product Engineer · Mobile & Frontend",
  description:
    "Flutter 앱과 React 웹을 만들고, Kotlin·Swift 연동부터 빌드·배포 자동화와 운영 중 오류 추적까지 맡아 온 Product Engineer 이승환의 대표 작업.",
};

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "이승환",
    alternateName: "Seunghwan Lee",
    jobTitle: "Product Engineer — Mobile & Frontend",
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
          <div className="availability-line">
            <span className="status-dot" aria-hidden="true" />
            <span>2026년 12월부터 근무 가능</span>
          </div>
          <Eyebrow>PRODUCT ENGINEER · MOBILE &amp; FRONTEND</Eyebrow>
          <h1 id="hero-title">
            모바일과 웹을 오가며
            <br />
            <span>제품을 만들고 운영했습니다.</span>
          </h1>
          <p className="hero-lede">
            Flutter 앱과 React 웹을 함께 운영했습니다. 여러 브랜드 앱과 웹에
            흩어져 있던 예약 화면은 공용 웹으로 통합했습니다. 필요할 때는
            Kotlin·Swift 코드까지 내려가 문제를 고쳤습니다. 배포 뒤에는 사용
            흐름과 오류를 확인했습니다. AI는 코드 탐색과 초안 작성에 활용하되
            최종 판단과 검증은 제가 맡습니다.
          </p>
          <div className="hero-stack" aria-label="핵심 기술">
            Flutter / Dart <span>·</span> React / TypeScript <span>·</span>{" "}
            Kotlin / Swift 연동 <span>·</span> 사용 흐름 관측 <span>·</span>{" "}
            빌드·배포 자동화
          </div>
          <div className="hero-actions">
            <Link className="button button-primary" href="/work">
              대표 작업 보기 <span aria-hidden="true">→</span>
            </Link>
            <a className="button button-secondary" href="/resume.pdf">
              이력서 PDF <span aria-hidden="true">↗</span>
            </a>
            <Link className="button button-quiet" href="/ask">
              질문으로 탐색
            </Link>
          </div>
        </div>
        <LayerDiagram />
      </section>

      <section className="proof-section site-shell" aria-labelledby="proof-title">
        <div className="section-heading inline-heading">
          <div>
            <Eyebrow>PUBLIC PROOF · CLICK TO VERIFY</Eyebrow>
            <h2 id="proof-title">공개 기록과 결과물</h2>
          </div>
          <Link className="text-link" href="/proof">
            전체 공개 근거 <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ProofStrip />
      </section>

      <section className="fit-section">
        <div className="site-shell fit-grid">
          <div className="section-heading">
            <Eyebrow>EXPERIENCE MAP</Eyebrow>
            <h2>주로 맡아 온 일</h2>
            <p>
              온라인 계정과 매장 고객을 연결했고 앱·웹에 나뉘어 있던 예약
              상세는 공용 화면으로 합쳤습니다. 같은 기능은 Android·iOS·Web에
              맞춰 구현했습니다. 출시 뒤에는 사용 흐름과 오류를 확인해 문제를
              고쳤습니다.
            </p>
          </div>
          <ol className="fit-list">
            <li>
              <span>01 / DOMAIN</span>
              <strong>고객과 매장이 보는 예약 흐름을 하나로</strong>
              <p>본인인증과 동의, 공용 예약 상세, 상태·권한·앱 연동 계약을 설계</p>
            </li>
            <li>
              <span>02 / PLATFORM</span>
              <strong>같은 기능을 Android·iOS·Web에 제공</strong>
              <p>Dart API, Kotlin·Swift 어댑터, 기능 지원 범위를 관리</p>
            </li>
            <li>
              <span>03 / RELIABILITY</span>
              <strong>운영 중 발견한 문제를 원인까지 추적</strong>
              <p>사용 흐름 관측, 재현 테스트, 외부 리뷰와 정식 배포</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="work-preview site-shell" aria-labelledby="work-title">
        <div className="section-heading inline-heading">
          <div>
            <Eyebrow>SELECTED WORK · TRACE THE DECISION</Eyebrow>
            <h2 id="work-title">대표 작업</h2>
          </div>
          <p>문제 · 결정 · 구현 · 검증</p>
        </div>
        <div className="case-list">
          {caseStudies.map((item) => (
            <CaseRow item={item} key={item.slug} />
          ))}
        </div>
      </section>

      <section className="boundary-section site-shell">
        <IdentityArtifact />
        <div className="boundary-copy">
          <Eyebrow>CASE 01 · CONNECTED COMMERCE</Eyebrow>
          <h2>온라인 계정과 매장 고객을 연결했습니다.</h2>
          <p>
            본인인증과 동의를 연결 기준으로 삼았습니다. 연결을 마친 사용자는
            31,124명이었습니다. 매장에서는 고객 필터·알림, QR, 주문 이력을
            하나의 고객 정보에서 확인할 수 있게 됐습니다. 운영 중에는 연결에서
            빠진 레거시 약 20만 계정을 찾아 조치했습니다.
          </p>
          <p>
            2026년 7월에는 4개 브랜드 앱·웹의 예약 상세를 공용 웹으로
            통합했습니다. 고객 화면과 매장 운영 화면이 같은 내용을 보도록
            맞췄습니다. 앱 연동 계약과 딥링크, WebView 동작을 정리한 뒤 운영
            환경에 반영하고 Winc 앱 업데이트까지 마쳤습니다.
          </p>
          <Link className="text-link" href="/work/connected-commerce">
            O2O 사례 읽기 <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="ai-preview">
        <div className="site-shell">
          <div className="section-heading inline-heading">
            <div>
              <Eyebrow>AI PRACTICE</Eyebrow>
              <h2>AI를 개발 과정에 이렇게 사용했습니다.</h2>
            </div>
            <Link className="text-link" href="/ai-practice">
              AI Practice <span aria-hidden="true">→</span>
            </Link>
          </div>
          <HumanAIContract />
        </div>
      </section>

      <section className="ask-preview site-shell" aria-labelledby="ask-title">
        <div>
          <Eyebrow>ASK THE PORTFOLIO</Eyebrow>
          <h2 id="ask-title">궁금한 내용을 질문으로 찾아보세요.</h2>
          <p>
            경력, 기술, 프로젝트별로 사이트 안의 내용을 빠르게 찾을 수
            있습니다.
          </p>
        </div>
        <div className="ask-preview-links">
          <Link href="/ask?question=fit">가장 맞는 경험은?</Link>
          <Link href="/ask?question=payment">결제·POS 경험은 어디까지?</Link>
          <Link href="/ask?question=ai">AI를 어떻게 검증했나?</Link>
          <Link className="button button-primary" href="/ask">
            Ask 열기 <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
