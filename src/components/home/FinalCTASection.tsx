"use client";

import { Clock, Shield, User } from "lucide-react";
import { CTASection } from "@/components/sections";
import { TestimonialsMarquee } from "@/components/home/TestimonialsMarquee";

const TRUST_ELEMENTS = [
  { icon: Clock, text: "30 minutes" },
  { icon: Shield, text: "Sans engagement" },
  { icon: User, text: "Avec un fondateur" },
];

export function FinalCTASection() {
  return (
    <CTASection
      badge="+70 entreprises nous font confiance"
      title="Échangeons sur"
      titleHighlight="votre prochain cap."
      description="30 minutes avec un fondateur. On analyse votre positionnement actuel, on identifie les écarts avec votre marché, et on vous dit concrètement ce qu'on ferait. Sans engagement."
      primaryCta={{ text: "Réserver un appel avec un fondateur", href: "/contact" }}
      secondaryCta={{ text: "Voir nos cas clients", href: "/cas-clients" }}
      trustElements={TRUST_ELEMENTS}
    >
      <div className="mt-12 sm:mt-16">
        <TestimonialsMarquee />
      </div>
    </CTASection>
  );
}

export default FinalCTASection;
