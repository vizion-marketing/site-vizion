"use client";

import { Clock, Shield, User } from "lucide-react";
import { CTASection } from "@/components/sections";

const TRUST_ELEMENTS = [
  { icon: Clock, text: "30 min" },
  { icon: Shield, text: "Sans engagement" },
  { icon: User, text: "Avec un fondateur" },
];

export function FinalCTASection() {
  return (
    <CTASection
      badge="+70 entreprises nous font confiance"
      title="Prêt à devenir"
      titleHighlight="l'évidence ?"
      description="Prenez 30 minutes avec nous. On analyse votre positionnement actuel et on vous dit ce qu'on ferait. Sans engagement. Avec un fondateur."
      primaryCta={{ text: "Réserver un appel stratégique", href: "/contact" }}
      secondaryCta={{ text: "Voir nos réalisations", href: "/cas-clients" }}
      trustElements={TRUST_ELEMENTS}
    />
  );
}

export default FinalCTASection;
