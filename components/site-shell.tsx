import Link from "next/link";
import { profileLinks } from "@/lib/content";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "AI Practice", href: "/ai-practice" },
  { label: "Public Proof", href: "/proof" },
  { label: "About / Resume", href: "/about" },
  { label: "Ask", href: "/ask" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link className="brand" href="/" aria-label="이승환 포트폴리오 홈">
          <span className="brand-name">이승환</span>
          <span className="brand-trace" aria-hidden="true">
            ENGINEERING NOTES
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a className="nav-resume" href="/resume.pdf">
            Resume PDF <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="메뉴 열기">Menu</summary>
          <nav aria-label="모바일 주요 메뉴">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href="/resume.pdf">Resume PDF ↗</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <p className="footer-title">이승환 · Product Engineer</p>
          <p className="footer-copy">
            Flutter 앱과 React 웹을 만들고, 네이티브 연동부터 배포와
            운영까지 맡아 왔습니다.
          </p>
        </div>
        <div className="footer-links" aria-label="외부 프로필">
          {profileLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a href="mailto:seunghwanly@gmail.com">Email ↗</a>
        </div>
        <div className="footer-meta">
          <span>Seoul · available Dec 2026</span>
          <span>Last curated · 2026-07-29</span>
        </div>
      </div>
    </footer>
  );
}
