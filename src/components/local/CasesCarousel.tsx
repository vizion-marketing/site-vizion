"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Carousel } from '@/components/ui/Carousel';

interface CaseStudy {
  id: string | number;
  logo?: string;
  metric: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
}

interface CasesCarouselProps {
  cases?: CaseStudy[];
}

const DEFAULT_CASES: CaseStudy[] = [
  {
    id: '1',
    metric: '+40%',
    quote: 'Notre chiffre d\'affaires a explosé après la refonte de notre stratégie digitale avec Vizion.',
    author: 'Marie Dupont',
    role: 'CEO',
    company: 'TechStartup',
  },
  {
    id: '2',
    metric: '+120%',
    quote: 'Le ROI de nos campagnes a doublé en 3 mois grâce à leur approche data-driven.',
    author: 'Jean Martin',
    role: 'CMO',
    company: 'E-Commerce Plus',
  },
  {
    id: '3',
    metric: '-50%',
    quote: 'Nous avons réduit notre coût d\'acquisition de moitié tout en augmentant la qualité des leads.',
    author: 'Sophie Bernard',
    role: 'Directrice Marketing',
    company: 'SaaS Solutions',
  },
  {
    id: '4',
    metric: '+85%',
    quote: 'Nos conversions ont augmenté significativement grâce à l\'optimisation CRO.',
    author: 'Pierre Leclerc',
    role: 'Founder',
    company: 'Agence Digitale',
  },
];

const CaseCard: React.FC<{ item: CaseStudy; index: number }> = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group h-full bg-white border border-neutral-200 rounded-[var(--radius-lg)] p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
  >
    <div>
      <div className="flex justify-between items-start mb-8">
        {item.logo ? (
          <div className="h-8 w-auto grayscale group-hover:grayscale-0 transition-all duration-500">
            <img 
              src={item.logo} 
              alt={`${item.company || 'Client'} logo`} 
              className="h-full object-contain"
            />
          </div>
        ) : (
          <div className="font-['Roboto'] font-black text-lg uppercase tracking-tight text-neutral-300">
            {item.company || 'Client'}
          </div>
        )}
        <Quote className="text-neutral-200 group-hover:text-neutral-300 transition-colors" size={32} />
      </div>

      <div className="mb-6">
        <span className="block font-['Roboto'] text-4xl md:text-5xl font-black text-black tracking-tight mb-2">
          {item.metric}
        </span>
        <div className="h-1 w-12 bg-black transition-all duration-500 group-hover:w-24" />
      </div>

      <p className="font-['Inter'] text-lg text-neutral-700 italic leading-relaxed mb-8">
        &ldquo;{item.quote}&rdquo;
      </p>
    </div>

    <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full grayscale group-hover:grayscale-0 transition-all">
        <img
          src={`https://i.pravatar.cc/150?u=${item.id}`}
          alt={item.author}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-['Roboto'] font-bold text-black uppercase text-sm tracking-wide">
          {item.author}
        </span>
        <span className="font-['Inter'] text-xs text-neutral-500 font-medium">
          {item.role} {item.company && `• ${item.company}`}
        </span>
      </div>
    </div>
  </motion.div>
);

const CasesCarousel: React.FC<CasesCarouselProps> = ({ cases = DEFAULT_CASES }) => {
  if (!cases || cases.length === 0) return null;

  return (
    <section className="bg-[#F2F2F2] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <header className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Inter'] text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-4 block"
          >
            Success Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['Roboto'] text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] text-black"
          >
            Cas Clients & <br />
            <span className="text-neutral-400">Témoignages</span>
          </motion.h2>
        </header>

        {/* Carousel */}
        <Carousel
          showArrows={true}
          showDots={true}
          autoplay={false}
        >
          {cases.map((item, index) => (
            <CaseCard key={item.id} item={item} index={index} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CasesCarousel;
export { CasesCarousel };
