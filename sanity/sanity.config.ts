"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { projectId, dataset, apiVersion } from "./env";
import { schemaTypes } from "./schemas";
import { deskStructure } from "./structure/deskStructure";

export default defineConfig({
  name: "vizion",
  title: "Vizion — CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
