import Link from "next/link";
import { ButtonLink } from "@/components/content-ui";
import { MobileNav } from "@/components/mobile-nav";
import { profileLinks, site } from "@/lib/content";

const navLink =
  "inline-flex min-h-11 items-center font-mono text-caption tabular-nums text-muted no-underline transition-colors duration-200 ease-soft hover:text-ink";

export function SiteHeader() {
  return (
    <header className="glass sticky top-0 z-100 h-(--header-height) border-b border-glass-border bg-white/52 shadow-[0_1px_0_rgb(57_70_99/10%),inset_0_1px_0_rgb(255_255_255/78%)] print:hidden">
      <div className="site-shell flex h-full items-center justify-between">
        <Link
          aria-label={site.header.homeAriaLabel}
          className="flex h-12 items-center gap-3 no-underline"
          href="/"
        >
          <span className="text-subtitle text-ink">
            {site.header.brandName}
          </span>
          <span
            aria-hidden="true"
            className="hidden font-mono text-caption tracking-[0.06em] tabular-nums text-muted-dark md:inline"
          >
            {site.header.brandTrace}
          </span>
        </Link>

        <nav
          aria-label={site.header.navAriaLabel}
          className="hidden items-center gap-4 md:flex lg:gap-6"
        >
          {site.nav.map((item) => (
            <Link className={navLink} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href={site.resumeHref}
            trailing="arrow"
            variant="primary"
          >
            {site.header.resumeLabel}
          </ButtonLink>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}

export function SiteFooter() {
  const footerLink =
    "min-h-9.5 font-mono text-caption tabular-nums text-ink-soft no-underline transition-colors duration-200 ease-soft hover:text-accent";

  return (
    <footer className="border-t border-line print:hidden">
      <div className="site-shell grid gap-10 py-[70px] md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] md:gap-15">
        <div>
          <p className="mb-2.5 text-subtitle text-ink">{site.footer.title}</p>
          <p className="max-w-[480px] text-body text-muted">
            {site.footer.description}
          </p>
        </div>
        <div
          aria-label={site.footer.linksAriaLabel}
          className="grid content-start gap-x-6 gap-y-2 sm:grid-cols-2"
        >
          {profileLinks.map((link) => (
            <a
              className={footerLink}
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
          {site.footer.extraLinks.map((link) => (
            <Link className={footerLink} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <a className={footerLink} href={`mailto:${site.email}`}>
            {site.footer.emailLabel} ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
