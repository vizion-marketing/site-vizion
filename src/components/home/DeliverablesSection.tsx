"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Globe, Megaphone, Presentation, Linkedin, Users } from "lucide-react";

const DELIVERABLES = [
  {
    id: "strategie",
    title: "Strategie & positionnement",
    icon: Compass,
    items: [
      "Matrice de positionnement",
      "Messaging framework",
      "Proposition de valeur",
      "Analyse concurrentielle & battle cards",
      "Strategie go-to-market",
    ],
    span: "wide" as const,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600",
  },
  {
    id: "sites",
    title: "Sites web & landing pages",
    icon: Globe,
    items: [
      "Sites produit",
      "Landing pages de conversion",
      "Pages de vente",
      "Optimisation SEO produit",
    ],
    span: "normal" as const,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
  },
  {
    id: "campagnes",
    title: "Campagnes publicitaires",
    icon: Megaphone,
    items: [
      "Strategie d'acquisition",
      "Meta, Google, LinkedIn Ads",
      "Messages & visuels",
      "A/B testing",
    ],
    span: "normal" as const,
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=600",
  },
  {
    id: "sales",
    title: "Sales enablement",
    icon: Presentation,
    items: [
      "Pitch decks",
      "Scripts d'appel",
      "Objection handling",
      "Sequences de relance",
      "Propositions commerciales",
    ],
    span: "normal" as const,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600",
  },
  {
    id: "linkedin",
    title: "Notoriete LinkedIn",
    icon: Linkedin,
    items: [
      "Strategie de contenu dirigeant",
      "Ghostwriting",
      "Optimisation de profil",
      "Generation de leads LinkedIn",
    ],
    span: "tall" as const,
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=600",
  },
  {
    id: "employeur",
    title: "Marque employeur",
    icon: Users,
    items: [
      "Positionnement employeur",
      "Pages carrieres",
      "Campagnes de recrutement",
    ],
    span: "wide" as const,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600",
  },
];

export function DeliverablesSection() {
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
              Ce qu&apos;on produit
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]"
          >
            Des livrables concrets. Pas des slides qui restent dans un tiroir.
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-[minmax(200px,auto)]">
          {DELIVERABLES.map((item, index) => {
            const spanClasses = {
              normal: "",
              wide: "sm:col-span-2 lg:col-span-2",
              tall: "sm:row-span-2",
              featured: "sm:col-span-2 sm:row-span-2",
            };

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className={`
                  group relative overflow-hidden
                  bg-[#fafaf8] border border-black/[0.06]
                  hover:border-[#D4FD00]/30 hover:-translate-y-1
                  transition-all duration-300
                  ${spanClasses[item.span]}
                `}
              >
                {/* Image preview - shown on wide/tall cards */}
                {(item.span === "wide" || item.span === "tall") && (
                  <div className="relative h-32 sm:h-40 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fafaf8]" />
                  </div>
                )}

                <div className="p-5 sm:p-6 md:p-7 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-5 flex items-center justify-center bg-black/5 group-hover:bg-[#D4FD00]/10 transition-colors">
                    <item.icon size={20} className="text-[#1a1a1a] group-hover:text-[#D4FD00] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-medium text-lg sm:text-xl text-[#1a1a1a] mb-3 sm:mb-4">
                    {item.title}
                  </h3>

                  {/* Items list */}
                  <ul className="space-y-2 flex-1">
                    {item.items.map((listItem, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#6b6b6b] font-[var(--font-body)]"
                      >
                        <span className="text-[#D4FD00] mt-0.5">•</span>
                        {listItem}
                      </li>
                    ))}
                  </ul>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4FD00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DeliverablesSection;
