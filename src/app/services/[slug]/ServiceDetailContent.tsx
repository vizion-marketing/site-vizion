"use client";

import type { ServiceContent } from "@/content/services";
import type { RelatedService } from "@/content/services";
import {
  ServiceHeroV2,
  ServiceNarrative,
  SolutionSticky,
  WebScrollTitle,
  WebFeaturesBento,
  ProcessTimeline,
  QualityGuarantees,
  TestimonialShowcase,
  ServiceFAQ,
  RelatedServices,
  ServiceCTA,
  RelatedCaseStudies,
} from "@/components/services";
import type { ServiceCaseStudy } from "../../../../sanity/lib/types";
import { SERVICE_MENU_CATEGORIES } from "@/lib/constants";

function getPilierRelatedServices(category: string, currentSlug: string): RelatedService[] {
  const pilier = SERVICE_MENU_CATEGORIES.find((c) => c.title === category);
  if (!pilier) return [];
  return pilier.items
    .filter((item) => item.href && item.href !== `/services/${currentSlug}`)
    .map((item) => ({
      slug: item.href!.replace("/services/", ""),
      icon: item.icon,
      title: item.label,
      description: item.description,
      href: item.href!,
    }));
}

interface ServiceDetailContentProps {
  service: ServiceContent;
  relatedCaseStudies?: ServiceCaseStudy[];
}

export function ServiceDetailContent({
  service,
  relatedCaseStudies = [],
}: ServiceDetailContentProps) {
  const pilierRelated = getPilierRelatedServices(service.category, service.slug);
  const relatedServices = pilierRelated.length > 0 ? pilierRelated : (service.relatedServices ?? []);
  const relatedTitle = service.relatedServicesTitle ?? "Services complémentaires";
  const relatedSubtitle = service.relatedServicesSubtitle ?? "Découvrez les autres services de ce pilier pour aller plus loin.";

  return (
    <main>
      {/* 1. Hero (sombre) */}
      <ServiceHeroV2
        category={service.category}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        badge={service.heroBadge}
        imageUrl={service.heroImage}
        imageAlt={service.heroTitle}
        breadcrumbLabel={service.title}
      />

      {/* 2. Le constat (card) */}
      <ServiceNarrative constat={service.constat} />

      {/* 3. Notre solution - sticky (sombre) */}
      {service.solutionItems.length > 0 && (
        <SolutionSticky
          title={service.solutionTitle}
          image={service.solutionImage}
          items={service.solutionItems}
          slug={service.slug}
        />
      )}

      {/* 6. Titre animé au scroll (blanc - interstitial) */}
      {service.scrollTitle && (
        <WebScrollTitle content={service.scrollTitle} />
      )}

      {/* 7. Particularités bento (blanc) */}
      {service.bentoCards && <WebFeaturesBento cards={service.bentoCards} />}

      {/* 8. Témoignages (sombre) */}
      {service.testimonials.length > 0 && (
        <TestimonialShowcase
          testimonials={service.testimonials.slice(0, 1)}
          sectionTitle={service.testimonialsTitle}
          sectionSubtitle={service.testimonialsSubtitle}
        />
      )}

      {/* 9. Process / Timeline (card) - ancre #processus */}
      {service.processSteps.length > 0 && (
        <ProcessTimeline
          title={service.processTitle}
          subtitle={service.processSubtitle}
          steps={service.processSteps}
        />
      )}

      {/* 10. Garanties de qualité (sombre) */}
      {service.qualityGuarantees && (
        <QualityGuarantees content={service.qualityGuarantees} />
      )}

      {/* 11. Cas clients liés (card) — uniquement si disponibles */}
      <RelatedCaseStudies caseStudies={relatedCaseStudies} />

      {/* 12. FAQ (card) */}
      {service.faqs.length > 0 && (
        <ServiceFAQ title={service.faqTitle} faqs={service.faqs} />
      )}

      {/* 12. Services complémentaires (blanc) */}
      {relatedServices.length > 0 && (
        <RelatedServices
          title={relatedTitle}
          subtitle={relatedSubtitle}
          services={relatedServices}
        />
      )}

      {/* 13. CTA final (sombre) */}
      <ServiceCTA
        title={service.ctaTitle}
        description={service.ctaDescription}
        buttonText={service.ctaButtonText}
        buttonLink={service.ctaButtonLink}
      />
    </main>
  );
}
