import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllClients } from "@/lib/sanity/clients";
import { getAllCaseStudies } from "@/lib/sanity/caseStudies";
import { CasClientsContent } from "../../CasClientsContent";
import { SITE_URL } from "@/lib/constants";
import { resolveImageUrl } from "../../../../../sanity/lib/image";

// Sector slug → display name + description SEO
const SECTOR_META: Record<
  string,
  { name: string; title: string; description: string }
> = {
  franchise: {
    name: "Franchise",
    title: "Cas Clients Franchise — Marketing B2B pour réseaux de franchise",
    description:
      "Découvrez nos études de cas en marketing B2B pour les réseaux de franchise : développement réseau, génération de candidats franchisés, stratégie de marque.",
  },
  "saas-b2b": {
    name: "SaaS B2B",
    title: "Cas Clients SaaS B2B — Marketing pour éditeurs de logiciels",
    description:
      "Études de cas marketing pour éditeurs SaaS B2B : acquisition, positionnement produit, stratégie de contenu, sales enablement et growth marketing.",
  },
  "services-b2b": {
    name: "Services B2B",
    title: "Cas Clients Services B2B — Marketing pour sociétés de services",
    description:
      "Nos cas clients en marketing B2B pour les entreprises de services : positionnement, génération de leads, alignement marketing-ventes.",
  },
  "industrie-b2b": {
    name: "Industrie B2B",
    title: "Cas Clients Industrie B2B — Marketing pour l'industrie",
    description:
      "Études de cas marketing pour l'industrie B2B : transformation digitale, positionnement technique, stratégie commerciale et lead generation.",
  },
  "business-local": {
    name: "Business Local",
    title: "Cas Clients Business Local — Marketing pour entreprises locales",
    description:
      "Nos cas clients en marketing pour les entreprises locales : visibilité digitale, acquisition clients, stratégie de proximité.",
  },
};

// Map sector slug to Sanity value
function sectorSlugToValue(slug: string): string | null {
  return SECTOR_META[slug]?.name ?? null;
}

export async function generateStaticParams() {
  return Object.keys(SECTOR_META).map((sector) => ({ sector }));
}

type Props = {
  params: Promise<{ sector: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sector } = await params;
  const meta = SECTOR_META[sector];

  if (!meta) {
    return { title: "Secteur non trouvé" };
  }

  const url = `${SITE_URL}/cas-clients/secteur/${sector}`;

  // Use the first sector client's mainImage as og:image
  const allClients = await getAllClients();
  const sectorClient = allClients.find((c) => c.sector === meta.name);
  const ogImageUrl = sectorClient ? resolveImageUrl(sectorClient.mainImage, 1200) : null;

  return {
    title: `${meta.title} | Vizion`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Vizion`,
      description: meta.description,
      url,
      siteName: "Vizion",
      type: "website",
      locale: "fr_FR",
      ...(ogImageUrl && {
        images: [{ url: ogImageUrl, width: 1200, height: 630, alt: `Cas clients ${meta.name} — Vizion` }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      ...(ogImageUrl && { images: [ogImageUrl] }),
    },
    alternates: { canonical: url },
  };
}

export default async function SectorPage({ params }: Props) {
  const { sector } = await params;
  const sectorValue = sectorSlugToValue(sector);

  if (!sectorValue) {
    notFound();
  }

  const [allClients, allCaseStudies] = await Promise.all([
    getAllClients(),
    getAllCaseStudies(),
  ]);

  // Filter by sector
  const sectorClients = allClients
    .filter((c) => c.sector === sectorValue)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (a.order || 0) - (b.order || 0);
    });

  const featuredClient = sectorClients.find((c) => c.featured) || null;

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    inLanguage: "fr",
    name: `Cas Clients ${sectorValue}`,
    description: SECTOR_META[sector].description,
    url: `${SITE_URL}/cas-clients/secteur/${sector}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sectorClients.map((client, index) => ({
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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Cas clients", item: `${SITE_URL}/cas-clients` },
      { "@type": "ListItem", position: 3, name: sectorValue, item: `${SITE_URL}/cas-clients/secteur/${sector}` },
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
      <CasClientsContent
        clients={sectorClients}
        caseStudies={allCaseStudies}
        featuredClient={featuredClient}
        initialSector={sectorValue}
      />
    </>
  );
}
