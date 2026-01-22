import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPages, allCaseStudies } from "contentlayer/generated";
import { ServiceDetailContent } from "./ServiceDetailContent";

// Constants for SEO
const SITE_URL = "https://vizion.fr";
const SITE_NAME = "Vizion";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all service pages
export async function generateStaticParams() {
  const servicePages = allPages.filter((page) => page.template === "service");
  
  return servicePages.map((service) => ({
    slug: service.slug.replace("services/", ""),
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = allPages.find(
    (page) => page.template === "service" && page.slug === `services/${slug}`
  );

  if (!service) {
    return {
      title: "Service non trouvé",
    };
  }

  const title = service.metaTitle || `${service.title} | ${SITE_NAME}`;
  const description = service.metaDescription || service.description;
  const url = `${SITE_URL}/services/${slug}`;
  const keywords = service.keywords || [];

  return {
    title,
    description,
    keywords: [
      ...keywords,
      service.title.toLowerCase(),
      "conseil digital",
      "transformation numérique",
    ],
    openGraph: {
      title: service.metaTitle || service.title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: service.featuredImage
        ? [
            {
              url: service.featuredImage.startsWith("http")
                ? service.featuredImage
                : `${SITE_URL}${service.featuredImage}`,
              width: 1200,
              height: 630,
              alt: service.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle || service.title,
      description,
      images: service.featuredImage ? [service.featuredImage] : [],
    },
    alternates: {
      canonical: url,
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

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  
  // Find the service page
  const service = allPages.find(
    (page) => page.template === "service" && page.slug === `services/${slug}`
  );

  if (!service) {
    notFound();
  }

  // Get related case studies
  const relatedSlugs = (service.relatedCaseStudies as string[]) || [];
  const relatedCases = allCaseStudies
    .filter((cs) => relatedSlugs.includes(cs.slug))
    .slice(0, 2);

  // Build JSON-LD Schema.org structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "contact@vizion.fr",
        availableLanguage: ["French", "English"],
      },
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceType: service.category || "Conseil Digital",
    // Add FAQ schema if FAQs exist
    ...(service.faqs && (service.faqs as Array<{ question: string; answer: string }>).length > 0
      ? {
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: (service.faqs as Array<{ question: string; answer: string }>).map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        }
      : {}),
  };

  // Build FAQ Schema separately for better SEO
  const faqSchema = service.faqs && (service.faqs as Array<{ question: string; answer: string }>).length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (service.faqs as Array<{ question: string; answer: string }>).map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  // Build BreadcrumbList schema
  const breadcrumbSchema = {
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

  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* FAQ Schema (if FAQs exist) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <ServiceDetailContent service={service} relatedCases={relatedCases} />
    </>
  );
}
