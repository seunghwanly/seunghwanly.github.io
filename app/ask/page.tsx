import type { Metadata } from "next";
import { AskExplorer } from "@/components/ask-explorer";
import { PageIntro } from "@/components/content-ui";
import { ask } from "@/lib/content";

export const metadata: Metadata = {
  title: ask.meta.title,
  description: ask.meta.description,
};

export default function AskPage() {
  return (
    <main id="main-content">
      <PageIntro
        title={ask.intro.title}
        description={ask.intro.description}
      />
      <div className="site-shell grid grid-cols-[minmax(0,900px)] items-start pt-16 pb-[clamp(4.5rem,8vw,6.5rem)]">
        <AskExplorer />
      </div>
    </main>
  );
}
