"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { ArrowUpRightIcon } from "@/components/icons";

export interface PricingTier {
  name: string;
  price: string;
  priceLabel?: string;
  description: string;
  features: string[];
  cta: { text: string; href: string };
  highlighted?: boolean;
  badge?: string;
}

export interface PricingSectionProps {
  surtitre?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  tiers: PricingTier[];
  footnote?: string;
  backgroundImage?: string;
}

export function PricingSection({
  surtitre,
  title,
  titleHighlight,
  description,
  tiers,
  footnote,
  backgroundImage,
}: PricingSectionProps) {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-light"
      style={{ background: "#f8f8f6" }}
    >
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 opacity-5">
          <Image src={backgroundImage} alt="" fill className="object-cover" sizes="100vw" />
        </div>
      )}
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-[#D4FD00] opacity-[0.04] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {surtitre && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2.5 mb-3 sm:mb-5"
            >
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
                className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b] uppercase"
              >
                {surtitre}
              </motion.span>
            </motion.div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] mb-3 sm:mb-4"
          >
            {title}{" "}
            {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
          </motion.h2>

          {description && (
            <p className="text-[#6b6b6b] text-[14px] sm:text-base font-[var(--font-body)] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Pricing Grid */}
        <div className={`grid grid-cols-1 ${tiers.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : tiers.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : ""} gap-5 sm:gap-6`}>
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${tier.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <div className={`relative h-full flex flex-col p-6 sm:p-8 lg:p-10 border overflow-hidden transition-all duration-300 ${
                tier.highlighted
                  ? "bg-[#1a1a1a] border-[#1a1a1a] text-white"
                  : "bg-white border-black/10 hover:border-black/20"
              }`}>
                {/* Badge */}
                {tier.badge && (
                  <span className={`absolute top-0 right-0 px-3 py-1.5 text-[9px] font-bold tracking-wide ${
                    tier.highlighted ? "bg-[#D4FD00] text-[#1a1a1a]" : "bg-[#D4FD00] text-[#1a1a1a]"
                  }`}>
                    {tier.badge}
                  </span>
                )}

                {/* Tier name */}
                <p className={`text-[11px] sm:text-xs font-medium tracking-wide uppercase mb-3 ${tier.highlighted ? "text-[#D4FD00]" : "text-[#D4FD00]"}`}>
                  {tier.name}
                </p>

                {/* Price */}
                <div className="mb-2">
                  <span className={`font-heading font-bold text-[36px] sm:text-[44px] lg:text-[52px] leading-none tracking-[-0.02em] ${tier.highlighted ? "text-white" : "text-[#1a1a1a]"}`}>
                    {tier.price}
                  </span>
                  {tier.priceLabel && (
                    <span className={`text-sm ml-1 ${tier.highlighted ? "text-white/70" : "text-[#6b6b6b]"}`}>
                      {tier.priceLabel}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className={`text-[14px] font-[var(--font-body)] leading-relaxed mb-6 ${tier.highlighted ? "text-white/75" : "text-[#6b6b6b]"}`}>
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check size={16} className={`shrink-0 mt-0.5 ${tier.highlighted ? "text-[#D4FD00]" : "text-[#D4FD00]"}`} />
                      <span className={`text-[13px] sm:text-[14px] font-[var(--font-body)] leading-snug ${tier.highlighted ? "text-white/80" : "text-[#1a1a1a]"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={tier.cta.href}
                  className={`btn group w-full justify-center ${tier.highlighted ? "btn-primary" : "btn-dark"}`}
                >
                  {tier.cta.text}
                  <ArrowUpRightIcon className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        {footnote && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[#6b6b6b] text-[12px] sm:text-[13px] font-[var(--font-body)] mt-8 sm:mt-10"
          >
            {footnote}
          </motion.p>
        )}
      </div>
    </section>
  );
}
