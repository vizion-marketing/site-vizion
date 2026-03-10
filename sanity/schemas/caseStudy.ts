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
      name: "sector",
      title: "Secteur",
      type: "string",
      options: {
        list: [
          { title: "Franchise", value: "Franchise" },
          { title: "SaaS B2B", value: "SaaS B2B" },
          { title: "Services B2B", value: "Services B2B" },
          { title: "Industrie B2B", value: "Industrie B2B" },
          { title: "Business Local", value: "Business Local" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sectorIcon",
      title: "Icone secteur",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "company",
      title: "Entreprise",
      type: "string",
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
      name: "companyLogo",
      title: "Logo entreprise",
      type: "image",
    }),
    defineField({
      name: "heroImage",
      title: "Image hero",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "executiveSummary",
      title: "Resume executif",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
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
      name: "resultsDetails",
      title: "Details des resultats",
      type: "text",
      rows: 4,
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
      name: "body",
      title: "Contenu",
      type: "blockContent",
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
      subtitle: "company",
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
