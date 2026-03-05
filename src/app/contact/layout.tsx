import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact — Agence Marketing B2B",
  description:
    "Contactez Vizion, agence marketing B2B. Réponse garantie sous 24h ouvrées. Échangeons sur votre projet de croissance : positionnement, sales enablement, tunnel de vente.",
  path: "/contact",
});

// ContactPage structured data
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — Vizion, Agence Marketing B2B",
  url: "https://by-vizion.com/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": "https://by-vizion.com/#organization",
    name: "Vizion",
    telephone: "+33750836543",
    email: "contact@by-vizion.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "815 La Pyrénéenne",
      addressLocality: "Labège",
      addressRegion: "Occitanie",
      postalCode: "31670",
      addressCountry: "FR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "10",
      reviewCount: "10",
    },
  },
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
      {children}
    </>
  );
}
