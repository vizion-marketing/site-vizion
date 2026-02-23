"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Témoignages réels
const TESTIMONIALS = [
  {
    id: 1,
    quote: "L'accompagnement d'Hugo et Lucas est vraiment qualitatif ! Compétents et très bons formateurs. Je recommande cette agence de Marketing digital à Toulouse !",
    author: "Thomas Ensenat",
    role: "Fondateur",
    company: "Ensenat Coaching",
    avatar: "/images/clients/ensenat.avif",
  },
  {
    id: 2,
    quote: "Je recommande fortement cette agence toulousaine ! Équipe professionnelle et répondant à tous types de besoins. Lucas est mon Directeur Marketing externalisé et j'en suis ravie.",
    author: "Tamia",
    role: "Fondatrice",
    company: "Tatamia",
    avatar: "/images/clients/tatamia.avif",
  },
  {
    id: 3,
    quote: "Nous avons confié la refonte de notre site web à Lucas et son équipe, nous en sommes très satisfaits bien que tout ait été fait à distance, depuis Toulouse jusqu'à Paris.",
    author: "Barthélémy Delcampe",
    role: "Responsable développement",
    company: "Quai Liberté",
    avatar: "/images/clients/quai-liberte.avif",
  },
  {
    id: 4,
    quote: "Hugo nous accompagne depuis un an maintenant pour restructurer tout notre CRM. Nous en sommes très satisfaits.",
    author: "Olivier Mounié",
    role: "Dirigeant",
    company: "Ojetables",
    avatar: "/images/clients/placeholder.avif",
  },
  {
    id: 5,
    quote: "Vizion m'a accompagné dans le développement de mon image sur LinkedIn. Nous avons dépassé le million d'impressions en quelques mois, j'en suis très satisfait.",
    author: "Olivier Bas",
    role: "Vice-Président",
    company: "Havas Paris",
    avatar: "/images/clients/olivierbas.avif",
  },
  {
    id: 6,
    quote: "Nous externalisons une grosse partie de notre marketing auprès de Vizion : stratégie produit, aide à la vente, automatisation CRM, gestion de nos campagnes. Nous en sommes toujours très satisfaits, même deux ans après.",
    author: "Clément Carrere",
    role: "Co-fondateur",
    company: "easyVirtual.tours",
    avatar: "/images/clients/easyvirtual.avif",
  },
];

// Composant carte témoignage
function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-black/70 backdrop-blur-md p-5 border border-white/10 hover:border-[#D4FD00]/50 transition-all duration-300">
      <div className="flex items-start gap-3 mb-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.author}
          width={40}
          height={40}
          className="w-10 h-10 object-cover rounded-full"
        />
        <div>
          <p className="font-heading font-semibold text-[14px] text-white">
            {testimonial.author}
          </p>
          <p className="text-[12px] text-white/60">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
      <p className="text-[14px] text-white/80 font-[var(--font-body)] leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  );
}

export function TestimonialsMarquee() {
  return (
    <div className="relative h-[380px] sm:h-[440px] md:h-[500px] overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0c0c0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0c0c0a] to-transparent z-10 pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        {/* Column 1 - Scroll Up */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-4"
          >
            {[...TESTIMONIALS.slice(0, 2), ...TESTIMONIALS.slice(0, 2)].map((testimonial, idx) => (
              <TestimonialCard key={`col1-${testimonial.id}-${idx}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Column 2 - Scroll Down */}
        <div className="relative overflow-hidden hidden md:block">
          <motion.div
            initial={{ y: "-50%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-4"
          >
            {[...TESTIMONIALS.slice(2, 4), ...TESTIMONIALS.slice(2, 4)].map((testimonial, idx) => (
              <TestimonialCard key={`col2-${testimonial.id}-${idx}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Column 3 - Scroll Up */}
        <div className="relative overflow-hidden hidden md:block">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-4"
          >
            {[...TESTIMONIALS.slice(4, 6), ...TESTIMONIALS.slice(4, 6)].map((testimonial, idx) => (
              <TestimonialCard key={`col3-${testimonial.id}-${idx}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsMarquee;
