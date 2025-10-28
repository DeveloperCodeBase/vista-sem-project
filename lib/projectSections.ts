export type ProjectSection = {
  id: string;
  title: string;
  body: string;
};

const H2_BLOCK = /<h2[^>]*>[\s\S]*?<\/h2>/i;
const SECTION_REGEX = /<h3[^>]*>(.*?)<\/h3>([\s\S]*?)(?=<h3[^>]*>|$)/gi;

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

export function segmentProjectContent(html: string): ProjectSection[] {
  if (!html) return [];
  const withoutH2 = html.replace(H2_BLOCK, "").trim();
  const sections: ProjectSection[] = [];
  let match: RegExpExecArray | null;
  while ((match = SECTION_REGEX.exec(withoutH2)) !== null) {
    const title = match[1]?.trim();
    const body = match[2]?.trim();
    if (!title || !body) continue;
    sections.push({
      id: slugify(title) || `section-${sections.length + 1}`,
      title,
      body
    });
  }
  return sections;
}
