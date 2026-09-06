import type { Metadata } from "next";
import Image from "next/image";
import { Screen } from "@/components/content-ui";
import { intro, site } from "@/lib/content";

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

/**
 * Intro. The illustration and the name sit on one line at desktop width and
 * stack on a phone. Figma right-aligns the whole name block against the
 * frame edge, which is what keeps the doodle and the type from colliding.
 */
export default function IntroPage() {
  return (
    <Screen centered>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        type="application/ld+json"
      />

      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:gap-12">
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
      </div>
    </Screen>
  );
}
