import type { Metadata } from "next";
import {
  BackLink,
  Screen,
  WorkCard,
  column,
} from "@/components/content-ui";
import { caseStudies, ui, workIndex } from "@/lib/content";

export const metadata: Metadata = {
  title: workIndex.meta.title,
  description: workIndex.meta.description,
};

export default function WorksPage() {
  return (
    <Screen edge>
      <BackLink href="/" label={ui.backToTop} />

      <ul
        aria-label={workIndex.listAriaLabel}
        className={`mx-auto mt-10 flex list-none flex-col gap-8 md:mt-15 ${column} pb-6`}
      >
        {caseStudies.map((item) => (
          <li key={item.id}>
            <WorkCard item={item} />
          </li>
        ))}
      </ul>
    </Screen>
  );
}
