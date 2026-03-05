import type { Metadata } from "next";
import { allPosts, allClients } from "contentlayer/generated";
import {
  b2bSEO,
  organizationSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/content/b2b";
import B2BPageClient from "@/app/B2BPageClient";

// ============================================================================
// SEO METADATA
// ============================================================================

export const metadata: Metadata = {
  title: b2bSEO.title,
  description: b2bSEO.description,
  keywords: b2bSEO.keywords,
  openGraph: {
    title: b2bSEO.title,
    description: b2bSEO.description,
    url: "https://by-vizion.com",
    images: [
      {
        url: b2bSEO.ogImage,
        width: 1200,
        height: 630,
        alt: "Vizion — Agence Marketing B2B",
      },
    ],
    type: "website",
    locale: "fr_FR",
    siteName: "Vizion",
  },
  twitter: {
    card: "summary_large_image",
    title: b2bSEO.title,
    description: b2bSEO.description,
    images: [
      {
        url: b2bSEO.ogImage,
        alt: "Vizion — Agence Marketing B2B",
      },
    ],
  },
  alternates: {
    canonical: "https://by-vizion.com",
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

export default function HomePage() {
  // Get latest posts for the blog section
  const latestPosts = allPosts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      category: post.category,
      readingTime: post.readingTime,
      featuredImage: post.featuredImage,
    }));

  // Build carousel data from Contentlayer clients
  const carouselClients = allClients
    .filter((c) => !c.draft && c.featured)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map((client, idx) => {
      const testimonial = client.testimonial as { quote: string; author: string; role: string };
      const stat = client.carouselStat as { value: string; label: string };
      return {
        id: idx + 1,
        company: client.name,
        sector: client.sector,
        title: client.carouselTitle,
        quote: testimonial.quote,
        author: testimonial.author,
        role: testimonial.role,
        avatar: client.logo || "",
        mainImage: client.mainImage,
        secondaryImage: client.secondaryImage,
        stats: stat,
        href: client.url,
      };
    });

  return (
    <>
      {/* JSON-LD schemas — rendered server-side */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <B2BPageClient latestPosts={latestPosts} carouselClients={carouselClients} />
    </>
  );
}
