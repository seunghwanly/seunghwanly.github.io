"use client";

import Link from "next/link";
import { useRef } from "react";
import { ButtonLink, DisclosureTrigger } from "@/components/content-ui";
import { site } from "@/lib/content";

export function MobileNav() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeOnLinkClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target as HTMLElement).closest("a")) {
      return;
    }
    const details = detailsRef.current;
    if (details) {
      details.open = false;
    }
  };

  return (
    <details className="relative md:hidden" ref={detailsRef}>
      <DisclosureTrigger
        ariaLabel={site.header.menuAriaLabel}
        className="min-w-[68px] px-4"
        variant="secondary"
      >
        {site.header.menuLabel}
      </DisclosureTrigger>
      <nav
        aria-label={site.header.mobileNavAriaLabel}
        className="absolute top-13 right-0 flex w-[min(82vw,320px)] flex-col overflow-hidden rounded-md border border-glass-border bg-white/70 p-3 shadow-lift"
        onClick={closeOnLinkClick}
      >
        {site.nav.map((item) => (
          <Link
            className="flex min-h-12 items-center border-b border-line px-3 text-body no-underline"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
        <ButtonLink
          className="mt-3 w-full"
          href={site.resumeHref}
          trailing="arrow"
          variant="primary"
        >
          {site.header.resumeLabel}
        </ButtonLink>
      </nav>
    </details>
  );
}
