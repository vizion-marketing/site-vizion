import { defineType, defineField } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Etude de cas",
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
      name: "client",
      title: "Client",
      type: "reference",
      to: [{ type: "client" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Image hero",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "projectDuration",
      title: "Duree du projet",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "projectYear",
      title: "Annee du projet",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "context",
      title: "Contexte",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "challenges",
      title: "Defis",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "approachPhases",
      title: "Phases d'approche",
      type: "array",
      of: [{ type: "approachPhase" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "metrics",
      title: "Metriques",
      type: "array",
      of: [{ type: "metric" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "testimonial",
      title: "Temoignage",
      type: "testimonial",
    }),
    defineField({
      name: "deliverables",
      title: "Livrables",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Titre", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 2 },
            { name: "icon", title: "Icone Lucide", type: "string" },
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({
      name: "galleryImages",
      title: "Galerie de livrables (visuels)",
      type: "array",
      description:
        "Visuels des livrables produits pour cette mission (brochures, sites, campagnes, etc.)",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "title", title: "Titre", type: "string" },
            { name: "caption", title: "Légende", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dateModified",
      title: "Date de modification",
      type: "datetime",
      description: "Renseigner lors d'une mise à jour significative du contenu (SEO: article:modified_time)",
    }),
    defineField({
      name: "featured",
      title: "Mis en avant",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Ordre",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "draft",
      title: "Brouillon",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "client.name",
      media: "heroImage",
    },
  },
  orderings: [
    {
      title: "Ordre",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
