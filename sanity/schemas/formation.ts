import { defineType, defineField } from "sanity";

export const formation = defineType({
  name: "formation",
  title: "Formation",
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
      name: "draft",
      title: "Brouillon",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "description",
      title: "Description courte",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "theme",
      title: "Thème",
      type: "string",
      options: {
        list: [
          { title: "LinkedIn & Personal Branding", value: "linkedin" },
          { title: "Prospection multi-canal", value: "prospection" },
          { title: "Constitution de base de données", value: "base-donnees" },
          { title: "Intelligence Artificielle", value: "ia" },
          { title: "Accompagnement alternant", value: "alternant" },
          { title: "CRM & Outils commerciaux", value: "crm" },
          { title: "Stratégie marketing B2B", value: "strategie" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "targets",
      title: "Cibles",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Équipes commerciales", value: "commerciaux" },
          { title: "Équipes marketing", value: "marketing" },
          { title: "Dirigeants", value: "dirigeants" },
          { title: "Alternants", value: "alternants" },
        ],
      },
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      options: {
        list: [
          { title: "Présentiel", value: "presentiel" },
          { title: "Visio", value: "visio" },
          { title: "Mixte", value: "mixte" },
        ],
      },
    }),
    defineField({
      name: "duration",
      title: "Durée",
      type: "string",
      options: {
        list: [
          { title: "Demi-journée (3h)", value: "demi-journee" },
          { title: "1 journée (7h)", value: "1-jour" },
          { title: "2 journées (14h)", value: "2-jours" },
          { title: "Parcours sur mesure", value: "sur-mesure" },
        ],
      },
    }),
    defineField({
      name: "maxParticipants",
      title: "Nombre max de participants",
      type: "number",
    }),
    defineField({
      name: "level",
      title: "Niveau",
      type: "string",
      options: {
        list: [
          { title: "Fondamentaux", value: "fondamentaux" },
          { title: "Intermédiaire", value: "intermediaire" },
          { title: "Expert", value: "expert" },
        ],
      },
    }),
    defineField({
      name: "objectives",
      title: "Objectifs pédagogiques",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "programme",
      title: "Programme",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "module", title: "Module (ex: Module 1)", type: "string" }),
            defineField({ name: "title", title: "Titre du module", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            defineField({ name: "points", title: "Points clés", type: "array", of: [{ type: "string" }] }),
          ],
          preview: {
            select: { title: "title", subtitle: "module" },
          },
        },
      ],
    }),
    defineField({
      name: "prerequisites",
      title: "Prérequis",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "formateur",
      title: "Formateur",
      type: "string",
    }),
    defineField({
      name: "testimonials",
      title: "Témoignages",
      type: "array",
      of: [{ type: "testimonial" }],
    }),
    defineField({
      name: "faqs",
      title: "FAQ",
      type: "array",
      of: [{ type: "faq" }],
    }),
    defineField({
      name: "featured",
      title: "Mise en avant",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
    }),
    defineField({
      name: "metaTitle",
      title: "Titre SEO",
      type: "string",
    }),
    defineField({
      name: "metaDescription",
      title: "Description SEO",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "theme" },
  },
});
