"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Users, Zap, Shield, Award } from "lucide-react";

const FOUNDERS = [
  {
    name: "Lucas Gonzalez",
    role: "Cofondateur",
    badge: "Ex-top 300 LinkedIn France",
    expertise: ["Copywriting", "Positionnement produit", "Strategie d'acquisition", "IA marketing"],
    image: "/images/about/lucas-gonzalez.jpg",
    quote: true,
  },
  {
    name: "Hugo Schuppe",
    role: "Cofondateur",
    badge: "Expert technique",
    expertise: ["Automatisations", "Integrations", "Systemes d'information", "CRM"],
    image: "/images/about/hugo-schuppe.jpg",
    quote: false,
  },
];

const COLLECTIVE_ADVANTAGES = [
  { icon: Users, text: "Equipe senior des le jour 1" },
  { icon: Zap, text: "Flexibilite sans les couts d'une grosse agence" },
  { icon: Shield, text: "Continuite strategique" },
  { icon: Award, text: "Acces a des expertises pointues" },
];

export function TeamSection() {
  return (
    <section
      className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-light"
      style={{ background: "linear-gradient(135deg, #fafaf8 0%, #f0f0eb 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: "rgba(212, 253, 0, 0.04)" }}
      />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-4 sm:mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b]">
              L&apos;equipe Vizion
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]"
          >
            Ni agence usine. Ni freelance isole.{" "}
            <span className="text-[#6b6b6b]">Un collectif d&apos;experts pilote par ses fondateurs.</span>
          </motion.h2>
        </div>

        {/* Founders section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {FOUNDERS.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-black/[0.06] p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
                {/* Photo */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-black/5 shrink-0 relative overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="flex-1">
                  {/* Badge */}
                  <span className="inline-block px-2.5 py-1 bg-[#D4FD00]/10 text-[10px] font-bold tracking-wide text-[#1a1a1a] mb-3">
                    {founder.badge}
                  </span>

                  {/* Name & role */}
                  <h3 className="font-heading font-medium text-xl sm:text-2xl text-[#1a1a1a] mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-[#6b6b6b] font-[var(--font-body)] mb-4">
                    {founder.role}
                  </p>

                  {/* Expertise */}
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-black/5 text-[10px] font-semibold text-[#6b6b6b] tracking-wide"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 p-6 sm:p-8 md:p-10 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />
          <div className="relative z-10">
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-[var(--font-body)] leading-relaxed mb-4">
              &ldquo;On a construit notre expertise du messaging B2B sur le terrain.
              Aujourd&apos;hui, on met cette methodologie au service de nos clients.&rdquo;
            </p>
            <p className="text-sm text-white/50 font-[var(--font-body)]">
              — Lucas & Hugo, Cofondateurs
            </p>
          </div>
        </motion.div>

        {/* Collective model */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Visual diagram */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/[0.06] p-6 sm:p-8"
          >
            <h3 className="font-heading font-medium text-lg sm:text-xl text-[#1a1a1a] mb-6">
              Le modele collectif
            </h3>

            {/* Diagram */}
            <div className="space-y-6">
              {/* Core */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#D4FD00] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#1a1a1a]">NOYAU</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">Noyau dur de strateges</p>
                  <p className="text-xs text-[#6b6b6b]">Lucas et Hugo pilotent chaque mission</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-4 pl-8">
                <div className="w-[2px] h-8 bg-[#D4FD00]/30" />
              </div>

              {/* Specialists */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-black/5 flex items-center justify-center border border-black/10">
                  <span className="text-[10px] font-bold text-[#6b6b6b]">EXPERTS</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">Reseau de specialistes a la demande</p>
                  <p className="text-xs text-[#6b6b6b]">Designers, devs, media buyers, redacteurs</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-4 pl-8">
                <div className="w-[2px] h-8 bg-black/10" />
              </div>

              {/* Quality */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-black/5 flex items-center justify-center border border-black/10">
                  <CheckCircle2 size={20} className="text-[#D4FD00]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">Controle qualite</p>
                  <p className="text-xs text-[#6b6b6b]">Chaque livrable porte le standard Vizion</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#fafaf8] border border-black/[0.06] p-6 sm:p-8"
          >
            <h3 className="font-heading font-medium text-lg sm:text-xl text-[#1a1a1a] mb-6">
              Avantages client
            </h3>

            <div className="space-y-4">
              {COLLECTIVE_ADVANTAGES.map((advantage, index) => (
                <motion.div
                  key={advantage.text}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white border border-black/[0.04]"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#D4FD00]/10">
                    <advantage.icon size={18} className="text-[#D4FD00]" />
                  </div>
                  <span className="text-sm font-[var(--font-body)] font-medium text-[#1a1a1a]">
                    {advantage.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
