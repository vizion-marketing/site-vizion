import type { Metadata } from "next";
import { getLatestPosts } from "@/lib/sanity/posts";
import { getFeaturedClients } from "@/lib/sanity/clients";
import { getAllCaseStudies } from "@/lib/sanity/caseStudies";
import { resolveImageUrl } from "../../sanity/lib/image";
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
        alt: "Vizion, Agence Marketing B2B",
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
        alt: "Vizion, Agence Marketing B2B",
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

export default async function HomePage() {
  const [rawPosts, featuredClients, allCaseStudies] = await Promise.all([
    getLatestPosts(3),
    getFeaturedClients(),
    getAllCaseStudies(),
  ]);

  // Serialize posts for client component
  const latestPosts = rawPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    category: post.category,
    readingTime: post.readingTime,
    featuredImage:
      resolveImageUrl(post.featuredImage) || post.featuredImageUrl || undefined,
  }));

  // Build carousel data from Sanity clients
  const carouselClients = featuredClients.map((client, idx) => ({
    id: idx + 1,
    company: client.name,
    companyType: client.companyType || "",
    sector: client.sector,
    title: client.headline || client.name,
    description: client.description,
    quote: client.testimonial?.quote || "",
    author: client.testimonial?.author || "",
    role: client.testimonial?.role || "",
    avatar: resolveImageUrl(client.logo) || undefined,
    mainImage: resolveImageUrl(client.mainImage, 1200) || undefined,
    authorPhoto: resolveImageUrl(client.testimonial?.photo) || undefined,
    highlightMetrics: client.highlightMetrics?.map((m) => ({ value: m.value, label: m.label })),
    stats: client.firstMetric || { value: "", label: "" },
    href: client.url,
  }));

  const clientLogos = featuredClients
    .map((client) => ({
      name: client.name,
      logoUrl: resolveImageUrl(client.logo) || undefined,
    }))
    .filter((c) => c.logoUrl);

  return (
    <>
      {/* JSON-LD schemas - rendered server-side */}
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
      <B2BPageClient
        latestPosts={latestPosts}
        clientLogos={clientLogos}
        carouselClients={carouselClients}
        caseStudies={allCaseStudies
          .map((cs) => ({
            title: cs.title,
            company: cs.company,
            sector: cs.sector,
            href: cs.clientSlug ? `/cas-clients/${cs.clientSlug}/${cs.slug}` : "/cas-clients",
            image: resolveImageUrl(cs.heroImage, 800) || undefined,
            _sort: Math.random(),
          }))
          .sort((a, b) => a._sort - b._sort)
          .map(({ _sort, ...cs }) => cs)}
      />
    </>
  );
}
