"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Check } from "lucide-react";
import type { NarrativeBlock } from "@/content/services";

interface ServiceHighlightsProps {
  block: NarrativeBlock;
  /** "white" = fond blanc, "card" = fond grisé */
  variant?: "white" | "card";
  /** Icon style: "warning" for consequences, "check" for promesse */
  iconStyle?: "warning" | "check";
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function ServiceHighlights({
  block,
  variant = "white",
  iconStyle = "check",
}: ServiceHighlightsProps) {
  if (!block.highlights || block.highlights.length === 0) return null;

  const Icon = iconStyle === "warning" ? AlertTriangle : Check;
  const bgClass = variant === "white" ? "bg-white" : "bg-card";
  const cardBg = variant === "white" ? "bg-card" : "bg-white";

  return (
    <section
      className={`${bgClass} py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12`}
    >
      <div className="max-w-[82.5rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left — Title + paragraphs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                  {block.surtitre}
                </span>
              </div>
              <h2 className="font-heading font-medium text-[24px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary mb-4 sm:mb-6">
                {block.title}
              </h2>
            </motion.div>

            {block.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-[14px] sm:text-[15px] leading-relaxed text-muted max-w-lg mb-3 last:mb-0"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          {/* Right — Highlights list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="space-y-4"
          >
            {block.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className={`${cardBg} border border-black/[0.06] p-5 sm:p-6 flex items-start gap-4`}
              >
                <div
                  className={`w-9 h-9 shrink-0 flex items-center justify-center ${
                    iconStyle === "warning"
                      ? "bg-accent/10"
                      : "bg-accent"
                  }`}
                >
                  <Icon
                    size={16}
                    className={
                      iconStyle === "warning"
                        ? "text-primary"
                        : "text-black"
                    }
                  />
                </div>
                <p className="text-[14px] sm:text-[15px] text-primary leading-relaxed">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
