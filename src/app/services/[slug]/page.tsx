import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allServices, allCaseStudies } from "contentlayer/generated";
import { ServiceContent } from "./ServiceContent";
import { SITE_URL } from "@/lib/constants";

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

  // Get other services for cross-linking (exclude current)
  const otherServices = allServices
    .filter((s) => s.slug !== slug)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .slice(0, 3);

  // Schema.org structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${slug}#service`,
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Vizion",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-vizion.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "815 La Pyrénéenne",
        addressLocality: "Labège",
        postalCode: "31670",
        addressRegion: "Occitanie",
        addressCountry: "FR",
      },
      telephone: "+33750836543",
      email: "contact@by-vizion.com",
    },
    areaServed: [
      { "@type": "City", name: "Toulouse" },
      { "@type": "AdministrativeArea", name: "Occitanie" },
      { "@type": "Country", name: "France" },
    ],
    serviceType: service.category,
    url: `${SITE_URL}/services/${slug}`,
  };

  // BreadcrumbList schema
  const breadcrumbJsonLd = {
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
        item: `${SITE_URL}/services/${slug}`,
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ServiceContent service={service} relatedCases={relatedCases} otherServices={otherServices} />
    </>
  );
}
