import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BackLink,
  CaseSectionCard,
  Field,
  GlassCard,
  MetricList,
  Screen,
  SourceList,
  TagList,
  stack,
} from "@/components/content-ui";
import { caseDetail, caseStudies, ui } from "@/lib/content";

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
  const item = caseStudies.find((entry) => entry.id === id);

  if (!item) {
    notFound();
  }

  return (
    <Screen>
      <BackLink href="/works" label={ui.backToList} />

      <div className="mx-auto mt-10 grid max-w-(--container-card) gap-6 pb-6 md:mt-14 lg:max-w-none lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:items-start">
        <div className={stack}>
          <GlassCard>
            <h1 className="mb-2 text-card text-ink">{item.title}</h1>
            <p className="text-lede text-ink">{item.summary}</p>
          </GlassCard>

          {item.sections.map((section, index) => (
            <CaseSectionCard index={index} key={section.id} section={section} />
          ))}
        </div>

        <aside
          aria-label={caseDetail.asideAriaLabel}
          className={`${stack} lg:sticky lg:top-12`}
        >
          <GlassCard>
            <p className="text-body text-muted">{item.category}</p>
            <div className="mt-4 flex flex-col gap-5">
              <Field label={caseDetail.roleLabel}>
                <p className="text-body text-ink">{item.role}</p>
              </Field>
              <TagList tags={item.tags} />
            </div>
          </GlassCard>

          <GlassCard>
            <p className="mb-4 text-section text-ink">
              {caseDetail.metricsLabel}
            </p>
            <MetricList metrics={item.metrics} />
          </GlassCard>

          {item.limitation && (
            <GlassCard>
              <p className="mb-2 text-section text-ink">
                {caseDetail.limitationLabel}
              </p>
              <p className="text-body text-ink">{item.limitation}</p>
            </GlassCard>
          )}

          {item.sources.length > 0 && (
            <GlassCard>
              <p className="mb-3 text-section text-ink">
                {caseDetail.sourcesLabel}
              </p>
              <SourceList sources={item.sources} />
            </GlassCard>
          )}
        </aside>
      </div>
    </Screen>
  );
}
