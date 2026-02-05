"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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

// Scramble text animation component
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState(text.split("").map(() => SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]));
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number>(0);
  const resolvedRef = useRef(0);

  const animate = useCallback(() => {
    const target = text;
    const totalFrames = target.length * 3;

    const step = () => {
      frameRef.current++;
      const progress = frameRef.current / totalFrames;
      const resolved = Math.floor(progress * target.length);

      if (resolved > resolvedRef.current) resolvedRef.current = resolved;

      setDisplayed(
        target.split("").map((char, i) => {
          if (char === " " || char === "," || char === "-" || char === "'") return char;
          if (i < resolvedRef.current) return char;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
      );

      if (resolvedRef.current < target.length) {
        requestAnimationFrame(step);
      } else {
        setDisplayed(target.split(""));
      }
    };

    frameRef.current = 0;
    resolvedRef.current = 0;
    requestAnimationFrame(step);
  }, [text]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          animate();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted, animate]);

  return (
    <span ref={ref} className={className}>
      {displayed.map((char, i) => (
        <span key={i} className={i < resolvedRef.current ? "" : "opacity-70"}>
          {char}
        </span>
      ))}
    </span>
  );
}

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
                className="inline-block text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4"
              >
                {homeContent.faq.surtitre}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-['Inter'] font-bold text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.1] tracking-tight text-black mb-4 sm:mb-6"
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
                    <span className="font-['Inter'] font-bold text-xs sm:text-sm tracking-tight text-black group-hover:text-black/80 transition-colors pr-2">
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
// Assets Portfolio Section - Bento Grid Style
function AssetsPortfolioSection() {
  // Portfolio items with images and one testimonial
  const portfolioItems: Array<{
    id: number;
    span: string;
    type: 'image' | 'testimonial';
    image?: string;
    alt?: string;
    bg?: string;
    quote?: string;
    author?: string;
    company?: string;
  }> = [
    {
      id: 1,
      type: 'image',
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
      alt: "Logo design",
      span: "col-span-2 row-span-1",
      bg: "bg-[#1a1a6c]",
    },
    {
      id: 2,
      type: 'image',
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=600&auto=format&fit=crop",
      alt: "Brand mockup",
      span: "col-span-1 row-span-1",
      bg: "bg-[#1a1a6c]",
    },
    {
      id: 3,
      type: 'image',
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop",
      alt: "Mobile app",
      span: "col-span-1 row-span-2",
      bg: "bg-gradient-to-br from-[#1a1a6c] to-[#4a4adc]",
    },
    {
      id: 4,
      type: 'testimonial',
      span: "col-span-1 row-span-1",
      quote: "Un travail de qualité. Notre image de marque n'a jamais été aussi forte.",
      author: "Claire Fontaine",
      company: "MetalPro",
    },
    {
      id: 5,
      type: 'image',
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
      alt: "Presentation",
      span: "col-span-2 row-span-1",
      bg: "bg-[#1a1a1a]",
    },
    {
      id: 6,
      type: 'image',
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop",
      alt: "Social media",
      span: "col-span-1 row-span-1",
      bg: "bg-[#f0f0f0]",
    },
    {
      id: 7,
      type: 'image',
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=400&auto=format&fit=crop",
      alt: "App icon",
      span: "col-span-1 row-span-1",
      bg: "bg-gradient-to-br from-[#6366f1] to-[#a855f7]",
    },
    {
      id: 8,
      type: 'image',
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop",
      alt: "Brand guidelines",
      span: "col-span-1 row-span-1",
      bg: "bg-[#1a1a6c]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="font-['Inter'] font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a]">
            Des assets exceptionnels,
            <br />
            <span className="text-[#6b6b6b]">pour des clients exceptionnels.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px]">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${item.span} relative rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer`}
            >
              {item.type === 'testimonial' ? (
                // Testimonial Card
                <div className="absolute inset-0 bg-white p-4 sm:p-5 flex flex-col justify-between">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className="text-[#c8ff00] fill-[#c8ff00]"
                      />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-[12px] sm:text-[13px] font-['Inter'] leading-snug text-[#1a1a1a]/80 line-clamp-3">
                    "{item.quote}"
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#c8ff00]/30 to-[#c8ff00]/10 flex items-center justify-center text-[9px] font-bold text-[#1a1a1a]">
                      {item.author?.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-[#1a1a1a]">{item.author}</p>
                      <p className="text-[9px] text-[#666]">{item.company}</p>
                    </div>
                  </div>
                </div>
              ) : (
                // Image Card
                <>
                  <div className={`absolute inset-0 ${item.bg}`} />
                  <Image
                    src={item.image!}
                    alt={item.alt!}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Diagonal bottom → next section (À Propos) */}
      <SectionDiagonalBottom fillColor="#F2F2F2" direction="right" />
    </section>
  );
}

// About Section Component - Présentation de Vizion
// SEO: Introduction agence marketing stratégique Toulouse
function AboutSection() {
  const highlights = [
    "Des stratèges, pas des exécutants",
    "Le marketing aligné sur vos objectifs business",
    "L'IA au service de la performance"
  ];

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative grain-medium overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 20% 40%, rgba(200,255,0,0.06) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 80% 20%, rgba(200,255,0,0.04) 0%, transparent 40%),
          radial-gradient(ellipse 70% 60% at 70% 80%, rgba(180,180,180,0.08) 0%, transparent 50%),
          radial-gradient(ellipse 50% 50% at 10% 90%, rgba(200,200,200,0.06) 0%, transparent 40%),
          linear-gradient(135deg, #fafaf8 0%, #f0f0eb 100%)
        `
      }}
      aria-label="À propos de Vizion agence marketing Toulouse"
    >
      {/* Mesh gradient ambient glows */}
      <div className="absolute top-[15%] right-[15%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#c8ff00] opacity-[0.045] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[0%] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-slate-300/40 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[60%] left-[40%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#c8ff00] opacity-[0.025] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="relative mb-8 sm:mb-0"
          >
            {/* Main Image Container */}
            <div className="relative rounded-md sm:rounded-lg overflow-hidden shadow-2xl shadow-black/10 aspect-[4/3] lg:aspect-[4/3.5]">
              <Image
                src="/images/about/about-main.jpg"
                alt="Équipe Vizion - Agence marketing stratégique Toulouse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Person Badge - Bottom Left, overflowing on desktop, inside on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotate: -3 }}
              whileHover={{ scale: 1.03, rotate: -1, y: -3, transition: { duration: 0.15, ease: "easeOut" } }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="absolute bottom-3 left-3 sm:bottom-8 sm:-left-6 lg:-left-8 z-20 cursor-pointer"
            >
              <div className="bg-black/70 backdrop-blur-2xl border border-white/10 rounded-md sm:rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-xl shadow-black/30 transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/40">
                {/* Avatar */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 overflow-hidden relative">
                  <Image
                    src="/images/about/leo-bouyssou.jpg"
                    alt="Léo Bouyssou"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Info */}
                <div className="flex flex-col">
                  <span className="text-[12px] sm:text-[13px] font-semibold text-white leading-tight">
                    Léo Bouyssou
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-white/60 leading-tight">
                    Co-fondateur easyVirtual.tours
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Card - inside on mobile, overflowing on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 2 }}
              whileHover={{ scale: 1.03, rotate: 0, y: -3, transition: { duration: 0.15, ease: "easeOut" } }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="absolute -bottom-4 right-3 sm:bottom-6 sm:right-[-2rem] lg:right-[-3rem] z-20 cursor-pointer"
            >
              <div className="bg-black/70 backdrop-blur-2xl border border-white/10 rounded-md sm:rounded-lg p-4 sm:p-5 shadow-xl shadow-black/30 min-w-[160px] sm:min-w-[200px]">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md">
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-white">
                      Projets
                    </span>
                  </div>
                </div>

                {/* Mini Image */}
                <div className="relative w-full h-16 sm:h-20 rounded-md overflow-hidden mb-3">
                  <Image
                    src="/images/about/about-card.jpg"
                    alt="Projets clients"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Stats */}
                <div className="flex flex-col gap-1 mb-3">
                  <span className="text-3xl sm:text-4xl font-['Inter'] font-bold tracking-[-0.02em] text-white leading-none">
                    70+
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-['Inter'] font-medium text-white/70 leading-tight">
                    Entreprises accompagnées<br />depuis 2021
                  </span>
                </div>

                {/* CTA Tertiaire */}
                <Link
                  href="/cas-clients"
                  className="text-[10px] sm:text-[11px] font-semibold text-white/80 hover:text-white underline underline-offset-2 decoration-white/40 hover:decoration-white/80 transition-colors flex items-center gap-1 group"
                >
                  Découvrir nos cas clients
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Surtitre */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 rounded-full bg-[#c8ff00]" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.1em] text-[#6b6b6b]">
                À propos de nous
              </span>
            </div>

            {/* H2 Title */}
            <h2 className="font-['Inter'] font-bold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-5 sm:mb-6">
              La stratégie au service de la performance commerciale
            </h2>

            {/* Description */}
            <p className="text-[#6b6b6b] text-sm sm:text-base font-['Inter'] leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Vizion n'est pas une agence que l'on consulte pour produire un logo ou refaire une plaquette. Nous sommes des stratèges. Nous concevons des feuilles de route marketing alignées sur vos objectifs business, et nous les déployons jusqu'au terrain commercial.
            </p>

            {/* Highlights List */}
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#c8ff00] shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm sm:text-[15px] font-['Inter'] font-medium text-[#1a1a1a] leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <div>
              <Link
                href="/contact"
                className="inline-flex h-[48px] sm:h-[52px] px-6 sm:px-8 text-[13px] sm:text-[14px] font-['Inter'] font-semibold tracking-[-0.01em] bg-[#c8ff00] text-black rounded-full hover:bg-[#d4ff33] hover:-translate-y-0.5 transition-all duration-300 active:scale-95 items-center justify-center gap-2 border border-[#c8ff00] shadow-[0_4px_24px_-1px_rgba(200,255,0,0.3)] hover:shadow-[0_8px_32px_-4px_rgba(200,255,0,0.4)]"
              >
                <span>Découvrir notre approche</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Diagonal bottom → next section (Social Proof) */}
      <SectionDiagonalBottom fillColor="#fafaf8" direction="left" />
    </section>
  );
}

// Services Tabs Section Component - Vertical Tabs Design
// SEO: Services agence marketing B2B Toulouse
const servicesImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
];

function ServicesTabsSection() {
  const [activeService, setActiveService] = useState(0);
  const services = homeContent.piliers.piliers;

  return (
    <section
      className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-white relative"
      aria-label="Services agence marketing B2B Toulouse"
    >
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          {/* LEFT COLUMN - Header + Vertical Tabs */}
          <div className="lg:col-span-5 xl:col-span-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-10"
            >
              <span className="text-[12px] sm:text-[13px] font-['Inter'] text-[#6b6b6b] mb-3 block">
                (Nos Services)
              </span>
              <h2 className="font-['Inter'] font-bold text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-4">
                Une expertise sur mesure pour vos enjeux
              </h2>
              <p className="text-[#6b6b6b] text-sm sm:text-base font-['Inter'] leading-relaxed">
                Notre agence intervient sur cinq domaines complémentaires pour améliorer votre performance marketing et commerciale.
              </p>
            </motion.div>

            {/* Vertical Tabs */}
            <nav className="space-y-0 border-l border-black/10">
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left py-4 pl-5 pr-4 border-l-2 -ml-[2px] transition-all duration-300 group ${
                    activeService === index
                      ? "border-l-[#1a1a1a] bg-transparent"
                      : "border-l-transparent hover:border-l-black/20 hover:bg-black/[0.02]"
                  }`}
                >
                  <span
                    className={`block font-['Inter'] text-[14px] sm:text-[15px] transition-colors duration-300 ${
                      activeService === index
                        ? "font-semibold text-[#1a1a1a]"
                        : "font-normal text-[#999] group-hover:text-[#6b6b6b]"
                    }`}
                  >
                    {service.surtitre}
                  </span>
                </motion.button>
              ))}
            </nav>
          </div>

          {/* RIGHT COLUMN - Content Card */}
          <div className="lg:col-span-7 xl:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#fafaf8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-black/5"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8">
                  <Image
                    src={servicesImages[activeService]}
                    alt={services[activeService].surtitre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>

                {/* Service Title */}
                <h3 className="font-['Inter'] font-bold text-[22px] sm:text-[26px] md:text-[30px] leading-[1.15] tracking-[-0.01em] text-[#1a1a1a] mb-4">
                  {services[activeService].titre}
                </h3>

                {/* Description */}
                <p className="text-[#6b6b6b] text-sm sm:text-[15px] font-['Inter'] leading-relaxed mb-6 sm:mb-8">
                  {services[activeService].description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {services[activeService].services.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white border border-black/10 text-[11px] sm:text-[12px] font-['Inter'] font-medium text-[#6b6b6b] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="h-[44px] sm:h-[48px] px-5 sm:px-6 text-[13px] sm:text-[14px] font-['Inter'] font-semibold bg-[#1a1a1a] text-white rounded-full hover:bg-black/80 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    En savoir plus
                  </Link>
                  <Link
                    href="/contact"
                    className="h-[44px] sm:h-[48px] px-5 sm:px-6 text-[13px] sm:text-[14px] font-['Inter'] font-semibold bg-transparent text-[#1a1a1a] border border-black/20 rounded-full hover:bg-black/5 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Prendre rendez-vous
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Diagonal bottom → next section (IA Highlight) */}
      <SectionDiagonalBottom fillColor="#000000" direction="left" />
    </section>
  );
}

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote: "Travailler avec Vizion a complètement transformé notre approche commerciale. Ils ont identifié des opportunités que nous n'aurions jamais vues et nous ont aidés à structurer notre discours de vente. C'est la première fois qu'on sent notre marketing vraiment aligné avec nos objectifs business.",
    author: "Marie Dubois",
    role: "Directrice Générale",
    company: "TechFlow Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "L'équipe Vizion nous a accompagnés dans notre repositionnement B2B. Leur méthodologie est rigoureuse, leur expertise indéniable. En 6 mois, notre pipeline commercial a doublé et notre cycle de vente s'est réduit de 40%.",
    author: "Thomas Martin",
    role: "CEO",
    company: "IndustriaPlus",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "Ce qui distingue Vizion, c'est leur capacité à comprendre notre métier technique et à le traduire en message clair pour nos prospects. Nos commerciaux ont enfin des outils qu'ils utilisent vraiment.",
    author: "Sophie Laurent",
    role: "Directrice Marketing",
    company: "DataSphere",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
];

