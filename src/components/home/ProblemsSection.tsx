"use client";

import React from "react";
import { motion } from "framer-motion";
import { Puzzle, Users, Target, Rocket, Heart } from "lucide-react";

const PROBLEMS = [
  {
    icon: Puzzle,
    title: "Votre produit est complexe",
    description:
      "SaaS, plateforme, solution technique — vos prospects decrochent avant d'avoir compris ce que vous faites. Vous avez besoin de quelqu'un qui sait simplifier sans denaturer.",
  },
  {
    icon: Users,
    title: "Vos equipes ne savent pas comment presenter le produit",
    description:
      "Chaque commercial a sa propre version du pitch. Le marketing dit une chose, les sales disent autre chose, le site raconte une troisieme histoire.",
  },
  {
    icon: Target,
    title: "Vos campagnes generent du trafic, pas des deals",
    description:
      "Vous investissez en pub, vous generez des clics et des leads. Mais le message publicitaire et le discours de vente ne se retrouvent pas.",
  },
  {
    icon: Rocket,
    title: "Vous lancez un nouveau produit ou un nouveau marche",
    description:
      "Nouveau SaaS, nouvelle offre, recrutement de franchises, ouverture d'un segment — vous avez besoin d'un go-to-market structure.",
  },
  {
    icon: Heart,
    title: "Votre marque employeur ne reflete pas votre realite",
    description:
      "Votre entreprise est un produit pour vos futurs talents. Si votre messaging RH est aussi flou que votre marketing, les bons profils passent leur chemin.",
  },
];

export function ProblemsSection() {
  return (
    <section
      className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-overlay"
      style={{ background: "#0c0c0a" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "rgba(212, 253, 0, 0.05)" }}
      />
      <div
        className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(212, 253, 0, 0.04)" }}
      />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-4 sm:mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/50">
              Les problemes qu&apos;on resout
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white"
          >
            On intervient quand l&apos;offre est bonne, mais que le marche{" "}
            <span className="text-[#D4FD00]">ne le voit pas</span>.
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.19, 1, 0.22, 1],
              }}
              className={`
                group p-5 sm:p-6 md:p-7
                bg-white/[0.03] backdrop-blur-sm border border-white/[0.06]
                hover:bg-white/[0.06] hover:border-white/10
                transition-all duration-300 hover:-translate-y-1
                ${index === 4 ? "lg:col-span-1 sm:col-span-2 lg:col-start-2" : ""}
              `}
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-5 flex items-center justify-center bg-[#D4FD00]/10 group-hover:bg-[#D4FD00]/15 transition-colors">
                <problem.icon size={20} className="text-[#D4FD00]" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-medium text-base sm:text-lg md:text-xl text-white mb-2 sm:mb-3 leading-snug">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-[15px] text-white/60 leading-relaxed font-[var(--font-body)]">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;
