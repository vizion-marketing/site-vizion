import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min de lecture`;
}

// Schema pour les études de cas clients premium (long-form)
export const CaseStudy = defineDocumentType(() => ({
  name: "CaseStudy",
  filePathPattern: "cas-clients/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    sector: {
      type: "enum",
      options: ["Franchise", "SaaS B2B", "Services B2B", "Industrie B2B", "Business Local"],
      required: true
    },
    sectorIcon: { type: "string", required: true },
    company: { type: "string", required: true },
    companyLogo: { type: "string" },
    heroImage: { type: "string" },
    executiveSummary: { type: "string", required: true },
    projectDuration: { type: "string", required: true },
    projectYear: { type: "string", required: true },
    context: { type: "string", required: true },
    challenges: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    approachPhases: {
      type: "list",
      of: { type: "json" },
      required: true,
    },
    metrics: {
      type: "list",
      of: { type: "json" },
      required: true,
    },
    resultsDetails: { type: "string" },
    testimonial: { type: "json" },
    deliverables: {
      type: "list",
      of: { type: "json" },
    },
    publishedAt: { type: "date", required: true },
    featured: { type: "boolean", default: false },
    order: { type: "number", default: 0 },
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
    author: { type: "string", default: "Vizion" },
    category: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] },
    featuredImage: { type: "string" },
    draft: { type: "boolean", default: false },
    resources: {
      type: "list",
      of: { type: "json" },
      default: [],
    },
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

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, CaseStudy],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});
