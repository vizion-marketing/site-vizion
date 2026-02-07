import GitHubSlugger from "github-slugger";

export interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(content: string): TOCHeading[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const headings: TOCHeading[] = [];
  const slugger = new GitHubSlugger();
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = slugger.slug(text);

    headings.push({ id, text, level });
  }

  return headings;
}
