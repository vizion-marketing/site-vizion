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
      name: "companyType",
      title: "Type d'entreprise",
      type: "string",
      options: {
        list: [
          { title: "Franchise", value: "Franchise" },
          { title: "PME", value: "PME" },
          { title: "ETI", value: "ETI" },
          { title: "Scale-up", value: "Scale-up" },
          { title: "Start-up", value: "Start-up" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sector",
      title: "Secteur d'activite",
      type: "string",
      description: 'Ex: "Immobilier", "Technologie", "Finance", "Conseil"',
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
      title: "Problematique",
      type: "text",
      rows: 2,
      description: 'Ex: "Accompagner une filiale du groupe Easy dans son deploiement en franchise en France et au Royaume-Uni"',
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
      name: "testimonial",
      title: "Temoignage",
      type: "testimonial",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "highlightMetrics",
      title: "Chiffres cles (bande hero)",
      type: "array",
      description: "3 metriques affichees sous le hero header",
      of: [{ type: "metric" }],
      validation: (rule) => rule.max(4),
    }),
    defineField({
      name: "galleryImages",
      title: "Galerie de livrables (visuels)",
      type: "array",
      description:
        "Visuels des livrables produits pour ce client (brochures, sites, campagnes, etc.)",
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
