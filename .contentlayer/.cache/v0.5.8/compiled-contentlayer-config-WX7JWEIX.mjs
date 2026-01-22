// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "pages/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    template: {
      type: "enum",
      options: ["home", "service", "case-study", "default"],
      default: "default"
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
    icon: { type: "string" },
    // Nom de l'icône Lucide (ex: "Lightbulb", "Cpu")
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
      default: []
    },
    // Fonctionnalités / Ce qui est inclus
    // Format: { icon: "Target", title: "Analyse de Marché", description: "..." }
    features: {
      type: "list",
      of: { type: "json" },
      default: []
    },
    // Étapes du processus / Méthodologie
    // Format: { title: "Audit & Diagnostic", description: "..." }
    process: {
      type: "list",
      of: { type: "json" },
      default: []
    },
    // FAQ spécifique au service
    // Format: { question: "...", answer: "..." }
    faqs: {
      type: "list",
      of: { type: "json" },
      default: []
    },
    // Témoignage client (optionnel)
    // Format: { quote: "...", author: "...", role: "...", company: "...", photo: "..." }
    testimonial: { type: "json" },
    // Cas clients liés (slugs des études de cas)
    relatedCaseStudies: {
      type: "list",
      of: { type: "string" },
      default: []
    },
    // SEO
    metaTitle: { type: "string" },
    metaDescription: { type: "string" },
    keywords: {
      type: "list",
      of: { type: "string" },
      default: []
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("pages/", "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath.replace("pages/", "")}`
    }
  }
}));
var LocalPage = defineDocumentType(() => ({
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
    // Section 2: Client logos
    clientLogos: {
      type: "list",
      of: { type: "json" },
      default: []
    },
    // Section 4: AI Use Cases
    aiUseCases: {
      type: "list",
      of: { type: "json" },
      default: []
    },
    // Section 5: Situations / When to work with us
    situations: {
      type: "list",
      of: { type: "json" },
      default: []
    },
    // Section 6: Featured Cases (testimonials with metrics)
    featuredCases: {
      type: "list",
      of: { type: "json" },
      default: []
    },
    // Section 7: About content
    aboutContent: { type: "string" },
    aboutImage: { type: "string" },
    // Section 8: Experts
    experts: {
      type: "list",
      of: { type: "json" },
      default: []
    },
    // Section 9: FAQ locale (questions/réponses)
    faq: {
      type: "list",
      of: { type: "json" },
      default: []
    },
    // Section 10: CTA Final - Reassurance points
    reassurancePoints: { type: "list", of: { type: "string" }, default: [] },
    // Legacy fields (for backward compatibility)
    localUSP: { type: "string" },
    sectors: { type: "list", of: { type: "string" }, default: [] },
    clientCount: { type: "number", default: 0 },
    badges: { type: "list", of: { type: "string" }, default: [] },
    testimonials: {
      type: "list",
      of: { type: "json" },
      default: []
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("local/", "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/local/${doc._raw.flattenedPath.replace("local/", "")}`
    }
  }
}));
function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min de lecture`;
}
var CaseTemplate = defineDocumentType(() => ({
  name: "CaseTemplate",
  filePathPattern: "cases-templates/*.mdx",
  contentType: "mdx",
  fields: {
    id: { type: "string", required: true },
    title: { type: "string", required: true },
    sector: { type: "string", required: true },
    sectorIcon: { type: "string" },
    // Nom de l'icône Lucide
    challenge: { type: "string", required: true },
    solution: { type: "string", required: true },
    results: {
      type: "list",
      of: {
        type: "json"
      },
      required: true
    },
    quote: { type: "string" },
    quoteAuthor: { type: "string" },
    quoteRole: { type: "string" }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc.id
    }
  }
}));
var CaseStudy = defineDocumentType(() => ({
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
    sectorIcon: { type: "string", required: true },
    // Nom de l'icône Lucide
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
      required: true
      // Format: { phase: "Phase 1", title: "Audit", description: "...", deliverables: ["..."] }
    },
    // Métriques et résultats
    metrics: {
      type: "list",
      of: { type: "json" },
      required: true
      // Format: { value: "+200%", label: "Croissance", trend: "up" | "down" | "neutral" }
    },
    // Résultats détaillés (pour le contenu long-form)
    resultsDetails: { type: "string" },
    // Témoignage client
    testimonial: {
      type: "json"
      // Format: { quote: "...", author: "...", role: "...", company: "...", photo: "..." }
    },
    // Livrables clés
    deliverables: {
      type: "list",
      of: { type: "json" }
      // Format: { title: "...", description: "...", icon: "..." }
    },
    // Métadonnées
    publishedAt: { type: "date", required: true },
    featured: { type: "boolean", default: false },
    order: { type: "number", default: 0 },
    // SEO
    metaTitle: { type: "string" },
    metaDescription: { type: "string" }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("cas-clients/", "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/cas-clients/${doc._raw.flattenedPath.replace("cas-clients/", "")}`
    },
    readingTime: {
      type: "string",
      resolve: (doc) => calculateReadingTime(doc.body.raw)
    }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "string", default: "Vizion" },
    category: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] },
    featuredImage: { type: "string" },
    draft: { type: "boolean", default: false },
    // Bibliothèque de ressources
    resources: {
      type: "list",
      of: { type: "json" },
      default: []
      // Format: { title, url, type: "internal" | "external", description? }
    },
    // CTA personnalisé (optionnel)
    ctaTitle: { type: "string" },
    ctaDescription: { type: "string" },
    ctaLink: { type: "string" }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("blog/", "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace("blog/", "")}`
    },
    readingTime: {
      type: "string",
      resolve: (doc) => calculateReadingTime(doc.body.raw)
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Page, LocalPage, Post, CaseTemplate, CaseStudy],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  CaseStudy,
  CaseTemplate,
  LocalPage,
  Page,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-WX7JWEIX.mjs.map
