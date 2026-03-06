import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Article de blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date de publication",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dateModified",
      title: "Date de modification",
      type: "datetime",
    }),
    defineField({
      name: "author",
      title: "Auteur",
      type: "string",
      initialValue: "Lucas Gonzalez",
    }),
    defineField({
      name: "category",
      title: "Categorie",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "featuredImage",
      title: "Image a la une",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featuredImageUrl",
      title: "Image a la une (URL externe)",
      type: "url",
      description: "Alternative : URL externe (Unsplash, etc.)",
    }),
    defineField({
      name: "draft",
      title: "Brouillon",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "body",
      title: "Contenu",
      type: "blockContent",
    }),
    defineField({
      name: "resources",
      title: "Ressources",
      type: "array",
      of: [{ type: "resource" }],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [{ type: "faq" }],
    }),
    defineField({
      name: "ctaTitle",
      title: "CTA — Titre",
      type: "string",
    }),
    defineField({
      name: "ctaDescription",
      title: "CTA — Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "ctaLink",
      title: "CTA — Lien",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
    },
  },
  orderings: [
    {
      title: "Date (recent)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
