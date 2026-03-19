import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getClientBySlug, getAllClientSlugs } from "@/lib/sanity/clients";
import { getCaseStudiesForClient } from "@/lib/sanity/caseStudies";
import { ClientProfileContent } from "./ClientProfileContent";
import { SITE_URL } from "@/lib/constants";
import { resolveImageUrl } from "../../../../sanity/lib/image";

type Props = {
  params: Promise<{ clientSlug: string }>;
};

export async function generateStaticParams() {
  // Temporarily disabled — no static params generated
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { clientSlug } = await params;
  const client = await getClientBySlug(clientSlug);

  if (!client) {
    return { title: "Client non trouvé" };
  }

  const title = client.metaTitle || `${client.name} — Cas client Vizion`;
  const description = client.metaDescription || client.description;
  const url = `${SITE_URL}${client.url}`;
  const imageUrl = resolveImageUrl(client.mainImage, 1200);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Vizion",
      type: "website",
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: client.name }] : [],
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

export default async function ClientProfilePage({ params }: Props) {
  // Temporarily disabled — return 404
  return notFound();

  /* Original implementation preserved for re-enabling later:

  const { clientSlug } = await params;
  const client = await getClientBySlug(clientSlug);

  if (!client) {
    notFound();
  }

  const clientCaseStudies = await getCaseStudiesForClient(clientSlug);

  const logoUrl = resolveImageUrl(client.logo);
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: client.name,
    description: client.description,
    ...(logoUrl && { logo: logoUrl.startsWith("/") ? `${SITE_URL}${logoUrl}` : logoUrl }),
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
  */
}
