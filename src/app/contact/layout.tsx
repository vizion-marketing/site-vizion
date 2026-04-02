import { createMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Contact | Agence Marketing B2B Toulouse | Vizion",
  description:
    "Contactez Vizion, agence marketing B2B à Toulouse. Réponse garantie sous 24h ouvrées. Échangeons sur votre projet de croissance : positionnement, sales enablement, stratégie marketing.",
  path: "/contact",
  image: {
    url: "/images/og-image.png",
    alt: "Vizion, agence marketing B2B stratégique à Toulouse",
  },
});

// ContactPage + LocalBusiness structured data
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  inLanguage: "fr",
  name: "Contact | Vizion, Agence Marketing B2B",
  description:
    "Contactez Vizion pour échanger sur votre projet de croissance B2B. Réponse garantie sous 24h ouvrées.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: "Vizion",
    description:
      "Agence de marketing stratégique B2B basée à Toulouse, pionnière de l'IA appliquée au marketing et aux ventes.",
    telephone: "+33750836543",
    email: "contact@by-vizion.com",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "815 La Pyrénéenne",
      addressLocality: "Labège",
      addressRegion: "Occitanie",
      postalCode: "31670",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.5416",
      longitude: "1.5045",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "10",
      reviewCount: "10",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33750836543",
      email: "contact@by-vizion.com",
      contactType: "customer service",
      availableLanguage: ["French", "English"],
      areaServed: "FR",
    },
  },
};

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
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
