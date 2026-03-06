import { defineType } from "sanity";

export const resource = defineType({
  name: "resource",
  title: "Ressource",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) => rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Interne", value: "internal" },
          { title: "Externe", value: "external" },
        ],
      },
      initialValue: "external",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "type" },
  },
});
