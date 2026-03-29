"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { PilierMethodology as PilierMethodologyType } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

interface PilierMethodologyProps {
  methodology: PilierMethodologyType;
}

export function PilierMethodology({ methodology }: PilierMethodologyProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header
      gsap.from("[data-method='header']", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Cards stagger
      gsap.fromTo(
        "[data-method='card']",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-method='grid']",
            start: "top 85%",
          },
        },
      );

      // Accent bars - scaleX reveal
      gsap.fromTo(
        "[data-method='bar']",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.4,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-method='grid']",
            start: "top 85%",
          },
        },
      );

      // Connecting line
      gsap.fromTo(
        "[data-method='line']",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "[data-method='grid']",
            start: "top 85%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  if (!methodology || methodology.steps.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <div data-method="header" className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              {methodology.surtitre}
            </span>
          </div>
          <h2 className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[40px] leading-[1.05] tracking-[-0.035em] text-primary mb-4">
            {methodology.title}
          </h2>
          <p className="text-secondary text-base sm:text-[17px] leading-relaxed">
            {methodology.subtitle}
          </p>
        </div>

        {/* Grid 2x2 with connecting line */}
        <div data-method="grid" className="relative">
          {/* Connecting line - desktop only */}
          <div
            data-method="line"
            className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-accent/20 -translate-y-1/2 origin-center pointer-events-none z-0"
          />

          <div className="grid sm:grid-cols-2 gap-6 relative z-10">
            {methodology.steps.map((step, i) => (
              <div
                key={i}
                data-method="card"
                className="bg-card border border-black/[0.06] p-6 sm:p-8 hover:border-black/[0.12] hover:shadow-lg transition-all duration-300 group"
              >
                {/* Number */}
                <span className="text-[48px] font-extralight text-primary/15 leading-none block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Accent bar */}
                <div
                  data-method="bar"
                  className="w-8 h-1 bg-accent mb-5 origin-left"
                />

                {/* Title */}
                <h3 className="font-heading font-medium text-[17px] text-primary leading-tight mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-secondary text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
