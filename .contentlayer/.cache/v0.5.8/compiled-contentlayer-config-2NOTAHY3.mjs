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
  filePathPattern: "local/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    city: { type: "string", required: true },
    service: { type: "string", required: true },
    region: { type: "string" },
    heroTitle: { type: "string" },
    heroSubtitle: { type: "string" },
    featuredImage: { type: "string" }
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
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "string", default: "\xC9quipe" },
    category: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] },
    featuredImage: { type: "string" },
    draft: { type: "boolean", default: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("blog/", "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace("blog/", "")}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Page, LocalPage, Post],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  LocalPage,
  Page,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-2NOTAHY3.mjs.map
