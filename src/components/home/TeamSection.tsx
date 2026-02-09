"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { homeContent } from "@/content/home";

const SOCIAL_LINK = "https://www.linkedin.com/company/vizion-marketing-b2b/";

export function TeamSection() {
  const { equipe } = homeContent;
  const members = equipe.members.slice(0, 5);
  const [expandedIndex, setExpandedIndex] = useState(0);

  // Ordre : carte dépliée en premier, puis les repliées
  const orderedMembers = [
    members[expandedIndex],
    ...members.filter((_, i) => i !== expandedIndex),
  ];

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      style={{ background: "#f0f0eb" }}
    >
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Colonne gauche — Titre + description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.2em] text-[#6b6b6b] uppercase block mb-4">
              {equipe.surtitre}
            </span>
            <h2 className="font-heading font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[0.95] tracking-[-0.03em] text-[#1a1a1a] mb-6">
              Notre <span className="bg-[#D4FD00]/30">équipe</span>
            </h2>
            <p className="text-[#6b6b6b] text-base sm:text-lg font-[var(--font-body)] leading-relaxed max-w-md mb-8">
              {equipe.description}
            </p>
            <a
              href={SOCIAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-[48px] px-6 text-[14px] font-[var(--font-body)] font-semibold bg-black text-white rounded-full hover:bg-black/90 transition-colors group"
            >
              Découvrir sur LinkedIn
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Colonne droite — Accordéon de cartes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="flex items-stretch justify-start gap-0 h-[340px] sm:h-[380px] md:h-[440px] overflow-x-auto overflow-y-visible scrollbar-hide pb-2">
              {orderedMembers.map((member, displayIndex) => {
                const isExpanded = displayIndex === 0;
                const originalIndex = members.indexOf(member);

                return (
                  <motion.button
                    key={member.name}
                    onClick={() => setExpandedIndex(originalIndex)}
                    layout
                    initial={false}
                    animate={{
                      width: isExpanded ? 260 : 85,
                      minWidth: isExpanded ? 200 : 70,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                    }}
                    className={`relative rounded-xl overflow-hidden border border-black/[0.06] bg-white flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#D4FD00] focus:ring-offset-2 ${
                      isExpanded
                        ? "shadow-[0_12px_40px_-12px_rgba(0,0,0,0.2)] z-10"
                        : "shadow-sm -ml-6 sm:-ml-8 hover:z-[5]"
                    }`}
                  >
                    <div className="relative w-full h-full min-w-0">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 220px, 320px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                      {isExpanded ? (
                        /* Carte dépliée — détails complets */
                        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 text-left">
                          <p className="font-heading font-semibold text-white text-[20px] sm:text-[24px] leading-tight">
                            {member.name}
                          </p>
                          <p className="text-[11px] sm:text-[12px] font-[var(--font-body)] text-white/90 tracking-wider uppercase mt-1 mb-3">
                            {member.specialty}
                          </p>
                          <p className="text-[13px] sm:text-[14px] font-[var(--font-body)] text-white/80 leading-relaxed line-clamp-2">
                            {member.role} — {member.skills.slice(0, 2).join(", ")}
                          </p>
                        </div>
                      ) : (
                        /* Carte repliée — texte vertical sur le côté */
                        <div className="absolute inset-0 flex items-center justify-end pr-2 sm:pr-3">
                          <span
                            className="text-white text-[10px] sm:text-[11px] font-[var(--font-body)] font-semibold tracking-wider uppercase whitespace-nowrap overflow-hidden"
                            style={{
                              writingMode: "vertical-rl",
                              textOrientation: "mixed",
                              transform: "rotate(180deg)",
                              maxHeight: "70%",
                            }}
                          >
                            {member.specialty}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
