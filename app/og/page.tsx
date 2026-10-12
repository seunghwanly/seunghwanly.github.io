import type { Metadata } from "next";
import { HeroBlocks } from "@/components/hero-blocks";
import { about, og, site } from "@/lib/content";

export const metadata: Metadata = {
  title: og.title,
  robots: { index: false, follow: false },
};

const host = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://seunghwanly.github.io",
).host;

/**
 * The share image, drawn as a page so it reads the same copy and tokens as
 * the site. `npm run og:image` screenshots this 1200×630 frame into
 * public/og.png; nothing links here.
 */
export default function OgPage() {
  return (
    <div className="relative flex h-[630px] w-[1200px] overflow-hidden bg-paper p-18">
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-[168px] leading-none font-extrabold tracking-[-0.02em] text-ink">
            {site.name}
          </p>
          <p className="mt-5 text-[44px] leading-tight font-medium text-ink-soft">
            {site.role}
          </p>
        </div>
        <div>
          <p className="text-[30px] leading-snug whitespace-pre-line text-ink">
            {about.headline.map((run) => (
              <span
                className={run.strong ? "font-bold" : undefined}
                key={run.text}
              >
                {run.text}
              </span>
            ))}
          </p>
          <p className="mt-5 text-[22px] font-semibold text-muted">{host}</p>
        </div>
      </div>
      <HeroBlocks className="absolute right-18 bottom-18 w-[520px]" />
    </div>
  );
}
