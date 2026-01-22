"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Zap, 
  ArrowRight, 
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  TrendingUp,
  Factory,
  Star,
  Hexagon,
  Target,
  Rocket,
  Settings2,
  Users,
  Quote,
  Brain,
  Sparkles,
  Shield,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeContent, faqSchema, organizationSchema } from "@/content/home";

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

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-[var(--space-4xl)] px-6 md:px-12 bg-white">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] text-neutral-400 font-bold uppercase mb-4 block">{homeContent.faq.surtitre}</span>
          <h2 className="font-['Roboto'] font-[900] text-[36px] md:text-[52px] leading-[1.05] tracking-tight uppercase text-black mb-6">
            {homeContent.faq.h2}
          </h2>
          <p className="text-black/60 text-lg font-['Inter'] max-w-2xl mx-auto">
            {homeContent.faq.description}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-black/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-['Roboto'] font-black text-base md:text-lg uppercase pr-8 text-black group-hover:text-black/70 transition-colors">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full bg-[#F2F2F2] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#EEFF41] ${openIndex === index ? 'bg-black' : ''}`}>
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-white' : 'text-black'}`} 
                  />
                </div>
              </button>
              
              <motion.div 
                initial={false}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-black/60 font-['Inter'] leading-relaxed pr-16">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-black/60 font-['Inter'] mb-6">
            {homeContent.faq.ctaText}
          </p>
          <Link 
            href={homeContent.faq.ctaButton.href}
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-[12px] font-black uppercase tracking-wider hover:bg-black/90 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all"
          >
            {homeContent.faq.ctaButton.text} <ArrowRight size={14} />
          </Link>
        </motion.div>
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
      <section className="relative pt-[100px] pb-[80px] px-6 md:px-12 bg-[#B7B7B7] bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] flex items-center min-h-[95vh] overflow-visible">
        {/* Pattern texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-[82.5rem] mx-auto w-full relative z-10">
          {/* CONTENT CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="w-full lg:max-w-[720px] lg:h-[750px] bg-black/20 backdrop-blur-md rounded-[var(--radius-xl)] p-8 md:p-12 shadow-2xl relative z-10 flex flex-col justify-between border border-white/10"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EEFF41] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EEFF41]"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.1em] text-white/60 uppercase">
                {homeContent.hero.badge}
              </span>
            </div>
            
            <h1 className="font-['Roboto'] font-[900] text-[36px] md:text-[52px] leading-[1.05] tracking-tight uppercase text-white mb-4">
              {homeContent.hero.h1}
            </h1>

            <p className="text-white text-lg md:text-xl leading-relaxed mb-4 max-w-2xl">
              {homeContent.hero.baseline}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 pb-4 border-b border-white/10">
              {homeContent.hero.badges.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-tight text-white/70">
                  <CheckCircle2 size={14} className="text-white shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link href={homeContent.hero.cta.primary.href} className="h-[56px] px-8 text-[15px] font-['Inter'] font-bold flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 hover:shadow-[0_0_20px_rgba(238,255,65,0.3)] rounded-[16px] transition-all">
                {homeContent.hero.cta.primary.text} <ArrowRight size={16} />
              </Link>
              <Link href={homeContent.hero.cta.secondary.href} className="h-[56px] px-8 text-[15px] font-['Inter'] font-bold flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 rounded-[16px] transition-all">
                {homeContent.hero.cta.secondary.text}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover grayscale" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#EEFF41]/30 bg-white flex items-center justify-center text-[10px] font-bold text-black shadow-[0_0_10px_rgba(238,255,65,0.2)]">
                  +70
                </div>
              </div>
              <div className="text-[10px] font-bold text-white/60 tracking-widest uppercase">
                {homeContent.hero.socialProof}
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE - IMMERSIVE & OVERLAPPING */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[550px] h-[750px] z-30 group"
          >
            <img 
              src="/hero-binoculars.png" 
              alt="Strategie" 
              className="w-full h-full object-cover shadow-2xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            />
            {/* Decorative frame elements */}
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#EEFF41]/40 z-20" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#EEFF41]/40 z-20" />
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-[var(--space-4xl)] px-6 md:px-12 bg-[#F9F9F9] border-y border-neutral-100 overflow-hidden">
        <div className="max-w-[82.5rem] mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="font-mono text-[10px] tracking-[0.4em] text-neutral-400 font-bold uppercase">{homeContent.preuveSociale.surtitre}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 items-end">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <h2 className="font-['Roboto'] font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tighter uppercase text-black">
                {homeContent.preuveSociale.h2.split(homeContent.preuveSociale.h2Highlight)[0]}<br />
                <span className="text-[#B7B7B7]">{homeContent.preuveSociale.h2Highlight}</span>.
              </h2>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-5 lg:pb-2"
            >
              <p className="text-[#6D6D6D] text-lg leading-relaxed font-medium max-w-lg">
                {homeContent.preuveSociale.description}
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 auto-rows-[300px]"
          >
            {[
              { 
                span: "lg:col-span-2 md:col-span-2", 
                type: "growth", 
                value: "25",
                subtitle: "Agences en France",
                title: "De l'unité pilote au réseau national", 
                logo: "easyVirtual.tours",
                category: "Franchise Immobilier",
                slug: "easyvirtual-tours-franchise",
                bg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000"
              },
              { 
                span: "lg:col-span-1 md:col-span-1", 
                type: "metric", 
                value: "1M", 
                label: "Vues cumulées", 
                logo: "Ensenat Coaching",
                category: "Personal Branding LinkedIn",
                slug: "cabinet-conseil-rh",
                accent: "text-neutral-900"
              },
              { 
                span: "lg:col-span-1 lg:row-span-2 md:col-span-1", 
                type: "minimal",
                logo: "Eldo Wallet", 
                category: "Go-to-Market Fintech",
                slug: "fintech-b2b",
                bg: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800"
              },
              { 
                span: "lg:col-span-2 lg:row-span-1 md:col-span-2", 
                type: "testimonial",
                slug: null
              },
              { 
                span: "lg:col-span-2 lg:row-span-1 md:col-span-2", 
                type: "metric", 
                value: "x3", 
                label: "Pipeline Commercial", 
                logo: "DataFlow Analytics",
                category: "SaaS B2B Marketing",
                slug: "saas-marketing-automation",
                accent: "text-neutral-900"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className={`${item.span} group relative bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.15),0_0_0_1px_rgba(238,255,65,0.2)] hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden`}
              >
                {/* Visual Background for Minimal/Growth */}
                {(item.type === 'minimal' || item.type === 'growth') && (
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent z-10" />
                    <div 
                      className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      style={{ backgroundImage: `url(${item.bg})` }}
                    />
                  </div>
                )}

                <div className="relative z-20 flex flex-col h-full">
                  {/* Top Bar */}
                  <div className="p-8 pb-0 flex justify-between items-start">
                    <span className={`font-['Roboto'] font-black text-sm tracking-widest uppercase ${item.type === 'minimal' || item.type === 'growth' ? 'text-white' : 'text-neutral-900'}`}>
                      {item.logo}
                    </span>
                    <div className={`font-mono text-[10px] font-bold ${item.type === 'minimal' || item.type === 'growth' ? 'text-white/40' : 'text-neutral-300'}`}>
                      0{i + 1}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 flex flex-col justify-center px-8">
                    {item.type === 'testimonial' ? (
                      <div className="flex flex-col md:flex-row gap-12 items-start py-2">
                        <div className="relative flex-shrink-0">
                          <div className="w-32 h-32 rounded-2xl bg-white border border-neutral-100 p-1 shadow-sm">
                            <div className="w-full h-full bg-[#F2F2F2] rounded-xl overflow-hidden" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex gap-1 mb-8 opacity-20">
                            {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-black" />)}
                          </div>
                          <div className="border-l-[3px] border-[#EEFF41] pl-8">
                            <blockquote className="text-2xl md:text-[24px] font-['Roboto'] font-medium mb-8 leading-[1.4] text-black max-w-2xl">
                              "{homeContent.preuveSociale.testimonial.quote}"
                            </blockquote>
                            <div className="space-y-1.5">
                              <h4 className="font-['Roboto'] font-black uppercase tracking-[0.15em] text-[11px] text-black">{homeContent.preuveSociale.testimonial.name}</h4>
                              <p className="text-[#B7B7B7] font-medium text-[10px] uppercase tracking-[0.2em]">{homeContent.preuveSociale.testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : item.type === 'growth' ? (
                      <div className="flex items-center gap-6">
                        <span className="text-8xl font-black text-white tracking-tighter leading-none">
                          {item.value}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-white/60 font-black uppercase text-[10px] tracking-widest mb-1">{item.subtitle}</span>
                          <h3 className="text-xl font-['Roboto'] font-black text-white uppercase leading-tight max-w-[200px]">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    ) : item.type === 'metric' ? (
                      item.logo === 'ensenat coaching' ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0">
                            <defs>
                              <linearGradient id="curveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#404040" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#262626" stopOpacity="0.8" />
                              </linearGradient>
                              <filter id="yellowGlow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                  <feMergeNode in="coloredBlur"/>
                                  <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                              </filter>
                            </defs>
                            <motion.path
                              d="M 0 180 Q 100 150, 200 80 T 400 20"
                              stroke="url(#curveGradient)"
                              strokeWidth="16"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.circle
                              cx="400"
                              cy="20"
                              r="12"
                              fill="#EEFF41"
                              filter="url(#yellowGlow)"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: 1.8, duration: 0.3 }}
                            />
                          </svg>
                          <div className="relative z-10 text-center">
                            <span className="text-8xl font-black tracking-tighter mb-2 block text-neutral-900 drop-shadow-[0_0_25px_rgba(238,255,65,0.4)]">
                              {item.value}
                            </span>
                            <span className="text-[12px] font-black uppercase tracking-[0.2em] text-neutral-900 bg-white/80 px-4 py-1 rounded-full shadow-[0_0_15px_rgba(238,255,65,0.25)] border border-[#EEFF41]/30">
                              {item.label}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center text-center">
                          <span className={`text-8xl font-black tracking-tighter mb-2 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(238,255,65,0.15)] ${item.accent || 'text-neutral-900'}`}>
                            {item.value}
                          </span>
                          <span className="text-[12px] font-black uppercase tracking-[0.2em] text-neutral-400 px-3 py-1 rounded-full bg-[#EEFF41]/5 border border-[#EEFF41]/20">
                            {item.label}
                          </span>
                        </div>
                      )
                    ) : (
                      <div className="h-full flex items-center justify-center">
                         <span className="font-['Roboto'] font-black text-white text-4xl lg:text-5xl tracking-tighter uppercase opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 text-center">
                          {item.logo}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  {item.type !== 'testimonial' && (
                    <div className={`px-8 py-6 flex items-center justify-between border-t transition-colors ${item.type === 'minimal' || item.type === 'growth' ? 'border-white/10 bg-black/20 backdrop-blur-md' : 'border-neutral-50 bg-white'}`}>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${item.type === 'minimal' || item.type === 'growth' ? 'text-white/60' : 'text-neutral-400'}`}>
                        {item.category}
                      </span>
                      <Link href={item.slug ? `/cas-clients/${item.slug}` : '/cas-clients'} className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group/link ${item.type === 'minimal' || item.type === 'growth' ? 'text-white' : 'text-black'} hover:drop-shadow-[0_0_3px_rgba(238,255,65,0.5)] transition-all`}>
                        Case Study 
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Banner with Scrolling Logos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-black/60 text-lg font-['Inter'] mb-8">
              {homeContent.preuveSociale.trustBanner.split(homeContent.preuveSociale.trustBannerHighlight)[0]}<span className="font-black text-black">{homeContent.preuveSociale.trustBannerHighlight}</span>{homeContent.preuveSociale.trustBanner.split(homeContent.preuveSociale.trustBannerHighlight)[1]}
            </p>
            
            {/* Scrolling Logo Banner */}
            <div className="relative overflow-hidden py-8">
              {/* Gradient masks */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F9F9F9] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9F9F9] to-transparent z-10" />
              
              {/* Scrolling container */}
              <div className="flex animate-scroll-left">
                {/* First set of logos */}
                <div className="flex items-center gap-16 px-8">
                  {homeContent.preuveSociale.logos.map((logo, i) => (
                    <div 
                      key={i} 
                      className="flex-shrink-0 h-12 px-6 flex items-center justify-center bg-white rounded-lg border border-black/5 shadow-sm"
                    >
                      <span className="font-['Roboto'] font-black text-sm uppercase tracking-wider text-black/30 whitespace-nowrap">
                        {logo}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex items-center gap-16 px-8">
                  {homeContent.preuveSociale.logos.map((logo, i) => (
                    <div 
                      key={`dup-${i}`} 
                      className="flex-shrink-0 h-12 px-6 flex items-center justify-center bg-white rounded-lg border border-black/5 shadow-sm"
                    >
                      <span className="font-['Roboto'] font-black text-sm uppercase tracking-wider text-black/30 whitespace-nowrap">
                        {logo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5 PILIERS SECTION */}
      <section className="py-[var(--space-4xl)] px-6 md:px-12 bg-[#F2F2F2]">
        <div className="max-w-[82.5rem] mx-auto">
          {/* Header Grid */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="surtitre text-black/60 mb-6 block"
              >
                {homeContent.piliers.surtitre}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="h2 leading-[1.05]"
              >
                {homeContent.piliers.h2}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-black/60 mt-8 text-xl font-['Inter'] leading-relaxed max-w-2xl"
              >
                {homeContent.piliers.description}
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-5 bg-white p-4 pr-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-grey-mid overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Expert" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.1em] font-black text-black/40 mb-0.5">{homeContent.piliers.badgeText}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#EEFF41] animate-pulse shadow-[0_0_8px_rgba(238,255,65,0.6)]" />
                  <p className="text-sm font-black text-black uppercase">{homeContent.piliers.badgeStatus}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* PILLIER 01 - GRANDE CARTE AVEC GRADIENT */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] rounded-[var(--radius-xl)] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group min-h-[600px]"
            >
              {/* Pattern texture overlay */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="relative drop-shadow-[0_0_15px_rgba(238,255,65,0.15)]">
                    <Hexagon className="text-white fill-white w-14 h-14" />
                    <span className="absolute inset-0 flex items-center justify-center text-black font-black text-sm">{homeContent.piliers.piliers[0].numero}</span>
                  </div>
                  <span className="surtitre text-white/60">{homeContent.piliers.piliers[0].surtitre}</span>
                </div>
                
                <h3 className="h2 text-[42px] mb-6 text-white uppercase">{homeContent.piliers.piliers[0].titre}</h3>
                <p className="text-white/80 text-lg mb-8 max-w-md font-['Inter']">
                  {homeContent.piliers.piliers[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-12">
                  {homeContent.piliers.piliers[0].services.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-[#EEFF41]/15 backdrop-blur-sm border border-[#EEFF41]/30 text-white text-[10px] font-bold rounded-full uppercase tracking-wider hover:bg-[#EEFF41]/25 hover:border-[#EEFF41]/50 transition-all shadow-[0_0_10px_rgba(238,255,65,0.1)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-auto z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 relative overflow-hidden">
                   <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-white" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                      </div>
                      <span className="text-[10px] font-black uppercase text-white/80">Live Analysis</span>
                   </div>
                   <div className="space-y-3">
                      <div className="h-4 bg-white/20 rounded w-3/4" />
                      <div className="h-4 bg-white/20 rounded w-full" />
                      <div className="h-20 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                         <BarChart3 className="text-white w-8 h-8 opacity-40" />
                      </div>
                   </div>
                   <button className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-2 shadow-lg">
                      {homeContent.piliers.piliers[0].cta} <ChevronRight size={12} />
                   </button>
                </div>
              </div>
            </motion.div>

            {/* PETITES CARTES (2x2 GRID) */}
            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* PILLIER 02 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card-white p-8 flex flex-col relative overflow-hidden group min-h-[280px]"
              >
                <span className="absolute top-2 right-4 text-8xl font-black text-black/[0.03] select-none z-0">02</span>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-[#F2F2F2] rounded-xl flex items-center justify-center mb-8 group-hover:shadow-[0_0_20px_rgba(238,255,65,0.2)] transition-shadow">
                    <Target className="text-black" size={22} />
                  </div>
                  <h4 className="font-['Roboto'] font-black text-xl uppercase leading-tight mb-3">{homeContent.piliers.piliers[1].titre}</h4>
                  <p className="text-sm text-black/60 font-['Inter'] mb-6 leading-relaxed">{homeContent.piliers.piliers[1].description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                     {homeContent.piliers.piliers[1].services.map(tag => (
                       <span key={tag} className="px-2.5 py-1 bg-[#F2F2F2] border border-black/5 text-black text-[9px] font-black rounded-md uppercase tracking-wider hover:bg-[#EEFF41] hover:border-[#EEFF41] hover:text-black hover:shadow-[0_0_15px_rgba(238,255,65,0.3)] transition-all">{tag}</span>
                     ))}
                  </div>
                </div>
              </motion.div>

              {/* PILLIER 03 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="card-white p-8 flex flex-col relative overflow-hidden group min-h-[280px]"
              >
                <span className="absolute top-2 right-4 text-8xl font-black text-black/[0.03] select-none z-0">03</span>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-[#F2F2F2] rounded-xl flex items-center justify-center mb-8 group-hover:shadow-[0_0_20px_rgba(238,255,65,0.2)] transition-shadow">
                    <Rocket className="text-black" size={22} />
                  </div>
                  <h4 className="font-['Roboto'] font-black text-xl uppercase leading-tight mb-3">{homeContent.piliers.piliers[2].titre}</h4>
                  <p className="text-sm text-black/60 font-['Inter'] mb-6 leading-relaxed">{homeContent.piliers.piliers[2].description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                     {homeContent.piliers.piliers[2].services.map(tag => (
                       <span key={tag} className="px-2.5 py-1 bg-[#F2F2F2] border border-black/5 text-black text-[9px] font-black rounded-md uppercase tracking-wider hover:bg-[#EEFF41] hover:border-[#EEFF41] hover:text-black hover:shadow-[0_0_15px_rgba(238,255,65,0.3)] transition-all">{tag}</span>
                     ))}
                  </div>
                  <div className="mt-auto">
                    <div className="h-3 w-full bg-[#F2F2F2] rounded-full overflow-hidden mb-2">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-black" 
                       />
                    </div>
                    <p className="text-[9px] font-black text-black/40 uppercase">Taux de conversion optimisé 85%</p>
                  </div>
                </div>
              </motion.div>

              {/* PILLIER 04 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="card-white p-8 flex flex-col relative overflow-hidden group min-h-[280px]"
              >
                <span className="absolute top-2 right-4 text-8xl font-black text-black/[0.03] select-none z-0">04</span>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-[#F2F2F2] rounded-xl flex items-center justify-center mb-8 group-hover:shadow-[0_0_20px_rgba(238,255,65,0.2)] transition-shadow">
                    <Users className="text-black" size={22} />
                  </div>
                  <h4 className="font-['Roboto'] font-black text-xl uppercase leading-tight mb-3">{homeContent.piliers.piliers[3].titre}</h4>
                  <p className="text-sm text-black/60 font-['Inter'] mb-8 leading-relaxed">{homeContent.piliers.piliers[3].description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                     {homeContent.piliers.piliers[3].services.map(tag => (
                       <span key={tag} className="px-2.5 py-1 bg-[#F2F2F2] text-black text-[9px] font-black rounded uppercase tracking-wider">{tag}</span>
                     ))}
                  </div>
                </div>
              </motion.div>

              {/* PILLIER 05 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="card-white p-8 flex flex-col relative overflow-hidden group min-h-[280px]"
              >
                <span className="absolute top-2 right-4 text-8xl font-black text-black/[0.03] select-none z-0">05</span>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 bg-[#F2F2F2] rounded-xl flex items-center justify-center mb-8 group-hover:shadow-[0_0_20px_rgba(238,255,65,0.2)] transition-shadow">
                    <Settings2 className="text-black" size={22} />
                  </div>
                  <h4 className="font-['Roboto'] font-black text-xl uppercase leading-tight mb-3">{homeContent.piliers.piliers[4].titre}</h4>
                  <p className="text-sm text-black/60 font-['Inter'] mb-6 leading-relaxed">{homeContent.piliers.piliers[4].description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                     {homeContent.piliers.piliers[4].services.map(tag => (
                       <span key={tag} className="px-2.5 py-1 bg-[#F2F2F2] border border-black/5 text-black text-[9px] font-black rounded-md uppercase tracking-wider hover:bg-[#EEFF41] hover:border-[#EEFF41] hover:text-black hover:shadow-[0_0_15px_rgba(238,255,65,0.3)] transition-all">{tag}</span>
                     ))}
                  </div>
                  <div className="mt-auto inline-flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl w-fit border border-[#EEFF41]/20 shadow-[0_0_15px_rgba(238,255,65,0.1)]">
                    <span className="text-[10px] font-black uppercase opacity-60">Gain de productivité</span>
                    <span className="text-lg font-black tracking-tight">x4.5</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Proof & CTAs */}
          <div className="mt-20 pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[5, 6, 7].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#F2F2F2] bg-grey-mid overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i+20}`} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="font-['Inter'] font-bold text-black/60 text-sm max-w-[280px]">
                {homeContent.piliers.ctaText.split(homeContent.piliers.socialProofText)[0]}<span className="text-black font-black">{homeContent.piliers.socialProofText}</span>{homeContent.piliers.ctaText.split(homeContent.piliers.socialProofText)[1]}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href={homeContent.piliers.cta.secondary.href} className="btn btn-secondary !px-8 flex items-center justify-center gap-2">
                {homeContent.piliers.cta.secondary.text} <ArrowRight size={18} />
              </Link>
              <Link href={homeContent.piliers.cta.primary.href} className="btn btn-primary !bg-black !text-white !px-8 flex items-center justify-center gap-2">
                {homeContent.piliers.cta.primary.text} <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION IA HIGHLIGHT */}
      <section className="py-[var(--space-4xl)] px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-[#111] via-[#000] to-[#6D6D6D]">
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#EEFF41]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] animate-pulse delay-700"></div>

        <div className="max-w-[82.5rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-stretch">
            
            {/* Left Side (40%) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#EEFF41] flex items-center justify-center shadow-[0_0_20px_rgba(238,255,65,0.4)]">
                  <Brain className="text-black" size={20} />
                </div>
                <span className="text-[11px] font-black tracking-[0.2em] text-white/60 uppercase">{homeContent.iaHighlight.surtitre}</span>
              </div>

              <h2 className="font-['Roboto'] font-[900] text-[36px] md:text-[52px] leading-[1.05] tracking-tight uppercase text-white mb-8">
                {homeContent.iaHighlight.h2}
              </h2>

              <p className="text-white/80 text-lg leading-relaxed font-['Inter'] mb-10">
                {homeContent.iaHighlight.introduction}
              </p>

              <ul className="space-y-6 mb-12">
                {homeContent.iaHighlight.whyImportant.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 w-5 h-5 rounded-full border border-[#EEFF41]/30 flex items-center justify-center group-hover:border-[#EEFF41] transition-colors">
                      <CheckCircle2 size={12} className="text-[#EEFF41]" />
                    </div>
                    <span className="text-white/70 font-['Inter'] text-base group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#EEFF41] text-black px-8 py-4 rounded-xl text-[13px] font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(238,255,65,0.6)] hover:scale-[1.02] transition-all"
                >
                  Prendre le pli maintenant <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Right Side Slider (60%) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative flex flex-col justify-center min-h-[500px]"
            >
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIASlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full flex flex-col"
                  >
                    {(() => {
                      const useCases = homeContent.iaHighlight.useCases;
                      const current = useCases[currentIASlide];
                      const next = () => setCurrentIASlide((prev) => (prev + 1) % useCases.length);
                      const prev = () => setCurrentIASlide((prev) => (prev - 1 + useCases.length) % useCases.length);

                      return (
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex-grow flex flex-col justify-between group hover:border-[#EEFF41]/20 transition-all duration-500">
                          <div>
                            <div className="flex flex-wrap gap-2 mb-8">
                              {current.tags.map((tag: string, idx: number) => (
                                <span key={idx} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold text-[#EEFF41] uppercase tracking-wider">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Image */}
                            {current.image && (
                              <div className="relative w-full h-48 md:h-64 mb-8 rounded-2xl overflow-hidden group/img">
                                <Image
                                  src={current.image}
                                  alt={current.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                                  sizes="(max-width: 768px) 100vw, 60vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                              </div>
                            )}
                            
                            <h3 className="font-['Roboto'] font-black text-3xl md:text-4xl text-white uppercase mb-4">
                              {current.title}
                            </h3>
                            <p className="text-white/60 font-['Inter'] text-lg mb-8 leading-relaxed max-w-2xl">
                              {current.description}
                            </p>

                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 mb-8">
                              <span className="text-[10px] font-black text-[#EEFF41] uppercase tracking-[0.2em] mb-2 block">Exemple Concret</span>
                              <p className="text-white/90 italic font-['Inter']">&ldquo;{current.example}&rdquo;</p>
                            </div>
                          </div>

                          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            {current.metric && (
                              <div className="flex flex-col">
                                <span className="text-[11px] font-black text-white/40 uppercase tracking-widest mb-1">Impact Mesuré</span>
                                <div className="text-5xl md:text-6xl font-black text-[#EEFF41] font-['Roboto'] tracking-tighter">
                                  {current.metric}
                                </div>
                              </div>
                            )}

                            {/* Slider Navigation Controls */}
                            <div className="flex items-center gap-4">
                              <div className="flex gap-1.5">
                                {useCases.map((_: any, idx: number) => (
                                  <button
                                    key={idx}
                                    onClick={() => setCurrentIASlide(idx)}
                                    className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentIASlide ? 'w-8 bg-[#EEFF41]' : 'w-1.5 bg-white/20'}`}
                                    aria-label={`Aller au cas d'usage ${idx + 1}`}
                                  />
                                ))}
                              </div>
                              <div className="flex gap-2 ml-4">
                                <button 
                                  onClick={prev}
                                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                                  aria-label="Cas d'usage précédent"
                                >
                                  <ChevronLeft size={20} />
                                </button>
                                <button 
                                  onClick={next}
                                  className="w-12 h-12 rounded-full bg-[#EEFF41] flex items-center justify-center text-black hover:scale-110 transition-all shadow-[0_0_20px_rgba(238,255,65,0.3)]"
                                  aria-label="Cas d'usage suivant"
                                >
                                  <ChevronRight size={20} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION QUAND COMMENCER */}
      <section className="py-[var(--space-4xl)] px-6 md:px-12 bg-[var(--bg-white)] border-y border-black/5">
        <div className="max-w-[82.5rem] mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 border-l-4 border-black pl-8"
          >
            <span className="surtitre text-[var(--color-grey-dark)] mb-4 block">{homeContent.quandCommencer.surtitre}</span>
            <h2 className="font-['Roboto'] font-[900] text-[40px] md:text-[48px] leading-[1.1] tracking-[-1.68px] uppercase text-black mb-6 max-w-4xl">
              {homeContent.quandCommencer.h2}
            </h2>
            <p className="text-[var(--color-grey-dark)] text-lg font-['Inter'] max-w-2xl leading-relaxed">
              {homeContent.quandCommencer.description}
            </p>
          </motion.div>

          {/* Premium Grid Layout - First 2 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {homeContent.quandCommencer.scenarios.slice(0, 2).map((scenario, i) => {
              const icons = [<Target key={0} size={20} />, <Zap key={1} size={20} />];
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group bg-[var(--bg-grey)] rounded-[var(--radius-lg)] p-10 border border-black/5 flex flex-col h-full hover:shadow-[var(--shadow-lg)] transition-all duration-500"
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-black/5 text-black">
                      {icons[i]}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-black/40 border border-black/10 px-3 py-1 rounded-full">
                      Option 0{i + 1}
                    </span>
                  </div>

                  {/* Badge */}
                  <span className="inline-block self-start px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded mb-4">
                    {scenario.badge}
                  </span>

                  {/* Content */}
                  <div className="mb-8">
                    <h3 className="font-['Roboto'] font-black text-2xl uppercase mb-2 text-black">{scenario.title}</h3>
                    <p className="text-[var(--color-grey-dark)] font-medium text-sm uppercase tracking-wider mb-4">{scenario.subtitle}</p>
                    <p className="text-black/70 text-base leading-relaxed">{scenario.description}</p>
                  </div>

                  {/* When to Choose */}
                  <div className="mb-8 p-5 bg-white rounded-lg border border-black/5">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.15em] mb-4 text-black flex items-center gap-2">
                      <CheckCircle2 size={12} />
                      Choisissez cette option si...
                    </h4>
                    <ul className="space-y-2">
                      {scenario.whenToChoose.slice(0, 3).map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-black/60">
                          <span className="w-1 h-1 rounded-full bg-black mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer with Stats & CTA */}
                  <div className="mt-auto pt-8 border-t border-black/5 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-black/40 mb-1">Timing</p>
                        <p className="text-sm font-bold text-black">{scenario.duration}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-black/40 mb-1">Budget</p>
                        <p className="text-sm font-bold text-black">{scenario.investment}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-black/40 mb-1">Pour</p>
                        <p className="text-xs font-medium text-black/70">{scenario.idealFor.split(' ')[0]}</p>
                      </div>
                    </div>
                    <Link 
                      href="/contact"
                      className="w-full inline-flex justify-between items-center px-6 py-4 bg-black text-white rounded-lg text-[12px] font-black uppercase tracking-wider hover:bg-black/80 transition-all group/btn"
                    >
                      {scenario.cta}
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Featured Card 3 - Direction Marketing Externalisée */}
          {homeContent.quandCommencer.scenarios[2] && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--bg-gradient-hero)] p-[2px]"
            >
              <div className="bg-black/30 backdrop-blur-sm rounded-[calc(var(--radius-lg)-2px)] p-10 md:p-14 flex flex-col lg:flex-row gap-12 text-white">
                {/* Left Content */}
                <div className="lg:w-3/5 space-y-8">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
                    <Users size={18} className="text-white" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{homeContent.quandCommencer.scenarios[2].badge}</span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 mb-2 block">Option 03 — Notre recommandation</span>
                    <h3 className="font-['Roboto'] font-black text-4xl md:text-5xl uppercase mb-4 leading-tight tracking-tighter">
                      {homeContent.quandCommencer.scenarios[2].title}
                    </h3>
                    <p className="text-white/60 font-medium text-lg mb-4">{homeContent.quandCommencer.scenarios[2].subtitle}</p>
                    <p className="text-lg text-white/70 max-w-xl leading-relaxed">
                      {homeContent.quandCommencer.scenarios[2].description}
                    </p>
                  </div>

                  {/* When to Choose */}
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.15em] mb-4 text-white/60 flex items-center gap-2">
                      <CheckCircle2 size={12} />
                      Choisissez cette option si...
                    </h4>
                    <ul className="space-y-2">
                      {homeContent.quandCommencer.scenarios[2].whenToChoose.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                    <div>
                      <p className="text-[11px] uppercase font-bold text-white/40 mb-2">Accompagnement</p>
                      <p className="text-xl font-black">{homeContent.quandCommencer.scenarios[2].duration}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase font-bold text-white/40 mb-2">Investissement</p>
                      <p className="text-xl font-black">{homeContent.quandCommencer.scenarios[2].investment}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase font-bold text-white/40 mb-2">Idéal pour</p>
                      <p className="text-sm font-bold text-white/80">{homeContent.quandCommencer.scenarios[2].idealFor}</p>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Deliverables & CTA */}
                <div className="lg:w-2/5 w-full bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col">
                  <p className="text-[11px] uppercase font-bold text-white/50 mb-6 tracking-widest">Ce que vous obtenez</p>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {homeContent.quandCommencer.scenarios[2].deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base font-medium">
                        <CheckCircle2 size={20} className="text-white/60 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact"
                    className="w-full inline-flex justify-center items-center gap-3 px-8 py-5 bg-white text-black rounded-lg text-sm font-black uppercase tracking-wider hover:bg-[var(--color-grey-light)] transition-all"
                  >
                    {homeContent.quandCommencer.scenarios[2].cta} <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Minimalist Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex flex-col items-center md:items-start">
              <p className="text-black font-['Roboto'] font-black text-sm uppercase tracking-tight">
                {homeContent.quandCommencer.bottomCta.text}
              </p>
              <p className="text-[var(--color-grey-dark)] text-xs font-['Inter']">
                {homeContent.quandCommencer.bottomCta.subtext}
              </p>
            </div>
            <Link 
              href={homeContent.quandCommencer.bottomCta.button.href}
              className="inline-flex items-center gap-3 text-[12px] font-black uppercase tracking-[2px] text-black hover:gap-5 transition-all group"
            >
              {homeContent.quandCommencer.bottomCta.button.text} 
              <span className="w-10 h-[1px] bg-black group-hover:w-16 transition-all"></span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION À PROPOS DE VIZION */}
      <section className="py-[var(--space-4xl)] px-6 md:px-12 bg-[#F2F2F2]">
        <div className="max-w-[82.5rem] mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
            {/* Text Block */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <span className="surtitre text-black/60 mb-6 block">{homeContent.aPropos.surtitre}</span>
              <h2 className="font-['Roboto'] font-[900] text-[36px] md:text-[52px] leading-[1.05] tracking-tight uppercase text-black mb-8">
                {homeContent.aPropos.h2}
              </h2>
              
              {homeContent.aPropos.paragraphs.map((para, i) => (
                <p key={i} className="text-black/70 text-lg font-['Inter'] leading-relaxed mb-8">
                  {para}
                </p>
              ))}

              {/* Founder Quote */}
              <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Quote className="text-[#EEFF41] mb-4" size={32} />
                <blockquote className="text-xl md:text-2xl font-['Roboto'] font-medium leading-[1.4] text-black mb-6">
                  "{homeContent.aPropos.founderQuote.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F2F2F2] overflow-hidden border-2 border-[#EEFF41]/30">
                    <img src="https://i.pravatar.cc/100?img=68" alt="Fondateur" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-['Roboto'] font-black uppercase tracking-[0.1em] text-[12px] text-black">{homeContent.aPropos.founderQuote.name}</h4>
                    <p className="text-black/50 text-[11px] uppercase tracking-wider">{homeContent.aPropos.founderQuote.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Photo Block */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000" 
                  alt="L'équipe Vizion" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Decorative frame */}
                <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-[#EEFF41]/60" />
                <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-[#EEFF41]/60" />
                
                {/* Caption */}
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-[10px] font-black tracking-[0.2em] text-white/60 uppercase mb-2 block">{homeContent.aPropos.photoCaption.label}</span>
                  <p className="text-white font-['Roboto'] font-black text-xl uppercase">{homeContent.aPropos.photoCaption.title}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-['Roboto'] font-black text-2xl uppercase mb-10 text-center">{homeContent.aPropos.valeursTitre}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {homeContent.aPropos.valeurs.map((value, i) => {
                const icons = [<Star key={0} size={24} />, <Zap key={1} size={24} />, <Shield key={2} size={24} />, <Lightbulb key={3} size={24} />];
                return (
                  <div 
                    key={i}
                    className="bg-white rounded-2xl p-6 border border-black/5 hover:border-[#EEFF41]/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F2F2F2] flex items-center justify-center mb-5 text-black group-hover:bg-[#EEFF41] group-hover:shadow-[0_0_15px_rgba(238,255,65,0.3)] transition-all">
                      {icons[i]}
                    </div>
                    <h4 className="font-['Roboto'] font-black text-base uppercase mb-3 text-black">{value.title}</h4>
                    <p className="text-black/60 text-sm font-['Inter'] leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION INTELLIGENCE COLLECTIVE */}
      <section className="py-[var(--space-4xl)] px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-[82.5rem] mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="surtitre text-black/60 mb-4 block">{homeContent.equipe.surtitre}</span>
            <h2 className="font-['Roboto'] font-[900] text-[36px] md:text-[52px] leading-[1.05] tracking-tight uppercase text-black mb-6">
              {homeContent.equipe.h2}
            </h2>
            <p className="text-black/60 text-lg font-['Inter'] max-w-3xl mx-auto mb-8">
              {homeContent.equipe.description}
            </p>

            {/* Model explanation */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 bg-[#F2F2F2] px-5 py-3 rounded-full">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <Users size={16} className="text-white" />
                </div>
                <span className="text-sm font-black uppercase text-black">{homeContent.equipe.modelExplanation.director}</span>
              </div>
              <span className="text-black/30 font-bold">+</span>
              <div className="flex items-center gap-3 bg-[#F2F2F2] px-5 py-3 rounded-full">
                <div className="w-8 h-8 rounded-full bg-[#EEFF41] flex items-center justify-center">
                  <Rocket size={16} className="text-black" />
                </div>
                <span className="text-sm font-black uppercase text-black">{homeContent.equipe.modelExplanation.squads}</span>
              </div>
            </div>
          </motion.div>

          {/* Team Slider */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {homeContent.equipe.members.map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-shrink-0 w-[280px] snap-center group"
                >
                  <div className="bg-[#F9F9F9] rounded-2xl overflow-hidden border border-transparent hover:border-[#EEFF41]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500">
                    {/* Photo */}
                    <div className="relative h-[280px] overflow-hidden">
                      <img 
                        src={member.img} 
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Specialty badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-black text-[10px] font-black uppercase tracking-wider rounded-full">
                          {member.specialty}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h4 className="font-['Roboto'] font-black text-lg uppercase mb-1 text-black">{member.name}</h4>
                      <p className="text-black/50 text-sm font-medium mb-4">{member.role}</p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, j) => (
                          <span key={j} className="px-2.5 py-1 bg-white border border-black/5 text-black text-[9px] font-black rounded-md uppercase tracking-wider">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-8 gap-2">
              <span className="text-[10px] font-black text-black/40 uppercase tracking-wider flex items-center gap-2">
                <ChevronRight size={14} className="animate-pulse" />
                {homeContent.equipe.scrollHint}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NOS DERNIERS ARTICLES */}
      <section className="py-[var(--space-4xl)] px-6 md:px-12 bg-[#F2F2F2]">
        <div className="max-w-[82.5rem] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="surtitre text-black/60 mb-4 block">{homeContent.blog.surtitre}</span>
              <h2 className="font-['Roboto'] font-[900] text-[36px] md:text-[52px] leading-[1.05] tracking-tight uppercase text-black">
                {homeContent.blog.h2}
              </h2>
            </motion.div>
            <Link 
              href="/blog" 
              className="flex items-center gap-2 text-sm font-bold text-black hover:gap-3 transition-all mt-4 md:mt-0"
            >
              {homeContent.blog.ctaText} <ArrowRight size={16} />
            </Link>
          </div>

          {/* Articles Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {latestPosts.length > 0 ? (
              latestPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  variants={fadeInUp}
                  className="group bg-white rounded-2xl overflow-hidden border border-transparent hover:border-[#EEFF41]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Image */}
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="aspect-video w-full overflow-hidden bg-[#F2F2F2] relative">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D]">
                          <div className="w-full h-full opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-black/40 mb-3 block">{post.category}</span>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="font-['Roboto'] font-black text-xl uppercase leading-tight mb-3 text-black group-hover:text-black/80 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-black/60 text-sm font-['Inter'] leading-relaxed mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                      <div className="flex gap-3">
                        <span className="text-[10px] font-bold text-black/40 uppercase">
                          {formatDate(post.date)}
                        </span>
                        <span className="text-[10px] font-bold text-black/40 uppercase">
                          • {post.readingTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-black group-hover:text-[#EEFF41] transition-colors"
                      >
                        Lire <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              // Placeholder cards if no posts
              [1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <div className="aspect-video w-full bg-[#F2F2F2]" />
                  <div className="p-6">
                    <div className="h-3 bg-[#F2F2F2] rounded w-1/4 mb-4" />
                    <div className="h-6 bg-[#F2F2F2] rounded w-3/4 mb-3" />
                    <div className="h-4 bg-[#F2F2F2] rounded w-full mb-2" />
                    <div className="h-4 bg-[#F2F2F2] rounded w-2/3" />
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <FAQSection />

      {/* CUSTOMER SUCCESS */}
      <section className="py-[var(--space-4xl)] px-6 md:px-12 bg-white">
        <div className="max-w-[82.5rem] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="surtitre text-black/60 mb-4 block">{homeContent.casClients.surtitre}</span>
              <h2 className="h2 mb-4">
                {homeContent.casClients.h2}
              </h2>
            </div>
            <Link href="/cas-clients" className="flex items-center gap-2 text-sm font-bold text-black hover:gap-3 transition-all mt-4 md:mt-0">
              {homeContent.casClients.ctaText} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="cards-grid grid-cols-1 md:grid-cols-2">
            {/* Case 1 - Fintech B2B */}
            <Link href={`/cas-clients/${homeContent.casClients.cases[0].slug}`}>
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="card-white bg-white flex-col items-start cursor-pointer transition-all hover:shadow-xl h-full"
              >
                <div className="flex items-start justify-between w-full mb-6">
                  <div className="p-3 bg-[#F2F2F2] rounded-lg">
                    <TrendingUp size={24} />
                  </div>
                  <span className="surtitre bg-black text-white px-3 py-1">{homeContent.casClients.cases[0].categorie}</span>
                </div>
                <h4 className="font-['Roboto'] font-black text-2xl uppercase mb-3">{homeContent.casClients.cases[0].titre}</h4>
                <p className="text-neutral-600 mb-6 text-sm leading-relaxed font-['Inter']">
                  {homeContent.casClients.cases[0].description}
                </p>
                <div className="flex items-center gap-2 surtitre group-hover:gap-4 transition-all mt-auto">
                  Lire l'étude <ArrowRight size={14} />
                </div>
              </motion.div>
            </Link>

            {/* Case 2 - ETI Manufacturing */}
            <Link href={`/cas-clients/${homeContent.casClients.cases[1].slug}`}>
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="card-white bg-white flex-col items-start cursor-pointer transition-all hover:shadow-xl h-full"
              >
                <div className="flex items-start justify-between w-full mb-6">
                  <div className="p-3 bg-[#F2F2F2] rounded-lg">
                    <Factory size={24} />
                  </div>
                  <span className="surtitre bg-black text-white px-3 py-1">{homeContent.casClients.cases[1].categorie}</span>
                </div>
                <h4 className="font-['Roboto'] font-black text-2xl uppercase mb-3">{homeContent.casClients.cases[1].titre}</h4>
                <p className="text-neutral-600 mb-6 text-sm leading-relaxed font-['Inter']">
                  {homeContent.casClients.cases[1].description}
                </p>
                <div className="flex items-center gap-2 surtitre group-hover:gap-4 transition-all mt-auto">
                  Lire l'étude <ArrowRight size={14} />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-[var(--space-4xl)] px-6 md:px-12 bg-[#F2F2F2]">
        <div className="max-w-[82.5rem] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] rounded-[var(--radius-xl)] p-12 md:p-20 text-center relative overflow-hidden"
          >
            {/* Pattern texture overlay */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            {/* Decorative elements */}
            <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-[#EEFF41]/20" />
            <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-[#EEFF41]/20" />
            
            <div className="relative z-10">
              {/* Trust badges */}
              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-[#EEFF41] text-[#EEFF41]" />)}
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-wider">{homeContent.finalCta.trustBadge}</span>
                </div>
              </div>

              <h2 className="font-['Roboto'] font-[900] text-[40px] md:text-[64px] leading-[1.1] md:leading-[58.8px] tracking-[-1.5px] md:tracking-[-2.24px] uppercase mb-6 text-white">
                {homeContent.finalCta.h2}
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-['Inter']">
                {homeContent.finalCta.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link 
                  href={homeContent.finalCta.cta.primary.href}
                  className="h-[56px] px-10 bg-white text-black rounded-xl text-[14px] font-black uppercase tracking-wider inline-flex items-center gap-3 hover:shadow-[0_0_30px_rgba(238,255,65,0.4)] transition-all"
                >
                  {homeContent.finalCta.cta.primary.text} <ArrowRight size={16} />
                </Link>
                <Link 
                  href={homeContent.finalCta.cta.secondary.href}
                  className="h-[56px] px-8 border-2 border-white/30 text-white rounded-xl text-[14px] font-bold inline-flex items-center gap-2 hover:bg-white/10 transition-all"
                >
                  {homeContent.finalCta.cta.secondary.text}
                </Link>
              </div>

              {/* Bottom trust elements */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/10">
                {homeContent.finalCta.trustElements.map((element, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle2 size={16} className="text-[#EEFF41]" />
                    <span>{element}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STUB */}
      <footer className="py-[var(--space-xl)] px-6 md:px-12 border-t border-[#F2F2F2]">
        <div className="max-w-[82.5rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-['Roboto'] font-black text-lg uppercase tracking-tight">
            STRAT<span className="text-neutral-400">EDGE</span>
          </p>
          <p className="surtitre text-neutral-400">
            © {new Date().getFullYear()} — TOUS DROITS RÉSERVÉS.
          </p>
        </div>
      </footer>
    </main>
  );
}
