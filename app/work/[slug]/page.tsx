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
    return { title: "대표 작업" };
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
        <figcaption>하나의 코드베이스로 세 플랫폼 운영</figcaption>
        <div className="sdk-contract">상품 · 예약 · 결제 로직</div>
        <div className="sdk-branches" aria-hidden="true">
          <span>↓</span>
          <span>↓</span>
          <span>↓</span>
        </div>
        <div className="sdk-platforms">
          <div>
            <strong>Android</strong>
            <span>기존 Flutter 앱</span>
          </div>
          <div>
            <strong>iOS</strong>
            <span>기존 Flutter 앱</span>
          </div>
          <div>
            <strong>Web</strong>
            <span>11월 26일 배포</span>
          </div>
        </div>
        <p className="sr-only">
          상품, 예약, 결제의 비즈니스 로직을 Android와 iOS 앱에서 공유하고
          같은 Flutter 코드베이스를 Web까지 확장한 구조입니다.
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
      <figcaption>디자인 → 구현 → 검수</figcaption>
      <ol>
        <li>
          <span>01</span>
          <strong>컴포넌트</strong>
          <small>tokens · state · interaction</small>
        </li>
        <li>
          <span>02</span>
          <strong>실행 화면</strong>
          <small>Widgetbook · Storybook</small>
        </li>
        <li>
          <span>03</span>
          <strong>디자인 검수</strong>
          <small>같은 화면에서 확인</small>
        </li>
        <li>
          <span>04</span>
          <strong>배포</strong>
          <small>버전이 붙은 패키지</small>
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
            ← 대표 작업
          </Link>
          <p className="eyebrow">
            작업 {item.index} · {item.category}
          </p>
          <h1>{item.title}</h1>
          <p className="case-summary">{item.summary}</p>
          <div className="case-role">
            <span>직접 맡은 일</span>
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
              <p>내용</p>
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
                    남은 과제
                  </a>
                </li>
              </ol>
            </nav>
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
                <p className="trace-label">마지막으로</p>
                <h2>남은 과제와 범위</h2>
                <BoundaryNote>{item.limitation}</BoundaryNote>
                <SourceList sources={item.sources} />
              </div>
            </section>
          </div>
        </div>

        <nav className="case-pagination site-shell" aria-label="다른 사례">
          {previous ? (
            <Link href={`/work/${previous.slug}`}>
              <span>이전 작업</span>
              {previous.title}
            </Link>
          ) : null}
          <Link href={`/work/${next.slug}`}>
            <span>다음 작업</span>
            {next.title}
          </Link>
        </nav>
      </article>
    </main>
  );
}
