export interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(content: string): TOCHeading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TOCHeading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9àâäéèêëïîôùûüç\s-]/gi, "")
      .replace(/\s+/g, "-");

    headings.push({ id, text, level });
  }

  return headings;
}
