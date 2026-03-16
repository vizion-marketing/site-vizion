"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const pillars = [
  {
    label: "Stratèges marketing",
    description:
      "Positionnement, architecture de message, copywriting B2B, parcours de conversion — on pense comme des directeurs marketing avant de penser comme des développeurs.",
  },
  {
    label: "Développeurs chevronnés",
    description:
      "Performance 90+, code sur mesure, intégrations CRM, SEO technique — pas de constructeur de pages, pas de thème WordPress.",
  },
];

export function VizionDifference() {
  return (
    <section className="bg-card grain-light py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(var(--color-accent-rgb), 0.10) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-[82.5rem] mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center"
        >
          {/* Left — Editorial */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Ce qui nous distingue vraiment
              </span>
            </div>

            <h2 className="font-heading font-medium text-[28px] sm:text-[38px] md:text-[48px] leading-[1.05] tracking-[-0.035em] text-primary mb-6 sm:mb-8">
              La plupart des agences web
              <br />
              créent des sites.
              <br />
              <span className="text-muted">Nous, on livre</span> des outils
              <br />
              marketing.
            </h2>

            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed max-w-lg mb-8">
              Derrière chaque projet Vizion, il y a des stratèges marketing qui
              comprennent votre cycle de vente B2B — et des développeurs qui
              savent les traduire en expériences qui convertissent. Les deux
              ensemble, pas l&apos;un sans l&apos;autre.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary group"
            >
              Discuter de votre projet
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* Right — 2 pillars + accent quote */}
          <motion.div
            variants={stagger}
            className="flex flex-col gap-4 sm:gap-5"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-white border border-black/[0.06] p-7 sm:p-8 flex gap-5 items-start"
              >
                <div className="w-10 h-10 shrink-0 bg-accent flex items-center justify-center text-[13px] font-bold text-black leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[16px] sm:text-[17px] font-semibold text-primary leading-snug mb-2">
                    {pillar.label}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Accent quote block */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="bg-accent p-7 sm:p-8"
            >
              <p className="font-heading font-medium text-[17px] sm:text-[20px] leading-[1.2] tracking-[-0.01em] text-black">
                &ldquo;Un site Vizion ne se mesure pas à son design. Il se
                mesure aux leads qu&apos;il génère et aux ventes qu&apos;il
                facilite.&rdquo;
              </p>
              <p className="text-[12px] font-medium text-black/50 mt-3 tracking-[0.06em] uppercase">
                Lucas Gonzalez — Fondateur, Vizion
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
