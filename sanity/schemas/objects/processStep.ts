import { defineType } from "sanity";

export const processStep = defineType({
  name: "processStep",
  title: "Etape du processus",
  type: "object",
  fields: [
    {
      name: "step",
      title: "Numero",
      type: "string",
      description: 'Ex: "01", "Phase 1"',
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
    {
      name: "duration",
      title: "Duree",
      type: "string",
      description: 'Ex: "2 semaines"',
    },
    {
      name: "deliverables",
      title: "Livrables",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "step" },
  },
});
