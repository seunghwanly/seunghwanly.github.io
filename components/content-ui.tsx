import Link from "next/link";
import {
  caseDetail,
  humanAiContract,
  identityFlow,
  layerDiagram,
  proofMetrics,
  ui,
} from "@/lib/content";
import type {
  CaseDiagramKind,
  CaseMetric,
  CaseStudy,
  SourceLink,
} from "@/lib/schema.dto";

export function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

/** Public URL of a case study. Ids are short and stable: `/works/1`. */
export function caseHref(item: Pick<CaseStudy, "id">) {
  return `/works/${item.id}`;
}

/**
 * Renders `emphasis` — a substring of `title` — inside a `<span>` so the
 * caller can style it. Keeps the copy in `content.ts` as plain text.
 */
export function withEmphasis(title: string, emphasis?: string) {
  if (!emphasis) return title;
  const [before, ...rest] = title.split(emphasis);
  if (rest.length === 0) return title;
  return (
    <>
      {before}
      <span>{emphasis}</span>
      {rest.join(emphasis)}
    </>
  );
}

/** The same id, zero padded for display: `01`. */
export function caseNumber(item: Pick<CaseStudy, "id">) {
  return item.id.padStart(2, "0");
}

/*
 * Shared layout recipes
 * ---------------------
 * The handful of Tailwind strings that would otherwise be retyped on every
 * page. Edit one of these and every page follows.
 */

/** Vertical rhythm for a top-level section. */
export const sectionPadding = "py-[clamp(4.5rem,8vw,6.5rem)]";

/** Label column + content column. The one row shape the whole site uses. */
export const rowGrid =
  "grid gap-x-8 gap-y-1.5 md:grid-cols-[200px_minmax(0,1fr)]";

/** Small mono text for the label column of a row. */
export const rowLabel = "font-mono text-label tabular-nums text-accent-soft";

/** A stack of rows closed by hairlines on both ends. */
export const rowList = "border-t border-line-strong";
export const rowDivider = "border-b border-line-strong";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-label tracking-[0.13em] tabular-nums uppercase text-accent-soft">
      {children}
    </p>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <SmartLink
      href={href}
      className={cx(
        "inline-flex min-h-11 items-center gap-2 font-mono text-label tabular-nums text-accent-soft no-underline transition-colors duration-200 ease-soft hover:text-accent-strong",
        className,
      )}
    >
      {children}
    </SmartLink>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  aside,
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  const heading = (
    <div className="max-w-[60ch]">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-heading" id={id}>
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-body text-muted">{description}</p>
      ) : null}
    </div>
  );

  if (!aside) {
    return <div className="mb-11">{heading}</div>;
  }

  return (
    <div className="mb-11 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-8">
      {heading}
      {aside}
    </div>
  );
}

export function Section({
  children,
  className,
  divider = false,
  labelledBy,
  ariaLabel,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  divider?: boolean;
  labelledBy?: string;
  ariaLabel?: string;
  id?: string;
}) {
  return (
    <section
      aria-label={ariaLabel}
      aria-labelledby={labelledBy}
      className={cx(
        "site-shell",
        sectionPadding,
        divider && "border-t border-line",
        className,
      )}
      id={id}
    >
      {children}
    </section>
  );
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
    <header className="site-shell border-b border-line pt-[clamp(6rem,11vw,9.5rem)] pb-[clamp(4.5rem,8vw,6.5rem)]">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h1 className="max-w-[900px] text-display">{title}</h1>
      <p className="mt-7 max-w-[60ch] text-lede text-ink-soft">{description}</p>
      {meta ? (
        <p className="mt-7 font-mono text-label tabular-nums text-muted-dark">
          {meta}
        </p>
      ) : null}
    </header>
  );
}

