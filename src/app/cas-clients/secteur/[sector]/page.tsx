import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllClients } from "@/lib/sanity/clients";
import { getAllCaseStudies } from "@/lib/sanity/caseStudies";
import { CasClientsContent } from "../../CasClientsContent";
import { SITE_URL } from "@/lib/constants";
import { resolveImageUrl } from "../../../../../sanity/lib/image";

// Company type slug → display name + description SEO
const TYPE_META: Record<
  string,
  { name: string; title: string; description: string }
> = {
  franchise: {
    name: "Franchise",
    title: "Cas Clients Franchise | Marketing B2B pour reseaux de franchise",
    description:
      "Decouvrez nos etudes de cas en marketing B2B pour les reseaux de franchise : developpement reseau, generation de candidats franchises, strategie de marque.",
  },
  pme: {
    name: "PME",
    title: "Cas Clients PME | Marketing B2B pour PME",
    description:
      "Etudes de cas marketing pour PME B2B : positionnement, generation de leads, alignement marketing-ventes, strategie de croissance.",
  },
  eti: {
    name: "ETI",
    title: "Cas Clients ETI | Marketing B2B pour ETI",
    description:
      "Nos cas clients en marketing B2B pour les ETI : transformation digitale, strategie commerciale, positionnement et lead generation.",
  },
  "scale-up": {
    name: "Scale-up",
    title: "Cas Clients Scale-up | Marketing B2B pour scale-ups",
    description:
      "Etudes de cas marketing pour scale-ups B2B : acceleration, acquisition, positionnement produit, growth marketing.",
  },
  "start-up": {
    name: "Start-up",
    title: "Cas Clients Start-up | Marketing B2B pour start-ups",
    description:
      "Nos cas clients en marketing pour les start-ups B2B : go-to-market, positionnement, generation de leads, sales enablement.",
  },
};

// Map type slug to Sanity value
function typeSlugToValue(slug: string): string | null {
  return TYPE_META[slug]?.name ?? null;
}

export async function generateStaticParams() {
  return Object.keys(TYPE_META).map((sector) => ({ sector }));
}

type Props = {
  params: Promise<{ sector: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sector } = await params;
  const meta = TYPE_META[sector];

  if (!meta) {
    return { title: "Type non trouve" };
  }

  const url = `${SITE_URL}/cas-clients/secteur/${sector}`;

  const allClients = await getAllClients();
  const typeClient = allClients.find((c) => c.companyType === meta.name);
  const ogImageUrl = typeClient ? resolveImageUrl(typeClient.mainImage, 1200) : null;

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
        images: [{ url: ogImageUrl, width: 1200, height: 630, alt: `Cas clients ${meta.name} | Vizion` }],
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
  const typeValue = typeSlugToValue(sector);

  if (!typeValue) {
    notFound();
  }

  const [allClients, allCaseStudies] = await Promise.all([
    getAllClients(),
    getAllCaseStudies(),
  ]);

  // Filter by company type
  const typeClients = allClients
    .filter((c) => c.companyType === typeValue)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (a.order || 0) - (b.order || 0);
    });

  const featuredClient = typeClients.find((c) => c.featured) || null;

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    inLanguage: "fr",
    name: `Cas Clients ${typeValue}`,
    description: TYPE_META[sector].description,
    url: `${SITE_URL}/cas-clients/secteur/${sector}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: typeClients.map((client, index) => ({
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
      { "@type": "ListItem", position: 3, name: typeValue, item: `${SITE_URL}/cas-clients/secteur/${sector}` },
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
        clients={typeClients}
        caseStudies={allCaseStudies}
        featuredClient={featuredClient}
        initialSector={typeValue}
      />
    </>
  );
}
