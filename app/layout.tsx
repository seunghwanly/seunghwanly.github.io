import type { Metadata } from "next";
import type { Viewport } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { site } from "@/lib/content";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost";
const ogImage = new URL("/og.png", siteUrl).toString();

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default: site.metadata.defaultTitle,
      template: site.metadata.titleTemplate,
    },
    description: site.metadata.description,
    applicationName: site.metadata.applicationName,
    authors: [{ name: site.name }],
    creator: site.name,
    keywords: site.metadata.keywords,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: siteUrl,
      title: site.metadata.shareTitle,
      description: site.metadata.shareDescription,
      images: [
        {
          url: ogImage,
          width: 1568,
          height: 1003,
          alt: site.metadata.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.metadata.shareTitle,
      description: site.metadata.shareDescription,
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
        <a
          className="fixed top-3 left-3 z-1000 -translate-y-[160%] bg-ink px-4 py-2.5 text-subtitle text-canvas focus:translate-y-0 print:hidden"
          href="#main-content"
        >
          {site.skipToContent}
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
