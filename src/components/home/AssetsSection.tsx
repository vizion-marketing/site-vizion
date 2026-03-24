"use client";

import React, { useState, useRef, useLayoutEffect, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Layout, Users, Presentation, FileText, Megaphone, Sparkles, Database } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@/components/SmoothScroller";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TABS = [
  { id: "siteweb", label: "Site web", icon: Globe },
  { id: "landingpages", label: "Landing pages", icon: Layout },
  { id: "casclients", label: "Cas clients", icon: Users },
  { id: "salesdeck", label: "Présentation commerciale", icon: Presentation },
  { id: "leadmagnets", label: "Contenus d'acquisition", icon: FileText },
  { id: "publicite", label: "Publicité", icon: Megaphone },
  { id: "applicationsia", label: "Applications IA", icon: Sparkles },
  { id: "crm", label: "CRM", icon: Database },
];

const TAB_CONTENT = {
  siteweb: {
    title: "Site web",
    description: "Votre site est la première impression. Nous construisons des sites où le visiteur comprend votre offre en 5 secondes. Pas des vitrines esthétiques que personne ne comprend.",
    image: "/images/pigment.avif",
    link: "/services/creation-refonte-site-web",
    ctaLabel: "Création de site web B2B",
  },
  landingpages: {
    title: "Landing pages",
    description: "Des pages conçues pour un objectif : convertir. Structure testée, rédaction persuasive orientée problème, formulaire au bon moment.",
    image: "/images/landing-dashboard.avif",
    link: "/services/creation-landing-page",
    ctaLabel: "Création de landing page",
  },
  casclients: {
    title: "Cas clients",
    description: "Vos prospects ont besoin de preuves. Nous transformons vos succès en études de cas structurées qui lèvent les objections et accélèrent la décision.",
    image: "/images/casclients-dashboard.avif",
    link: "/services/battlecards-case-studies",
    ctaLabel: "Battlecards et case studies",
  },
  salesdeck: {
    title: "Présentation commerciale",
    description: "La présentation que vos commerciaux utilisent vraiment. Structure narrative, arguments alignés sur le positionnement, réponses aux objections intégrées.",
    image: "/images/salesdeck-dashboard.avif",
    link: "/services/pitch-decks-argumentaires",
    ctaLabel: "Pitch decks et argumentaires",
  },
  leadmagnets: {
    title: "Contenus d'acquisition",
    description: "Guides, modèles, listes de contrôle : des contenus à forte valeur qui génèrent des prospects qualifiés et positionnent votre expertise sur votre marché.",
    image: "/images/leadmagnets-dashboard.avif",
    link: "/services/creation-contenu-b2b",
    ctaLabel: "Création de contenu B2B",
  },
  publicite: {
    title: "Publicité",
    description: "Campagnes LinkedIn Ads, Google Ads et Meta Ads. Ciblage précis, messages alignés sur le positionnement, optimisation continue.",
    image: "/images/publicite-dashboard.avif",
    link: "/services/campagnes-publicitaires",
    ctaLabel: "Campagnes publicitaires B2B",
  },
  applicationsia: {
    title: "Applications IA",
    description: "Outils métier sur mesure propulsés par l'intelligence artificielle. Qualification automatisée, scoring de prospects, production de contenu accélérée. L'IA au service de votre croissance.",
    image: "/images/ia-highlight/outils-metier.png",
    link: "/services/applications-ia",
    ctaLabel: "Applications IA marketing",
  },
  crm: {
    title: "CRM",
    description: "Déploiement et structuration de votre CRM pour aligner marketing et ventes. Pipelines configurés, automatisations intégrées, données exploitables pour piloter votre croissance.",
    image: "/images/ia-highlight/tableaux-de-bord.png",
    link: "/services/deploiement-crm",
    ctaLabel: "Déploiement CRM B2B",
  },
};

const SCROLL_DURATION_VH = 3.5;
const TRIGGER_OFFSET_PX = 0;
const SNAP_DEBOUNCE_MS = 120;
const SNAP_DURATION = 0.35;
const ASSETS_TRIGGER_ID = "assets-tabs";

const COLLAPSED_WIDTH_LG = 72;

export interface AssetsSectionHeaderContent {
  h2?: string;
  description?: string;
}

interface AssetsSectionProps {
  content?: AssetsSectionHeaderContent;
}

