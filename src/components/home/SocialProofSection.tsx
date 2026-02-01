"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { SectionDiagonalBottom } from "./shared/SectionDiagonal";

// Client Cases Data for Social Proof Tabs
const clientCases = [
  {
    id: 'easyvirtual',
    name: 'easyVirtual.tours',
    badge: 'Filiale easyJet',
    metric: '0 → 25',
    metricLabel: 'Franchises en 1 an',
    problematique: "Assurer le déploiement en franchise d'une filiale d'easyJet et la soutenir dans sa croissance nationale.",
    category: 'Direction Marketing Externalisée',
    tags: ['Direction Marketing', 'Franchise', 'Déploiement'],
    slug: 'franchise-services-domicile',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ensenat',
    name: 'Ensenat Coaching',
    badge: 'Sport Premium',
    metric: '+1000%',
    metricLabel: 'Trafic SEO en 3 mois',
    problematique: "Restructurer le marketing d'un groupe de salles de sport premium pour limiter les coûts et générer du revenu.",
    category: 'SEO & Content Marketing',
    tags: ['SEO', 'Content', 'Performance'],
    slug: 'reseau-local-seo',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'eldo',
    name: 'Eldo Wallet',
    badge: 'Fintech B2B',
    metric: '0 → 10K€',
    metricLabel: 'MRR atteint',
    problematique: "Appuyer les équipes d'Eldo Wallet dans leur stratégie commerciale et go-to-market B2B.",
    category: 'Go-to-Market & Sales',
    tags: ['GTM', 'Sales', 'Fintech'],
    slug: 'fintech-b2b',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'olivier',
    name: 'Olivier Bas',
    badge: 'VP Havas Paris',
    metric: '1M',
    metricLabel: 'Vues LinkedIn générées',
    problematique: "Générer de la visibilité LinkedIn pour le Vice-Président d'Havas Paris et asseoir son personal branding.",
    category: 'Personal Branding LinkedIn',
    tags: ['LinkedIn', 'Personal Branding', 'Influence'],
    slug: 'cabinet-conseil-rh',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  }
];

