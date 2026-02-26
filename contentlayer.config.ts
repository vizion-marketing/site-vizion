import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

// Schema pour les pages vitrine (accueil, services, cas clients)
export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "pages/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    template: {
      type: "enum",
      options: ["home", "service", "case-study", "default"],
      default: "default",
    },
    heroTitle: { type: "string" },
    heroSubtitle: { type: "string" },
    ctaText: { type: "string" },
    ctaLink: { type: "string" },
    featuredImage: { type: "string" },
    order: { type: "number", default: 0 },
    
    // === Champs spécifiques aux pages services (template: "service") ===
    
    // Catégorie et icône du service
    category: { type: "string" },
    icon: { type: "string" }, // Nom de l'icône Lucide (ex: "Lightbulb", "Cpu")
    
    // Tags pour affichage
    tags: { 
      type: "list", 
      of: { type: "string" }, 
      default: [] 
    },
    
    // Métriques clés (affichées en hero ou section dédiée)
    // Format: { value: "2x", label: "ROI moyen constaté" }
    metrics: {
      type: "list",
      of: { type: "json" },
      default: [],
    },
    
    // Fonctionnalités / Ce qui est inclus
    // Format: { icon: "Target", title: "Analyse de Marché", description: "..." }
    features: {
      type: "list",
      of: { type: "json" },
      default: [],
    },
    
    // Étapes du processus / Méthodologie
    // Format: { title: "Audit & Diagnostic", description: "..." }
    process: {
      type: "list",
      of: { type: "json" },
      default: [],
    },
    
    // FAQ spécifique au service
    // Format: { question: "...", answer: "..." }
    faqs: {
      type: "list",
      of: { type: "json" },
      default: [],
    },
    
    // Témoignage client unique (legacy - optionnel)
    // Format: { quote: "...", author: "...", role: "...", company: "...", photo: "..." }
    testimonial: { type: "json" },

    // Cas clients liés (slugs des études de cas)
    relatedCaseStudies: {
      type: "list",
      of: { type: "string" },
      default: [],
    },

    // === NOUVEAUX CHAMPS SERVICES V2 (refonte SEO/conversion) ===

    // Pain points / Problématiques clients
    // Format: { icon: "AlertCircle", title: "...", description: "..." }
    painPoints: {
      type: "list",
      of: { type: "json" },
      default: [],
    },

    // Processus amélioré avec durées et livrables
    // Format: { title: "...", description: "...", duration: "2 semaines", deliverables: ["..."] }
    processSteps: {
      type: "list",
      of: { type: "json" },
      default: [],
    },

    // Section investissement - Ce qui est inclus
    investmentIncludes: {
      type: "list",
      of: { type: "string" },
      default: [],
    },

    // Garantie (texte affiché dans la section investissement)
    guarantee: { type: "string" },

    // Témoignages multiples (avec photos et ratings)
    // Format: { quote: "...", author: "...", role: "...", company: "...", photo: "...", rating: 5 }
    testimonials: {
      type: "list",
      of: { type: "json" },
      default: [],
    },

    // Points de comparaison (Vizion vs alternatives)
    // Format: { aspect: "...", vizion: "...", alternative: "..." }
    comparisonPoints: {
      type: "list",
      of: { type: "json" },
      default: [],
    },

    // Profil idéal pour ce service
    idealFor: {
      type: "list",
      of: { type: "string" },
      default: [],
    },

    // Profil non idéal (transparence)
    notIdealFor: {
      type: "list",
      of: { type: "string" },
      default: [],
    },

    // URL vidéo hero (optionnel)
    heroVideoUrl: { type: "string" },

    // SEO
    metaTitle: { type: "string" },
    metaDescription: { type: "string" },
    keywords: {
      type: "list",
      of: { type: "string" },
      default: [],
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("pages/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath.replace("pages/", "")}`,
    },
  },
}));

