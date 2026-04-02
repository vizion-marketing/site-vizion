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
    title: "Des sites web stratégiques, architecturés pour vendre.",
    description: "Peu importe comment vos prospects ont entendu parler de vous, leur premier réflexe est toujours le même : ils vont sur votre site. C'est pourquoi nous ne construisons pas de simples vitrines : UX/UI, copywriting, SEO et performance, tout est pensé pour faire de votre prochain site web un véritable outil stratégique que vos clients adorent et qui facilite le travail de vos commerciaux.",
    image: "/images/pigment.avif",
    link: "/services/creation-refonte-site-web",
    ctaLabel: "Création de site web B2B",
  },
  landingpages: {
    title: "Des landing pages pensées pour convertir, pas pour expliquer.",
    description: "Votre page d'accueil n'est pas une page de conversion. Un visiteur qui arrive via une campagne a besoin d'un message ciblé, d'un parcours clair et d'un seul appel à l'action. Nous concevons des landing pages B2B avec un seul objectif : transformer vos visiteurs en leads qualifiés.",
    image: "/images/landing-dashboard.avif",
    link: "/services/creation-landing-page",
    ctaLabel: "Création de landing page",
  },
  casclients: {
    title: "De la documentation commerciale qui lève les objections.",
    description: "Vos prospects comparent, hésitent, demandent des références. Vous avez des dizaines de projets réussis, mais aucun n'est documenté de manière exploitable. Nous transformons vos succès en études de cas structurées que vos commerciaux utilisent à chaque étape du cycle de vente.",
    image: "/images/casclients-dashboard.avif",
    link: "/services/battlecards-case-studies",
    ctaLabel: "Battlecards et case studies",
  },
  salesdeck: {
    title: "Des decks de ventes qui transforment vos rendez-vous en signatures.",
    description: "Vos équipes de vente méritent mieux qu'un PowerPoint bricolé en interne. Nous concevons des pitch decks calibrés pour chaque profil décideur : message aligné sur leur problème, objections anticipées, structure narrative qui mène vers la signature.",
    image: "/images/salesdeck-dashboard.avif",
    link: "/services/pitch-decks-argumentaires",
    ctaLabel: "Pitch decks et argumentaires",
  },
  leadmagnets: {
    title: "Du contenu organique qui attire des prospects qualifiés, durablement.",
    description: "Vous dépendez de la publicité pour générer des leads ? Nous construisons votre stratégie de contenu SEO de A à Z : audit technique, mots-clés à fort intent, articles qui répondent aux vraies questions de vos prospects. Un canal d'acquisition qui travaille sans budget media.",
    image: "/images/leadmagnets-dashboard.avif",
    link: "/services/seo-contenu-organique",
    ctaLabel: "SEO & Contenu organique",
  },
  publicite: {
    title: "Des campagnes publicitaires B2B pilotées pour un coût par lead maîtrisé.",
    description: "Votre budget part vite, les clics coûtent cher, et vous ne savez pas pourquoi. Nous pilotons vos campagnes Google Ads, LinkedIn Ads et Meta Ads avec un seul objectif : des leads qualifiés à un coût prévisible. Ciblage, créatives, landing pages et optimisation continue.",
    image: "/images/publicite-dashboard.avif",
    link: "/services/campagnes-publicitaires",
    ctaLabel: "Campagnes publicitaires B2B",
  },
  applicationsia: {
    title: "Des applications IA concrètes, là où elles apportent une valeur mesurable.",
    description: "Pas de gadgets, pas de promesses creuses. Nous intégrons l'IA là où elle change vraiment les résultats : qualification automatisée, scoring prédictif, personnalisation à l'échelle. Des cas d'usage priorisés sur votre cycle de vente, connectés à vos outils existants.",
    image: "/images/ia-highlight/outils-metier.png",
    link: "/services/applications-ia",
    ctaLabel: "Applications IA marketing",
  },
  crm: {
    title: "Un CRM configuré autour de votre cycle de vente, que vos équipes utilisent vraiment.",
    description: "Votre pipeline commercial est un angle mort. Vos commerciaux passent plus de temps à saisir qu'à vendre. Nous déployons et structurons HubSpot, Pipedrive ou Salesforce autour de votre réalité terrain : pipeline, automatisations, reporting et formation inclus.",
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
              {headerContent?.h2 ?? "Chaque livrable est conçu avec exigence, pour vous aider à vendre, pas pour rester au fond d'un drive."}
            </h2>
            <p className="text-muted text-base font-[var(--font-body)] leading-relaxed">
              {headerContent?.description ?? "Nous concevons et déployons des livrables de haute qualité, pensés pour rassurer et convaincre des décideurs exigeants, quel que soit l'étape du cycle de vente."}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Full-height accordion section - scroll-driven */}
      <section
        id="assets"
        ref={sectionRef}
        className="dark-section relative overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <div
          ref={triggerRef}
          className={`relative ${!reducedMotion ? "h-screen" : ""}`}
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
                      className="object-cover brightness-[0.6] saturate-[0.7]"
                      sizes="80vw"
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>

                  {/* Overlay gradient directionnel — couche premium */}
                  <div
                    className="absolute inset-0 z-[5] pointer-events-none transition-opacity duration-500"
                    style={{
                      opacity: isActive ? 1 : 0,
                      background: "linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.80) 25%, rgba(0,0,0,0.55) 55%, transparent 80%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 z-[5] pointer-events-none transition-opacity duration-500"
                    style={{
                      opacity: isActive ? 1 : 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
                    }}
                  />

                  {/* Collapsed panel - vertical title + number at bottom */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-end pb-8 transition-opacity duration-300"
                    style={{ opacity: isActive ? 0 : 1, pointerEvents: isActive ? "none" : "auto" }}
                  >
                    <div
                      className="relative z-10 mb-6"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      <h3 className="text-white/60 text-[clamp(18px,2vw,24px)] font-heading font-medium tracking-[-0.02em] rotate-180 whitespace-nowrap select-none leading-tight">
                        {tab.label}
                      </h3>
                    </div>

                    <span className="text-white/25 text-[18px] font-heading font-bold relative z-10 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Active panel content - overlaid on image */}
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
          <div className="flex md:hidden flex-col h-screen min-h-[620px]">
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
                    flex: isActive ? "1 0 0px" : "0 0 44px",
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
