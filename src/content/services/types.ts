// ============================================================
// Services — Types partagés
// ============================================================

export interface ServiceProcessStep {
  icon?: string;
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
  linkedin?: string;
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
  showcaseImages?: string[]; // Screenshots parallax en arrière-plan (6-9 images recommandées)
}

// Bento featured cards (WebFeaturesBento)
export interface BentoTechnologyCard {
  title: string;
  description: string;
  logos: string[];
}

export interface BentoMetricCard {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

export interface BentoSimpleCard {
  title: string;
  description: string;
}

export interface BentoWidgetsCard {
  title: string;
  description: string;
  tags: string[];
}

export interface BentoCards {
  sectionTitle?: string;
  sectionDescription?: string;
  image?: { src: string; alt: string };
  technology: BentoTechnologyCard;
  performance: BentoMetricCard;
  noTemplate: BentoSimpleCard;
  widgets: BentoWidgetsCard;
  integrations?: BentoSimpleCard & { logos?: string[] };
  growth?: BentoSimpleCard;
}

// Quality guarantees
export interface QualityGuarantee {
  icon: string;
  title: string;
  description: string;
}

export interface QualityFeatureCard {
  surtitre?: string;
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

export interface RelatedService {
  slug: string;
  icon: string;
  title: string;
  description: string;
  href: string;
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


  // Narrative
  constat: NarrativeBlock;

  // Solution sticky
  solutionTitle: string;
  solutionSubtitle?: string;
  solutionImage: string;
  solutionItems: SolutionItem[];

  /** Animated scroll interstitial. Web-specific — omit if not needed. */
  scrollTitle?: ScrollTitleContent;

  /** Web-specific bento grid. Other services should omit this field. */
  bentoCards?: BentoCards;

  // Process
  processTitle: string;
  processSubtitle: string;
  processSteps: ServiceProcessStep[];

  // Quality guarantees
  qualityGuarantees?: QualityGuaranteesContent;

  // Testimonials
  testimonialsTitle?: string;
  testimonialsSubtitle?: string;
  testimonials: ServiceTestimonial[];

  // FAQ
  faqTitle: string;
  faqs: ServiceFAQ[];

  // Related services
  relatedServicesTitle?: string;
  relatedServicesSubtitle?: string;
  relatedServices?: RelatedService[];

  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}
