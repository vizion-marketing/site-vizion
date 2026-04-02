"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface Signal {
  icon: string;
  title: string;
  description: string;
}

interface EnjeuxSignalsProps {
  title: string;
  subtitle: string;
  signals: Signal[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] },
  },
};

export function EnjeuxSignals({ title, subtitle, signals }: EnjeuxSignalsProps) {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 bg-card">
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase text-primary/50 mb-4"
          >
            Signaux
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-normal text-[clamp(26px,3.5vw,44px)] leading-[1.05] tracking-[-0.035em] text-primary mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[15px] leading-relaxed text-secondary max-w-xl"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* 3 cartes — card centrale décalée vers le bas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:pb-14"
        >
          {signals.slice(0, 3).map((signal, index) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (LucideIcons as any)[signal.icon] || LucideIcons.AlertCircle;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white border border-black/[0.06] hover:border-black/[0.12] hover:shadow-lg transition-all duration-300 p-7 sm:p-9 flex flex-col h-full${index === 1 ? " lg:mt-14" : ""}`}
              >
                <div className="w-10 h-10 bg-accent flex items-center justify-center mb-8 shrink-0">
                  <IconComponent className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col grow">
                  <h3 className="text-[17px] sm:text-[19px] font-semibold text-primary mb-4 leading-snug">
                    {signal.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-secondary">
                    {signal.description}
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
