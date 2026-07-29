import Link from "next/link";
import {
  type CaseMetric,
  type CaseStudy,
  type SourceLink,
  proofMetrics,
} from "@/lib/content";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  meta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string;
}) {
  return (
    <header className="page-intro site-shell">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p className="page-lede">{description}</p>
      {meta ? <p className="page-meta">{meta}</p> : null}
    </header>
  );
}

export function ProofStrip({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "proof-strip proof-strip-compact" : "proof-strip"}>
      {proofMetrics.map((item) => (
        <a
          className="proof-cell"
          href={item.href}
          key={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${item.label}: ${item.value}, 공개 원문 새 창에서 열기`}
        >
          <span className="proof-value">{item.value}</span>
          <span className="proof-label">{item.label}</span>
          <span className="proof-detail">
            {item.detail} <span aria-hidden="true">↗</span>
          </span>
        </a>
      ))}
    </div>
  );
}

export function CaseRow({ item }: { item: CaseStudy }) {
  return (
    <article className="case-row">
      <div className="case-index" aria-hidden="true">
        {item.index}
      </div>
      <div className="case-main">
        <p className="case-category">{item.category}</p>
        <h3>
          <Link href={`/work/${item.slug}`}>{item.title}</Link>
        </h3>
        <p>{item.summary}</p>
        <ul className="tag-list" aria-label="관련 기술과 주제">
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <Link
        className="case-link"
        href={`/work/${item.slug}`}
        aria-label={`${item.title} 사례 읽기`}
      >
        Read case <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export function MetricGrid({ metrics }: { metrics: CaseMetric[] }) {
  return (
    <dl className="metric-grid">
      {metrics.map((metric) => (
        <div className="metric-item" key={`${metric.value}-${metric.label}`}>
          <dt>{metric.label}</dt>
          <dd>{metric.value}</dd>
          <p>{metric.context}</p>
        </div>
      ))}
    </dl>
  );
}

export function SourceList({
  sources,
  title = "원문에서 확인하기",
}: {
  sources: SourceLink[];
  title?: string;
}) {
  if (sources.length === 0) {
    return (
      <div className="source-panel source-panel-private">
        <p className="source-title">측정 맥락</p>
        <p>
          회사 공개 범위가 확인된 집계만 사용했습니다. 원시 운영 화면,
          고객 데이터와 내부 링크는 공개하지 않습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="source-panel">
      <p className="source-title">{title}</p>
      <ul>
        {sources.map((source) => (
          <li key={source.href}>
            <SmartLink href={source.href}>
              {source.label} <span aria-hidden="true">↗</span>
            </SmartLink>
            {source.note ? <span>{source.note}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SmartLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export function BoundaryNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="boundary-note" aria-label="이 경험의 경계">
      <p className="boundary-kicker">BOUNDARY / CLAIM CHECK</p>
      <p>{children}</p>
    </aside>
  );
}

export function LayerDiagram() {
  const layers = [
    ["Web", "React / TypeScript · Flutter Web"],
    ["Cross-platform", "Flutter · React Native"],
    ["Native integration", "Platform Channel · WebView"],
    ["Native", "Kotlin · Swift / SPM"],
    ["Operation", "빌드·배포 자동화 · 사용 흐름 관측 · 오류 추적"],
  ];

  return (
    <figure className="layer-diagram">
      <figcaption>앱과 웹에서 다룬 기술 범위</figcaption>
      <div className="layer-stack">
        {layers.map(([label, value], index) => (
          <div className="layer-row" key={label}>
            <span className="layer-number">0{index + 1}</span>
            <span className="layer-label">{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <p>
        화면 구현부터 네이티브 연동, 배포와 운영 중 오류 확인까지 직접
        다뤘습니다.
      </p>
    </figure>
  );
}

export function IdentityArtifact() {
  return (
    <figure
      className="identity-artifact"
      aria-labelledby="identity-artifact-title"
    >
      <div className="identity-artifact__header">
        <figcaption id="identity-artifact-title">
          통합 고객 식별 흐름
        </figcaption>
        <span>31,124명 연결</span>
      </div>
      <div className="identity-map">
        <div className="identity-sources" aria-label="연결 전 고객 정보">
          <div className="identity-source">
            <span>01</span>
            <strong>온라인 계정</strong>
            <small>앱 회원 정보</small>
          </div>
          <div className="identity-source">
            <span>02</span>
            <strong>매장 고객</strong>
            <small>매장 방문·거래 정보</small>
          </div>
        </div>
        <div className="identity-seam">
          <span>연결 기준</span>
          <strong>본인인증 · 동의</strong>
        </div>
        <div className="identity-result">
          <span>연결 결과</span>
          <strong>31,124명</strong>
          <p>통합 고객 식별</p>
        </div>
        <ul className="identity-outcomes" aria-label="연결 후 제공한 기능">
          <li>
            <strong>고객 필터·알림</strong>
          </li>
          <li>
            <strong>QR</strong>
          </li>
          <li>
            <strong>주문 이력</strong>
          </li>
        </ul>
      </div>
      <aside
        className="identity-artifact__note"
        aria-label="운영 중 확인한 공백"
      >
        <p>
          <strong>운영 중 확인한 공백 · 레거시 약 20만 계정</strong>
          <br />
          통합 고객 식별에서 빠진 계정군을 발견해 조치했습니다.
        </p>
        <p>개념도이며 실제 고객 분포와 무관합니다.</p>
      </aside>
    </figure>
  );
}

export const BoundaryFlow = IdentityArtifact;

export function HumanAIContract() {
  return (
    <div className="human-ai-contract">
      <div>
        <p className="contract-label">AI로 한 일</p>
        <ul>
          <li>SDK 코드 탐색</li>
          <li>첫 구현안 작성</li>
          <li>테스트·문서 초안</li>
        </ul>
      </div>
      <div>
        <p className="contract-label">직접 판단한 일</p>
        <ul>
          <li>문제 가설과 수정 범위</li>
          <li>코드 리뷰와 병합 여부</li>
          <li>정식 배포와 운영 확인</li>
        </ul>
      </div>
      <div>
        <p className="contract-label">검증한 항목</p>
        <ul>
          <li>쿼리 테스트 5개</li>
          <li>CI 검사 11개</li>
          <li>메인테이너 리뷰</li>
          <li>iOS·Android 사용 흐름 관측</li>
        </ul>
      </div>
    </div>
  );
}
