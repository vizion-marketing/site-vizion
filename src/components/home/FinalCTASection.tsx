"use client";

import { Clock, Shield, User } from "lucide-react";
import { CTASection } from "@/components/sections";

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
    />
  );
}

export default FinalCTASection;
