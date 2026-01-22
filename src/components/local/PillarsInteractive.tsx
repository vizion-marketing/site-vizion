"use client";

import React from 'react';
import { Target, Package, Rocket, Settings, CheckCircle2, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { AccordionHorizontal } from '@/components/ui/AccordionHorizontal';

interface PillarItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
}

interface PillarsInteractiveProps {
  pillars?: PillarItem[];
}

const DEFAULT_PILLARS: PillarItem[] = [
  {
    id: '01',
    title: 'Stratégie',
    icon: Target,
    description: 'La fondation de votre croissance. Nous définissons un cap clair basé sur l\'analyse data et le positionnement marché.',
    details: [
      'Audit complet de l\'écosystème digital',
      'Analyse concurrentielle et benchmark',
      'Définition des OKRs et KPIs',
      'Roadmap stratégique trimestrielle'
    ]
  },
  {
    id: '02',
    title: 'Marketing Produit',
    icon: Package,
    description: 'Aligner votre offre aux attentes du marché. Nous travaillons sur la perception de valeur et la clarté du message.',
    details: [
      'Messaging et Copywriting haute performance',
      'Optimisation du tunnel de conversion',
      'Product-Market Fit alignment',
      'Stratégie de pricing et packaging'
    ]
  },
  {
    id: '03',
    title: 'Acquisition',
    icon: Rocket,
    description: 'Générer un flux constant de leads qualifiés via les leviers les plus rentables pour votre business.',
    details: [
      'Campagnes Ads (Google, Meta, LinkedIn)',
      'Stratégie SEO & Content Marketing',
      'Growth Outbound & Social Selling',
      'Optimisation du coût d\'acquisition'
    ]
  },
  {
    id: '04',
    title: 'Automatisation',
    icon: Settings,
    description: 'Libérer votre temps et scaler vos processus grâce à des systèmes intelligents et intégrés.',
    details: [
      'Mise en place et optimisation CRM',
      'Automatisations marketing (Workflows)',
      'Lead Scoring & Nurturing system',
      'Tableaux de bord automatisés'
    ]
  }
];

export const PillarsInteractive: React.FC<PillarsInteractiveProps> = ({ 
  pillars = DEFAULT_PILLARS 
}) => {
  // Transform pillars to AccordionHorizontal format
  const accordionItems = pillars.map((pillar) => ({
    id: pillar.id,
    title: pillar.title,
    icon: pillar.icon,
    description: pillar.description,
    content: (
      <div className="space-y-4">
        {pillar.details.map((detail, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-neutral-600 font-['Inter']">{detail}</span>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <section className="bg-[#F2F2F2] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[82.5rem] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Inter'] text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-4 block"
          >
            Notre Méthode
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['Roboto'] font-black text-4xl md:text-5xl leading-[1.1] uppercase tracking-tight text-neutral-900"
          >
            Nos 4 Piliers <br className="hidden md:block" /> 
            <span className="text-neutral-400">Performance</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <AccordionHorizontal items={accordionItems} />
      </div>
    </section>
  );
};

export default PillarsInteractive;
