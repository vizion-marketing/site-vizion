import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { homeContent, organizationSchema, faqSchema } from "@/content/home";
import HomePageClient from "./HomePageClient";

// ============================================================================
// SEO METADATA
// ============================================================================

export const metadata: Metadata = {
  title: homeContent.seo.title,
  description: homeContent.seo.description,
  keywords: homeContent.seo.keywords,
  openGraph: {
    title: homeContent.seo.title,
    description: homeContent.seo.description,
    images: [
      {
        url: homeContent.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Vizion — Agence marketing à Toulouse",
      },
    ],
    type: "website",
    locale: "fr_FR",
    siteName: "Vizion",
  },
  twitter: {
    card: "summary_large_image",
    title: homeContent.seo.title,
    description: homeContent.seo.description,
    images: [
      {
        url: homeContent.seo.ogImage,
        alt: "Vizion — Agence marketing à Toulouse",
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

  return (
    <>
      {/* JSON-LD schemas — rendered server-side, no client JS needed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageClient latestPosts={latestPosts} />
    </>
  );
}
