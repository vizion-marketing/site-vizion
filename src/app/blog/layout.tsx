import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog — Stratégies Marketing B2B & Conseils",
  description:
    "Le blog de Vizion, agence marketing à Toulouse. Articles sur le marketing B2B, le positionnement produit, le sales enablement et la croissance commerciale des PME et ETI.",
  path: "/blog",
});

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://by-vizion.com/blog",
  name: "Blog Vizion — Marketing B2B & Sales Enablement",
  url: "https://by-vizion.com/blog",
  description:
    "Articles et ressources sur le marketing B2B, le positionnement produit et le sales enablement.",
  publisher: {
    "@type": "Organization",
    "@id": "https://by-vizion.com/#organization",
    name: "Vizion",
  },
  inLanguage: "fr-FR",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {children}
    </>
  );
}
