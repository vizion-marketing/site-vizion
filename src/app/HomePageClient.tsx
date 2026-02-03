"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Zap,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Star,
  Target,
  Rocket,
  Settings2,
  Users,
  Quote,
  Brain,
  Shield,
  Lightbulb,
  ChevronDown,
  MapPin,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeContent, faqSchema, organizationSchema } from "@/content/home";
import { ImagePlaceholder } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// Types
interface Post {
  slug: string;
  title: string;
  description?: string;
  date: string;
  category?: string;
  readingTime?: string;
  featuredImage?: string;
  draft?: boolean;
}

interface HomePageClientProps {
  latestPosts: Post[];
}

// Format date helper
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// FAQ Data from content file
const faqData = homeContent.faq.questions;

// Diagonal Divider Component - Placed at bottom of sections (inside)
function SectionDiagonalBottom({
  fillColor = '#F2F2F2',
  direction = 'left'
}: {
  fillColor?: string;
  direction?: 'left' | 'right'
}) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-6 sm:h-8 md:h-10 pointer-events-none z-20">
      <svg
        className="w-full h-full block"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
      >
        <polygon
          points={direction === 'left' ? "0,40 1440,0 1440,40" : "0,0 1440,40 0,40"}
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

// Client Cases Data for Social Proof Tabs
const clientCases = [
  {
    id: 'easyvirtual',
    name: 'easyVirtual.tours',
    intro: "Une filiale du groupe easyJet lance un concept de visites virtuelles immobilières et vise un déploiement en franchise sur le territoire national.",
    problematique: "Découvrez comment nous avons accompagné une filiale du groupe Easy dans son développement national et international.",
    stats: [
      { value: '0 → 25', label: 'Franchises en 1 an' },
      { value: '3', label: 'Pays couverts' },
      { value: '100%', label: 'Outils de vente livrés' },
    ],
    actions: ['Positionnement de marque franchise', 'Création des outils d\'aide à la vente', 'Déploiement du plan marketing national', 'Mise en place du CRM et automatisations'],
    category: 'PropTech',
    slug: 'franchise-services-domicile',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    logo: 'https://placehold.co/400x400/0a0a0a/ffffff?text=easyVirtual',
  },
  {
    id: 'ensenat',
    name: 'Ensenat Coaching',
    intro: "Un groupe de salles de sport premium multi-sites fait face à des coûts marketing élevés et un manque de visibilité locale.",
    problematique: "Découvrez comment nous avons aidé Ensenat Coaching à rationaliser ses coûts marketing pour une meilleure performance.",
    stats: [
      { value: '+1000%', label: 'Trafic SEO en 3 mois' },
      { value: '-40%', label: 'Coûts marketing' },
      { value: '5', label: 'Sites optimisés' },
    ],
    actions: ['Audit SEO technique et sémantique', 'Stratégie de contenu locale multi-sites', 'Optimisation des pages de conversion', 'Reporting et suivi de performance'],
    category: 'Groupe Multi-Marques',
    slug: 'reseau-local-seo',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    logo: 'https://placehold.co/400x400/0a0a0a/ffffff?text=Ensenat',
  },
  {
    id: 'elis',
    name: 'Groupe Elis',
    intro: "Le leader européen de l'hygiène et du bien-être au travail cherche à accélérer sa croissance externe en identifiant des cibles d'acquisition.",
    problematique: "Découvrez comment nous avons accompagné le groupe Elis dans l'identification de cédants potentiels.",
    stats: [
      { value: '12', label: 'Cédants identifiés' },
      { value: '3', label: 'Secteurs cartographiés' },
      { value: '200+', label: 'Entreprises analysées' },
    ],
    actions: ['Cartographie du marché cible', 'Identification et qualification des cédants', 'Stratégie d\'approche personnalisée', 'Mise en relation et suivi'],
    category: 'Hygiène',
    slug: 'eti-manufacturing',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    logo: 'https://placehold.co/400x400/0a0a0a/ffffff?text=Elis',
  },
  {
    id: 'olivier',
    name: 'Olivier Bas',
    intro: "Le Vice-Président d'Havas Paris souhaite structurer sa présence LinkedIn pour asseoir son expertise et générer des opportunités.",
    problematique: "Découvrez comment nous avons accompagné le Vice-Président d'Havas Paris dans sa stratégie de personal branding.",
    stats: [
      { value: '1M', label: 'Vues LinkedIn' },
      { value: '15K+', label: 'Nouveaux abonnés' },
      { value: '48', label: 'Posts publiés' },
    ],
    actions: ['Stratégie éditoriale LinkedIn', 'Rédaction et publication régulière', 'Développement du réseau ciblé', 'Analyse des performances et itération'],
    category: 'Ressources Humaines',
    slug: 'cabinet-conseil-rh',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    logo: 'https://placehold.co/400x400/0a0a0a/ffffff?text=Havas',
  },
  {
    id: 'ecard',
    name: 'e-card',
    intro: "Un éditeur de cartes de visite digitales peine à se différencier sur un marché saturé et doit repositionner son offre.",
    problematique: "Découvrez comment nous avons accompagné e-card dans leur repositionnement marketing.",
    stats: [
      { value: 'Nouveau', label: 'Positionnement marché' },
      { value: '3x', label: 'Leads qualifiés' },
      { value: '100%', label: 'Refonte message' },
    ],
    actions: ['Audit de positionnement', 'Redéfinition de la proposition de valeur', 'Refonte de l\'architecture de message', 'Déploiement de la nouvelle stratégie'],
    category: 'SaaS',
    slug: 'saas-marketing-automation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    logo: 'https://placehold.co/400x400/0a0a0a/ffffff?text=e-card',
  },
  {
    id: 'eldo',
    name: 'Eldo Wallet',
    intro: "Une startup fintech lance un portefeuille numérique B2B et doit construire sa stratégie d'acquisition de zéro.",
    problematique: "Découvrez comment nous avons accompagné Eldo Wallet dans leur stratégie go-to-market.",
    stats: [
      { value: '0 → 10K€', label: 'MRR atteint' },
      { value: '50+', label: 'Prospects qualifiés' },
      { value: '1', label: 'Pitch deck investisseurs' },
    ],
    actions: ['Définition du positionnement B2B', 'Construction du pitch deck investisseurs', 'Stratégie d\'acquisition outbound', 'Mise en place du pipeline commercial'],
    category: 'Retail',
    slug: 'fintech-b2b',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop',
    logo: 'https://placehold.co/400x400/0a0a0a/ffffff?text=Eldo',
  }
];

