"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, FlaskConical, Radar, FileText, Workflow } from "lucide-react";

const AI_USE_CASES = [
  {
    id: "messaging",
    number: "01",
    label: "Messaging & copywriting",
    icon: Sparkles,
    title: "Generation de dizaines de variantes en quelques heures",
    description:
      "L'IA produit le volume, nos consultants selectionnent et affinent. On teste 10 angles la ou une agence classique en teste 2. Chaque message reste aligne sur le positionnement.",
    example:
      "Pour un SaaS B2B, generation de 50 variantes d'accroches LinkedIn Ads en 2h. Selection des 5 meilleures par nos experts. A/B test sur 2 semaines.",
    metric: "x10 variantes testees",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600",
  },
  {
    id: "ab-testing",
    number: "02",
    label: "A/B testing a grande echelle",
    icon: FlaskConical,
    title: "Multiples variantes de pubs testees en parallele",
    description:
      "L'IA genere le volume de variantes (accroches, visuels, CTA). Les donnees decidident, nos experts interpretent. Optimisation en continu, pas une fois par mois.",
    example:
      "Campagne Meta avec 24 combinaisons creatives generees par IA. Identification du winner en 5 jours au lieu de 3 semaines. CPL reduit de 35%.",
    metric: "-35% cout par lead",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
  },
  {
    id: "veille",
    number: "03",
    label: "Veille concurrentielle continue",
    icon: Radar,
    title: "Monitoring automatise du marche",
    description:
      "Detection automatique des changements de positionnement concurrents, nouvelles offres, campagnes. En continu, pas une fois par trimestre. Opportunites identifiees en temps reel.",
    example:
      "Alerte automatique quand un concurrent lance une nouvelle feature. Brief commercial mis a jour sous 48h avec les battle cards ajustees.",
    metric: "Veille 24/7",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600",
  },
  {
    id: "sales",
    number: "04",
    label: "Sales enablement automatise",
    icon: FileText,
    title: "Battle cards et FAQ generes des donnees terrain",
    description:
      "Les objections remontees par les commerciaux alimentent automatiquement les supports de vente. Battle cards, FAQ, objection handling mis a jour au fil des retours.",
    example:
      "CRM connecte a notre systeme IA. Nouvelles objections detectees → battle cards mises a jour → commerciaux informes. Boucle fermee.",
    metric: "Maj en temps reel",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600",
  },
  {
    id: "workflows",
    number: "05",
    label: "Workflows & production",
    icon: Workflow,
    title: "Automatisation des taches repetitives",
    description:
      "Nos consultants consacrent 100% de leur temps a la strategie. L'IA prend en charge le formatage, la mise en page, les exports. Vous payez de l'expertise, pas du temps perdu.",
    example:
      "Rapport mensuel de performance : collecte des donnees, mise en forme, insights preliminaires automatises. Consultant focus sur l'analyse et les recommandations.",
    metric: "-80% taches admin",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=600",
  },
];

export function AIPioneersSection() {
  const [activeTab, setActiveTab] = useState("messaging");
  const activeCase = AI_USE_CASES.find((c) => c.id === activeTab) || AI_USE_CASES[0];

  return (
    <section
      className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-overlay"
      style={{ background: "#0c0c0a" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-[20%] left-[-5%] w-[50%] h-[50%] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "rgba(212, 253, 0, 0.05)" }}
      />
      <div
        className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(212, 253, 0, 0.04)" }}
      />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-4 sm:mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/50">
              Pionniers en IA
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white mb-4 sm:mb-5"
          >
            L&apos;IA nous rend plus rapides.{" "}
            <span className="text-[#D4FD00]">Nos consultants vous rendent meilleurs.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg font-[var(--font-body)] leading-relaxed"
          >
            On investit en continu dans l&apos;IA. Pas pour remplacer l&apos;expertise, mais pour donner
            a nos clients un avantage concurrentiel : plus de contenu, plus vite, mieux cible.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 sm:mb-10"
        >
          <div className="relative border-b border-white/10 overflow-x-auto scrollbar-hide">
            <div className="flex min-w-max">
              {AI_USE_CASES.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveTab(useCase.id)}
                  className={`
                    relative flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4
                    font-[var(--font-body)] font-semibold text-xs sm:text-sm tracking-[-0.01em]
                    transition-colors duration-200 whitespace-nowrap
                    ${activeTab === useCase.id ? "text-white" : "text-white/40 hover:text-white/70"}
                  `}
                >
                  <span
                    className={`
                      font-bold text-[10px] sm:text-[11px]
                      ${activeTab === useCase.id ? "text-[#D4FD00]" : "text-white/30"}
                    `}
                  >
                    {useCase.number}
                  </span>
                  <span>{useCase.label}</span>

                  {activeTab === useCase.id && (
                    <motion.div
                      layoutId="aiTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4FD00]"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {/* Main content */}
            <div className="lg:col-span-2 bg-white/[0.03] border border-white/[0.06] p-6 sm:p-8 md:p-10">
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-5 sm:mb-6 flex items-center justify-center bg-[#D4FD00]/10">
                <activeCase.icon size={24} className="text-[#D4FD00]" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-medium text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4 leading-snug">
                {activeCase.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm sm:text-base font-[var(--font-body)] leading-relaxed mb-6 sm:mb-8">
                {activeCase.description}
              </p>

              {/* Example */}
              <div className="bg-white/[0.03] border border-white/[0.06] p-4 sm:p-5">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#D4FD00] uppercase mb-2 block">
                  Exemple concret
                </span>
                <p className="text-white/80 text-sm font-[var(--font-body)] leading-relaxed">
                  {activeCase.example}
                </p>
              </div>
            </div>

            {/* Right column with image and metric */}
            <div className="flex flex-col gap-4">
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={activeCase.image}
                  alt={activeCase.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Metric card */}
              <div className="bg-[#D4FD00] p-6 sm:p-8 flex flex-col justify-center items-center text-center">
                <span className="font-[var(--font-body)] font-[900] text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#1a1a1a] leading-none mb-3">
                  {activeCase.metric}
                </span>
                <span className="text-sm font-[var(--font-body)] font-medium text-[#1a1a1a]/70">
                  Resultat type
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 sm:mt-14 p-5 sm:p-6 border border-white/10 bg-white/[0.02]"
        >
          <p className="text-white/60 text-sm sm:text-base font-[var(--font-body)] leading-relaxed text-center max-w-3xl mx-auto">
            <span className="text-white font-medium">Le principe :</span> L&apos;IA evolue, et nous avec.
            On se forme, on experimente, on integre en permanence. Mais chaque livrable est pilote
            et valide par un consultant experimente. L&apos;IA produit. L&apos;humain predomine.
            Le client en sort avec un avantage concurrentiel.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AIPioneersSection;
