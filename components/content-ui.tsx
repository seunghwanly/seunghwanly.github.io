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
      className="pill inline-flex items-center gap-2 self-start px-6 py-3 text-section text-ink no-underline transition-opacity duration-200 ease-soft hover:opacity-75 md:px-8 md:py-4"
      href={href}
    >
      <span aria-hidden="true">↩</span>
      {label}
    </Link>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("card p-6 md:p-8", className)}>
      {children}
    </div>
  );
}

/**
 * The fills a block may take, in the order a sequence uses them. Text on an
 * accent is ink; text on ink is surface, with `sub` for its second line.
 */
const tones = {
  lime: { fill: "bg-accent-lime text-ink", sub: "text-ink-soft" },
  sky: { fill: "bg-accent-sky text-ink", sub: "text-ink-soft" },
  mint: { fill: "bg-accent-mint text-ink", sub: "text-ink-soft" },
  ink: { fill: "bg-ink text-surface", sub: "text-surface/70" },
} as const;

export type Tone = keyof typeof tones;

const markColors = [
  "bg-accent-sky",
  "bg-accent-mint",
  "bg-accent-lime",
] as const;

export function Block({
  tone,
  children,
  className,
}: {
  tone: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("tone-block p-6 md:p-8", tones[tone].fill, className)}>
      {children}
    </div>
  );
}

/** A rounded square, the hero's tile at card scale. */
function Mark({ index }: { index: number }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "size-3 shrink-0 rounded-[4px] ring-1 ring-ink/10 ring-inset",
        markColors[index % markColors.length],
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
    <Card>
      <div className="mb-3 flex items-center gap-2.5">
        <Mark index={index} />
        <h2 className="text-body font-semibold text-ink">{label}</h2>
      </div>
      {children}
    </Card>
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
      className="card card-link flex flex-col gap-3 p-6 no-underline md:p-8"
      href={caseHref(item)}
    >
      <div>
        <p className="text-body text-muted">{item.category}</p>
        <h2 className="text-section font-semibold text-ink">
          {item.title}
          <span aria-hidden="true">{"\u00a0→"}</span>
        </h2>
      </div>
      <p className="text-summary text-ink-soft">{item.summary}</p>
      <TagList tags={item.tags} />
    </Link>
  );
}

const featuredTones: Tone[] = ["lime", "sky", "ink", "mint"];

export function FeaturedWorkCard({
  item,
  metric,
  index,
}: {
  item: CaseStudy;
  metric: CaseMetric;
  index: number;
}) {
  const tone = tones[featuredTones[index % featuredTones.length]];

  return (
    <Link
      aria-label={`${item.title} ${ui.caseLinkAriaSuffix}`}
      className="card card-link flex h-full flex-col overflow-hidden no-underline"
      href={caseHref(item)}
    >
      <div className={cx("px-6 pt-6 pb-5 md:px-8 md:pt-8", tone.fill)}>
        <p className="text-card">{metric.value}</p>
        <p className={cx("text-body", tone.sub)}>{metric.label}</p>
      </div>
      <div className="flex flex-1 flex-col px-6 pt-5 pb-6 md:px-8 md:pb-8">
        <p className="text-body text-muted">{item.category}</p>
        <h4 className="text-section font-semibold text-ink">
          {item.title}
          <span aria-hidden="true">{"\u00a0→"}</span>
        </h4>
      </div>
    </Link>
  );
}

const techTones: Tone[] = ["lime", "ink"];

export function TechCard({ item, index }: { item: TechItem; index: number }) {
  return (
    <li
      className={cx(
        "tone-block flex aspect-[4/3] flex-col justify-between p-6 md:p-8",
        tones[techTones[index % techTones.length]].fill,
      )}
    >
      <Image
        alt=""
        className="h-14 w-auto self-start md:h-20"
        height={item.height}
        src={item.icon}
        width={item.width}
      />
      <span className="text-card">{item.name}</span>
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
          className="rounded-full bg-paper px-3 py-1 text-tag text-ink-soft"
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function MetricList({
  metrics,
  tone = "ink",
}: {
  metrics: CaseMetric[];
  tone?: Tone;
}) {
  return (
    <ul className="flex list-none flex-col gap-5">
      {metrics.map((metric) => (
        <li key={metric.label}>
          <p className="text-card">{metric.value}</p>
          <p className="text-body">{metric.label}</p>
          <p className={cx("text-body", tones[tone].sub)}>{metric.context}</p>
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
            {source.label} <span aria-hidden="true">→</span>
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
      <p className="mb-1 text-body font-semibold text-ink">{label}</p>
      {children}
    </div>
  );
}
