import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { homeContent } from "@/content/home";
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
    images: [homeContent.seo.ogImage],
    type: "website",
    locale: "fr_FR",
    siteName: "Vizion",
  },
  twitter: {
    card: "summary_large_image",
    title: homeContent.seo.title,
    description: homeContent.seo.description,
    images: [homeContent.seo.ogImage],
  },
  alternates: {
    canonical: "https://vizion.fr",
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

  return <HomePageClient latestPosts={latestPosts} />;
}
