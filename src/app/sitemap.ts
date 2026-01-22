import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://exemple.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    "",
    "/services",
    "/services/conseil-strategique",
    "/services/solutions-saas",
    "/cas-clients",
    "/cas-clients/startup-fintech",
    "/cas-clients/industrie-4-0",
    "/cas-clients/retail-omnicanal",
    "/blog",
    "/blog/transformation-digitale-2024",
    "/blog/choisir-solution-saas",
    "/blog/categorie/strategie",
    "/blog/categorie/tech",
    "/contact",
    "/local/paris/conseil-digital",
    "/local/lyon/solutions-saas",
    "/local/marseille/transformation-digitale",
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/blog/") ? 0.7 : 0.8,
  }));
}