export function AssetsSection({ content: headerContent }: AssetsSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("siteweb");
  const [reducedMotion, setReducedMotion] = useState(false);
  const lenis = useLenis();
  const snapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isChangingTabRef = useRef(false);

  const activeIndex = TABS.findIndex(t => t.id === activeTab);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Preload all images on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      Object.values(TAB_CONTENT).forEach((tab) => {
        const img = new window.Image();
        img.src = tab.image;
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const snapToNearestTab = useCallback(() => {
    const st = ScrollTrigger.getById(ASSETS_TRIGGER_ID);
    if (!st || !st.isActive || !lenis) return;
    const progress = st.progress;
    const steps = TABS.length - 1;
    const snappedProgress = Math.round(progress * steps) / steps;
    if (Math.abs(progress - snappedProgress) < 0.01) return;
    const targetScroll = st.start + snappedProgress * (st.end - st.start);
    lenis.scrollTo(targetScroll, {
      duration: SNAP_DURATION,
      easing: (t: number) => t * (2 - t),
    });
  }, [lenis]);

  const goToTab = useCallback(
    (index: number) => {
      const st = ScrollTrigger.getById(ASSETS_TRIGGER_ID);
      if (!st || !lenis) return;
      const progress = index / (TABS.length - 1);
      const targetScroll = st.start + progress * (st.end - st.start);
      lenis.scrollTo(targetScroll, {
        duration: 0.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    },
    [lenis]
  );

  useEffect(() => {
    if (!lenis || reducedMotion) return undefined;
    const handler = () => {
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
      snapTimeoutRef.current = setTimeout(snapToNearestTab, SNAP_DEBOUNCE_MS);
    };
    lenis.on("scroll", handler);
    return () => {
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
      lenis.off("scroll", handler);
    };
  }, [lenis, reducedMotion, snapToNearestTab]);

  useLayoutEffect(() => {
    if (reducedMotion) return undefined;
    const trigger = triggerRef.current;
    if (!trigger) return undefined;
    let ctx: gsap.Context | null = null;
    const timer = setTimeout(() => {
      const scrollDuration = window.innerHeight * SCROLL_DURATION_VH;
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          id: ASSETS_TRIGGER_ID,
          trigger,
          start: `top ${TRIGGER_OFFSET_PX}px`,
          end: () => `+=${scrollDuration}`,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const tabIndex = Math.min(
              Math.round(self.progress * (TABS.length - 1)),
              TABS.length - 1
            );
            setActiveTab(TABS[tabIndex].id);
          },
        });
      }, sectionRef);
    }, 100);
    return () => {
      clearTimeout(timer);
      ctx?.revert();
    };
  }, [reducedMotion]);

  const handleTabClick = useCallback(
    (tabId: string, index: number) => {
      if (isChangingTabRef.current || activeTab === tabId) return;
      isChangingTabRef.current = true;

      if (snapTimeoutRef.current) {
        clearTimeout(snapTimeoutRef.current);
        snapTimeoutRef.current = null;
      }

      setActiveTab(tabId);

      if (!reducedMotion) {
        goToTab(index);
      }
      setTimeout(() => { isChangingTabRef.current = false; }, 500);
    },
    [reducedMotion, goToTab, activeTab]
  );

  return (
    <>
      {/* Header Banner */}
      <div className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-card" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[70%] h-[60%] top-[-10%] left-[-15%]"
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute w-[50%] h-[50%] top-[20%] right-[-10%]"
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)',
            }}
          />
          <div
            className="absolute w-[60%] h-[50%] bottom-[-15%] left-[20%]"
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)',
            }}
          />
        </div>

        <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary mb-4">
              {headerContent?.h2 ?? "Des livrables d'excellence, conçus pour vous aider à vendre, pas pour rester au fond d'un drive."}
            </h2>
            <p className="text-muted text-base font-[var(--font-body)] leading-relaxed">
              {headerContent?.description ?? "Chaque support que nous créons a une raison stratégique d'exister. Il s'inscrit dans le tunnel de vente et porte le même message, de la première impression au closing."}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Full-height accordion section — scroll-driven */}
      <section
        id="assets"
        ref={sectionRef}
        className="dark-section relative overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <div
          ref={triggerRef}
          className={`relative ${!reducedMotion ? "h-[90vh]" : ""}`}
        >
          {/* ─── Desktop / Tablet: Horizontal Accordion ─── */}
          <div className="hidden md:flex h-full">
            {TABS.map((tab, index) => {
              const isActive = activeTab === tab.id;
              const tabContent = TAB_CONTENT[tab.id as keyof typeof TAB_CONTENT];
              const Icon = tab.icon;

              return (
                <div
                  key={tab.id}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  aria-label={tab.label}
                  onClick={() => handleTabClick(tab.id, index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleTabClick(tab.id, index);
                    }
                  }}
                  className={`relative overflow-hidden cursor-pointer ${
                    index < TABS.length - 1 ? "border-r border-white/[0.08]" : ""
                  }`}
                  style={{
                    flex: isActive ? "1 0 0px" : `0 0 ${COLLAPSED_WIDTH_LG}px`,
                    transition: "flex 700ms cubic-bezier(0.65, 0, 0.35, 1)",
                  }}
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    <Image
                      src={tabContent.image}
                      alt={tabContent.title}
                      fill
                      className="object-cover"
                      sizes="80vw"
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    {/* Overlay gradients for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
                  </div>

                  {/* Collapsed panel — vertical title + number at bottom */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-end pb-8 transition-opacity duration-300"
                    style={{ opacity: isActive ? 0 : 1, pointerEvents: isActive ? "none" : "auto" }}
                  >
                    <div
                      className="relative z-10 mb-6"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      <h3 className="text-white/60 text-[clamp(18px,2vw,24px)] font-heading font-medium tracking-[-0.02em] rotate-180 whitespace-nowrap select-none leading-none">
                        {tab.label}
                      </h3>
                    </div>

                    <span className="text-white/25 text-[18px] font-heading font-bold relative z-10 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Active panel content — overlaid on image */}
                  <div
                    className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-12 transition-opacity duration-500"
                    style={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none" }}
                  >
                    {/* Top: number badge + icon */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center justify-center w-11 h-11 bg-accent text-black font-heading font-bold text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="w-11 h-11 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <Icon size={20} className="text-white" />
                        </div>
                      </div>

                      {/* Progress indicator */}
                      <div className="hidden lg:flex items-center gap-1.5">
                        {TABS.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 transition-all duration-500 ${
                              i === activeIndex
                                ? "w-6 bg-accent"
                                : i < activeIndex
                                  ? "w-2 bg-white/30"
                                  : "w-2 bg-white/10"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom: text content */}
                    <div className="max-w-xl">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, y: 24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          <h3 className="font-heading font-medium text-[28px] md:text-[36px] lg:text-[48px] leading-[1.05] tracking-[-0.03em] text-white mb-4">
                            {tabContent.title}
                          </h3>
                          <p className="text-white/75 text-[15px] lg:text-[16px] font-[var(--font-body)] leading-relaxed mb-8 max-w-lg">
                            {tabContent.description}
                          </p>
                          <Link href={tabContent.link} className="group inline-flex items-center gap-3">
                            <span className="bg-accent text-black px-6 py-3 text-[14px] font-[var(--font-body)] font-semibold transition-all duration-300 group-hover:bg-white">
                              {tabContent.ctaLabel}
                            </span>
                            <ArrowUpRight size={18} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Accent line on active panel left edge */}
                  <div
                    className="absolute top-0 left-0 w-[3px] h-full bg-accent transition-opacity duration-500 z-20"
                    style={{ opacity: isActive ? 1 : 0 }}
                  />
                </div>
              );
            })}
          </div>

          {/* ─── Mobile: Vertical Accordion ─── */}
          <div className="flex md:hidden flex-col h-[90vh]">
            {TABS.map((tab, index) => {
              const isActive = activeTab === tab.id;
              const tabContent = TAB_CONTENT[tab.id as keyof typeof TAB_CONTENT];

              return (
                <div
                  key={tab.id}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  onClick={() => handleTabClick(tab.id, index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleTabClick(tab.id, index);
                    }
                  }}
                  className={`relative overflow-hidden cursor-pointer ${
                    index < TABS.length - 1 ? "border-b border-white/[0.08]" : ""
                  }`}
                  style={{
                    flex: isActive ? "1 0 0px" : "0 0 48px",
                    transition: "flex 500ms cubic-bezier(0.65, 0, 0.35, 1)",
                  }}
                >
                  {/* Background image for active */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    <Image
                      src={tabContent.image}
                      alt={tabContent.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  </div>

                  {/* Collapsed: horizontal bar */}
                  <div
                    className="absolute inset-0 flex items-center px-5 gap-4 transition-opacity duration-300"
                    style={{ opacity: isActive ? 0 : 1, pointerEvents: isActive ? "none" : "auto" }}
                  >
                    <span className="text-white/25 text-[12px] font-heading font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/50 text-[13px] font-[var(--font-body)] font-medium">
                      {tab.label}
                    </span>
                  </div>

                  {/* Active: content overlay */}
                  <div
                    className="relative z-10 h-full flex flex-col justify-end p-5 transition-opacity duration-500"
                    style={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none" }}
                  >
                    <span className="text-accent text-[11px] font-heading font-bold mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading font-medium text-[22px] leading-[1.1] tracking-[-0.02em] text-white mb-2" aria-hidden="true">
                      {tabContent.title}
                    </h3>
                    <p className="text-white/70 text-[13px] font-[var(--font-body)] leading-relaxed line-clamp-3 mb-3">
                      {tabContent.description}
                    </p>
                    <Link href={tabContent.link} className="inline-flex items-center gap-2 text-[12px] font-semibold text-accent">
                      {tabContent.ctaLabel}
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  {/* Accent bar top edge */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] bg-accent transition-opacity duration-500 z-20"
                    style={{ opacity: isActive ? 1 : 0 }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AssetsSection;
