import { defineType } from "sanity";

export const deliverableVisual = defineType({
  name: "deliverableVisual",
  title: "Livrable visuel",
  type: "object",
  fields: [
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
      rows: 2,
    },
    {
      name: "image",
      title: "Capture/Mockup",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