// Schema pour les pages de référencement local
export const LocalPage = defineDocumentType(() => ({
  name: "LocalPage",
  filePathPattern: "local/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    city: { type: "string", required: true },
    region: { type: "string", required: true },
    heroTitle: { type: "string" },
    heroSubtitle: { type: "string" },
    featuredImage: { type: "string" },
    
    // Hero section - Benefits pills
    benefits: { type: "list", of: { type: "string" }, default: [] },

    // NEW SEO STRUCTURE - Section 2: Problématiques locales
    problematiques: {
      type: "list",
      of: { type: "json" },
      default: [],
    },
    problematiquesTitle: { type: "string" },
    problematiquesSubtitle: { type: "string" },

    // NEW SEO STRUCTURE - Section 3: Services locaux
    services: {
      type: "list",
      of: { type: "json" },
      default: [],
    },

    // NEW SEO STRUCTURE - Section 4: Preuve sociale locale
    clientLogos: {
      type: "list",
      of: { type: "json" },
      default: [],
    },

    // NEW SEO STRUCTURE - Section 5: Zone d'intervention
    zones: { type: "list", of: { type: "string" }, default: [] },
    zoneDescription: { type: "string" },

    // NEW SEO STRUCTURE - Section 6: Pourquoi nous (USP locaux)
    uspItems: {
      type: "list",
      of: { type: "json" },
      default: [],
    },

    // Section 7: Featured Cases (testimonials with metrics)
    featuredCases: {
      type: "list",
      of: { type: "json" },
      default: [],
    },

    // Section 8: Piliers / Méthode (garde les piliers existants)
    // Utilise PillarsInteractive existant

    // Section 9: Experts
    experts: {
      type: "list",
      of: { type: "json" },
      default: [],
    },

    // Section 10: FAQ locale (questions/réponses)
    faq: {
      type: "list",
      of: { type: "json" },
      default: [],
    },

    // Section 11: CTA Final - Reassurance points
    reassurancePoints: { type: "list", of: { type: "string" }, default: [] },

    // Legacy fields (backward compatibility)
    aiUseCases: {
      type: "list",
      of: { type: "json" },
      default: [],
    },
    situations: {
      type: "list",
      of: { type: "json" },
      default: [],
    },
    aboutContent: { type: "string" },
    aboutImage: { type: "string" },
    
    // Legacy fields (for backward compatibility)
    localUSP: { type: "string" },
    sectors: { type: "list", of: { type: "string" }, default: [] },
    clientCount: { type: "number", default: 0 },
    badges: { type: "list", of: { type: "string" }, default: [] },
    testimonials: {
      type: "list",
      of: { type: "json" },
      default: [],
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("local/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/local/${doc._raw.flattenedPath.replace("local/", "")}`,
    },
  },
}));

// Fonction pour calculer le temps de lecture
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min de lecture`;
}

// Schema pour les templates de cas clients (legacy)
export const CaseTemplate = defineDocumentType(() => ({
  name: "CaseTemplate",
  filePathPattern: "cases-templates/*.mdx",
  contentType: "mdx",
  fields: {
    id: { type: "string", required: true },
    title: { type: "string", required: true },
    sector: { type: "string", required: true },
    sectorIcon: { type: "string" }, // Nom de l'icône Lucide
    challenge: { type: "string", required: true },
    solution: { type: "string", required: true },
    results: {
      type: "list",
      of: {
        type: "json",
      },
      required: true,
    },
    quote: { type: "string" },
    quoteAuthor: { type: "string" },
    quoteRole: { type: "string" },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc.id,
    },
  },
}));

// Schema pour les études de cas clients premium (long-form)
export const CaseStudy = defineDocumentType(() => ({
  name: "CaseStudy",
  filePathPattern: "cas-clients/*.mdx",
  contentType: "mdx",
  fields: {
    // Informations de base
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    sector: { 
      type: "enum", 
      options: ["Franchise", "SaaS B2B", "Services B2B", "Industrie B2B", "Business Local"],
      required: true 
    },
    sectorIcon: { type: "string", required: true }, // Nom de l'icône Lucide
    company: { type: "string", required: true },
    companyLogo: { type: "string" },
    heroImage: { type: "string" },
    
    // Executive summary pour décideurs pressés
    executiveSummary: { type: "string", required: true },
    
    // Timeline du projet
    projectDuration: { type: "string", required: true },
    projectYear: { type: "string", required: true },
    
    // Contexte et défis
    context: { type: "string", required: true },
    challenges: { 
      type: "list", 
      of: { type: "string" },
      required: true 
    },
    
    // Solution et approche
    approachPhases: {
      type: "list",
      of: { type: "json" },
      required: true,
      // Format: { phase: "Phase 1", title: "Audit", description: "...", deliverables: ["..."] }
    },
    
    // Métriques et résultats
    metrics: {
      type: "list",
      of: { type: "json" },
      required: true,
      // Format: { value: "+200%", label: "Croissance", trend: "up" | "down" | "neutral" }
    },
    
    // Résultats détaillés (pour le contenu long-form)
    resultsDetails: { type: "string" },
    
    // Témoignage client
    testimonial: {
      type: "json",
      // Format: { quote: "...", author: "...", role: "...", company: "...", photo: "..." }
    },
    
    // Livrables clés
    deliverables: {
      type: "list",
      of: { type: "json" },
      // Format: { title: "...", description: "...", icon: "..." }
    },
    
    // Métadonnées
    publishedAt: { type: "date", required: true },
    featured: { type: "boolean", default: false },
    order: { type: "number", default: 0 },
    
    // SEO
    metaTitle: { type: "string" },
    metaDescription: { type: "string" },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("cas-clients/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/cas-clients/${doc._raw.flattenedPath.replace("cas-clients/", "")}`,
    },
    readingTime: {
      type: "string",
      resolve: (doc) => calculateReadingTime(doc.body.raw),
    },
  },
}));

