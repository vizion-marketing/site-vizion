import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Hugo Schuppe : Automatisations & Systèmes | Vizion",
  description:
    "Hugo Schuppe est le fondateur de Vizion depuis 2021. Expert en transformation digitale, il conçoit les automatisations, intégrations CRM et applications IA qui permettent aux équipes B2B de gagner en efficacité commerciale.",
  path: "/equipe/hugo-schuppe",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/equipe/hugo-schuppe`,
  name: "Hugo Schuppe",
  jobTitle: "Expert Transformation Digitale & Fondateur",
  description:
    "Hugo Schuppe est le fondateur de Vizion. Expert en transformation digitale, il conçoit et déploie les systèmes, automatisations et intégrations qui permettent aux équipes commerciales de gagner en efficacité.",
  url: `${SITE_URL}/equipe/hugo-schuppe`,
  image: `${SITE_URL}/images/about/hugo-schuppe.avif`,
  worksFor: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Vizion",
    url: SITE_URL,
  },
  knowsAbout: [
    "Transformation Digitale",
    "Automatisation Marketing",
    "Intégration CRM",
    "Applications IA",
    "Stack d'acquisition",
    "Systèmes d'information",
    "Workflows commerciaux",
  ],
  sameAs: [SOCIAL_LINKS.linkedin.hugo],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toulouse",
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Équipe", item: `${SITE_URL}/equipe` },
    { "@type": "ListItem", position: 3, name: "Hugo Schuppe", item: `${SITE_URL}/equipe/hugo-schuppe` },
  ],
};

export default function HugoSchuppePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
                <Link href="/" className="hover:text-primary transition-colors duration-150">Accueil</Link>
              </li>
              <li className="text-muted">/</li>
              <li>
                <Link href="/equipe" className="hover:text-primary transition-colors duration-150">Équipe</Link>
              </li>
              <li className="text-muted">/</li>
              <li className="text-primary font-medium">Hugo Schuppe</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

            {/* Colonne gauche */}
            <div>
              <div className="bg-card border border-black/[0.06] overflow-hidden mb-6">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/about/hugo-schuppe.avif"
                    alt="Hugo Schuppe, fondateur de Vizion"
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-1">Rôle</p>
                  <p className="text-primary text-sm">Expert Transformation Digitale & Fondateur</p>
                </div>
                <div>
                  <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-1">Entreprise</p>
                  <p className="text-primary text-sm">Vizion, depuis 2021</p>
                </div>
                <div>
                  <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-1">Localisation</p>
                  <p className="text-primary text-sm">Toulouse, France</p>
                </div>
                <div>
                  <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-1">LinkedIn</p>
                  <a
                    href={SOCIAL_LINKS.linkedin.hugo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors duration-150"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Profil LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne droite : bio */}
            <div>
              <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-4">
                Vizion, depuis 2021
              </p>
              <h1
                className="text-primary mb-8"
                style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.035em" }}
              >
                Hugo Schuppe
              </h1>

              <div className="space-y-5 text-secondary text-base leading-relaxed">
                <p>
                  <strong className="text-primary font-medium">Hugo Schuppe</strong> est le fondateur de Vizion et le pilier technique de la structure. Depuis la création de Vizion en 2021 à Toulouse, il prend en charge tout ce qui relève des <strong className="text-primary font-medium">systèmes, automatisations et intégrations</strong> qui permettent aux équipes commerciales de fonctionner efficacement.
                </p>
                <p>
                  Son expertise couvre la <strong className="text-primary font-medium">transformation digitale des entreprises B2B</strong> : déploiement de CRM, construction de stacks d&apos;acquisition, automatisation des workflows marketing et commercial, et développement d&apos;applications sur mesure intégrant l&apos;intelligence artificielle.
                </p>
                <p>
                  Là où beaucoup d&apos;agences livrent des stratégies sans les connecter aux outils, Hugo s&apos;assure que chaque recommandation de Vizion est opérationnelle : les systèmes sont en place, les données circulent, et les équipes peuvent exécuter sans friction.
                </p>
              </div>

              {/* Domaines d'expertise */}
              <div className="mt-10">
                <h2 className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-5">
                  Domaines d&apos;expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Transformation Digitale",
                    "Automatisation Marketing",
                    "Intégration CRM",
                    "Applications IA",
                    "Stack d'acquisition",
                    "Workflows commerciaux",
                    "Systèmes d'information",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-card border border-black/[0.06] text-secondary text-[13px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary text-sm font-medium hover:opacity-90 transition-opacity duration-150"
                >
                  Échanger avec Hugo
                </Link>
                <a
                  href={SOCIAL_LINKS.linkedin.hugo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-black/[0.06] text-secondary text-sm hover:border-black/[0.12] hover:text-primary transition-all duration-150"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Suivre sur LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
