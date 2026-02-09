import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { organizationSchema } from "@/content/home";
import {
  agenceMarketingToulouseContent,
  breadcrumbSchema,
  serviceSchema,
  localFaqSchema,
} from "@/content/agence-marketing-toulouse";
import AgenceMarketingToulouseClient from "./AgenceMarketingToulouseClient";

// ============================================================================
// SEO METADATA
// ============================================================================

export const metadata: Metadata = {
  title: agenceMarketingToulouseContent.seo.title,
  description: agenceMarketingToulouseContent.seo.description,
  keywords: agenceMarketingToulouseContent.seo.keywords,
  openGraph: {
    title: agenceMarketingToulouseContent.seo.title,
    description: agenceMarketingToulouseContent.seo.description,
    url: `${SITE_URL}/agence-marketing-toulouse`,
    images: ["/og-image.jpg"],
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: agenceMarketingToulouseContent.seo.title,
    description: agenceMarketingToulouseContent.seo.description,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: `${SITE_URL}/agence-marketing-toulouse`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function AgenceMarketingToulousePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localFaqSchema),
        }}
      />

      <AgenceMarketingToulouseClient />
    </>
  );
}
