"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Play, Pause } from "lucide-react";
import Link from "next/link";

const CAS_CLIENTS = [
  {
    id: 1,
    company: "TechVision SAS",
    sector: "Éditeur de logiciels",
    title: "Comment TechVision a multiplié par 3 ses leads qualifiés en 6 mois",
    quote: "Vizion a transformé notre approche commerciale. Nos cycles de vente ont été réduits de 40% grâce aux nouveaux outils de sales enablement.",
    author: "Marie Dupont",
    role: "Directrice Marketing",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200",
    mainImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600",
    stats: { value: "+180%", label: "de leads qualifiés" },
    link: "/cas-clients/techvision",
  },
  {
    id: 2,
    company: "IndustriePro",
    sector: "Industrie manufacturière",
    title: "IndustriePro repositionne son offre et conquiert de nouveaux marchés",
    quote: "Le travail de positionnement réalisé avec Vizion nous a permis de nous différencier clairement de nos concurrents. Les résultats sont au rendez-vous.",
    author: "Jean-Pierre Martin",
    role: "Directeur Général",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200",
    mainImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
    stats: { value: "+65%", label: "de CA sur 12 mois" },
    link: "/cas-clients/industriepro",
  },
  {
    id: 3,
    company: "CloudScale",
    sector: "SaaS B2B",
    title: "CloudScale structure son marketing produit pour accélérer sa croissance",
    quote: "Nous avions un excellent produit mais un message confus. Vizion nous a aidé à clarifier notre proposition de valeur et à équiper nos commerciaux.",
    author: "Sophie Bernard",
    role: "CEO & Co-fondatrice",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200",
    mainImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200",
    secondaryImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600",
    stats: { value: "-45%", label: "cycle de vente" },
    link: "/cas-clients/cloudscale",
  },
];

const AUTO_SLIDE_INTERVAL = 6000;

// Témoignages - Ajoutez facilement de nouveaux témoignages ici
const TESTIMONIALS = [
  {
    id: 1,
    quote: "Vizion a transformé notre approche commerciale. Nos cycles de vente ont été réduits de 40%.",
    author: "Marie Dupont",
    role: "Directrice Marketing",
    company: "TechVision SAS",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
  },
  {
    id: 2,
    quote: "Le travail de positionnement nous a permis de nous différencier clairement de nos concurrents.",
    author: "Jean-Pierre Martin",
    role: "Directeur Général",
    company: "IndustriePro",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150",
  },
  {
    id: 3,
    quote: "Vizion nous a aidé à clarifier notre proposition de valeur et à équiper nos commerciaux.",
    author: "Sophie Bernard",
    role: "CEO & Co-fondatrice",
    company: "CloudScale",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
  },
  {
    id: 4,
    quote: "Une équipe réactive et des résultats concrets dès le premier trimestre.",
    author: "Thomas Laurent",
    role: "DG",
    company: "IndusPro",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
  },
  {
    id: 5,
    quote: "Leur expertise en sales enablement a boosté notre taux de conversion de 65%.",
    author: "Camille Rousseau",
    role: "Head of Sales",
    company: "DataFlow",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150",
  },
  {
    id: 6,
    quote: "Le meilleur investissement marketing que nous ayons fait cette année.",
    author: "Pierre Lefebvre",
    role: "CFO",
    company: "FinanceHub",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
  },
  {
    id: 7,
    quote: "Vizion a su comprendre nos enjeux et proposer des solutions sur mesure.",
    author: "Émilie Chen",
    role: "CMO",
    company: "StartupX",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
  },
  {
    id: 8,
    quote: "Notre site génère maintenant 3x plus de leads qualifiés qu'avant.",
    author: "Julien Moreau",
    role: "Fondateur",
    company: "GrowthLab",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150",
  },
  {
    id: 9,
    quote: "Un accompagnement stratégique de haut niveau, pas juste de l'exécution.",
    author: "Claire Petit",
    role: "Directrice Commerciale",
    company: "SalesForce FR",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150",
  },
];

// Composant carte témoignage
function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-white p-5 border border-[#1a1a1a]/5 hover:border-[#D4FD00]/50 transition-all duration-300">
      <div className="flex items-start gap-3 mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-10 h-10 object-cover"
        />
        <div>
          <p className="font-heading font-semibold text-[14px] text-[#1a1a1a]">
            {testimonial.author}
          </p>
          <p className="text-[12px] text-[#6b6b6b]">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
      <p className="text-[14px] text-[#1a1a1a]/80 font-[var(--font-body)] leading-relaxed">
        "{testimonial.quote}"
      </p>
    </div>
  );
}

