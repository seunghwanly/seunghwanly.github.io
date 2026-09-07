import type { Metadata } from "next";
import Image from "next/image";
import {
  Field,
  GlassCard,
  Screen,
  SectionCard,
  SourceList,
  TechCard,
  column,
  stack,
} from "@/components/content-ui";
import { about, intro, site } from "@/lib/content";

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

export default function HomePage() {
  return (
    <Screen flush>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        type="application/ld+json"
      />

      <section
        className="flex min-h-dvh flex-col items-center justify-center gap-10 md:flex-row md:justify-between md:gap-12"
        id="intro"
      >
        <Image
          alt={intro.illustrationAlt}
          className="wobble w-56 max-w-full sm:w-80 md:w-104 lg:w-125"
          height={677}
          priority
          src="/macbook.png"
          width={677}
        />

        <div className="flex flex-col items-center text-center md:items-end md:text-right">
          <h1 className="text-name text-ink">{site.name}</h1>
          <p className="text-headline text-ink-mid">{site.role}</p>
          <a
            aria-label={intro.emailAriaLabel}
            className="mt-1 text-section text-muted no-underline transition-opacity duration-200 ease-soft hover:opacity-70"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </div>
      </section>

      <section id="me">
        <div className="flex min-h-dvh flex-col items-center justify-center gap-10 md:gap-14">
          <h2 className="text-headline whitespace-pre-line text-center text-ink">
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
            className="flex list-none flex-wrap justify-center gap-4 md:gap-6"
          >
            {about.tech.map((item) => (
              <TechCard item={item} key={item.name} />
            ))}
          </ul>
        </div>

        <div className={`mx-auto mt-16 md:mt-24 ${column} ${stack} pb-6`}>
          <h3 className="text-card text-ink">{about.career.title}</h3>
          {about.career.entries.map((entry, index) => (
            <SectionCard index={index} key={entry.company} label={entry.company}>
              <p className="text-body text-muted">
                {entry.period} · {entry.role}
              </p>
              <p className="mt-2 mb-4 text-lede text-ink">{entry.summary}</p>
              <div className="flex flex-col gap-4">
                {entry.highlights.map((highlight) => (
                  <Field key={highlight.id} label={highlight.title}>
                    <p className="text-body text-ink">{highlight.detail}</p>
                  </Field>
                ))}
              </div>
            </SectionCard>
          ))}

          <h3 className="mt-6 text-card text-ink">{about.projects.title}</h3>
          {about.projects.entries.map((entry) => (
            <GlassCard key={entry.title}>
              <p className="text-body text-muted">
                {entry.period} · {entry.role}
              </p>
              <h4 className="mt-1 mb-2 text-section text-ink">{entry.title}</h4>
              <p className="text-body text-ink">{entry.description}</p>
              {entry.sources.length > 0 && (
                <div className="mt-4">
                  <SourceList sources={entry.sources} />
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </section>
    </Screen>
  );
}
