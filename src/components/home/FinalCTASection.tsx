"use client";

import { Clock, Shield, User } from "lucide-react";
import { CTASection } from "@/components/sections";
import { TestimonialsMarquee } from "@/components/home/TestimonialsMarquee";
import { homeContent, type FinalCTAContent } from "@/content/home";

const TRUST_ELEMENTS = [
  { icon: Clock, text: "30 minutes" },
  { icon: Shield, text: "Sans engagement" },
  { icon: User, text: "Avec un fondateur" },
];

interface FinalCTASectionProps {
  content?: FinalCTAContent;
}

export function FinalCTASection({ content }: FinalCTASectionProps = {}) {
  const data = content ?? homeContent.finalCta;

  return (
    <CTASection
      badge={data.trustBadge}
      title={data.h2.replace(data.h2Highlight, "").trim()}
      titleHighlight={data.h2Highlight}
      description={data.description}
      primaryCta={data.cta.primary}
      secondaryCta={data.cta.secondary}
      trustElements={TRUST_ELEMENTS}
    >
      <div className="mt-12 sm:mt-16">
        <TestimonialsMarquee />
      </div>
    </CTASection>
  );
}

export default FinalCTASection;