// Social Proof Tabs Component
// SEO: Showcases client success stories for "agence marketing Toulouse" credibility
// Images: 800x400px (16:8) for case visuals, 56x56px circle for testimonial avatar
function SocialProofTabs() {
  const [activeClient, setActiveClient] = useState<string>('easyvirtual');
  const currentCase = clientCases.find(c => c.id === activeClient) || clientCases[0];

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative grain-light overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fafaf8 0%, #f0f0eb 100%)' }}
      aria-label="Témoignages clients agence marketing Toulouse"
    >
      {/* Ambient glow — distant warm light behind bento */}
      <div className="absolute top-[35%] left-[25%] w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[#c8ff00] opacity-[0.045] rounded-full blur-[200px] pointer-events-none" />
      {/* Geometric depth blob */}
      <div className="absolute -bottom-[10%] right-[5%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#f0f0ea] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-[800px] mb-10 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-4 sm:mb-5"
          >
            <div className="w-2 h-2 rounded-full bg-[#c8ff00]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#6b6b6b]">
              {homeContent.preuveSociale.surtitre}
            </span>
          </motion.div>
          <div className="flex gap-4 sm:gap-5">
            <div className="w-[3px] shrink-0 mt-2 h-10 bg-[#c8ff00] rounded-full" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Roboto'] font-[900] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] uppercase text-[#1a1a1a]"
            >
              {homeContent.preuveSociale.h2}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#6b6b6b] text-base font-['Inter'] leading-relaxed max-w-[600px] mt-5 sm:mt-6"
          >
            {homeContent.preuveSociale.description}
          </motion.p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Tab Navigation — wrapped grid on mobile, inline on desktop */}
          <div className="grid grid-cols-2 gap-2 sm:flex sm:overflow-x-auto sm:pb-4 sm:gap-4 md:gap-5 sm:no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {clientCases.map((client, index) => (
              <button
                key={client.id}
                onClick={() => setActiveClient(client.id)}
                className={`group flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 sm:px-6 py-2.5 sm:py-3 rounded-[8px] transition-all duration-300 sm:flex-shrink-0 sm:whitespace-nowrap ${
                  activeClient === client.id
                    ? "bg-[#0a0a0a] text-white border border-[#c8ff00]/30"
                    : "bg-white/60 sm:bg-transparent text-[#1a1a1a] hover:bg-[#e8e8e8] border border-black/5 sm:border-black/0 sm:hover:border-black/5"
                }`}
              >
                <span className={`font-['Roboto'] font-[900] text-[10px] sm:text-xs leading-none transition-colors duration-300 ${
                  activeClient === client.id ? "text-[#c8ff00]" : "text-black/20 group-hover:text-[#c8ff00]"
                }`}>
                  0{index + 1}
                </span>
                <span className="font-['Inter'] font-medium text-[11px] sm:text-[14px] leading-none">
                  {client.category}
                </span>
              </button>
            ))}
          </div>

          {/* Premium Editorial Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeClient}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 relative"
            >
              {/* CELL 1: TITRE / PROBLÉMATIQUE + STATS (2 Cols) */}
              <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden rounded-[8px] border border-black/10 p-5 sm:p-8 lg:p-12 flex flex-col justify-between min-h-[280px] sm:min-h-[380px] lg:min-h-[440px] bg-white">
                <div className="absolute inset-0 grain-light opacity-30 pointer-events-none" />
                <div className="absolute -bottom-12 -right-12 text-[80px] sm:text-[180px] lg:text-[240px] font-['Roboto'] font-black text-black/[0.03] select-none pointer-events-none leading-none">
                  0{clientCases.findIndex(c => c.id === activeClient) + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
                    <div className="w-2 h-2 rounded-full bg-[#c8ff00]" />
                    <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#6b6b6b]">
                      {currentCase.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-['Inter'] text-[#999] leading-relaxed mb-3 sm:mb-5 max-w-xl">
                    {currentCase.intro}
                  </p>

                  <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-['Roboto'] font-[900] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
                    {currentCase.problematique}
                  </h3>
                </div>

                {/* Stats row */}
                <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-3 mt-6 sm:mt-8">
                  {currentCase.stats.map((stat, i) => (
                    <div key={i} className="bg-[#fafaf8] border border-black/[0.06] rounded-[8px] p-3 sm:p-4 lg:p-5 flex flex-col gap-1 sm:gap-1.5">
                      <span className="text-lg sm:text-2xl lg:text-3xl font-['Roboto'] font-[900] tracking-[-0.02em] text-[#1a1a1a] leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-['Inter'] font-semibold uppercase tracking-wider text-[#999] leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CELL 2: LOGO CLIENT (1 Col) — image plein bloc */}
              <div className="relative rounded-[8px] overflow-hidden border border-black/10 bg-[#0a0a0a] min-h-[200px] sm:min-h-[280px] md:min-h-0 flex items-center justify-center">
                <Image
                  src={currentCase.logo}
                  alt={`Logo ${currentCase.name}`}
                  fill
                  className="object-contain p-8 sm:p-12 lg:p-14"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* CELL 3: ACTIONS (1 Col) */}
              <div className="md:col-span-1 lg:col-span-1 bg-[#0a0a0a] rounded-[8px] overflow-hidden border border-black/10 p-5 sm:p-8 lg:p-10 flex flex-col relative">
                <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-4 sm:mb-8 flex items-center gap-2">
                  <span className="w-4 h-px bg-white/20" /> Stratégie &amp; Impact
                </h4>
                <ul className="flex-1 space-y-0 divide-y divide-white/5">
                  {currentCase.actions.map((action, i) => (
                    <li key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0 group/item">
                      <span className="text-[10px] font-black font-['Roboto'] text-[#c8ff00] mt-1 opacity-60 group-hover/item:opacity-100 transition-opacity">
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                      <span className="text-sm font-['Inter'] text-white/70 leading-snug group-hover/item:text-white transition-colors">
                        {action}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Execution</div>
                  <div className="flex gap-1">
                    {[1,2,3,4].map(dot => <div key={dot} className="w-3 h-1 rounded-full bg-[#c8ff00]" />)}
                  </div>
                </div>
              </div>

              {/* CELL 4: IMAGE & CTA (2 Cols) */}
              <div className="md:col-span-2 lg:col-span-2 relative group aspect-[16/10] sm:aspect-[16/9] md:aspect-[2/1] lg:aspect-auto lg:min-h-[280px] rounded-[8px] overflow-hidden border border-black/10">
                <Image
                  src={currentCase.image}
                  alt={currentCase.name}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out opacity-40 group-hover:opacity-60"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 sm:px-4 py-1 sm:py-1.5 rounded-[8px] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Voir l&apos;étude</span>
                </div>

                <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-end items-start">
                  <Link
                    href={`/cas-clients/${currentCase.slug}`}
                    className="h-[40px] sm:h-[48px] px-5 sm:px-7 text-[12px] sm:text-[14px] font-['Inter'] font-semibold tracking-[-0.01em] flex items-center justify-center gap-2 rounded-[8px] bg-white text-black border border-white/50 transition-all duration-300 hover:bg-white/95 hover:-translate-y-0.5"
                  >
                    <span>Découvrir le cas complet</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA vers cas clients */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
          <Link
            href="/cas-clients"
            className="group flex items-center gap-2 sm:gap-3 text-[11px] sm:text-[13px] font-['Inter'] font-semibold uppercase tracking-wider text-black hover:text-black/70 transition-all"
          >
            <span>Découvrir tous nos cas clients</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[8px] bg-black border border-black text-white flex items-center justify-center group-hover:bg-transparent group-hover:text-black group-hover:-translate-y-0.5 transition-all duration-300">
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

// FAQ Section Component
// SEO: Questions fréquentes agence marketing Toulouse
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white via-white to-[#FAFAF8] relative grain-light"
      aria-label="Questions fréquentes agence marketing Toulouse"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-bl from-amber-50/30 via-orange-50/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-gradient-to-tr from-slate-100/40 to-transparent rounded-full blur-[100px] pointer-events-none" />
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[82.5rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16">
          {/* Left - Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 bg-white/60 backdrop-blur-xl border border-black/10 rounded-lg sm:rounded-xl p-5 sm:p-8 shadow-sm">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4"
              >
                {homeContent.faq.surtitre}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-['Roboto'] font-[900] text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.1] tracking-tight uppercase text-black mb-4 sm:mb-6"
              >
                {homeContent.faq.h2}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-black/60 text-sm sm:text-base font-['Inter'] leading-relaxed mb-5 sm:mb-8"
              >
                {homeContent.faq.description}
              </motion.p>

              <Link
                href={homeContent.faq.ctaButton.href}
                className="inline-flex items-center gap-2 h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] rounded-full transition-all duration-300 active:scale-95 bg-black text-white border border-black/50 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-black/90 hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 group w-full sm:w-auto justify-center"
              >
                {homeContent.faq.ctaButton.text}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-2 sm:space-y-3">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`rounded-md sm:rounded-lg overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-white shadow-sm border border-black/15'
                      : 'bg-white/80 backdrop-blur-xl border border-black/10 shadow-sm hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-3 sm:p-4 md:p-5 flex items-center justify-between text-left group gap-3"
                  >
                    <span className="font-['Roboto'] font-bold text-xs sm:text-sm tracking-tight text-black group-hover:text-black/80 transition-colors pr-2">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-black text-white'
                          : 'bg-white/80 backdrop-blur-sm border border-black/5 text-black group-hover:bg-white group-hover:shadow-sm'
                      }`}
                    >
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 sm:hidden ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 hidden sm:block ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-3 sm:px-5 pb-3 sm:pb-5 text-black/50 font-['Inter'] text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Diagonal bottom → next section (Map section gray) */}
      <SectionDiagonalBottom fillColor="#F8F8F8" direction="left" />
    </section>
  );
}

// Assets Portfolio Card with 3D tilt effect
const PortfolioAssetCard = ({
  title,
  category,
  description,
  image,
  className,
}: {
  title: string;
  category: string;
  description: string;
  image: string;
  className?: string;
}) => {
  const [imageError, setImageError] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative group h-full min-h-[320px] rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm overflow-hidden transition-colors hover:border-white/20 ${className}`}
    >
      {/* Image de fond ou placeholder */}
      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#3a3a3a] to-[#1a1a1a] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white/30 text-xs uppercase tracking-wider">Ajoutez votre image</p>
              <p className="text-white/20 text-[10px] mt-1">{image.split('/').pop()}</p>
            </div>
          </div>
        )}
        {/* Overlay gradient pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
      </div>

      {/* Contenu texte */}
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full flex flex-col justify-end p-8">
        <span className="text-[11px] font-normal uppercase tracking-[1.65px] text-[#B7B7B7] mb-2 block">{category}</span>
        <h3 className="font-['Roboto'] text-xl font-black uppercase text-white leading-none tracking-tight mb-3">
          {title}
        </h3>
        <p className="font-['Inter'] text-sm text-[#B7B7B7] max-w-[280px]">
          {description}
        </p>
      </div>

      {/* Decorative gradient flare on hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
    </motion.div>
  );
};

// Assets Portfolio Section
function AssetsPortfolioSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="mb-12 md:mb-20">
          <span className="text-[11px] font-normal uppercase tracking-[1.65px] text-[#F2F2F2] opacity-70 mb-4 block">Portfolio d&apos;Expertise</span>
          <h2 className="font-['Roboto'] font-black text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.035em] uppercase text-white max-w-3xl">
            Nous produisons des assets marketing de <span className="text-[#B7B7B7]">haute qualité</span> pour bâtir votre autorité sur votre marché
          </h2>
        </div>

        {/*
          INSTRUCTIONS POUR REMPLACER LES IMAGES :
          Uploadez vos images dans /public/assets/ avec ces noms :
          - plaquettes.jpg (ratio 16:9 recommandé)
          - publicites.jpg (ratio 1:1 recommandé)
          - landing-pages.jpg (ratio 9:16 recommandé - vertical)
          - sales-deck.jpg (ratio 16:9 recommandé)
          - social-media.jpg (ratio 1:1 recommandé)
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[340px]">

          {/* 1. Plaquettes A4 - Big span */}
          <div className="md:col-span-8 md:row-span-1">
            <PortfolioAssetCard
              category="Édition"
              title="Plaquettes A4"
              description="Brochures institutionnelles et fiches produits haut de gamme."
              image="/assets/plaquettes.jpg"
            />
          </div>

          {/* 2. Publicités - Small span */}
          <div className="md:col-span-4 md:row-span-1">
            <PortfolioAssetCard
              category="Performance"
              title="Publicités"
              description="Campagnes display et formats print."
              image="/assets/publicites.jpg"
            />
          </div>

          {/* 3. Landing Pages - Tall span */}
          <div className="md:col-span-4 md:row-span-2">
            <PortfolioAssetCard
              category="Digital"
              title="Landing Pages"
              description="Conversion optimisée et design orienté utilisateur pour vos leads."
              image="/assets/landing-pages.jpg"
              className="h-full"
            />
          </div>

          {/* 4. Sales Deck - Small span */}
          <div className="md:col-span-4 md:row-span-1">
            <PortfolioAssetCard
              category="Vente"
              title="Sales Deck"
              description="Présentations commerciales stratégiques."
              image="/assets/sales-deck.jpg"
            />
          </div>

          {/* 5. Réseaux Sociaux - Small span */}
          <div className="md:col-span-4 md:row-span-1">
            <PortfolioAssetCard
              category="Notoriété"
              title="Contenu Social"
              description="Posts LinkedIn et visuels engageants."
              image="/assets/social-media.jpg"
            />
          </div>

        </div>
      </div>

      {/* Diagonal bottom → next section (Quand Commencer white) */}
      <SectionDiagonalBottom fillColor="#FFFFFF" direction="right" />
    </section>
  );
}

export default function HomePageClient({ latestPosts }: HomePageClientProps) {
  // State for IA Slider
  const [currentIASlide, setCurrentIASlide] = useState(0);

  return (
    <main className="min-h-screen bg-white font-['Inter'] selection:bg-black selection:text-white">
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-20 sm:pt-24 md:pt-[80px] pb-10 sm:pb-12 md:pb-[40px] px-4 sm:px-6 md:px-12 bg-black flex items-center min-h-[100svh] overflow-hidden grain-overlay">
        {/* Premium Mesh Gradient Background - Left Half Only */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(at 40% 50%, rgba(238, 255, 65, 0.08) 0%, transparent 50%),
              radial-gradient(at 10% 15%, rgba(238, 255, 65, 0.05) 0%, transparent 40%),
              radial-gradient(at 60% 85%, rgba(238, 255, 65, 0.04) 0%, transparent 45%),
              radial-gradient(at 20% 75%, rgba(238, 255, 65, 0.04) 0%, transparent 40%)
            `
          }}
        />

        <div className="max-w-[82.5rem] mx-auto w-full relative z-10 lg:grid lg:grid-cols-2 lg:gap-6 lg:items-stretch">
          {/* CONTENT AREA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="w-full p-4 sm:p-6 md:p-8 relative z-10 flex flex-col justify-center gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EEFF41] opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[#EEFF41] via-[#EEFF41]/80 to-[#EEFF41]/50 shadow-[0_0_8px_rgba(238,255,65,0.5)]"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.1em] uppercase" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {homeContent.hero.badge}
              </span>
            </div>

            <h1 className="font-['Roboto'] font-[900] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-[1.08] tracking-[0.02em] uppercase text-white">
              {(() => {
                const h1 = homeContent.hero.h1;
                const highlight = homeContent.hero.h1Highlight;
                const parts = h1.split(highlight);
                return (
                  <>
                    {parts[0]}
                    <motion.span
                      className="inline"
                      style={{ backgroundSize: '200% 100%', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}
                      initial={{ color: 'rgba(255,255,255,1)', backgroundImage: 'linear-gradient(90deg, #EEFF41 0%, #EEFF41 0%, rgba(255,255,255,1) 0%)' }}
                      animate={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, #EEFF41 0%, #EEFF41 100%, rgba(255,255,255,1) 100%)' }}
                      transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
                    >
                      {highlight}
                    </motion.span>
                    {parts[1]}
                  </>
                );
              })()}
            </h1>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {homeContent.hero.baseline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pb-4 border-b border-white/10">
              {homeContent.hero.badges.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-tight" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <CheckCircle2 size={14} className="shrink-0" style={{ color: '#EEFF41' }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 mt-4">
              <Link href={homeContent.hero.cta.primary.href} className="h-[44px] sm:h-[48px] px-5 sm:px-7 text-[13px] sm:text-[14px] font-['Inter'] font-semibold tracking-[-0.01em] flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-white text-black border border-white/50 shadow-[0_4px_24px_-1px_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.5)] hover:bg-white/95 hover:shadow-[0_8px_32px_-4px_rgba(255,255,255,0.35),inset_0_1px_0_0_rgba(255,255,255,0.6)] hover:-translate-y-0.5">
                {homeContent.hero.cta.primary.text} <ArrowRight size={16} />
              </Link>
              <Link href={homeContent.hero.cta.secondary.href} className="h-[44px] sm:h-[48px] px-5 sm:px-7 text-[13px] sm:text-[14px] font-['Inter'] font-semibold tracking-[-0.01em] flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5">
                {homeContent.hero.cta.secondary.text}
              </Link>
            </div>

            {/* Logo slider */}
            <div className="relative overflow-hidden w-full mt-4" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
              <div className="flex animate-scroll-left gap-8 w-max">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-8 items-center shrink-0">
                    {[
                      { name: "easyVirtual.tours", src: "/images/clients/easyvirtual.svg" },
                      { name: "Eldo Wallet", src: "/images/clients/eldo.svg" },
                      { name: "Ensenat Coaching", src: "/images/clients/ensenat.svg" },
                      { name: "Olivier Bas", src: "/images/clients/olivierbas.svg" },
                      { name: "Précision Industries", src: "/images/clients/precision.svg" },
                      { name: "SaaS Corp", src: "/images/clients/saas.svg" },
                    ].map((logo) => (
                      <img
                        key={`${setIndex}-${logo.name}`}
                        src={logo.src}
                        alt={logo.name}
                        className="h-6 sm:h-7 w-auto opacity-50 hover:opacity-80 transition-opacity brightness-0 invert"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="relative z-30 group overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl aspect-[4/3] lg:aspect-auto"
          >
            <img
              src="/hero-binoculars.png"
              alt="Strategie"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Fade overlays — bottom and right */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent z-10" />
            {/* Glassmorphism UI Overlays */}
            {/* 1. Scatter plot (top-left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden lg:block absolute top-10 left-12 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-md p-4 shadow-lg"
            >
              <svg width="96" height="48" viewBox="0 0 96 48" fill="none">
                <defs>
                  <linearGradient id="curveGrad" x1="0" y1="48" x2="96" y2="0">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="100%" stopColor="#EEFF41" />
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="48">
                    <stop offset="0%" stopColor="#EEFF41" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#EEFF41" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0 42 C8 40, 16 38, 24 34 C32 30, 40 28, 48 24 C56 20, 60 16, 68 13 C76 10, 84 6, 96 2"
                  stroke="url(#curveGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
                />
                <motion.path
                  d="M0 42 C8 40, 16 38, 24 34 C32 30, 40 28, 48 24 C56 20, 60 16, 68 13 C76 10, 84 6, 96 2 L96 48 L0 48 Z"
                  fill="url(#areaGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                />
              </svg>
            </motion.div>

            {/* 2. Équipe disponible — CTA téléphone (bottom-left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="hidden lg:block absolute bottom-20 left-5 z-20"
            >
              <a
                href="tel:+33750836543"
                className="block bg-white/10 backdrop-blur-md border border-white/20 rounded-md p-4 shadow-lg hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EEFF41]/15 flex items-center justify-center group-hover:bg-[#EEFF41]/25 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EEFF41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold leading-tight">Notre équipe est disponible</div>
                    <div className="text-white/70 text-[11px] font-bold mt-0.5">07 50 83 65 43</div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      <span className="text-[#EEFF41]/70 text-[10px] font-semibold group-hover:text-[#EEFF41] transition-colors">Nous appeler</span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* 3. Social proof — +70 clients (bottom-right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="hidden lg:block absolute bottom-36 right-5 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-md p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="text-white font-['Roboto'] font-black text-2xl leading-none">+70</div>
                <div>
                  <div className="text-white text-xs font-semibold leading-tight">clients accompagnés</div>
                  <div className="text-white/40 text-[10px] font-medium mt-0.5">De la PME à l'ETI</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* Diagonal bottom → next section (gray) */}
        <SectionDiagonalBottom fillColor="#F2F2F2" direction="left" />
      </section>

      {/* SOCIAL PROOF SECTION - Tabs Interactifs */}
      <SocialProofTabs />


      {/* 5 PILIERS SECTION - PREMIUM GLASSMORPHISM */}
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#F8F8F8] via-[#F2F2F2] to-[#EAEAEA] relative grain-light"
        aria-label="Services agence marketing B2B Toulouse"
      >
        {/* Background ambient light - Enhanced with multiple gradients */}
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-amber-100/15 via-orange-50/8 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-gradient-to-tl from-slate-200/20 via-white/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Header - Refined */}
          <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
            >
              <div className="h-[1px] w-6 sm:w-8 bg-black/20" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-black/50">
                {homeContent.piliers.surtitre}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Roboto'] font-[900] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1] tracking-tight uppercase text-black mb-4 sm:mb-6 md:mb-8"
            >
              {homeContent.piliers.h2}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-black/60 text-base sm:text-lg font-['Inter'] leading-relaxed max-w-2xl"
            >
              {homeContent.piliers.description}
            </motion.p>
          </div>

          {/* Bento Grid - Premium Glassmorphism SaaS Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
            {/* PILIER 01 - Main Dark Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-7 lg:row-span-2 bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] backdrop-blur-xl border border-white/10 rounded-md sm:rounded-lg p-5 sm:p-8 md:p-10 flex flex-col min-h-[400px] sm:min-h-[450px] lg:min-h-[550px] relative overflow-hidden group shadow-2xl shadow-black/30 hover:shadow-black/40 hover:border-white/20 transition-all duration-300"
            >
              {/* Carbon fibre pattern */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.01] pointer-events-none rounded-xl" />

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-white/20">
                    <span className="font-black text-xs sm:text-sm text-black">{homeContent.piliers.piliers[0].numero}</span>
                  </div>
                  <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      {homeContent.piliers.piliers[0].surtitre}
                    </span>
                  </div>
                </div>

                <h3 className="font-['Roboto'] font-[900] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-tight uppercase mb-4 sm:mb-6 group-hover:opacity-90 transition-opacity duration-300" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {homeContent.piliers.piliers[0].titre}
                </h3>
                <p className="text-sm sm:text-base font-['Inter'] leading-relaxed mb-5 sm:mb-8 max-w-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {homeContent.piliers.piliers[0].description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-10">
                  {homeContent.piliers.piliers[0].services.map((item) => (
                    <span key={item} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 text-[9px] sm:text-[10px] font-bold rounded-lg uppercase tracking-wide hover:bg-white/15 hover:border-white/20 transition-all duration-200" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto hidden sm:block">
                  <ImagePlaceholder
                    width={600}
                    height={240}
                    label="Stratégie & Performance"
                    rounded="lg"
                    variant="dark"
                    className="w-full border border-white/10 rounded-xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* LIGHT GLASSMORPHISM CARDS (02-05) */}
            {[
              { idx: 1, Icon: Target, span: "lg:col-span-5" },
              { idx: 2, Icon: Rocket, span: "lg:col-span-5" },
              { idx: 3, Icon: Users, span: "lg:col-span-6" },
              { idx: 4, Icon: Settings2, span: "lg:col-span-6" }
            ].map(({ idx, Icon, span }, i) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className={`${span} bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg p-4 sm:p-5 md:p-7 flex flex-col group shadow-sm card-hover-glow transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-black/5 backdrop-blur-sm border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:shadow-lg group-hover:shadow-black/20 transition-all duration-300">
                      <Icon className="text-black group-hover:text-white transition-colors" size={18} strokeWidth={2.5} />
                    </div>
                    <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-black/5 backdrop-blur-sm border border-black/10 rounded-lg">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/60">
                        {homeContent.piliers.piliers[idx].surtitre}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-[12px] font-black text-black/10 group-hover:text-black/25 transition-colors">0{idx + 1}</span>
                </div>
                <h4 className="font-['Roboto'] font-black text-base sm:text-lg uppercase mb-2 sm:mb-3 tracking-tight text-black">{homeContent.piliers.piliers[idx].titre}</h4>
                <p className="text-[13px] sm:text-[14px] text-black/60 font-['Inter'] leading-relaxed mb-4 sm:mb-6 flex-1">{homeContent.piliers.piliers[idx].description}</p>

                <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {homeContent.piliers.piliers[idx].services.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 sm:px-2.5 py-1 sm:py-1.5 bg-black/5 backdrop-blur-sm border border-black/5 text-black/70 text-[9px] sm:text-[10px] font-bold rounded-lg uppercase tracking-tight hover:bg-black/10 transition-all duration-200">{tag}</span>
                    ))}
                  </div>
                  {idx === 4 && (
                    <div className="flex items-center gap-2 bg-black text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-lg">
                      <span className="text-[8px] sm:text-[9px] font-bold opacity-50 uppercase">ROI</span>
                      <span className="text-[11px] sm:text-xs font-black text-white">x4.5</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA - Premium Glassmorphism Style */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 rounded-md sm:rounded-lg bg-white/80 backdrop-blur-xl border border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left">
              <div className="flex -space-x-3">
                {[5, 6, 7].map((i) => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-md ring-1 ring-black/5">
                    <Image src={`https://i.pravatar.cc/40?u=${i+30}`} alt="Client" width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-black/60 font-['Inter'] leading-tight">
                <span className="block font-bold text-black text-xs sm:text-sm mb-0.5">{homeContent.piliers.socialProofText}</span>
                Rejoignez les leaders du secteur
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full md:w-auto">
              <Link
                href={homeContent.piliers.cta.secondary.href}
                className="w-full sm:w-auto h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] text-black bg-black/5 backdrop-blur-sm border border-black/10 rounded-full hover:bg-black/10 hover:border-black/15 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 flex items-center justify-center"
              >
                {homeContent.piliers.cta.secondary.text}
              </Link>
              <Link
                href={homeContent.piliers.cta.primary.href}
                className="w-full sm:w-auto h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] bg-black text-white rounded-full hover:bg-black/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 border border-black/50 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3)]"
              >
                {homeContent.piliers.cta.primary.text} <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Diagonal bottom → next section (Assets Portfolio) */}
        <SectionDiagonalBottom fillColor="#B7B7B7" direction="left" />
      </section>

      {/* ASSETS PORTFOLIO SECTION */}
      <AssetsPortfolioSection />

      {/* SECTION QUAND COMMENCER */}
      {/* SEO: Offres et tarifs agence marketing Toulouse */}
      {/* Images: 400x240px (5:3) pour les visuels des offres */}
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-white via-[#FEFEFE] to-[#FAFAF8] relative grain-light"
        aria-label="Offres et formules agence marketing Toulouse"
      >
        {/* Ambient glow */}
        <div className="absolute top-[15%] left-[-5%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-br from-blue-50/20 via-slate-50/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[0%] w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-gradient-to-tl from-amber-50/15 via-orange-50/8 to-transparent rounded-full blur-[110px] pointer-events-none" />
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4"
            >
              {homeContent.quandCommencer.surtitre}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Roboto'] font-[900] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight uppercase text-black mb-4 sm:mb-6"
            >
              {homeContent.quandCommencer.h2}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-black/60 text-base sm:text-lg font-['Inter'] leading-relaxed"
            >
              {homeContent.quandCommencer.description}
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {homeContent.quandCommencer.scenarios.map((scenario, index) => {
              const isFeatured = index === 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group flex flex-col overflow-hidden relative ${
                    isFeatured
                      ? 'bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] backdrop-blur-xl border-2 border-white/30 rounded-md sm:rounded-lg shadow-2xl shadow-black/30 text-white'
                      : 'bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm card-hover-glow transition-all duration-300'
                  }`}
                >
                  {/* Carbon fibre pattern for featured card */}
                  {isFeatured && <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/carbon-fibre.png')] pointer-events-none z-0" />}
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] sm:aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={scenario.image}
                      alt={`${scenario.title} - Agence Marketing Toulouse`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 ${isFeatured ? 'bg-gradient-to-t from-black/80 to-transparent' : 'bg-gradient-to-t from-black/20 to-transparent'}`} />

                    {/* Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className={`px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-md sm:rounded-lg shadow-lg ${
                        isFeatured ? 'bg-white text-black' : 'bg-black text-white'
                      }`}>
                        {scenario.badge}
                      </span>
                    </div>

                    {isFeatured && (
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                        <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-black/50 backdrop-blur-md border border-white/20 rounded-md sm:rounded-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white">
                            Populaire
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 md:p-7 flex flex-col flex-grow">
                    <h3
                      className="font-['Roboto'] font-[900] text-lg sm:text-xl uppercase mb-1 sm:mb-1.5"
                      style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : '#000000' }}
                    >
                      {scenario.title}
                    </h3>
                    <p
                      className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.1em] mb-3 sm:mb-4"
                      style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.5)' }}
                    >
                      {scenario.subtitle}
                    </p>
                    <p
                      className="text-xs sm:text-sm font-['Inter'] leading-relaxed mb-4 sm:mb-6 flex-grow"
                      style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)' }}
                    >
                      {scenario.description}
                    </p>

                    {/* Metadata Section - Premium glassmorphism */}
                    <div className={`space-y-2 sm:space-y-2.5 p-3 sm:p-4 mb-4 sm:mb-6 ${
                      isFeatured ? 'bg-white/10 backdrop-blur-md border border-white/10 rounded-md sm:rounded-lg' : 'bg-white/50 backdrop-blur-sm border border-black/5 rounded-md sm:rounded-lg'
                    }`}>
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider" style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)' }}>Durée</span>
                        <span className="text-[11px] sm:text-xs font-bold" style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : '#000000' }}>{scenario.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider" style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)' }}>Budget</span>
                        <span className="text-[11px] sm:text-xs font-bold" style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : '#000000' }}>{scenario.investment}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider" style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)' }}>Cible</span>
                        <span className="text-[10px] sm:text-[11px] font-medium truncate ml-4" style={{ color: isFeatured ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.5)' }}>{scenario.idealFor}</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className={`w-full h-[44px] sm:h-[48px] text-[11px] sm:text-[12px] font-['Inter'] font-semibold tracking-[-0.01em] flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 ${
                        isFeatured
                          ? 'bg-white text-black border border-white/50 shadow-[0_4px_24px_-1px_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.5)] hover:bg-white/95 hover:shadow-[0_8px_32px_-4px_rgba(255,255,255,0.35)] hover:-translate-y-0.5'
                          : 'bg-black/90 backdrop-blur-xl text-white border border-white/10 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-black hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2)] hover:-translate-y-0.5'
                      }`}
                    >
                      {scenario.cta}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12 md:mt-16 pt-8 sm:pt-10 md:pt-12 border-t border-black/5 flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between md:gap-8"
          >
            <div className="text-center md:text-left">
              <p className="font-['Roboto'] font-black text-xs sm:text-sm uppercase text-black">
                {homeContent.quandCommencer.bottomCta.text}
              </p>
              <p className="text-black/50 text-[11px] sm:text-xs font-['Inter']">
                {homeContent.quandCommencer.bottomCta.subtext}
              </p>
            </div>
            <Link
              href={homeContent.quandCommencer.bottomCta.button.href}
              className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-black hover:text-black/70 transition-colors group"
            >
              {homeContent.quandCommencer.bottomCta.button.text}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        {/* Diagonal bottom → next section (IA Highlight) */}
        <SectionDiagonalBottom fillColor="#B7B7B7" direction="left" />
      </section>

      {/* SECTION IA HIGHLIGHT */}
      {/* SEO: Expertise Vibe Coding et IA de l'agence marketing Toulouse */}
      {/* Images: 800x320px (5:2) pour les visuels slider */}
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] relative"
        aria-label="Expertise IA et Vibe Coding agence marketing Toulouse"
      >
        {/* Carbon fibre pattern */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-gradient-to-bl from-white/10 via-[#EEFF41]/5 to-transparent rounded-full blur-[150px]" />

        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              <Brain size={14} className="text-white sm:hidden" />
              <Brain size={16} className="text-white hidden sm:block" />
              {homeContent.iaHighlight.surtitre}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Roboto'] font-[900] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight uppercase text-white mb-4 sm:mb-6"
            >
              {homeContent.iaHighlight.h2}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg font-['Inter'] leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {homeContent.iaHighlight.introduction}
            </motion.p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
            {/* Left - Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 order-2 lg:order-1"
            >
              <div className="lg:sticky lg:top-24 space-y-2 sm:space-y-3">
                {homeContent.iaHighlight.whyImportant.map((item: string, i: number) => (
                  <div
                    key={i}
                    className="p-3 sm:p-4 md:p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-md sm:rounded-lg shadow-lg hover:shadow-xl hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                        <CheckCircle2 size={12} className="text-white group-hover:text-black sm:hidden" />
                        <CheckCircle2 size={14} className="text-white group-hover:text-black hidden sm:block" />
                      </div>
                      <p className="font-['Inter'] text-xs sm:text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        {item}
                      </p>
                    </div>
                  </div>
                ))}

                <Link
                  href="/contact"
                  className="mt-3 sm:mt-4 w-full h-[46px] sm:h-[52px] px-4 sm:px-6 text-[12px] sm:text-[13px] font-['Inter'] font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-white text-black border border-white/50 shadow-[0_4px_24px_-1px_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.5)] hover:bg-white/95 hover:shadow-[0_8px_32px_-4px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 group"
                >
                  Explorer l&apos;IA avec nous
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right - Use Cases Slider */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIASlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] backdrop-blur-xl border border-white/10 rounded-md sm:rounded-lg shadow-2xl overflow-hidden relative"
                >
                  {/* Carbon fibre pattern */}
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/carbon-fibre.png')] pointer-events-none" />
                  {(() => {
                    const useCases = homeContent.iaHighlight.useCases;
                    const current = useCases[currentIASlide];
                    const nextSlide = () => setCurrentIASlide((prev) => (prev + 1) % useCases.length);
                    const prevSlide = () => setCurrentIASlide((prev) => (prev - 1 + useCases.length) % useCases.length);

                    return (
                      <>
                        {/* Image - 800x320px (5:2) pour Figma */}
                        <div className="relative aspect-[4/3] sm:aspect-[5/2] w-full">
                          {current.image ? (
                            <Image
                              src={current.image}
                              alt={`${current.title} - Agence Marketing Toulouse`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px"
                            />
                          ) : (
                            <ImagePlaceholder
                              width={800}
                              height={320}
                              label="Illustration IA"
                              rounded="none"
                              variant="dark"
                              className="w-full h-full"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />

                          {/* Tags overlay */}
                          <div className="absolute top-3 sm:top-6 left-3 sm:left-6 flex flex-wrap gap-1.5 sm:gap-2">
                            {current.tags.map((tag: string, idx: number) => (
                              <span key={idx} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/50 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wider rounded-md sm:rounded-lg">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Metric overlay */}
                          {current.metric && (
                            <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 text-right">
                              <span className="text-2xl sm:text-4xl md:text-5xl font-['Roboto'] font-[900] text-white block leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                                {current.metric}
                              </span>
                              <span className="text-[9px] sm:text-[10px] font-bold text-white/90 uppercase tracking-wider">
                                Impact mesuré
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                          <h3 className="font-['Roboto'] font-[900] text-xl sm:text-2xl md:text-3xl uppercase mb-3 sm:mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            {current.title}
                          </h3>
                          <p className="font-['Inter'] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            {current.description}
                          </p>

                          {/* Example quote */}
                          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-md sm:rounded-lg p-3 sm:p-5 mb-6 sm:mb-8">
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] mb-1.5 sm:mb-2 block" style={{ color: 'rgba(255,255,255,0.8)' }}>
                              Exemple concret
                            </span>
                            <p className="font-['Inter'] italic text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                              &ldquo;{current.example}&rdquo;
                            </p>
                          </div>

                          {/* Navigation */}
                          <div className="flex items-center justify-between">
                            <div className="flex gap-1 sm:gap-1.5">
                              {useCases.map((_: unknown, idx: number) => (
                                <button
                                  key={idx}
                                  onClick={() => setCurrentIASlide(idx)}
                                  className={`h-1 sm:h-1.5 transition-all duration-300 rounded-full ${
                                    idx === currentIASlide ? 'w-6 sm:w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'w-1 sm:w-1.5 bg-white/20 hover:bg-white/40'
                                  }`}
                                  aria-label={`Cas d'usage ${idx + 1}`}
                                />
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={prevSlide}
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                                aria-label="Cas d'usage précédent"
                              >
                                <ChevronLeft size={16} className="sm:hidden" />
                                <ChevronLeft size={18} className="hidden sm:block" />
                              </button>
                              <button
                                onClick={nextSlide}
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white backdrop-blur-xl border border-white/50 shadow-[0_4px_16px_-1px_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.5)] flex items-center justify-center text-black hover:bg-white/95 hover:shadow-[0_6px_20px_-2px_rgba(255,255,255,0.35)] transition-all duration-300"
                                aria-label="Cas d'usage suivant"
                              >
                                <ChevronRight size={16} className="sm:hidden" />
                                <ChevronRight size={18} className="hidden sm:block" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* Diagonal bottom → next section (À Propos) */}
        <SectionDiagonalBottom fillColor="#F2F2F2" direction="right" />
      </section>

      {/* SECTION À PROPOS DE VIZION */}
      {/* SEO: Présentation agence marketing Toulouse - équipe et valeurs */}
      {/* Images: 500x600px (5:6) pour photo équipe, 56x56px cercle pour avatar fondateur */}
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-bl from-[#F8F8F8] via-[#F2F2F2] to-[#EBEBEB] relative grain-light"
        aria-label="À propos de Vizion agence marketing Toulouse"
      >
        {/* Ambient glow */}
        <div className="absolute top-[10%] left-[5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-violet-50/15 via-indigo-50/8 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-5%] w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-tl from-amber-50/12 via-orange-50/6 to-transparent rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4">
                {homeContent.aPropos.surtitre}
              </span>
              <h2 className="font-['Roboto'] font-[900] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight uppercase text-black mb-5 sm:mb-6 md:mb-8">
                {homeContent.aPropos.h2}
              </h2>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 md:mb-10">
                {homeContent.aPropos.paragraphs.map((para, i) => (
                  <p key={i} className="text-black/60 text-sm sm:text-base md:text-lg font-['Inter'] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Founder Quote - Premium Glassmorphism Card */}
              <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm p-5 sm:p-8 md:p-10">
                <Quote className="text-black/20 mb-4 sm:mb-6" size={20} strokeWidth={2.5} fill="currentColor" />
                <blockquote className="text-base sm:text-lg md:text-xl font-['Inter'] font-medium leading-relaxed text-black mb-5 sm:mb-6 md:mb-8">
                  &ldquo;{homeContent.aPropos.founderQuote.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-[#F2F2F2] ring-2 ring-white shadow-lg">
                    <ImagePlaceholder
                      width={48}
                      height={48}
                      label="Fondateur"
                      rounded="full"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-['Roboto'] font-black text-xs sm:text-sm uppercase tracking-wide text-black">
                      {homeContent.aPropos.founderQuote.name}
                    </h4>
                    <p className="text-black/40 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                      {homeContent.aPropos.founderQuote.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative aspect-[4/3] sm:aspect-[5/6] rounded-md sm:rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-[#F2F2F2]">
                  <ImagePlaceholder
                    width={500}
                    height={600}
                    label="Photo équipe Vizion Toulouse"
                    rounded="none"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption Card - Premium Glassmorphism */}
                <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm p-4 sm:p-6">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-black/40 mb-1 block">
                    {homeContent.aPropos.photoCaption.label}
                  </span>
                  <p className="font-['Roboto'] font-black text-sm sm:text-base uppercase text-black">
                    {homeContent.aPropos.photoCaption.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values - Premium Glassmorphism Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-['Roboto'] font-black text-base sm:text-lg uppercase mb-4 sm:mb-6 text-center text-black">
              {homeContent.aPropos.valeursTitre}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {homeContent.aPropos.valeurs.map((value, i) => {
                const icons = [
                  <Star key="sm-0" size={16} className="sm:hidden" />,
                  <Zap key="sm-1" size={16} className="sm:hidden" />,
                  <Shield key="sm-2" size={16} className="sm:hidden" />,
                  <Lightbulb key="sm-3" size={16} className="sm:hidden" />
                ];
                const iconsLg = [
                  <Star key="lg-0" size={18} className="hidden sm:block" />,
                  <Zap key="lg-1" size={18} className="hidden sm:block" />,
                  <Shield key="lg-2" size={18} className="hidden sm:block" />,
                  <Lightbulb key="lg-3" size={18} className="hidden sm:block" />
                ];
                return (
                  <div
                    key={i}
                    className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm p-3 sm:p-5 group card-hover-glow transition-all duration-300"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md sm:rounded-lg bg-black/5 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 text-black group-hover:bg-black group-hover:text-white transition-colors">
                      {icons[i]}
                      {iconsLg[i]}
                    </div>
                    <h4 className="font-['Roboto'] font-black text-xs sm:text-sm uppercase mb-1.5 sm:mb-2 text-black tracking-tight">
                      {value.title}
                    </h4>
                    <p className="text-black/50 text-[11px] sm:text-sm font-['Inter'] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
        {/* Diagonal bottom → next section (Équipe white) */}
        <SectionDiagonalBottom fillColor="#FFFFFF" direction="right" />
      </section>

      {/* SECTION ÉQUIPE */}
      {/* SEO: Équipe agence marketing Toulouse - experts B2B */}
      {/* Images: 260x320px (13:16) pour portraits membres */}
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white via-white to-[#FAFAF8] relative grain-light"
        aria-label="Équipe agence marketing Toulouse"
      >
        {/* Ambient glow */}
        <div className="absolute top-[20%] right-[5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-bl from-rose-50/20 via-pink-50/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[15%] left-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-tr from-slate-100/30 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4"
            >
              {homeContent.equipe.surtitre}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Roboto'] font-[900] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight uppercase text-black mb-4 sm:mb-6"
            >
              {homeContent.equipe.h2}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-black/60 text-base sm:text-lg font-['Inter'] leading-relaxed"
            >
              {homeContent.equipe.description}
            </motion.p>
          </div>

          {/* Model Pills */}
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-4 mb-8 sm:mb-12">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-black/90 backdrop-blur-xl text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-white/10 shadow-[0_4px_16px_-1px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[0_6px_20px_-1px_rgba(0,0,0,0.3)] hover:-translate-y-0.5">
              <Users size={12} className="sm:hidden" />
              <Users size={14} className="hidden sm:block" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide">{homeContent.equipe.modelExplanation.director}</span>
            </div>
            <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/60 backdrop-blur-md border border-black/5 rounded-lg text-black/30 font-bold shadow-sm text-sm">+</span>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white backdrop-blur-xl text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-black/10 shadow-[0_4px_16px_-1px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.5)] transition-all duration-300 hover:shadow-[0_6px_20px_-1px_rgba(0,0,0,0.12)] hover:-translate-y-0.5">
              <Rocket size={12} className="sm:hidden" />
              <Rocket size={14} className="hidden sm:block" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide">{homeContent.equipe.modelExplanation.squads}</span>
            </div>
          </div>

          {/* Team Grid - Responsive scroll */}
          <div className="relative -mx-4 sm:-mx-6 md:mx-0">
            <div
              className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 md:px-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {homeContent.equipe.members.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-auto snap-center group"
                >
                  <div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm overflow-hidden card-hover-glow transition-all duration-300">
                    {/* Portrait - 260x320px (13:16) */}
                    <div className="relative aspect-[13/16] w-full overflow-hidden bg-[#F2F2F2]">
                      <ImagePlaceholder
                        width={260}
                        height={320}
                        label={`Portrait ${member.name}`}
                        rounded="none"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Badge - Glassmorphism SaaS style */}
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/90 backdrop-blur-md border border-black/5 text-black text-[9px] sm:text-[10px] font-bold uppercase tracking-tight rounded-md sm:rounded-lg shadow-md">
                          {member.specialty}
                        </span>
                      </div>
                    </div>

                    {/* Info - Clean stacked layout with premium spacing */}
                    <div className="p-4 sm:p-6">
                      <h4 className="font-['Roboto'] font-black text-sm sm:text-base uppercase text-black mb-0.5 sm:mb-1 tracking-tight">
                        {member.name}
                      </h4>
                      <p className="text-black/40 text-xs sm:text-sm mb-3 sm:mb-5 font-medium">{member.role}</p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {member.skills.slice(0, 3).map((skill, j) => (
                          <span
                            key={j}
                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-black/5 backdrop-blur-sm border border-black/5 text-black/70 text-[9px] sm:text-[10px] font-semibold uppercase rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll hint - Mobile only */}
            <div className="flex md:hidden justify-center mt-4 sm:mt-6">
              <span className="text-[9px] sm:text-[10px] font-bold text-black/40 uppercase tracking-wider flex items-center gap-2">
                <ChevronRight size={12} />
                {homeContent.equipe.scrollHint}
              </span>
            </div>
          </div>
        </div>
        {/* Diagonal bottom → next section (Blog gray) */}
        <SectionDiagonalBottom fillColor="#F0F0F0" direction="left" />
      </section>

      {/* SECTION BLOG */}
      {/* SEO: Articles marketing B2B Toulouse - expertise et conseils */}
      {/* Images: 400x225px (16:9) pour thumbnails articles */}
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-tr from-[#F5F5F5] via-[#F0F0F0] to-[#E8E8E8] relative grain-light"
        aria-label="Articles marketing B2B agence Toulouse"
      >
        {/* Ambient glow */}
        <div className="absolute top-[25%] right-[10%] w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-gradient-to-bl from-cyan-50/15 via-sky-50/8 to-transparent rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[0%] w-[320px] sm:w-[520px] h-[320px] sm:h-[520px] bg-gradient-to-tr from-slate-200/25 via-gray-100/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 md:mb-16">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4"
              >
                {homeContent.blog.surtitre}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-['Roboto'] font-[900] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight uppercase text-black"
              >
                {homeContent.blog.h2}
              </motion.h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-black bg-white/70 backdrop-blur-sm border border-black/5 rounded-md sm:rounded-lg px-3 sm:px-4 py-2 hover:text-black/70 hover:shadow-md transition-all duration-300 group mt-4 sm:mt-6 md:mt-0"
            >
              {homeContent.blog.ctaText}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {latestPosts.length > 0 ? (
              latestPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm overflow-hidden card-hover-glow transition-all duration-300"
                >
                  {/* Image - 400x225px (16:9) */}
                  <Link href={`/blog/${post.slug}`} className="block relative overflow-hidden">
                    <div className="aspect-video w-full bg-[#F2F2F2] relative">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={`${post.title} - Blog agence marketing Toulouse`}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        />
                      ) : (
                        <ImagePlaceholder
                          width={400}
                          height={225}
                          label="Article blog"
                          rounded="none"
                          className="w-full h-full"
                        />
                      )}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <span className="px-2 py-0.5 bg-black/5 backdrop-blur-sm border border-black/5 rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-black/60">
                        {post.category}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="font-['Roboto'] font-black text-sm sm:text-base md:text-lg uppercase leading-tight mb-2 sm:mb-3 text-black transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-black/50 text-xs sm:text-sm font-['Inter'] leading-relaxed mb-4 sm:mb-6 line-clamp-2">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="pt-3 sm:pt-4 border-t border-black/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-[9px] sm:text-[10px] font-medium text-black/40 uppercase tracking-tight">
                          {formatDate(post.date)}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-black/10" />
                        <span className="text-[9px] sm:text-[10px] font-medium text-black/40 uppercase tracking-tight">
                          {post.readingTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[9px] sm:text-[10px] font-bold uppercase text-black flex items-center gap-1 sm:gap-1.5 hover:gap-2 transition-all duration-300 group/link"
                      >
                        Lire <ArrowRight size={10} className="transition-transform group-hover/link:translate-x-0.5 sm:hidden" />
                        <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-0.5 hidden sm:block" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              // Placeholder cards
              [1, 2, 3].map((i) => (
                <div key={i} className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-video w-full bg-black/5" />
                  <div className="p-4 sm:p-6">
                    <div className="h-3 sm:h-4 bg-black/5 rounded-lg w-1/4 mb-3 sm:mb-4" />
                    <div className="h-5 sm:h-6 bg-black/5 rounded-lg w-3/4 mb-2 sm:mb-3" />
                    <div className="h-3 sm:h-4 bg-black/5 rounded-lg w-full mb-2" />
                    <div className="h-3 sm:h-4 bg-black/5 rounded-lg w-2/3" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {/* Diagonal bottom → next section (FAQ white) */}
        <SectionDiagonalBottom fillColor="#FFFFFF" direction="right" />
      </section>

      {/* SECTION FAQ */}
      <FAQSection />

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
              <div className="h-4 w-1 bg-gradient-to-b from-black/10 via-black/30 to-black/50 rounded-full" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40">
                Notre zone d&apos;intervention
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Roboto'] font-[900] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight uppercase text-black mb-4 sm:mb-6"
            >
              Votre agence marketing à Toulouse et en Occitanie
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
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
              transition={{ delay: 0.1 }}
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
                  <strong className="text-black/60">Accompagnement à distance</strong> pour les entreprises B2B partout en France — Paris, Lyon, Bordeaux, Marseille et au-delà.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Diagonal bottom → next section (Final CTA gray) */}
        <SectionDiagonalBottom fillColor="#F0F0F0" direction="left" />
      </section>

      {/* FINAL CTA */}
      {/* SEO: Call-to-action agence marketing Toulouse - contact */}
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#F5F5F5] via-[#F0F0F0] to-[#EAEAEA] relative"
        aria-label="Contactez l'agence marketing Toulouse"
      >
        {/* Ambient glow */}
        <div className="absolute top-[15%] left-[15%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-br from-emerald-50/12 via-teal-50/6 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-gradient-to-tl from-amber-50/15 via-yellow-50/8 to-transparent rounded-full blur-[110px] pointer-events-none" />
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] backdrop-blur-xl border border-white/10 rounded-lg sm:rounded-xl shadow-2xl p-6 sm:p-10 md:p-12 lg:p-20 text-center relative overflow-hidden"
          >
            {/* Carbon fibre pattern */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />
            {/* Subtle inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Trust badge - glassmorphism */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-md sm:rounded-lg shadow-lg mb-5 sm:mb-8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={8} className="fill-white text-white sm:hidden" />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-white text-white hidden sm:block" />
                  ))}
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {homeContent.finalCta.trustBadge}
                </span>
              </div>

              <h2 className="font-['Roboto'] font-[900] text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] leading-tight tracking-tight uppercase mb-4 sm:mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {homeContent.finalCta.h2}
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-['Inter'] leading-relaxed mb-8 sm:mb-10 md:mb-12" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {homeContent.finalCta.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
                <Link
                  href={homeContent.finalCta.cta.primary.href}
                  className="w-full sm:w-auto h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-white text-black border border-white/50 shadow-[0_4px_24px_-1px_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.5)] hover:bg-white/95 hover:shadow-[0_8px_32px_-4px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 group"
                >
                  {homeContent.finalCta.cta.primary.text}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={homeContent.finalCta.cta.secondary.href}
                  className="w-full sm:w-auto h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
                >
                  {homeContent.finalCta.cta.secondary.text}
                </Link>
              </div>

              {/* Trust elements - subtle glassmorphism */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-x-6 md:gap-x-8 gap-y-2 sm:gap-y-4 pt-6 sm:pt-8 md:pt-10 border-t border-white/10">
                {homeContent.finalCta.trustElements.map((element, i) => (
                  <div key={i} className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/5 text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    <CheckCircle2 size={12} className="sm:hidden" style={{ color: 'rgba(255,255,255,0.8)' }} />
                    <CheckCircle2 size={15} className="hidden sm:block" style={{ color: 'rgba(255,255,255,0.8)' }} />
                    <span className="font-medium tracking-tight">{element}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
