/**
 * Types et sérialisation du frontmatter des articles de blog (aligné sur le schéma ContentLayer Post).
 */

export interface BlogResource {
  title: string;
  url: string;
  type: "internal" | "external";
  description?: string;
}

export interface BlogFrontmatterInput {
  title: string;
  description: string;
  date: string; // ISO 8601
  category: string;
  author?: string;
  tags?: string[];
  featuredImage?: string;
  draft?: boolean;
  resources?: BlogResource[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLink?: string;
}

function escapeYamlValue(value: string): string {
  if (value.includes("\n") || value.includes(": ") || value.includes("#") || value.includes('"')) {
    return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n")}"`;
  }
  return value;
}

/**
 * Sérialise le frontmatter en YAML compatible avec les MDX existants.
 */
export function serializeBlogFrontmatter(input: BlogFrontmatterInput): string {
  const lines: string[] = [];

  lines.push(`title: ${escapeYamlValue(input.title)}`);
  lines.push(`description: ${escapeYamlValue(input.description)}`);
  lines.push(`date: ${input.date}`);
  lines.push(`author: ${escapeYamlValue(input.author ?? "Vizion")}`);
  lines.push(`category: ${escapeYamlValue(input.category)}`);

  if (input.tags && input.tags.length > 0) {
    lines.push("tags:");
    for (const tag of input.tags) {
      lines.push(`  - ${escapeYamlValue(tag)}`);
    }
  }

  if (input.featuredImage) {
    lines.push(`featuredImage: ${input.featuredImage}`);
  }

  if (input.draft === true) {
    lines.push("draft: true");
  }

  if (input.resources && input.resources.length > 0) {
    lines.push("resources:");
    for (const r of input.resources) {
      lines.push("  - title: " + escapeYamlValue(r.title));
      lines.push("    url: " + escapeYamlValue(r.url));
      lines.push("    type: " + (r.type === "internal" ? "internal" : "external"));
      if (r.description) {
        lines.push("    description: " + escapeYamlValue(r.description));
      }
    }
  }

  if (input.ctaTitle) {
    lines.push("ctaTitle: " + escapeYamlValue(input.ctaTitle));
  }
  if (input.ctaDescription) {
    lines.push("ctaDescription: " + escapeYamlValue(input.ctaDescription));
  }
  if (input.ctaLink) {
    lines.push("ctaLink: " + escapeYamlValue(input.ctaLink));
  }

  return lines.join("\n");
}

/**
 * Construit le contenu MDX complet (frontmatter + body).
 */
export function buildMdxDocument(frontmatter: BlogFrontmatterInput, body: string): string {
  const yaml = serializeBlogFrontmatter(frontmatter);
  const trimmedBody = (body ?? "").trim();
  return `---\n${yaml}\n---\n\n${trimmedBody}\n`;
}
