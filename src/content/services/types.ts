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

// Scroll title (interstitial animated section)
export interface ScrollTitleContent {
  hook: string; // ex: "Bref."
  phrase: string; // ex: "Chez Vizion, on crée\ndes sites internet..."
  adjectives: string[]; // ex: ["simples", "performants", "qui convertissent"]
}

// Bento featured cards (WebFeaturesBento hardcoded cards)
export interface BentoFeaturedCard {
  title: string;
  description: string;
}

export interface BentoMetricCard {
  value: number;
  label: string;
  description: string;
}

export interface BentoAICard {
  label: string;
  title: string;
  description: string;
}

export interface BentoCards {
  featured: BentoFeaturedCard;
  metric: BentoMetricCard;
  seo: BentoFeaturedCard;
  design: BentoFeaturedCard;
  ai: BentoAICard;
  integrations: BentoFeaturedCard;
}

// Quality guarantees
export interface QualityGuarantee {
  icon: string;
  title: string;
  description: string;
}

export interface QualityFeatureCard {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface QualityGuaranteesContent {
  surtitre: string;
  sectionTitle: string;
  sectionDescription: string;
  cardSurtitre: string;
  cardTitle: string;
  cardDescription: string;
  guarantees: QualityGuarantee[];
  featureCard: QualityFeatureCard;
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

  // Scroll title (interstitial)
  scrollTitle?: ScrollTitleContent;

  // Features / Bénéfices
  featuresTitle: string;
  featuresSubtitle: string;
  features: ServiceFeature[];

  // Bento featured cards
  bentoCards?: BentoCards;

  // Process
  processTitle: string;
  processSubtitle: string;
  processSteps: ServiceProcessStep[];

  // Quality guarantees
  qualityGuarantees?: QualityGuaranteesContent;

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
