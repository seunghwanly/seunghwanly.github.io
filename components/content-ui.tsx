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
    ["Bridge", "Platform Channel · WebView"],
    ["Native", "Kotlin · Swift / SPM"],
    ["Delivery", "CI/CD · RUM · Crash"],
  ];

  return (
    <figure className="layer-diagram">
      <figcaption>제가 다뤄 온 클라이언트 경계</figcaption>
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
        한 스택을 깊게 파되, 장애와 배포가 넘어가는 다음 경계까지
        추적합니다.
      </p>
    </figure>
  );
}

export function BoundaryFlow() {
  return (
    <figure className="boundary-flow">
      <figcaption>O2O identity → transaction boundary</figcaption>
      <div className="flow-grid" aria-hidden="true">
        <span className="flow-node">Online account</span>
        <span className="flow-link">＋</span>
        <span className="flow-node">Store customer</span>
        <span className="flow-down">↓</span>
        <span className="flow-node flow-node-accent">
          Verification + consent
        </span>
        <span className="flow-down">↓</span>
        <span className="flow-node">Cart</span>
        <span className="flow-link">→</span>
        <span className="flow-node flow-node-warning">Checkout / Order</span>
      </div>
      <p className="sr-only">
        온라인 계정과 매장 고객을 본인인증과 동의로 연결한 뒤, 되돌릴 수
        있는 장바구니와 되돌리기 어려운 결제·주문 경계를 분리했습니다.
      </p>
    </figure>
  );
}

export function HumanAIContract() {
  return (
    <div className="human-ai-contract">
      <div>
        <p className="contract-label">AI accelerated</p>
        <ul>
          <li>SDK layer 탐색</li>
          <li>최초 구현 초안</li>
          <li>테스트·문서 초안</li>
        </ul>
      </div>
      <div>
        <p className="contract-label">Human controlled</p>
        <ul>
          <li>문제 가설과 책임 경계</li>
          <li>수정 범위와 리뷰 판단</li>
          <li>정식 배포와 운영 검증</li>
        </ul>
      </div>
      <div>
        <p className="contract-label">Verification gates</p>
        <ul>
          <li>5 query tests</li>
          <li>11 CI checks</li>
          <li>Maintainer review</li>
          <li>iOS · Android RUM</li>
        </ul>
      </div>
    </div>
  );
}

