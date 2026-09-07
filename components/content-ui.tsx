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

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function caseHref(item: Pick<CaseStudy, "id">) {
  return `/works/${item.id}`;
}

/** Figma draws every block 640px wide and stacks them with a 24px gutter. */
export const column = "w-full max-w-(--container-card)";
export const stack = "flex flex-col gap-6";

export function Screen({
  children,
  centered = false,
  flush = false,
  edge = false,
  className,
}: {
  children: React.ReactNode;
  centered?: boolean;
  /** Drop the top padding so a child can be exactly one viewport tall. */
  flush?: boolean;
  /**
   * Use Figma's page gutter instead of the centred 1180px measure, for screens
   * that park something against the frame edge while centring the content.
   */
  edge?: boolean;
  className?: string;
}) {
  return (
    <main
      className={cx(
        edge ? "page-edge" : "site-shell",
        "flex min-h-dvh flex-col pb-(--gnb-clearance)",
        centered && "justify-center py-16",
        !centered && !flush && (edge ? "pt-12" : "pt-12 md:pt-16"),
        className,
      )}
      id="main-content"
    >
      {children}
    </main>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      className="inline-flex items-center gap-2 self-start rounded-(--radius-card) border-2 border-glass-line bg-[rgb(239_239_239/20%)] px-6 py-3 text-section text-ink no-underline backdrop-blur-[16px] transition-opacity duration-200 ease-soft hover:opacity-75 md:px-8 md:py-4"
      href={href}
    >
      <span aria-hidden="true">↩</span>
      {label}
    </Link>
  );
}

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cx("glass p-6 md:p-8", className)}>{children}</div>;
}

const signColors = [
  "bg-sign-1",
  "bg-sign-2",
  "bg-sign-3",
  "bg-sign-4",
] as const;

function Sign({ index }: { index: number }) {
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

function Bullets({ items }: { items: string[] }) {
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
      {section.paragraphs && <Paragraphs items={section.paragraphs} />}
      {section.bullets && <Bullets items={section.bullets} />}
    </SectionCard>
  );
}

export function WorkCard({ item }: { item: CaseStudy }) {
  return (
    <Link
      aria-label={`${item.title} ${ui.caseLinkAriaSuffix}`}
      className="glass-card block px-6 pt-6 pb-3 no-underline transition-transform duration-300 ease-soft hover:-translate-y-0.5 md:px-8 md:pt-8 md:pb-4"
      href={caseHref(item)}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 md:h-12">
          <h2 className="min-w-0 flex-1 text-section font-semibold text-ink">
            {item.title}
          </h2>
          <span
            aria-hidden="true"
            className="size-10 shrink-0 rounded-full glass-badge"
          />
        </div>

        <p className="text-summary text-ink-soft">{item.summary}</p>

        <ul
          aria-label={ui.tagListAriaLabel}
          className="mt-1 flex list-none flex-wrap gap-2"
        >
          {item.tags.map((tag) => (
            <li
              className="rounded-2xl border border-glass-line bg-[rgb(239_239_239/80%)] px-3 py-2 font-mono text-tag text-black"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

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
