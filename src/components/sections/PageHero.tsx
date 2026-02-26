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

const breadcrumbContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const breadcrumbItem = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

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
      className={`pt-28 sm:pt-32 md:pt-36 lg:pt-44 pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay dark-section" : "grain-light"}`}
      style={{ background: isDark ? "var(--bg-dark)" : "var(--bg-card)" }}
    >
      {/* Enhanced ambient glows with more layers */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute w-[80%] h-[70%] top-[0%] left-[-20%] animate-gradient-float-1"
            style={{
              background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.14) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[60%] h-[50%] top-[-10%] right-[-5%] animate-gradient-float-2"
            style={{
              background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[50%] h-[60%] bottom-[-15%] right-[-10%] animate-gradient-float-3"
            style={{
              background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.1) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[40%] h-[40%] bottom-[10%] left-[20%] animate-gradient-float-4"
            style={{
              background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.05) 0%, transparent 55%)",
            }}
          />
        </div>
      )}
      {!isDark && (
        <>
          <div className="absolute top-[20%] right-[5%] w-[600px] h-[600px] bg-accent opacity-[0.05] rounded-full blur-[200px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-accent opacity-[0.03] rounded-full blur-[150px] pointer-events-none" />
        </>
      )}

      {/* Decorative corner accents - visible on large screens */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-accent/20 pointer-events-none hidden lg:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-accent/20 pointer-events-none hidden lg:block" />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Breadcrumbs - staggered */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            variants={breadcrumbContainer}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 mb-8 sm:mb-10"
            aria-label="Fil d'Ariane"
          >
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <motion.span variants={breadcrumbItem} className="text-xs text-muted/50">/</motion.span>
                )}
                <motion.span variants={breadcrumbItem}>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="text-xs font-[var(--font-body)] text-muted hover:text-primary transition-colors duration-300"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-xs font-[var(--font-body)] text-primary">
                      {crumb.label}
                    </span>
                  )}
                </motion.span>
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Surtitre - animated dot with glow + text fade */}
        {surtitre && (
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.05 }}
              className="relative flex h-2 w-2"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent)]/80 to-[var(--color-accent)]/60 shadow-[0_0_8px_rgba(var(--color-accent-rgb),0.5)]" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase text-muted"
            >
              {surtitre}
            </motion.span>
          </div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`font-heading font-normal text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] max-w-4xl mb-6 sm:mb-8 ${isDark ? "" : "text-primary"}`}
          style={isDark ? {
            backgroundImage: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.90) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          } : undefined}
        >
          {title}{" "}
          {titleHighlight && (
            <motion.span
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-accent relative inline-block"
              style={isDark ? { backgroundImage: "none", WebkitBackgroundClip: "unset", backgroundClip: "unset", color: "var(--color-accent)" } : undefined}
            >
              <span className="relative z-10">{titleHighlight}</span>
              {/* Animated glow behind highlight */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute inset-0 bg-accent -z-0"
                style={{ filter: 'blur(16px)' }}
              />
              {/* Animated underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute bottom-1 left-0 w-full h-[3px] bg-accent/40 -z-0 origin-left"
              />
            </motion.span>
          )}
        </motion.h1>

        {/* Description - improved contrast */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`text-base sm:text-lg md:text-xl font-[var(--font-body)] leading-relaxed max-w-2xl mb-8 sm:mb-10 ${isDark ? "" : "text-secondary"}`}
            style={isDark ? { color: "rgba(255,255,255,0.85)" } : undefined}
          >
            {description}
          </motion.p>
        )}

        {/* CTAs with enhanced hover effects */}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className={`btn ${isDark ? "btn-primary" : "btn-dark"} group relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(var(--color-accent-rgb),0.15)]`}
              >
                {/* Animated gradient overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/0 via-[var(--color-accent)]/15 to-[var(--color-accent)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" style={{ transition: "opacity 0.5s, transform 0.8s ease-out" }} />
                <span className="relative z-10 flex items-center gap-2">
                  {primaryCta.text}
                  <span className="shrink-0 inline-flex transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRightIcon size={16} />
                  </span>
                </span>
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="btn btn-secondary group relative overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                {/* Subtle glow on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  {secondaryCta.text}
                  <span className="shrink-0 inline-flex transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRightIcon size={16} />
                  </span>
                </span>
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
