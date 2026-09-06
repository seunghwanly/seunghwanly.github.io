import type { Metadata } from "next";
import {
  BackLink,
  Screen,
  WorkCard,
  column,
  stack,
} from "@/components/content-ui";
import { caseStudies, ui, workIndex } from "@/lib/content";

export const metadata: Metadata = {
  title: workIndex.meta.title,
  description: workIndex.meta.description,
};

/**
 * Works. A single centred column of cards, with the way back to Intro parked
 * in the top-left corner — the same arrangement as the Figma frame.
 */
export default function WorksPage() {
  return (
    <Screen>
      <BackLink href="/" label={ui.backToTop} />

      <ul
        aria-label={workIndex.listAriaLabel}
        className={`mx-auto mt-10 list-none md:mt-14 ${column} ${stack} pb-6`}
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
