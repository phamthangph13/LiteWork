import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { brand, faqs, SITE_LAST_MODIFIED } from "@/data/content";

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
const TITLE = "DeepSI — Giải pháp AI Agent cho doanh nghiệp Việt Nam";
const DESCRIPTION =
  "DeepSI tư vấn & triển khai AI Agent cho doanh nghiệp Việt Nam — tự động hóa quy trình, chatbot AI, trợ lý tri thức nội bộ (RAG) và tích hợp hệ thống hiện có.";
const KEYWORDS = [
  "AI Agent cho doanh nghiệp",
  "triển khai AI Agent",
  "xây dựng AI Agent",
  "giải pháp AI cho doanh nghiệp",
  "tự động hóa quy trình bằng AI",
  "chatbot AI cho doanh nghiệp",
  "trợ lý AI nội bộ",
  "RAG",
  "tích hợp AI",
  "AI automation",
  "AI Agent Việt Nam",
  "DeepSI",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
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
      alternateName: "DeepSI AI Agent Solutions",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icons/icon-512.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/opengraph-image.png`,
      description: DESCRIPTION,
      slogan: "Biến AI Agent thành năng lực vận hành thực tế.",
      sameAs: [brand.fanpage],
      email: brand.email,
      telephone: "+84966638105",
      areaServed: { "@type": "Country", name: "Việt Nam" },
      knowsAbout: KEYWORDS,
      contactPoint: {
        "@type": "ContactPoint",
        email: brand.email,
        telephone: "+84966638105",
        contactType: "customer service",
        availableLanguage: ["Vietnamese", "English"],
      },
      makesOffer: { "@id": `${SITE_URL}/#services` },
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
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
      },
      inLanguage: "vi-VN",
      datePublished: SITE_LAST_MODIFIED,
      dateModified: SITE_LAST_MODIFIED,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#services`,
      name: "Tư vấn & triển khai AI Agent cho doanh nghiệp",
      serviceType: "AI Agent development, automation and integration",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Việt Nam" },
      description:
        "DeepSI tư vấn, xây dựng và triển khai AI Agent theo quy trình nghiệp vụ: tự động hóa quy trình, trợ lý tri thức nội bộ (RAG), chatbot AI và tích hợp hệ thống.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dịch vụ AI Agent cho doanh nghiệp",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Phát triển AI Agent theo nghiệp vụ",
              description:
                "Thiết kế agent chuyên trách với phạm vi trách nhiệm, guardrails và log rõ ràng.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tự động hóa quy trình",
              description:
                "Kết nối các bước thủ công thành luồng vận hành tự động, có điểm kiểm soát của con người.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Trợ lý tri thức nội bộ (RAG)",
              description:
                "Biến tài liệu và kho dữ liệu nội bộ thành trợ lý tra cứu tức thời, trả lời kèm trích dẫn nguồn.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tích hợp AI vào hệ thống",
              description:
                "Kết nối agent với CRM, ERP, website, Zalo, email, Google Workspace hoặc hệ thống nội bộ theo hướng API-first.",
            },
          },
        ],
      },
    },
    {
      // FAQ rich results were retired by Google in May 2026; this block keeps
      // the visible Q&A machine-readable for AI search and entity clarity.
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      isPartOf: { "@id": `${SITE_URL}/#webpage` },
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
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
