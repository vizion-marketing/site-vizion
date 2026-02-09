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
}

export function CTASection({
  badge,
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  trustElements,
}: CTASectionProps) {
  return (
    <section
      className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-overlay"
      style={{ background: "#0c0c0a" }}
    >
      {/* Animated radial gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[50%] h-[50%] bottom-[5%] right-[-15%] animate-gradient-float-4"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.05) 0%, transparent 55%)",
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
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FD00] opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[#D4FD00] via-[#D4FD00]/80 to-[#D4FD00]/50 shadow-[0_0_8px_rgba(212,253,0,0.5)]" />
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
                color: "#D4FD00",
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
            className="btn btn-primary group"
          >
            {primaryCta.text}{" "}
            <ArrowUpRightIcon
              className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform"
              size={16}
            />
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="btn btn-secondary group"
            >
              {secondaryCta.text}{" "}
              <ArrowUpRightIcon
                className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform"
                size={16}
              />
            </Link>
          )}
        </motion.div>

        {/* Trust elements */}
        {trustElements && trustElements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-6 border-t border-white/5"
          >
            {trustElements.map((element, index) => (
              <React.Fragment key={element.text}>
                <div className="flex items-center gap-2">
                  <element.icon size={14} className="text-[#D4FD00]" />
                  <span className="text-[11px] sm:text-xs font-[var(--font-body)] text-white/50">
                    {element.text}
                  </span>
                </div>
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
