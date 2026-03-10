import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    // SEO & Meta
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
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "keywords",
      title: "Mots-cles",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),

    // Hero
    defineField({
      name: "heroTitle",
      title: "Titre hero",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Sous-titre hero",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroBadge",
      title: "Badge hero",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Image hero",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "icon",
      title: "Icone Lucide",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categorie",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "metrics",
      title: "Metriques hero",
      type: "array",
      of: [{ type: "metric" }],
    }),

    // Pain points
    defineField({
      name: "painPointsTitle",
      title: "Titre problematiques",
      type: "string",
    }),
    defineField({
      name: "painPointsSubtitle",
      title: "Sous-titre problematiques",
      type: "string",
    }),
    defineField({
      name: "painPointsDescription",
      title: "Paragraphe de contexte problematiques",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "painPoints",
      title: "Problematiques",
      type: "array",
      of: [{ type: "painPoint" }],
    }),

    // Features
    defineField({
      name: "featuresTitle",
      title: "Titre fonctionnalites",
      type: "string",
    }),
    defineField({
      name: "featuresSubtitle",
      title: "Sous-titre fonctionnalites",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Fonctionnalites",
      type: "array",
      of: [{ type: "feature" }],
    }),

    // Process
    defineField({
      name: "processTitle",
      title: "Titre processus",
      type: "string",
    }),
    defineField({
      name: "processSubtitle",
      title: "Sous-titre processus",
      type: "string",
    }),
    defineField({
      name: "processSteps",
      title: "Etapes",
      type: "array",
      of: [{ type: "processStep" }],
    }),

    // Related case studies
    defineField({
      name: "relatedCaseStudies",
      title: "Etudes de cas liees",
      type: "array",
      of: [{ type: "reference", to: [{ type: "caseStudy" }] }],
    }),

    // FAQ
    defineField({
      name: "faqTitle",
      title: "Titre FAQ",
      type: "string",
    }),
    defineField({
      name: "faqs",
      title: "FAQ",
      type: "array",
      of: [{ type: "faq" }],
    }),

    // Problem narrative
    defineField({
      name: "problemTitle",
      title: "Titre probleme",
      type: "string",
    }),
    defineField({
      name: "problemParagraphs",
      title: "Paragraphes probleme",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "problemImage",
      title: "Image probleme",
      type: "image",
    }),

    // Testimonial
    defineField({
      name: "testimonial",
      title: "Temoignage",
      type: "testimonial",
    }),

    // Comparison
    defineField({
      name: "comparisonTitle",
      title: "Titre comparaison",
      type: "string",
    }),
    defineField({
      name: "comparisonRows",
      title: "Lignes de comparaison",
      type: "array",
      of: [{ type: "comparisonRow" }],
    }),

    // Track record
    defineField({
      name: "trackRecord",
      title: "Bilan chiffre",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Valeur", type: "number" },
            { name: "prefix", title: "Prefixe", type: "string" },
            { name: "suffix", title: "Suffixe", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    }),

    // Deliverables
    defineField({
      name: "deliverablesTitle",
      title: "Titre livrables",
      type: "string",
    }),
    defineField({
      name: "deliverablesSubtitle",
      title: "Sous-titre livrables",
      type: "string",
    }),
    defineField({
      name: "deliverables",
      title: "Livrables visuels",
      type: "array",
      of: [{ type: "deliverableVisual" }],
    }),

    // Related blog tags
    defineField({
      name: "relatedBlogTags",
      title: "Tags blog lies",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),

    // CTA
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
      name: "ctaButtonText",
      title: "CTA — Texte bouton",
      type: "string",
    }),
    defineField({
      name: "ctaButtonLink",
      title: "CTA — Lien bouton",
      type: "string",
    }),

    // Body
    defineField({
      name: "body",
      title: "Contenu",
      type: "blockContent",
    }),

    // Publishing
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Ordre",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
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
