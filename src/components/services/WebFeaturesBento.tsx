"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Zap, Ban, Blocks, Plug, BarChart3, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { BentoCards } from "@/content/services/types";

gsap.registerPlugin(ScrollTrigger);

interface WebFeaturesBentoProps {
  cards: BentoCards;
}

/* ── WordPress logo SVG ── */
function WordPressLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 122.52 122.523" className={className} fill="currentColor">
      <path d="M8.708 61.26c0 20.803 12.089 38.779 29.619 47.299L13.258 39.872a52.354 52.354 0 0 0-4.55 21.388zM96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501L48.2 93.547l11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" />
      <path d="M62.184 65.857l-15.768 45.819a52.516 52.516 0 0 0 32.262-.838 4.7 4.7 0 0 1-.377-.726L62.184 65.857zM107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.427a52.268 52.268 0 0 0-6.438-25.214z" />
      <path d="M61.262 0C27.483 0 0 27.481 0 61.26c0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.258-27.48 61.258-61.263C122.52 27.481 95.04 0 61.262 0zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z" />
    </svg>
  );
}


/* ── Marquee (for integrations card) ── */
function ToolsMarquee({ logos }: { logos: string[] }) {
  return (
    <div className="overflow-hidden mt-auto pt-5">
      <div
        className="flex animate-scroll-left"
        style={{ width: "max-content" }}
      >
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center shrink-0">
            {logos.map((name, i) => (
              <React.Fragment key={`${setIndex}-${i}`}>
                <span className="text-primary/60 font-heading font-medium text-xs sm:text-sm tracking-tight whitespace-nowrap px-3 sm:px-4">
                  {name}
                </span>
                <span className="text-primary/20 text-sm">&bull;</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Wireframe UI element (decorative, for noTemplate card) ── */
function WireframeMockup() {
  return (
    <div className="mt-auto pt-4 relative">
      <div className="bg-white border border-black/[0.08] shadow-lg p-3 sm:p-4 translate-y-6 group-hover:translate-y-3 transition-transform duration-500">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-2 h-2 bg-black/10" />
          <div className="w-2 h-2 bg-black/10" />
          <div className="w-2 h-2 bg-black/10" />
          <div className="flex-1 h-2 bg-black/[0.06] ml-2" />
        </div>
        {/* Wireframe blocks */}
        <div className="space-y-2">
          <div className="h-2 bg-black/[0.08] w-3/4" />
          <div className="h-2 bg-black/[0.06] w-1/2" />
          <div className="flex gap-2 mt-2">
            <div className="h-6 bg-accent/30 flex-1" />
            <div className="h-6 bg-black/[0.06] flex-1" />
          </div>
          <div className="h-2 bg-black/[0.06] w-5/6" />
          <div className="h-2 bg-black/[0.06] w-2/3" />
        </div>
      </div>
    </div>
  );
}

/* ── Animated bar chart (decorative, for growth card) ── */
const barData = [
  { height: "40%", delay: "0s" },
  { height: "65%", delay: "0.15s" },
  { height: "45%", delay: "0.3s" },
  { height: "80%", delay: "0.45s" },
  { height: "55%", delay: "0.6s" },
  { height: "90%", delay: "0.75s" },
  { height: "70%", delay: "0.9s" },
];

function GrowthBarChart() {
  return (
    <div className="flex items-end gap-[6px] sm:gap-2 h-28 sm:h-36 shrink-0 mt-6 lg:mt-0">
      {barData.map((bar, i) => (
        <div
          key={i}
          className="w-4 sm:w-5 bg-accent origin-bottom animate-bar-grow"
          style={{
            height: bar.height,
            animationDelay: bar.delay,
            opacity: 0.6 + i * 0.05,
          }}
        />
      ))}
    </div>
  );
}

export function WebFeaturesBento({ cards }: WebFeaturesBentoProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const metricRef = useRef<HTMLDivElement>(null);
  const [metricValue, setMetricValue] = useState(0);

  const techTitleLines = cards.technology.title.split("\n");

  useGSAP(
    () => {
      // Animated counter
      const counter = { val: 0 };
      gsap.to(counter, {
        val: cards.performance.value,
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
        {/* Section title */}
        {cards.sectionTitle && (
          <div className="mb-10 sm:mb-14 max-w-3xl">
            <h2 className="font-heading font-medium text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.035em] text-primary">
              {cards.sectionTitle}
            </h2>
            {cards.sectionDescription && (
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-muted mt-4 sm:mt-5">
                {cards.sectionDescription}
              </p>
            )}
          </div>
        )}

        {/* Bento grid — 3 columns */}
        <div
          data-bento="grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {/* Row 1 — Technology dark (2/3) + Performance metric (1/3) */}
          <div
            data-bento="cell"
            className="lg:col-span-2 dark-section grain-overlay p-8 sm:p-10 flex flex-col min-h-[280px] relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            style={{ background: "var(--bg-dark)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 30% 70%, rgba(var(--color-accent-rgb), 0.10) 0%, transparent 55%)",
              }}
            />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="font-heading font-medium text-[22px] sm:text-[28px] leading-[1.1] tracking-[-0.02em] text-white mb-3">
                {techTitleLines.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed max-w-lg">
                {cards.technology.description}
              </p>
              {/* Tech logos */}
              <div className="flex items-center gap-6 sm:gap-10 mt-auto pt-6">
                <div className="flex items-center gap-3">
                  <WordPressLogo className="w-8 h-8 sm:w-10 sm:h-10 text-white/70" />
                  <span className="text-white/50 text-[13px] sm:text-[14px] font-medium">WordPress</span>
                </div>
                <div className="w-px h-8 bg-white/15" />
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/services/site-web/logo-nextjs.avif"
                    alt="Next.js"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 invert"
                  />
                  <span className="text-white/50 text-[13px] sm:text-[14px] font-medium">Next.js</span>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={metricRef}
            data-bento="cell"
            className="bg-card border border-black/[0.06] p-6 sm:p-8 flex flex-col min-h-[280px] group hover:bg-accent hover:-translate-y-1 transition-all duration-500"
          >
            <div className="w-10 h-10 bg-accent flex items-center justify-center mb-5 group-hover:bg-black transition-colors duration-300">
              <Zap
                size={18}
                className="text-black group-hover:text-accent transition-colors duration-300"
              />
            </div>
            <div className="mt-auto">
              <div className="text-[56px] sm:text-[64px] font-bold text-primary leading-none mb-1">
                {metricValue}{cards.performance.suffix || "+"}
              </div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary mb-1">
                {cards.performance.label}
              </h3>
              <p className="text-[13px] text-muted leading-relaxed group-hover:text-primary/70">
                {cards.performance.description}
              </p>
            </div>
          </div>

          {/* Row 2 — Photo (1/3) + No template (1/3) + Widgets (1/3) */}
          {cards.image && (
            <div
              data-bento="cell"
              className="relative overflow-hidden min-h-[280px] border border-black/[0.06] group"
            >
              <Image
                src={cards.image.src}
                alt={cards.image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          )}

          <div
            data-bento="cell"
            className="bg-card border border-black/[0.06] p-6 sm:p-8 flex flex-col min-h-[280px] overflow-hidden group hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
          >
            <div className="w-10 h-10 bg-accent flex items-center justify-center mb-5">
              <Ban size={18} className="text-black" />
            </div>
            <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary mb-2">
              {cards.noTemplate.title}
            </h3>
            <p className="text-[13px] text-muted leading-relaxed">
              {cards.noTemplate.description}
            </p>
            <WireframeMockup />
          </div>

          <div
            data-bento="cell"
            className="bg-card border border-black/[0.06] p-6 sm:p-8 flex flex-col min-h-[280px] group hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
          >
            <div className="w-10 h-10 bg-accent flex items-center justify-center mb-5">
              <Blocks size={18} className="text-black" />
            </div>
            <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary mb-2">
              {cards.widgets.title}
            </h3>
            <p className="text-[13px] text-muted leading-relaxed mb-4">
              {cards.widgets.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {cards.widgets.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] sm:text-[12px] font-medium tracking-wide text-primary bg-white border border-black/[0.08] px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Row 3 — Integrations with marquee (1/3) + Growth dark (2/3) */}
          {cards.integrations && (
            <div
              data-bento="cell"
              className="bg-card border border-black/[0.06] p-6 sm:p-8 flex flex-col min-h-[240px] overflow-hidden"
            >
              <div className="w-10 h-10 bg-accent flex items-center justify-center mb-5">
                <Plug size={18} className="text-black" />
              </div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary mb-2">
                {cards.integrations.title}
              </h3>
              <p className="text-[13px] text-muted leading-relaxed">
                {cards.integrations.description}
              </p>
              {cards.integrations.logos && (
                <ToolsMarquee logos={cards.integrations.logos} />
              )}
            </div>
          )}

          {cards.growth && (
            <div
              data-bento="cell"
              className="lg:col-span-2 dark-section grain-overlay p-8 sm:p-10 flex flex-col min-h-[240px] relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              style={{ background: "var(--bg-dark)" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 80% at 70% 30%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
                }}
              />
              <div className="relative z-10 flex flex-col lg:flex-row lg:gap-10 h-full">
                <div className="flex flex-col flex-1">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300 mb-5">
                    <BarChart3
                      size={18}
                      className="text-white group-hover:text-black transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-heading font-medium text-[22px] sm:text-[28px] leading-[1.1] tracking-[-0.02em] text-white mb-3">
                    {cards.growth.title}
                  </h3>
                  <p className="text-[14px] text-white/60 leading-relaxed max-w-lg mb-6">
                    {cards.growth.description}
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-accent hover:text-white transition-colors duration-300 group/cta mt-auto"
                  >
                    Discuter de votre projet
                    <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
                {/* Bar chart UI */}
                <div className="lg:self-end">
                  <GrowthBarChart />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
