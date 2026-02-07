"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Building2, GraduationCap, ArrowRight } from "lucide-react";

const CITIES = [
  "Toulouse",
  "Bordeaux",
  "Montpellier",
  "Lyon",
  "Paris",
  "Nantes",
];

export function LocalSEOSection() {
  return (
    <section
      className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
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
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b]">
              Notre ancrage
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] mb-4 sm:mb-5"
          >
            L&apos;agence de marketing produit B2B a{" "}
            <span className="text-[#D4FD00]">Toulouse</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#6b6b6b] text-base sm:text-lg font-[var(--font-body)] leading-relaxed"
          >
            Bases a Toulouse, on accompagne les entreprises B2B d&apos;Occitanie et de toute la France.
            Proximite quand il faut, efficacite a distance quand c&apos;est mieux.
          </motion.p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#fafaf8] border border-black/[0.06] overflow-hidden group"
          >
            <div className="relative h-[300px] sm:h-[350px] lg:h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.1234567890123!2d1.5102!3d43.5416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDMyJzI5LjgiTiAxwrAzMCczNi43IkU!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Info cards */}
          <div className="space-y-4 sm:space-y-5">
            {/* Address card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#fafaf8] border border-black/[0.06] p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#D4FD00]/10 shrink-0">
                  <Building2 size={20} className="text-[#D4FD00]" />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-lg text-[#1a1a1a] mb-2">
                    Notre adresse
                  </h3>
                  <p className="text-sm text-[#6b6b6b] font-[var(--font-body)] leading-relaxed">
                    815 La Pyreneenne<br />
                    31670 Labege, France
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#fafaf8] border border-black/[0.06] p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#D4FD00]/10 shrink-0">
                  <GraduationCap size={20} className="text-[#D4FD00]" />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-lg text-[#1a1a1a] mb-2">
                    Preuve locale
                  </h3>
                  <p className="text-sm text-[#6b6b6b] font-[var(--font-body)] leading-relaxed">
                    Enseignant en strategie LinkedIn a Toulouse School of Management (TSM)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-black/[0.06] p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#D4FD00]/10 shrink-0">
                  <MapPin size={20} className="text-[#D4FD00]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-medium text-lg text-[#1a1a1a] mb-3">
                    Zones d&apos;intervention
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {CITIES.map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1.5 bg-black/5 text-xs font-semibold text-[#1a1a1a] tracking-wide"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="flex items-center justify-between p-5 sm:p-6 bg-[#1a1a1a] text-white group hover:bg-black transition-colors"
              >
                <span className="font-[var(--font-body)] font-semibold text-sm sm:text-base">
                  Rencontrons-nous a Toulouse
                </span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* SEO text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-14 p-5 sm:p-6 bg-[#fafaf8] border border-black/[0.06]"
        >
          <p className="text-[#6b6b6b] text-sm font-[var(--font-body)] leading-relaxed">
            Vizion est nee a Toulouse, au coeur d&apos;un ecosysteme tech et entrepreneurial en pleine
            acceleration. C&apos;est ici qu&apos;on a construit notre methodologie, au contact de startups,
            de PME industrielles et de reseaux de franchises qui avaient tous le meme besoin :
            etre plus clairs, plus vite. On travaille avec des entreprises a Toulouse, en Occitanie,
            et dans toute la France. Nos clients apprecient la proximite pour les ateliers strategiques
            et l&apos;efficacite du travail a distance pour l&apos;execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default LocalSEOSection;
