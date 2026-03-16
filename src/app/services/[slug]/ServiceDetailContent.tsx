"use client";

import type { ServiceContent } from "@/content/services";
import {
  ServiceHero,
  ServiceNarrative,
  ServiceHighlights,
  SolutionSticky,
  WebScrollTitle,
  WebFeaturesBento,
  ProcessTimeline,
  QualityGuarantees,
  TestimonialShowcase,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services";

interface ServiceDetailContentProps {
  service: ServiceContent;
}

export function ServiceDetailContent({
  service,
}: ServiceDetailContentProps) {
  return (
    <main>
      {/* 1. Hero (sombre) */}
      <ServiceHero
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

      {/* 3. Notre solution — sticky (sombre) */}
      {service.solutionItems.length > 0 && (
        <SolutionSticky
          title={service.solutionTitle}
          subtitle={service.solutionSubtitle}
          image={service.solutionImage}
          items={service.solutionItems}
        />
      )}

      {/* 6. Titre animé au scroll (blanc — interstitial) */}
      <WebScrollTitle />

      {/* 7. Particularités bento (blanc) */}
      <WebFeaturesBento />

      {/* 8. Process / Timeline (card) — ancre #processus */}
      {service.processSteps.length > 0 && (
        <ProcessTimeline
          title={service.processTitle}
          subtitle={service.processSubtitle}
          steps={service.processSteps}
        />
      )}

      {/* 9. Garanties de qualité (sombre) */}
      <QualityGuarantees />

      {/* 10. Témoignages (sombre) */}
      {service.testimonials.length > 0 && (
        <TestimonialShowcase testimonials={service.testimonials} />
      )}

      {/* 11. FAQ (card) */}
      {service.faqs.length > 0 && (
        <ServiceFAQ title={service.faqTitle} faqs={service.faqs} />
      )}

      {/* 12. CTA final (sombre) */}
      <ServiceCTA
        title={service.ctaTitle}
        description={service.ctaDescription}
        buttonText={service.ctaButtonText}
        buttonLink={service.ctaButtonLink}
      />
    </main>
  );
}