// Schema pour les articles de blog
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    dateModified: { type: "date" }, // Date de dernière mise à jour (optionnel)
    author: { type: "string", default: "Lucas Gonzalez" },
    category: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] },
    featuredImage: { type: "string" },
    draft: { type: "boolean", default: false },
    // Note: readingTime est calculé automatiquement dans computedFields
    // Bibliothèque de ressources
    resources: {
      type: "list",
      of: { type: "json" },
      default: [],
      // Format: { title, url, type: "internal" | "external", description? }
    },
    // FAQ pour featured snippets Google
    faq: {
      type: "list",
      of: { type: "json" },
      default: [],
      // Format: { question: "...", answer: "..." }
    },
    // CTA personnalisé (optionnel)
    ctaTitle: { type: "string" },
    ctaDescription: { type: "string" },
    ctaLink: { type: "string" },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("blog/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace("blog/", "")}`,
    },
    readingTime: {
      type: "string",
      resolve: (doc) => calculateReadingTime(doc.body.raw),
    },
  },
}));

// Schema pour les pages de services (SEO-optimized)
export const Service = defineDocumentType(() => ({
  name: "Service",
  filePathPattern: "services/*.mdx",
  contentType: "mdx",
  fields: {
    // SEO & Meta
    title: { type: "string", required: true },
    metaTitle: { type: "string", required: true },
    metaDescription: { type: "string", required: true },
    keywords: { type: "list", of: { type: "string" }, default: [] },

    // Hero
    heroTitle: { type: "string", required: true },
    heroSubtitle: { type: "string", required: true },
    heroBadge: { type: "string" },
    heroImage: { type: "string" },

    // Icône et catégorie
    icon: { type: "string", required: true }, // Nom Lucide
    category: { type: "string", required: true },

    // Métriques hero
    metrics: {
      type: "list",
      of: { type: "json" },
      default: [],
      // Format: { value: "+40%", label: "Marges moyennes" }
    },

    // Pain points / Problématiques
    painPointsTitle: { type: "string" },
    painPoints: {
      type: "list",
      of: { type: "json" },
      default: [],
      // Format: { icon: "AlertCircle", title: "...", description: "..." }
    },

    // Ce qu'on fait (features/livrables)
    featuresTitle: { type: "string" },
    features: {
      type: "list",
      of: { type: "json" },
      default: [],
      // Format: { icon: "Target", title: "...", description: "..." }
    },

    // Process / Méthodologie
    processTitle: { type: "string" },
    processSubtitle: { type: "string" },
    processSteps: {
      type: "list",
      of: { type: "json" },
      default: [],
      // Format: { step: "01", title: "...", description: "...", duration: "2 semaines", deliverables: ["..."] }
    },

    // Cas clients liés
    relatedCaseStudies: {
      type: "list",
      of: { type: "string" },
      default: [],
    },

    // FAQ
    faqTitle: { type: "string" },
    faqs: {
      type: "list",
      of: { type: "json" },
      default: [],
      // Format: { question: "...", answer: "..." }
    },

    // Narration du problème (TwoColSection)
    problemTitle: { type: "string" },
    problemParagraphs: {
      type: "list",
      of: { type: "string" },
      default: [],
    },
    problemImage: { type: "string" },

    // Testimonial client
    testimonial: {
      type: "json",
      // Format: { quote: "...", author: "...", role: "...", company: "...", avatar?: "...", rating: 5 }
    },

    // Tableau comparatif
    comparisonTitle: { type: "string" },
    comparisonRows: {
      type: "list",
      of: { type: "json" },
      default: [],
      // Format: { feature: "...", left: true|false|"texte", right: true|false|"texte" }
    },

    // Track record (NumberCounter)
    trackRecord: {
      type: "list",
      of: { type: "json" },
      default: [],
      // Format: { value: 70, prefix?: "+", suffix?: "%", label: "..." }
    },

    // Blog lié
    relatedBlogTags: {
      type: "list",
      of: { type: "string" },
      default: [],
    },

    // CTA
    ctaTitle: { type: "string" },
    ctaDescription: { type: "string" },
    ctaButtonText: { type: "string" },
    ctaButtonLink: { type: "string" },

    // Publication
    publishedAt: { type: "date", required: true },
    order: { type: "number", default: 0 },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("services/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/services/${doc._raw.flattenedPath.replace("services/", "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Page, Post, CaseTemplate, CaseStudy, Service],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});
