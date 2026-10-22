import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { brand } from "@/data/content";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

const grotesk = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  variable: "--font-grotesk",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono-jet",
});

const SITE_URL = "https://deepsi.space";
const TITLE = "DeepSI — Giải pháp AI Agent cho doanh nghiệp";
const DESCRIPTION =
  "DeepSI tư vấn & triển khai AI Agent cho doanh nghiệp — tự động hóa quy trình, khai thác tri thức nội bộ, hiệu quả hơn mỗi ngày.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI Agent",
    "AI Agent cho doanh nghiệp",
    "tự động hóa quy trình",
    "AI Integration",
    "RAG",
    "DeepSI",
  ],
  applicationName: "DeepSI",
  authors: [{ name: "DeepSI", url: SITE_URL }],
  creator: "DeepSI",
  publisher: "DeepSI",
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    locale: "vi_VN",
    type: "website",
    url: "/",
    siteName: "DeepSI",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  manifest: "/manifest.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "DeepSI",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      description: DESCRIPTION,
      sameAs: [brand.fanpage],
      email: brand.email,
      telephone: "+84966638105",
      areaServed: { "@type": "Country", name: "Việt Nam" },
      contactPoint: {
        "@type": "ContactPoint",
        email: brand.email,
        telephone: "+84966638105",
        contactType: "customer service",
        availableLanguage: ["Vietnamese", "English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "DeepSI",
      description: TITLE,
      inLanguage: "vi-VN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={clsxFonts([inter.variable, grotesk.variable, jetbrains.variable])}
    >
      <body className="bg-paper text-ink antialiased">
        <link rel="llms" href="/llms.txt" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

function clsxFonts(variables: string[]) {
  return variables.join(" ");
}