export function PageCta({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      aria-labelledby={id}
      className={cx(
        "site-shell flex flex-col items-start justify-between gap-8 border-t border-line print:hidden md:flex-row md:items-end md:gap-12",
        sectionPadding,
      )}
    >
      <div>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="max-w-[720px] text-heading" id={id}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export function DefinitionList({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <dl aria-label={ariaLabel} className={rowList}>
      {children}
    </dl>
  );
}

export function DefinitionRow({
  term,
  children,
}: {
  term: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={cx(rowGrid, rowDivider, "py-5")}>
      <dt className="text-subtitle text-ink">{term}</dt>
      <dd className="min-w-0 text-body text-ink-soft">{children}</dd>
    </div>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul aria-label={ui.tagListAriaLabel} className="flex flex-wrap">
      {tags.map((tag, index) => (
        <li
          className="font-mono text-label tracking-normal tabular-nums text-muted"
          key={tag}
        >
          {index > 0 ? (
            <span aria-hidden="true" className="mx-2 text-line-strong">
              ·
            </span>
          ) : null}
          {tag}
        </li>
      ))}
    </ul>
  );
}

/** Decorative highlight that fades in when its group is hovered or focused. */
function HoverWash({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "surface-wash pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-200 ease-soft group-hover:opacity-100 group-focus-within:opacity-100",
        className,
      )}
    />
  );
}

export function ProofStrip() {
  return (
    <div className="grid gap-3 xs:grid-cols-2 md:grid-cols-3">
      {proofMetrics.map((item, index) => (
        <a
          aria-label={`${item.label}: ${item.value}, ${ui.proofStrip.opensNewTab}`}
          className="surface group relative z-0 flex min-h-[190px] flex-col p-6 pt-8 no-underline transition duration-200 ease-soft hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift focus-visible:-translate-y-0.5 focus-visible:border-accent/40 focus-visible:shadow-lift"
          href={item.href}
          key={item.href}
          rel="noreferrer"
          target="_blank"
        >
          <HoverWash />
          <span
            aria-hidden="true"
            className="absolute inset-x-4 -top-px h-[3px] rounded-b-[3px] bg-accent/40 transition-colors duration-200 ease-soft group-hover:bg-accent-soft"
          />
          <span
            aria-hidden="true"
            className="absolute top-5 right-5 font-mono text-label tabular-nums text-muted-dark"
          >
            {ui.proofStrip.counterLabel} / 0{index + 1}
          </span>
          <span className="mb-auto font-mono text-title tabular-nums break-all text-accent">
            {item.value}
          </span>
          <span className="mt-8 text-subtitle text-ink">{item.label}</span>
          <span className="mt-1.5 font-mono text-caption tabular-nums text-muted transition-colors duration-200 ease-soft group-hover:text-accent group-hover:underline group-hover:decoration-1 group-hover:underline-offset-[0.24em]">
            {item.detail} <span aria-hidden="true">↗</span>
          </span>
        </a>
      ))}
    </div>
  );
}

/**
 * A flat list row: hairlines above and below only, never on the sides. No
 * radius and no shadow, so a hovered row reads as a band rather than a
 * floating card, and its highlight fades out before it can show a side edge.
 */
