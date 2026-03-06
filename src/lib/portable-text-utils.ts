import GitHubSlugger from "github-slugger";
import { toPlainText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

export interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

/**
 * Extrait les headings d'un body Portable Text pour generer un TOC.
 * Remplace extractHeadings() de lib/mdx.ts pour le contenu Sanity.
 */
export function extractHeadingsFromPortableText(
  body: PortableTextBlock[],
): TOCHeading[] {
  const slugger = new GitHubSlugger();
  return body
    .filter(
      (block) =>
        block._type === "block" &&
        typeof block.style === "string" &&
        ["h2", "h3", "h4"].includes(block.style),
    )
    .map((block) => {
      const text = toPlainText([block]);
      const level = parseInt((block.style as string).replace("h", ""), 10);
      return {
        id: slugger.slug(text),
        text,
        level,
      };
    });
}

/**
 * Calcule le temps de lecture a partir d'un body Portable Text.
 * Equivalent de calculateReadingTime() dans contentlayer.config.ts.
 */
export function calculateReadingTime(body: PortableTextBlock[]): string {
  if (!body || body.length === 0) return "1 min de lecture";
  const text = toPlainText(body);
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min de lecture`;
}
