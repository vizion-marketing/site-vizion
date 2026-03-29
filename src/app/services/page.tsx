import { allServices } from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { ServicesPageContent } from "./ServicesPageContent";

export const metadata = createMetadata({
  title: "Services | Agence Marketing B2B Stratégique | Vizion",
  description:
    "Stratégie, product marketing, growth, sales enablement, transformation digitale. Découvrez tous les services de Vizion pour accélérer votre croissance B2B.",
  path: "/services",
});

export default function ServicesPage() {
  const piliers = allServices.filter((s) => s.isPilier);
  const services = allServices.filter((s) => !s.isPilier);

  // Schema.org structured data
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      inLanguage: "fr",
      name: "Services | Agence Marketing B2B Stratégique",
      description:
        "Stratégie, product marketing, growth, sales enablement, transformation digitale. Découvrez tous les services de Vizion pour accélérer votre croissance B2B.",
      url: `${SITE_URL}/services`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: allServices.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            url: `${SITE_URL}/services/${service.slug}`,
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
      ],
    },
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
      <ServicesPageContent piliers={piliers} services={services} />
    </>
  );
}
