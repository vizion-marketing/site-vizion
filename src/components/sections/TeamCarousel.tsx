"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  img: string;
  skills: string[];
}

export interface TeamCarouselProps {
  surtitre?: string;
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  members: TeamMember[];
  autoScrollInterval?: number;
}

export function TeamCarousel({
  surtitre,
  title,
  description,
  ctaText,
  ctaHref,
  members,
  autoScrollInterval = 3000,
}: TeamCarouselProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // Auto-scroll, pause on hover
  useEffect(() => {
    if (isPaused || !autoScrollInterval) return;
    const interval = setInterval(() => {
      const el = sliderRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const card = el.querySelector<HTMLElement>("div");
        const step = (card?.offsetWidth ?? 300) + 16;
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, [isPaused, autoScrollInterval]);

  const scroll = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth ?? 300;
    el.scrollBy({
      left: direction === "left" ? -cardWidth - 16 : cardWidth + 16,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-light"
      style={{ background: "#f8f8f6" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-[#D4FD00] opacity-[0.04] rounded-full blur-[200px] pointer-events-none"
      />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left — Title + description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            {surtitre && (
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
                <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b]">
                  {surtitre}
                </span>
              </div>
            )}

            <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] mb-5 sm:mb-6">
              {title}
            </h2>

            {description && (
              <p className="text-[#6b6b6b] text-base font-[var(--font-body)] leading-relaxed max-w-md mb-8">
                {description}
              </p>
            )}

            {ctaText && ctaHref && (
              <a
                href={ctaHref}
                target={ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="btn btn-dark group"
              >
                {ctaText}
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            )}

            {/* Navigation arrows — desktop only */}
            <div className="hidden lg:flex items-center gap-3 mt-10">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-11 h-11 flex items-center justify-center border border-black/10 bg-white hover:bg-black hover:text-white hover:border-black disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black disabled:hover:border-black/10 transition-all duration-200"
                aria-label="Précédent"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-11 h-11 flex items-center justify-center border border-black/10 bg-white hover:bg-black hover:text-white hover:border-black disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black disabled:hover:border-black/10 transition-all duration-200"
                aria-label="Suivant"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Right — Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <div
              ref={sliderRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mr-4 sm:-mr-6 md:-mr-12 pr-4 sm:pr-6 md:pr-12 snap-x snap-mandatory"
            >
              {members.map((member) => (
                <div
                  key={member.name}
                  className="relative flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] aspect-[3/4] group snap-start overflow-hidden border border-black/[0.06] bg-white"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="300px"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Specialty tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] font-bold tracking-wide text-white/90">
                      {member.specialty}
                    </span>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="font-heading font-semibold text-white text-[18px] sm:text-[20px] leading-tight">
                      {member.name}
                    </p>
                    <p className="text-[12px] sm:text-[13px] font-[var(--font-body)] text-white/70 mt-1">
                      {member.role}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[9px] sm:text-[10px] font-[var(--font-body)] font-medium text-white/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows — mobile only */}
            <div className="flex lg:hidden items-center gap-3 mt-6">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-10 h-10 flex items-center justify-center border border-black/10 bg-white disabled:opacity-30 transition-opacity"
                aria-label="Précédent"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-10 h-10 flex items-center justify-center border border-black/10 bg-white disabled:opacity-30 transition-opacity"
                aria-label="Suivant"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
