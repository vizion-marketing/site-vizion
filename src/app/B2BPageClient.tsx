"use client";

import React from "react";
import dynamic from "next/dynamic";

// Above-the-fold - eagerly loaded
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsMarquee } from "@/components/home/ProjectsMarquee";

// Below-the-fold - lazy-loaded (SSR preserved, JS split into separate chunks)
const MeetTheTeamSection = dynamic(() => import("@/components/home/MeetTheTeamSection").then(m => ({ default: m.MeetTheTeamSection })), { ssr: true });
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"), { ssr: true });
const AssetsSection = dynamic(() => import("@/components/home/AssetsSection"), { ssr: true });
const CasClientsSection = dynamic(() => import("@/components/home/CasClientsSection"), { ssr: true });
const WhyVizionSection = dynamic(() => import("@/components/home/WhyVizionSection"), { ssr: true });
const UseCasesSection = dynamic(() => import("@/components/home/UseCasesSection"), { ssr: true });
const AboutLocalSection = dynamic(() => import("@/components/home/AboutLocalSection"), { ssr: true });
const BlogSectionComponent = dynamic(() => import("@/components/home/BlogSection"), { ssr: true });
const PionnierIASection = dynamic(() => import("@/components/home/PionnierIASection").then(m => ({ default: m.PionnierIASection })), { ssr: true });
const FAQSection = dynamic(() => import("@/components/home/FAQSection"), { ssr: true });
const FinalCTASection = dynamic(() => import("@/components/home/FinalCTASection"), { ssr: true });

// Content
import {
  b2bHero,
  b2bMeetTeamText,
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
  companyType: string;
  sector: string;
  title: string;
  description?: string;
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  mainImage?: string;
  authorPhoto?: string;
  highlightMetrics?: { value: string; label: string }[];
  stats: { value: string; label: string };
  href?: string;
}

interface CaseStudyItem {
  title: string;
  company: string;
  sector: string;
  href: string;
  image?: string;
}

interface ClientLogo {
  name: string;
  logoUrl?: string;
}

interface B2BPageClientProps {
  latestPosts: Post[];
  clientLogos?: ClientLogo[];
  carouselClients?: CarouselClient[];
  caseStudies?: CaseStudyItem[];
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function B2BPageClient({ latestPosts, clientLogos, carouselClients, caseStudies }: B2BPageClientProps) {
  return (
    <main>
      {/* Hero */}
      <HeroSection content={b2bHero} />

      {/* Marquee projets */}
      <ProjectsMarquee
        projects={(caseStudies ?? []).map((cs) => ({
          company: cs.title,
          client: cs.company,
          sector: cs.sector,
          href: cs.href,
          image: cs.image,
        }))}
      />

      {/* Rencontrez les équipes */}
      <MeetTheTeamSection clientLogos={clientLogos ?? []} />

      {/* Services - 5 piliers adaptés B2B */}
      <ServicesSection
        surtitre={b2bPiliers.surtitre}
        h2={b2bPiliers.h2}
        description={b2bPiliers.description}
        piliers={b2bPiliers.piliers}
      />

      {/* Assets Section */}
      <AssetsSection />

      {/* Use Cases */}
      <UseCasesSection />

      {/* Pourquoi Vizion */}
      <WhyVizionSection />

      {/* Cas Clients */}
      <CasClientsSection cases={carouselClients} />

      {/* Pionnier IA */}
      <PionnierIASection />

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
