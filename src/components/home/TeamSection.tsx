"use client";

import { homeContent, type EquipeContent } from "@/content/home";
import { TeamCarousel } from "@/components/sections";
import { SOCIAL_LINKS } from "@/lib/constants";

interface TeamSectionProps {
  content?: EquipeContent;
}

export function TeamSection({ content }: TeamSectionProps = {}) {
  const equipe = content ?? homeContent.equipe;

  return (
    <TeamCarousel
      surtitre={equipe.surtitre}
      title="L'équipe derrière votre stratégie."
      description={equipe.description}
      ctaText="Découvrir sur LinkedIn"
      ctaHref={SOCIAL_LINKS.linkedin.vizion}
      members={equipe.members}
    />
  );
}

export default TeamSection;
