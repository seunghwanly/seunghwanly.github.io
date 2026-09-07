import type { Metadata, Viewport } from "next";
import { Gnb } from "@/components/gnb";
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
  themeColor: "#dff3d8",
  viewportFit: "cover",
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
          className="glass fixed top-3 left-3 z-1000 -translate-y-[160%] px-4 py-2.5 text-body text-ink focus:translate-y-0 print:hidden"
          href="#main-content"
        >
          {site.skipToContent}
        </a>
        {children}
        <Gnb />
      </body>
    </html>
  );
}
