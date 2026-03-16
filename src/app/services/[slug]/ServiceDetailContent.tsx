"use client";

import type { ServiceContent } from "@/content/services";
import type { Post, CaseStudy } from "../../../../sanity/lib/types";
import {
  ServiceHero,
  ServiceNarrative,
  QualityGuarantees,
  SolutionSticky,
  RecentProjects,
  WebFeaturesBento,
  WebScrollTitle,
  TestimonialShowcase,
  ServiceFAQ,
  RelatedArticles,
  ServiceCTA,
} from "@/components/services";

interface ServiceDetailContentProps {
  service: ServiceContent;
  relatedPosts: Post[];
  recentProjects: CaseStudy[];
}

export function ServiceDetailContent({
  service,
  relatedPosts,
  recentProjects,
}: ServiceDetailContentProps) {
  return (
    <main>
      {/* 1. Hero */}
      <ServiceHero
        category={service.category}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        badge={service.heroBadge}
        imageUrl={service.heroImage}
        imageAlt={service.heroTitle}
        breadcrumbLabel={service.title}
      />

      {/* 2. Le constat */}
      <ServiceNarrative constat={service.constat} />

      {/* 3. Notre solution — sticky */}
      {service.solutionItems.length > 0 && (
        <SolutionSticky
          title={service.solutionTitle}
          subtitle={service.solutionSubtitle}
          image={service.solutionImage}
          items={service.solutionItems}
        />
      )}

      {/* 4. Titre animé au scroll */}
      <WebScrollTitle />

      {/* 5. Particularités bento */}
      <WebFeaturesBento />

      {/* 6. Garanties de qualité */}
      <QualityGuarantees />

      {/* 7. Derniers projets */}
      <RecentProjects caseStudies={recentProjects} />

      {/* 8. Témoignages */}
      {service.testimonials.length > 0 && (
        <TestimonialShowcase testimonials={service.testimonials} />
      )}

      {/* 9. FAQ */}
      {service.faqs.length > 0 && (
        <ServiceFAQ title={service.faqTitle} faqs={service.faqs} />
      )}

      {/* 10. Articles liés */}
      {relatedPosts.length > 0 && <RelatedArticles posts={relatedPosts} />}

      {/* 11. CTA final */}
      <ServiceCTA
        title={service.ctaTitle}
        description={service.ctaDescription}
        buttonText={service.ctaButtonText}
        buttonLink={service.ctaButtonLink}
      />
    </main>
  );
}
