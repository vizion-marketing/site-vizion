"use client";

import React from "react";
import {
  PageHero,
  LogoMarquee,
  NumberCounter,
  TwoColSection,
  FeatureCards,
  ProcessSteps,
  SingleTestimonial,
  IconGrid,
  FAQAccordion,
  CTASection,
} from "@/components/sections";
import { agenceMarketingToulouseContent as content } from "@/content/agence-marketing-toulouse";

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export default function AgenceMarketingToulouseClient() {
  return (
    <main>
      {/* Hero — H1 avec mot-clé principal "agence marketing toulouse" */}
      <PageHero
        surtitre={content.hero.surtitre}
        title={content.hero.title}
        titleHighlight={content.hero.titleHighlight}
        description={content.hero.description}
        breadcrumbs={content.hero.breadcrumbs}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        variant="dark"
      />

      {/* Bande défilante mots-clés */}
      <LogoMarquee items={content.marquee.items} />

      {/* Chiffres clés animés */}
      <NumberCounter
        counters={content.stats.counters}
        variant="accent"
      />

      {/* Problème : pourquoi une agence marketing B2B à Toulouse */}
      <TwoColSection
        surtitre={content.problem.surtitre}
        title={content.problem.title}
        titleHighlight={content.problem.titleHighlight}
        paragraphs={content.problem.paragraphs}
        image={content.problem.image}
        imageAlt={content.problem.imageAlt}
        imagePosition={content.problem.imagePosition}
        cta={content.problem.cta}
        variant={content.problem.variant}
      />

      {/* Services — 6 cartes d'expertise */}
      <div id="nos-services">
        <FeatureCards
          surtitre={content.services.surtitre}
          title={content.services.title}
          titleHighlight={content.services.titleHighlight}
          description={content.services.description}
          features={content.services.features}
          columns={content.services.columns}
          variant={content.services.variant}
        />
      </div>

      {/* Méthodologie — 4 étapes en zigzag */}
      <ProcessSteps
        surtitre={content.process.surtitre}
        title={content.process.title}
        titleHighlight={content.process.titleHighlight}
        description={content.process.description}
        steps={content.process.steps}
        layout={content.process.layout}
        variant={content.process.variant}
      />

      {/* Témoignage client */}
      <SingleTestimonial
        quote={content.testimonial.quote}
        author={content.testimonial.author}
        role={content.testimonial.role}
        company={content.testimonial.company}
        rating={content.testimonial.rating}
        variant={content.testimonial.variant}
      />

      {/* Ancrage local — pourquoi Toulouse */}
      <TwoColSection
        surtitre={content.localExpertise.surtitre}
        title={content.localExpertise.title}
        titleHighlight={content.localExpertise.titleHighlight}
        paragraphs={content.localExpertise.paragraphs}
        image={content.localExpertise.image}
        imageAlt={content.localExpertise.imageAlt}
        imagePosition={content.localExpertise.imagePosition}
        badge={content.localExpertise.badge}
        variant={content.localExpertise.variant}
      />

      {/* Différenciateurs — 6 items */}
      <IconGrid
        surtitre={content.differentiators.surtitre}
        title={content.differentiators.title}
        titleHighlight={content.differentiators.titleHighlight}
        items={content.differentiators.items}
        variant={content.differentiators.variant}
      />

      {/* FAQ locale — 8 questions pour le SEO */}
      <FAQAccordion
        surtitre={content.faq.surtitre}
        title={content.faq.title}
        description={content.faq.description}
        ctaText={content.faq.ctaText}
        ctaHref={content.faq.ctaHref}
        faqs={content.faq.faqs}
        variant={content.faq.variant}
      />

      {/* CTA final */}
      <CTASection
        badge={content.cta.badge}
        title={content.cta.title}
        titleHighlight={content.cta.titleHighlight}
        description={content.cta.description}
        primaryCta={content.cta.primaryCta}
        secondaryCta={content.cta.secondaryCta}
        trustElements={content.cta.trustElements}
      />
    </main>
  );
}
