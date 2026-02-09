"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
  variant?: "client" | "partner";
}

export interface TestimonialsCarouselProps {
  surtitre?: string;
  title?: string;
  testimonials: Testimonial[];
  autoplayDelay?: number;
}

export function TestimonialsCarousel({
  surtitre = "Témoignages",
  title = "Ce qu\u2019ils disent de nous.",
  testimonials,
  autoplayDelay = 6000,
}: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: autoplayDelay, stopOnInteraction: true })]
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
              {surtitre}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white"
          >
            {title}
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Nav arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight size={20} />
          </button>

          <div ref={emblaRef} className="overflow-hidden px-8 sm:px-16">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
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
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`
                w-2 h-2 transition-all duration-300
                ${index === selectedIndex ? "bg-[#D4FD00] w-6" : "bg-white/30 hover:bg-white/50"}
              `}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
