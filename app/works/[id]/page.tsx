import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BoundaryNote,
  CaseDiagram,
  MetricGrid,
  SourceList,
  TagList,
  caseHref,
  caseNumber,
} from "@/components/content-ui";
import { caseDetail, caseStudies } from "@/lib/content";

type CasePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { id } = await params;
  const item = caseStudies.find((entry) => entry.id === id);

  if (!item) {
    return { title: caseDetail.fallbackTitle };
  }

  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function WorkCasePage({ params }: CasePageProps) {
  const { id } = await params;
  const itemIndex = caseStudies.findIndex((entry) => entry.id === id);
  const item = caseStudies[itemIndex];

  if (!item) {
    notFound();
  }

  const previous =
    itemIndex > 0 ? caseStudies[itemIndex - 1] : caseStudies.at(-1);
  const next =
    itemIndex < caseStudies.length - 1
      ? caseStudies[itemIndex + 1]
      : caseStudies[0];

  const sections = [
    ...item.sections.map((section) => ({
      id: section.id,
      label: section.label,
    })),
    { id: "boundary", label: caseDetail.boundary.navLabel },
  ];

  return (
    <main id="main-content">
      <article className="border-b border-line">
        <header className="site-shell pt-[clamp(4.5rem,9vw,7rem)] pb-[clamp(4rem,8vw,6rem)]">
          <Link
            className="mb-13 inline-flex min-h-11 items-center font-mono text-label tabular-nums text-muted no-underline transition-colors duration-200 ease-soft hover:text-ink print:hidden"
            href="/works"
          >
            ← {caseDetail.backLabel}
          </Link>
          <p className="mb-4 font-mono text-label tracking-[0.13em] tabular-nums uppercase text-accent-soft">
            {caseDetail.indexPrefix} {caseNumber(item)} · {item.category}
          </p>
          <h1 className="max-w-[940px] text-display">{item.title}</h1>
          <p className="mt-7 max-w-[64ch] text-lede text-ink-soft">
            {item.summary}
          </p>
          <div className="my-10 grid max-w-[820px] gap-1.5 border-y border-line py-4.5 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-6">
            <span className="font-mono text-label tabular-nums text-accent-soft">
              {caseDetail.roleLabel}
            </span>
            <p className="text-body text-ink-soft">{item.role}</p>
          </div>
          <TagList tags={item.tags} />
        </header>

        <div className="site-shell grid gap-10 border-t border-line pt-16 pb-[120px] lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-[72px]">
          <aside className="self-stretch print:hidden">
            <nav
              aria-label={caseDetail.tocAriaLabel}
              className="lg:sticky lg:top-24"
            >
              <p className="mb-4.5 font-mono text-label tabular-nums text-muted-dark">
                {caseDetail.tocTitle}
              </p>
              <ol className="flex gap-1.5 overflow-x-auto border-b border-line-strong pb-3 lg:flex-col lg:gap-0 lg:border-b-0 lg:border-l lg:pb-0">
                {sections.map((section, index) => (
                  <li className="shrink-0 lg:shrink" key={section.id}>
                    <a
                      className="flex min-h-11 items-center gap-2 rounded-sm border border-line px-2.5 text-caption text-muted no-underline transition-colors duration-200 ease-soft hover:bg-canvas-raised hover:text-ink lg:grid lg:min-h-12 lg:grid-cols-[28px_minmax(0,1fr)] lg:rounded-none lg:border-0 lg:px-3"
                      href={`#${section.id}`}
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-label tabular-nums text-muted-dark"
                      >
                        0{index + 1}
                      </span>
                      {section.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0">
            <div className="mb-14">
              <CaseDiagram kind={item.diagram} />
            </div>
            <MetricGrid metrics={item.metrics} />

            {item.sections.map((section, index) => (
              <section
                className="grid gap-2.5 border-t border-line py-14 sm:grid-cols-[42px_minmax(0,1fr)] sm:gap-6 md:grid-cols-[56px_minmax(0,1fr)] md:py-[76px]"
                id={section.id}
                key={section.id}
              >
                <div
                  aria-hidden="true"
                  className="font-mono text-label tabular-nums text-muted-dark"
                >
                  0{index + 1}
                </div>
                <div className="min-w-0">
                  <p className="mb-4 font-mono text-label tabular-nums uppercase text-accent-soft">
                    {section.label}
                  </p>
                  <h2 className="mb-7 max-w-[720px] text-heading">
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      className="mb-5 max-w-[62ch] text-lede text-ink-soft last:mb-0"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-7 max-w-[62ch] border-t border-line">
                      {section.bullets.map((bullet) => (
                        <li
                          className="relative border-b border-line py-4 pl-7 text-body text-ink-soft"
                          key={bullet}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute left-1 text-accent"
                          >
                            ↳
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}

            <section
              className="grid gap-2.5 border-t border-line py-14 sm:grid-cols-[42px_minmax(0,1fr)] sm:gap-6 md:grid-cols-[56px_minmax(0,1fr)] md:py-[76px]"
              id="boundary"
            >
              <div
                aria-hidden="true"
                className="font-mono text-label tabular-nums text-muted-dark"
              >
                0{item.sections.length + 1}
              </div>
              <div className="min-w-0">
                <p className="mb-4 font-mono text-label tabular-nums uppercase text-accent-soft">
                  {caseDetail.boundary.label}
                </p>
                <h2 className="mb-7 max-w-[720px] text-heading">
                  {caseDetail.boundary.title}
                </h2>
                <BoundaryNote className="max-w-[62ch]">
                  {item.limitation}
                </BoundaryNote>
                <SourceList className="mt-7 max-w-[62ch]" sources={item.sources} />
              </div>
            </section>
          </div>
        </div>

        <nav
          aria-label={caseDetail.pagination.ariaLabel}
          className="site-shell grid gap-2.5 pb-[90px] print:hidden sm:grid-cols-2 sm:gap-0"
        >
          {previous ? (
            <Link
              className="flex min-h-[150px] flex-col border border-line-strong p-6 no-underline transition-colors duration-200 ease-soft hover:bg-canvas-raised"
              href={caseHref(previous)}
            >
              <span className="mb-auto font-mono text-label tabular-nums text-muted-dark">
                {caseDetail.pagination.previous}
              </span>
              <span className="text-subtitle text-ink">{previous.title}</span>
            </Link>
          ) : null}
          <Link
            className="flex min-h-[150px] flex-col border border-line-strong p-6 no-underline transition-colors duration-200 ease-soft hover:bg-canvas-raised sm:border-l-0 sm:text-right"
            href={caseHref(next)}
          >
            <span className="mb-auto font-mono text-label tabular-nums text-muted-dark">
              {caseDetail.pagination.next}
            </span>
            <span className="text-subtitle text-ink">{next.title}</span>
          </Link>
        </nav>
      </article>
    </main>
  );
}
