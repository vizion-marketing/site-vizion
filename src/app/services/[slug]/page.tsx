import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allServices, allCaseStudies } from "contentlayer/generated";
import { ServiceContent } from "./ServiceContent";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all services
export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service non trouvé",
    };
  }

  const title = service.metaTitle;
  const description = service.metaDescription;
  const url = `https://by-vizion.com/services/${slug}`;

  return {
    title,
    description,
    keywords: service.keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: "Vizion",
      type: "website",
      images: service.heroImage ? [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: service.heroImage ? [service.heroImage] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Get related case studies
  const relatedCases = service.relatedCaseStudies?.length
    ? allCaseStudies.filter((cs) => service.relatedCaseStudies?.includes(cs.slug))
    : allCaseStudies.slice(0, 2);

  // Schema.org structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Vizion",
      url: "https://by-vizion.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toulouse",
        addressRegion: "Occitanie",
        addressCountry: "FR",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceType: service.category,
    url: `https://by-vizion.com/services/${slug}`,
  };

  // FAQ Schema
  const faqJsonLd = service.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq: { question: string; answer: string }) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <ServiceContent service={service} relatedCases={relatedCases} />
    </>
  );
}
