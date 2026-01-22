"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, User } from "lucide-react";
import { Carousel } from "@/components/ui/Carousel";

interface Expert {
  id: string | number;
  name: string;
  specialty: string;
  years: number;
  photo?: string;
}

interface ExpertsSliderProps {
  experts?: Expert[];
}

const DEFAULT_EXPERTS: Expert[] = [
  { id: '1', name: 'Jean Dupont', specialty: 'SEO & Content', years: 12 },
  { id: '2', name: 'Marie Martin', specialty: 'Data & IA', years: 8 },
  { id: '3', name: 'Pierre Bernard', specialty: 'Acquisition Ads', years: 10 },
  { id: '4', name: 'Sophie Leclerc', specialty: 'UX & CRO', years: 7 },
  { id: '5', name: 'Thomas Richard', specialty: 'Growth Marketing', years: 9 },
  { id: '6', name: 'Julie Lambert', specialty: 'Automatisation', years: 6 },
];

function ExpertCard({ expert, index }: { expert: Expert; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full p-8 bg-white border border-neutral-100 rounded-2xl text-center flex flex-col items-center transition-all duration-500 hover:shadow-xl hover:border-neutral-200"
    >
      {/* Avatar */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-neutral-100 rounded-full scale-110 opacity-0 group-hover:opacity-40 transition-all duration-500 group-hover:scale-125" />
        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-md z-10">
          <img
            src={expert.photo || `https://i.pravatar.cc/300?u=${expert.id}`}
            alt={expert.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        {/* Years badge */}
        <div className="absolute -bottom-2 right-0 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full z-20 shadow-lg border-2 border-white">
          {expert.years} ANS
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col items-center">
        <h3 className="font-['Roboto'] text-xl font-black text-neutral-900 mb-1 group-hover:text-black transition-colors duration-300">
          {expert.name}
        </h3>
        <p className="font-['Inter'] text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
          {expert.specialty}
        </p>
        
        <div className="mt-auto pt-6 border-t border-neutral-50 w-full flex justify-center gap-6">
          <div className="flex flex-col items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
            <Award size={16} className="text-neutral-400" />
            <span className="text-[9px] font-bold text-neutral-400 uppercase">Expertise</span>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
            <Briefcase size={16} className="text-neutral-400" />
            <span className="text-[9px] font-bold text-neutral-400 uppercase">Projets</span>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
            <User size={16} className="text-neutral-400" />
            <span className="text-[9px] font-bold text-neutral-400 uppercase">Profil</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExpertsSlider({ experts = DEFAULT_EXPERTS }: ExpertsSliderProps) {
  if (!experts || experts.length === 0) return null;

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="container px-6 mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Inter'] text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-4 block"
          >
            Système de Talents
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['Roboto'] text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] text-neutral-900"
          >
            Notre Collectif <br /> 
            <span className="text-neutral-400">d'Experts</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <Carousel
          showArrows={true}
          showDots={true}
          autoplay={true}
          autoplayInterval={4000}
        >
          {experts.map((expert, index) => (
            <ExpertCard key={expert.id} expert={expert} index={index} />
          ))}
        </Carousel>

        {/* Progress indicator */}
        <div className="mt-12 max-w-xs">
          <div className="flex items-center gap-4">
            <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              {experts.length} Experts disponibles
            </span>
            <div className="flex-1 h-[2px] bg-neutral-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-black"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ExpertsSlider };
