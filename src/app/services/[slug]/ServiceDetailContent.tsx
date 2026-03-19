"use client";

import type { ServiceContent } from "@/content/services";
import {
  ServiceHero,
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
  InlineCTA,
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
      {service.scrollTitle && (
        <WebScrollTitle content={service.scrollTitle} />
      )}

      {/* 7. Particularités bento (blanc) */}
      {service.bentoCards && <WebFeaturesBento cards={service.bentoCards} />}

      {/* 8. Témoignages (sombre) */}
      {service.testimonials.length > 0 && (
        <TestimonialShowcase
          testimonials={service.testimonials}
          sectionTitle={service.testimonialsTitle}
          sectionSubtitle={service.testimonialsSubtitle}
        />
      )}

      {/* CTA intermédiaire après témoignages */}
      <div className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 bg-white">
        <InlineCTA
          text="Vous avez un projet de site web en tête ?"
          buttonText="Discuter de votre projet"
          href="/contact"
        />
      </div>

      {/* 9. Process / Timeline (card) — ancre #processus */}
      {service.processSteps.length > 0 && (
        <ProcessTimeline
          title={service.processTitle}
          subtitle={service.processSubtitle}
          steps={service.processSteps}
        />
      )}

      {/* CTA intermédiaire après process */}
      <div className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 bg-white">
        <InlineCTA
          text="Prêt à lancer votre projet ?"
          buttonText="Discuter de votre projet"
          href="/contact"
        />
      </div>

      {/* 10. Garanties de qualité (sombre) */}
      {service.qualityGuarantees && (
        <QualityGuarantees content={service.qualityGuarantees} />
      )}

      {/* 11. FAQ (card) */}
      {service.faqs.length > 0 && (
        <ServiceFAQ title={service.faqTitle} faqs={service.faqs} />
      )}

      {/* 12. Services complémentaires (blanc) */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <RelatedServices
          title={service.relatedServicesTitle}
          subtitle={service.relatedServicesSubtitle}
          services={service.relatedServices}
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
