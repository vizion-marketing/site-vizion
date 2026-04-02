"use client";

import { EnjeuxApproche, EnjeuxCarousel, EnjeuxSignals } from "@/components/enjeux";
import { PilierHero } from "@/components/services/PilierHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import type { EnjeuxContent } from "@/content/enjeux";


// Images des pages piliers utilisées dans la section 2 de chaque pilier
const SERVICE_PILLAR_IMAGE: Record<string, string> = {
  // Stratégie
  "positionnement-messaging":        "/images/piliers/strategie/diagnostic.avif",
  "roadmap-strategique":             "/images/piliers/strategie/feuille-de-route.avif",
  "audit-marketing":                 "/images/piliers/strategie/diagnostic.avif",
  "direction-marketing-externalisee":"/images/piliers/strategie/pilotage-strategique.avif",
  // Product Marketing
  "product-marketing":               "/images/piliers/product-marketing/positionnement.avif",
  "pitch-decks-argumentaires":       "/images/piliers/product-marketing/discours.avif",
  "battlecards-case-studies":        "/images/piliers/product-marketing/contenus.avif",
  // Sales Enablement
  "sales-enablement":                "/images/piliers/sales-enablement/supports.avif",
  "lead-nurturing":                  "/images/piliers/sales-enablement/sequences-automatisees.avif",
  // Growth Marketing
  "seo-contenu-organique":           "/images/piliers/growth-marketing/visibilite.avif",
  "campagnes-publicitaires":         "/images/piliers/growth-marketing/publicite.avif",
  "cold-outreach-prospection":       "/images/piliers/growth-marketing/prospection.avif",
  "stack-acquisition":               "/images/piliers/growth-marketing/prospection.avif",
  "strategie-personal-branding":     "/images/piliers/growth-marketing/visibilite.avif",
  // Transformation Digitale
  "creation-refonte-site-web":       "/images/piliers/transformation-digitale/site.avif",
  "creation-landing-page":           "/images/piliers/transformation-digitale/site.avif",
  "deploiement-crm":                 "/images/piliers/transformation-digitale/crm.avif",
  "applications-ia":                 "/images/piliers/transformation-digitale/applications-ia.avif",
  "creation-workflows":              "/images/piliers/transformation-digitale/applications-ia.avif",
  "audit-site-web":                  "/images/piliers/transformation-digitale/site.avif",
};

interface EnjeuxDetailContentProps {
  enjeu: EnjeuxContent;
}

export function EnjeuxDetailContent({ enjeu }: EnjeuxDetailContentProps) {
  return (
    <main>
      {/* 1. Hero — sombre, centré, pleine hauteur */}
      <PilierHero
        category="Vos enjeux"
        title={enjeu.heroTitle}
        subtitle={enjeu.heroSubtitle}
        breadcrumbLabel={enjeu.title}
        breadcrumbParentLabel="Vos enjeux"
        breadcrumbParentHref="/enjeux"
      />

      {/* 2. Signaux de reconnaissance — 3 cartes décalées, fond card */}
      <EnjeuxSignals
        title={enjeu.recognitionTitle}
        subtitle={enjeu.recognitionSubtitle}
        signals={enjeu.signals.slice(0, 3).map((s) => ({
          icon: s.icon,
          title: s.title,
          description: s.description,
        }))}
      />

      {/* 3. Approche Vizion — sombre, sticky scroll */}
      <EnjeuxApproche
        title={enjeu.approcheTitle}
        subtitle={enjeu.approcheSubtitle}
        items={enjeu.approcheItems}
      />

      {/* 4. Services associés — carousel sur fond blanc */}
      <EnjeuxCarousel
        surtitre="Services associés"
        title={enjeu.servicesTitle}
        subtitle={enjeu.servicesSubtitle}
        items={enjeu.services.map((s) => ({
          icon: s.icon,
          title: s.title,
          description: s.description,
          href: s.href,
          image: SERVICE_PILLAR_IMAGE[s.slug] ?? "/images/piliers/strategie/diagnostic.avif",
        }))}
        background="white"
      />

      {/* 5. FAQ — fond card */}
      <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
        <div className="max-w-[82.5rem] mx-auto">
          <FAQAccordion
            title={enjeu.faqTitle}
            faqs={enjeu.faqs}
            variant="light"
          />
        </div>
      </section>

      {/* 6. CTA final — sombre */}
      <ServiceCTA
        title={enjeu.ctaTitle}
        description={enjeu.ctaDescription}
        buttonText={enjeu.ctaButtonText}
        buttonLink={enjeu.ctaButtonLink}
      />
    </main>
  );
}
