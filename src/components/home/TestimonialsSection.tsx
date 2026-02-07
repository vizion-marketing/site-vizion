"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-overlay"
      style={{
        background: "linear-gradient(117deg, #B7B7B7 0%, #000 50.77%, #6D6D6D 100.58%)",
      }}
    >
      {/* Carbon fibre texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2.5 mb-4 sm:mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/50">
              Temoignages
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white"
          >
            Ce qu&apos;ils disent de nous.
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Nav arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
            aria-label="Temoignage precedent"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
            aria-label="Temoignage suivant"
          >
            <ChevronRight size={20} />
          </button>

          <div ref={emblaRef} className="overflow-hidden px-8 sm:px-16">
            <div className="flex">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 px-2 sm:px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`
                      p-6 sm:p-8 md:p-10 max-w-3xl mx-auto text-center
                      ${
                        testimonial.variant === "partner"
                          ? "bg-white/5 border border-[#D4FD00]/30"
                          : "bg-white/5 border border-white/10"
                      }
                    `}
                  >
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={
                            i < testimonial.rating
                              ? "fill-[#D4FD00] text-[#D4FD00]"
                              : "text-white/20"
                          }
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-[var(--font-body)] leading-relaxed mb-6 sm:mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-3">
                      {testimonial.avatar && (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 relative overflow-hidden rounded-full border-2 border-white/20">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="text-left">
                        <div className="text-white font-[var(--font-body)] font-semibold text-sm sm:text-base">
                          {testimonial.author}
                        </div>
                        <div className="text-white/50 font-[var(--font-body)] text-xs sm:text-sm">
                          {testimonial.role} — {testimonial.company}
                        </div>
                      </div>
                      {testimonial.variant === "partner" && (
                        <span className="ml-2 px-2 py-1 bg-[#D4FD00]/20 text-[9px] font-bold tracking-wide text-[#D4FD00]">
                          PARTENAIRE
                        </span>
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`
                w-2 h-2 transition-all duration-300
                ${index === selectedIndex ? "bg-[#D4FD00] w-6" : "bg-white/30 hover:bg-white/50"}
              `}
              aria-label={`Aller au temoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
