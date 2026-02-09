"use client";

import { TestimonialsCarousel } from "@/components/sections";

const TESTIMONIALS = [
  {
    id: "clement",
    quote:
      "C'est vraiment un bonheur de les avoir au quotidien. Vizion est reellement investie dans notre croissance, ils font partie de l'equipe.",
    author: "Clement",
    role: "Co-fondateur",
    company: "easyVirtual.tours",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150",
    rating: 5,
    variant: "client" as const,
  },
  {
    id: "testimonial-2",
    quote:
      "Ils ont transforme notre facon de communiquer. Le positionnement est clair, les commerciaux ont enfin un discours unifie.",
    author: "Marie D.",
    role: "Directrice Marketing",
    company: "SaaS B2B",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
    rating: 5,
    variant: "client" as const,
  },
  {
    id: "partner",
    quote:
      "Quand nos clients ont un probleme de messaging, on les envoie chez Vizion les yeux fermes. Ils delivrent, toujours.",
    author: "Thomas L.",
    role: "Fondateur",
    company: "Cabinet partenaire",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    rating: 5,
    variant: "partner" as const,
  },
];

export function TestimonialsSection() {
  return (
    <TestimonialsCarousel
      surtitre="Témoignages"
      title="Ce qu'ils disent de nous."
      testimonials={TESTIMONIALS}
    />
  );
}

export default TestimonialsSection;
