"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Check } from "lucide-react";
import type { ProcessStep } from "../../../sanity/lib/types";

interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

function StepCard({
  step,
  index,
  total,
}: {
  step: ProcessStep;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className={`relative ${index < total - 1 ? "pb-8 md:pb-12" : ""}`}
    >
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-[56px_1fr] gap-6">
        {/* Left — number + line */}
        <div className="relative flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0.1 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className={`text-4xl sm:text-5xl font-extralight transition-colors duration-500 ${
              isInView ? "text-accent/40" : "text-black/10"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
          {/* Vertical line */}
          {index < total - 1 && (
            <div className="absolute top-16 bottom-0 left-1/2 -translate-x-1/2 w-px bg-black/[0.08]">
              {/* Dot accent */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3, type: "spring" }}
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full"
              />
            </div>
          )}
        </div>

        {/* Right — content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="w-full h-px bg-black/[0.06] mb-4" />
          <h3 className="text-xl font-medium text-primary mb-2">
            {step.title}
          </h3>
          <p className="text-sm text-secondary leading-relaxed mb-3">
            {step.description}
          </p>
          {step.duration && (
            <div className="flex items-center gap-1.5 mb-3">
              <Clock className="w-3.5 h-3.5 text-secondary" />
              <span className="text-xs text-secondary">{step.duration}</span>
            </div>
          )}
          {step.deliverables && step.deliverables.length > 0 && (
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {step.deliverables.map((d, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs text-secondary"
                >
                  <Check className="w-3.5 h-3.5 text-accent" />
                  {d}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Mobile layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`md:hidden ${
          index < total - 1
            ? "border-b border-black/[0.06] pb-8 mb-8"
            : ""
        }`}
      >
        <span className="text-3xl font-extralight text-accent/40 mb-2 block">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-lg font-medium text-primary mb-2">{step.title}</h3>
        <p className="text-sm text-secondary leading-relaxed mb-3">
          {step.description}
        </p>
        {step.duration && (
          <div className="flex items-center gap-1.5 mb-3">
            <Clock className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs text-secondary">{step.duration}</span>
          </div>
        )}
        {step.deliverables && step.deliverables.length > 0 && (
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {step.deliverables.map((d, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-xs text-secondary"
              >
                <Check className="w-3.5 h-3.5 text-accent" />
                {d}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function ProcessTimeline({
  title,
  subtitle,
  steps,
}: ProcessTimelineProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section
      id="processus"
      className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              Notre méthode
            </span>
          </div>
          {title && (
            <h2 className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base text-secondary leading-relaxed mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Timeline */}
        <div className="max-w-[52rem] mx-auto">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
