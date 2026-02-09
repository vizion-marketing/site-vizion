"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export interface HeroCenteredProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  /** Background image — full bleed */
  backgroundImage: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  /** Overlay darkness 0-1 */
  overlayOpacity?: number;
  /** Trust badges below CTAs */
  trustElements?: string[];
}

export function HeroCentered({
  surtitre,
  title,
  titleHighlight,
  description,
  backgroundImage,
  primaryCta,
  secondaryCta,
  overlayOpacity = 0.55,
  trustElements,
}: HeroCenteredProps) {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image src={backgroundImage} alt="" fill className="object-cover" priority />
      <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${overlayOpacity})` }} />

      {/* Grain overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[50%] h-[50%] top-[10%] left-[25%]" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(212,253,0,0.08) 0%, transparent 55%)" }} />
      </div>

      <div className="relative z-10 max-w-[82.5rem] mx-auto w-full px-4 sm:px-6 md:px-12 py-28 sm:py-32 md:py-36 lg:py-44 text-center">
        {surtitre && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center justify-center gap-2.5 mb-5 sm:mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/60 uppercase">{surtitre}</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-normal text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] max-w-4xl mx-auto mb-5 sm:mb-6"
          style={{
            backgroundImage: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.9) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {title}{" "}
          {titleHighlight && (
            <span className="text-[#D4FD00]" style={{ backgroundImage: "none", WebkitBackgroundClip: "unset", backgroundClip: "unset", color: "#D4FD00" }}>
              {titleHighlight}
            </span>
          )}
        </motion.h1>

        {description && (
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-base sm:text-lg md:text-xl font-[var(--font-body)] leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 text-white/70">
            {description}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn btn-primary group">
                {primaryCta.text}
                <ArrowUpRightIcon className="shrink-0" size={16} />
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn btn-secondary group">
                {secondaryCta.text}
                <ArrowUpRightIcon className="shrink-0" size={16} />
              </Link>
            )}
          </motion.div>
        )}

        {trustElements && trustElements.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12">
            {trustElements.map((el, i) => (
              <span key={i} className="text-[12px] sm:text-[13px] text-white/40 font-[var(--font-body)]">{el}</span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
