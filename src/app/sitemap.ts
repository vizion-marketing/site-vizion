import { MetadataRoute } from "next";
import { allPosts, allCaseStudies } from "contentlayer/generated";
import { CITY_SLUGS } from "@/content/cities";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://by-vizion.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" as const },
    { route: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
{ route: "/cas-clients", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/confidentialite", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const staticPages = staticRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  // Blog posts
  const blogPages = allPosts
    .filter((post) => !post.draft && !post._raw.sourceFileName.startsWith("_"))
    .map((post) => ({
      url: `${baseUrl}${post.url}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Case studies
  const caseStudyPages = allCaseStudies
    .filter((cs) => !cs._raw.sourceFileName.startsWith("_"))
    .map((cs) => ({
      url: `${baseUrl}${cs.url}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  // City landing pages (SEO local)
  const cityPages = CITY_SLUGS.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...caseStudyPages, ...cityPages];
}
