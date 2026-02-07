"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";

const APPROACH_STEPS = [
  {
    id: "product-marketing",
    label: "Product Marketing",
    description:
      "Positionnement, proposition de valeur, messaging par segment. Le socle stratégique sur lequel tout le reste repose.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
  },
  {
    id: "content-marketing",
    label: "Content Marketing",
    description:
      "SEO, articles, lead magnets, nurturing. Du contenu qui attire les bons prospects et les fait avancer dans le tunnel.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  },
  {
    id: "growth",
    label: "Growth Marketing",
    description:
      "Campagnes Meta, Google, LinkedIn Ads. Notoriété LinkedIn dirigeants. Acquisition multicanale alignée sur le positionnement.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
  },
  {
    id: "sales-enablement",
    label: "Sales Enablement",
    description:
      "Pitch decks, battle cards, scripts d'appel, objection handling. Vos commerciaux pitchent avec les mêmes mots que la pub.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800",
  },
  {
    id: "marketing-automation",
    label: "Marketing Automation",
    description:
      "CRM, workflows, séquences email, intégrations. On industrialise vos processus pour que rien ne passe entre les mailles.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
  },
];

export function ApproachSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="bg-[#f8f8f6] py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] text-black mb-8 sm:mb-12"
        >
          Un seul message,<br />
          du clic au closing.
        </motion.h2>

        {/* Full width image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-12 sm:mb-16 overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000"
            alt="Équipe en réunion stratégique"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Section title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading font-medium text-[24px] sm:text-[28px] md:text-[32px] leading-[1.2] tracking-[-0.02em] text-black mb-8 sm:mb-10"
        >
          Notre approche
        </motion.h3>

        {/* Services list */}
        <div className="relative">
          {APPROACH_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(step.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative border-t border-black/10 last:border-b"
            >
              <div className="py-6 sm:py-8 flex items-center gap-4 sm:gap-8 cursor-pointer">
                {/* Label */}
                <div className="w-[120px] sm:w-[160px] md:w-[200px] shrink-0">
                  <span className="font-heading font-medium text-[16px] sm:text-[18px] md:text-[20px] text-black group-hover:text-black/70 transition-colors">
                    {step.label}
                  </span>
                </div>

                {/* Description */}
                <div className="flex-1 hidden sm:block">
                  <p className="text-[14px] sm:text-[15px] text-black/50 font-[var(--font-body)] leading-relaxed line-clamp-2">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <ArrowUpRightIcon
                    size={20}
                    className="text-black/30 group-hover:text-black group-hover:translate-x-0.5 transition-all"
                  />
                </div>
              </div>

              {/* Hover image */}
              <AnimatePresence>
                {hoveredId === step.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-16 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden lg:block"
                  >
                    <div className="relative w-[280px] h-[180px] rounded-lg overflow-hidden shadow-2xl">
                      <Image
                        src={step.image}
                        alt={step.label}
                        fill
                        className="object-cover"
                      />
                      {/* Accent */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 bg-[#D4FD00] rounded-full flex items-center justify-center">
                        <ArrowUpRightIcon size={18} className="text-black" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApproachSection;
