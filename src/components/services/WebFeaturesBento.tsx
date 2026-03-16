"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Search, Palette, Plug, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function WebFeaturesBento() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto">
        {/* Bento grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {/* Row 1 — Featured accent (2/3) + Perf metric (1/3) */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 dark-section grain-overlay p-8 sm:p-10 flex flex-col justify-between min-h-[260px] relative overflow-hidden"
            style={{ background: "var(--bg-dark)" }}
          >
            <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
              <TrendingUp size={18} className="text-white" />
            </div>
            <div>
              <h3 className="font-heading font-medium text-[22px] sm:text-[28px] leading-[1.1] tracking-[-0.02em] text-white mb-3">
                Conçu pour convertir,
                <br />
                pas juste pour plaire
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed max-w-lg">
                Chaque page, chaque CTA, chaque parcours utilisateur est pensé
                pour faire avancer votre prospect dans le cycle d&apos;achat.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="bg-card border border-black/[0.06] p-7 sm:p-8 flex flex-col justify-between min-h-[260px]"
          >
            <div className="w-10 h-10 bg-accent flex items-center justify-center">
              <Zap size={18} className="text-black" />
            </div>
            <div>
              <div className="text-[52px] font-bold text-primary leading-none mb-1">
                95+
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-primary mb-1">
                Score Google
              </h3>
              <p className="text-[13px] text-muted leading-relaxed">
                Performance, accessibilité, SEO — mesurés et maintenus dans la
                durée.
              </p>
            </div>
          </motion.div>

          {/* Row 2 — Image (1/3) + SEO (1/3) + Design (1/3) */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden min-h-[280px] border border-black/[0.06]"
          >
            <Image
              src="/images/why-vizion/equipe-vizion.avif"
              alt="L'équipe Vizion au travail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="bg-card border border-black/[0.06] p-7 sm:p-8 flex flex-col justify-between min-h-[280px]"
          >
            <div className="w-10 h-10 bg-accent flex items-center justify-center">
              <Search size={18} className="text-black" />
            </div>
            <div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary mb-2">
                SEO technique intégré dès la conception
              </h3>
              <p className="text-[13px] text-muted leading-relaxed">
                Schema.org, sitemap dynamique, Core Web Vitals, balises
                sémantiques — rien n&apos;est laissé au hasard.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="bg-card border border-black/[0.06] p-7 sm:p-8 flex flex-col justify-between min-h-[280px]"
          >
            <div className="w-10 h-10 bg-accent flex items-center justify-center">
              <Palette size={18} className="text-black" />
            </div>
            <div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary mb-2">
                Design 100% sur mesure
              </h3>
              <p className="text-[13px] text-muted leading-relaxed">
                Pas de template, pas de thème WordPress. Chaque site est conçu
                depuis une page blanche pour refléter votre identité.
              </p>
            </div>
          </motion.div>

          {/* Row 3 — Nouveau IA (2/3) + Intégrations (1/3) */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-accent p-7 sm:p-8 flex flex-col justify-between min-h-[240px]"
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.14em] text-black uppercase">
                Nouveau
              </span>
              <div className="w-1.5 h-1.5 bg-black/60 rounded-full" />
              <span className="text-[10px] font-medium tracking-[0.08em] text-black uppercase">
                Exclusif France
              </span>
            </div>
            <div>
              <h3 className="font-heading font-medium text-[20px] sm:text-[26px] leading-[1.1] tracking-[-0.02em] text-black mb-3">
                Vizion est la première agence en France à proposer des sites
                100% générés par IA — sans compromis sur la qualité.
              </h3>
              <p className="text-[14px] text-black/70 leading-relaxed max-w-2xl">
                En plus du développement traditionnel, nous proposons un nouveau
                format de sites plus agile et plus performant, développé en
                interne par nos développeurs IA. Même exigence. Délais réduits.
              </p>
            </div>
          </motion.div>

          {/* Row 3 cont. — Intégrations (1/3) + Dark (2/3) */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="bg-card border border-black/[0.06] p-7 sm:p-8 flex flex-col justify-between min-h-[240px]"
          >
            <div className="w-10 h-10 bg-accent flex items-center justify-center">
              <Plug size={18} className="text-black" />
            </div>
            <div>
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary mb-2">
                Intégrations CRM & outils
              </h3>
              <p className="text-[13px] text-muted leading-relaxed">
                HubSpot, Pipedrive, Notion, Zapier — votre site s&apos;intègre
                à votre stack commerciale.
              </p>
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}
