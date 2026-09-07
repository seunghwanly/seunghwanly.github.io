import type { Metadata } from "next";
import {
  BackLink,
  Field,
  GlassCard,
  Paragraphs,
  Screen,
  SectionCard,
  SourceList,
  column,
  stack,
} from "@/components/content-ui";
import { about, profileLinks, proofMetrics, resume, site, ui } from "@/lib/content";

export const metadata: Metadata = {
  title: resume.meta.title,
  description: resume.meta.description,
};

export default function ResumePage() {
  return (
    <Screen>
      <div className="print:hidden">
        <BackLink href="/" label={ui.backToTop} />
      </div>

      <div className={`mx-auto mt-10 md:mt-14 ${column} ${stack} pb-6`}>
        <GlassCard>
          <h1 className="text-card text-ink">{site.name}</h1>
          <p className="mt-1 text-section text-ink-mid">{resume.headline}</p>
          <p className="mt-1 text-body text-muted">{resume.updatedAt}</p>

          <ul
            aria-label={resume.contactAriaLabel}
            className="mt-5 flex list-none flex-wrap gap-x-5 gap-y-2"
          >
            <li>
              <a
                className="text-body text-ink-soft transition-opacity duration-200 ease-soft hover:opacity-70"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </li>
            {profileLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="text-body text-ink-soft transition-opacity duration-200 ease-soft hover:opacity-70"
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-glass-line bg-white/55 px-5 py-2.5 text-body text-ink no-underline transition-opacity duration-200 ease-soft hover:opacity-75 print:hidden"
            href={resume.download.href}
          >
            {resume.download.label}
            <span aria-hidden="true">↓</span>
          </a>
        </GlassCard>

        <SectionCard index={0} label={resume.sections.profile}>
          <Paragraphs items={resume.profile} />
        </SectionCard>

        <SectionCard index={1} label={resume.sections.career}>
          <div className="flex flex-col gap-6">
            {about.career.entries.map((entry) => (
              <div key={entry.company}>
                <p className="text-lede text-ink">
                  {entry.company} · {entry.role}
                </p>
                <p className="mb-3 text-body text-muted">{entry.period}</p>
                <div className="flex flex-col gap-3">
                  {entry.highlights.map((highlight) => (
                    <Field key={highlight.id} label={highlight.title}>
                      <p className="text-body text-ink">{highlight.detail}</p>
                    </Field>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard index={2} label={resume.sections.projects}>
          <div className="flex flex-col gap-5">
            {about.projects.entries.map((entry) => (
              <div key={entry.title}>
                <p className="text-lede text-ink">{entry.title}</p>
                <p className="mb-2 text-body text-muted">
                  {entry.period} · {entry.role}
                </p>
                <p className="text-body text-ink">{entry.description}</p>
                {entry.sources.length > 0 && (
                  <div className="mt-3">
                    <SourceList sources={entry.sources} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard index={3} label={resume.sections.skills}>
          <div className="flex flex-col gap-3">
            {resume.skills.map((skill) => (
              <Field key={skill.label} label={skill.label}>
                <p className="text-body text-ink">{skill.detail}</p>
              </Field>
            ))}
          </div>
        </SectionCard>

        <SectionCard index={0} label={resume.sections.records}>
          <ul className="flex list-none flex-col gap-4">
            {proofMetrics.map((record) => (
              <li key={record.href}>
                <a
                  className="text-lede text-ink no-underline transition-opacity duration-200 ease-soft hover:opacity-70"
                  href={record.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {record.value} <span aria-hidden="true">↗</span>
                </a>
                <p className="text-body text-ink-soft">{record.label}</p>
                <p className="text-body text-muted">{record.detail}</p>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard index={1} label={resume.sections.education}>
          <p className="text-lede text-ink">{resume.education.title}</p>
          <p className="text-body text-muted">{resume.education.detail}</p>
        </SectionCard>

        <SectionCard index={2} label={resume.sections.teaching}>
          <div className="flex flex-col gap-3">
            {resume.teaching.map((entry) => (
              <Field key={entry.label} label={entry.label}>
                <p className="text-body text-ink">{entry.detail}</p>
              </Field>
            ))}
          </div>
        </SectionCard>

        <SectionCard index={3} label={resume.sections.awards}>
          <div className="flex flex-col gap-3">
            {resume.awards.map((entry) => (
              <Field key={entry.label} label={entry.label}>
                <p className="text-body text-ink">{entry.detail}</p>
              </Field>
            ))}
          </div>
        </SectionCard>
      </div>
    </Screen>
  );
}
