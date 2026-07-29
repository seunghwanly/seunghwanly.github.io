import type { Metadata } from "next";
import type { Viewport } from "next";
import { headers } from "next/headers";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host")?.split(",")[0]?.trim();
  const host = forwardedHost ?? requestHeaders.get("host") ?? "localhost";
  const forwardedProtocol = requestHeaders
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();
  const protocol =
    forwardedProtocol ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const ogImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: new URL(origin),
    title: {
      default: "이승환 — Product Engineer · Mobile & Frontend",
      template: "%s · 이승환",
    },
    description:
      "오프라인과 온라인, Native와 Web, 제품과 플랫폼의 경계를 잇고 테스트·리뷰·운영 관측으로 검증하는 Product Engineer 이승환의 포트폴리오입니다.",
    applicationName: "Seunghwan Lee · Evidence Portfolio",
    authors: [{ name: "이승환" }],
    creator: "이승환",
    keywords: [
      "Product Engineer",
      "Mobile",
      "Frontend",
      "Flutter",
      "React",
      "TypeScript",
      "Kotlin",
      "Swift",
      "Client Platform",
      "Observability",
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: origin,
      title: "이승환 — Product Engineer · Mobile & Frontend",
      description:
        "제품의 경계를 잇고, 테스트·리뷰·운영 관측으로 신뢰를 만듭니다.",
      images: [
        {
          url: ogImage,
          width: 1729,
          height: 910,
          alt: "Seunghwan Lee · Product Engineer · Mobile · Frontend · Client Platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "이승환 — Product Engineer · Mobile & Frontend",
      description:
        "제품의 경계를 잇고, 테스트·리뷰·운영 관측으로 신뢰를 만듭니다.",
      images: [ogImage],
    },
  };
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#07111f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main-content">
          본문으로 건너뛰기
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