// Mini testimonials for bento grid
const miniTestimonials = [
  {
    id: 4,
    quote: "Une vision stratégique claire et une exécution impeccable. Notre CA a progressé de 35% en un an.",
    author: "Pierre Leroy",
    company: "Nextech",
  },
  {
    id: 5,
    quote: "Enfin une agence qui comprend les enjeux du B2B industriel. Résultats concrets et mesurables.",
    author: "Claire Fontaine",
    company: "MetalPro",
  },
  {
    id: 6,
    quote: "Le repositionnement de notre offre a complètement changé notre façon de prospecter.",
    author: "Marc Durand",
    company: "CloudSystems",
  },
  {
    id: 7,
    quote: "Leur expertise en sales enablement a transformé notre équipe commerciale.",
    author: "Julie Bernard",
    company: "InnovaLogic",
  },
  {
    id: 8,
    quote: "Accompagnement de qualité, réactif et toujours force de proposition.",
    author: "Antoine Roux",
    company: "TechVision",
  },
  {
    id: 9,
    quote: "Le meilleur investissement marketing qu'on ait fait depuis 5 ans.",
    author: "Émilie Moreau",
    company: "DataFlow",
  },
  {
    id: 10,
    quote: "Ils ont su structurer notre approche commerciale de A à Z.",
    author: "François Petit",
    company: "SoftwarePlus",
  },
  {
    id: 11,
    quote: "Une approche pragmatique qui génère des résultats tangibles.",
    author: "Nathalie Simon",
    company: "DigitalFirst",
  },
  {
    id: 12,
    quote: "Partenaire de confiance depuis 2 ans, toujours au rendez-vous.",
    author: "David Martin",
    company: "AutomateSmart",
  },
];

