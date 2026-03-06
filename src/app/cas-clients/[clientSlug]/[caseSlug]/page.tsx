import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudies, getAllCaseStudyParams } from "@/lib/sanity/caseStudies";
import { getClientBySlug } from "@/lib/sanity/clients";
import { CaseStudyContent } from "./CaseStudyContent";
import { SITE_URL } from "@/lib/constants";
import { resolveImageUrl } from "../../../../../sanity/lib/image";

type Props = {
  params: Promise<{ clientSlug: string; caseSlug: string }>;
};

export async function generateStaticParams() {
  return getAllCaseStudyParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { clientSlug, caseSlug } = await params;
  const caseStudy = await getCaseStudyBySlug(clientSlug, caseSlug);

  if (!caseStudy) {
    return { title: "Cas client non trouvé" };
  }

  const title = caseStudy.metaTitle || `${caseStudy.title} | Cas Client`;
  const description = caseStudy.metaDescription || caseStudy.description;
  const url = `${SITE_URL}${caseStudy.url}`;
  const imageUrl = resolveImageUrl(caseStudy.heroImage, 1200);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Vizion",
      type: "article",
      publishedTime: caseStudy.publishedAt,
      authors: ["Vizion"],
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: caseStudy.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: { canonical: url },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { clientSlug, caseSlug } = await params;

  const caseStudy = await getCaseStudyBySlug(clientSlug, caseSlug);

  if (!caseStudy) {
    notFound();
  }

  const client = await getClientBySlug(clientSlug);

  // Related cases: same client first, then same sector
  const allCases = await getAllCaseStudies();
  const relatedCases = allCases
    .filter((cs) => cs.slug !== caseSlug)
    .sort((a, b) => {
      // Same client first
      if (a.clientSlug === clientSlug && b.clientSlug !== clientSlug) return -1;
      if (a.clientSlug !== clientSlug && b.clientSlug === clientSlug) return 1;
      // Then same sector
      if (a.sector === caseStudy.sector && b.sector !== caseStudy.sector) return -1;
      if (a.sector !== caseStudy.sector && b.sector === caseStudy.sector) return 1;
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    })
    .slice(0, 3);

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.description,
    author: { "@type": "Organization", name: "Vizion", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Vizion", url: SITE_URL },
    datePublished: caseStudy.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${caseStudy.url}` },
    about: { "@type": "Organization", name: caseStudy.company },
    articleSection: caseStudy.sector,
    keywords: [caseStudy.sector, "cas client", "étude de cas", "B2B", "marketing", caseStudy.company].join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Cas clients", item: `${SITE_URL}/cas-clients` },
      ...(client
        ? [{ "@type": "ListItem", position: 3, name: client.name, item: `${SITE_URL}${client.url}` }]
        : []),
      {
        "@type": "ListItem",
        position: client ? 4 : 3,
        name: caseStudy.title,
        item: `${SITE_URL}${caseStudy.url}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <CaseStudyContent
        caseStudy={caseStudy}
        relatedCases={relatedCases}
        clientSlug={clientSlug}
        clientName={client?.name}
      />
    </>
  );
}
