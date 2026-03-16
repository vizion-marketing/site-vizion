// ============================================================
// Services — Registry
// Un fichier par service, tout centralisé ici.
// ============================================================

export type {
  ServiceContent,
  ServiceFeature,
  ServiceProcessStep,
  ServiceFAQ,
  ServiceTestimonial,
  NarrativeBlock,
  NarrativeStatement,
  SolutionItem,
  ScrollTitleContent,
  BentoCards,
  BentoFeaturedCard,
  BentoMetricCard,
  BentoAICard,
  QualityGuaranteesContent,
  QualityGuarantee,
  QualityFeatureCard,
} from "./types";

import type { ServiceContent } from "./types";

// ── Imports par service ──
import { siteWebLandingPage } from "./site-web-landing-page";
// import { strategie } from "./strategie";
// import { seo } from "./seo";
// ...

// ── Registry ──
export const allServices: ServiceContent[] = [
  siteWebLandingPage,
].sort((a, b) => a.order - b.order);

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return allServices.map((s) => s.slug);
}
