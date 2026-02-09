"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export interface HeroSplitProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  image: string;
  imageAlt?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  /** Image left or right */
  imagePosition?: "left" | "right";
  /** Optional badge overlaid on image */
  badge?: { text: string; subtext?: string };
  /** Stats row under description */
  stats?: { value: string; label: string }[];
  variant?: "dark" | "light";
}

export function HeroSplit({
  surtitre,
  title,
  titleHighlight,
  description,
  image,
  imageAlt = "",
  primaryCta,
  secondaryCta,
  imagePosition = "right",
  badge,
  stats,
  variant = "dark",
}: HeroSplitProps) {
  const isDark = variant === "dark";
  const bg = isDark ? "#0c0c0a" : "#f8f8f6";

  return (
    <section
      className={`pt-28 sm:pt-32 md:pt-36 lg:pt-44 pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay" : "grain-light"}`}
      style={{ background: bg }}
    >
      {/* Ambient glows */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute w-[60%] h-[60%] top-[5%] left-[-15%]" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(212,253,0,0.08) 0%, transparent 55%)" }} />
          <div className="absolute w-[40%] h-[40%] bottom-[-5%] right-[-10%]" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(212,253,0,0.05) 0%, transparent 55%)" }} />
        </div>
      )}

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${imagePosition === "left" ? "lg:grid-flow-dense" : ""}`}>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={imagePosition === "left" ? "lg:col-start-2" : ""}
          >
            {surtitre && (
              <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.05 }} className="w-2 h-2 rounded-full bg-[#D4FD00]" />
                <motion.span initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                  {surtitre}
                </motion.span>
              </div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-heading font-normal text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[0.95] tracking-[-0.03em] mb-5 sm:mb-6 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
            >
              {title}{" "}
              {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`text-[15px] sm:text-base md:text-lg font-[var(--font-body)] leading-relaxed max-w-xl mb-6 sm:mb-8 ${isDark ? "text-white/70" : "text-[#6b6b6b]"}`}
              >
                {description}
              </motion.p>
            )}

            {/* Stats */}
            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex gap-6 sm:gap-8 mb-8"
              >
                {stats.map((stat, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className={`w-px ${isDark ? "bg-white/10" : "bg-black/10"}`} />}
                    <div>
                      <span className={`block font-heading font-bold text-[24px] sm:text-[28px] leading-none ${isDark ? "text-[#D4FD00]" : "text-[#1a1a1a]"}`}>{stat.value}</span>
                      <span className={`text-[11px] sm:text-[12px] font-[var(--font-body)] ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>{stat.label}</span>
                    </div>
                  </React.Fragment>
                ))}
              </motion.div>
            )}

            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {primaryCta && (
                  <Link href={primaryCta.href} className={`btn ${isDark ? "btn-primary" : "btn-dark"} group`}>
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
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "right" ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={`relative ${imagePosition === "left" ? "lg:col-start-1 lg:row-start-1" : ""}`}
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden group/image">
              <Image src={image} alt={imageAlt} fill className="object-cover transition-transform duration-700 group-hover/image:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className={`absolute -top-3 ${imagePosition === "right" ? "-right-3" : "-left-3"} w-full h-full border-2 border-[#D4FD00]/20 -z-10 hidden lg:block`} />
            </div>

            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-[#D4FD00] p-4 sm:p-5 shadow-[0_8px_24px_rgba(212,253,0,0.3)]"
              >
                <span className="font-heading font-bold text-[24px] sm:text-[32px] text-[#1a1a1a] leading-none block">{badge.text}</span>
                {badge.subtext && <span className="text-[11px] text-[#1a1a1a]/70 font-[var(--font-body)] mt-1 block">{badge.subtext}</span>}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
