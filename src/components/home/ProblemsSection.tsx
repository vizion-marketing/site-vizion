"use client";

import { Puzzle, Users, Target, Rocket, Heart } from "lucide-react";
import { IconGrid } from "@/components/sections";

const PROBLEMS = [
  {
    icon: Puzzle,
    title: "Votre produit est complexe",
    description:
      "SaaS, plateforme, solution technique — vos prospects decrochent avant d'avoir compris ce que vous faites. Vous avez besoin de quelqu'un qui sait simplifier sans denaturer.",
  },
  {
    icon: Users,
    title: "Vos equipes ne savent pas comment presenter le produit",
    description:
      "Chaque commercial a sa propre version du pitch. Le marketing dit une chose, les sales disent autre chose, le site raconte une troisieme histoire.",
  },
  {
    icon: Target,
    title: "Vos campagnes generent du trafic, pas des deals",
    description:
      "Vous investissez en pub, vous generez des clics et des leads. Mais le message publicitaire et le discours de vente ne se retrouvent pas.",
  },
  {
    icon: Rocket,
    title: "Vous lancez un nouveau produit ou un nouveau marche",
    description:
      "Nouveau SaaS, nouvelle offre, recrutement de franchises, ouverture d'un segment — vous avez besoin d'un go-to-market structure.",
  },
  {
    icon: Heart,
    title: "Votre marque employeur ne reflete pas votre realite",
    description:
      "Votre entreprise est un produit pour vos futurs talents. Si votre messaging RH est aussi flou que votre marketing, les bons profils passent leur chemin.",
  },
];

export function ProblemsSection() {
  return (
    <IconGrid
      surtitre="Les problèmes qu'on résout"
      title="On intervient quand l'offre est bonne, mais que le marché"
      titleHighlight="ne le voit pas"
      items={PROBLEMS}
      variant="dark"
    />
  );
}

export default ProblemsSection;
