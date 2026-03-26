// ============================================================
// Services — Registry
// Un fichier par service, tout centralisé ici.
// ============================================================

export type {
  ServiceContent,
  ServiceProcessStep,
  ServiceFAQ,
  ServiceTestimonial,
  NarrativeBlock,
  NarrativeStatement,
  SolutionItem,
  ScrollTitleContent,
  BentoCards,
  BentoTechnologyCard,
  BentoMetricCard,
  BentoSimpleCard,
  BentoWidgetsCard,
  QualityGuaranteesContent,
  QualityGuarantee,
  QualityFeatureCard,
  RelatedService,
  PilierMethodology,
  PilierMethodologyStep,
  PilierMetricsContent,
  PilierMetric,
  PilierTiming,
  PilierTimingItem,
  PilierTargets,
  PilierTargetItem,
} from "./types";

import type { ServiceContent } from "./types";

// ── Imports par service ──
import { creationRefonteSiteWeb } from "./creation-refonte-site-web";
import { creationLandingPage } from "./creation-landing-page";
import { auditMarketing } from "./audit-marketing";
import { roadmapStrategique } from "./roadmap-strategique";
import { positionnementMessaging } from "./positionnement-messaging";
import { creationContenuB2b } from "./creation-contenu-b2b";
import { seoContenuOrganique } from "./seo-contenu-organique";
import { campagnesPublicitaires } from "./campagnes-publicitaires";
import { coldOutreachProspection } from "./cold-outreach-prospection";

import { pitchDecksArgumentaires } from "./pitch-decks-argumentaires";
import { battlecardsCaseStudies } from "./battlecards-case-studies";
import { deploiementCrm } from "./deploiement-crm";
import { leadNurturing } from "./lead-nurturing";
import { creationWorkflows } from "./creation-workflows";
import { applicationsIa } from "./applications-ia";
import { auditSiteWeb } from "./audit-site-web";
import { directionMarketingExternalisee } from "./direction-marketing-externalisee";
import { strategiePersonalBranding } from "./strategie-personal-branding";

// ── Pages piliers (hub) ──
import { strategieMarketing } from "./strategie-marketing";
import { credibilitePositionnement } from "./credibilite-positionnement";
import { acquisitionB2b } from "./acquisition-b2b";
import { salesEnablement } from "./sales-enablement";
import { digitalisation } from "./digitalisation";

// ── Registry ──
export const allServices: ServiceContent[] = [
  creationRefonteSiteWeb,
  creationLandingPage,
  auditMarketing,
  roadmapStrategique,
  positionnementMessaging,
  creationContenuB2b,
  seoContenuOrganique,
  campagnesPublicitaires,
  coldOutreachProspection,

  pitchDecksArgumentaires,
  battlecardsCaseStudies,
  deploiementCrm,
  leadNurturing,
  creationWorkflows,
  applicationsIa,
  auditSiteWeb,
  directionMarketingExternalisee,
  strategiePersonalBranding,
  strategieMarketing,
  credibilitePositionnement,
  acquisitionB2b,
  salesEnablement,
  digitalisation,
].sort((a, b) => a.order - b.order);

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return allServices.map((s) => s.slug);
}
