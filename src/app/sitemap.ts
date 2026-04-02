import { MetadataRoute } from "next";
import { SITEMAP_QUERY } from "../../sanity/lib/queries";
import { sanityFetch } from "@/lib/sanity/fetch";
import { CITY_SLUGS } from "@/content/cities";
import { allServices } from "@/content/services";
import { allEnjeux } from "@/content/enjeux";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://by-vizion.com";

interface SitemapData {
  posts: { url: string; lastModified?: string }[];
  clients: { url: string }[];
  caseStudies: { url: string; lastModified?: string }[];
  formations: { url: string }[];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await sanityFetch<SitemapData>(
    SITEMAP_QUERY,
    {},
    { tags: ["posts", "clients", "caseStudies", "services", "formations"], revalidate: 3600 },
  );

  // Static pages
  const staticRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" as const },
    { route: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/services", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/formations", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/cas-clients", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/equipe", priority: 0.6, changeFrequency: "monthly" as const },
    { route: "/equipe/lucas-gonzalez", priority: 0.6, changeFrequency: "monthly" as const },
    { route: "/equipe/hugo-schuppe", priority: 0.6, changeFrequency: "monthly" as const },
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

  // Client profile pages (pillar pages - higher priority)
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

  // Services (from TypeScript content)
  const servicePages = allServices.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Enjeux (situations de transformation)
  const enjeuxPages = allEnjeux.map((e) => ({
    url: `${baseUrl}/enjeux/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Sector landing pages (SEO sectoriel)
  const sectorSlugs = ["franchise", "saas-b2b", "services-b2b", "industrie-b2b", "business-local"];
  const sectorPages = sectorSlugs.map((slug) => ({
    url: `${baseUrl}/cas-clients/secteur/${slug}`,
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

  // Formations
  const formationPages = (data.formations || []).map((f) => ({
    url: `${baseUrl}${f.url}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...clientPages,
    ...caseStudyPages,
    ...servicePages,
    ...enjeuxPages,
    ...formationPages,
    ...sectorPages,
    ...cityPages,
  ];
}
