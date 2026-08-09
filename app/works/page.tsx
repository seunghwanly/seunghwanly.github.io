import type { Metadata } from "next";
import { CaseRow, PageIntro } from "@/components/content-ui";
import { caseStudies, workIndex } from "@/lib/content";

export const metadata: Metadata = {
  title: workIndex.meta.title,
  description: workIndex.meta.description,
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <PageIntro
        title={workIndex.intro.title}
        description={workIndex.intro.description}
      />

      <section
        aria-label={workIndex.listAriaLabel}
        className="site-shell pb-[clamp(4.5rem,8vw,6.5rem)]"
      >
        <div className="border-b border-line-strong">
          {caseStudies.map((item) => (
            <CaseRow item={item} key={item.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
