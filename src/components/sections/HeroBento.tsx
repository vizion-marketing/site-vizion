"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export interface HeroBentoCard {
  type: "image" | "stat" | "text";
  /** Grid span */
  span?: "normal" | "wide" | "tall";
  image?: string;
  imageAlt?: string;
  value?: string;
  label?: string;
  title?: string;
  description?: string;
}

export interface HeroBentoProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  cards: HeroBentoCard[];
}

export function HeroBento({
  surtitre,
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  cards,
}: HeroBentoProps) {
  return (
    <section
      className="pt-28 sm:pt-32 md:pt-36 lg:pt-44 pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-overlay"
      style={{ background: "#0c0c0a" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[60%] h-[50%] top-[5%] left-[-10%]" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(212,253,0,0.08) 0%, transparent 55%)" }} />
        <div className="absolute w-[40%] h-[40%] bottom-[0%] right-[-5%]" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(212,253,0,0.05) 0%, transparent 55%)" }} />
      </div>

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: text */}
          <div className="lg:col-span-5">
            {surtitre && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-2.5 mb-5 sm:mb-6">
                <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
                <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/50 uppercase">{surtitre}</span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-normal text-[32px] sm:text-[42px] md:text-[52px] lg:text-[56px] leading-[0.95] tracking-[-0.03em] mb-5 sm:mb-6"
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
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-[15px] sm:text-base md:text-lg font-[var(--font-body)] leading-relaxed text-white/65 mb-8 sm:mb-10 max-w-lg">
                {description}
              </motion.p>
            )}

            {(primaryCta || secondaryCta) && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
          </div>

          {/* Right: bento grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 auto-rows-[minmax(120px,auto)]">
              {cards.map((card, index) => {
                const isWide = card.span === "wide";
                const isTall = card.span === "tall";

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                    className={`
                      relative overflow-hidden
                      ${isWide ? "col-span-2" : ""}
                      ${isTall ? "row-span-2" : ""}
                      ${card.type === "image" ? "" : "bg-white/[0.04] border border-white/[0.08]"}
                    `}
                  >
                    {card.type === "image" && card.image && (
                      <div className="relative h-full min-h-[160px]">
                        <Image src={card.image} alt={card.imageAlt || ""} fill className="object-cover" />
                        {card.title && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3">
                              <span className="text-white font-heading font-semibold text-[14px] sm:text-[15px]">{card.title}</span>
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {card.type === "stat" && (
                      <div className="p-4 sm:p-5 h-full flex flex-col justify-center items-center text-center">
                        <span className="font-heading font-bold text-[28px] sm:text-[36px] text-[#D4FD00] leading-none mb-1">{card.value}</span>
                        <span className="text-[11px] sm:text-[12px] text-white/50 font-[var(--font-body)]">{card.label}</span>
                      </div>
                    )}

                    {card.type === "text" && (
                      <div className="p-4 sm:p-5 h-full flex flex-col justify-center">
                        {card.title && <h3 className="font-heading font-semibold text-[15px] sm:text-[16px] text-white mb-1.5">{card.title}</h3>}
                        {card.description && <p className="text-[12px] sm:text-[13px] text-white/50 font-[var(--font-body)] leading-relaxed">{card.description}</p>}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
