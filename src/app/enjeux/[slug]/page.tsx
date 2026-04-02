import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allEnjeux } from "@/content/enjeux";
import { EnjeuxDetailContent } from "./EnjeuxDetailContent";
import { createMetadata } from "@/lib/metadata";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export async function generateStaticParams() {
  return allEnjeux.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const enjeu = allEnjeux.find((e) => e.slug === slug);
  if (!enjeu) return {};
  return createMetadata({
    title: enjeu.metaTitle,
    description: enjeu.metaDescription,
    path: `/enjeux/${slug}`,
  });
}

export default async function EnjeuxPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const enjeu = allEnjeux.find((e) => e.slug === slug);
  if (!enjeu) notFound();

  const enjeuxUrl = `${SITE_URL}/enjeux/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": enjeuxUrl,
      url: enjeuxUrl,
      name: enjeu.metaTitle,
      description: enjeu.metaDescription,
      isPartOf: { "@type": "WebSite", url: SITE_URL },
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Vos enjeux", item: `${SITE_URL}/enjeux` },
        { "@type": "ListItem", position: 3, name: enjeu.title, item: enjeuxUrl },
      ],
    },
    ...(enjeu.faqs.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: enjeu.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]
      : []),
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
      <EnjeuxDetailContent enjeu={enjeu} />
    </>
  );
}
