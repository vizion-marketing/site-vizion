import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts, allClients } from "contentlayer/generated";
import { getCityData, CITY_SLUGS } from "@/content/cities";
import CityPageClient from "@/app/CityPageClient";

// Only pre-generated city slugs are valid — all others 404
export const dynamicParams = false;

export async function generateStaticParams() {
  return CITY_SLUGS.map((slug) => ({ citySlug: slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ citySlug: string }> }
): Promise<Metadata> {
  const { citySlug } = await params;
  const cityData = await getCityData(citySlug);
  if (!cityData) return {};

  const { content, meta } = cityData;
  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: meta.canonical,
      images: [
        {
          url: content.seo.ogImage,
          width: 1200,
          height: 630,
          alt: `Vizion — Agence marketing à ${meta.city}`,
        },
      ],
      type: "website",
      locale: "fr_FR",
      siteName: "Vizion",
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: [
        {
          url: content.seo.ogImage,
          alt: `Vizion — Agence marketing à ${meta.city}`,
        },
      ],
    },
    alternates: {
      canonical: meta.canonical,
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
}

export default async function CityPage(
  { params }: { params: Promise<{ citySlug: string }> }
) {
  const { citySlug } = await params;
  const cityData = await getCityData(citySlug);
  if (!cityData) notFound();

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityData.organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityData.faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityData.breadcrumbSchema) }}
      />
      <CityPageClient content={cityData.content} latestPosts={latestPosts} carouselClients={carouselClients} />
    </>
  );
}
