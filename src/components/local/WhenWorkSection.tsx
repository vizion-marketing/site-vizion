"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, ChevronRight, Zap, RefreshCw, Rocket } from 'lucide-react';
import Tabs from '@/components/ui/Tabs';

interface Situation {
  id: string;
  label: string;
  problems: string[];
  solution: string;
}

interface WhenWorkSectionProps {
  situations?: Situation[];
}

const DEFAULT_SITUATIONS: Situation[] = [
  {
    id: "ponctuel",
    label: "Projets Ponctuels",
    problems: [
      "Besoin immédiat d'une expertise technique spécifique pour un lancement.",
      "Surcharge temporaire des équipes internes sur un sprint critique.",
      "Manque de ressources pour développer une fonctionnalité complexe isolée."
    ],
    solution: "Nous intervenons en 'commando' pour absorber la charge technique. Vizion injecte immédiatement la seniorité nécessaire pour débloquer vos chantiers prioritaires sans alourdir durablement votre masse salariale."
  },
  {
    id: "restructuration",
    label: "Restructuration",
    problems: [
      "Dette technique paralysante ralentissant chaque nouveau déploiement.",
      "Processus de développement opaques et manque de visibilité sur les sorties.",
      "Difficulté à faire monter en compétence l'équipe technique existante."
    ],
    solution: "Un audit profond suivi d'une phase d'accompagnement. Nous redéfinissons vos standards de code, automatisons vos déploiements et coachons vos leads pour transformer votre tech d'un centre de coût en levier de croissance."
  },
  {
    id: "innovation",
    label: "Innovation",
    problems: [
      "Incertitude sur la faisabilité technique d'un nouveau produit R&D.",
      "Nécessité de sortir un MVP ultra-performant en un temps record.",
      "Besoin d'explorer des technologies émergentes (IA, Web3, Cloud Native)."
    ],
    solution: "Nous devenons votre bras armé R&D. De la conception de l'architecture à la mise en production du MVP, Vizion sécurise vos paris technologiques les plus audacieux avec une approche orientée 'Time to Market'."
  }
];

const ICONS: Record<string, React.ReactNode> = {
  ponctuel: <Zap className="w-4 h-4" />,
  restructuration: <RefreshCw className="w-4 h-4" />,
  innovation: <Rocket className="w-4 h-4" />,
};

export default function WhenWorkSection({ situations = DEFAULT_SITUATIONS }: WhenWorkSectionProps) {
  // Transform situations to Tabs format
  const tabs = situations.map((sit) => ({
    id: sit.id,
    label: sit.label,
    content: (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-8"
      >
        {/* Pain Points */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-bold uppercase tracking-wider border border-red-100">
            Points de friction identifiés
          </div>
          <ul className="space-y-4">
            {sit.problems.map((problem, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-start gap-4 p-4 rounded-xl border border-neutral-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mt-1 shrink-0">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                </div>
                <p className="font-['Inter'] text-neutral-600 font-medium leading-snug">
                  {problem}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="lg:col-span-7 h-full">
          <div className="bg-black rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-800 rounded-full blur-[80px] -mr-32 -mt-32 opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-['Inter'] text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-400">
                  La réponse Vizion
                </span>
              </div>

              <p className="font-['Inter'] text-xl md:text-2xl font-light leading-relaxed text-neutral-200 mb-8 italic">
                &ldquo;{sit.solution}&rdquo;
              </p>

              <div className="pt-8 border-t border-white/10 flex items-center justify-between group cursor-pointer">
                <span className="font-['Roboto'] text-sm font-bold uppercase tracking-widest">Discuter de ce cas</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    ),
  }));

  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Inter'] text-[11px] uppercase tracking-[0.3em] font-medium text-neutral-400 mb-6 block"
          >
            Product-Market Fit
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['Roboto'] font-black uppercase text-4xl md:text-5xl lg:text-6xl tracking-tighter text-neutral-950 leading-[0.95]"
          >
            Quand travailler <br />
            <span className="text-neutral-400">avec nous ?</span>
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs 
            tabs={tabs} 
            orientation="horizontal"
            defaultTab={situations[0].id}
          />
        </div>
      </div>
    </section>
  );
}

export { WhenWorkSection };
