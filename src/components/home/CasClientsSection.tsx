"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Play, Pause } from "lucide-react";

import Image from "next/image";

const CAS_CLIENTS = [
  {
    id: 1,
    company: "Eldo Wallet",
    sector: "FinTech B2B",
    title: "De 1 000 à 10 000 € de revenus récurrents mensuels grâce à la bonne stratégie de mise en marché.",
    quote: "Vizion a structuré notre mise en marché de A à Z. Le positionnement, le tunnel de vente, les outils commerciaux, tout était aligné. Les résultats ont suivi naturellement.",
    author: "Paul Scandella",
    role: "Fondateur",
    avatar: "/images/clients/eldo.avif",
    mainImage: "/images/cas-clients/eldo-mainimage.avif",
    secondaryImage: "/images/cas-clients/eldo-secondaryimage.avif",
    stats: { value: "x10", label: "revenu récurrent" },
  },
  {
    id: 2,
    company: "easyVirtual.tours",
    sector: "Franchise",
    title: "D'acteur local à +25 agences en France grâce à notre accompagnement global.",
    quote: "Nous externalisons une grosse partie de notre marketing auprès de Vizion : stratégie produit, aide à la vente, automatisation CRM, gestion de nos campagnes. Nous en sommes toujours très satisfaits, même deux ans après.",
    author: "Clément Carrère",
    role: "Fondateur",
    avatar: "/images/clients/easyvirtual.avif",
    mainImage: "/images/cas-clients/easyvirtual-mainimage.avif",
    secondaryImage: "/images/cas-clients/easyvirtual-secondaryimage.avif",
    stats: { value: "+25", label: "agences en France" },
  },
  {
    id: 3,
    company: "Ensenat Coaching",
    sector: "Coaching & Formation",
    title: "De zéro structure marketing à un système d'acquisition reproductible pour Ensenat Coaching.",
    quote: "L'accompagnement d'Hugo et Lucas est vraiment qualitatif ! Compétents et très bons formateurs. Je recommande cette agence de Marketing digital à Toulouse !",
    author: "Thomas Ensenat",
    role: "Fondateur",
    avatar: "/images/clients/ensenat.avif",
    mainImage: "/images/cas-clients/ensenat-mainimage.avif",
    secondaryImage: "/images/cas-clients/ensenat-secondaryimage.avif",
    stats: { value: "100%", label: "marketing structuré" },
  },
];

const AUTO_SLIDE_INTERVAL = 6000;

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
    <section id="cas-clients" className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-[#fafafa] overflow-hidden">
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
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Cas clients
              </span>
            </div>
            <h2 className="font-heading font-medium text-[24px] sm:text-[32px] md:text-[42px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary">
              Nos clients vous parlent de leur expérience aux côtés de notre agence Marketing
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
              className="min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#D4FD00] hover:text-primary transition-all duration-300"
              aria-label="Cas suivant"
            >
              <ArrowRight size={20} />
            </button>
            <span className="text-[14px] font-[var(--font-body)] text-muted ml-2">
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4"
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

              {/* Top - Title */}
              <div className="relative z-10">
                <h3 className="font-heading font-semibold text-[22px] sm:text-[30px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-primary mb-4 sm:mb-6">
                  {currentCase.title}
                </h3>
              </div>

              {/* Bottom - Sector, description, button */}
              <div className="relative z-10 mt-auto">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1.5 border border-[#1a1a1a] text-primary text-[11px] font-medium tracking-wide uppercase">
                    {currentCase.sector}
                  </span>
                </div>
                <p className="text-primary/70 text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed">
                  Découvrez comment {currentCase.company} a transformé sa stratégie marketing et commerciale avec Vizion.
                </p>
              </div>
            </motion.div>

            {/* Center - Main Image - hauteur mobile adaptée */}
            <motion.div variants={itemVariants} className="lg:col-span-5 relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[520px]">
              <div className="relative h-full overflow-hidden">
                {/* Decorative frame */}
                <div className="absolute -inset-1 border border-[#D4FD00]/20 pointer-events-none z-10" />
                <Image
                  src={currentCase.mainImage}
                  alt={currentCase.company}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 via-transparent to-transparent" />

                {/* Company badge on image */}
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2">
                  <span className="font-heading font-semibold text-[14px] text-white">
                    {currentCase.company}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right - Secondary Image + Quote */}
            <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-2 sm:gap-4">
              {/* Secondary Image + Author glassmorphism badge */}
              <div className="relative h-[280px] sm:h-[320px] lg:h-[380px] overflow-hidden">
                <Image
                  src={currentCase.secondaryImage}
                  alt={`${currentCase.company} - secondaire`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/20 to-transparent" />

                {/* Author glassmorphism badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg">
                  <p className="font-heading font-semibold text-[13px] !text-white" style={{ color: '#ffffff' }}>
                    {currentCase.author}
                  </p>
                  <p className="text-[11px] !text-white" style={{ color: '#ffffff' }}>
                    {currentCase.role}, {currentCase.company}
                  </p>
                </div>
              </div>

              {/* Quote Box */}
              <div className="relative bg-white p-3 sm:p-5 flex flex-col justify-between border border-[#1a1a1a]/5">
                <div className="relative z-10">
                  <Quote size={28} className="text-[#D4FD00] mb-3" />
                  <p className="text-primary/80 text-[13px] sm:text-[14px] font-[var(--font-body)] leading-relaxed">
                    &ldquo;{currentCase.quote}&rdquo;
                  </p>
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
      </div>
    </section>
  );
}

export default CasClientsSection;
