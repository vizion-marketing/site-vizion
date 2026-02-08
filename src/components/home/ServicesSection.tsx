"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, PenTool, TrendingUp, Presentation, Cog, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { homeContent } from "@/content/home";

const piliers = homeContent.piliers;

const SERVICE_TITLES = [
  "Product Marketing",
  "Content Marketing",
  "Growth Marketing",
  "Sales Enablement",
  "Marketing Automation",
];

const SERVICE_ICONS = [Target, PenTool, TrendingUp, Presentation, Cog];

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800",
];

const SERVICE_DESCRIPTIONS = [
  "Matrice de positionnement, proposition de valeur, messaging framework",
  "Campagnes Meta, Google Ads, LinkedIn Ads, notoriété dirigeant",
  "Sites produit, landing pages, SEO, copywriting de conversion",
  "Pitch decks, battle cards, scripts d'appel, objection handling",
  "Outils de qualification, séquences de relance, CRM & automatisations",
];

const SERVICE_SHORT_DESCRIPTIONS = [
  "Positionnement & message",
  "Acquisition & visibilité",
  "Conversion & performance",
  "Outils commerciaux",
  "Process & automatisation",
];

const SERVICE_TAGS = [
  ["Positionnement", "Messaging", "Persona"],
  ["SEA", "Social Ads", "LinkedIn"],
  ["Landing pages", "SEO", "Copywriting"],
  ["Pitch deck", "Battle cards", "Scripts"],
  ["CRM", "Workflows", "Intégrations"],
];

