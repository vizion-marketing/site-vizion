"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Clock, ArrowRight, UserCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function QualityGuarantees() {
  return (
    <section
      className="dark-section grain-overlay py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="max-w-[82.5rem] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-4 sm:gap-5"
        >
          {/* ─── LEFT: Title + Description + Feature rows ─── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-7 sm:p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-secondary uppercase">
                  Nos engagements
                </span>
              </div>
              <h2 className="font-heading font-medium text-[24px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.02em] text-primary mb-4 sm:mb-6">
                Nos garanties
                <br />
                de qualité
              </h2>
              <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed max-w-md">
                Chaque projet est piloté avec la même rigueur. Pas de
                promesses vagues — des engagements concrets, mesurables et
                documentés.
              </p>
            </div>

            {/* Feature rows */}
            <div className="mt-8 space-y-0">
              <div className="flex items-start gap-4 py-4 border-t border-white/10">
                <div className="w-10 h-10 shrink-0 bg-accent/10 flex items-center justify-center">
                  <Shield size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-[14px] sm:text-[15px] font-semibold text-primary leading-snug">
                    Résultats mesurables
                  </h4>
                  <p className="text-[13px] text-muted leading-relaxed mt-1">
                    Chaque action est trackée. Rapports mensuels transparents
                    avec KPIs concrets.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4 border-t border-white/10">
                <div className="w-10 h-10 shrink-0 bg-accent/10 flex items-center justify-center">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-[14px] sm:text-[15px] font-semibold text-primary leading-snug">
                    Délais respectés
                  </h4>
                  <p className="text-[13px] text-muted leading-relaxed mt-1">
                    Planning détaillé dès le kickoff. Chaque milestone est
                    tenu — ou communiqué en amont.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── CENTER: Portrait photo (full height) ─── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="border border-white/10 overflow-hidden relative min-h-[320px] md:min-h-0"
          >
            <Image
              src="/images/portrait-lucas.png"
              alt="Lucas Gonzalez, Fondateur de Vizion"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </motion.div>

          {/* ─── RIGHT: Feature card + Photo stacked ─── */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            {/* Feature card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-7 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center mb-5">
                  <UserCheck size={18} className="text-primary" />
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-primary leading-snug mb-3">
                  Un interlocuteur
                  <br />
                  unique
                </h3>
                <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                  Un directeur marketing dédié pilote votre projet de A à Z.
                  Pas de turnover, pas de perte de contexte.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 text-[13px] sm:text-[14px] font-semibold text-primary group"
              >
                En savoir plus
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Second photo */}
            <div className="border border-white/10 overflow-hidden relative min-h-[200px] flex-1">
              <Image
                src="/images/why-vizion/equipe-vizion.avif"
                alt="L'équipe Vizion en action"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
