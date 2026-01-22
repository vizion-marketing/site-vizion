import { Metadata } from "next";
import { getServicePages } from "@/lib/contentlayer";
import { ServicesContent } from "./ServicesContent";

// Constants for SEO
const SITE_URL = "https://vizion.fr";
const SITE_NAME = "Vizion";

// Static SEO Metadata
export const metadata: Metadata = {
  title: "Nos Services | Conseil Stratégique & Solutions SaaS",
  description: "Découvrez nos services de conseil stratégique digital et développement de solutions SaaS sur mesure. Audit, roadmap, accompagnement et développement full-stack pour votre transformation numérique.",
  keywords: [
    "conseil stratégique digital",
    "solutions SaaS",
    "transformation digitale",
    "développement web sur mesure",
    "audit digital",
    "accompagnement digital",
  ],
  openGraph: {
    title: "Nos Services | Conseil Stratégique & Solutions SaaS",
    description: "Découvrez nos services de conseil stratégique digital et développement de solutions SaaS sur mesure pour votre transformation numérique.",
    url: `${SITE_URL}/services`,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Services | Conseil Stratégique & Solutions SaaS",
    description: "Découvrez nos services de conseil stratégique digital et développement de solutions SaaS sur mesure.",
  },
  alternates: {
    canonical: `${SITE_URL}/services`,
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

export default async function ServicesPage() {
  // Load services dynamically from MDX content
  const services = await getServicePages();

  // JSON-LD Schema for Services List
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services Vizion",
    description: "Services de conseil stratégique digital et solutions SaaS sur mesure",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${SITE_URL}/services/${service.slug.replace("services/", "")}`,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent services={services} />
    </>
  );
}
