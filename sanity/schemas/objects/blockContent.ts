import { defineType, defineArrayMember } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Contenu riche",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Citation", value: "blockquote" },
      ],
      lists: [
        { title: "Puces", value: "bullet" },
        { title: "Numerotee", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Gras", value: "strong" },
          { title: "Italique", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Lien",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (rule) =>
                  rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Texte alternatif",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          name: "caption",
          title: "Legende",
          type: "string",
        },
      ],
    }),
    defineArrayMember({
      name: "figure",
      title: "Figure",
      type: "object",
      fields: [
        { name: "image", title: "Image", type: "image", options: { hotspot: true } },
        { name: "alt", title: "Texte alternatif", type: "string" },
        { name: "caption", title: "Legende", type: "string" },
        {
          name: "type",
          title: "Type",
          type: "string",
          options: {
            list: [
              { title: "Standard", value: "standard" },
              { title: "Pleine largeur", value: "full-width" },
            ],
          },
          initialValue: "standard",
        },
      ],
      preview: {
        select: { title: "caption", media: "image" },
        prepare({ title, media }) {
          return { title: title || "Figure", media };
        },
      },
    }),
    defineArrayMember({
      name: "callout",
      title: "Callout",
      type: "object",
      fields: [
        {
          name: "type",
          title: "Type",
          type: "string",
          options: {
            list: [
              { title: "Info", value: "info" },
              { title: "Astuce", value: "tip" },
              { title: "Attention", value: "warning" },
            ],
          },
          initialValue: "info",
        },
        { name: "title", title: "Titre", type: "string" },
        { name: "body", title: "Contenu", type: "text", rows: 3 },
      ],
      preview: {
        select: { title: "title", subtitle: "type" },
        prepare({ title, subtitle }) {
          return { title: title || "Callout", subtitle };
        },
      },
    }),
    defineArrayMember({
      name: "statHighlight",
      title: "Stat mise en avant",
      type: "object",
      fields: [
        { name: "value", title: "Valeur", type: "string", validation: (rule) => rule.required() },
        { name: "label", title: "Label", type: "string", validation: (rule) => rule.required() },
        { name: "description", title: "Description", type: "string" },
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
    }),
  ],
});
