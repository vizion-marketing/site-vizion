import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { ServiceDetailContent } from "./ServiceDetailContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const baseMetadata = createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.heroImage
      ? { url: service.heroImage, alt: service.heroTitle }
      : undefined,
  });

  return {
    ...baseMetadata,
    keywords: service.keywords,
    authors: [{ name: "Lucas Gonzalez" }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  // JSON-LD — Organization (réutilisé dans Service.provider)
  const serviceUrl = `${SITE_URL}/services/${service.slug}`;

  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/vizion-logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/vizion-marketing-b2b/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toulouse",
      addressRegion: "Occitanie",
      addressCountry: "FR",
    },
  };

  // Reviews depuis les témoignages (rating >= 4)
  const reviews = service.testimonials
    .filter((t) => t.rating && t.rating >= 4)
    .map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.author,
        jobTitle: t.role,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.detail || t.quote,
    }));

  const hasReviews = reviews.length > 0;

  const jsonLd = [
    // 1. WebPage — contexte de la page
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": serviceUrl,
      url: serviceUrl,
      name: service.metaTitle,
      description: service.metaDescription,
      isPartOf: { "@type": "WebSite", url: SITE_URL },
      about: { "@type": "Service", name: service.title },
      inLanguage: "fr-FR",
    },
    // 2. Service — cœur du schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.category,
      description: service.metaDescription,
      url: serviceUrl,
      provider: organization,
      areaServed: {
        "@type": "Country",
        name: "France",
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": serviceUrl },
      ...(service.heroImage && {
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}${service.heroImage}`,
          width: 1200,
          height: 630,
        },
      }),
      ...(hasReviews && {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue:
            reviews.reduce(
              (sum, r) => sum + (r.reviewRating.ratingValue ?? 0),
              0
            ) / reviews.length,
          reviewCount: reviews.length,
          bestRating: 5,
          worstRating: 1,
        },
        review: reviews,
      }),
    },
    // 3. BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: serviceUrl,
        },
      ],
    },
    // 4. FAQPage (si des FAQs existent)
    ...(service.faqs.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]
      : []),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServiceDetailContent service={service} />
    </>
  );
}
