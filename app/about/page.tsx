import type { Metadata } from "next";
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
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
};

/**
 * Me. The top of the screen is the Figma frame verbatim — one headline and
 * the two tech cards, centred with room to breathe. Career and projects
 * follow underneath in the same card language, so the first impression is
 * the mock and the detail is a scroll away rather than a second page.
 */
export default function AboutPage() {
  return (
    <Screen flush>
      {/*
       * The hero is exactly one viewport tall, matching the Figma frame, so
       * the career list starts cleanly below the fold instead of landing
       * under the floating navigation.
       */}
      <section className="flex min-h-dvh flex-col items-center justify-center gap-10 md:gap-14">
        <h1 className="text-headline whitespace-pre-line text-center text-ink">
          {about.headline.map((run) => (
            <span className={run.strong ? "font-bold" : undefined} key={run.text}>
              {run.text}
            </span>
          ))}
        </h1>

        <ul
          aria-label={about.techListAriaLabel}
          className="flex list-none flex-wrap justify-center gap-4 md:gap-6"
        >
          {about.tech.map((item) => (
            <TechCard item={item} key={item.name} />
          ))}
        </ul>
      </section>

      <div className={`mx-auto mt-16 md:mt-24 ${column} ${stack} pb-6`}>
        <h2 className="text-card text-ink">{about.career.title}</h2>
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

        <h2 className="mt-6 text-card text-ink">{about.projects.title}</h2>
        {about.projects.entries.map((entry) => (
          <GlassCard key={entry.title}>
            <p className="text-body text-muted">
              {entry.period} · {entry.role}
            </p>
            <h3 className="mt-1 mb-2 text-section text-ink">{entry.title}</h3>
            <p className="text-body text-ink">{entry.description}</p>
            {entry.sources.length > 0 ? (
              <div className="mt-4">
                <SourceList sources={entry.sources} />
              </div>
            ) : null}
          </GlassCard>
        ))}
      </div>
    </Screen>
  );
}
