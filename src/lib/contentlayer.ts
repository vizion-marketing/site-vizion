// Re-export contentlayer generated content
// This file acts as a bridge to handle the contentlayer imports

export async function getAllPages() {
  try {
    const { allPages } = await import("contentlayer/generated");
    return allPages;
  } catch {
    return [];
  }
}

export async function getAllPosts() {
  try {
    const { allPosts } = await import("contentlayer/generated");
    return allPosts.filter((post) => !post.draft).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
}

export async function getAllLocalPages() {
  try {
    const { allLocalPages } = await import("contentlayer/generated");
    // Filter out template files
    return allLocalPages.filter((page) => !page._raw.sourceFileName.startsWith("_"));
  } catch {
    return [];
  }
}

export async function getAllCaseTemplates() {
  try {
    const { allCaseTemplates } = await import("contentlayer/generated");
    return allCaseTemplates;
  } catch {
    return [];
  }
}

export async function getCaseTemplateById(id: string) {
  const templates = await getAllCaseTemplates();
  return templates.find((template) => template.id === id);
}

export async function getPageBySlug(slug: string) {
  const pages = await getAllPages();
  return pages.find((page) => page.slug === slug);
}

export async function getPostBySlug(slug: string) {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getLocalPageByCity(city: string) {
  const pages = await getAllLocalPages();
  return pages.find((page) => page.slug === city);
}

export async function getPostsByCategory(category: string) {
  const posts = await getAllPosts();
  return posts.filter((post) => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getAllCategories() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return categories;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// === Service Pages Helpers ===

/**
 * Get all service pages (pages with template="service")
 * Sorted by order field
 */
export async function getServicePages() {
  const pages = await getAllPages();
  return pages
    .filter((page) => page.template === "service")
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

/**
 * Get a single service page by its slug
 * @param slug - The slug without "services/" prefix (e.g., "conseil-strategique")
 */
export async function getServiceBySlug(slug: string) {
  const services = await getServicePages();
  return services.find((service) => service.slug === `services/${slug}`);
}

/**
 * Get all case studies related to a service
 */
export async function getRelatedCaseStudies(slugs: string[]) {
  if (!slugs || slugs.length === 0) return [];
  
  try {
    const { allCaseStudies } = await import("contentlayer/generated");
    return allCaseStudies.filter((cs) => slugs.includes(cs.slug));
  } catch {
    return [];
  }
}
