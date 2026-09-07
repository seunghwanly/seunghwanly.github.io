"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import type { NavVariant } from "@/lib/schema.dto";

const glow: Record<NavVariant, string> = {
  default: "",
  me: "nav-glow-me",
  works: "nav-glow-works",
  resume: "nav-glow-resume",
};

/**
 * Pass `variant` to pin the pill to one of the Figma variants. Left out, it
 * follows the route — and, on the home page, the section being scrolled past.
 */
export function Gnb({ variant }: { variant?: NavVariant }) {
  const detected = useActiveVariant();
  const active = variant ?? detected;

  return (
    <nav
      aria-label={site.nav.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-100 flex justify-center px-4 pb-[calc(env(safe-area-inset-bottom,0px)+var(--gnb-inset))] print:hidden"
    >
      <ul
        className={`glass-nav flex h-(--gnb-height) w-full max-w-90 list-none items-center justify-between px-6 ${glow[active]}`}
      >
        {site.nav.items.map((item) => {
          const isActive = item.variant === active;

          return (
            <li className="flex max-w-21 flex-1 justify-center" key={item.href}>
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-10 items-center text-nav no-underline transition-opacity duration-200 ease-soft hover:opacity-70 ${
                  isActive ? "text-ink" : "text-ink-soft"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/**
 * `/works/dto` keeps Works lit, and `/#me` lights up only once that section is
 * on screen — the Intro above it has no nav entry, which is Figma's `default`.
 */
function useActiveVariant(): NavVariant {
  const pathname = usePathname();
  const visibleSection = useVisibleSection(pathname);

  for (const item of site.nav.items) {
    const [path, hash] = item.href.split("#");

    const hit = hash
      ? pathname === (path || "/") && visibleSection === hash
      : pathname === item.href || pathname.startsWith(`${item.href}/`);

    if (hit) {
      return item.variant;
    }
  }

  return "default";
}

function useVisibleSection(pathname: string) {
  const [visible, setVisible] = useState<string | null>(null);

  useEffect(() => {
    const ids = site.nav.items
      .map((item) => item.href.split("#")[1])
      .filter((id): id is string => Boolean(id));

    // Nothing to watch on this route. A stale value is harmless because the
    // pathname is checked before the section.
    if (ids.length === 0) {
      return;
    }

    const read = () => {
      const middle = window.innerHeight / 2;
      let current: string | null = null;

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;

        const box = element.getBoundingClientRect();
        if (box.top <= middle && box.bottom > middle) {
          current = id;
        }
      }

      setVisible(current);
    };

    // Deferred so the first measurement happens after paint rather than
    // during the effect itself.
    const first = requestAnimationFrame(read);
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);

    return () => {
      cancelAnimationFrame(first);
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
    // Sections belong to a page, so re-measure whenever the route changes.
  }, [pathname]);

  return visible;
}
