import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BoundaryFlow,
  BoundaryNote,
  HumanAIContract,
  MetricGrid,
  SourceList,
} from "@/components/content-ui";
import { caseStudies } from "@/lib/content";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);

  if (!item) {
    return { title: "Work case" };
  }

  return {
    title: item.title,
    description: item.summary,
  };
}

function CaseDiagram({ slug }: { slug: string }) {
  if (slug === "connected-commerce") {
    return <BoundaryFlow />;
  }

  if (slug === "multiplatform-sdk") {
    return (
      <figure className="sdk-diagram">
        <figcaption>Stable contract, explicit differences</figcaption>
        <div className="sdk-contract">Dart contract</div>
        <div className="sdk-branches" aria-hidden="true">
          <span>↓</span>
          <span>↓</span>
          <span>↓</span>
        </div>
        <div className="sdk-platforms">
          <div>
            <strong>Android</strong>
            <span>Kotlin · SDK v2</span>
          </div>
          <div>
            <strong>iOS</strong>
            <span>Swift · SPM</span>
          </div>
          <div>
            <strong>Web</strong>
            <span>JavaScript SDK</span>
          </div>
        </div>
        <p className="sr-only">
          하나의 안정적인 Dart 계약 아래 Android Kotlin, iOS Swift와
          SPM, Web JavaScript adapter를 둔 구조입니다.
        </p>
      </figure>
    );
  }

  if (slug === "observable-reliability") {
    return (
      <div className="case-contract">
        <HumanAIContract />
      </div>
    );
  }

  return (
    <figure className="preview-diagram">
      <figcaption>Design → implementation → review</figcaption>
      <ol>
        <li>
          <span>01</span>
          <strong>Component</strong>
          <small>tokens · state · interaction</small>
        </li>
        <li>
          <span>02</span>
          <strong>Live preview</strong>
          <small>Widgetbook · Storybook</small>
        </li>
        <li>
          <span>03</span>
          <strong>Design QA</strong>
          <small>same executable surface</small>
        </li>
        <li>
          <span>04</span>
          <strong>Release</strong>
          <small>versioned package</small>
        </li>
      </ol>
    </figure>
  );
}

export default async function WorkCasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const itemIndex = caseStudies.findIndex((entry) => entry.slug === slug);
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

  return (
    <main id="main-content">
      <article className="case-page">
        <header className="case-hero site-shell">
          <Link className="back-link" href="/work">
            ← Work index
          </Link>
          <p className="eyebrow">
            CASE {item.index} · {item.category}
          </p>
          <h1>{item.title}</h1>
          <p className="case-summary">{item.summary}</p>
          <div className="case-role">
            <span>MY SCOPE</span>
            <p>{item.role}</p>
          </div>
          <ul className="tag-list" aria-label="관련 기술과 주제">
            {item.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </header>

        <div className="case-body site-shell">
          <aside className="trace-rail">
            <nav aria-label="사례 구조">
              <p>CASE TRACE</p>
              <ol>
                {item.sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>
                      <span aria-hidden="true">0{index + 1}</span>
                      {section.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#boundary">
                    <span aria-hidden="true">
                      0{item.sections.length + 1}
                    </span>
                    경험의 경계
                  </a>
                </li>
              </ol>
            </nav>
            <div className="trace-meta">
              <span>{item.metrics.length} scoped metrics</span>
              <span>{item.sources.length} public links</span>
            </div>
          </aside>

          <div className="case-content">
            <CaseDiagram slug={item.slug} />
            <MetricGrid metrics={item.metrics} />

            {item.sections.map((section, index) => (
              <section
                className="trace-section"
                id={section.id}
                key={section.id}
              >
                <div className="trace-section-number" aria-hidden="true">
                  0{index + 1}
                </div>
                <div>
                  <p className="trace-label">{section.label}</p>
                  <h2>{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="case-bullets">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}

            <section className="trace-section boundary-section-inner" id="boundary">
              <div className="trace-section-number" aria-hidden="true">
                0{item.sections.length + 1}
              </div>
              <div>
                <p className="trace-label">경험의 경계</p>
                <h2>이 사례가 증명하지 못하는 것</h2>
                <BoundaryNote>{item.limitation}</BoundaryNote>
                <SourceList sources={item.sources} />
              </div>
            </section>
          </div>
        </div>

        <nav className="case-pagination site-shell" aria-label="다른 사례">
          {previous ? (
            <Link href={`/work/${previous.slug}`}>
              <span>PREVIOUS</span>
              {previous.title}
            </Link>
          ) : null}
          <Link href={`/work/${next.slug}`}>
            <span>NEXT</span>
            {next.title}
          </Link>
        </nav>
      </article>
    </main>
  );
}

