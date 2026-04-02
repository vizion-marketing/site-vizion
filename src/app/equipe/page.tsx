import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Notre équipe | Vizion",
  description:
    "Vizion est fondée par Hugo Schuppe (transformation digitale, automatisations) et Lucas Gonzalez (stratégie, positionnement, go-to-market). Deux associés, une structure spécialisée dans la transformation marketing et commerciale des PME et ETI B2B à Toulouse.",
  path: "/equipe",
});

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Équipe Vizion",
  url: `${SITE_URL}/equipe`,
  numberOfItems: 2,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Person",
        name: "Lucas Gonzalez",
        jobTitle: "Expert Marketing Produit & Fondateur",
        worksFor: {
          "@type": "Organization",
          name: "Vizion",
          url: SITE_URL,
        },
        url: `${SITE_URL}/equipe/lucas-gonzalez`,
        sameAs: [SOCIAL_LINKS.linkedin.lucas],
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Person",
        name: "Hugo Schuppe",
        jobTitle: "Expert Transformation Digitale & Systèmes",
        worksFor: {
          "@type": "Organization",
          name: "Vizion",
          url: SITE_URL,
        },
        url: `${SITE_URL}/equipe/hugo-schuppe`,
        sameAs: [SOCIAL_LINKS.linkedin.hugo],
      },
    },
  ],
};

const breadcrumbSchema = {
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
      name: "Équipe",
      item: `${SITE_URL}/equipe`,
    },
  ],
};

export default function EquipePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-white">
        <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 lg:py-28">

          {/* Breadcrumb */}
          <nav className="mb-10" aria-label="Fil d'Ariane">
            <ol className="flex items-center gap-2 text-[13px] text-secondary">
              <li>
                <Link href="/" className="hover:text-primary transition-colors duration-150">
                  Accueil
                </Link>
              </li>
              <li className="text-muted">/</li>
              <li className="text-primary font-medium">Équipe</li>
            </ol>
          </nav>

          {/* En-tête */}
          <div className="mb-14">
            <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-4">
              L'équipe
            </p>
            <h1 className="text-primary" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.035em" }}>
              Notre équipe
            </h1>
            <p className="mt-4 text-secondary text-base leading-relaxed max-w-xl">
              Vizion est fondée par Hugo Schuppe en 2021. Lucas Gonzalez l'a rejoint en 2024 pour prendre en charge le pilier stratégique : positionnement, go-to-market et accompagnement commercial.
            </p>
          </div>

          {/* Cartes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Lucas Gonzalez */}
            <Link
              href="/equipe/lucas-gonzalez"
              className="group block bg-card border border-black/[0.06] hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-card relative">
                <Image
                  src="/images/about/lucas-gonzalez.avif"
                  alt="Lucas Gonzalez, fondateur de Vizion"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-2">
                  Associé, depuis 2024
                </p>
                <h2 className="text-primary text-xl font-medium mb-1" style={{ letterSpacing: "-0.02em" }}>
                  Lucas Gonzalez
                </h2>
                <p className="text-secondary text-sm mb-4">
                  Expert Marketing Produit & Stratégie B2B
                </p>
                <p className="text-secondary text-sm leading-relaxed">
                  Architecte du positionnement et du message chez Vizion. Top 300 personnalités LinkedIn France, Lucas a accompagné plus de 70 entreprises B2B dans leur structuration marketing depuis 2021. Il intervient sur la stratégie, le go-to-market et l'alignement marketing-ventes.
                </p>
                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all duration-200">
                  Voir le profil
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                    <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Hugo Schuppe */}
            <Link
              href="/equipe/hugo-schuppe"
              className="group block bg-card border border-black/[0.06] hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-card relative">
                <Image
                  src="/images/about/hugo-schuppe.avif"
                  alt="Hugo Schuppe, fondateur de Vizion"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-2">
                  Fondateur, depuis 2021
                </p>
                <h2 className="text-primary text-xl font-medium mb-1" style={{ letterSpacing: "-0.02em" }}>
                  Hugo Schuppe
                </h2>
                <p className="text-secondary text-sm mb-4">
                  Expert Transformation Digitale & Systèmes
                </p>
                <p className="text-secondary text-sm leading-relaxed">
                  Pilier technique de Vizion, Hugo prend en charge les automatisations, les intégrations CRM et les architectures système. Il conçoit les stacks d'acquisition et les workflows qui permettent aux équipes commerciales de gagner en efficacité.
                </p>
                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all duration-200">
                  Voir le profil
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                    <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
