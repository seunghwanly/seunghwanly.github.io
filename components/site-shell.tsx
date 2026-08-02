import Link from "next/link";
import { ButtonLink, DisclosureTrigger } from "@/components/content-ui";
import { profileLinks } from "@/lib/content";

const navigation = [
  { label: "작업", href: "/work" },
  { label: "소개", href: "/about" },
  { label: "모아보기", href: "/proof" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link className="brand" href="/" aria-label="이승환 포트폴리오 홈">
          <span className="brand-name">이승환</span>
          <span className="brand-trace" aria-hidden="true">
            Product Engineer
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/resume.pdf" variant="primary" trailing="external">
            이력서
          </ButtonLink>
        </nav>

        <details className="mobile-nav">
          <DisclosureTrigger
            variant="secondary"
            className="mobile-menu-trigger"
            ariaLabel="메뉴 열기"
          >
            메뉴
          </DisclosureTrigger>
          <nav aria-label="모바일 주요 메뉴">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/resume.pdf" variant="primary" trailing="external">
              이력서
            </ButtonLink>
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
            Flutter로 모바일 개발을 시작해 React 까지 확장해 운영하고 있습니다.
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
          <Link href="/ask">질문 찾기</Link>
          <Link href="/ai-practice">AI 활용</Link>
          <a href="mailto:seunghwanly@gmail.com">Email ↗</a>
        </div>
      </div>
    </footer>
  );
}
