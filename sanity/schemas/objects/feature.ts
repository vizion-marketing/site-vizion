import { defineType } from "sanity";

export const feature = defineType({
  name: "feature",
  title: "Fonctionnalite",
  type: "object",
  fields: [
    {
      name: "icon",
      title: "Icone Lucide",
      type: "string",
      description: 'Nom de l\'icone Lucide (ex: "Target")',
    },
    {
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: { title: "title" },
  },
});
