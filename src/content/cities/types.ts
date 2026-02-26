// ============================================================================
// TYPES PAGES VILLES — Contenu 100% unique par ville
// ============================================================================

export interface CTA {
  text: string;
  href: string;
}

export interface CityHero {
  badge: string;
  h1: string;
  h1Highlight: string;
  baseline: string;
  cta: { primary: CTA; secondary: CTA };
  socialProof: string;
}

export interface CityIntro {
  surtitre: string;
  h2: string;
  h2Highlight: string;
  paragraphs: string[];
}

export interface CityPilier {
  numero: string;
  surtitre: string;
  titre: string;
  description: string;
  services: string[];
  cta?: string;
}

export interface CityPiliers {
  surtitre: string;
  h2: string;
  description: string;
  piliers: CityPilier[];
}

export interface CityFAQ {
  surtitre: string;
  h2: string;
  h2Highlight: string;
  description: string;
  questions: { question: string; answer: string }[];
  ctaText: string;
  ctaButton: CTA;
}

export interface CityLocalSEO {
  surtitre: string;
  h2: string;
  h2Highlight: string;
  description: string;
  paragraphs: string[];
  preuveLocale: string;
  mapEmbedUrl: string;
  villes: { name: string; label: string; href?: string }[];
  cta: CTA;
}

export interface CityFinalCTA {
  trustBadge: string;
  h2: string;
  h2Highlight: string;
  description: string;
  cta: { primary: CTA; secondary: CTA };
  trustElements: string[];
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface CityContent {
  seo: SEO;
  hero: CityHero;
  intro: CityIntro;
  piliers: CityPiliers;
  localSEO: CityLocalSEO;
  faq: CityFAQ;
  finalCta: CityFinalCTA;
}

export interface CityMeta {
  slug: string;
  routeSlug: string;
  city: string;
  department: string;
  canonical: string;
}

export interface CityPageData {
  meta: CityMeta;
  content: CityContent;
  organizationSchema: Record<string, unknown>;
  faqSchema: Record<string, unknown>;
  breadcrumbSchema: Record<string, unknown>;
}
