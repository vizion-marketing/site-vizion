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
    order: { type: "number", default: 0 }
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
function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min de lecture`;
}
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
  documentTypes: [Page, LocalPage, Post, CaseTemplate],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  CaseTemplate,
  LocalPage,
  Page,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PDY6IGG3.mjs.map