// Spring animation config
const springConfig = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lockedIndex, setLockedIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: number) => {
    if (lockedIndex === null) {
      setActiveIndex(index);
    }
  };

  const handleClick = (index: number) => {
    if (lockedIndex === index) {
      setLockedIndex(null);
    } else {
      setLockedIndex(index);
      setActiveIndex(index);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const currentIndex = lockedIndex !== null ? lockedIndex : activeIndex;

  // Mobile navigation
  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? piliers.piliers.length - 1 : currentIndex - 1;
    setActiveIndex(newIndex);
    setLockedIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === piliers.piliers.length - 1 ? 0 : currentIndex + 1;
    setActiveIndex(newIndex);
    setLockedIndex(newIndex);
  };

  // Icon animation variants
  const iconVariants = {
    initial: { scale: 0.8, rotate: -10, opacity: 0 },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { ...springConfig, delay: 0.2 }
    },
  };

  // Text animation variants
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ...springConfig, delay: 0.1 }
    },
  };

  const tagVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { ...springConfig, delay: 0.3 + i * 0.05 }
    }),
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b]">
              {piliers.surtitre}
            </span>
          </div>

          <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] mb-4">
            {piliers.h2}
          </h2>

          <p className="text-[#6b6b6b] text-base font-[var(--font-body)] leading-relaxed">
            {piliers.description}
          </p>
        </motion.div>

        {/* Desktop Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex gap-2 h-[480px]"
        >
          {piliers.piliers.map((pilier, index) => {
            const isActive = currentIndex === index;
            const isLocked = lockedIndex === index;
            const Icon = SERVICE_ICONS[index];

            return (
              <motion.div
                key={pilier.numero}
                layout
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseMove={isActive ? handleMouseMove : undefined}
                onClick={() => handleClick(index)}
                className={`relative overflow-hidden rounded-lg cursor-pointer ${
                  isActive
                    ? "flex-[4]"
                    : "flex-[0.6] bg-[#fafaf8] hover:bg-[#f5f5f3]"
                } ${isActive ? "border-2 border-[#D4FD00]" : "border border-black/5 hover:border-black/10"}`}
                transition={springConfig}
              >
                {/* Background Image with Parallax */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.15 }}
                      animate={{ opacity: 1, scale: 1.1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                      style={{
                        transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) scale(1.1)`,
                      }}
                    >
                      <img
                        src={SERVICE_IMAGES[index]}
                        alt={SERVICE_TITLES[index]}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Gradient Overlay */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"
                  />
                )}

                {/* Content */}
                <div className={`absolute inset-0 flex ${isActive ? "p-5 sm:p-6 flex-col justify-between" : "p-4 flex-col justify-end items-center"}`}>
                  {isActive ? (
                    <>
                      {/* Top: Number + Lock */}
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={springConfig}
                            className="w-10 h-10 rounded-none bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
                          >
                            <span className="text-white font-heading font-medium text-sm">
                              {pilier.numero}
                            </span>
                          </motion.div>
                          {isLocked && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={springConfig}
                              className="px-2 py-1 bg-[#D4FD00] rounded-none"
                            >
                              <span className="text-[10px] font-semibold text-black uppercase tracking-wide">Verrouillé</span>
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* Bottom: Glassmorphism Content */}
                      <motion.div
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-4 sm:p-5"
                      >
                        <div className="flex items-start gap-4">
                          <motion.div
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            className="w-10 h-10 rounded-md bg-[#D4FD00] flex items-center justify-center shrink-0"
                          >
                            <Icon size={20} className="text-black" />
                          </motion.div>
                          <div className="flex-1">
                            <motion.h3
                              variants={textVariants}
                              initial="initial"
                              animate="animate"
                              className="font-heading font-semibold text-[20px] sm:text-[24px] leading-[1.1] tracking-[-0.02em] mb-2"
                              style={{ color: "#ffffff" }}
                            >
                              {SERVICE_TITLES[index]}
                            </motion.h3>

                            <motion.p
                              variants={textVariants}
                              initial="initial"
                              animate="animate"
                              className="text-white text-[12px] sm:text-[13px] font-[var(--font-body)] leading-relaxed mb-3"
                            >
                              {SERVICE_DESCRIPTIONS[index]}
                            </motion.p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {SERVICE_TAGS[index].map((tag, i) => (
                                <motion.span
                                  key={tag}
                                  custom={i}
                                  variants={tagVariants}
                                  initial="initial"
                                  animate="animate"
                                  className="px-2 py-0.5 bg-white/10 border border-white/20 rounded-none text-[10px] text-white/80 font-medium"
                                >
                                  {tag}
                                </motion.span>
                              ))}
                            </div>

                            {/* CTA */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.4 }}
                            >
                              <Link
                                href="/services"
                                className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-[#D4FD00] hover:text-white transition-colors group"
                              >
                                Nos services {SERVICE_TITLES[index]}
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    /* Collapsed */
                    <>
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-none bg-black/5 flex items-center justify-center">
                        <span className="text-[#6b6b6b] font-heading font-medium text-xs">
                          {pilier.numero}
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1 [writing-mode:vertical-rl] rotate-180">
                        <h3 className="font-heading font-semibold text-[14px] sm:text-[16px] text-[#1a1a1a] tracking-[-0.01em]">
                          {SERVICE_TITLES[index]}
                        </h3>
                        <span className="text-[11px] sm:text-[12px] text-[#6b6b6b] font-[var(--font-body)]">
                          {SERVICE_SHORT_DESCRIPTIONS[index]}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative" ref={carouselRef}>
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm border border-black/10 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm border border-black/10 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Carousel Content */}
            <div className="overflow-hidden mx-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={springConfig}
                  className="relative h-[450px] rounded-lg overflow-hidden border-2 border-[#D4FD00]"
                >
                  {/* Background Image */}
                  <img
                    src={SERVICE_IMAGES[currentIndex]}
                    alt={SERVICE_TITLES[currentIndex]}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                  {/* Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    {/* Top */}
                    <div className="w-10 h-10 rounded-none bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <span className="text-white font-heading font-medium text-sm">
                        {piliers.piliers[currentIndex].numero}
                      </span>
                    </div>

                    {/* Bottom */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <motion.div
                          variants={iconVariants}
                          initial="initial"
                          animate="animate"
                          className="w-10 h-10 rounded-md bg-[#D4FD00] flex items-center justify-center shrink-0"
                        >
                          {(() => {
                            const Icon = SERVICE_ICONS[currentIndex];
                            return <Icon size={20} className="text-black" />;
                          })()}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold text-[20px] leading-[1.1] tracking-[-0.02em] mb-2 text-white">
                            {SERVICE_TITLES[currentIndex]}
                          </h3>
                          <p className="text-white/70 text-[12px] font-[var(--font-body)] leading-relaxed mb-3">
                            {SERVICE_DESCRIPTIONS[currentIndex]}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {SERVICE_TAGS[currentIndex].map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 bg-white/10 border border-white/20 rounded-none text-[10px] text-white/80 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#D4FD00]"
                          >
                            Nos services
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {piliers.piliers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setLockedIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#D4FD00] w-6"
                  : "bg-black/20 hover:bg-black/40 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
