import type { Metadata } from "next";
import {
  ButtonGroup,
  ButtonLink,
  DefinitionList,
  DefinitionRow,
  Eyebrow,
  PageIntro,
  Section,
  SectionHeading,
  TextLink,
  rowGrid,
  rowLabel,
  rowList,
  withEmphasis,
} from "@/components/content-ui";
import { about, profileLinks, site } from "@/lib/content";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
};

/** Wraps the `emphasis` substring of a highlight title in a `<span>`. */
export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        title={about.intro.title}
        description={about.intro.description}
      />

      <ButtonGroup
        ariaLabel={about.actions.ariaLabel}
        className="site-shell pt-10 pb-[clamp(4.25rem,7vw,5.5rem)] print:hidden"
      >
        <ButtonLink
          href={site.resumeHref}
          trailing="external"
          variant="primary"
        >
          {about.actions.resumeLabel}
        </ButtonLink>
        <ButtonLink href={`mailto:${site.email}`} variant="secondary">
          {about.actions.emailLabel}
        </ButtonLink>
        {profileLinks.map((link) => (
          <ButtonLink
            href={link.href}
            key={link.href}
            trailing="external"
            variant="tertiary"
          >
            {link.label}
          </ButtonLink>
        ))}
      </ButtonGroup>

      <Section labelledBy="career">
        <SectionHeading id="career" title={about.career.title} />
        <ol className={rowList}>
          {about.career.entries.map((item) => (
            <li
              className={`${rowGrid} border-b border-line-strong py-9`}
              key={`${item.company}-${item.period}`}
            >
              <time className={rowLabel}>{item.period}</time>
              <div className="min-w-0">
                <h3 className="text-title">{item.company}</h3>
                <p className="mt-1 text-subtitle text-ink-soft">{item.role}</p>
                <p className="mt-3 max-w-[720px] text-body text-muted">
                  {item.summary}
                </p>
                {item.highlights.length > 0 && (
                  <ul className="mt-5 max-w-[760px] border-t border-line">
                    {item.highlights.map((highlight) => (
                      <li
                        className="relative border-b border-line py-3.5 pl-6"
                        key={highlight.id}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute top-3.5 left-0 text-accent-soft"
                        >
                          ↳
                        </span>
                        <h4 className="text-subtitle text-ink [&_span]:font-extrabold [&_span]:text-accent-soft">
                          {withEmphasis(highlight.title, highlight.emphasis)}
                        </h4>
                        <p className="mt-1 text-body text-muted">
                          {highlight.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section divider labelledBy="projects">
        <SectionHeading id="projects" title={about.projects.title} />
        {about.projects.entries.map((entry) => (
          <article
            className={`${rowGrid} border-y border-line-strong py-8`}
            key={`${entry.title}-${entry.period}`}
          >
            <time className={rowLabel}>{entry.period}</time>
            <div className="min-w-0">
              <h3 className="text-title">{entry.title}</h3>
              {entry.role ? (
                <p className="mt-1 text-subtitle text-ink-soft">{entry.role}</p>
              ) : null}
              <p className="mt-2.5 max-w-[720px] text-body text-muted">
                {entry.description}
              </p>
              {entry.sources?.length ? (
                <div className="mt-1 flex flex-wrap gap-x-6">
                  {entry.sources.map((source) => (
                    <TextLink href={source.href} key={source.href}>
                      {source.label} <span aria-hidden="true">↗</span>
                    </TextLink>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </Section>

      <Section divider labelledBy="skills">
        <SectionHeading
          eyebrow={about.skills.eyebrow}
          id="skills"
          title={about.skills.title}
        />
        <DefinitionList ariaLabel={about.skills.listAriaLabel}>
          {about.skills.items.map((item) => (
            <DefinitionRow key={item.label} term={item.label}>
              {item.detail}
            </DefinitionRow>
          ))}
        </DefinitionList>
      </Section>

      <Section divider>
        <div className="grid gap-7 md:grid-cols-2 md:gap-16">
          <div className="border-y border-line-strong py-7">
            <Eyebrow>{about.education.eyebrow}</Eyebrow>
            <h2 className="mb-3.5 text-title">{about.education.title}</h2>
            <p className="text-body text-muted">{about.education.detail}</p>
          </div>
          <div className="border-y border-line-strong py-7">
            <Eyebrow>{about.teaching.eyebrow}</Eyebrow>
            <h2 className="mb-3.5 text-title">{about.teaching.title}</h2>
            <ul>
              {about.teaching.items.map((item) => (
                <li
                  className="grid gap-1 border-t border-line py-3 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-4"
                  key={item.label}
                >
                  <strong className="text-subtitle text-ink">
                    {item.label}
                  </strong>
                  <span className="text-body text-muted">{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
