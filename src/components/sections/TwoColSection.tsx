"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

const paragraphContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const paragraphItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [25, -25]);

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
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.05 }}
                  className="relative flex h-2 w-2"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FD00] opacity-40" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[#D4FD00] via-[#D4FD00]/80 to-[#D4FD00]/60 shadow-[0_0_8px_rgba(212,253,0,0.5)]" />
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/60" : "text-[#6b6b6b]"}`}
                >
                  {surtitre}
                </motion.span>
              </div>
            )}

            <h2 className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] mb-5 sm:mb-6 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
              {title}{" "}
              {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
            </h2>

            <motion.div
              variants={paragraphContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {paragraphs.map((p, i) => (
                <motion.p key={i} variants={paragraphItem} className={`text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed ${isDark ? "text-white/80" : "text-[#52525B]"}`}>
                  {p}
                </motion.p>
              ))}
            </motion.div>

            {cta && (
              <Link href={cta.href} className={`btn ${isDark ? "btn-primary" : "btn-dark"} group`}>
                {cta.text}
                <motion.span
                  className="shrink-0 inline-flex"
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ArrowUpRightIcon size={16} />
                </motion.span>
              </Link>
            )}
          </motion.div>

          {/* Image Column with parallax */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: imagePosition === "right" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`relative ${imagePosition === "left" ? "lg:col-start-1 lg:row-start-1" : ""}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden group/image">
              <motion.div style={{ y: imageY }} className="absolute inset-0">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/image:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              {/* Accent frame with glow */}
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-[#D4FD00]/20 -z-10 hidden lg:block transition-all duration-500 group-hover/image:border-[#D4FD00]/40 group-hover/image:shadow-[0_0_32px_rgba(212,253,0,0.25)]" />
            </div>

            {/* Badge overlay with animation */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-[#D4FD00] p-4 sm:p-5 shadow-[0_8px_24px_rgba(212,253,0,0.3)]"
              >
                <span className="font-heading font-bold text-[24px] sm:text-[32px] text-[#1a1a1a] leading-none block">
                  {badge.text}
                </span>
                {badge.subtext && (
                  <span className="text-[11px] sm:text-xs text-[#1a1a1a]/70 font-[var(--font-body)] mt-1 block">
                    {badge.subtext}
                  </span>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
