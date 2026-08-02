import type { Metadata } from "next";
import type { Viewport } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost";
const ogImage = new URL("/og.png", siteUrl).toString();

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default: "이승환 — Product Engineer · Mobile & Web",
      template: "%s · 이승환",
    },
    description:
      "Flutter 앱과 React 웹을 만들고, Kotlin·Swift 연동부터 빌드·배포 자동화와 운영 중 오류 추적까지 맡아 온 Product Engineer 이승환의 포트폴리오입니다.",
    applicationName: "Seunghwan Lee Portfolio",
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
      url: siteUrl,
      title: "이승환 — Product Engineer · Mobile & Web",
      description:
        "모바일과 웹을 오가며 제품을 만들고 운영한 이승환의 대표 작업.",
      images: [
        {
          url: ogImage,
          width: 1568,
          height: 1003,
          alt: "Seunghwan Lee · Product Engineer · Mobile · Web",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "이승환 — Product Engineer · Mobile & Web",
      description:
        "모바일과 웹을 오가며 제품을 만들고 운영한 이승환의 대표 작업.",
      images: [ogImage],
    },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#eef1f6",
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
