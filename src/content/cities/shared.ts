// ============================================================================
// CONSTANTES PARTAGÉES — Pages villes
// ============================================================================
// Éléments communs à toutes les pages villes (badges villes, map, schemas).
// Le contenu textuel reste 100% unique par ville.
// ============================================================================

import type { CityMeta } from "./types";

export const SITE_URL = "https://by-vizion.com";

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.5!2d1.5102!3d43.5416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x40ae6168453a970!2sLab%C3%A8ge!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr";

export const VILLES_BADGES = [
  { name: "Toulouse", label: "Siège", href: "/" },
  { name: "Montpellier", label: "Active", href: "/agence-marketing-montpellier" },
  { name: "Albi", label: "Interventions", href: "/agence-marketing-albi" },
  { name: "Auch", label: "Interventions", href: "/agence-marketing-auch" },
  { name: "Agen", label: "Interventions", href: "/agence-marketing-agen" },
  { name: "Castres", label: "Interventions", href: "/agence-marketing-castres" },
  { name: "Rodez", label: "Interventions", href: "/agence-marketing-rodez" },
  { name: "Mazamet", label: "Interventions", href: "/agence-marketing-communication-mazamet" },
];

// --------------------------------------------------------------------------
// Schema generators
// --------------------------------------------------------------------------

export function buildOrganizationSchema(meta: CityMeta) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "Vizion",
    alternateName: `Vizion — Agence Marketing ${meta.city}`,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-vizion.avif`,
    image: `${SITE_URL}/hero-binoculars.avif`,
    description: `Agence marketing intervenant à ${meta.city} et en ${meta.department}. Positionnement, tunnel de vente, sales enablement.`,
    telephone: "+33750836543",
    email: "contact@by-vizion.com",
    foundingDate: "2021",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5, maxValue: 10 },
    address: {
      "@type": "PostalAddress",
      streetAddress: "815 La Pyrénéenne",
      addressLocality: "Labège",
      postalCode: "31670",
      addressRegion: "Occitanie",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.5416,
      longitude: 1.5102,
    },
    areaServed: [
      { "@type": "City", name: meta.city },
      { "@type": "AdministrativeArea", name: meta.department },
      { "@type": "AdministrativeArea", name: "Occitanie" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/vizion-marketing-b2b/",
    ],
    priceRange: "€€€",
  };
}

export function buildFaqSchema(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(meta: CityMeta) {
  return {
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
        name: `Agence Marketing ${meta.city}`,
        item: meta.canonical,
      },
    ],
  };
}
