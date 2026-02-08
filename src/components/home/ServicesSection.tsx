"use client";

import React, { useRef, useLayoutEffect, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Target, PenTool, TrendingUp, Presentation, Cog, ArrowRight } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeContent } from "@/content/home";
import { useLenis } from "@/components/SmoothScroller";

gsap.registerPlugin(ScrollTrigger);

const { surtitre: piliersSurtitre, h2: piliersH2, description: piliersDescription } = homeContent.piliers;

const SERVICES = [
  {
    id: 1,
    title: "Product Marketing",
    subtitle: "Positionnement & Message",
    description: "Définissez un positionnement clair et une proposition de valeur qui résonne avec vos clients. Nous construisons l'architecture de message qui transforme votre offre en référence sur son marché.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    tags: ["Positionnement", "Messaging", "Go-to-Market"],
    stat: "+45%",
    statLabel: "conversion",
  },
  {
    id: 2,
    title: "Content Marketing",
    subtitle: "Contenu & Acquisition",
    description: "Créez du contenu qui attire, éduque et convertit vos prospects en clients. Des lead magnets aux articles de blog, nous produisons les assets qui génèrent des opportunités qualifiées.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=80",
    tags: ["SEO", "Lead Magnets", "Blog"],
    stat: "3x",
    statLabel: "trafic",
  },
  {
    id: 3,
    title: "Growth Marketing",
    subtitle: "Acquisition & Croissance",
    description: "Accélérez votre croissance avec des campagnes d'acquisition ciblées et mesurables. Paid ads, email marketing, automation — nous orchestrons les canaux qui génèrent des résultats.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tags: ["Paid Ads", "Email", "Automation"],
    stat: "-40%",
    statLabel: "CAC",
  },
  {
    id: 4,
    title: "Sales Enablement",
    subtitle: "Outils & Performance",
    description: "Équipez vos commerciaux avec les outils et contenus qui accélèrent le closing. Présentations, battle cards, objections — tout ce dont ils ont besoin pour convaincre.",
    icon: Presentation,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    tags: ["Pitch Decks", "Battle Cards", "Objections"],
    stat: "+60%",
    statLabel: "win rate",
  },
  {
    id: 5,
    title: "Automatisation",
    subtitle: "CRM & Workflows",
    description: "Automatisez vos processus marketing et commerciaux pour scaler sans friction. CRM, workflows, intégrations — nous construisons les systèmes qui libèrent votre temps.",
    icon: Cog,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    tags: ["HubSpot", "Zapier", "Intégrations"],
    stat: "10h",
    statLabel: "gagnées/sem",
  },
];

interface ServiceSlideProps {
  service: (typeof SERVICES)[0];
  index: number;
  total: number;
  isFirst: boolean;
  vertical?: boolean;
}

