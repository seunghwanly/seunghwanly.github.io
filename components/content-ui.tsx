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
  eyebrow?: string;
  title: string;
  description: string;
  meta?: string;
}) {
  return (
    <header className="page-intro site-shell">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1>{title}</h1>
      <p className="page-lede">{description}</p>
      {meta && <p className="page-meta">{meta}</p>}
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
          aria-label={`${item.label}: ${item.value}, 관련 기록 새 창에서 열기`}
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
        aria-label={`${item.title} 확인하기`}
      >
        확인하기 <span aria-hidden="true">→</span>
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
  title = "확인 자료",
}: {
  sources: SourceLink[];
  title?: string;
}) {
  if (sources.length === 0) {
    return (
      <div className="source-panel source-panel-private">
        <p className="source-title">측정 기준</p>
        <p>
          공개해도 되는 집계만 사용했습니다. 운영 화면과 고객 데이터,
          내부 링크는 포함하지 않았습니다.
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
            {source.related?.map((related) => (
              <SmartLink href={related.href} key={related.href}>
                {related.label} <span aria-hidden="true">↗</span>
              </SmartLink>
            ))}
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

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonTrailing = "arrow" | "external" | "none";

function buttonClassName(variant: ButtonVariant, className?: string) {
  return ["button", `button-${variant}`, className]
    .filter(Boolean)
    .join(" ");
}

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  trailing = "none",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  trailing?: ButtonTrailing;
  className?: string;
}) {
  const classes = buttonClassName(variant, className);
  const marker = trailing === "arrow" ? "→" : trailing === "external" ? "↗" : null;
  const content = (
    <>
      <span>{children}</span>
      {marker ? (
        <span className="button__trailing" aria-hidden="true">
          {marker}
        </span>
      ) : null}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  const opensNewTab = /^https?:\/\//.test(href);

  return (
    <a
      className={classes}
      href={href}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

export function DisclosureTrigger({
  children,
  variant = "secondary",
  className,
  ariaLabel,
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel: string;
}) {
  return (
    <summary
      className={buttonClassName(variant, className)}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
    </summary>
  );
}

export function ButtonGroup({
  children,
  className,
  stackOnMobile = false,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  stackOnMobile?: boolean;
  ariaLabel?: string;
}) {
  const classes = [
    "button-group",
    stackOnMobile ? "button-group--stack-mobile" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} aria-label={ariaLabel}>
      {children}
    </div>
  );
}

export function BoundaryNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="boundary-note" aria-label="범위와 한계">
      <p className="boundary-kicker">범위와 한계</p>
      <p>{children}</p>
    </aside>
  );
}

export function LayerDiagram() {
  const layers = [
    ["웹", "React / TypeScript · Flutter Web"],
    ["멀티플랫폼", "Flutter · React Native"],
    ["네이티브 연동", "Platform Channel · WebView"],
    ["네이티브", "Kotlin · Swift / SPM"],
    ["배포·운영", "빌드·배포 자동화 · 사용 흐름 확인 · 오류 추적"],
  ];

  return (
    <figure className="layer-diagram">
      <div className="layer-diagram__header">
        <figcaption>앱과 웹에서 맡아 온 영역</figcaption>
        <span aria-hidden="true">5개 영역</span>
      </div>
      <div className="layer-stack">
        {layers.map(([label, value], index) => (
          <div className="layer-row" key={label}>
            <span className="layer-number">0{index + 1}</span>
            <div>
              <span className="layer-label">{label}</span>
              <strong>{value}</strong>
            </div>
          </div>
        ))}
      </div>
      <p className="layer-diagram__note">
        <span>처음부터 운영까지</span>
        화면 구현부터 네이티브 연동, 배포와 운영 중 오류 확인까지
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
      </div>
      <div className="identity-flow">
        <div className="identity-flow__inputs">
          <p className="identity-flow__step">01 · 연결 전</p>
          <ul
            className="identity-flow__source-grid"
            aria-label="연결 전 고객 정보"
          >
            <li className="identity-flow__source">
              <strong>온라인 계정</strong>
              <small>앱 회원 정보</small>
            </li>
            <li className="identity-flow__source">
              <strong>매장 고객</strong>
              <small>매장 방문·거래 정보</small>
            </li>
          </ul>
        </div>

        <div className="identity-flow__gate">
          <span className="identity-flow__step">02 · 연결 기준</span>
          <strong>본인인증과 동의</strong>
          <small>동일 고객임을 확인</small>
        </div>

        <span className="identity-flow__connector" aria-hidden="true" />

        <div className="identity-flow__result">
          <span className="identity-flow__step">03 · 연결 결과</span>
          <data value="188886">188,886명</data>
          <small>통합 고객으로 식별</small>
        </div>

        <span className="identity-flow__connector" aria-hidden="true" />

        <div className="identity-flow__features">
          <span className="identity-flow__step">04 · 연결 후</span>
          <p>매장에서 한 고객 정보로 확인</p>
          <ul aria-label="연결 후 제공한 기능">
            <li>고객 필터·알림</li>
            <li>QR</li>
            <li>주문 이력</li>
          </ul>
        </div>
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
      <div className="contract-card contract-card--assist">
        <div className="contract-head">
          <span>01</span>
          <p className="contract-label">AI가 도운 일</p>
        </div>
        <ul>
          <li>수정할 SDK 코드 탐색</li>
          <li>첫 수정안 작성</li>
          <li>테스트·문서 초안</li>
        </ul>
      </div>
      <div className="contract-card contract-card--decision">
        <div className="contract-head">
          <span>02</span>
          <p className="contract-label">제가 맡은 판단</p>
        </div>
        <ul>
          <li>문제 원인과 수정 범위</li>
          <li>외부 리뷰 대응</li>
          <li>제품 적용과 결과 확인</li>
        </ul>
      </div>
      <div className="contract-card contract-card--verify">
        <div className="contract-head">
          <span>03</span>
          <p className="contract-label">확인한 결과</p>
        </div>
        <ul>
          <li>쿼리 테스트 5개</li>
          <li>CI 검사 11개</li>
          <li>메인테이너 리뷰</li>
          <li>iOS·Android 데이터 수집</li>
        </ul>
      </div>
    </div>
  );
}