// Social Proof Section Component
// SEO: Showcases client success stories for "agence marketing Toulouse" credibility
// Images: 800x400px (16:8) for case visuals, 56x56px circle for testimonial avatar
export function SocialProofSection() {
  const [activeClient, setActiveClient] = useState<string>('easyvirtual');
  const currentCase = clientCases.find(c => c.id === activeClient) || clientCases[0];

  return (
    <section
      className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#F8F8F8] via-[#F2F2F2] to-[#E8E8E8] relative grain-light"
      aria-label="Témoignages clients agence marketing Toulouse"
    >
      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-br from-amber-200/10 via-yellow-100/5 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-black/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header - Premium SaaS Style */}
        <div className="max-w-3xl mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3 sm:mb-4"
          >
            <div className="h-4 w-1 bg-gradient-to-b from-white via-amber-200 to-amber-400/50 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.3)]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40">
              {homeContent.preuveSociale.surtitre}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="font-['Roboto'] font-[900] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight uppercase text-black mb-4 sm:mb-6"
          >
            {homeContent.preuveSociale.h2}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            className="text-black/60 text-base sm:text-lg md:text-xl font-['Inter'] leading-relaxed max-w-2xl"
          >
            {homeContent.preuveSociale.description}
          </motion.p>
        </div>

        {/* Main Grid - Premium Glassmorphism Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {/* Navigation - Glassmorphism List */}
          <div className="lg:col-span-4">
            {/* Mobile: Horizontal scroll tabs */}
            <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {clientCases.map((client) => (
                <button
                  key={client.id}
                  onClick={() => setActiveClient(client.id)}
                  className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-left transition-all duration-300 ${
                    activeClient === client.id
                      ? "bg-black text-white shadow-lg"
                      : "bg-white/70 backdrop-blur-sm border border-black/5 text-black"
                  }`}
                >
                  <span className={`font-['Roboto'] font-black text-sm uppercase tracking-tight block ${
                    activeClient === client.id ? "text-white" : "text-black/80"
                  }`}>
                    {client.category}
                  </span>
                </button>
              ))}
            </div>

            {/* Desktop: Vertical list */}
            <div className="hidden lg:block lg:sticky lg:top-24 space-y-3">
              {clientCases.map((client, index) => (
                <motion.button
                  key={client.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, type: "spring", stiffness: 300, damping: 25 }}
                  onClick={() => setActiveClient(client.id)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.995 }}
                  className={`group w-full text-left p-5 rounded-xl transition-all duration-300 relative ${
                    activeClient === client.id
                      ? "bg-black text-white shadow-2xl shadow-black/20"
                      : "bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-black"
                  }`}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <span className={`font-['Roboto'] font-black text-lg uppercase tracking-tight block transition-colors duration-200 ${
                        activeClient === client.id ? "text-white" : "text-black/80"
                      }`}>
                        {client.category}
                      </span>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider transition-colors duration-200"
                        style={{ color: activeClient === client.id ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)' }}
                      >
                        {client.name}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      activeClient === client.id ? "bg-white/20 backdrop-blur-sm border border-white/10 shadow-[0_0_12px_rgba(255,255,255,0.1)]" : "bg-black/5 opacity-0 group-hover:opacity-100"
                    }`}>
                      <ArrowRight size={14} className={activeClient === client.id ? "text-white" : "text-black/40"} />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content Display - Premium Glassmorphism Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClient}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/90 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg overflow-hidden shadow-sm"
              >
                {/* Visual Header */}
                <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1] w-full group overflow-hidden">
                  <Image
                    src={currentCase.image}
                    alt={`Cas client ${currentCase.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Metric Badge - Glassmorphism Overlay */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <span className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/90 backdrop-blur-md text-black text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-lg border border-white/20">
                        {currentCase.badge}
                      </span>
                      <h3 className="text-white text-xl sm:text-2xl font-['Roboto'] font-black uppercase leading-tight drop-shadow-lg">
                        {currentCase.name}
                      </h3>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-xl sm:text-right min-w-[120px] sm:min-w-[140px]">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-['Roboto'] font-[900] text-white block leading-none mb-1 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        {currentCase.metric}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        {currentCase.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
                    <div className="flex-1">
                      <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-black/40 mb-2 sm:mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 shadow-[0_0_6px_rgba(251,191,36,0.4)]" />
                        Vision Stratégique
                      </span>
                      <p className="text-base sm:text-lg font-['Inter'] text-black/70 leading-relaxed">
                        {currentCase.problematique}
                      </p>
                    </div>
                    <div className="md:w-1/3 flex flex-col justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {currentCase.tags.map((tag, i) => (
                          <span key={i} className="px-2 sm:px-2.5 py-1 sm:py-1.5 bg-black/5 backdrop-blur-sm border border-black/5 text-black/60 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/cas-clients/${currentCase.slug}`}
                        className="btn-glow group flex items-center justify-center gap-2 h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] bg-black text-white rounded-full hover:bg-black/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 border border-black/50 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3)]"
                      >
                        Voir le case study
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform arrow-hover" style={{ color: 'rgba(255,255,255,0.8)' }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Premium Glassmorphism Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24"
        >
          <div className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] backdrop-blur-xl border border-white/10 rounded-md sm:rounded-lg p-5 sm:p-8 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Carbon fibre pattern */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-gradient-to-br from-white/10 via-amber-100/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8">
                <Quote className="mb-4 sm:mb-6" size={32} strokeWidth={2} style={{ color: 'rgba(183, 135, 38, 0.6)' }} />
                <blockquote className="text-lg sm:text-xl md:text-2xl font-['Inter'] font-medium leading-relaxed mb-6 sm:mb-8 tracking-tight" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  &ldquo;{homeContent.preuveSociale.testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <Image
                      src={`https://i.pravatar.cc/56?u=${homeContent.preuveSociale.testimonial.name}`}
                      alt={homeContent.preuveSociale.testimonial.name}
                      width={56}
                      height={56}
                      className="w-11 h-11 sm:w-14 sm:h-14 object-cover rounded-full border-2 border-white/20 grayscale hover:grayscale-0 transition-all duration-300 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center shadow-lg shadow-white/20 border border-white/20">
                      <CheckCircle2 size={10} className="text-black sm:hidden" />
                      <CheckCircle2 size={12} className="text-black hidden sm:block" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-['Roboto'] font-black uppercase tracking-wider text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      {homeContent.preuveSociale.testimonial.name}
                    </h4>
                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mt-0.5" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      {homeContent.preuveSociale.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-full max-w-[200px] sm:max-w-[240px] p-5 sm:p-8 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-xl text-center shadow-lg">
                  <div className="text-3xl sm:text-4xl font-['Roboto'] font-black mb-1 sm:mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]" style={{ color: 'rgba(255,255,255,0.8)' }}>98%</div>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-tight" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Taux de satisfaction<br/>client post-campagne
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Ecosystem - Clean Minimalist with Hover Effects */}
        <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 md:pt-10 border-t border-black/5 flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-0.5 text-center md:text-left">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-black/30">Partnership Network</span>
            <p className="text-[11px] sm:text-[12px] font-medium text-black/50">Écosystème de marques leaders</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {['easyJet', 'Havas', 'Elis', 'BNP', 'Salesforce'].map((logo, i) => (
              <span
                key={i}
                className="font-['Roboto'] font-black text-base sm:text-lg uppercase tracking-tight text-black/20 hover:text-black/60 transition-all duration-300 cursor-default hover:-translate-y-0.5"
              >
                {logo}
              </span>
            ))}
          </div>

          <Link
            href="/cas-clients"
            className="group flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-black hover:text-black/70 transition-all"
          >
            <span>Découvrir tous nos succès</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:shadow-md group-hover:-translate-y-0.5 transition-all duration-300">
              <ArrowRight size={12} />
            </div>
          </Link>
        </div>
      </div>
      {/* Diagonal bottom → next section (Piliers gray) */}
      <SectionDiagonalBottom fillColor="#F2F2F2" direction="right" />
    </section>
  );
}
