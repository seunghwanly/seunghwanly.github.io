"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";

export function Gnb() {
  const pathname = usePathname();
  const visibleSection = useVisibleSection(pathname);

  return (
    <nav
      aria-label={site.nav.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-100 flex justify-center px-4 pb-[calc(env(safe-area-inset-bottom,0px)+var(--gnb-inset))] print:hidden"
    >
      <ul className="glass-nav flex h-(--gnb-height) w-full max-w-90 list-none items-center justify-between px-6 sm:px-10">
        {site.nav.items.map((item) => {
          const isActive = matches(item.href, pathname, visibleSection);

          return (
            <li className="relative flex items-center" key={item.href}>
              {isActive ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-1.5 left-1/2 size-10 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--color-glow)_0%,transparent_70%)]"
                />
              ) : null}
              <Link
                aria-current={isActive ? "page" : undefined}
                className="relative inline-flex min-h-10 items-center text-nav text-ink-soft no-underline transition-opacity duration-200 ease-soft hover:opacity-70"
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
 * `/works/2` keeps Works lit, and `/#me` lights up only once that section is
 * actually on screen — the Intro above it has no nav entry of its own, which
 * matches the `selected=Default` variant in Figma where nothing glows.
 */
function matches(
  href: string,
  pathname: string,
  visibleSection: string | null,
) {
  const [path, hash] = href.split("#");

  if (hash) {
    return pathname === (path || "/") && visibleSection === hash;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function useVisibleSection(pathname: string) {
  const [visible, setVisible] = useState<string | null>(null);

  useEffect(() => {
    const ids = site.nav.items
      .map((item) => item.href.split("#")[1])
      .filter((id): id is string => Boolean(id));

    // Nothing to watch on this route. A stale value is harmless because
    // `matches` checks the pathname before it looks at the section.
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
