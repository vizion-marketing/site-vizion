"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export interface HeroMinimalProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  /** Breadcrumbs for SEO */
  breadcrumbs?: { label: string; href?: string }[];
  /** Optional metadata (date, category, read time) */
  meta?: string[];
  primaryCta?: { text: string; href: string };
  variant?: "dark" | "light" | "white";
}

export function HeroMinimal({
  surtitre,
  title,
  titleHighlight,
  description,
  breadcrumbs,
  meta,
  primaryCta,
  variant = "white",
}: HeroMinimalProps) {
  const isDark = variant === "dark";
  const bg = variant === "dark" ? "#0c0c0a" : variant === "light" ? "#f8f8f6" : "#ffffff";

  return (
    <section
      className={`pt-28 sm:pt-32 md:pt-36 lg:pt-44 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay" : ""}`}
      style={{ background: bg }}
    >
      <div className="max-w-[820px] mx-auto relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="flex items-center gap-2 mb-6 sm:mb-8" aria-label="Fil d'Ariane">
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className={`text-xs ${isDark ? "text-white/30" : "text-[#6b6b6b]/50"}`}>/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className={`text-xs font-[var(--font-body)] ${isDark ? "text-white/50 hover:text-white/90" : "text-[#6b6b6b] hover:text-[#1a1a1a]"} transition-colors`}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={`text-xs font-[var(--font-body)] ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Surtitre */}
        {surtitre && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
            <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>{surtitre}</span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-heading font-normal text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[1] tracking-[-0.03em] mb-5 sm:mb-6 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
        >
          {title}{" "}
          {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-[16px] sm:text-[18px] font-[var(--font-body)] leading-relaxed mb-6 sm:mb-8 ${isDark ? "text-white/65" : "text-[#4a4a4a]"}`}
          >
            {description}
          </motion.p>
        )}

        {/* Meta tags */}
        {meta && meta.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
            {meta.map((m, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className={`w-1 h-1 rounded-full ${isDark ? "bg-white/20" : "bg-black/15"}`} />}
                <span className={`text-[12px] sm:text-[13px] font-[var(--font-body)] ${isDark ? "text-white/40" : "text-[#999]"}`}>{m}</span>
              </React.Fragment>
            ))}
          </motion.div>
        )}

        {/* CTA */}
        {primaryCta && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Link href={primaryCta.href} className={`btn ${isDark ? "btn-primary" : "btn-dark"}`}>{primaryCta.text}</Link>
          </motion.div>
        )}

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ transformOrigin: "left" }}
          className={`h-px mt-10 sm:mt-12 ${isDark ? "bg-white/10" : "bg-black/[0.08]"}`}
        />
      </div>
    </section>
  );
}
