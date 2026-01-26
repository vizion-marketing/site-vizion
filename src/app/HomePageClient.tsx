"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeContent, faqSchema, organizationSchema } from "@/content/home";
import { ImagePlaceholder } from "@/components/ui";

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

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

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

// Social Proof Tabs Component
// SEO: Showcases client success stories for "agence marketing Toulouse" credibility
// Images: 800x400px (16:8) for case visuals, 56x56px circle for testimonial avatar
function SocialProofTabs() {
  const [activeClient, setActiveClient] = useState<string>('easyvirtual');
  const currentCase = clientCases.find(c => c.id === activeClient) || clientCases[0];

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#F8F8F8] via-[#F2F2F2] to-[#E8E8E8] relative overflow-hidden"
      aria-label="Témoignages clients agence marketing Toulouse"
    >
      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#EEFF41]/5 rounded-full blur-[150px] pointer-events-none" />
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
            <div className="h-4 w-1 bg-[#EEFF41] rounded-full" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40">
              {homeContent.preuveSociale.surtitre}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Roboto'] font-[900] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight uppercase text-black mb-4 sm:mb-6"
          >
            {homeContent.preuveSociale.h2}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
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
                    {client.name}
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
                  transition={{ delay: index * 0.05 }}
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
                        {client.name}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-200 ${
                        activeClient === client.id ? "text-[#EEFF41]" : "text-black/40"
                      }`}>
                        {client.category}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      activeClient === client.id ? "bg-[#EEFF41]" : "bg-black/5 opacity-0 group-hover:opacity-100"
                    }`}>
                      <ArrowRight size={14} className={activeClient === client.id ? "text-black" : "text-black/40"} />
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
                className="bg-white/90 backdrop-blur-xl border border-black/5 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
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
                      <span className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#EEFF41] text-black text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-[#EEFF41]/20">
                        {currentCase.badge}
                      </span>
                      <h3 className="text-white text-xl sm:text-2xl font-['Roboto'] font-black uppercase leading-tight drop-shadow-lg">
                        {currentCase.name}
                      </h3>
                    </div>

                    <div className="bg-black/40 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-xl sm:text-right min-w-[120px] sm:min-w-[140px]">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-['Roboto'] font-[900] text-[#EEFF41] block leading-none mb-1 drop-shadow-lg">
                        {currentCase.metric}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold text-white/70 uppercase tracking-wider">
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
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EEFF41]" />
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
                        className="group flex items-center justify-center gap-2 bg-black text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-wider hover:bg-black/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                      >
                        Voir le case study
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#EEFF41]" />
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
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24"
        >
          <div className="bg-gradient-to-br from-black via-black/95 to-black/90 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-[#EEFF41]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8">
                <Quote className="text-[#EEFF41] opacity-50 mb-4 sm:mb-6" size={32} strokeWidth={2} />
                <blockquote className="text-lg sm:text-xl md:text-2xl font-['Inter'] font-medium leading-relaxed text-white/90 mb-6 sm:mb-8 tracking-tight">
                  &ldquo;{homeContent.preuveSociale.testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <img
                      src={`https://i.pravatar.cc/150?u=${homeContent.preuveSociale.testimonial.name}`}
                      alt={homeContent.preuveSociale.testimonial.name}
                      className="w-11 h-11 sm:w-14 sm:h-14 object-cover rounded-full border-2 border-white/20 grayscale hover:grayscale-0 transition-all duration-300 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#EEFF41] rounded-full flex items-center justify-center shadow-lg shadow-[#EEFF41]/30">
                      <CheckCircle2 size={10} className="text-black sm:hidden" />
                      <CheckCircle2 size={12} className="text-black hidden sm:block" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-['Roboto'] font-black uppercase tracking-wider text-xs sm:text-sm text-white">
                      {homeContent.preuveSociale.testimonial.name}
                    </h4>
                    <p className="text-white/40 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mt-0.5">
                      {homeContent.preuveSociale.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-full max-w-[200px] sm:max-w-[240px] p-5 sm:p-8 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-xl text-center shadow-lg">
                  <div className="text-[#EEFF41] text-3xl sm:text-4xl font-['Roboto'] font-black mb-1 sm:mb-2 drop-shadow-lg">98%</div>
                  <p className="text-white/50 text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-tight">
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
    </section>
  );
}

