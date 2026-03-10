"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import type { PainPoint } from "../../../sanity/lib/types";

interface PainPointsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  painPoints: PainPoint[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] as const },
  },
};

export function PainPoints({ title, subtitle, description, painPoints }: PainPointsProps) {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header — layout éditorial 2 colonnes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 mb-12 sm:mb-16 lg:mb-20 items-end"
        >
          {/* Colonne gauche — surtitre + titre */}
          <div>
            <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Le constat
              </span>
            </div>
            {title && (
              <h2 className="font-heading font-medium text-[24px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary">
                {title}
              </h2>
            )}
          </div>

          {/* Colonne droite — paragraphe narratif */}
          {(subtitle || description) && (
            <div className="lg:border-l lg:border-black/[0.08] lg:pl-10">
              {subtitle && (
                <p className="text-secondary text-[15px] sm:text-base leading-relaxed font-medium mb-3">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="text-muted text-[13px] sm:text-[14px] leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}
        </motion.div>

        {/* Cards — 4 colonnes alignées */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
        >
          {painPoints.map((point, i) => {
            const cardNumber = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group"
              >
                <div className="relative h-full bg-card border border-black/[0.06] overflow-hidden transition-all duration-500 hover:bg-accent hover:-translate-y-1 flex flex-col p-6 lg:p-7">
                  {/* Accent line bottom */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--text-primary)] group-hover:w-full transition-all duration-500" />

                  {/* Number + Icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 lg:w-12 lg:h-12 bg-[#f5f5f5] group-hover:bg-[var(--text-primary)] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <AlertTriangle size={20} className="text-primary group-hover:text-accent transition-colors duration-500" />
                    </div>
                    <span className="text-primary/10 font-heading font-bold text-4xl lg:text-5xl">
                      {cardNumber}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-medium text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.15] tracking-[-0.02em] text-primary mb-3 transition-colors duration-500">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted group-hover:text-primary/80 text-[13px] leading-relaxed transition-colors duration-500">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
