import { getAllPosts } from "@/lib/sanity/posts";
import { resolveImageUrl } from "../../../sanity/lib/image";
import { BlogPageContent } from "./BlogPageContent";
import type { BlogListPost } from "./BlogPageContent";
import { createMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Blog | Stratégies B2B, Marketing & Croissance | Vizion",
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

  // Schema.org structured data
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      inLanguage: "fr",
      name: "Blog | Stratégies B2B, Marketing & Croissance",
      description:
        "Stratégies d'élite et insights exclusifs pour propulser votre croissance B2B. Product marketing, vente, IA appliquée au commerce.",
      url: `${SITE_URL}/blog`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            url: `${SITE_URL}${post.url}`,
            ...(post.date && { datePublished: post.date }),
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_URL}/blog`,
        },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <BlogPageContent posts={posts} />
    </>
  );
}