// FAQ Section Component
// SEO: Questions fréquentes agence marketing Toulouse
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-white"
      aria-label="Questions fréquentes agence marketing Toulouse"
    >
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[82.5rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16">
          {/* Left - Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 bg-white/60 backdrop-blur-xl border border-black/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm">
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
                className="inline-flex items-center gap-2 bg-black text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group w-full sm:w-auto justify-center"
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
                  className={`rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-white shadow-lg border border-black/10'
                      : 'bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm hover:shadow-md'
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
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
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
      <section className="relative pt-20 sm:pt-24 md:pt-[100px] pb-16 sm:pb-20 md:pb-[80px] px-4 sm:px-6 md:px-12 bg-[#B7B7B7] bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] flex items-center min-h-[100svh] lg:min-h-[95vh] overflow-visible">
        {/* Pattern texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="max-w-[82.5rem] mx-auto w-full relative z-10">
          {/* CONTENT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="w-full lg:max-w-[720px] lg:min-h-[700px] xl:min-h-[750px] bg-black/20 backdrop-blur-md rounded-2xl sm:rounded-[var(--radius-xl)] p-5 sm:p-8 md:p-12 shadow-2xl relative z-10 flex flex-col justify-between border border-white/10"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EEFF41] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EEFF41]"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.1em] text-white/60 uppercase">
                {homeContent.hero.badge}
              </span>
            </div>

            <h1 className="font-['Roboto'] font-[900] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight uppercase text-white mb-3 sm:mb-4">
              {homeContent.hero.h1}
            </h1>

            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 max-w-2xl">
              {homeContent.hero.baseline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-white/10">
              {homeContent.hero.badges.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-tight text-white/70">
                  <CheckCircle2 size={14} className="text-white shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Link href={homeContent.hero.cta.primary.href} className="h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-[#EEFF41]/90 backdrop-blur-xl text-black border border-[#EEFF41]/50 shadow-[0_4px_24px_-1px_rgba(238,255,65,0.25),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:bg-[#EEFF41] hover:shadow-[0_8px_32px_-4px_rgba(238,255,65,0.4),inset_0_1px_0_0_rgba(255,255,255,0.4)] hover:-translate-y-0.5">
                {homeContent.hero.cta.primary.text} <ArrowRight size={16} />
              </Link>
              <Link href={homeContent.hero.cta.secondary.href} className="h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5">
                {homeContent.hero.cta.secondary.text}
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/20 bg-white/10 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover grayscale" />
                  </div>
                ))}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#EEFF41]/30 bg-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-black shadow-[0_0_10px_rgba(238,255,65,0.2)]">
                  +70
                </div>
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold text-white/60 tracking-widest uppercase">
                {homeContent.hero.socialProof}
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE - IMMERSIVE & OVERLAPPING */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[400px] xl:w-[550px] h-[600px] xl:h-[750px] z-30 group"
          >
            <img
              src="/hero-binoculars.png"
              alt="Strategie"
              className="w-full h-full object-cover shadow-2xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            />
            {/* Decorative frame elements */}
            <div className="absolute top-8 right-8 w-12 xl:w-16 h-12 xl:h-16 border-t-2 border-r-2 border-[#EEFF41]/40 z-20" />
            <div className="absolute bottom-8 left-8 w-12 xl:w-16 h-12 xl:h-16 border-b-2 border-l-2 border-[#EEFF41]/40 z-20" />
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION - Tabs Interactifs */}
      <SocialProofTabs />

      {/* 5 PILIERS SECTION - PREMIUM GLASSMORPHISM */}
      <section
        className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-[#F2F2F2] relative overflow-hidden"
        aria-label="Services agence marketing B2B Toulouse"
      >
        {/* Background ambient light - Enhanced with multiple gradients */}
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[#EEFF41]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#EEFF41]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/30 rounded-full blur-[150px] pointer-events-none" />

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
              className="md:col-span-2 lg:col-span-7 lg:row-span-2 bg-gradient-to-br from-black via-[#0A0A0A] to-black/95 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 flex flex-col min-h-[400px] sm:min-h-[450px] lg:min-h-[550px] relative overflow-hidden group shadow-2xl shadow-[#EEFF41]/5 hover:shadow-[#EEFF41]/10 transition-all duration-300"
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-[#EEFF41]/[0.02] pointer-events-none rounded-2xl" />

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EEFF41] flex items-center justify-center shadow-lg shadow-[#EEFF41]/20">
                    <span className="font-black text-xs sm:text-sm text-black">{homeContent.piliers.piliers[0].numero}</span>
                  </div>
                  <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60">
                      {homeContent.piliers.piliers[0].surtitre}
                    </span>
                  </div>
                </div>

                <h3 className="font-['Roboto'] font-[900] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-tight uppercase text-white mb-4 sm:mb-6 group-hover:text-[#EEFF41] transition-colors duration-300">
                  {homeContent.piliers.piliers[0].titre}
                </h3>
                <p className="text-white/60 text-sm sm:text-base font-['Inter'] leading-relaxed mb-5 sm:mb-8 max-w-lg">
                  {homeContent.piliers.piliers[0].description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-10">
                  {homeContent.piliers.piliers[0].services.map((item) => (
                    <span key={item} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 text-[9px] sm:text-[10px] font-bold rounded-lg uppercase tracking-wide hover:bg-white/15 hover:border-white/20 transition-all duration-200">
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
                className={`${span} bg-white/80 backdrop-blur-xl border border-black/5 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-7 flex flex-col group shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-black/5 flex items-center justify-center group-hover:bg-[#EEFF41] group-hover:border-[#EEFF41] group-hover:shadow-lg group-hover:shadow-[#EEFF41]/20 transition-all duration-300">
                    <Icon className="text-black" size={18} strokeWidth={2.5} />
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
                      <span className="text-[11px] sm:text-xs font-black text-[#EEFF41]">x4.5</span>
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
            className="mt-10 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-lg"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left">
              <div className="flex -space-x-3">
                {[5, 6, 7].map((i) => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-md ring-1 ring-black/5">
                    <img src={`https://i.pravatar.cc/150?u=${i+30}`} alt="Client" className="w-full h-full object-cover" />
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
                className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-black bg-black/5 backdrop-blur-sm border border-black/5 rounded-xl hover:bg-black/10 hover:border-black/10 transition-all text-center"
              >
                {homeContent.piliers.cta.secondary.text}
              </Link>
              <Link
                href={homeContent.piliers.cta.primary.href}
                className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-3.5 bg-black text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-xl hover:bg-black/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {homeContent.piliers.cta.primary.text} <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION IA HIGHLIGHT */}
      {/* SEO: Expertise Vibe Coding et IA de l'agence marketing Toulouse */}
      {/* Images: 800x320px (5:2) pour les visuels slider */}
      <section
        className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-black relative overflow-hidden"
        aria-label="Expertise IA et Vibe Coding agence marketing Toulouse"
      >
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[#EEFF41]/5 rounded-full blur-[150px]" />

        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/40 mb-3 sm:mb-4"
            >
              <Brain size={14} className="text-[#EEFF41] sm:hidden" />
              <Brain size={16} className="text-[#EEFF41] hidden sm:block" />
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
              className="text-white/60 text-base sm:text-lg font-['Inter'] leading-relaxed"
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
                    className="p-3 sm:p-4 md:p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:border-[#EEFF41]/30 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#EEFF41]/10 backdrop-blur-sm border border-[#EEFF41]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#EEFF41] transition-colors">
                        <CheckCircle2 size={12} className="text-[#EEFF41] group-hover:text-black sm:hidden" />
                        <CheckCircle2 size={14} className="text-[#EEFF41] group-hover:text-black hidden sm:block" />
                      </div>
                      <p className="text-white/60 font-['Inter'] text-xs sm:text-sm leading-relaxed group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}

                <Link
                  href="/contact"
                  className="mt-3 sm:mt-4 w-full h-[46px] sm:h-[52px] px-4 sm:px-6 text-[12px] sm:text-[13px] font-['Inter'] font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-[#EEFF41]/90 backdrop-blur-xl text-black border border-[#EEFF41]/50 shadow-[0_4px_24px_-1px_rgba(238,255,65,0.25),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:bg-[#EEFF41] hover:shadow-[0_8px_32px_-4px_rgba(238,255,65,0.4),inset_0_1px_0_0_rgba(255,255,255,0.4)] hover:-translate-y-0.5 group"
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
                  className="bg-gradient-to-br from-[#0A0A0A] via-[#111] to-[#0A0A0A] backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden"
                >
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
                              <span key={idx} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/50 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] font-bold text-[#EEFF41] uppercase tracking-wider rounded-lg sm:rounded-xl">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Metric overlay */}
                          {current.metric && (
                            <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 text-right">
                              <span className="text-2xl sm:text-4xl md:text-5xl font-['Roboto'] font-[900] text-[#EEFF41] block leading-none">
                                {current.metric}
                              </span>
                              <span className="text-[9px] sm:text-[10px] font-bold text-white/60 uppercase tracking-wider">
                                Impact mesuré
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                          <h3 className="font-['Roboto'] font-[900] text-xl sm:text-2xl md:text-3xl uppercase text-white mb-3 sm:mb-4">
                            {current.title}
                          </h3>
                          <p className="text-white/60 font-['Inter'] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                            {current.description}
                          </p>

                          {/* Example quote */}
                          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 mb-6 sm:mb-8">
                            <span className="text-[9px] sm:text-[10px] font-bold text-[#EEFF41] uppercase tracking-[0.15em] mb-1.5 sm:mb-2 block">
                              Exemple concret
                            </span>
                            <p className="text-white/80 font-['Inter'] italic text-xs sm:text-sm">
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
                                    idx === currentIASlide ? 'w-6 sm:w-8 bg-[#EEFF41]' : 'w-1 sm:w-1.5 bg-white/20 hover:bg-white/40'
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
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EEFF41]/90 backdrop-blur-xl border border-[#EEFF41]/50 shadow-[0_4px_16px_-1px_rgba(238,255,65,0.3),inset_0_1px_0_0_rgba(255,255,255,0.3)] flex items-center justify-center text-black hover:bg-[#EEFF41] hover:shadow-[0_6px_20px_-2px_rgba(238,255,65,0.4)] transition-all duration-300"
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
      </section>

      {/* SECTION QUAND COMMENCER */}
      {/* SEO: Offres et tarifs agence marketing Toulouse */}
      {/* Images: 400x240px (5:3) pour les visuels des offres */}
      <section
        className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-white"
        aria-label="Offres et formules agence marketing Toulouse"
      >
        <div className="max-w-[82.5rem] mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {homeContent.quandCommencer.scenarios.map((scenario, index) => {
              const isFeatured = index === 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group flex flex-col overflow-hidden ${
                    isFeatured
                      ? 'bg-gradient-to-br from-black via-[#111] to-black/95 backdrop-blur-xl border-2 border-[#EEFF41] rounded-xl sm:rounded-2xl shadow-2xl shadow-[#EEFF41]/10 text-white md:col-span-2 lg:col-span-1'
                      : 'bg-white/80 backdrop-blur-xl border border-black/5 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
                  }`}
                >
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
                      <span className={`px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-lg sm:rounded-xl shadow-lg ${
                        isFeatured ? 'bg-[#EEFF41] text-black' : 'bg-black text-white'
                      }`}>
                        {scenario.badge}
                      </span>
                    </div>

                    {isFeatured && (
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                        <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#EEFF41] animate-pulse" />
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white">
                            Populaire
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 md:p-7 flex flex-col flex-grow">
                    <h3 className={`font-['Roboto'] font-[900] text-lg sm:text-xl uppercase mb-1 sm:mb-1.5 ${
                      isFeatured ? 'text-white' : 'text-black'
                    }`}>
                      {scenario.title}
                    </h3>
                    <p className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.1em] mb-3 sm:mb-4 ${
                      isFeatured ? 'text-[#EEFF41]' : 'text-black/50'
                    }`}>
                      {scenario.subtitle}
                    </p>
                    <p className={`text-xs sm:text-sm font-['Inter'] leading-relaxed mb-4 sm:mb-6 flex-grow ${
                      isFeatured ? 'text-white/70' : 'text-black/60'
                    }`}>
                      {scenario.description}
                    </p>

                    {/* Metadata Section - Premium glassmorphism */}
                    <div className={`space-y-2 sm:space-y-2.5 p-3 sm:p-4 mb-4 sm:mb-6 ${
                      isFeatured ? 'bg-white/10 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl' : 'bg-white/50 backdrop-blur-sm border border-black/5 rounded-lg sm:rounded-xl'
                    }`}>
                      <div className="flex justify-between items-center">
                        <span className={`text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider ${isFeatured ? 'text-white/40' : 'text-black/40'}`}>Durée</span>
                        <span className={`text-[11px] sm:text-xs font-bold ${isFeatured ? 'text-white' : 'text-black'}`}>{scenario.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider ${isFeatured ? 'text-white/40' : 'text-black/40'}`}>Budget</span>
                        <span className={`text-[11px] sm:text-xs font-bold ${isFeatured ? 'text-[#EEFF41]' : 'text-black'}`}>{scenario.investment}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider ${isFeatured ? 'text-white/40' : 'text-black/40'}`}>Cible</span>
                        <span className={`text-[10px] sm:text-[11px] font-medium truncate ml-4 ${isFeatured ? 'text-white/60' : 'text-black/50'}`}>{scenario.idealFor}</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className={`w-full h-[44px] sm:h-[48px] text-[11px] sm:text-[12px] font-['Inter'] font-semibold tracking-[-0.01em] flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 ${
                        isFeatured
                          ? 'bg-[#EEFF41]/90 backdrop-blur-xl text-black border border-[#EEFF41]/50 shadow-[0_4px_24px_-1px_rgba(238,255,65,0.25),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:bg-[#EEFF41] hover:shadow-[0_8px_32px_-4px_rgba(238,255,65,0.4),inset_0_1px_0_0_rgba(255,255,255,0.4)] hover:-translate-y-0.5'
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
      </section>

      {/* SECTION À PROPOS DE VIZION */}
      {/* SEO: Présentation agence marketing Toulouse - équipe et valeurs */}
      {/* Images: 500x600px (5:6) pour photo équipe, 56x56px cercle pour avatar fondateur */}
      <section
        className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-[#F2F2F2]"
        aria-label="À propos de Vizion agence marketing Toulouse"
      >
        <div className="max-w-[82.5rem] mx-auto">
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
              <div className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-8 md:p-10">
                <Quote className="text-[#EEFF41] mb-4 sm:mb-6" size={20} strokeWidth={2.5} fill="currentColor" />
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
                <div className="relative aspect-[4/3] sm:aspect-[5/6] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-[#F2F2F2]">
                  <ImagePlaceholder
                    width={500}
                    height={600}
                    label="Photo équipe Vizion Toulouse"
                    rounded="none"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption Card - Premium Glassmorphism */}
                <div className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6">
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
                  <Star key={0} size={16} className="sm:hidden" />,
                  <Zap key={1} size={16} className="sm:hidden" />,
                  <Shield key={2} size={16} className="sm:hidden" />,
                  <Lightbulb key={3} size={16} className="sm:hidden" />
                ];
                const iconsLg = [
                  <Star key={0} size={18} className="hidden sm:block" />,
                  <Zap key={1} size={18} className="hidden sm:block" />,
                  <Shield key={2} size={18} className="hidden sm:block" />,
                  <Lightbulb key={3} size={18} className="hidden sm:block" />
                ];
                return (
                  <div
                    key={i}
                    className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-5 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-black/5 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 text-black group-hover:bg-[#EEFF41] transition-colors">
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
      </section>

      {/* SECTION ÉQUIPE */}
      {/* SEO: Équipe agence marketing Toulouse - experts B2B */}
      {/* Images: 260x320px (13:16) pour portraits membres */}
      <section
        className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-white"
        aria-label="Équipe agence marketing Toulouse"
      >
        <div className="max-w-[82.5rem] mx-auto">
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
            <div className="flex items-center gap-1.5 sm:gap-2 bg-black/90 backdrop-blur-xl text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/10 shadow-[0_4px_16px_-1px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
              <Users size={12} className="sm:hidden" />
              <Users size={14} className="hidden sm:block" />
              <span className="text-[10px] sm:text-xs font-bold uppercase">{homeContent.equipe.modelExplanation.director}</span>
            </div>
            <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/60 backdrop-blur-md border border-black/5 rounded-lg text-black/30 font-bold shadow-sm text-sm">+</span>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#EEFF41]/90 backdrop-blur-xl text-black px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#EEFF41]/50 shadow-[0_4px_16px_-1px_rgba(238,255,65,0.25),inset_0_1px_0_0_rgba(255,255,255,0.3)]">
              <Rocket size={12} className="sm:hidden" />
              <Rocket size={14} className="hidden sm:block" />
              <span className="text-[10px] sm:text-xs font-bold uppercase">{homeContent.equipe.modelExplanation.squads}</span>
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
                  <div className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-xl sm:rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/90 backdrop-blur-md border border-black/5 text-black text-[9px] sm:text-[10px] font-bold uppercase tracking-tight rounded-lg sm:rounded-xl shadow-md">
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
      </section>

      {/* SECTION BLOG */}
      {/* SEO: Articles marketing B2B Toulouse - expertise et conseils */}
      {/* Images: 400x225px (16:9) pour thumbnails articles */}
      <section
        className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-[#F2F2F2]"
        aria-label="Articles marketing B2B agence Toulouse"
      >
        <div className="max-w-[82.5rem] mx-auto">
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
              className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-black bg-white/70 backdrop-blur-sm border border-black/5 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 hover:text-black/70 hover:shadow-md transition-all duration-300 group mt-4 sm:mt-6 md:mt-0"
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
                  className="group bg-white/80 backdrop-blur-xl border border-black/5 rounded-xl sm:rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
                <div key={i} className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-xl sm:rounded-2xl shadow-md overflow-hidden">
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
      </section>

      {/* SECTION FAQ */}
      <FAQSection />

      {/* FINAL CTA */}
      {/* SEO: Call-to-action agence marketing Toulouse - contact */}
      <section
        className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 bg-[#F2F2F2]"
        aria-label="Contactez l'agence marketing Toulouse"
      >
        <div className="max-w-[82.5rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-black via-[#0A0A0A] to-black/95 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 lg:p-20 text-center relative overflow-hidden"
          >
            {/* Subtle inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EEFF41]/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Trust badge - glassmorphism */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl shadow-lg mb-5 sm:mb-8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={8} className="fill-[#EEFF41] text-[#EEFF41] sm:hidden" />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-[#EEFF41] text-[#EEFF41] hidden sm:block" />
                  ))}
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-white/70 uppercase tracking-widest">
                  {homeContent.finalCta.trustBadge}
                </span>
              </div>

              <h2 className="font-['Roboto'] font-[900] text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] leading-tight tracking-tight uppercase text-white mb-4 sm:mb-6">
                {homeContent.finalCta.h2}
              </h2>
              <p className="text-white/60 text-sm sm:text-base md:text-lg font-['Inter'] leading-relaxed mb-8 sm:mb-10 md:mb-12">
                {homeContent.finalCta.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
                <Link
                  href={homeContent.finalCta.cta.primary.href}
                  className="w-full sm:w-auto h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-[#EEFF41]/90 backdrop-blur-xl text-black border border-[#EEFF41]/50 shadow-[0_4px_24px_-1px_rgba(238,255,65,0.25),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:bg-[#EEFF41] hover:shadow-[0_8px_32px_-4px_rgba(238,255,65,0.4),inset_0_1px_0_0_rgba(255,255,255,0.4)] hover:-translate-y-0.5 group"
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
                  <div key={i} className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/5 text-white/50 text-xs sm:text-sm">
                    <CheckCircle2 size={12} className="text-[#EEFF41] sm:hidden" />
                    <CheckCircle2 size={15} className="text-[#EEFF41] hidden sm:block" />
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
