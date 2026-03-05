import { allClients, allCaseStudies } from "contentlayer/generated";
import { CasClientsContent } from "./CasClientsContent";
import { createMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Cas Clients — Résultats de notre agence marketing B2B",
  description: "Études de cas de notre agence marketing B2B : franchise, SaaS, industrie, services. Résultats concrets et mesurables pour des PME et ETI accompagnées par Vizion.",
  path: "/cas-clients",
});

export default function CasClientsPage() {
  const publishedClients = allClients
    .filter((c) => !c.draft)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (a.order || 0) - (b.order || 0);
    });

  const publishedCaseStudies = allCaseStudies.filter((cs) => !cs.draft);

  // Featured client
  const featuredClient = publishedClients.find((c) => c.featured) || null;

  // Schema.org structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Cas Clients B2B",
    description: "Collection d'études de cas B2B démontrant notre expertise en marketing et croissance commerciale.",
    url: `${SITE_URL}/cas-clients`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: publishedClients.map((client, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Organization",
          name: client.name,
          description: client.description,
          url: `${SITE_URL}${client.url}`,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasClientsContent
        clients={publishedClients}
        caseStudies={publishedCaseStudies}
        featuredClient={featuredClient}
      />
    </>
  );
}
