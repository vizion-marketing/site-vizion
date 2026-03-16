"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  MessageSquareText,
  Layout,
  Palette,
  Code,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProcessStep {
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

const STEP_ICONS: LucideIcon[] = [
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = STEP_ICONS[index % STEP_ICONS.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-t border-black/[0.08]"
    >
      {/* Desktop — 4 colonnes */}
      <div className="hidden md:grid md:grid-cols-[80px_40px_1fr_1.2fr] gap-6 lg:gap-8 py-7 lg:py-8 items-baseline">
        <span className="text-[28px] lg:text-[32px] font-extralight text-primary/30 leading-none tabular-nums">
          {String(index + 1).padStart(2, "0")}.
        </span>
        <Icon size={20} className="text-accent relative top-0.5" />
        <h3 className="text-[17px] lg:text-[19px] font-semibold text-primary leading-snug">
          {step.title}
        </h3>
        <p className="text-[14px] text-secondary leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Mobile — empilé */}
      <div className="md:hidden py-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[24px] font-extralight text-primary/30 leading-none tabular-nums">
            {String(index + 1).padStart(2, "0")}.
          </span>
          <Icon size={18} className="text-accent" />
        </div>
        <h3 className="text-[16px] font-semibold text-primary leading-snug mb-2">
          {step.title}
        </h3>
        <p className="text-[13px] text-secondary leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
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
        {/* Section label + title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              Notre méthode
            </span>
          </div>
          {title && (
            <h2 className="font-heading font-medium text-[24px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary max-w-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-[15px] text-secondary leading-relaxed mt-4 max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Rows */}
        <div>
          {steps.map((step, i) => (
            <StepRow key={i} step={step} index={i} />
          ))}
          <div className="border-t border-black/[0.08]" />
        </div>
      </div>
    </section>
  );
}
