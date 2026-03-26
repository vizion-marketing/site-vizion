"use client";

import { useRef } from "react";
import {
  Search,
  MessageSquareText,
  Layout,
  Palette,
  Code,
  Rocket,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { resolveIcon } from "@/lib/icon-resolver";

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  icon?: string;
  title: string;
  description: string;
  duration?: string;
  deliverables?: string[];
}

interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

const FALLBACK_ICONS: LucideIcon[] = [
  Search,
  MessageSquareText,
  Layout,
  Palette,
  Code,
  Rocket,
];

function StepRow({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  const Icon = step.icon
    ? resolveIcon(step.icon)
    : FALLBACK_ICONS[index % FALLBACK_ICONS.length];

  return (
    <div
      data-process="row"
      className="border-t border-black/[0.08] hover:bg-white/80 transition-colors duration-300 group"
    >
      {/* Desktop — 4 colonnes */}
      <div className="hidden md:grid md:grid-cols-[80px_40px_1fr_1.2fr] gap-6 lg:gap-8 py-7 lg:py-8 items-baseline">
        <span className="text-[28px] lg:text-[32px] font-extralight text-primary/30 leading-none tabular-nums group-hover:text-accent transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}.
        </span>
        <div className="w-10 h-10 bg-accent flex items-center justify-center shrink-0 relative top-0.5 group-hover:scale-110 transition-transform duration-300">
          <Icon size={18} className="text-black" />
        </div>
        <div>
          <h3 className="text-[17px] lg:text-[19px] font-semibold text-primary leading-snug">
            {step.title}
          </h3>
          {step.duration && (
            <span className="inline-flex items-center gap-1.5 text-[12px] text-muted mt-2">
              <Clock size={12} />
              {step.duration}
            </span>
          )}
        </div>
        <div>
          <p className="text-[14px] text-secondary leading-relaxed">
            {step.description}
          </p>
          {step.deliverables && step.deliverables.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {step.deliverables.map((d, j) => (
                <span
                  key={j}
                  className="text-[11px] bg-card border border-black/[0.06] px-2 py-0.5 text-muted"
                >
                  {d}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile — empilé */}
      <div className="md:hidden py-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[24px] font-extralight text-primary/30 leading-none tabular-nums group-hover:text-accent transition-colors duration-300">
            {String(index + 1).padStart(2, "0")}.
          </span>
          <div className="w-9 h-9 bg-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Icon size={16} className="text-black" />
          </div>
        </div>
        <h3 className="text-[16px] font-semibold text-primary leading-snug mb-2">
          {step.title}
        </h3>
        {step.duration && (
          <span className="inline-flex items-center gap-1.5 text-[12px] text-muted mb-2">
            <Clock size={12} />
            {step.duration}
          </span>
        )}
        <p className="text-[13px] text-secondary leading-relaxed">
          {step.description}
        </p>
        {step.deliverables && step.deliverables.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {step.deliverables.map((d, j) => (
              <span
                key={j}
                className="text-[11px] bg-white border border-black/[0.06] px-2 py-0.5 text-muted"
              >
                {d}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function ProcessTimeline({
  title,
  subtitle,
  steps,
}: ProcessTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Title + surtitre
      gsap.from("[data-process='header']", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Subtitle
      gsap.from("[data-process='subtitle']", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Step rows — stagger
      gsap.fromTo(
        "[data-process='row']",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-process='rows']",
            start: "top 85%",
          },
        },
      );

      // Progress bar — scroll-linked
      gsap.fromTo(
        "[data-process='progress']",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: "[data-process='rows']",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  if (!steps || steps.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="processus"
      className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Section label + title */}
        <div className="mb-10 sm:mb-14">
          <div data-process="header">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Notre méthode
              </span>
            </div>
            {title && (
              <h2 className="font-heading font-medium text-[28px] min-[400px]:text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary max-w-3xl">
                {title}
              </h2>
            )}
          </div>
          {subtitle && (
            <p
              data-process="subtitle"
              className="text-[15px] text-secondary leading-relaxed mt-4 max-w-2xl"
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Rows with accent progress bar */}
        <div data-process="rows" className="relative">
          {/* Accent progress bar */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-black/[0.04] hidden lg:block">
            <div
              data-process="progress"
              className="w-full bg-accent origin-top"
            />
          </div>

          <div className="lg:pl-6">
            {steps.map((step, i) => (
              <StepRow key={i} step={step} index={i} />
            ))}
            <div className="border-t border-black/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}
