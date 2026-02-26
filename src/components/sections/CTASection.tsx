"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { LucideIcon } from "lucide-react";

export interface CTATrustElement {
  icon: LucideIcon;
  text: string;
}

export interface CTASectionProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  trustElements?: CTATrustElement[];
  children?: React.ReactNode;
}

const trustContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const trustItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function CTASection({
  badge,
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  trustElements,
  children,
}: CTASectionProps) {
  return (
    <section
      className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-overlay dark-section"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Animated radial gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[50%] h-[50%] bottom-[5%] right-[-15%] animate-gradient-float-4"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.05) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="max-w-[60rem] mx-auto relative z-10 text-center">
        {/* Trust badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6 sm:mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-accent"
                animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent)]/90 to-[var(--color-accent)]/60 shadow-[0_0_12px_rgba(var(--color-accent-rgb),0.7)]" />
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.08em] uppercase text-white/90">
              {badge}
            </span>
          </motion.div>
        )}

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-normal text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] mb-5 sm:mb-6"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.88) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {title}{" "}
          {titleHighlight && (
            <span
              style={{
                backgroundImage: "none",
                WebkitBackgroundClip: "unset",
                backgroundClip: "unset",
                color: "var(--color-accent)",
              }}
            >
              {titleHighlight}
            </span>
          )}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg font-[var(--font-body)] leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          {description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          <Link
            href={primaryCta.href}
            className="btn btn-primary group relative overflow-hidden"
            style={{ boxShadow: '0 4px 24px rgba(255,255,255,0.1)' }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/0 via-[var(--color-accent)]/20 to-[var(--color-accent)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="btn btn-secondary group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/0 via-[var(--color-accent)]/10 to-[var(--color-accent)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

        {/* Optional children (e.g., marquee) */}
        {children}

        {/* Trust elements - staggered */}
        {trustElements && trustElements.length > 0 && (
          <motion.div
            variants={trustContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-6 border-t border-white/5"
          >
            {trustElements.map((element, index) => (
              <React.Fragment key={element.text}>
                <motion.div
                  variants={trustItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-2 cursor-default"
                >
                  <element.icon size={14} className="text-accent transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(var(--color-accent-rgb),0.6)]" />
                  <span className="text-[11px] sm:text-xs font-[var(--font-body)] text-white/70 hover:text-white/90 transition-colors duration-300">
                    {element.text}
                  </span>
                </motion.div>
                {index < trustElements.length - 1 && (
                  <div className="w-px h-4 bg-white/10 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
