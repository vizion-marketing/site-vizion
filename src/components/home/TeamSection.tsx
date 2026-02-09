"use client";

import { homeContent } from "@/content/home";
import { TeamCarousel } from "@/components/sections";

const SOCIAL_LINK = "https://www.linkedin.com/company/vizion-marketing-b2b/";

export function TeamSection() {
  const { equipe } = homeContent;

  return (
    <TeamCarousel
      surtitre={equipe.surtitre}
      title="Les meilleurs spécialistes de la ville rose."
      description={equipe.description}
      ctaText="Découvrir sur LinkedIn"
      ctaHref={SOCIAL_LINK}
      members={equipe.members}
    />
  );
}

export default TeamSection;
