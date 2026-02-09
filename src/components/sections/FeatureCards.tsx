"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { LucideIcon } from "lucide-react";

export interface FeatureCard {
  icon?: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  href?: string;
}

export interface FeatureCardsProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  features: FeatureCard[];
  columns?: 2 | 3 | 4;
  variant?: "white" | "light" | "dark";
}

export function FeatureCards({
  surtitre,
  title,
  titleHighlight,
  description,
  features,
  columns = 3,
  variant = "white",
}: FeatureCardsProps) {
  const isDark = variant === "dark";
  const bg = isDark ? "#0c0c0a" : variant === "light" ? "#f8f8f6" : "#ffffff";
  const colClass = columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay" : "grain-light"}`}
      style={{ background: bg }}
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
        <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
          {surtitre && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-3 sm:mb-5"
            >
              <div className="w-2 h-2 bg-[#D4FD00]" />
              <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                {surtitre}
              </span>
            </motion.div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] mb-3 sm:mb-4 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
          >
            {title}{" "}
            {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
          </motion.h2>

          {description && (
            <p className={`text-[13px] sm:text-[15px] leading-relaxed max-w-xl ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
              {description}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className={`grid grid-cols-1 ${colClass} gap-4 sm:gap-5 lg:gap-6`}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
                className="group"
              >
                <div className={`relative h-full min-h-[220px] lg:min-h-[240px] border overflow-hidden transition-all duration-500 hover:bg-[#D4FD00] hover:-translate-y-1 flex flex-col p-6 sm:p-7 lg:p-8 ${isDark ? "bg-white/[0.03] border-white/10" : "bg-white border-black/10"}`}>
                  {/* Accent line bottom */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#1a1a1a] group-hover:w-full transition-all duration-500" />

                  {/* Icon */}
                  {Icon && (
                    <div className="mb-5">
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 group-hover:bg-[#1a1a1a] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${isDark ? "bg-white/5" : "bg-[#f5f5f5]"}`}>
                        <Icon size={24} className={`group-hover:text-[#D4FD00] transition-colors duration-500 ${isDark ? "text-[#D4FD00]" : "text-[#1a1a1a]"}`} />
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className={`font-heading font-medium text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.1] tracking-[-0.02em] mb-3 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className={`group-hover:text-[#1a1a1a]/80 text-[13px] lg:text-[14px] leading-relaxed mb-5 transition-colors duration-500 ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                    {feature.description}
                  </p>

                  <div className="flex-grow" />

                  {/* Tags */}
                  {feature.tags && feature.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {feature.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-[#f5f5f5] group-hover:bg-[#1a1a1a]/10 text-[#1a1a1a] text-[10px] lg:text-[11px] font-medium transition-colors duration-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  {feature.href && (
                    <div className="pt-4 border-t border-black/10 group-hover:border-[#1a1a1a]/20 transition-colors duration-500">
                      <Link
                        href={feature.href}
                        className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] font-semibold text-[#1a1a1a] group/btn"
                      >
                        <span className="border-b border-transparent group-hover/btn:border-[#1a1a1a] transition-colors duration-300">
                          En savoir plus
                        </span>
                        <ArrowUpRightIcon className="shrink-0 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
