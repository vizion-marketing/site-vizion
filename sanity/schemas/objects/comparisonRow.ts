import { defineType } from "sanity";

export const comparisonRow = defineType({
  name: "comparisonRow",
  title: "Ligne de comparaison",
  type: "object",
  fields: [
    {
      name: "feature",
      title: "Critere",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "left",
      title: "Vizion",
      type: "string",
      description: "Valeur Vizion (texte, true, false)",
    },
    {
      name: "right",
      title: "Alternative",
      type: "string",
      description: "Valeur alternative (texte, true, false)",
    },
  ],
  preview: {
    select: { title: "feature" },
  },
});
