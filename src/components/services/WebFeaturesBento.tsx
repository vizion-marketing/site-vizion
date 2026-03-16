"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Zap, Search, Palette, Plug, TrendingUp } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { BentoCards } from "@/content/services/types";

gsap.registerPlugin(ScrollTrigger);

interface WebFeaturesBentoProps {
  cards: BentoCards;
}

export function WebFeaturesBento({ cards }: WebFeaturesBentoProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const metricRef = useRef<HTMLDivElement>(null);
  const [metricValue, setMetricValue] = useState(0);

  // Split titles on \n for line breaks
  const featuredTitleLines = cards.featured.title.split("\n");
  const aiLabelParts = cards.ai.label.split("—").map((s) => s.trim());

  useGSAP(
    () => {
      // Animated counter
      const counter = { val: 0 };
      gsap.to(counter, {
        val: cards.metric.value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: metricRef.current,
          start: "top 80%",
        },
        onUpdate: () => setMetricValue(Math.round(counter.val)),
      });

      // Bento cells stagger
      gsap.fromTo(
        "[data-bento='cell']",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-bento='grid']",
            start: "top 80%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Bento grid */}
        <div
          data-bento="grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {/* Row 1 — Featured dark (2/3) + Perf metric (1/3) */}
          <div
            data-bento="cell"
            className="lg:col-span-2 dark-section grain-overlay p-8 sm:p-10 flex flex-col justify-between min-h-[260px] relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            style={{ background: "var(--bg-dark)" }}
          >
            {/* Decorative accent gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 30% 70%, rgba(var(--color-accent-rgb), 0.10) 0%, transparent 55%)",
              }}
            />
            <div className="w-10 h-10 bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300 relative z-10">
              <TrendingUp
                size={18}
                className="text-white group-hover:text-black transition-colors duration-300"
              />
            </div>
            <div className="relative z-10">
              <h3 className="font-heading font-medium text-[22px] sm:text-[28px] leading-[1.1] tracking-[-0.02em] text-white mb-3">
                {featuredTitleLines.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed max-w-lg">
                {cards.featured.description}
              </p>
            </div>
          </div>

          <div
            ref={metricRef}
            data-bento="cell"
            className="bg-card border border-black/[0.06] p-7 sm:p-8 flex flex-col justify-between min-h-[260px] group hover:bg-accent hover:-translate-y-1 transition-all duration-500"
          >
            <div className="w-10 h-10 bg-accent flex items-center justify-center group-hover:bg-black transition-colors duration-300">
              <Zap
                size={18}
                className="text-black group-hover:text-accent transition-colors duration-300"
              />
            </div>
            <div>
              <div className="text-[52px] font-bold text-primary leading-none mb-1">
                {metricValue}+
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-primary mb-1">
                {cards.metric.label}
              </h3>
              <p className="text-[13px] text-muted leading-relaxed group-hover:text-primary/70">
                {cards.metric.description}
              </p>
            </div>
          </div>

          {/* Row 2 — Image (1/3) + SEO (1/3) + Design (1/3) */}
          <div
            data-bento="cell"
            className="relative overflow-hidden min-h-[280px] border border-black/[0.06] group"
          >
            <Image
              src="/images/why-vizion/equipe-vizion.avif"
              alt="L'équipe Vizion au travail"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div
            data-bento="cell"
            className="bg-card border border-black/[0.06] p-7 sm:p-8 flex flex-col justify-between min-h-[280px] group hover:bg-accent hover:-translate-y-1 transition-all duration-500"
          >
            <div className="w-10 h-10 bg-accent flex items-center justify-center group-hover:bg-black transition-colors duration-300">
              <Search
                size={18}
                className="text-black group-hover:text-accent transition-colors duration-300"
              />
            </div>
            <div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary mb-2">
                {cards.seo.title}
              </h3>
              <p className="text-[13px] text-muted leading-relaxed group-hover:text-primary/70">
                {cards.seo.description}
              </p>
            </div>
          </div>

          <div
            data-bento="cell"
            className="bg-card border border-black/[0.06] p-7 sm:p-8 flex flex-col justify-between min-h-[280px] group hover:bg-accent hover:-translate-y-1 transition-all duration-500"
          >
            <div className="w-10 h-10 bg-accent flex items-center justify-center group-hover:bg-black transition-colors duration-300">
              <Palette
                size={18}
                className="text-black group-hover:text-accent transition-colors duration-300"
              />
            </div>
            <div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary mb-2">
                {cards.design.title}
              </h3>
              <p className="text-[13px] text-muted leading-relaxed group-hover:text-primary/70">
                {cards.design.description}
              </p>
            </div>
          </div>

          {/* Row 3 — Nouveau IA (2/3) + Intégrations (1/3) */}
          <div
            data-bento="cell"
            className="lg:col-span-2 bg-accent p-7 sm:p-8 flex flex-col justify-between min-h-[240px] hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-2">
              {aiLabelParts[0] && (
                <span className="text-[10px] font-bold tracking-[0.14em] text-black uppercase">
                  {aiLabelParts[0]}
                </span>
              )}
              {aiLabelParts[1] && (
                <>
                  <div className="w-1.5 h-1.5 bg-black/60" />
                  <span className="text-[10px] font-medium tracking-[0.08em] text-black uppercase">
                    {aiLabelParts[1]}
                  </span>
                </>
              )}
            </div>
            <div>
              <h3 className="font-heading font-medium text-[20px] sm:text-[26px] leading-[1.1] tracking-[-0.02em] text-black mb-3">
                {cards.ai.title}
              </h3>
              <p className="text-[14px] text-black/70 leading-relaxed max-w-2xl">
                {cards.ai.description}
              </p>
            </div>
          </div>

          <div
            data-bento="cell"
            className="bg-card border border-black/[0.06] p-7 sm:p-8 flex flex-col justify-between min-h-[240px] group hover:bg-accent hover:-translate-y-1 transition-all duration-500"
          >
            <div className="w-10 h-10 bg-accent flex items-center justify-center group-hover:bg-black transition-colors duration-300">
              <Plug
                size={18}
                className="text-black group-hover:text-accent transition-colors duration-300"
              />
            </div>
            <div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary mb-2">
                {cards.integrations.title}
              </h3>
              <p className="text-[13px] text-muted leading-relaxed group-hover:text-primary/70">
                {cards.integrations.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
