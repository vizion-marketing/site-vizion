import { MetadataRoute } from "next";
import { SITEMAP_QUERY } from "../../sanity/lib/queries";
import { sanityFetch } from "@/lib/sanity/fetch";
import { CITY_SLUGS } from "@/content/cities";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://by-vizion.com";

interface SitemapData {
  posts: { url: string; lastModified?: string }[];
  clients: { url: string }[];
  caseStudies: { url: string; lastModified?: string }[];
  services: { url: string; lastModified?: string }[];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await sanityFetch<SitemapData>(
    SITEMAP_QUERY,
    {},
    { tags: ["posts", "clients", "caseStudies", "services"], revalidate: 3600 },
  );

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
  const blogPages = (data.posts || []).map((post) => ({
    url: `${baseUrl}${post.url}`,
    lastModified: post.lastModified ? new Date(post.lastModified) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Client profile pages (pillar pages — higher priority)
  const clientPages = (data.clients || []).map((c) => ({
    url: `${baseUrl}${c.url}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Case studies
  const caseStudyPages = (data.caseStudies || []).map((cs) => ({
    url: `${baseUrl}${cs.url}`,
    lastModified: cs.lastModified ? new Date(cs.lastModified) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Services
  const servicePages = (data.services || []).map((s) => ({
    url: `${baseUrl}${s.url}`,
    lastModified: s.lastModified ? new Date(s.lastModified) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // City landing pages (SEO local)
  const cityPages = CITY_SLUGS.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...clientPages,
    ...caseStudyPages,
    ...servicePages,
    ...cityPages,
  ];
}
