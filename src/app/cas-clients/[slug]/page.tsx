import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allCaseStudies } from "contentlayer/generated";
import { CaseStudyContent } from "./CaseStudyContent";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all case studies
export async function generateStaticParams() {
  return allCaseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = allCaseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {
      title: "Cas client non trouvé",
    };
  }

  const title = caseStudy.metaTitle || `${caseStudy.title} | Cas Client`;
  const description = caseStudy.metaDescription || caseStudy.description;
  const url = `https://stratege.marketing/cas-clients/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Stratège",
      type: "article",
      publishedTime: caseStudy.publishedAt,
      authors: ["Stratège"],
      images: caseStudy.heroImage ? [
        {
          url: caseStudy.heroImage,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: caseStudy.heroImage ? [caseStudy.heroImage] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = allCaseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  // Get related case studies (same sector or other featured ones)
  const relatedCases = allCaseStudies
    .filter((cs) => cs.slug !== slug)
    .sort((a, b) => {
      // Prioritize same sector
      if (a.sector === caseStudy.sector && b.sector !== caseStudy.sector) return -1;
      if (a.sector !== caseStudy.sector && b.sector === caseStudy.sector) return 1;
      // Then featured
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    })
    .slice(0, 3);

  // Schema.org structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.description,
    author: {
      "@type": "Organization",
      name: "Stratège",
      url: "https://stratege.marketing",
    },
    publisher: {
      "@type": "Organization",
      name: "Stratège",
      url: "https://stratege.marketing",
    },
    datePublished: caseStudy.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://stratege.marketing/cas-clients/${slug}`,
    },
    about: {
      "@type": "Organization",
      name: caseStudy.company,
    },
    articleSection: caseStudy.sector,
    keywords: [
      caseStudy.sector,
      "cas client",
      "étude de cas",
      "B2B",
      "marketing",
      caseStudy.company,
    ].join(", "),
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <CaseStudyContent caseStudy={caseStudy} relatedCases={relatedCases} />
    </>
  );
}
