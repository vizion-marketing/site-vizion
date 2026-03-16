// ============================================================
// Services — Types partagés
// ============================================================

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceTestimonial {
  quote: string;
  detail?: string;
  author: string;
  role: string;
  company: string;
  photo?: string;
  rating?: number;
}

export interface NarrativeStatement {
  headline: string;
  description: string;
}

export interface NarrativeBlock {
  surtitre: string;
  title: string;
  paragraphs: string[];
  highlights?: string[];
  statements?: NarrativeStatement[];
}

export interface SolutionItem {
  title: string;
  description: string;
}

export interface ServiceContent {
  // Identité
  slug: string;
  title: string;
  icon: string;
  category: string;
  order: number;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroBadge?: string;
  heroImage?: string;

  // Narrative — les 3 blocs éditoriaux
  constat: NarrativeBlock;
  consequences: NarrativeBlock;
  promesse: NarrativeBlock;

  // Solution sticky
  solutionTitle: string;
  solutionSubtitle?: string;
  solutionImage: string;
  solutionItems: SolutionItem[];

  // Features / Bénéfices
  featuresTitle: string;
  featuresSubtitle: string;
  features: ServiceFeature[];

  // Process
  processTitle: string;
  processSubtitle: string;
  processSteps: ServiceProcessStep[];

  // Testimonials
  testimonials: ServiceTestimonial[];

  // FAQ
  faqTitle: string;
  faqs: ServiceFAQ[];

  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}
