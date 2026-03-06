import { defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "object",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "answer",
      title: "Reponse",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: { title: "question" },
  },
});
