"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { CityContent } from "@/content/cities/types";

// Above-the-fold — eagerly loaded
import { HeroSection } from "@/components/home/HeroSection";
import { IndustriesMarquee } from "@/components/home/IndustriesMarquee";

// Below-the-fold — lazy-loaded (SSR preserved, JS split into separate chunks)
const IntroSection = dynamic(() => import("@/components/home/IntroSection"), { ssr: true });
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"), { ssr: true });
const AssetsSection = dynamic(() => import("@/components/home/AssetsSection"), { ssr: true });
const CasClientsSection = dynamic(() => import("@/components/home/CasClientsSection"), { ssr: true });
const AboutLocalSection = dynamic(() => import("@/components/home/AboutLocalSection"), { ssr: true });
const BlogSectionComponent = dynamic(() => import("@/components/home/BlogSection"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/home/FAQSection"), { ssr: true });
const FinalCTASection = dynamic(() => import("@/components/home/FinalCTASection"), { ssr: true });

// =============================================================================
// TYPES
// =============================================================================
interface Post {
  slug: string;
  title: string;
  description?: string;
  date: string;
  category?: string;
  readingTime?: string;
  featuredImage?: string;
}

interface CityPageClientProps {
  content: CityContent;
  latestPosts: Post[];
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function CityPageClient({ content, latestPosts }: CityPageClientProps) {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        content={{
          badge: content.hero.badge,
          h1: content.hero.h1,
          h1Highlight: content.hero.h1Highlight,
          h1RotatingWords: [],
          baseline: content.hero.baseline,
          badges: [],
          cta: content.hero.cta,
          socialProof: content.hero.socialProof,
        }}
      />

      {/* Bandeau industries défilant */}
      <IndustriesMarquee />

      {/* Intro — Contexte local */}
      <IntroSection
        content={{
          title: content.intro.h2,
          paragraphs: content.intro.paragraphs,
        }}
      />

      {/* Services — 5 piliers (même structure que homepage) */}
      <ServicesSection
        surtitre={content.piliers.surtitre}
        h2={content.piliers.h2}
        description={content.piliers.description}
        piliers={content.piliers.piliers}
      />

      {/* Assets Section */}
      <AssetsSection />

      {/* Cas Clients */}
      <CasClientsSection />

      {/* À propos + Localisation (map, badges, stats) */}
      <AboutLocalSection content={content.localSEO} />

      {/* Blog - Derniers articles */}
      <BlogSectionComponent articles={latestPosts} />

      {/* FAQ — questions 100% locales */}
      <FAQSection
        content={{
          surtitre: content.faq.surtitre,
          h2: content.faq.h2,
          h2Highlight: content.faq.h2Highlight,
          description: content.faq.description,
          questions: content.faq.questions,
          ctaText: content.faq.ctaText,
          ctaButton: content.faq.ctaButton,
        }}
      />

      {/* CTA Final */}
      <FinalCTASection
        content={{
          trustBadge: content.finalCta.trustBadge,
          h2: content.finalCta.h2,
          h2Highlight: content.finalCta.h2Highlight,
          description: content.finalCta.description,
          cta: content.finalCta.cta,
          trustElements: content.finalCta.trustElements,
        }}
      />
    </main>
  );
}
