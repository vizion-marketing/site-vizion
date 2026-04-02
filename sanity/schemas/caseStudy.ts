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
      name: "resultsDescription",
      title: "Résultats (texte rédigé)",
      type: "text",
      rows: 4,
      description: "Paragraphe narratif qui contextualise les chiffres clés.",
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
      name: "projectLinks",
      title: "Liens du projet",
      description: "Liens vers les livrables en ligne (landing page, site, démo, etc.)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string", description: 'Ex: "Voir la landing page"' },
            { name: "url", title: "URL", type: "url" },
            {
              name: "icon",
              title: "Icône",
              type: "string",
              description: 'Nom Lucide (Globe, ExternalLink, Monitor, BarChart2…)',
            },
          ],
          preview: { select: { title: "label", subtitle: "url" } },
        },
      ],
    }),
    defineField({
      name: "relatedServiceSlugs",
      title: "Services liés",
      type: "array",
      description: "Slugs des services Vizion illustrés par cette étude de cas (ex: applications-ia, campagnes-publicitaires). Permet d'afficher ce cas client sur les pages service correspondantes.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
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
