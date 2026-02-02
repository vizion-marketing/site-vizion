// Re-export contentlayer generated content
// This file acts as a bridge to handle the contentlayer imports

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

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