export function CaseRow({ item }: { item: CaseStudy }) {
  return (
    <article className="group relative z-0 -mx-3 grid grid-cols-[34px_minmax(0,1fr)] items-start gap-4 border-b border-line-strong px-3 py-8 transition duration-200 ease-soft sm:grid-cols-[50px_minmax(0,1fr)] md:-mx-7 md:grid-cols-[70px_minmax(0,1fr)_140px] md:gap-7 md:px-7 md:py-10">
      <HoverWash className="mask-x-from-88%" />
      <p
        aria-hidden="true"
        className="font-mono text-label tabular-nums text-muted-dark"
      >
        {caseNumber(item)}
      </p>
      <div className="min-w-0">
        <p className="mb-3 font-mono text-label tabular-nums uppercase text-accent-soft">
          {item.category}
        </p>
        <h3 className="mb-3.5 max-w-[800px] text-title">
          <Link
            className="no-underline transition-colors duration-200 ease-soft hover:text-accent"
            href={caseHref(item)}
          >
            {item.title}
          </Link>
        </h3>
        <p className="mb-5 max-w-[820px] text-body text-muted">
          {item.summary}
        </p>
        <TagList tags={item.tags} />
      </div>
      <Link
        aria-label={`${item.title} ${ui.caseRow.linkAriaSuffix}`}
        className="col-start-2 inline-flex w-[150px] min-h-12 items-center justify-between self-start border-b border-line-strong font-mono text-label tabular-nums text-accent-soft no-underline transition-colors duration-200 ease-soft hover:border-accent-soft hover:text-accent-strong md:col-start-3 md:w-auto"
        href={caseHref(item)}
      >
        {ui.caseRow.linkLabel} <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export function MetricGrid({ metrics }: { metrics: CaseMetric[] }) {
  return (
    <dl className="mb-[74px] grid gap-3 md:grid-cols-3">
      {metrics.map((metric) => (
        <div
          className="surface flex min-h-[170px] flex-col p-5"
          key={`${metric.value}-${metric.label}`}
        >
          <dt className="text-caption text-muted">{metric.label}</dt>
          <dd className="mt-5 mb-auto font-mono text-metric tabular-nums text-accent">
            {metric.value}
          </dd>
          <p className="mt-4 text-caption text-muted-dark">{metric.context}</p>
        </div>
      ))}
    </dl>
  );
}

export function SourceList({
  sources,
  title = ui.sourceList.defaultTitle,
  className,
}: {
  sources: SourceLink[];
  title?: string;
  className?: string;
}) {
  if (sources.length === 0) {
    return (
      <div className={cx("surface p-6", className)}>
        <p className="mb-4 font-mono text-label tabular-nums uppercase text-accent-soft">
          {ui.sourceList.privateTitle}
        </p>
        <p className="text-caption text-muted">{ui.sourceList.privateBody}</p>
      </div>
    );
  }

  return (
    <div className={cx("surface p-6", className)}>
      <p className="mb-4 font-mono text-label tabular-nums uppercase text-accent-soft">
        {title}
      </p>
      <ul>
        {sources.map((source) => (
          <li
            className="grid gap-x-5 gap-y-1 border-t border-line py-3 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]"
            key={source.href}
          >
            <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <SmartLink className="text-subtitle text-ink" href={source.href}>
                {source.label} <span aria-hidden="true">↗</span>
              </SmartLink>
              {source.related?.map((related) => (
                <SmartLink
                  className="text-caption text-muted"
                  href={related.href}
                  key={related.href}
                >
                  {related.label} <span aria-hidden="true">↗</span>
                </SmartLink>
              ))}
            </span>
            {source.note ? (
              <span className="text-caption text-muted">{source.note}</span>
            ) : null}
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
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonTrailing = "arrow" | "external" | "none";

function buttonClassName(variant: ButtonVariant, className?: string) {
  return cx(
    "button",
    `button-${variant}`,
    variant !== "tertiary" && "glass",
    className,
  );
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
  const marker =
    trailing === "arrow" ? "→" : trailing === "external" ? "↗" : null;
  const content = (
    <>
      <span>{children}</span>
      {marker ? (
        <span aria-hidden="true" className="button__trailing">
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
      rel={opensNewTab ? "noreferrer" : undefined}
      target={opensNewTab ? "_blank" : undefined}
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
      aria-label={ariaLabel}
      className={buttonClassName(
        variant,
        cx(
          "cursor-pointer list-none [&::-webkit-details-marker]:hidden",
          className,
        ),
      )}
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
  return (
    <div
      aria-label={ariaLabel}
      className={cx(
        "flex flex-wrap gap-3",
        stackOnMobile &&
          "max-xs:grid max-xs:grid-cols-1 max-xs:[&>.button]:w-full",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BoundaryNote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside
      aria-label={ui.boundaryNote.label}
      className={cx("surface border-l-[3px] border-l-warn p-6", className)}
    >
      <p className="mb-3 font-mono text-label tabular-nums text-warn">
        {ui.boundaryNote.label}
      </p>
      <p className="text-body text-ink-soft">{children}</p>
    </aside>
  );
}

export function LayerDiagram() {
  return (
    <figure className="self-center border-l border-line-strong pl-[18px] md:pl-[22px]">
      <div className="flex items-center justify-between gap-4 border-b border-line-strong pb-4">
        <figcaption className="font-mono text-label tabular-nums uppercase text-muted">
          {layerDiagram.caption}
        </figcaption>
        <span
          aria-hidden="true"
          className="font-mono text-label tabular-nums text-accent-soft"
        >
          {layerDiagram.count}
        </span>
      </div>
      <div>
        {layerDiagram.layers.map((layer, index) => (
          <div
            className="relative grid min-h-[62px] grid-cols-[28px_minmax(0,1fr)] items-center gap-3.5 py-2.5 md:grid-cols-[34px_minmax(0,1fr)]"
            key={layer.label}
          >
            <span
              aria-hidden="true"
              className="absolute -left-[22px] top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full border-2 border-accent-soft bg-canvas md:-left-[26px]"
            />
            <span className="font-mono text-label tabular-nums text-muted-dark">
              0{index + 1}
            </span>
            <span>
              <span className="mb-0.5 block font-mono text-label tabular-nums text-accent-soft">
                {layer.label}
              </span>
              <strong className="block text-caption text-ink">
                {layer.detail}
              </strong>
            </span>
          </div>
        ))}
      </div>
      <p className="border-t border-line pt-4 text-caption text-muted">
        <span className="mb-1 block font-mono text-label tabular-nums text-accent-soft">
          {layerDiagram.noteLabel}
        </span>
        {layerDiagram.note}
      </p>
    </figure>
  );
}

/* ------------------------------------------------------------------ *
 * Case diagrams
 * ------------------------------------------------------------------ *
 * One visual vocabulary across every diagram, so a reader learns it once
 * and shape — not position — carries the meaning:
 *
 *   input   something that already existed   plain rectangle
 *   rule    the decision this work made      accent pill, or an accent
 *                                            barred box when it holds a list
 *   result  what came out of it              no box at all, sitting on a
 *                                            heavy accent rule
 */

const diagramRole = {
  input: "rounded-sm border border-line bg-white/55 p-3.5",
  rule: "rounded-sm border border-accent-soft/35 border-l-[3px] border-l-accent-soft bg-accent-soft/10 p-3.5",
  result: "border-t-2 border-accent pt-3",
} as const;

/** The frame every diagram shares: a caption bar over a body. */
function DiagramFrame({
  caption,
  captionId,
  children,
  footer,
}: {
  caption: string;
  captionId?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <figure
      aria-labelledby={captionId}
      className="surface surface-lift overflow-hidden rounded-lg"
    >
      <figcaption
        className="border-b border-line px-[18px] py-3.5 font-mono text-label tabular-nums uppercase text-muted md:px-[22px]"
        id={captionId}
      >
        {caption}
      </figcaption>
      <div className="px-[18px] py-5 md:px-[22px] md:py-6">{children}</div>
      {footer}
    </figure>
  );
}

/** Names one stage of a flow. */
function DiagramStage({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2.5 font-mono text-label tabular-nums text-muted-dark">
      {children}
    </p>
  );
}

/** Points right when the flow runs across, down when it stacks. */
function DiagramArrow() {
  return (
    <span
      aria-hidden="true"
      className="grid shrink-0 place-items-center font-mono text-caption text-muted-dark"
    >
      <span className="md:hidden">↓</span>
      <span className="hidden md:inline">→</span>
    </span>
  );
}

/** Something that already existed: a plain rectangle. */
function DiagramInput({ title, detail }: { title: string; detail?: string }) {
  return (
    <div
      className={cx(
        diagramRole.input,
        "flex min-h-[72px] flex-col justify-center",
      )}
    >
      <strong className="text-subtitle text-ink">{title}</strong>
      {detail ? (
        <span className="mt-1 text-caption text-muted">{detail}</span>
      ) : null}
    </div>
  );
}

/** The decision the work made: a pill, so it never reads as another box. */
function DiagramRule({ title, detail }: { title: string; detail?: string }) {
  return (
    <div className="flex min-h-[72px] flex-col justify-center rounded-full border border-accent-soft/35 bg-accent-soft/10 px-5 py-3 text-center">
      <strong className="text-subtitle text-accent">{title}</strong>
      {detail ? (
        <span className="mt-0.5 text-caption text-muted">{detail}</span>
      ) : null}
    </div>
  );
}

/** What came out: the value itself, over a rule, never inside a box. */
function DiagramResult({
  value,
  machineValue,
  detail,
  numeric = true,
}: {
  value: string;
  machineValue?: string;
  detail?: string;
  numeric?: boolean;
}) {
  const body = numeric ? (
    <data
      className="block font-mono text-metric tabular-nums whitespace-nowrap text-ink"
      value={machineValue}
    >
      {value}
    </data>
  ) : (
    <strong className="block font-mono text-subtitle tabular-nums text-accent">
      {value}
    </strong>
  );

  return (
    <div className={cx(diagramRole.result, "min-h-[72px]")}>
      {body}
      {detail ? (
        <span className="mt-1.5 block text-caption text-muted">{detail}</span>
      ) : null}
    </div>
  );
}

/** Two customer records meet a consent rule and leave as one identity. */
function IdentityDiagram() {
  return (
    <DiagramFrame
      caption={identityFlow.caption}
      captionId="identity-diagram-title"
      footer={
        <aside
          aria-label={identityFlow.note.ariaLabel}
          className="flex flex-col items-start justify-between gap-3.5 border-t border-line px-[18px] py-4 md:flex-row md:items-end md:gap-8 md:px-[22px]"
        >
          <p className="max-w-[52ch] text-caption text-muted">
            <strong className="text-subtitle text-warn">
              {identityFlow.note.title}
            </strong>
            <br />
            {identityFlow.note.body}
          </p>
          <p className="shrink-0 text-caption text-muted-dark">
            {identityFlow.note.disclaimer}
          </p>
        </aside>
      }
    >
      <div className="grid items-center gap-3 md:grid-cols-[minmax(0,1fr)_24px_minmax(0,0.9fr)_24px_minmax(0,0.9fr)]">
        <div>
          <DiagramStage>{identityFlow.before.step}</DiagramStage>
          <ul
            aria-label={identityFlow.before.listAriaLabel}
            className="grid gap-2"
          >
            {identityFlow.before.sources.map((source) => (
              <li key={source.label}>
                <DiagramInput detail={source.detail} title={source.label} />
              </li>
            ))}
          </ul>
        </div>

        <DiagramArrow />

        <div>
          <DiagramStage>{identityFlow.gate.step}</DiagramStage>
          <DiagramRule
            detail={identityFlow.gate.detail}
            title={identityFlow.gate.title}
          />
        </div>

        <DiagramArrow />

        <div>
          <DiagramStage>{identityFlow.result.step}</DiagramStage>
          <DiagramResult
            detail={identityFlow.result.detail}
            machineValue={identityFlow.result.machineValue}
            value={identityFlow.result.title}
          />
        </div>
      </div>

      <div className="mt-5 border-t border-line pt-4">
        <DiagramStage>{identityFlow.after.step}</DiagramStage>
        <p className="text-caption text-muted">
          {identityFlow.after.description}
        </p>
        <ul
          aria-label={identityFlow.after.listAriaLabel}
          className="mt-2.5 grid gap-2 xs:grid-cols-3"
        >
          {identityFlow.after.features.map((feature) => (
            <li
              className="grid min-h-[46px] place-items-center rounded-sm border border-line bg-white/55 p-2 text-center text-caption font-semibold text-ink"
              key={feature}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </DiagramFrame>
  );
}

/** One shared codebase fanning out to three platforms. */
function PlatformsDiagram() {
  const diagram = caseDetail.sdkDiagram;

  return (
    <DiagramFrame caption={diagram.caption}>
      <div className="grid items-center gap-3 md:grid-cols-[minmax(0,0.9fr)_24px_minmax(0,1.5fr)]">
        <DiagramInput title={diagram.contract} />
        <DiagramArrow />
        <ul className="grid gap-3 sm:grid-cols-3">
          {diagram.platforms.map((platform) => (
            <li key={platform.label}>
              <DiagramResult
                detail={platform.detail}
                numeric={false}
                value={platform.label}
              />
            </li>
          ))}
        </ul>
      </div>
      <p className="sr-only">{diagram.description}</p>
    </DiagramFrame>
  );
}

/** What AI drafted, what a person decided, and what the checks confirmed. */
function ContractDiagram() {
  const roles = [diagramRole.input, diagramRole.rule, diagramRole.result];

  return (
    <DiagramFrame caption={caseDetail.contractDiagram.caption}>
      <ol className="flex flex-col gap-2 md:flex-row md:items-stretch md:gap-2">
        {humanAiContract.map((column, index) => (
          <li
            className="flex flex-col gap-2 md:flex-1 md:flex-row md:items-center"
            key={column.label}
          >
            {index > 0 ? <DiagramArrow /> : null}
            <div className={cx(roles[index], "w-full")}>
              <div className="mb-2.5 flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="grid size-[22px] shrink-0 place-items-center rounded-full bg-accent-soft/12 font-mono text-label tabular-nums text-accent-soft"
                >
                  0{index + 1}
                </span>
                <p className="font-mono text-label tabular-nums uppercase text-accent-soft">
                  {column.label}
                </p>
              </div>
              <ul>
                {column.items.map((item) => (
                  <li
                    className="border-t border-line py-2 text-caption text-ink-soft"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </DiagramFrame>
  );
}

/** Design to implementation to review to release. */
function PreviewDiagram() {
  const diagram = caseDetail.previewDiagram;
  const lastIndex = diagram.steps.length - 1;

  return (
    <DiagramFrame caption={diagram.caption}>
      <ol className="flex flex-col gap-2 md:flex-row md:items-stretch">
        {diagram.steps.map((step, index) => (
          <li
            className="flex flex-col gap-2 md:flex-1 md:flex-row md:items-center"
            key={step.label}
          >
            {index > 0 ? <DiagramArrow /> : null}
            <div
              className={cx(
                index === lastIndex ? diagramRole.result : diagramRole.input,
                "flex min-h-[92px] w-full flex-col",
              )}
            >
              <span
                aria-hidden="true"
                className="font-mono text-label tabular-nums text-muted-dark"
              >
                0{index + 1}
              </span>
              <strong
                className={cx(
                  "mt-auto text-subtitle",
                  index === lastIndex ? "text-accent" : "text-ink",
                )}
              >
                {step.label}
              </strong>
              <span className="mt-1 text-caption text-muted">
                {step.detail}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </DiagramFrame>
  );
}

/** Picks the diagram a case study declares in `lib/content.ts`. */
export function CaseDiagram({ kind }: { kind: CaseDiagramKind }) {
  if (kind === "identity") {
    return <IdentityDiagram />;
  }

  if (kind === "platforms") {
    return <PlatformsDiagram />;
  }

  if (kind === "contract") {
    return <ContractDiagram />;
  }

  return <PreviewDiagram />;
}
