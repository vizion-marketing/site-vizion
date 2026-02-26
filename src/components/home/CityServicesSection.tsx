"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, PenTool, TrendingUp, Cog, Presentation, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { CityPilier } from "@/content/cities/types";
import { ArrowUpRightIcon } from "@/components/icons";
import type { LucideIcon } from "lucide-react";

// Map pilier numero to icon and href
const PILIER_MAP: Record<string, { icon: LucideIcon; href: string }> = {
  "01": { icon: Target, href: "/services/marketing-produit" },
  "02": { icon: PenTool, href: "/services/sales-enablement" },
  "03": { icon: TrendingUp, href: "/services/acquisition-b2b" },
  "04": { icon: Cog, href: "/services/automatisation-crm" },
  "05": { icon: Presentation, href: "/services/sales-enablement" },
};

interface CityServicesSectionProps {
  surtitre: string;
  h2: string;
  description: string;
  piliers: CityPilier[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function CityServicesSection({ surtitre, h2, description, piliers }: CityServicesSectionProps) {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-12 sm:mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2.5 mb-4">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </div>
            <span className="surtitre text-muted">{surtitre}</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.05] tracking-[-0.035em] text-primary mb-4"
          >
            {h2}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-muted text-[15px] sm:text-[16px] leading-relaxed max-w-3xl"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Piliers grid — 2 or 3 columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className={`grid grid-cols-1 ${piliers.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-6 sm:gap-8`}
        >
          {piliers.map((pilier) => {
            const config = PILIER_MAP[pilier.numero] ?? { icon: Target, href: "/contact" };
            const Icon = config.icon;

            return (
              <motion.div
                key={pilier.numero}
                variants={fadeInUp}
                className="group bg-card border border-black/[0.06] p-6 sm:p-8 flex flex-col hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
              >
                {/* Icon + Number */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="surtitre text-muted">{pilier.surtitre}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-medium text-[18px] sm:text-[20px] leading-[1.2] tracking-[-0.01em] text-primary mb-3">
                  {pilier.titre}
                </h3>

                {/* Description */}
                <p className="text-muted text-[14px] sm:text-[15px] leading-relaxed mb-6 flex-1">
                  {pilier.description}
                </p>

                {/* Services tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {pilier.services.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-black/[0.06] text-[11px] text-muted"
                    >
                      <CheckCircle2 size={10} className="text-accent" />
                      {service}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <Link
                  href={config.href}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary group-hover:text-accent transition-colors"
                >
                  {pilier.cta ?? "En savoir plus"}
                  <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default CityServicesSection;
