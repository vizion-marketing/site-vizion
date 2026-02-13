"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import type { LucideIcon } from "lucide-react";

export interface FeatureCard {
  icon?: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  image?: string;
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
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 mb-4 sm:mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FD00] opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[#D4FD00] via-[#D4FD00]/80 to-[#D4FD00]/60 shadow-[0_0_8px_rgba(212,253,0,0.5)]" />
              </span>
              <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}>
                {surtitre}
              </span>
            </motion.div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] mb-4 sm:mb-5 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
          >
            {title}{" "}
            {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-[14px] sm:text-[15px] leading-relaxed max-w-xl ${isDark ? "text-white/75" : "text-[#52525B]"}`}
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Grid */}
        <div className={`grid grid-cols-1 ${colClass} gap-4 sm:gap-5 lg:gap-6`}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
                className="group"
              >
                <div className={`relative h-full min-h-[220px] lg:min-h-[240px] border overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(212,253,0,0.2)] flex flex-col p-6 sm:p-7 lg:p-8 ${isDark ? "bg-white/[0.03] border-white/10 group-hover:border-[#D4FD00]/30" : "bg-white border-black/10 group-hover:border-[#D4FD00]/40"}`}>
                  {/* Lime fill from bottom */}
                  <div className="absolute inset-0 bg-[#D4FD00] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />
                  {/* Accent line bottom with glow */}
                  <div className={`absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-[1] ${isDark ? "bg-white/30 shadow-[0_0_12px_rgba(255,255,255,0.3)]" : "bg-[#1a1a1a] shadow-[0_0_12px_rgba(26,26,26,0.4)]"}`} />

                  {/* Background image with improved opacity */}
                  {feature.image && (
                    <div className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.25] transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                      <Image src={feature.image} alt={feature.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    </div>
                  )}

                  {/* Icon with enhanced animation */}
                  {Icon && (
                    <div className="mb-5 relative z-10">
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110 group-hover:rotate-3 ${isDark ? "bg-white/5 group-hover:bg-white/15 group-hover:shadow-[0_0_20px_rgba(212,253,0,0.3)]" : "bg-[#f5f5f5] group-hover:bg-[#1a1a1a] group-hover:shadow-[0_0_20px_rgba(212,253,0,0.25)]"}`}>
                        <Icon size={24} className={`transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isDark ? "text-[#D4FD00] group-hover:text-[#D4FD00] group-hover:drop-shadow-[0_0_8px_rgba(212,253,0,0.6)]" : "text-[#1a1a1a] group-hover:text-[#D4FD00] group-hover:drop-shadow-[0_0_8px_rgba(212,253,0,0.5)]"}`} />
                      </div>
                    </div>
                  )}

                  {/* Title with improved contrast on hover */}
                  <h3 className={`font-heading font-medium text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.1] tracking-[-0.02em] mb-3 transition-colors duration-700 relative z-10 ${isDark ? "text-white group-hover:text-[#1a1a1a]" : "text-[#1a1a1a] group-hover:text-[#1a1a1a]"}`}>
                    {feature.title}
                  </h3>

                  {/* Description with enhanced contrast */}
                  <p className={`text-[13px] lg:text-[14px] leading-relaxed mb-5 transition-colors duration-700 relative z-10 ${isDark ? "text-white/75 group-hover:text-[#1a1a1a]/90" : "text-[#52525B] group-hover:text-[#1a1a1a]/90"}`}>
                    {feature.description}
                  </p>

                  <div className="flex-grow relative z-10" />

                  {/* Tags with improved visibility */}
                  {feature.tags && feature.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
                      {feature.tags.map((tag) => (
                        <span key={tag} className={`px-2.5 py-1 text-[10px] lg:text-[11px] font-medium transition-all duration-700 border border-transparent ${isDark ? "bg-white/5 text-white/70 group-hover:bg-[#1a1a1a]/10 group-hover:text-[#1a1a1a] group-hover:border-[#1a1a1a]/30" : "bg-[#f5f5f5] text-[#1a1a1a] group-hover:bg-[#1a1a1a]/10 group-hover:text-[#1a1a1a] group-hover:border-[#1a1a1a]/30"}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  {feature.href && (
                    <div className={`pt-4 border-t transition-colors duration-500 relative z-10 ${isDark ? "border-white/10 group-hover:border-white/20" : "border-black/10 group-hover:border-[#1a1a1a]/20"}`}>
                      <Link
                        href={feature.href}
                        className={`inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] font-semibold group/btn transition-colors ${isDark ? "text-white group-hover:text-white" : "text-[#1a1a1a]"}`}
                      >
                        <span className={`border-b border-transparent transition-colors duration-300 ${isDark ? "group-hover/btn:border-white" : "group-hover/btn:border-[#1a1a1a]"}`}>
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
