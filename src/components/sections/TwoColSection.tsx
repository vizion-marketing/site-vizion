"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export interface TwoColSectionProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  paragraphs: string[];
  image: string;
  imageAlt?: string;
  /** Image placement */
  imagePosition?: "left" | "right";
  cta?: { text: string; href: string };
  variant?: "white" | "light" | "dark";
  /** Optional badge overlaid on the image */
  badge?: { text: string; subtext?: string };
}

export function TwoColSection({
  surtitre,
  title,
  titleHighlight,
  paragraphs,
  image,
  imageAlt = "",
  imagePosition = "right",
  cta,
  variant = "light",
  badge,
}: TwoColSectionProps) {
  const isDark = variant === "dark";
  const bg = variant === "dark" ? "#0c0c0a" : variant === "light" ? "#f8f8f6" : "#ffffff";
  const grain = isDark ? "grain-overlay" : "grain-light";

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${grain}`}
      style={{ background: bg }}
    >
      {/* Ambient glow */}
      <div
        className={`absolute top-[20%] ${imagePosition === "right" ? "left-[-5%]" : "right-[-5%]"} w-[500px] h-[500px] bg-[#D4FD00] ${isDark ? "opacity-[0.05]" : "opacity-[0.04]"} rounded-full blur-[200px] pointer-events-none`}
      />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${imagePosition === "left" ? "lg:grid-flow-dense" : ""}`}>
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={imagePosition === "left" ? "lg:col-start-2" : ""}
          >
            {surtitre && (
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
                <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                  {surtitre}
                </span>
              </div>
            )}

            <h2 className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] mb-5 sm:mb-6 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
              {title}{" "}
              {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
            </h2>

            <div className="space-y-4 mb-8">
              {paragraphs.map((p, i) => (
                <p key={i} className={`text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed ${isDark ? "text-white/70" : "text-[#6b6b6b]"}`}>
                  {p}
                </p>
              ))}
            </div>

            {cta && (
              <Link href={cta.href} className={`btn ${isDark ? "btn-primary" : "btn-dark"} group`}>
                {cta.text}
                <ArrowUpRightIcon className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} />
              </Link>
            )}
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "right" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`relative ${imagePosition === "left" ? "lg:col-start-1 lg:row-start-1" : ""}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Accent frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-[#D4FD00]/20 -z-10 hidden lg:block" />
            </div>

            {/* Badge overlay */}
            {badge && (
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-[#D4FD00] p-4 sm:p-5">
                <span className="font-heading font-bold text-[24px] sm:text-[32px] text-[#1a1a1a] leading-none block">
                  {badge.text}
                </span>
                {badge.subtext && (
                  <span className="text-[11px] sm:text-xs text-[#1a1a1a]/70 font-[var(--font-body)] mt-1 block">
                    {badge.subtext}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
