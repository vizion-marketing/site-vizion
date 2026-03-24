"use client";

import React from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    quote: "L'accompagnement d'Hugo et Lucas est vraiment qualitatif ! Compétents et très bons formateurs.",
    author: "Thomas Ensenat",
    role: "Fondateur, Ensenat Coaching",
    photo: "/images/clients/ensenat.avif",
  },
  {
    quote: "Lucas est mon Directeur Marketing externalisé et j'en suis ravie. Équipe professionnelle.",
    author: "Tamia",
    role: "Fondatrice, Tatamia",
    photo: "/images/clients/tatamia.avif",
  },
  {
    quote: "Nous en sommes très satisfaits bien que tout ait été fait à distance, depuis Toulouse jusqu'à Paris.",
    author: "Barthélémy Delcampe",
    role: "Resp. développement, Quai Liberté",
    photo: "/images/clients/quai-liberte.avif",
  },
  {
    quote: "Nous avons dépassé le million d'impressions LinkedIn en quelques mois. J'en suis très satisfait.",
    author: "Olivier Bas",
    role: "Vice-Président, Havas Paris",
    photo: "/images/clients/olivierbas.avif",
  },
  {
    quote: "Nous externalisons notre marketing auprès de Vizion. Toujours très satisfaits, même deux ans après.",
    author: "Clément Carrere",
    role: "Co-fondateur, easyVirtual.tours",
    photo: "/images/clients/easyvirtual.avif",
  },
  {
    quote: "Hugo nous accompagne pour restructurer tout notre CRM. Nous en sommes très satisfaits.",
    author: "Olivier Mounié",
    role: "Dirigeant, Ojetables",
    photo: "/images/clients/placeholder.avif",
  },
];

function TestimonialCard({ quote, author, role, photo }: typeof TESTIMONIALS[number]) {
  return (
    <div className="shrink-0 w-[320px] sm:w-[360px] bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-4 flex flex-col gap-3 hover:border-white/20 transition-colors duration-300">
      {/* Stars */}
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--color-accent)" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[13px] leading-relaxed text-white/80 line-clamp-3">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-2.5 mt-auto pt-2 border-t border-white/5">
        <Image
          src={photo}
          alt={author}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full object-cover border border-white/10"
        />
        <div>
          <p className="text-white text-[12px] font-semibold">{author}</p>
          <p className="text-white/50 text-[10px]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialMarquee() {
  return (
    <section
      className="dark-section py-8 sm:py-10 overflow-hidden relative"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Fade edges — transparent to dark */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg-dark) 0%, transparent 100%)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg-dark) 0%, transparent 100%)" }}
      />

      <div className="max-w-[82.5rem] mx-auto overflow-hidden">
        <div
          className="flex gap-4 animate-scroll-left"
          style={{ width: "max-content" }}
        >
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-4 shrink-0">
              {TESTIMONIALS.map((testimonial, i) => (
                <TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialMarquee;
