import { getAllPosts } from "@/lib/sanity/posts";
import { resolveImageUrl } from "../../../sanity/lib/image";
import { BlogPageContent } from "./BlogPageContent";
import type { BlogListPost } from "./BlogPageContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog — Stratégies B2B, Marketing & Croissance | Vizion",
  description:
    "Stratégies d'élite et insights exclusifs pour propulser votre croissance B2B. Product marketing, vente, IA appliquée au commerce.",
  path: "/blog",
});

export default async function BlogPage() {
  const rawPosts = await getAllPosts();

  // Serialize posts for the client component (resolve image URLs to strings)
  const posts: BlogListPost[] = rawPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.date,
    category: p.category,
    readingTime: p.readingTime,
    featuredImage:
      resolveImageUrl(p.featuredImage, 800) || p.featuredImageUrl,
    tags: p.tags || [],
    url: p.url,
  }));

  return <BlogPageContent posts={posts} />;
}
