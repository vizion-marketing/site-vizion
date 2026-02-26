"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ImageSlide {
  image: string;
  alt?: string;
  caption?: string;
}

export interface ImageSliderProps {
  surtitre?: string;
  title?: string;
  slides: ImageSlide[];
  /** Aspect ratio of the slider */
  aspectRatio?: "16/9" | "4/3" | "3/2" | "21/9";
  /** Auto-advance interval in ms (0 = disabled) */
  autoplayInterval?: number;
  /** Show thumbnails below */
  showThumbnails?: boolean;
  /** Show counter (1/5) */
  showCounter?: boolean;
  variant?: "light" | "dark";
}

export function ImageSlider({
  surtitre,
  title,
  slides,
  aspectRatio = "16/9",
  autoplayInterval = 0,
  showThumbnails = false,
  showCounter = true,
  variant = "light",
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isDark = variant === "dark";

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (autoplayInterval <= 0) return;
    const timer = setInterval(goNext, autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplayInterval, goNext]);

  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "3/2": "aspect-[3/2]",
    "21/9": "aspect-[21/9]",
  }[aspectRatio];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay dark-section" : ""}`}
      style={{ background: isDark ? "var(--bg-dark)" : "#ffffff" }}
    >
      {isDark && (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-gradient-float-1 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)" }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] animate-gradient-float-2 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)" }} />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] animate-gradient-float-3 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)" }} />
        </>
      )}
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        {(surtitre || title) && (
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
            <div>
              {surtitre && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2.5 mb-4 sm:mb-5"
                >
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
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase text-muted`}
                  >
                    {surtitre}
                  </motion.span>
                </motion.div>
              )}
              {title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-primary`}
                >
                  {title}
                </motion.h2>
              )}
            </div>
            {/* Nav arrows */}
            <div className="flex items-center gap-2">
              {showCounter && (
                <span className={`text-sm font-[var(--font-body)] mr-3 tabular-nums text-muted`}>
                  {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
              )}
              <button
                onClick={goPrev}
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border transition-colors ${
                  isDark
                    ? "border-white/10 text-primary hover:bg-white hover:text-primary"
                    : "border-black/10 text-primary hover:bg-black hover:text-white"
                }`}
                aria-label="Précédent"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border transition-colors ${
                  isDark
                    ? "border-white/10 text-primary hover:bg-white hover:text-primary"
                    : "border-black/10 text-primary hover:bg-black hover:text-white"
                }`}
                aria-label="Suivant"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`relative ${aspectClass} overflow-hidden bg-black/5`}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].alt || ""}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 82.5rem"
              />
            </motion.div>
          </AnimatePresence>

          {/* Caption overlay */}
          {slides[currentIndex].caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 sm:p-8">
              <p className="text-white text-sm sm:text-base font-[var(--font-body)]">
                {slides[currentIndex].caption}
              </p>
            </div>
          )}
        </motion.div>

        {/* Thumbnails */}
        {showThumbnails && slides.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`relative flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-accent opacity-100"
                    : `${isDark ? "border-white/10" : "border-black/10"} opacity-50 hover:opacity-80`
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt || ""}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        )}

        {/* Progress dots (when no thumbnails) */}
        {!showThumbnails && slides.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-6"
                    : `${isDark ? "bg-white/20 hover:bg-white/40" : "bg-black/20 hover:bg-black/40"} w-2`
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
