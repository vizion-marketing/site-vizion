"use client";

import { FAQAccordion } from "@/components/sections";

const FAQS = [
  {
    question: "Quel est votre modèle de tarification ?",
    answer: "Nous fonctionnons en accompagnement mensuel, avec des budgets allant de 4 500 € à 15 000 € selon l'envergure du projet. Ce modèle nous permet de travailler dans la durée et d'obtenir des résultats mesurables. Nous ne vendons pas de prestations au jour ou à l'heure.",
  },
  {
    question: "Quelle est la durée d'engagement minimum ?",
    answer: "Nous recommandons un engagement de 6 mois minimum pour voir des résultats tangibles. Le marketing B2B prend du temps : construire un positionnement, déployer une stratégie, mesurer les premiers retours. Les missions plus courtes sont possibles pour des projets ponctuels (lancement, audit).",
  },
  {
    question: "Comment se déroule une collaboration avec Vizion ?",
    answer: "Vous avez un directeur marketing dédié comme interlocuteur unique. Il pilote l'ensemble des travaux, coordonne les experts mobilisés et assure le lien avec vos équipes. Points hebdomadaires, reporting mensuel, accès direct par email et téléphone.",
  },
  {
    question: "Sous quel délai peut-on attendre des résultats ?",
    answer: "Les premiers livrables arrivent dès les premières semaines (positionnement, supports). Les premiers leads qualifiés entre 2 et 4 mois selon votre cycle de vente. L'impact sur le pipeline commercial se mesure généralement entre 4 et 6 mois.",
  },
  {
    question: "Qu'est-ce qui différencie Vizion des autres agences ?",
    answer: "Nous sommes des stratèges, pas des exécutants. Votre interlocuteur est un directeur marketing, pas un chef de projet. Nous intervenons jusqu'au closing, pas uniquement sur la notoriété. Et nous intégrons l'IA là où elle apporte une vraie valeur ajoutée.",
  },
  {
    question: "Travaillez-vous avec des startups early-stage ?",
    answer: "Nous accompagnons principalement des PME et ETI établies (10 à 250 collaborateurs) avec un produit ou service déjà validé par le marché. Les startups en phase d'amorçage ne correspondent généralement pas à notre modèle d'accompagnement.",
  },
];

export function FAQSection() {
  return (
    <FAQAccordion
      surtitre="Questions fréquentes"
      title="Vous avez des questions ?"
      description="Voici les réponses aux questions que nos prospects nous posent le plus souvent."
      ctaText="Une autre question ? Contactez-nous"
      ctaHref="/contact"
      faqs={FAQS}
    />
  );
}

export default FAQSection;
