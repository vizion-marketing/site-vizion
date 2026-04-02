import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { SITE_URL, SOCIAL_LINKS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Lucas Gonzalez : Stratégie & Positionnement | Vizion",
  description:
    "Lucas Gonzalez est directeur stratégique chez Vizion et ex Top 300 personnalités LinkedIn France. Expert en positionnement B2B, go-to-market et alignement marketing-ventes, il a accompagné plus de 70 entreprises depuis Toulouse.",
  path: "/equipe/lucas-gonzalez",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/equipe/lucas-gonzalez`,
  name: "Lucas Gonzalez",
  jobTitle: "Expert Marketing Produit & Fondateur",
  description:
    "Lucas Gonzalez est le fondateur de Vizion et expert en marketing stratégique B2B. Ex Top 300 personnalités LinkedIn France avec plus de 20 millions de vues, speaker au Sommet du Marketing, intervenant à la Toulouse School of Management. Il accompagne les PME et ETI sur leur positionnement, leur go-to-market et leur alignement marketing-ventes depuis Toulouse.",
  url: `${SITE_URL}/equipe/lucas-gonzalez`,
  image: `${SITE_URL}/images/about/lucas-gonzalez.avif`,
  worksFor: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Vizion",
    url: SITE_URL,
  },
  knowsAbout: [
    "Marketing B2B",
    "Positionnement produit",
    "Sales Enablement",
    "Go-to-market B2B",
    "Architecture de message",
    "Stratégie marketing",
    "Direction marketing externalisée",
    "Personal Branding",
    "LinkedIn Marketing",
  ],
  sameAs: [
    SOCIAL_LINKS.linkedin.lucas,
    "https://sommet.marketing/",
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Toulouse School of Management" },
  ],
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Lucas Gonzalez",
      item: `${SITE_URL}/equipe/lucas-gonzalez`,
    },
  ],
};

export default function LucasGonzalezPage() {
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
                <Link href="/" className="hover:text-primary transition-colors duration-150">
                  Accueil
                </Link>
              </li>
              <li className="text-muted">/</li>
              <li>
                <Link href="/equipe" className="hover:text-primary transition-colors duration-150">
                  Équipe
                </Link>
              </li>
              <li className="text-muted">/</li>
              <li className="text-primary font-medium">Lucas Gonzalez</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

            {/* Colonne gauche : photo + infos */}
            <div>
              <div className="bg-card border border-black/[0.06] overflow-hidden mb-6">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/about/lucas-gonzalez.avif"
                    alt="Lucas Gonzalez, fondateur de Vizion"
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Fiche rapide */}
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-1">Rôle</p>
                  <p className="text-primary text-sm">Expert Marketing B2B & Fondateur</p>
                </div>
                <div>
                  <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-1">Entreprise</p>
                  <p className="text-primary text-sm">Vizion, depuis 2024</p>
                </div>
                <div>
                  <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-1">Localisation</p>
                  <p className="text-primary text-sm">Toulouse, France</p>
                </div>
                <div>
                  <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-1">LinkedIn</p>
                  <p className="text-primary text-sm">Ex Top 300 France, +20M vues</p>
                </div>
                <div>
                  <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-1">Speaker</p>
                  <p className="text-primary text-sm">Sommet du Marketing, TSM</p>
                </div>
                <div>
                  <p className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-1">LinkedIn</p>
                  <a
                    href={SOCIAL_LINKS.linkedin.lucas}
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
                Vizion, depuis 2024
              </p>
              <h1
                className="text-primary mb-8"
                style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.035em" }}
              >
                Lucas Gonzalez
              </h1>

              {/* Chiffres clés */}
              <div className="grid grid-cols-3 gap-px bg-black/[0.06] border border-black/[0.06] mb-10">
                {[
                  { value: "+70", label: "entreprises accompagnées" },
                  { value: "+20M", label: "vues LinkedIn" },
                  { value: "Top 300", label: "LinkedIn France" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white px-5 py-6 flex flex-col gap-1">
                    <span
                      className="text-primary font-normal leading-none"
                      style={{ fontSize: "clamp(24px, 3vw, 32px)", letterSpacing: "-0.04em" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-muted text-[12px] leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-5 text-secondary text-base leading-relaxed">
                <p>
                  <strong className="text-primary font-medium">Lucas Gonzalez</strong> est le <strong className="text-primary font-medium">directeur stratégique de Vizion</strong>, structure spécialisée dans la <strong className="text-primary font-medium">transformation marketing et commerciale</strong> des PME, ETI et scale-ups B2B. En 2024, il décide de s&apos;associer à Vizion avec une ambition claire : construire une agence leader de son secteur, au service des entreprises françaises qui veulent structurer leur croissance et vendre mieux. Il accompagne depuis ses clients dans des contextes de lancement, de restructuration commerciale ou d&apos;accélération de croissance.
                </p>
                <p>
                  Ses études en informatique lui ont donné un solide bagage digital, qu&apos;il a rapidement mis au service du marketing. Son domaine d&apos;expertise couvre l&apos;<strong className="text-primary font-medium">architecture de message</strong>, le <strong className="text-primary font-medium">positionnement stratégique</strong>, le <strong className="text-primary font-medium">go-to-market B2B</strong> et l&apos;alignement entre les équipes marketing et commerciales. Il intervient en particulier sur des <strong className="text-primary font-medium">cycles de vente longs, multi-décideurs</strong>, où la clarté du message et la cohérence du tunnel font la différence entre un prospect perdu et un client signé.
                </p>
                <p>
                  Après un rapide passage dans le monde des agences, il débute sa carrière en tant que <strong className="text-primary font-medium">Directeur Marketing Externalisé</strong> d&apos;une filiale du groupe easyJet, fondé par le milliardaire Sir Stelios Haji-Ioannou. Pendant plus de deux ans, il accompagne la structure pour développer son réseau commercial en France, contribuant au déploiement de <strong className="text-primary font-medium">plus de 26 agences sur le territoire</strong>.
                </p>
                <p>
                  Ex <strong className="text-primary font-medium">Top 300 personnalités LinkedIn France</strong> avec plus de <strong className="text-primary font-medium">20 millions de vues cumulées</strong>, Lucas a construit une audience autour de la <strong className="text-primary font-medium">maîtrise de LinkedIn</strong> et du <strong className="text-primary font-medium">personal branding</strong> (avec une bonne dose de second degré). Ce chapitre est aujourd&apos;hui derrière lui : il s&apos;est recentré sur ce qui l&apos;anime vraiment, accompagner les entreprises dans leur croissance. Le personal branding reste un levier dans sa boite à outils, pas une finalité.
                </p>
                <p>
                  Chez Vizion, il est l&apos;interlocuteur stratégique principal pour les dirigeants et <strong className="text-primary font-medium">directeurs marketing</strong> qui cherchent à structurer leur approche commerciale sans recruter un CMO à temps plein.
                </p>
              </div>

              {/* Engagements */}
              <div className="mt-10">
                <h2 className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-5">
                  Engagements et interventions
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      label: "Sommet du Marketing",
                      detail: "Speaker aux côtés de références du marketing français (Kevin Will, Sébastien Cambet...)",
                      href: "https://sommet.marketing/",
                    },
                    {
                      label: "Toulouse School of Management (TSM)",
                      detail: "Intervenant auprès des étudiants de Licence et Master Marketing",
                      href: null,
                    },
                    {
                      label: "Personal branding (passé)",
                      detail: "A coaché des personnalités comme Olivier Bas, auteur-conférencier et vice-président Havas Paris. Un levier intégré à l'accompagnement entreprises, plus une activité dédiée.",
                      href: null,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 py-3 border-b border-black/[0.06] last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm font-medium hover:underline"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <p className="text-primary text-sm font-medium">{item.label}</p>
                        )}
                        <p className="text-secondary text-[13px] mt-0.5">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Domaines d'expertise */}
              <div className="mt-10">
                <h2 className="text-[11px] font-light tracking-[0.12em] uppercase text-muted mb-5">
                  Domaines d'expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Marketing B2B",
                    "Positionnement produit",
                    "Architecture de message",
                    "Sales Enablement",
                    "Go-to-market B2B",
                    "Direction marketing externalisée",
                    "Personal Branding",
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
                  Échanger avec Lucas
                </Link>
                <a
                  href={SOCIAL_LINKS.linkedin.lucas}
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
