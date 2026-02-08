"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const TABS = [
  { id: "strategie", label: "Stratégie" },
  { id: "ventes", label: "Ventes" },
  { id: "marketing", label: "Marketing" },
  { id: "operations", label: "Opérations" },
];

const TAB_CONTENT = {
  strategie: {
    title: "Stratégie",
    description: "Définissez votre positionnement, clarifiez votre proposition de valeur et construisez une architecture de message qui résonne avec votre marché cible.",
    image: "/images/assets/strategie-dashboard.png",
    link: "/services/strategie",
  },
  ventes: {
    title: "Ventes",
    description: "Équipez vos commerciaux avec des pitch decks percutants, des battle cards et des scripts d'appel qui raccourcissent vos cycles de vente.",
    image: "/images/assets/ventes-dashboard.png",
    link: "/services/ventes",
  },
  marketing: {
    title: "Marketing",
    description: "Créez des campagnes d'acquisition performantes, des landing pages optimisées et des contenus qui génèrent des leads qualifiés.",
    image: "/images/assets/marketing-dashboard.png",
    link: "/services/marketing",
  },
  operations: {
    title: "Opérations",
    description: "Automatisez vos processus marketing et commerciaux, déployez votre CRM et créez des intégrations sur mesure pour scaler vos opérations.",
    image: "/images/assets/operations-dashboard.png",
    link: "/services/operations",
  },
};

export function AssetsSection() {
  const [activeTab, setActiveTab] = useState("strategie");
  const content = TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT];

  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden grain-overlay"
      style={{ background: "#0c0c0a" }}
    >
      {/* Background gradients - same as hero */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#D4FD00] opacity-50"></span>
              <span className="relative inline-flex rounded-none h-2 w-2 bg-gradient-to-br from-[#D4FD00] via-[#D4FD00]/80 to-[#D4FD00]/50 shadow-[0_0_8px_rgba(212,253,0,0.5)]"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/60">
              NOS LIVRABLES
            </span>
          </div>

          <h2
            className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] mb-4"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.88) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Nous créons des assets exceptionnels pensés pour transformer vos prospects en clients.
          </h2>

          <p className="text-white/60 text-base font-[var(--font-body)] leading-relaxed">
            Tout au long du cycle de vente, nous concevons les outils qui font la différence.
          </p>
        </motion.div>

        {/* Glassmorphism Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex bg-white/10 backdrop-blur-md border border-white/20 rounded-none p-1.5 mb-10 sm:mb-14"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-[13px] sm:text-[14px] font-[var(--font-body)] font-medium transition-all duration-300 rounded-none ${
                activeTab === tab.id
                  ? "bg-white text-[#0c0c0a]"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Large Asset Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 relative"
          >
            <div className="relative rounded-none overflow-hidden border border-white/10 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={content.image}
                  alt={content.title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-auto"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200`;
                  }}
                />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Info Card - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-none p-6 sm:p-8"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-none bg-[#0c0c0a] flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4FD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-[24px] sm:text-[28px] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-4">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-[#6b6b6b] text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed mb-6">
                  {content.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={content.link}
                  className="inline-flex items-center justify-between w-full h-[52px] px-6 text-[14px] font-[var(--font-body)] font-semibold bg-[#0c0c0a] text-white rounded-none hover:bg-[#1a1a1a] transition-all duration-300"
                >
                  <span>En savoir plus</span>
                  <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AssetsSection;
