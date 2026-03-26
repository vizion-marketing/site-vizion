"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { PilierMetricsContent } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

interface PilierMetricsProps {
  metrics: PilierMetricsContent;
}

function MetricCard({
  value,
  suffix,
  label,
  context,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  context?: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useGSAP(
    () => {
      if (!ref.current) return;

      // CountUp animation
      const counter = { val: 0 };
      gsap.to(counter, {
        val: value,
        duration: 2,
        delay: index * 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
        onUpdate: () => setDisplayValue(Math.round(counter.val)),
      });

      // Label + context fade in
      gsap.from(ref.current.querySelectorAll("[data-metric='label']"), {
        opacity: 0,
        y: 10,
        duration: 0.5,
        delay: index * 0.3 + 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="text-center sm:text-left">
      {/* Value + suffix */}
      <div className="text-[48px] sm:text-[56px] font-bold text-primary leading-none mb-2">
        {displayValue}
        <span className="text-accent">{suffix}</span>
      </div>

      {/* Label */}
      <p data-metric="label" className="text-[15px] font-medium text-primary leading-snug">
        {label}
      </p>

      {/* Context */}
      {context && (
        <p data-metric="label" className="text-[13px] text-secondary leading-relaxed mt-1">
          {context}
        </p>
      )}
    </div>
  );
}

export function PilierMetrics({ metrics }: PilierMetricsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-metrics='header']", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  if (!metrics || metrics.metrics.length === 0) return null;

  const count = metrics.metrics.length;

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <div data-metrics="header" className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              {metrics.surtitre}
            </span>
          </div>
          <h2 className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[40px] leading-[1.05] tracking-[-0.035em] text-primary mb-4">
            {metrics.title}
          </h2>
          {metrics.subtitle && (
            <p className="text-secondary text-base sm:text-[17px] leading-relaxed">
              {metrics.subtitle}
            </p>
          )}
        </div>

        {/* Metrics grid with separators */}
        <div
          className={`grid grid-cols-2 gap-8 sm:gap-10 ${
            count >= 4 ? "lg:grid-cols-4" : count === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
          }`}
        >
          {metrics.metrics.map((metric, i) => (
            <div key={i} className="relative">
              {/* Vertical separator — desktop only, not on first item */}
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(50%+1rem)] h-16 w-px bg-black/[0.08]" />
              )}
              <MetricCard
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                context={metric.context}
                index={i}
              />
            </div>
          ))}
        </div>

        {/* Source attribution */}
        {metrics.source && (
          <p className="text-[12px] text-muted italic mt-10 text-center sm:text-left">
            {metrics.source}
          </p>
        )}
      </div>
    </section>
  );
}
