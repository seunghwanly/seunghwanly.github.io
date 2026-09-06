import Image from "next/image";
import Link from "next/link";
import type {
  CaseMetric,
  CaseSection,
  CaseStudy,
  SourceLink,
  TechItem,
} from "@/lib/schema.dto";
import { ui } from "@/lib/content";

export function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function caseHref(item: Pick<CaseStudy, "id">) {
  return `/works/${item.id}`;
}

/**
 * Figma draws every block 640px wide on a 1440px frame and stacks them with
 * a 24px gutter. `column` is that measure; `stack` is that gutter.
 */
export const column = "w-full max-w-(--container-card)";
export const stack = "flex flex-col gap-6";

/* ================================================================== *
 * 화면 골격
 * ================================================================== */

/**
 * Every screen sits inside one of these. It reserves room for the floating
 * navigation and decides whether the content is parked in the middle of the
 * viewport (Intro, Me, 404) or flows from the top (Works, Resume).
 */
export function Screen({
  children,
  centered = false,
  flush = false,
  className,
}: {
  children: React.ReactNode;
  centered?: boolean;
  /**
   * Drop the top padding so a child can be exactly one viewport tall. Used by
   * screens whose first section is a full-height hero — otherwise the padding
   * pushes the section below it up under the floating navigation.
   */
  flush?: boolean;
  className?: string;
}) {
  return (
    <main
      className={cx(
        "site-shell flex min-h-dvh flex-col pb-(--gnb-clearance)",
        centered && "justify-center py-16",
        !centered && !flush && "pt-12 md:pt-16",
        className,
      )}
      id="main-content"
    >
      {children}
    </main>
  );
}

/**
 * The back affordance in the top-left of the Works screens. Figma pads it
 * 16/32 and gives it the same plate as a card, so it reads as a card that
 * happens to be a link.
 */
export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      className="glass inline-flex items-center gap-2 self-start px-6 py-3 text-section text-ink no-underline transition-opacity duration-200 ease-soft hover:opacity-75 md:px-8 md:py-4"
      href={href}
    >
      <span aria-hidden="true">↩</span>
      {label}
    </Link>
  );
}

/* ================================================================== *
 * 카드
 * ================================================================== */

/** The plate. Padding matches Figma's 32px, easing off on small screens. */
export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("glass p-6 md:p-8", className)}>{children}</div>
  );
}

/**
 * Marker beside a section title. The palette runs in the order sections
 * appear, so the same step keeps the same colour across every case study.
 */
const signColors = [
  "bg-sign-1",
  "bg-sign-2",
  "bg-sign-3",
  "bg-sign-4",
] as const;

export function Sign({ index }: { index: number }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "size-7 shrink-0 rounded-(--radius-sign) ring-2 ring-sign-ring md:size-7.5",
        signColors[index % signColors.length],
      )}
    />
  );
}

/**
 * A titled block inside a case study or the resume: coloured marker, title,
 * then either paragraphs or a bulleted list.
 */
export function SectionCard({
  index,
  label,
  children,
}: {
  index: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <GlassCard>
      <div className="mb-2 flex items-center gap-3">
        <Sign index={index} />
        <h2 className="text-section text-ink">{label}</h2>
      </div>
      {children}
    </GlassCard>
  );
}

export function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((text) => (
        <p className="text-body text-ink" key={text}>
          {text}
        </p>
      ))}
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex list-none flex-col gap-2">
      {items.map((text) => (
        <li className="flex gap-2.5 text-body text-ink" key={text}>
          <span aria-hidden="true" className="text-muted">
            ·
          </span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

/** Renders one case-study section, whichever shape its content takes. */
export function CaseSectionCard({
  index,
  section,
}: {
  index: number;
  section: CaseSection;
}) {
  return (
    <SectionCard index={index} label={section.label}>
      <p className="mb-3 text-lede text-ink">{section.title}</p>
      {section.paragraphs ? <Paragraphs items={section.paragraphs} /> : null}
      {section.bullets ? <Bullets items={section.bullets} /> : null}
    </SectionCard>
  );
}

/* ================================================================== *
 * 목록 조각
 * ================================================================== */

/** A card in the Works list: title, then the summary. Nothing else. */
export function WorkCard({ item }: { item: CaseStudy }) {
  return (
    <Link
      aria-label={`${item.title} ${ui.caseLinkAriaSuffix}`}
      className="glass block p-6 no-underline transition-transform duration-300 ease-soft hover:-translate-y-0.5 md:p-8"
      href={caseHref(item)}
    >
      <h2 className="mb-2 text-card text-ink">{item.title}</h2>
      <p className="text-lede text-ink">{item.summary}</p>
    </Link>
  );
}

/** The two icon cards on the Me screen. Figma sizes them 216×216. */
export function TechCard({ item }: { item: TechItem }) {
  return (
    <li className="glass flex size-40 flex-col items-center justify-center gap-4 md:size-54">
      <Image
        alt=""
        className="h-16 w-auto md:h-24"
        height={item.height}
        src={item.icon}
        width={item.width}
      />
      <span className="text-section text-ink-soft">{item.name}</span>
    </li>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul
      aria-label={ui.tagListAriaLabel}
      className="flex list-none flex-wrap gap-2"
    >
      {tags.map((tag) => (
        <li
          className="rounded-full border border-glass-line bg-white/45 px-3 py-1 text-body text-ink-soft"
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function MetricList({ metrics }: { metrics: CaseMetric[] }) {
  return (
    <ul className="flex list-none flex-col gap-4">
      {metrics.map((metric) => (
        <li key={metric.label}>
          <p className="text-section text-ink">{metric.value}</p>
          <p className="text-body text-ink-soft">{metric.label}</p>
          <p className="text-body text-muted">{metric.context}</p>
        </li>
      ))}
    </ul>
  );
}

export function SourceList({ sources }: { sources: SourceLink[] }) {
  return (
    <ul className="flex list-none flex-col gap-2">
      {sources.map((source) => (
        <li key={source.href}>
          <a
            className="text-body text-ink-soft transition-opacity duration-200 ease-soft hover:opacity-70"
            href={source.href}
            rel="noreferrer"
            target="_blank"
          >
            {source.label} <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** A small titled group used in the aside column and on the resume. */
export function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="break-inside-avoid">
      <p className="mb-1.5 text-body text-muted">{label}</p>
      {children}
    </div>
  );
}
