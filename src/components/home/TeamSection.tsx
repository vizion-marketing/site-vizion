"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { homeContent } from "@/content/home";

const TEAM = [
  {
    name: "Lucas Gonzalez",
    role: "Cofondateur",
    specialty: "STRATÉGIE & ACQUISITION",
    image: "/images/about/lucas-gonzalez.jpg",
  },
  {
    name: "Hugo Schuppe",
    role: "Cofondateur",
    specialty: "TECHNIQUE & SYSTÈMES",
    image: "/images/about/hugo-schuppe.jpg",
  },
];

export function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-white">
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header centré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2.5 mb-4 sm:mb-5">
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.2em] text-[#6b6b6b] uppercase">
              {homeContent.equipe.surtitre}
            </span>
          </div>
          <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] mb-4 sm:mb-5">
            {homeContent.equipe.h2.replace(
              homeContent.equipe.h2Highlight,
              ""
            ).trim()}
            {homeContent.equipe.h2Highlight && (
              <span className="text-[#1a1a1a] font-medium">
                {" "}
                {homeContent.equipe.h2Highlight}
              </span>
            )}
          </h2>
          <p className="text-[#6b6b6b] text-base sm:text-lg font-[var(--font-body)] leading-relaxed mb-8">
            {homeContent.equipe.description}
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 sm:h-14 px-6 sm:px-8 text-[13px] sm:text-[15px] font-[var(--font-body)] font-semibold tracking-[-0.01em] bg-[#1a1a1a] text-white rounded-full hover:bg-[#0a0a0a] hover:-translate-y-0.5 transition-all duration-300 active:scale-95 items-center justify-center gap-2 border border-[#1a1a1a]"
          >
            Échanger avec nous
            <ArrowRight size={18} className="shrink-0" />
          </Link>
        </motion.div>

        {/* Galerie horizontale – cartes profil */}
        <div className="relative -mx-4 sm:-mx-6 md:-mx-12">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide px-4 sm:px-6 md:px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] snap-center"
              >
                <div className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 shadow-xl h-full flex flex-col">
                  {/* Badge en haut à gauche */}
                  <div className="p-4 sm:p-5 flex items-center gap-2">
                    <Zap size={14} className="text-[#D4FD00] shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-white/90 uppercase">
                      {member.specialty}
                    </span>
                  </div>

                  {/* Photo avec dégradé vert/lime derrière */}
                  <div className="relative px-4 sm:px-5 pb-4 flex-1 min-h-[280px] sm:min-h-[300px] flex flex-col items-center">
                    <div className="relative w-full aspect-[3/4] max-h-[320px] rounded-lg overflow-hidden p-1.5">
                      {/* Dégradé vert / sarcelle en cadre derrière le portrait */}
                      <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background:
                            "linear-gradient(160deg, rgba(212, 253, 0, 0.4) 0%, rgba(0, 200, 180, 0.35) 50%, rgba(20, 20, 20, 0.9) 100%)",
                        }}
                      />
                      <div className="relative w-full h-full rounded-md overflow-hidden z-10">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, 320px"
                        />
                      </div>
                    </div>

                    {/* Nom et rôle sous le portrait */}
                    <div className="w-full mt-4 text-center">
                      <p className="font-heading font-medium text-lg sm:text-xl text-white tracking-[-0.02em]">
                        {member.name}
                      </p>
                      <p className="text-sm text-white/70 font-[var(--font-body)] mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Indice de défilement (optionnel) */}
        {TEAM.length > 2 && (
          <p className="text-center text-[10px] sm:text-[11px] font-light tracking-widest text-[#6b6b6b] mt-6">
            {homeContent.equipe.scrollHint}
          </p>
        )}
      </div>
    </section>
  );
}

export default TeamSection;
