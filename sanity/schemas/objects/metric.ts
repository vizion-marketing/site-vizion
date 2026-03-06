import { defineType } from "sanity";

export const metric = defineType({
  name: "metric",
  title: "Metrique",
  type: "object",
  fields: [
    {
      name: "value",
      title: "Valeur",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "trend",
      title: "Tendance",
      type: "string",
      options: {
        list: [
          { title: "Hausse", value: "up" },
          { title: "Baisse", value: "down" },
          { title: "Neutre", value: "neutral" },
        ],
      },
    },
  ],
  preview: {
    select: { title: "value", subtitle: "label" },
  },
});
