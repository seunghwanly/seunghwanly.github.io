import type { Metadata } from "next";
import { PageIntro, SmartLink, rowGrid, rowLabel } from "@/components/content-ui";
import { proof, publicProof } from "@/lib/content";

export const metadata: Metadata = {
  title: proof.meta.title,
  description: proof.meta.description,
};

export default function ProofPage() {
  return (
    <main id="main-content">
      <PageIntro
        title={proof.intro.title}
        description={proof.intro.description}
        meta={proof.intro.meta}
      />

      <section
        aria-label={proof.listAriaLabel}
        className="site-shell pt-11 pb-16"
      >
        {publicProof.map((group, groupIndex) => (
          <article
            className={`${rowGrid} border-t border-line-strong py-11 last:border-b`}
            key={group.group}
          >
            <div className="flex items-baseline justify-between gap-4 md:flex-col md:items-start md:justify-start md:gap-10">
              <span aria-hidden="true" className={rowLabel}>
                0{groupIndex + 1}
              </span>
              <h2 className="text-title">{group.group}</h2>
            </div>
            <ul className="min-w-0">
              {group.items.map((item) => (
                <li
                  className="grid gap-x-8 gap-y-2 border-t border-line py-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                  key={item.href}
                >
                  <span className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                    <SmartLink
                      className="text-subtitle text-ink no-underline hover:text-accent"
                      href={item.href}
                    >
                      {item.label}{" "}
                      <span aria-hidden="true" className="text-accent-soft">
                        ↗
                      </span>
                    </SmartLink>
                    {item.related?.map((related) => (
                      <SmartLink
                        className="text-caption text-muted no-underline hover:text-accent"
                        href={related.href}
                        key={related.href}
                      >
                        {related.label}{" "}
                        <span aria-hidden="true" className="text-accent-soft">
                          ↗
                        </span>
                      </SmartLink>
                    ))}
                  </span>
                  <p className="text-caption text-muted">{item.note}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
