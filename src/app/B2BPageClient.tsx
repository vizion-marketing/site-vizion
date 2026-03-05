"use client";

import React from "react";
import dynamic from "next/dynamic";

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

// Content
import {
  b2bHero,
  b2bIntro,
  b2bPiliers,
  b2bLocalSEO,
  b2bBlog,
  b2bFAQ,
  b2bFinalCta,
} from "@/content/b2b";

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

interface CarouselClient {
  id: number;
  company: string;
  sector: string;
  title: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  mainImage: string;
  secondaryImage: string;
  stats: { value: string; label: string };
  href?: string;
}

interface B2BPageClientProps {
  latestPosts: Post[];
  carouselClients?: CarouselClient[];
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function B2BPageClient({ latestPosts, carouselClients }: B2BPageClientProps) {
  return (
    <main>
      {/* Hero */}
      <HeroSection content={b2bHero} />

      {/* Bandeau industries défilant */}
      <IndustriesMarquee />

      {/* Intro — Pourquoi le B2B est différent */}
      <IntroSection
        content={{
          title: b2bIntro.title,
          paragraphs: b2bIntro.paragraphs,
          mission: b2bIntro.mission,
        }}
      />

      {/* Services — 5 piliers adaptés B2B */}
      <ServicesSection
        surtitre={b2bPiliers.surtitre}
        h2={b2bPiliers.h2}
        description={b2bPiliers.description}
        piliers={b2bPiliers.piliers}
      />

      {/* Assets Section */}
      <AssetsSection />

      {/* Cas Clients */}
      <CasClientsSection cases={carouselClients} />

      {/* À propos + Localisation */}
      <AboutLocalSection content={b2bLocalSEO} />

      {/* Blog */}
      <BlogSectionComponent
        articles={latestPosts}
        surtitre={b2bBlog.surtitre}
        h2={b2bBlog.h2}
        ctaText={b2bBlog.ctaText}
      />

      {/* FAQ */}
      <FAQSection
        content={{
          surtitre: b2bFAQ.surtitre,
          h2: b2bFAQ.h2,
          h2Highlight: b2bFAQ.h2Highlight,
          description: b2bFAQ.description,
          questions: b2bFAQ.questions,
          ctaText: b2bFAQ.ctaText,
          ctaButton: b2bFAQ.ctaButton,
        }}
      />

      {/* CTA Final */}
      <FinalCTASection
        content={{
          trustBadge: b2bFinalCta.trustBadge,
          h2: b2bFinalCta.h2,
          h2Highlight: b2bFinalCta.h2Highlight,
          description: b2bFinalCta.description,
          cta: b2bFinalCta.cta,
          trustElements: b2bFinalCta.trustElements,
        }}
      />
    </main>
  );
}
