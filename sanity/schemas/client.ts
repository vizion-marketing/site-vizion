import { defineType, defineField } from "sanity";

export const clientSchema = defineType({
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
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
      description: 'Nom de l\'icone Lucide (ex: "Building2")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "headline",
      title: "Problématique (H1)",
      type: "text",
      rows: 2,
      description:
        'Phrase d\'accroche qui résume la mission. Ex: "Accompagner le leader français de la visite virtuelle dans son déploiement en franchise"',
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
      name: "size",
      title: "Taille entreprise",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Localisation",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Site web",
      type: "url",
    }),
    defineField({
      name: "mainImage",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "secondaryImage",
      title: "Image secondaire",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "carouselTitle",
      title: "Titre carousel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "carouselStat",
      title: "Stat carousel",
      type: "object",
      fields: [
        { name: "value", title: "Valeur", type: "string" },
        { name: "label", title: "Label", type: "string" },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "testimonial",
      title: "Temoignage",
      type: "testimonial",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Contenu",
      type: "blockContent",
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
      title: "name",
      subtitle: "sector",
      media: "logo",
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
