"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { SolutionItem } from "@/content/services";

interface SolutionStickyProps {
  title: string;
  subtitle?: string;
  image: string;
  items: SolutionItem[];
}

export function SolutionSticky({
  title,
  subtitle,
  image,
  items,
}: SolutionStickyProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.6 },
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items.length]);

  const lastIndex = items.length - 1;

  return (
    <section
      className="dark-section grain-overlay py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="max-w-[82.5rem] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
        {/* Left — Image sticky (sans titre) */}
        <div className="lg:sticky lg:top-[100px] lg:self-start">
          <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[70vh]">
            <Image
              src={image}
              alt="L'équipe Vizion"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        </div>

        {/* Right — Titre + sous-titre + cards défilantes */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {/* Titre + sous-paragraphe au-dessus des cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <h2 className="font-heading font-medium text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed max-w-lg">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Cards */}
          {items.map((item, i) => {
            const isLast = i === lastIndex;
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`border transition-all duration-300 ${
                  isLast
                    ? "bg-accent border-accent p-10 sm:p-12 min-h-[220px] flex items-end"
                    : "p-7 sm:p-8" + (isActive
                      ? " bg-white/[0.08] border-accent/30"
                      : " bg-white/[0.03] border-white/10")
                }`}
              >
                {isLast ? (
                  /* Carte conclusion — accent */
                  <div style={{ color: "#000" }}>
                    <p className="text-[11px] font-bold tracking-[0.12em] uppercase mb-4" style={{ color: "rgba(0,0,0,0.5)" }}>
                      En résumé
                    </p>
                    <h3 className="font-heading font-medium text-[22px] sm:text-[28px] leading-[1.1] tracking-[-0.025em] mb-3" style={{ color: "#000" }}>
                      {item.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] leading-relaxed" style={{ color: "rgba(0,0,0,0.65)" }}>
                      {item.description}
                    </p>
                  </div>
                ) : (
                  /* Cartes normales */
                  <div className="flex items-start gap-5">
                    <span
                      className={`text-[40px] sm:text-[48px] font-extralight leading-none transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-white/15"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-2">
                      <h3 className="text-[17px] sm:text-[19px] font-semibold text-white leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
