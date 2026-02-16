"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Flame, Target, Lightbulb, Gem, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const TRUST_REASONS = [
  {
    icon: Flame,
    title: "Nous vous challengeons",
    description:
      "Nous ne sommes pas là pour dire oui à tout. Nous questionnons vos certitudes, challengeons vos hypothèses et poussons votre réflexion plus loin. C'est comme ça qu'on construit des stratégies qui tiennent.",
  },
  {
    icon: Target,
    title: "Nous voulons avoir un impact",
    description:
      "On ne se contente pas de PowerPoints. Chaque action doit générer un résultat mesurable : plus de leads, des cycles de vente plus courts, un positionnement plus clair.",
  },
  {
    icon: Lightbulb,
    title: "Stratèges avant tout",
    description:
      "Nous ne sommes pas seulement d'excellents communicants. Nous sommes des stratèges qui comprennent vos enjeux business et alignent le marketing sur vos objectifs de croissance.",
  },
  {
    icon: Gem,
    title: "Des assets de qualité",
    description:
      "Sites, présentations commerciales, contenus, visuels — chaque livrable est conçu avec exigence. Parce que la qualité de vos supports reflète la qualité de votre offre.",
  },
  {
    icon: Zap,
    title: "Ultra-réactifs",
    description:
      "Réponse en 24h, itérations rapides, exécution sans délai. Votre marché n'attend pas, nous non plus.",
  },
];

export function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden grain-overlay"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#f8f8f6]" />

      {/* Subtle gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[70%] h-[60%] top-[-10%] left-[-15%]"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute w-[50%] h-[50%] top-[20%] right-[-10%]"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
          className="max-w-3xl mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#1a1a1a] text-white rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FD00] opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FD00]"></span>
              </span>
              Pourquoi nous
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-heading font-medium text-[26px] sm:text-[34px] md:text-[42px] lg:text-[52px] leading-[1.08] tracking-[-0.02em] text-[#1a1a1a] mb-5 sm:mb-6"
          >
            + de 70 entreprises Occitanes, Nationales et Européennes{" "}
            <span className="relative inline-block">
              <span className="relative z-10">nous ont fait confiance.</span>
              <span
                className="absolute bottom-1 left-0 w-full h-3 bg-[#D4FD00]/40 -z-0"
                style={{ transform: "skewX(-3deg)" }}
              />
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[#6b6b6b] text-base sm:text-lg leading-relaxed max-w-2xl"
          >
            Pas parce qu&apos;on fait de belles présentations. Parce qu&apos;on
            obtient des résultats. Voici ce qui fait la différence.
          </motion.p>
        </motion.div>

        {/* Trust reasons grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08, margin: "0px 0px -60px 0px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {TRUST_REASONS.map((reason, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`group relative bg-white border border-black/[0.06] rounded-xl p-6 sm:p-7 hover:border-[#D4FD00]/40 hover:shadow-lg transition-all duration-300 ${
                i >= 3 ? "lg:col-span-1 sm:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-4 group-hover:bg-[#D4FD00] transition-colors duration-300">
                <reason.icon
                  size={20}
                  className="text-[#D4FD00] group-hover:text-[#1a1a1a] transition-colors duration-300"
                />
              </div>

              <h3 className="font-heading font-semibold text-[#1a1a1a] text-base sm:text-lg mb-2.5">
                {reason.title}
              </h3>

              <p className="text-[#6b6b6b] text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row: last 2 items centered on lg */}
      </div>
    </section>
  );
}

export default IntroSection;