// Testimonials Section Component
function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative grain-light overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fafaf8 0%, #f0f0eb 100%)' }}
      aria-label="Témoignages clients Vizion"
    >
      {/* Ambient glow */}
      <div className="absolute top-[35%] left-[25%] w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[#c8ff00] opacity-[0.045] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 sm:mb-14 md:mb-16">
          <div className="max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-4 sm:mb-5"
            >
              <div className="w-2 h-2 rounded-full bg-[#c8ff00]" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.1em] text-[#6b6b6b]">
                Témoignages Clients
              </span>
            </motion.div>
            <div className="flex gap-4 sm:gap-5">
              <div className="w-[3px] shrink-0 mt-2 h-10 bg-[#c8ff00] rounded-full" />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-['Inter'] font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]"
              >
                Ce que nos clients disent de notre collaboration
              </motion.h2>
            </div>
          </div>

          {/* More Reviews Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 lg:mt-0"
          >
            <Link
              href="/cas-clients"
              className="h-[44px] sm:h-[48px] px-5 sm:px-7 text-[13px] sm:text-[14px] font-['Inter'] font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-[#0a0a0a] text-white border border-black/50 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-black/90 hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
            >
              <span>Plus d'avis</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg p-5 sm:p-8 md:p-10 shadow-sm card-hover-glow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5 sm:mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="text-[#c8ff00] fill-[#c8ff00]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[15px] sm:text-[17px] md:text-lg font-['Inter'] leading-relaxed text-[#1a1a1a] mb-6 sm:mb-8">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author & Google Logo */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-white shadow-lg">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-['Inter'] font-semibold text-xs sm:text-sm tracking-wide text-[#1a1a1a]">
                      {currentTestimonial.author}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#999]">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </p>
                  </div>
                </div>

                {/* Google Logo */}
                <div className="text-[#4285F4] font-['Inter'] font-medium text-lg sm:text-xl tracking-tight">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${currentTestimonial.id}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px] sm:min-h-[350px] rounded-md sm:rounded-lg overflow-hidden border border-black/10"
            >
              <Image
                src={currentTestimonial.image}
                alt={`${currentTestimonial.author} - ${currentTestimonial.company}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3 mt-8 sm:mt-10">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 flex items-center justify-center text-[#1a1a1a] hover:bg-white hover:shadow-md transition-all duration-300 active:scale-95"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 flex items-center justify-center text-[#1a1a1a] hover:bg-white hover:shadow-md transition-all duration-300 active:scale-95"
            aria-label="Témoignage suivant"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots indicator */}
          <div className="flex gap-2 ml-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#c8ff00] w-6"
                    : "bg-black/20 hover:bg-black/40 w-2"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials Bento Grid with Fade */}
        <div className="relative mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          >
            {miniTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/60 backdrop-blur-sm border border-black/8 rounded-lg p-4 sm:p-5 hover:bg-white/80 hover:border-black/12 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      className="text-[#c8ff00] fill-[#c8ff00]"
                    />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-[13px] sm:text-[14px] font-['Inter'] leading-relaxed text-[#1a1a1a]/80 mb-3 line-clamp-2">
                  "{testimonial.quote}"
                </p>
                {/* Author */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#c8ff00]/20 to-[#c8ff00]/5 flex items-center justify-center text-[10px] font-bold text-[#1a1a1a]">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#1a1a1a]">{testimonial.author}</p>
                    <p className="text-[10px] text-[#666]">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade to transparency overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(245, 245, 240, 0.5) 30%, rgba(245, 245, 240, 0.85) 60%, rgba(245, 245, 240, 1) 100%)'
            }}
          />
        </div>
      </div>

      {/* Diagonal bottom → next section (Équipe) */}
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
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.1em]" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {homeContent.hero.badge}
              </span>
            </div>

            <h1
              className="font-['Inter'] font-[600] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[0.95] tracking-[-0.03em]"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
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
                <div key={i} className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-tight" style={{ color: 'rgba(255,255,255,0.8)' }}>
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
            className="relative z-30 group overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl aspect-[4/3] lg:aspect-auto my-6 lg:my-0"
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
                <div className="text-white font-['Inter'] font-semibold text-2xl leading-none">+70</div>
                <div>
                  <div className="text-white text-xs font-semibold leading-tight">clients accompagnés</div>
                  <div className="text-white/40 text-[10px] font-medium mt-0.5">De la PME à l'ETI</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* Diagonal bottom → next section (About) */}
        <SectionDiagonalBottom fillColor="#fafaf8" direction="left" />
      </section>

      {/* ABOUT SECTION - Présentation de Vizion */}
      <AboutSection />

      {/* SERVICES SECTION - Vertical Tabs on White */}
      <ServicesTabsSection />

      {/* SECTION IA HIGHLIGHT */}
      {/* SEO: Expertise Vibe Coding et IA de l'agence marketing Toulouse */}
      {/* Images: 800x320px (5:2) pour les visuels slider */}
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-black relative overflow-hidden grain-overlay"
        aria-label="Expertise IA et Vibe Coding agence marketing Toulouse"
      >
        {/* Premium Mesh Gradient Background - like Hero */}
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
        {/* Subtle glow on right */}
        <div className="absolute top-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-gradient-to-bl from-[#EEFF41]/8 via-[#EEFF41]/3 to-transparent rounded-full blur-[150px]" />

        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4"
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
              className="font-['Inter'] font-bold text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight text-white mb-4 sm:mb-6"
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
                              <span key={idx} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/50 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] font-bold text-white tracking-wider rounded-md sm:rounded-lg">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Metric overlay */}
                          {current.metric && (
                            <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 text-right">
                              <span className="text-2xl sm:text-4xl md:text-5xl font-['Inter'] font-bold text-white block leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                                {current.metric}
                              </span>
                              <span className="text-[9px] sm:text-[10px] font-bold text-white/90 tracking-wider">
                                Impact mesuré
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                          <h3 className="font-['Inter'] font-bold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            {current.title}
                          </h3>
                          <p className="font-['Inter'] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            {current.description}
                          </p>

                          {/* Example quote */}
                          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-md sm:rounded-lg p-3 sm:p-5 mb-6 sm:mb-8">
                            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] mb-1.5 sm:mb-2 block" style={{ color: 'rgba(255,255,255,0.8)' }}>
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
        {/* Diagonal bottom → next section (Assets) */}
        <SectionDiagonalBottom fillColor="#f5f5f5" direction="right" />
      </section>

      {/* ASSETS PORTFOLIO SECTION */}
      <AssetsPortfolioSection />

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
              <span className="inline-block text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4">
                {homeContent.aPropos.surtitre}
              </span>
              <h2 className="font-['Inter'] font-bold text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight text-black mb-5 sm:mb-6 md:mb-8">
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
                    <h4 className="font-['Inter'] font-semibold text-xs sm:text-sm tracking-wide text-black">
                      {homeContent.aPropos.founderQuote.name}
                    </h4>
                    <p className="text-black/40 text-[10px] sm:text-[11px] font-bold tracking-wider">
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
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] text-black/40 mb-1 block">
                    {homeContent.aPropos.photoCaption.label}
                  </span>
                  <p className="font-['Inter'] font-semibold text-sm sm:text-base text-black">
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
            <h3 className="font-['Inter'] font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-center text-black">
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
                    <h4 className="font-['Inter'] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2 text-black tracking-tight">
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
        {/* Diagonal bottom → next section (Testimonials) */}
        <SectionDiagonalBottom fillColor="#fafaf8" direction="right" />
      </section>

      {/* SECTION TÉMOIGNAGES CLIENTS */}
      <TestimonialsSection />

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
              className="inline-block text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4"
            >
              {homeContent.equipe.surtitre}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Inter'] font-bold text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight text-black mb-4 sm:mb-6"
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
              <span className="text-[10px] sm:text-xs font-bold tracking-wide">{homeContent.equipe.modelExplanation.director}</span>
            </div>
            <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/60 backdrop-blur-md border border-black/5 rounded-lg text-black/30 font-bold shadow-sm text-sm">+</span>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white backdrop-blur-xl text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-black/10 shadow-[0_4px_16px_-1px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.5)] transition-all duration-300 hover:shadow-[0_6px_20px_-1px_rgba(0,0,0,0.12)] hover:-translate-y-0.5">
              <Rocket size={12} className="sm:hidden" />
              <Rocket size={14} className="hidden sm:block" />
              <span className="text-[10px] sm:text-xs font-bold tracking-wide">{homeContent.equipe.modelExplanation.squads}</span>
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
                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/90 backdrop-blur-md border border-black/5 text-black text-[9px] sm:text-[10px] font-bold tracking-tight rounded-md sm:rounded-lg shadow-md">
                          {member.specialty}
                        </span>
                      </div>
                    </div>

                    {/* Info - Clean stacked layout with premium spacing */}
                    <div className="p-4 sm:p-6">
                      <h4 className="font-['Inter'] font-semibold text-sm sm:text-base text-black mb-0.5 sm:mb-1 tracking-tight">
                        {member.name}
                      </h4>
                      <p className="text-black/40 text-xs sm:text-sm mb-3 sm:mb-5 font-medium">{member.role}</p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {member.skills.slice(0, 3).map((skill, j) => (
                          <span
                            key={j}
                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-black/5 backdrop-blur-sm border border-black/5 text-black/70 text-[9px] sm:text-[10px] font-semibold rounded-lg"
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
              <span className="text-[9px] sm:text-[10px] font-bold text-black/40 tracking-wider flex items-center gap-2">
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
                className="inline-block text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4"
              >
                {homeContent.blog.surtitre}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-['Inter'] font-bold text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight text-black"
              >
                {homeContent.blog.h2}
              </motion.h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-bold tracking-wider text-black bg-white/70 backdrop-blur-sm border border-black/5 rounded-md sm:rounded-lg px-3 sm:px-4 py-2 hover:text-black/70 hover:shadow-md transition-all duration-300 group mt-4 sm:mt-6 md:mt-0"
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
                      <span className="px-2 py-0.5 bg-black/5 backdrop-blur-sm border border-black/5 rounded-lg text-[9px] sm:text-[10px] font-bold tracking-wider text-black/60">
                        {post.category}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="font-['Inter'] font-semibold text-sm sm:text-base md:text-lg leading-tight mb-2 sm:mb-3 text-black transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-black/50 text-xs sm:text-sm font-['Inter'] leading-relaxed mb-4 sm:mb-6 line-clamp-2">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="pt-3 sm:pt-4 border-t border-black/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-[9px] sm:text-[10px] font-medium text-black/40 tracking-tight">
                          {formatDate(post.date)}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-black/10" />
                        <span className="text-[9px] sm:text-[10px] font-medium text-black/40 tracking-tight">
                          {post.readingTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[9px] sm:text-[10px] font-bold text-black flex items-center gap-1 sm:gap-1.5 hover:gap-2 transition-all duration-300 group/link"
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
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-black/40">
                Notre zone d&apos;intervention
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Inter'] font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight text-black mb-4 sm:mb-6"
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
                    <h3 className="font-['Inter'] font-semibold text-lg sm:text-xl tracking-tight text-black mb-1">
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
                <h3 className="font-['Inter'] font-semibold text-lg sm:text-xl tracking-tight text-black mb-4">
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
                        <span className="font-['Inter'] font-bold text-sm text-black block">
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
                <h3 className="font-['Inter'] font-semibold text-base sm:text-lg tracking-tight text-black mb-3">
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
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {homeContent.finalCta.trustBadge}
                </span>
              </div>

              <h2 className="font-['Inter'] font-bold text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] leading-tight tracking-tight mb-4 sm:mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
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
