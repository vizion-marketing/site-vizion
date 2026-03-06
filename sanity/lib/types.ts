import type { PortableTextBlock } from "@portabletext/types";

// ============================================================
// Object types (mirroring Sanity object schemas)
// ============================================================

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  alt?: string;
  caption?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  photo?: SanityImage;
  rating?: number;
}

export interface Metric {
  value: string;
  label: string;
  trend?: "up" | "down" | "neutral";
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step?: string;
  title: string;
  description: string;
  duration?: string;
  deliverables?: string[];
}

export interface PainPoint {
  icon?: string;
  title: string;
  description: string;
}

export interface Feature {
  icon?: string;
  title: string;
  description: string;
}

export interface ApproachPhase {
  phase?: string;
  title: string;
  description: string;
  deliverables?: string[];
}

export interface Resource {
  title: string;
  url: string;
  type?: "internal" | "external";
  description?: string;
}

export interface ComparisonRow {
  feature: string;
  left?: string;
  right?: string;
}

export interface TrackRecordStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Deliverable {
  title: string;
  description?: string;
  icon?: string;
}

// ============================================================
// Document types (mirroring Sanity document schemas)
// ============================================================

export interface Post {
  _id: string;
  _type: "post";
  title: string;
  slug: string; // resolved from slug.current in GROQ
  description: string;
  date: string;
  dateModified?: string;
  author: string;
  category: string;
  tags?: string[];
  featuredImage?: SanityImage;
  featuredImageUrl?: string;
  draft: boolean;
  body?: PortableTextBlock[];
  resources?: Resource[];
  faq?: FAQ[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLink?: string;
  // Computed
  readingTime?: string;
  url?: string;
}

export interface Client {
  _id: string;
  _type: "client";
  name: string;
  slug: string;
  sector: string;
  sectorIcon: string;
  logo?: SanityImage;
  description: string;
  size?: string;
  location?: string;
  website?: string;
  mainImage: SanityImage;
  secondaryImage: SanityImage;
  carouselTitle: string;
  carouselStat: { value: string; label: string };
  testimonial: Testimonial;
  body?: PortableTextBlock[];
  featured: boolean;
  order: number;
  draft: boolean;
  metaTitle?: string;
  metaDescription?: string;
  // Computed
  url?: string;
  caseStudyCount?: number;
}

export interface CaseStudy {
  _id: string;
  _type: "caseStudy";
  title: string;
  slug: string;
  description: string;
  sector: string;
  sectorIcon: string;
  company: string;
  clientSlug?: string; // resolved from client->slug.current
  companyLogo?: SanityImage;
  heroImage?: SanityImage;
  executiveSummary: string;
  projectDuration: string;
  projectYear: string;
  context: string;
  challenges: string[];
  approachPhases: ApproachPhase[];
  metrics: Metric[];
  resultsDetails?: string;
  testimonial?: Testimonial;
  deliverables?: Deliverable[];
  body?: PortableTextBlock[];
  publishedAt: string;
  featured: boolean;
  order: number;
  draft: boolean;
  metaTitle?: string;
  metaDescription?: string;
  // Computed
  readingTime?: string;
  url?: string;
}

export interface Service {
  _id: string;
  _type: "service";
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  heroTitle: string;
  heroSubtitle: string;
  heroBadge?: string;
  heroImage?: SanityImage;
  icon: string;
  category: string;
  metrics?: Metric[];
  painPointsTitle?: string;
  painPoints?: PainPoint[];
  featuresTitle?: string;
  features?: Feature[];
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: ProcessStep[];
  relatedCaseStudies?: CaseStudy[];
  faqTitle?: string;
  faqs?: FAQ[];
  problemTitle?: string;
  problemParagraphs?: string[];
  problemImage?: SanityImage;
  testimonial?: Testimonial;
  comparisonTitle?: string;
  comparisonRows?: ComparisonRow[];
  trackRecord?: TrackRecordStat[];
  relatedBlogTags?: string[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  body?: PortableTextBlock[];
  publishedAt: string;
  order: number;
  // Computed
  url?: string;
}

export interface Page {
  _id: string;
  _type: "page";
  title: string;
  slug: string;
  description?: string;
  body?: PortableTextBlock[];
  metaTitle?: string;
  metaDescription?: string;
}