function ServiceSlide({ service, index, total, isFirst, vertical = false }: ServiceSlideProps) {
  const Icon = service.icon;

  return (
    <div
      className={
        vertical
          ? "w-full min-h-[80vh] py-16 sm:py-20"
          : "flex-shrink-0 w-[100vw] h-full"
      }
    >
      <div
        className={`max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12 flex items-center ${
          vertical ? "" : "h-full"
        }`}
      >
        <div
          className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch ${
            vertical ? "" : "min-h-[100vh] lg:min-h-0"
          }`}
        >
          {/* Image - 50vh mobile, 50% desktop (ou auto en vertical) */}
          <div
            className={`relative overflow-hidden ${
              vertical
                ? "min-h-[40vh] lg:min-h-[50vh]"
                : "min-h-[50vh] lg:min-h-0 lg:h-[70vh]"
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              loading={isFirst ? "eager" : "lazy"}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Stat badge */}
            <div className="absolute bottom-6 left-6 flex items-baseline gap-2">
              <span className="text-[#D4FD00] font-heading font-bold text-4xl lg:text-5xl">
                {service.stat}
              </span>
              <span className="text-white/80 text-base lg:text-lg">{service.statLabel}</span>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D4FD00]" />
          </div>

          {/* Content - 50vh mobile */}
          <div className="flex flex-col justify-center py-6 lg:py-0 min-h-[50vh] lg:min-h-0">
            {/* Header with icon and counter */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#D4FD00] flex items-center justify-center">
                <Icon size={24} className="text-[#0c0c0a]" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#D4FD00]" />
                <span className="text-[11px] font-light tracking-[0.12em] text-[#6b6b6b] uppercase">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-[#D4FD00] text-[12px] lg:text-[14px] font-medium tracking-wide uppercase mb-2">
              {service.subtitle}
            </p>

            {/* Title */}
            <h3 className="font-heading font-medium text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[#6b6b6b] text-[14px] lg:text-[16px] leading-relaxed mb-6 max-w-lg">
              {service.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-[#f5f5f5] text-[#1a1a1a] text-[11px] lg:text-[12px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[13px] lg:text-[14px] font-semibold text-[#1a1a1a] hover:text-[#D4FD00] transition-colors duration-300 group"
            >
              En savoir plus
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const SCROLL_DURATION_VH = 2.5;
const SCRUB_DESKTOP = 0.35;
const SCRUB_MOBILE = 0.25;
const SNAP_DEBOUNCE_MS = 120;
const SNAP_DURATION = 0.35;
const SERVICES_TRIGGER_ID = "services-gallery";

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const lenis = useLenis();
  const snapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const snapToNearestSlide = useCallback(() => {
    const st = ScrollTrigger.getById(SERVICES_TRIGGER_ID);
    if (!st || !st.isActive || !lenis) return;

    const progress = st.progress;
    const steps = SERVICES.length - 1;
    const snappedProgress = Math.round(progress * steps) / steps;
    if (Math.abs(progress - snappedProgress) < 0.01) return;

    const start = st.start;
    const end = st.end;
    const targetScroll = start + snappedProgress * (end - start);

    lenis.scrollTo(targetScroll, {
      duration: SNAP_DURATION,
      easing: (t: number) => t * (2 - t),
    });
  }, [lenis]);

  const goToSlide = useCallback(
    (index: number) => {
      const st = ScrollTrigger.getById(SERVICES_TRIGGER_ID);
      if (!st || !lenis) return;

      const steps = SERVICES.length - 1;
      const progress = index / steps;
      const start = st.start;
      const end = st.end;
      const targetScroll = start + progress * (end - start);

      lenis.scrollTo(targetScroll, {
        duration: 0.6,
        easing: (t: number) => t * (2 - t),
      });
    },
    [lenis]
  );

  useEffect(() => {
    if (!lenis || reducedMotion) return undefined;

    const handler = () => {
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
      snapTimeoutRef.current = setTimeout(snapToNearestSlide, SNAP_DEBOUNCE_MS);
    };

    lenis.on("scroll", handler);

    return () => {
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
      lenis.off("scroll", handler);
    };
  }, [lenis, reducedMotion, snapToNearestSlide]);

  useLayoutEffect(() => {
    if (reducedMotion) return undefined;

    const track = trackRef.current;
    const trigger = triggerRef.current;

    if (!track || !trigger) return undefined;

    let ctx: gsap.Context | null = null;
    const timer = setTimeout(() => {
      const totalWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const maxTranslate = Math.max(0, totalWidth - viewportWidth);

      const scrollDuration = viewportHeight * SCROLL_DURATION_VH;
      const scrub = viewportWidth < 768 ? SCRUB_MOBILE : SCRUB_DESKTOP;

      ctx = gsap.context(() => {
        gsap.to(track, {
          x: -maxTranslate,
          ease: "none",
          scrollTrigger: {
            id: SERVICES_TRIGGER_ID,
            trigger,
            start: "top top",
            end: () => `+=${scrollDuration}`,
            pin: true,
            scrub,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const newIndex = Math.min(
                Math.round(self.progress * (SERVICES.length - 1)),
                SERVICES.length - 1
              );
              setActiveIndex(newIndex);
            },
          },
        });
      }, sectionRef);
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx?.revert();
    };
  }, [reducedMotion]);

  return (
    <section id="services" ref={sectionRef} className="relative bg-white">
      {/* Header - Not pinned */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 bg-[#D4FD00]" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b] uppercase">
                {piliersSurtitre}
              </span>
            </div>

            <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] mb-4">
              {piliersH2}
            </h2>

            <p className="text-[#6b6b6b] text-[14px] sm:text-[15px] leading-relaxed max-w-xl">
              {piliersDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Gallery - Pinned (ou stack vertical si reduced-motion) */}
      {reducedMotion ? (
        <div className="divide-y divide-[#e5e5e5]">
          {SERVICES.map((service, index) => (
            <ServiceSlide
              key={service.id}
              service={service}
              index={index}
              total={SERVICES.length}
              isFirst={index === 0}
              vertical
            />
          ))}
        </div>
      ) : (
        <div ref={triggerRef} className="relative h-screen overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-full will-change-transform"
          >
            {SERVICES.map((service, index) => (
              <ServiceSlide
                key={service.id}
                service={service}
                index={index}
                total={SERVICES.length}
                isFirst={index === 0}
              />
            ))}
          </div>

          {/* Menu de navigation - sidebar gauche desktop, barre bas mobile */}
          <nav
            className="absolute z-50"
            aria-label="Navigation entre les services"
          >
            {/* Desktop: sidebar verticale gauche */}
            <div className="hidden lg:flex flex-col gap-1 absolute left-6 xl:left-12 top-1/2 -translate-y-1/2">
              {SERVICES.map((service, i) => (
                <button
                  key={service.id}
                  onClick={() => goToSlide(i)}
                  aria-current={i === activeIndex}
                  aria-label={`Aller à ${service.title}`}
                  className={`text-left py-2 px-3 rounded transition-all duration-300 group ${
                    i === activeIndex
                      ? "text-[#1a1a1a] font-semibold"
                      : "text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#f5f5f5]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
                        i === activeIndex ? "bg-[#D4FD00]" : "bg-[#6b6b6b]/30 group-hover:bg-[#6b6b6b]/60"
                      }`}
                    />
                    <span className="text-[13px] xl:text-[14px]">{service.title}</span>
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile: barre horizontale en bas */}
            <div className="lg:hidden absolute bottom-8 left-4 right-4 flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
              {SERVICES.map((service, i) => (
                <button
                  key={service.id}
                  onClick={() => goToSlide(i)}
                  aria-current={i === activeIndex}
                  aria-label={`Aller à ${service.title}`}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-[#D4FD00] text-[#1a1a1a]"
                      : "bg-[#1a1a1a]/10 text-[#6b6b6b] hover:bg-[#1a1a1a]/20"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Footer CTA - After unpin */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-20 text-center"
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-2 h-[48px] sm:h-[52px] px-6 sm:px-8 text-[13px] sm:text-[14px] font-semibold bg-[#1a1a1a] text-white hover:bg-black/90 hover:-translate-y-0.5 transition-all duration-300"
        >
          Voir tous nos services
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}

export default ServicesSection;
