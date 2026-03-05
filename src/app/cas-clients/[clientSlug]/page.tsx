import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allClients, allCaseStudies } from "contentlayer/generated";
import { ClientProfileContent } from "./ClientProfileContent";
import { SITE_URL } from "@/lib/constants";

type Props = {
  params: Promise<{ clientSlug: string }>;
};

export async function generateStaticParams() {
  return allClients
    .filter((c) => !c.draft)
    .map((client) => ({ clientSlug: client.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { clientSlug } = await params;
  const client = allClients.find((c) => c.slug === clientSlug && !c.draft);

  if (!client) {
    return { title: "Client non trouvé" };
  }

  const title = client.metaTitle || `${client.name} — Cas client Vizion`;
  const description = client.metaDescription || client.description;
  const url = `${SITE_URL}${client.url}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Vizion",
      type: "website",
      images: client.mainImage
        ? [{ url: client.mainImage, width: 1200, height: 630, alt: client.name }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: client.mainImage ? [client.mainImage] : [],
    },
    alternates: { canonical: url },
  };
}

export default async function ClientProfilePage({ params }: Props) {
  const { clientSlug } = await params;
  const client = allClients.find((c) => c.slug === clientSlug && !c.draft);

  if (!client) {
    notFound();
  }

  // Case studies for this client
  const clientCaseStudies = allCaseStudies
    .filter((cs) => cs.clientSlug === clientSlug && !cs.draft)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  // JSON-LD
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: client.name,
    description: client.description,
    ...(client.logo && { logo: `${SITE_URL}${client.logo}` }),
    ...(client.website && { url: client.website }),
    ...(client.location && {
      address: { "@type": "PostalAddress", addressLocality: client.location },
    }),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Cas clients", item: `${SITE_URL}/cas-clients` },
      { "@type": "ListItem", position: 3, name: client.name, item: `${SITE_URL}${client.url}` },
    ],
  };

  const itemListLd = clientCaseStudies.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `Cas clients ${client.name}`,
        itemListElement: clientCaseStudies.map((cs, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: {
            "@type": "Article",
            name: cs.title,
            description: cs.description,
            url: `${SITE_URL}${cs.url}`,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {itemListLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
        />
      )}
      <ClientProfileContent client={client} caseStudies={clientCaseStudies} />
    </>
  );
}
