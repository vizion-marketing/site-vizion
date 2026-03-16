"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ClipboardList, Wrench, Zap, ArrowRight, UserCheck } from "lucide-react";

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
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
        }}
      />
      <div className="max-w-[82.5rem] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              Nos engagements
            </span>
          </div>
          <h2 className="font-heading font-medium text-[28px] sm:text-[38px] md:text-[48px] leading-[1.05] tracking-[-0.035em] text-primary max-w-3xl">
            Pourquoi choisir Vizion
            <br />
            pour votre site web ?
          </h2>
          <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed mt-4 sm:mt-5 max-w-xl">
            Pas de promesses vagues — des engagements concrets, mesurables et
            documentés, valables sur chaque projet que nous livrons.
          </p>
        </motion.div>

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
                <div className="w-10 h-10 shrink-0 bg-accent flex items-center justify-center">
                  <ClipboardList size={18} className="text-black" />
                </div>
                <div>
                  <h4 className="text-[14px] sm:text-[15px] font-semibold text-primary leading-snug">
                    Bilan livrable — 50 points d&apos;optimisation
                  </h4>
                  <p className="text-[13px] text-muted leading-relaxed mt-1">
                    Checklist complète : sécurité, SEO technique, performance,
                    accessibilité et bonnes pratiques.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4 border-t border-white/10">
                <div className="w-10 h-10 shrink-0 bg-accent flex items-center justify-center">
                  <Wrench size={18} className="text-black" />
                </div>
                <div>
                  <h4 className="text-[14px] sm:text-[15px] font-semibold text-primary leading-snug">
                    3 mois de maintenance offerts
                  </h4>
                  <p className="text-[13px] text-muted leading-relaxed mt-1">
                    Corrections, mises à jour et petites évolutions incluses
                    pendant 3 mois après la livraison.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4 border-t border-white/10">
                <div className="w-10 h-10 shrink-0 bg-accent flex items-center justify-center">
                  <Zap size={18} className="text-black" />
                </div>
                <div>
                  <h4 className="text-[14px] sm:text-[15px] font-semibold text-primary leading-snug">
                    Score Google 90+ garanti
                  </h4>
                  <p className="text-[13px] text-muted leading-relaxed mt-1">
                    Performance, accessibilité, SEO et bonnes pratiques —
                    mesurés et validés avant chaque livraison.
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
                  Une coopération unique
                  <br />
                  entre stratégie et technique
                </h3>
                <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
                  Stratèges marketing et développeurs chevronnés travaillent
                  ensemble sur chaque projet — pour que votre site serve vraiment
                  vos objectifs commerciaux.
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
