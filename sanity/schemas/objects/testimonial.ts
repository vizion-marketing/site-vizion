import { defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Temoignage",
  type: "object",
  fields: [
    {
      name: "quote",
      title: "Citation",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    },
    {
      name: "author",
      title: "Auteur",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "role",
      title: "Poste",
      type: "string",
    },
    {
      name: "company",
      title: "Entreprise",
      type: "string",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "rating",
      title: "Note",
      type: "number",
      validation: (rule) => rule.min(1).max(5),
    },
    {
      name: "linkedinUrl",
      title: "LinkedIn",
      type: "url",
      description: "URL du profil LinkedIn (lien nofollow)",
    },
  ],
});
