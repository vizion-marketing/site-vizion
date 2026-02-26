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
      className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-overlay dark-section"
      style={{ background: "var(--bg-dark)" }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") scrollPrev();
        if (e.key === "ArrowRight") scrollNext();
      }}
    >
      {/* Base + radial gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[50%] h-[50%] bottom-[5%] right-[-15%] animate-gradient-float-4"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.05) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[45%] h-[45%] top-[20%] left-[-10%] animate-gradient-float-5"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2.5 mb-4 sm:mb-5">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.05 }}
              className="relative flex h-2 w-2"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent)]/80 to-[var(--color-accent)]/60 shadow-[0_0_8px_rgba(var(--color-accent-rgb),0.5)]" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase text-white/70"
            >
              {surtitre}
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] !text-white"
          >
            {title}
          </motion.h2>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Nav arrows */}
          <motion.button
            onClick={scrollPrev}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-white/25 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.3)] transition-all duration-300"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            onClick={scrollNext}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-white/25 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.3)] transition-all duration-300"
            aria-label="Témoignage suivant"
          >
            <ChevronRight size={20} />
          </motion.button>

          <div ref={emblaRef} className="overflow-hidden px-8 sm:px-16">
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 px-2 sm:px-4"
                >
                  <div
                    className={`
                      p-6 sm:p-8 md:p-10 max-w-3xl mx-auto text-center backdrop-blur-xl
                      ${
                        testimonial.variant === "partner"
                          ? "bg-white/[0.08] border border-accent/40 shadow-[0_8px_32px_rgba(var(--color-accent-rgb),0.15)]"
                          : "bg-white/[0.08] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
                      }
                    `}
                  >
                    {/* Rating - staggered stars */}
                    <div className="flex justify-center gap-1 mb-6" key={`stars-${selectedIndex}`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.06, type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Star
                            size={18}
                            className={`transition-all duration-300 ${
                              i < testimonial.rating
                                ? "fill-[var(--color-accent)] text-accent drop-shadow-[0_0_8px_rgba(var(--color-accent-rgb),0.6)]"
                                : "text-white/20"
                            }`}
                          />
                        </motion.span>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-[var(--font-body)] leading-relaxed mb-6 sm:mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-3">
                      {testimonial.avatar && (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 relative overflow-hidden rounded-full border-2 border-white/30 transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_16px_rgba(var(--color-accent-rgb),0.4)]">
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
                        <div className="text-white/70 font-[var(--font-body)] text-xs sm:text-sm">
                          {testimonial.role} — {testimonial.company}
                        </div>
                      </div>
                      {testimonial.variant === "partner" && (
                        <span className="ml-2 px-2 py-1 bg-accent/20 text-[9px] font-bold tracking-wide text-accent">
                          PARTENAIRE
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dots - layout animated */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              layout
              onClick={() => scrollTo(index)}
              transition={{ layout: { type: "spring", stiffness: 300, damping: 25 } }}
              className={`
                h-2
                ${index === selectedIndex ? "bg-accent w-8 shadow-[0_0_12px_rgba(var(--color-accent-rgb),0.6)]" : "w-2 bg-white/30 hover:bg-white/60"}
              `}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
