import { defineType } from "sanity";

export const approachPhase = defineType({
  name: "approachPhase",
  title: "Phase d'approche",
  type: "object",
  fields: [
    {
      name: "phase",
      title: "Phase",
      type: "string",
      description: 'Ex: "Phase 1"',
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
      name: "deliverables",
      title: "Livrables",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "phase" },
  },
});
