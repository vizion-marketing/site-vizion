"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export interface PageHeroBreadcrumb {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  breadcrumbs?: PageHeroBreadcrumb[];
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  variant?: "dark" | "light";
}

export function PageHero({
  surtitre,
  title,
  titleHighlight,
  description,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  variant = "dark",
}: PageHeroProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`pt-28 sm:pt-32 md:pt-36 lg:pt-44 pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay" : "grain-light"}`}
      style={{ background: isDark ? "#0c0c0a" : "#f8f8f6" }}
    >
      {/* Ambient glows */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute w-[70%] h-[60%] top-[5%] left-[-15%] animate-gradient-float-1"
            style={{
              background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.1) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[50%] h-[50%] bottom-[-10%] right-[-10%] animate-gradient-float-3"
            style={{
              background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
            }}
          />
        </div>
      )}
      {!isDark && (
        <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-[#D4FD00] opacity-[0.04] rounded-full blur-[200px] pointer-events-none" />
      )}

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-8 sm:mb-10"
            aria-label="Fil d'Ariane"
          >
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <span className={`text-xs ${isDark ? "text-white/30" : "text-[#6b6b6b]/50"}`}>/</span>
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className={`text-xs font-[var(--font-body)] ${isDark ? "text-white/50 hover:text-white/80" : "text-[#6b6b6b] hover:text-[#1a1a1a]"} transition-colors`}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={`text-xs font-[var(--font-body)] ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Surtitre */}
        {surtitre && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 mb-5 sm:mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
            <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
              {surtitre}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-heading font-normal text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] max-w-4xl mb-5 sm:mb-6 ${isDark ? "" : "text-[#1a1a1a]"}`}
          style={isDark ? {
            backgroundImage: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.88) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          } : undefined}
        >
          {title}{" "}
          {titleHighlight && (
            <span className="text-[#D4FD00]" style={isDark ? { backgroundImage: "none", WebkitBackgroundClip: "unset", backgroundClip: "unset", color: "#D4FD00" } : undefined}>
              {titleHighlight}
            </span>
          )}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-base sm:text-lg md:text-xl font-[var(--font-body)] leading-relaxed max-w-2xl mb-8 sm:mb-10 ${isDark ? "text-white/70" : "text-[#6b6b6b]"}`}
          >
            {description}
          </motion.p>
        )}

        {/* CTAs */}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            {primaryCta && (
              <Link href={primaryCta.href} className={`btn ${isDark ? "btn-primary" : "btn-dark"} group`}>
                {primaryCta.text}
                <ArrowUpRightIcon className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} />
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn btn-secondary group">
                {secondaryCta.text}
                <ArrowUpRightIcon className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} />
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
