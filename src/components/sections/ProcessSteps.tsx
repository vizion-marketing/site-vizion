"use client";

import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  id: string;
  icon?: LucideIcon;
  number?: string;
  title: string;
  description: string;
  bullets?: string[];
}

export interface ProcessStepsProps {
  surtitre?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  steps: ProcessStep[];
  /** Layout: zigzag alternates left/right, linear stacks vertically */
  layout?: "zigzag" | "linear";
  variant?: "light" | "dark";
}

export function ProcessSteps({
  surtitre,
  title,
  titleHighlight,
  description,
  steps,
  layout = "zigzag",
  variant = "light",
}: ProcessStepsProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay" : ""}`}
      style={{ background: isDark ? "#0c0c0a" : "#ffffff" }}
    >
      {isDark && (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-gradient-float-1 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)" }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] animate-gradient-float-2 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)" }} />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] animate-gradient-float-3 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)" }} />
        </>
      )}
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        {(surtitre || title) && (
          <div className="text-center mb-12 sm:mb-16">
            {surtitre && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2.5 mb-4 sm:mb-5"
              >
                <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
                <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                  {surtitre}
                </span>
              </motion.div>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] mb-3 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
              >
                {title}{" "}
                {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
              </motion.h2>
            )}
            {description && (
              <p className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed max-w-xl mx-auto ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Steps */}
        {layout === "zigzag" ? (
          <div className="relative">
            {/* Central connecting line (desktop only) */}
            <div className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 ${isDark ? "bg-white/10" : "bg-black/10"}`} />

            <div className="space-y-8 md:space-y-0">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const Icon = step.icon;
                const num = step.number || String(index + 1).padStart(2, "0");

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="md:grid md:grid-cols-2 md:gap-12 relative md:py-10"
                  >
                    {/* Center node */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#D4FD00]">
                        {Icon ? (
                          <Icon size={20} className="text-[#1a1a1a]" />
                        ) : (
                          <span className="font-[var(--font-body)] font-bold text-[14px] text-[#1a1a1a]">{num}</span>
                        )}
                      </div>
                    </div>

                    {/* Left content (or right on odd) */}
                    <div className={`${isLeft ? "" : "md:order-2"}`}>
                      <div className={`p-6 sm:p-8 border transition-colors ${isDark ? "border-white/10 bg-white/[0.02]" : "border-black/[0.06] bg-white"} ${isLeft ? "md:text-right" : ""}`}>
                        {/* Mobile number */}
                        <div className="md:hidden flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 flex items-center justify-center bg-[#D4FD00]">
                            {Icon ? (
                              <Icon size={16} className="text-[#1a1a1a]" />
                            ) : (
                              <span className="font-[var(--font-body)] font-bold text-[12px] text-[#1a1a1a]">{num}</span>
                            )}
                          </div>
                        </div>

                        <h3 className={`font-heading font-medium text-[18px] sm:text-[20px] mb-2 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
                          {step.title}
                        </h3>
                        <p className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
                          {step.description}
                        </p>
                        {step.bullets && step.bullets.length > 0 && (
                          <ul className={`mt-3 space-y-1.5 ${isLeft ? "md:flex md:flex-col md:items-end" : ""}`}>
                            {step.bullets.map((b, bi) => (
                              <li key={bi} className={`flex items-center gap-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4FD00] shrink-0" />
                                <span className={`text-[13px] font-[var(--font-body)] ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Empty placeholder for the other side */}
                    <div className={`hidden md:block ${isLeft ? "md:order-2" : ""}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Linear layout */
          <div className="max-w-[48rem] mx-auto relative">
            {/* Vertical line */}
            <div className={`absolute left-5 sm:left-6 top-0 bottom-0 w-[2px] ${isDark ? "bg-white/10" : "bg-black/10"}`} />

            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const num = step.number || String(index + 1).padStart(2, "0");

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex gap-5 sm:gap-7 relative"
                  >
                    {/* Node */}
                    <div className="relative z-10 shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#D4FD00]">
                        {Icon ? (
                          <Icon size={18} className="text-[#1a1a1a]" />
                        ) : (
                          <span className="font-[var(--font-body)] font-bold text-[13px] text-[#1a1a1a]">{num}</span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 pb-6 sm:pb-8 border-b ${isDark ? "border-white/5" : "border-black/[0.06]"} ${index === steps.length - 1 ? "border-b-0" : ""}`}>
                      <h3 className={`font-heading font-medium text-[16px] sm:text-[18px] mb-1.5 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
                        {step.title}
                      </h3>
                      <p className={`text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
                        {step.description}
                      </p>
                      {step.bullets && step.bullets.length > 0 && (
                        <ul className="mt-2.5 space-y-1.5">
                          {step.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#D4FD00] shrink-0" />
                              <span className={`text-[13px] font-[var(--font-body)] ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
