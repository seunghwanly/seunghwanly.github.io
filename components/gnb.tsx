"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content";

/**
 * The one piece of chrome on the site. It floats over every screen at the
 * bottom, clears the home indicator on iOS, and marks the current section
 * with the green bloom from the Figma component set (`selected=` variants).
 *
 * There is no header — the nav is the only way between screens, so it stays
 * reachable with a thumb rather than at the top of a scrolled page.
 */
export function Gnb() {
  const pathname = usePathname();

  return (
    <nav
      aria-label={site.nav.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-100 flex justify-center px-4 pb-[calc(env(safe-area-inset-bottom,0px)+var(--gnb-inset))] print:hidden"
    >
      <ul className="glass-nav flex h-(--gnb-height) w-full max-w-90 list-none items-center justify-between px-6 sm:px-10">
        {site.nav.items.map((item) => {
          // `/works/2` keeps Works lit; `/` matches nothing, which is correct
          // because Intro has no nav entry of its own.
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

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