export function CasClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const currentCase = CAS_CLIENTS[currentIndex];

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? CAS_CLIENTS.length - 1 : prev - 1));
    setProgress(0);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === CAS_CLIENTS.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + (100 / (AUTO_SLIDE_INTERVAL / 50));
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying, goToNext]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) setProgress(0);
  };

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-[#fafafa] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[60%] h-[50%] top-[-10%] right-[-15%]"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute w-[40%] h-[40%] bottom-[-5%] left-[-10%]"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.04) 0%, transparent 55%)',
          }}
        />
        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-3 h-3 bg-[#D4FD00]/20 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] left-[5%] w-2 h-2 border border-[#D4FD00]/30 hidden lg:block"
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header - mobile-first */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 sm:mb-10 md:mb-14"
        >
          <div className="max-w-xl mb-4 sm:mb-6 lg:mb-0">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
              <div className="w-2 h-2 bg-[#D4FD00]" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b] uppercase">
                Cas clients
              </span>
            </div>
            <h2 className="font-heading font-medium text-[24px] sm:text-[32px] md:text-[42px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]">
              Ils nous ont fait confiance
            </h2>
          </div>

          {/* Navigation - boutons tactiles sur mobile */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Auto-play toggle - zone tactile 44px min */}
            <button
              onClick={toggleAutoPlay}
              className="min-w-[44px] min-h-[44px] w-10 h-10 sm:w-10 sm:h-10 border border-[#1a1a1a]/10 flex items-center justify-center hover:bg-[#1a1a1a]/5 transition-all duration-300"
              aria-label={isAutoPlaying ? "Pause" : "Lecture"}
            >
              {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button
              onClick={goToPrevious}
              className="min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 border border-[#1a1a1a]/20 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              aria-label="Cas précédent"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#D4FD00] hover:text-[#1a1a1a] transition-all duration-300"
              aria-label="Cas suivant"
            >
              <ArrowRight size={20} />
            </button>
            <span className="text-[14px] font-[var(--font-body)] text-[#6b6b6b] ml-2">
              {String(currentIndex + 1).padStart(2, "0")} / {String(CAS_CLIENTS.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="hidden lg:flex gap-2 mb-8">
          {CAS_CLIENTS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setProgress(0);
              }}
              className="flex-1 h-1 bg-[#1a1a1a]/10 overflow-hidden cursor-pointer"
            >
              <motion.div
                className="h-full bg-[#D4FD00]"
                initial={{ width: 0 }}
                animate={{
                  width: index === currentIndex ? `${progress}%` : index < currentIndex ? "100%" : "0%",
                }}
                transition={{ duration: 0.1 }}
              />
            </button>
          ))}
        </div>

        {/* Slider Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:h-[520px]"
          >
            {/* Left - Text Content - padding mobile réduit */}
            <motion.div variants={itemVariants} className="lg:col-span-4 relative flex flex-col justify-between h-full bg-[#D4FD00] p-4 sm:p-6 lg:p-8 overflow-hidden">
              {/* Black spray effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Main spray disc - top right */}
                <svg
                  className="absolute top-[-15%] right-[-10%] w-[70%] h-[70%]"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id="spray1" x="-50%" y="-50%" width="200%" height="200%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
                      <feGaussianBlur stdDeviation="1" />
                    </filter>
                    <radialGradient id="sprayGrad1" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="black" stopOpacity="0.5" />
                      <stop offset="40%" stopColor="black" stopOpacity="0.3" />
                      <stop offset="70%" stopColor="black" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="black" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="100" cy="100" r="80" fill="url(#sprayGrad1)" filter="url(#spray1)" />
                </svg>

                {/* Secondary spray disc - bottom left */}
                <svg
                  className="absolute bottom-[-20%] left-[-15%] w-[60%] h-[60%]"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id="spray2" x="-50%" y="-50%" width="200%" height="200%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
                      <feGaussianBlur stdDeviation="0.8" />
                    </filter>
                    <radialGradient id="sprayGrad2" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="black" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="black" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="black" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="100" cy="100" r="75" fill="url(#sprayGrad2)" filter="url(#spray2)" />
                </svg>

              </div>

              {/* Top - Title + Stat */}
              <div className="relative z-10">
                <h3 className="font-heading font-semibold text-[22px] sm:text-[30px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-4 sm:mb-6">
                  {currentCase.title}
                </h3>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-[32px] sm:text-[40px] text-[#1a1a1a]">
                    {currentCase.stats.value}
                  </span>
                  <span className="text-[14px] text-[#1a1a1a]/70 font-[var(--font-body)]">
                    {currentCase.stats.label}
                  </span>
                </div>
              </div>

              {/* Bottom - Sector, description, button */}
              <div className="relative z-10 mt-auto">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1.5 border border-[#1a1a1a] text-[#1a1a1a] text-[11px] font-medium tracking-wide uppercase">
                    {currentCase.sector}
                  </span>
                </div>
                <p className="text-[#1a1a1a]/70 text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed mb-5">
                  Découvrez comment {currentCase.company} a transformé sa stratégie marketing et commerciale avec Vizion.
                </p>
                <Link
                  href={currentCase.link}
                  className="inline-flex items-center gap-2 px-5 py-3 text-[14px] font-semibold text-white bg-[#1a1a1a] hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
                >
                  Lire le cas client
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Center - Main Image - hauteur mobile adaptée */}
            <motion.div variants={itemVariants} className="lg:col-span-5 relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-full">
              <div className="relative h-full overflow-hidden">
                {/* Decorative frame */}
                <div className="absolute -inset-1 border border-[#D4FD00]/20 pointer-events-none z-10" />
                <img
                  src={currentCase.mainImage}
                  alt={currentCase.company}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 via-transparent to-transparent" />

                {/* Company badge on image */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2">
                  <span className="font-heading font-semibold text-[14px] text-[#1a1a1a]">
                    {currentCase.company}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right - Secondary Image + Quote */}
            <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-2 sm:gap-4 h-[320px] sm:h-[360px] md:h-[400px] lg:h-full">
              {/* Secondary Image */}
              <div className="relative h-[40%] sm:h-[45%] overflow-hidden">
                <img
                  src={currentCase.secondaryImage}
                  alt={`${currentCase.company} - secondaire`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/20 to-transparent" />
              </div>

              {/* Quote Box */}
              <div className="relative bg-[#1a1a1a] p-3 sm:p-5 h-[60%] sm:h-[55%] flex flex-col justify-between overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4FD00]/10 blur-2xl" />

                <div className="relative z-10">
                  <Quote size={28} className="text-[#D4FD00] mb-3" />
                  <p className="text-white/90 text-[13px] sm:text-[14px] font-[var(--font-body)] leading-relaxed">
                    "{currentCase.quote}"
                  </p>
                </div>

                {/* Author with avatar */}
                <div className="relative z-10 flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                  <img
                    src={currentCase.avatar}
                    alt={currentCase.author}
                    className="w-10 h-10 object-cover border-2 border-[#D4FD00]"
                  />
                  <div>
                    <p className="font-heading font-semibold text-[14px] text-white">
                      {currentCase.author}
                    </p>
                    <p className="text-[12px] text-white/60">
                      {currentCase.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Dots - Mobile */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {CAS_CLIENTS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setProgress(0);
              }}
              className={`h-2 transition-all duration-300 ${
                index === currentIndex ? "bg-[#D4FD00] w-8" : "bg-[#1a1a1a]/20 w-2"
              }`}
              aria-label={`Aller au cas ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Stats */}
        <div className="lg:hidden mt-6 flex justify-center">
          <div className="relative bg-white p-4 border border-[#1a1a1a]/5">
            <div className="flex items-center gap-3">
              <span className="font-heading font-bold text-[28px] text-[#1a1a1a]">
                {currentCase.stats.value}
              </span>
              <span className="text-[14px] text-[#6b6b6b] font-[var(--font-body)]">
                {currentCase.stats.label}
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Marquee Section - hauteur réduite sur mobile */}
        <div className="mt-6 sm:mt-8">
          <div className="relative h-[380px] sm:h-[440px] md:h-[500px] overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#fafafa] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fafafa] to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
              {/* Column 1 - Scroll Up */}
              <div className="relative overflow-hidden">
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-4"
                >
                  {[...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3)].map((testimonial, idx) => (
                    <TestimonialCard key={`col1-${testimonial.id}-${idx}`} testimonial={testimonial} />
                  ))}
                </motion.div>
              </div>

              {/* Column 2 - Scroll Down */}
              <div className="relative overflow-hidden hidden md:block">
                <motion.div
                  initial={{ y: "-50%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-4"
                >
                  {[...TESTIMONIALS.slice(3, 6), ...TESTIMONIALS.slice(3, 6)].map((testimonial, idx) => (
                    <TestimonialCard key={`col2-${testimonial.id}-${idx}`} testimonial={testimonial} />
                  ))}
                </motion.div>
              </div>

              {/* Column 3 - Scroll Up */}
              <div className="relative overflow-hidden hidden md:block">
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-4"
                >
                  {[...TESTIMONIALS.slice(6, 9), ...TESTIMONIALS.slice(6, 9)].map((testimonial, idx) => (
                    <TestimonialCard key={`col3-${testimonial.id}-${idx}`} testimonial={testimonial} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CasClientsSection;
