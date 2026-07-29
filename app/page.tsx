import type { Metadata } from "next";
import Link from "next/link";
import {
  BoundaryFlow,
  CaseRow,
  Eyebrow,
  HumanAIContract,
  LayerDiagram,
  ProofStrip,
} from "@/components/content-ui";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Product Engineer · Mobile & Frontend",
  description:
    "오프라인과 온라인, Native와 Web, 제품과 플랫폼의 경계를 잇는 Product Engineer 이승환의 대표 작업과 공개 근거.",
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
            <span>Open to the right client platform problem</span>
          </div>
          <Eyebrow>PRODUCT ENGINEER · MOBILE &amp; FRONTEND</Eyebrow>
          <h1 id="hero-title">
            제품의 경계를 잇고,
            <br />
            <span>지표로 신뢰를 만듭니다.</span>
          </h1>
          <p className="hero-lede">
            오프라인과 온라인, Native와 Web, 제품과 플랫폼의 경계를 다뤄
            왔습니다. AI로 탐색과 구현을 가속하되 테스트·리뷰·프로덕션
            관측을 통과한 결과만 제 성과로 남깁니다.
          </p>
          <div className="hero-stack" aria-label="핵심 기술">
            Flutter / Dart <span>·</span> React / TypeScript <span>·</span>{" "}
            Kotlin / Swift Bridge <span>·</span> RUM <span>·</span> CI/CD
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
            <h2 id="proof-title">숫자에서 원문까지 한 번에</h2>
          </div>
          <Link className="text-link" href="/proof">
            전체 공개 근거 <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ProofStrip />
        <p className="section-footnote">
          큰 숫자보다 클릭해서 확인할 수 있는 기록을 먼저 배치했습니다.
          활동량을 제품 성과로 해석하지 않습니다.
        </p>
      </section>

      <section className="fit-section">
        <div className="site-shell fit-grid">
          <div className="section-heading">
            <Eyebrow>TOSS PLACE · TRANSFERABLE FIT</Eyebrow>
            <h2>토스플레이스와 만나는 세 개의 축</h2>
            <p>
              지원 직무를 기술 이름으로만 맞추지 않습니다. 고객·사장님
              경험을 막는 경계, 플랫폼의 차이, 출시 뒤 신뢰를 만드는
              방식으로 연결합니다.
            </p>
          </div>
          <ol className="fit-list">
            <li>
              <span>01 / DOMAIN</span>
              <strong>온라인 계정 ↔ 매장 고객</strong>
              <p>본인인증·동의, 예약·주문 상태, 운영 예외</p>
            </li>
            <li>
              <span>02 / PLATFORM</span>
              <strong>Android ↔ iOS ↔ Web</strong>
              <p>Dart 계약, Kotlin·Swift adapter, 기능 매트릭스</p>
            </li>
            <li>
              <span>03 / RELIABILITY</span>
              <strong>운영 신호 ↔ upstream fix</strong>
              <p>RUM 재현, 테스트, 외부 리뷰, 정식 배포</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="work-preview site-shell" aria-labelledby="work-title">
        <div className="section-heading inline-heading">
          <div>
            <Eyebrow>SELECTED WORK · TRACE THE DECISION</Eyebrow>
            <h2 id="work-title">무엇을 소유했나</h2>
          </div>
          <p>문제 → 결정 → 구현 → 검증 → 경계</p>
        </div>
        <div className="case-list">
          {caseStudies.map((item) => (
            <CaseRow item={item} key={item.slug} />
          ))}
        </div>
      </section>

      <section className="boundary-section site-shell">
        <BoundaryFlow />
        <div className="boundary-copy">
          <Eyebrow>CASE 01 · THE HARD BOUNDARY</Eyebrow>
          <h2>되돌릴 수 있는 상태와 없는 상태를 구분합니다.</h2>
          <p>
            O2O 제품에서 고객 식별과 거래 상태는 화면 하나의 문제가
            아니었습니다. 신뢰 기준과 복구 비용을 먼저 정하고 앱·웹의
            구현을 그 경계에 맞췄습니다.
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
              <Eyebrow>AI PRACTICE · RESPONSIBILITY BEFORE SPEED</Eyebrow>
              <h2>AI가 한 일과 제가 책임진 일을 분리합니다.</h2>
            </div>
            <Link className="text-link" href="/ai-practice">
              AI Practice <span aria-hidden="true">→</span>
            </Link>
          </div>
          <HumanAIContract />
          <p className="contract-limitation">
            측정하지 않은 것 — AI 단독 기여도, 개발 속도 배수, 생산성
            향상률.
          </p>
        </div>
      </section>

      <section className="ask-preview site-shell" aria-labelledby="ask-title">
        <div>
          <Eyebrow>ASK · STATIC DOCUMENT RETRIEVAL</Eyebrow>
          <h2 id="ask-title">읽다가 생긴 질문으로 바로 들어오세요.</h2>
          <p>
            서버 AI나 실시간 RAG가 아닙니다. 이 사이트에 승인된 문장만
            찾아 보여 주며, 없는 답은 만들지 않습니다.
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
