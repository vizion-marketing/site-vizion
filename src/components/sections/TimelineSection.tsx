"use client";

import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface TimelineStep {
  number?: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface TimelineSectionProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  steps: TimelineStep[];
  variant?: "dark" | "light";
}

export function TimelineSection({
  surtitre,
  title,
  titleHighlight,
  description,
  steps,
  variant = "light",
}: TimelineSectionProps) {
  const isDark = variant === "dark";
  const bg = isDark ? "#0c0c0a" : "#f8f8f6";

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay dark-section" : "grain-light"}`}
      style={{ background: bg }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] bg-[#D4FD00] opacity-[0.04] rounded-full blur-[180px] pointer-events-none"
      />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FD00] opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[#D4FD00] via-[#D4FD00]/80 to-[#D4FD00]/60 shadow-[0_0_8px_rgba(212,253,0,0.5)]" />
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

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary`}
          >
            {title}{" "}
            {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`mt-4 text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed text-muted`}
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-5 sm:left-6 top-0 bottom-0 w-px ${isDark ? "bg-white/10" : "bg-black/10"} hidden sm:block`} />

          <div className="space-y-8 sm:space-y-10">
            {steps.map((step, index) => {
              const stepNumber = step.number || String(index + 1).padStart(2, "0");
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-5 sm:gap-8"
                >
                  {/* Number / Icon circle */}
                  <div className="relative z-10 shrink-0">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${isDark ? "bg-[#D4FD00]/10 border border-[#D4FD00]/20" : "bg-[#D4FD00] border border-[#D4FD00]"} transition-colors`}>
                      {Icon ? (
                        <Icon size={18} className={isDark ? "text-[#D4FD00]" : "text-primary"} />
                      ) : (
                        <span className={`font-heading font-bold text-sm ${isDark ? "text-[#D4FD00]" : "text-primary"}`}>
                          {stepNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`pb-8 sm:pb-10 ${index < steps.length - 1 ? `border-b ${isDark ? "border-white/5" : "border-black/5"}` : ""} flex-1`}>
                    <h3 className={`font-heading font-medium text-lg sm:text-xl md:text-2xl leading-snug mb-2 sm:mb-3 text-primary`}>
                      {step.title}
                    </h3>
                    <p className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed max-w-xl text-muted`}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
