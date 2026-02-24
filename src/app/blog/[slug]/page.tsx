import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import {
  ArticleHero,
  TableOfContents,
  ResourcesLibrary,
  AuthorBio,
  ArticleCTA,
  RelatedPosts,
  ArticleNav,
  ShareButtons,
  MdxContent,
  ReadingProgress,
  RelatedInlineCard,
  MobileTOC,
} from "@/components/blog";
import { ArticleSidebar } from "@/components/blog/ArticleSidebar";
import { extractHeadings } from "@/lib/mdx";
import type { Resource } from "@/components/blog";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { getSuggestedArticles } from "@/lib/internal-linking";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  return allPosts
    .filter((post) => !post.draft)
    .map((post) => ({
      slug: post.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug && !p.draft);

  if (!post) {
    return { title: "Article non trouvé" };
  }

  const publishedDate = new Date(post.date).toISOString();

  return {
    title: `${post.title} | Blog ${SITE_NAME}`,
    description: post.description,
    keywords: [post.category, ...post.tags],
    authors: [{ name: post.author || "Lucas Gonzalez" }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "article",
      publishedTime: publishedDate,
      modifiedTime: post.dateModified
        ? new Date(post.dateModified).toISOString()
        : publishedDate,
      authors: [post.author || "Lucas Gonzalez"],
      tags: post.tags,
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage.startsWith("http")
                ? post.featuredImage
                : `${SITE_URL}${post.featuredImage}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.featuredImage
        ? [
            post.featuredImage.startsWith("http")
              ? post.featuredImage
              : `${SITE_URL}${post.featuredImage}`,
          ]
        : [],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
  };
}

// Format date for display
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Get prev/next posts
function getAdjacentPosts(currentSlug: string) {
  const publishedPosts = allPosts
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const currentIndex = publishedPosts.findIndex((p) => p.slug === currentSlug);

  const prevPost =
    currentIndex < publishedPosts.length - 1
      ? publishedPosts[currentIndex + 1]
      : null;
  const nextPost = currentIndex > 0 ? publishedPosts[currentIndex - 1] : null;

  return {
    prevPost: prevPost ? { slug: prevPost.slug, title: prevPost.title } : undefined,
    nextPost: nextPost ? { slug: nextPost.slug, title: nextPost.title } : undefined,
  };
}

// Get related posts (same category or tags)
function getRelatedPosts(currentPost: (typeof allPosts)[0]) {
  return allPosts
    .filter((p) => !p.draft && p.slug !== currentPost.slug)
    .filter(
      (p) =>
        p.category === currentPost.category ||
        p.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      date: formatDate(p.date),
      readingTime: p.readingTime,
      featuredImage: p.featuredImage,
    }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug && !p.draft);

  if (!post) {
    notFound();
  }

  // Extract headings for table of contents
  const headings = extractHeadings(post.body.raw);

  // Get adjacent posts for navigation
  const { prevPost, nextPost } = getAdjacentPosts(slug);

  // Get related posts
  const relatedPosts = getRelatedPosts(post);

  // Get suggested articles for internal linking (automatic based on tags)
  const suggestedArticles = getSuggestedArticles(slug, post.tags, 3);

  // Parse resources
  const resources = (post.resources as Resource[]) || [];

  // Format dates
  const formattedDate = formatDate(post.date);
  const formattedDateModified = post.dateModified ? formatDate(post.dateModified) : undefined;

  // JSON-LD BlogPosting Schema (more specific than Article for SEO)
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author || "Lucas Gonzalez",
      url: `${SITE_URL}/equipe/${(post.author || "lucas-gonzalez").toLowerCase().replace(/ /g, "-")}`,
      jobTitle: "Expert Marketing Produit & Fondateur",
      worksFor: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-vizion.png`,
        width: 115,
        height: 32,
      },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: post.dateModified
      ? new Date(post.dateModified).toISOString()
      : new Date(post.date).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    image: post.featuredImage
      ? {
          "@type": "ImageObject",
          url: post.featuredImage.startsWith("http")
            ? post.featuredImage
            : `${SITE_URL}${post.featuredImage}`,
          width: 1200,
          height: 630,
        }
      : undefined,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.body.raw.split(/\s+/).length,
    articleBody: post.description,
    inLanguage: "fr-FR",
    isAccessibleForFree: true,
    ...(post.readingTime && {
      timeRequired: post.readingTime,
    }),
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${slug}`,
      },
    ],
  };

  // FAQ Schema for featured snippets (if FAQ exists in frontmatter)
  const faqSchema = post.faq && Array.isArray(post.faq) && post.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item: { question: string; answer: string }) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Mobile TOC - floating button + bottom sheet */}
      <MobileTOC headings={headings} />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="min-h-screen bg-white selection:bg-black selection:text-white">
        {/* Hero */}
        <ArticleHero
          title={post.title}
          category={post.category}
          date={formattedDate}
          dateModified={formattedDateModified}
          author={post.author || "Lucas Gonzalez"}
          readingTime={post.readingTime}
          featuredImage={post.featuredImage}
          tags={post.tags}
        />

        {/* Main Content - style home */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
          
          <div className="max-w-[82.5rem] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
              {/* Contenu - Gauche */}
              <div className="lg:col-span-8 order-1">
                {/* Content wrapper */}
                <div className="bg-white rounded-none p-5 sm:p-8 lg:p-12 shadow-sm border border-zinc-100">
                  <article className="prose max-w-none">
                    <MdxContent code={post.body.code} />
                  </article>
                </div>

                {/* Suggested Articles - Internal Linking */}
                {suggestedArticles.length > 0 && (
                  <div className="mt-16 pt-8 border-t border-zinc-100">
                    <h2 className="font-heading font-semibold text-2xl text-zinc-900 mb-6">
                      Vous aimerez aussi
                    </h2>
                    <div className="space-y-6">
                      {suggestedArticles.map((article, index) => (
                        <RelatedInlineCard
                          key={article.slug}
                          article={article}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Resources Library */}
                {resources.length > 0 && <ResourcesLibrary resources={resources} />}

                {/* Share section */}
                <ShareButtons title={post.title} url={`${SITE_URL}/blog/${slug}`} />

                {/* Bio auteur - fin du contenu */}
                <div className="mt-12">
                  <AuthorBio />
                </div>
              </div>

              {/* Sidebar Droite - Sommaire + CTA Newsletter (fixed) */}
              <aside className="hidden lg:block lg:col-span-4 order-2">
                <ArticleSidebar headings={headings} />
              </aside>
            </div>
          </div>
        </section>

        {/* Article Navigation */}
        <ArticleNav prevPost={prevPost} nextPost={nextPost} />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <RelatedPosts posts={relatedPosts} currentSlug={slug} />
        )}

        {/* CTA */}
        <ArticleCTA
          title={post.ctaTitle}
          description={post.ctaDescription}
          link={post.ctaLink}
        />
      </main>
    </>
  );
}
