import type { Metadata } from "next";
import {
  ButtonGroup,
  ButtonLink,
  CaseRow,
  Eyebrow,
  LayerDiagram,
  PageCta,
  ProofStrip,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/content-ui";
import { caseStudies, home, site } from "@/lib/content";

export const metadata: Metadata = {
  title: home.meta.title,
  description: home.meta.description,
};

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.person.name,
    alternateName: site.person.alternateName,
    jobTitle: site.person.jobTitle,
    email: `mailto:${site.email}`,
    sameAs: site.person.sameAs,
    knowsAbout: site.person.knowsAbout,
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section
        aria-labelledby="hero-title"
        className="site-shell grid items-center gap-12 py-16 pb-20 lg:min-h-[min(860px,calc(100vh-var(--header-height)))] lg:grid-cols-[minmax(0,1.38fr)_minmax(330px,0.62fr)] lg:gap-[clamp(3rem,6vw,5.5rem)] lg:py-[clamp(5.5rem,10vw,8.25rem)]"
      >
        <div className="lg:max-w-[820px]">
          <Eyebrow>{home.hero.eyebrow}</Eyebrow>
          <h1 className="mb-8 max-w-[900px] text-display" id="hero-title">
            {home.hero.titleLead}
            <br />
            <span className="text-accent">{home.hero.titleAccent}</span>
          </h1>
          <p className="mb-6 max-w-[60ch] text-lede text-ink-soft">
            {home.hero.lede}
          </p>
          <ButtonGroup className="mt-9 print:hidden" stackOnMobile>
            <ButtonLink
              href={home.hero.actions[0].href}
              variant="primary"
              trailing="arrow"
            >
              {home.hero.actions[0].label}
            </ButtonLink>
            <ButtonLink
              href={home.hero.actions[1].href}
              variant="secondary"
              trailing="external"
            >
              {home.hero.actions[1].label}
            </ButtonLink>
          </ButtonGroup>
        </div>
        <LayerDiagram />
      </section>

      <Section divider labelledBy="proof-title">
        <SectionHeading
          aside={
            <TextLink href={home.proof.link.href}>
              {home.proof.link.label} <span aria-hidden="true">→</span>
            </TextLink>
          }
          eyebrow={home.proof.eyebrow}
          id="proof-title"
          title={home.proof.title}
        />
        <ProofStrip />
      </Section>

      <Section divider labelledBy="work-title">
        <SectionHeading
          aside={
            <p className="font-mono text-label tabular-nums text-muted-dark">
              {home.work.aside}
            </p>
          }
          id="work-title"
          title={home.work.title}
        />
        <div className="border-t border-line-strong">
          {caseStudies.map((item) => (
            <CaseRow item={item} key={item.id} />
          ))}
        </div>
      </Section>

      <PageCta
        eyebrow={home.cta.eyebrow}
        id="home-cta-title"
        title={home.cta.title}
      >
        <ButtonGroup className="md:justify-end">
          <ButtonLink
            href={home.cta.actions[0].href}
            trailing="external"
            variant="primary"
          >
            {home.cta.actions[0].label}
          </ButtonLink>
          <ButtonLink href={home.cta.actions[1].href} variant="secondary">
            {home.cta.actions[1].label}
          </ButtonLink>
        </ButtonGroup>
      </PageCta>
    </main>
  );
}
