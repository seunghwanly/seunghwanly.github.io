import type { Metadata } from "next";
import {
  ButtonLink,
  SmartLink,
  cx,
  rowGrid,
  rowLabel,
  withEmphasis,
} from "@/components/content-ui";
import {
  about,
  profileLinks,
  publicProof,
  resume,
  site,
} from "@/lib/content";

export const metadata: Metadata = {
  title: resume.meta.title,
  description: resume.meta.description,
};

/**
 * Section heading. The trailing period is the signature the résumé has always
 * used, so it is drawn here rather than typed into every label in content.ts.
 */
function ResumeSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-9">
      <h2 className="mb-5 break-after-avoid border-b border-line-strong pb-2.5 text-title">
        {label}
        <span aria-hidden="true" className="text-accent-soft">
          .
        </span>
      </h2>
      {children}
    </section>
  );
}

/** One period-and-content row, the same shape /about uses. */
function ResumeRow({
  period,
  children,
}: {
  period: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx(rowGrid, "border-b border-line py-6")}>
      <time className={rowLabel}>{period}</time>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <main id="main-content">
      <header className="site-shell flex flex-col justify-between gap-6 border-b border-line-strong pt-[clamp(4rem,8vw,6rem)] pb-9 md:flex-row md:items-end print:pt-0">
        <div>
          <h1 className="text-heading">{site.name}</h1>
          <p className="mt-2 text-lede text-accent-soft">{resume.headline}</p>
          <div
            aria-label={resume.contactAriaLabel}
            className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-caption tabular-nums text-muted"
          >
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {profileLinks.map((link) => (
              <span className="flex items-center gap-4" key={link.href}>
                <span aria-hidden="true" className="text-line-strong">
                  ·
                </span>
                <SmartLink href={link.href}>{link.label}</SmartLink>
              </span>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-2.5 md:items-end">
          <ButtonLink
            className="print:hidden"
            href={resume.download.href}
            trailing="external"
            variant="primary"
          >
            {resume.download.label}
          </ButtonLink>
          <p className="font-mono text-label tabular-nums text-muted-dark">
            {resume.updatedAt}
          </p>
        </div>
      </header>

      <div className="site-shell pb-[clamp(4.5rem,8vw,6.5rem)]">
        <ResumeSection label={resume.sections.profile}>
          {resume.profile.map((paragraph) => (
            <p
              className="mb-3 max-w-[70ch] text-body text-ink-soft last:mb-0"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </ResumeSection>

        <ResumeSection label={resume.sections.career}>
          <div>
            {about.career.entries.map((entry) => (
              <ResumeRow key={entry.company} period={entry.period}>
                <h3 className="text-subtitle text-ink">{entry.company}</h3>
                <p className="mt-0.5 text-caption text-accent-soft">
                  {entry.role}
                </p>
                <p className="mt-2.5 max-w-[70ch] text-body text-muted">
                  {entry.summary}
                </p>
                <ul className="mt-4 max-w-[70ch]">
                  {entry.highlights.map((highlight) => (
                    <li
                      className="relative break-inside-avoid border-t border-line py-3 pl-6"
                      key={highlight.id}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute top-3 left-0 text-accent-soft"
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
              </ResumeRow>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection label={resume.sections.projects}>
          <div>
            {about.projects.entries.map((entry) => (
              <ResumeRow key={entry.title} period={entry.period}>
                <h3 className="text-subtitle text-ink">{entry.title}</h3>
                <p className="mt-1 max-w-[70ch] text-body text-muted">
                  {entry.description}
                </p>
              </ResumeRow>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection label={resume.sections.skills}>
          <dl aria-label={about.skills.listAriaLabel}>
            {about.skills.items.map((item) => (
              <div
                className={cx(rowGrid, "border-b border-line py-3.5")}
                key={item.label}
              >
                <dt className="text-subtitle text-ink">{item.label}</dt>
                <dd className="min-w-0 text-body text-ink-soft">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </ResumeSection>

        <ResumeSection label={resume.sections.records}>
          <div>
            {publicProof.map((group) => (
              <div
                className={cx(rowGrid, "border-b border-line py-5")}
                key={group.group}
              >
                <p className={rowLabel}>{group.group}</p>
                <ul className="min-w-0">
                  {group.items.map((item) => (
                    <li
                      className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-1.5"
                      key={item.href}
                    >
                      <SmartLink
                        className="text-subtitle text-ink no-underline hover:text-accent"
                        href={item.href}
                      >
                        {item.label}{" "}
                        <span aria-hidden="true" className="text-accent-soft">
                          ↗
                        </span>
                      </SmartLink>
                      {item.note ? (
                        <span className="text-caption text-muted">
                          {item.note}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        <div className="grid items-start gap-x-16 md:grid-cols-2">
          <ResumeSection label={resume.sections.education}>
            <p className="text-subtitle text-ink">{about.education.title}</p>
            <p className="mt-1 text-body text-muted">
              {about.education.detail}
            </p>
          </ResumeSection>

          <ResumeSection label={resume.sections.teaching}>
            <ul>
              {about.teaching.items.map((item) => (
                <li
                  className="grid gap-1 border-b border-line py-2.5 last:border-b-0 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-4"
                  key={item.label}
                >
                  <strong className="text-subtitle text-ink">
                    {item.label}
                  </strong>
                  <span className="text-body text-muted">{item.detail}</span>
                </li>
              ))}
            </ul>
          </ResumeSection>
        </div>
      </div>
    </main>
  );
}
