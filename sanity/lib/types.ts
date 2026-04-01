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
  linkedinUrl?: string;
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

export interface DeliverableVisual {
  title: string;
  description?: string;
  image: SanityImage;
}

export interface GalleryImage {
  _key: string;
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  title?: string;
  caption?: string;
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
  companyType: string;
  sector: string;
  sectorIcon: string;
  logo?: SanityImage;
  headline: string;
  description: string;
  size?: string;
  location?: string;
  website?: string;
  mainImage: SanityImage;
  testimonial: Testimonial;
  highlightMetrics?: Metric[];
  galleryImages?: GalleryImage[];
  featured: boolean;
  order: number;
  draft: boolean;
  metaTitle?: string;
  metaDescription?: string;
  // Computed
  url?: string;
  caseStudyCount?: number;
  firstMetric?: Metric;
}

export interface CaseStudy {
  _id: string;
  _type: "caseStudy";
  title: string;
  slug: string;
  description: string;
  // Resolved from client reference
  companyType: string;
  sector: string;
  sectorIcon: string;
  company: string;
  clientSlug?: string;
  companyLogo?: SanityImage;
  heroImage?: SanityImage;
  projectDuration: string;
  projectYear: string;
  context: string;
  challenges: string[];
  approachPhases: ApproachPhase[];
  metrics: Metric[];
  resultsDescription?: string;
  testimonial?: Testimonial;
  deliverables?: Deliverable[];
  galleryImages?: GalleryImage[];
  projectLinks?: { label: string; url: string; icon?: string }[];
  publishedAt: string;
  dateModified?: string;
  featured: boolean;
  order: number;
  draft: boolean;
  metaTitle?: string;
  metaDescription?: string;
  // Computed
  url?: string;
}

export interface ServiceCaseStudy {
  _id: string;
  title: string;
  slug: string;
  company: string;
  companyType: string;
  sector: string;
  sectorIcon: string;
  clientSlug: string;
  heroImageUrl?: string;
  metrics: Metric[];
  resultsDescription?: string;
  url: string;
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
  painPointsSubtitle?: string;
  painPointsDescription?: string;
  painPoints?: PainPoint[];
  featuresTitle?: string;
  featuresSubtitle?: string;
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
  deliverablesTitle?: string;
  deliverablesSubtitle?: string;
  deliverables?: DeliverableVisual[];
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

export interface FormationModule {
  module?: string;
  title: string;
  description?: string;
  points?: string[];
}

export interface Formation {
  _id: string;
  _type: "formation";
  title: string;
  slug: string;
  draft: boolean;
  description: string;
  theme: string;
  targets?: string[];
  format?: string;
  duration?: string;
  maxParticipants?: number;
  level?: string;
  objectives?: string[];
  programme?: FormationModule[];
  prerequisites?: string;
  formateur?: string;
  testimonials?: Testimonial[];
  faqs?: FAQ[];
  featured: boolean;
  order: number;
  metaTitle?: string;
  metaDescription?: string;
  url?: string;
}

// ============================================================
// Menu types (lightweight projections for header mega menu)
// ============================================================

export interface MenuPost {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  date: string;
  featuredImageUrl?: string;
  url: string;
}

export interface MenuCaseStudy {
  _id: string;
  title: string;
  slug: string;
  company: string;
  sector: string;
  clientSlug: string;
  heroImageUrl?: string;
  metrics?: Metric[];
  url: string;
}

export interface MenuClient {
  _id: string;
  name: string;
  slug: string;
  sector: string;
  logoUrl?: string;
  url: string;
  caseStudyCount: number;
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
