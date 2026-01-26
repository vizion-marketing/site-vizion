import { Metadata } from "next";
import { allCaseStudies } from "contentlayer/generated";
import { CasClientsContent } from "./CasClientsContent";

const SITE_URL = "https://by-vizion.com";
const SITE_NAME = "Vizion";

export const metadata: Metadata = {
  title: "Cas Clients | Études de cas B2B",
  description: "Découvrez nos études de cas B2B : franchise, SaaS, services, industrie, business local. Des résultats concrets et mesurables pour des PME et ETI.",
  openGraph: {
    title: "Cas Clients | Études de cas B2B",
    description: "Découvrez nos études de cas B2B : franchise, SaaS, services, industrie, business local. Des résultats concrets et mesurables.",
    url: `${SITE_URL}/cas-clients`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cas Clients | Études de cas B2B",
    description: "Découvrez nos études de cas B2B : franchise, SaaS, services, industrie, business local.",
  },
  alternates: {
    canonical: `${SITE_URL}/cas-clients`,
  },
};

export default function CasClientsPage() {
  // Sort case studies by order, then by featured
  const sortedCaseStudies = [...allCaseStudies].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return (a.order || 0) - (b.order || 0);
  });

  // Get featured case study
  const featuredCase = sortedCaseStudies.find(cs => cs.featured) || null;

  // Schema.org structured data for the listing page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Cas Clients B2B",
    description: "Collection d'études de cas B2B démontrant notre expertise en marketing et croissance commerciale.",
    url: `${SITE_URL}/cas-clients`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sortedCaseStudies.map((caseStudy, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          name: caseStudy.title,
          description: caseStudy.description,
          url: `${SITE_URL}${caseStudy.url}`,
        },
      })),
    },
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <CasClientsContent 
        caseStudies={sortedCaseStudies} 
        featuredCase={featuredCase} 
      />
    </>
  );
}
