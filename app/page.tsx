import type { Metadata } from "next";
import Link from "next/link";
import {
  FeaturedWorkCard,
  Screen,
  TechCard,
  column,
  stack,
} from "@/components/content-ui";
import { CareerTimeline } from "@/components/career-timeline";
import { HeroBlocks } from "@/components/hero-blocks";
import { about, caseStudies, intro, site } from "@/lib/content";

export const metadata: Metadata = {
  title: intro.meta.title,
  description: intro.meta.description,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.person.name,
  alternateName: site.person.alternateName,
  jobTitle: site.person.jobTitle,
  email: `mailto:${site.email}`,
  sameAs: site.person.sameAs,
  knowsAbout: site.person.knowsAbout,
};

const featured = about.featured.items.flatMap(({ id, metric }) => {
  const item = caseStudies.find((entry) => entry.id === id);
  return item ? [{ item, metric: item.metrics[metric] }] : [];
});

export default function HomePage() {
  return (
    <Screen flush>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        type="application/ld+json"
      />

      <section
        className="grid items-center gap-10 pt-16 pb-8 md:min-h-dvh md:grid-cols-[minmax(0,1fr)_minmax(0,480px)] md:gap-12 md:py-0"
        id="intro"
      >
        <div className="flex flex-col">
          <h1 className="text-name text-ink">{site.name}</h1>
          <p className="mt-2 text-headline text-ink-soft">{site.role}</p>
          <a
            aria-label={intro.emailAriaLabel}
            className="mt-4 self-start text-section text-muted no-underline transition-opacity duration-200 ease-soft hover:opacity-70"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </div>
        <HeroBlocks className="w-full max-w-120 justify-self-center md:justify-self-end" />
      </section>

      <section id="me">
        <div className={`mx-auto flex flex-col gap-8 pt-16 md:pt-24 ${column}`}>
          <h2 className="text-headline whitespace-pre-line text-ink">
            {about.headline.map((run) => (
              <span
                className={run.strong ? "font-bold" : undefined}
                key={run.text}
              >
                {run.text}
              </span>
            ))}
          </h2>

          <ul
            aria-label={about.techListAriaLabel}
            className="grid list-none grid-cols-2 gap-4"
          >
            {about.tech.map((item, index) => (
              <TechCard index={index} item={item} key={item.name} />
            ))}
          </ul>
        </div>

        <div className={`mx-auto mt-16 md:mt-24 ${column} ${stack} pb-6`}>
          <h3 className="text-card text-ink">{about.featured.title}</h3>
          <ul className="grid list-none gap-4 sm:grid-cols-2">
            {featured.map(({ item, metric }, index) => (
              <li key={item.id}>
                <FeaturedWorkCard index={index} item={item} metric={metric} />
              </li>
            ))}
          </ul>
          <Link
            className="pill inline-flex items-center gap-2 self-center px-6 py-3 text-section text-ink no-underline transition-opacity duration-200 ease-soft hover:opacity-75"
            href="/works"
          >
            {about.featured.moreLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={`mx-auto mt-12 ${column}`}>
          <CareerTimeline
            linkLabel={about.timeline.linkLabel}
            stackLabels={about.timeline.stackLabels}
            steps={about.timeline.steps}
            title={about.timeline.title}
          />
        </div>

        <div className={`mx-auto mt-12 flex flex-col pb-6 ${column}`}>
          <Link
            className="pill inline-flex items-center gap-2 self-center px-6 py-3 text-section text-ink no-underline transition-opacity duration-200 ease-soft hover:opacity-75"
            href="/works"
          >
            {about.worksLinkLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </Screen>
  );
}
