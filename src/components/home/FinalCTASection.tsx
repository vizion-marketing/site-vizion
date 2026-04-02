"use client";

import { Clock, Shield, User } from "lucide-react";
import { CTASection } from "@/components/sections";
import { TestimonialsMarquee } from "@/components/home/TestimonialsMarquee";
import type { FinalCTAContent } from "@/content/home";

const TRUST_ELEMENTS = [
  { icon: Clock, text: "30 minutes" },
  { icon: Shield, text: "Sans engagement" },
  { icon: User, text: "Avec un fondateur" },
];

interface FinalCTASectionProps {
  content?: FinalCTAContent;
}

export function FinalCTASection({ content }: FinalCTASectionProps = {}) {
  return (
    <CTASection
      badge={content!.trustBadge}
      title={content!.h2.replace(content!.h2Highlight, "").trim()}
      titleHighlight={content!.h2Highlight}
      description={content!.description}
      primaryCta={content!.cta.primary}
      secondaryCta={content!.cta.secondary}
      trustElements={TRUST_ELEMENTS}
    >
      <div className="mt-12 sm:mt-16">
        <TestimonialsMarquee />
      </div>
    </CTASection>
  );
}

export default FinalCTASection;
