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
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const breadcrumbItem = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
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
                  <motion.span variants={breadcrumbItem} className={`text-xs ${isDark ? "text-white/30" : "text-[#6b6b6b]/50"}`}>/</motion.span>
                )}
                <motion.span variants={breadcrumbItem}>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className={`text-xs font-[var(--font-body)] ${isDark ? "text-white/50 hover:text-white/90" : "text-[#6b6b6b] hover:text-[#1a1a1a]"} transition-colors duration-300`}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={`text-xs font-[var(--font-body)] ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}>
                      {crumb.label}
                    </span>
                  )}
                </motion.span>
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Surtitre - dot spring + text fade */}
        {surtitre && (
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.05 }}
              className="w-2 h-2 rounded-full bg-[#D4FD00]"
            />
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}
            >
              {surtitre}
            </motion.span>
          </div>
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
            <span
              className="text-[#D4FD00] relative inline-block"
              style={isDark ? { backgroundImage: "none", WebkitBackgroundClip: "unset", backgroundClip: "unset", color: "#D4FD00" } : undefined}
            >
              <span className="relative z-10">{titleHighlight}</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute inset-0 bg-[#D4FD00] -z-0"
                style={{ filter: 'blur(12px)' }}
              />
            </span>
          )}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-base sm:text-lg md:text-xl font-[var(--font-body)] leading-relaxed max-w-2xl mb-8 sm:mb-10 ${isDark ? "!text-white/70" : "text-[#6b6b6b]"}`}
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
              <Link href={primaryCta.href} className={`btn ${isDark ? "btn-primary" : "btn-dark"} group relative overflow-hidden`}>
                <span className="absolute inset-0 bg-gradient-to-r from-[#D4FD00]/0 via-[#D4FD00]/10 to-[#D4FD00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  {primaryCta.text}
                  <motion.span
                    className="shrink-0 inline-flex"
                    whileHover={{ x: 2, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowUpRightIcon size={16} />
                  </motion.span>
                </span>
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn btn-secondary group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-[#D4FD00]/0 via-[#D4FD00]/5 to-[#D4FD00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  {secondaryCta.text}
                  <motion.span
                    className="shrink-0 inline-flex"
                    whileHover={{ x: 2, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowUpRightIcon size={16} />
                  </motion.span>
                </span>
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
