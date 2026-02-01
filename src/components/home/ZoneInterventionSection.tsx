"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { SectionDiagonalBottom } from "./shared/SectionDiagonal";

export function ZoneInterventionSection() {
  return (
    <>
      {/* SECTION ZONE D'INTERVENTION - Local SEO */}
      {/* SEO: Agence marketing Toulouse, Labège, Blagnac - zone géographique */}
      <section
        className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#F8F8F8] via-[#F4F4F4] to-[#F0F0F0] relative grain-light"
        aria-label="Zone d'intervention agence marketing Toulouse Occitanie"
      >
        {/* Ambient glow */}
        <div className="absolute top-[10%] right-[5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-bl from-blue-50/15 via-slate-50/8 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-3 sm:mb-4"
            >
              <div className="h-4 w-1 bg-gradient-to-b from-[#B78726]/30 via-[#B78726]/60 to-[#B78726]/40 rounded-full" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40">
                Notre zone d&apos;intervention
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="font-['Roboto'] font-[900] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight uppercase text-black mb-4 sm:mb-6"
            >
              Votre agence marketing à Toulouse et en Occitanie
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
              className="text-black/60 text-base sm:text-lg md:text-xl font-['Inter'] leading-relaxed max-w-2xl"
            >
              Basés à <strong>Labège (31670)</strong>, au cœur du technopôle toulousain, nous accompagnons les entreprises B2B de toute la région Occitanie.
            </motion.p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="relative rounded-xl overflow-hidden shadow-xl border border-black/5 h-[300px] sm:h-[400px] lg:h-full lg:min-h-[450px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.8876543210!2d1.5234567890!3d43.5456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7b7a8d%3A0x8b9b8c8d8e8f8a8b!2s815%20La%20Pyr%C3%A9n%C3%A9enne%2C%2031670%20Lab%C3%A8ge!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vizion - Agence Marketing B2B Toulouse Labège"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Local Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              {/* Address Card */}
              <div className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-['Roboto'] font-black text-lg sm:text-xl uppercase tracking-tight text-black mb-1">
                      Nos bureaux
                    </h3>
                    <p className="text-black/60 font-['Inter'] text-sm sm:text-base">
                      815 La Pyrénéenne<br />
                      31670 Labège, France
                    </p>
                  </div>
                </div>
                <p className="text-black/50 text-xs sm:text-sm font-['Inter'] leading-relaxed">
                  Situés sur le technopôle de Labège, à proximité immédiate de l&apos;aéroport Toulouse-Blagnac et du centre-ville de Toulouse.
                </p>
              </div>

              {/* Métropole Toulousaine - Primary Zone */}
              <div className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-xl p-6 sm:p-8 shadow-sm">
                <h3 className="font-['Roboto'] font-black text-lg sm:text-xl uppercase tracking-tight text-black mb-4">
                  Métropole Toulousaine
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { city: 'Toulouse', zip: '31000', landmark: 'Capitole, Airbus HQ' },
                    { city: 'Labège', zip: '31670', landmark: 'Technopôle, Innopole' },
                    { city: 'Blagnac', zip: '31700', landmark: 'Aéroport, Aéroconstellation' },
                    { city: 'Colomiers', zip: '31770', landmark: 'Zone Perget, En Jacca' },
                    { city: 'Ramonville', zip: '31520', landmark: 'Canal du Midi, CNES' },
                  ].map((zone, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-black/[0.02] border border-black/5">
                      <div className="w-2 h-2 rounded-full bg-black mt-1.5 shrink-0" />
                      <div>
                        <span className="font-['Roboto'] font-bold text-sm text-black block">
                          {zone.city} <span className="font-normal text-black/40">({zone.zip})</span>
                        </span>
                        <span className="text-xs text-black/50 font-['Inter']">{zone.landmark}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Région Occitanie - Secondary Zone */}
              <div className="bg-white/60 backdrop-blur-xl border border-black/5 rounded-xl p-6 sm:p-8 shadow-sm">
                <h3 className="font-['Roboto'] font-black text-base sm:text-lg uppercase tracking-tight text-black mb-3">
                  Interventions en Occitanie
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { city: 'Montauban', zip: '82000' },
                    { city: 'Albi', zip: '81000' },
                    { city: 'Castres', zip: '81100' },
                    { city: 'Auch', zip: '32000' },
                    { city: 'Tarbes', zip: '65000' },
                    { city: 'Carcassonne', zip: '11000' },
                    { city: 'Montpellier', zip: '34000' },
                    { city: 'Nîmes', zip: '30000' },
                    { city: 'Perpignan', zip: '66000' },
                  ].map((zone, i) => (
                    <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full bg-black/[0.03] border border-black/5 text-xs font-['Inter']">
                      <span className="font-semibold text-black/70">{zone.city}</span>
                      <span className="text-black/40 ml-1">({zone.zip})</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Trust + Remote */}
              <div className="space-y-2">
                <p className="text-black/40 text-xs sm:text-sm font-['Inter'] leading-relaxed">
                  <strong className="text-black/60">+70 entreprises</strong> de la métropole toulousaine et de l&apos;Aerospace Valley nous font confiance : PME, ETI et startups de l&apos;industrie, de la santé et du numérique.
                </p>
                <p className="text-black/40 text-xs sm:text-sm font-['Inter'] leading-relaxed">
                  <strong className="text-black/60">Accompagnement à distance</strong> pour les entreprises B2B partout en France : Paris, Lyon, Bordeaux, Marseille et au-delà.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Diagonal bottom → next section (Final CTA gray) */}
        <SectionDiagonalBottom fillColor="#F0F0F0" direction="left" />
      </section>
    </>
  );
}
