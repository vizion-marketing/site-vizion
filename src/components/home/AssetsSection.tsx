"use client";

import React, { useState, useRef, useLayoutEffect, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Layout, Users, Presentation, FileText, Megaphone, Sparkles, Database } from "lucide-react";
import { ComingSoonLink } from "@/components/ComingSoonLink";
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
    link: "/services/site-web",
  },
  landingpages: {
    title: "Landing pages",
    description: "Des pages conçues pour un objectif : convertir. Structure testée, rédaction persuasive orientée problème, formulaire au bon moment.",
    image: "/images/landing-dashboard.avif",
    link: "/services/landing-pages",
  },
  casclients: {
    title: "Cas clients",
    description: "Vos prospects ont besoin de preuves. Nous transformons vos succès en études de cas structurées qui lèvent les objections et accélèrent la décision.",
    image: "/images/casclients-dashboard.avif",
    link: "/services/cas-clients",
  },
  salesdeck: {
    title: "Présentation commerciale",
    description: "La présentation que vos commerciaux utilisent vraiment. Structure narrative, arguments alignés sur le positionnement, réponses aux objections intégrées.",
    image: "/images/salesdeck-dashboard.avif",
    link: "/services/sales-deck",
  },
  leadmagnets: {
    title: "Contenus d'acquisition",
    description: "Guides, modèles, listes de contrôle : des contenus à forte valeur qui génèrent des prospects qualifiés et positionnent votre expertise sur votre marché.",
    image: "/images/leadmagnets-dashboard.avif",
    link: "/services/lead-magnets",
  },
  publicite: {
    title: "Publicité",
    description: "Campagnes LinkedIn Ads, Google Ads et Meta Ads. Ciblage précis, messages alignés sur le positionnement, optimisation continue.",
    image: "/images/publicite-dashboard.avif",
    link: "/services/publicite",
  },
  applicationsia: {
    title: "Applications IA",
    description: "Outils métier sur mesure propulsés par l'intelligence artificielle. Qualification automatisée, scoring de prospects, production de contenu accélérée. L'IA au service de votre croissance.",
    image: "/images/ia-highlight/outils-metier.png",
    link: "/contact",
  },
  crm: {
    title: "CRM",
    description: "Déploiement et structuration de votre CRM pour aligner marketing et ventes. Pipelines configurés, automatisations intégrées, données exploitables pour piloter votre croissance.",
    image: "/images/ia-highlight/tableaux-de-bord.png",
    link: "/contact",
  },
};

const SCROLL_DURATION_VH = 2.5;
const TRIGGER_OFFSET_PX = 80;
const SNAP_DEBOUNCE_MS = 120;
const SNAP_DURATION = 0.35;
const ASSETS_TRIGGER_ID = "assets-tabs";

export function AssetsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("siteweb");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});
  const lenis = useLenis();
  const snapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isChangingTabRef = useRef(false);
  const content = TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Preload all images on mount for instant transitions
  useEffect(() => {
    const preloadImages = () => {
      Object.entries(TAB_CONTENT).forEach(([key, tab]) => {
        const img = new window.Image();
        img.onload = () => {
          setImagesLoaded(prev => ({ ...prev, [key]: true }));
        };
        img.onerror = () => {
          setImagesLoaded(prev => ({ ...prev, [key]: false }));
        };
        img.src = tab.image;
      });
    };

    // Start preloading after a small delay to not block initial render
    const timer = setTimeout(preloadImages, 100);
    return () => clearTimeout(timer);
  }, []);

  const snapToNearestTab = useCallback(() => {
    const st = ScrollTrigger.getById(ASSETS_TRIGGER_ID);
    if (!st || !st.isActive || !lenis) return;
    const progress = st.progress;
    const steps = TABS.length - 1;
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

  const goToTab = useCallback(
    (index: number) => {
      const st = ScrollTrigger.getById(ASSETS_TRIGGER_ID);
      if (!st || !lenis) return;
      const steps = TABS.length - 1;
      const progress = index / steps;
      const start = st.start;
      const end = st.end;
      const targetScroll = start + progress * (end - start);

      // Smoother easing function for click-triggered scrolls
      lenis.scrollTo(targetScroll, {
        duration: 0.5,
        easing: (t: number) => {
          // Custom ease-out-cubic for more natural feel
          return 1 - Math.pow(1 - t, 3);
        },
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
      const viewportHeight = window.innerHeight;
      const scrollDuration = viewportHeight * SCROLL_DURATION_VH;
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
    (tabId: string, index: number, e?: React.MouseEvent<HTMLButtonElement>) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (isChangingTabRef.current || activeTab === tabId) return;
      isChangingTabRef.current = true;

      // Clear any pending snap timeout to prevent conflicts
      if (snapTimeoutRef.current) {
        clearTimeout(snapTimeoutRef.current);
        snapTimeoutRef.current = null;
      }

      // IMPORTANT: Change tab immediately for instant visual feedback
      setActiveTab(tabId);

      if (reducedMotion) {
        setTimeout(() => { isChangingTabRef.current = false; }, 300);
      } else {
        // Also trigger scroll animation for smooth transition
        goToTab(index);
        setTimeout(() => { isChangingTabRef.current = false; }, 500);
      }
    },
    [reducedMotion, goToTab, activeTab]
  );

  return (
    <>
      {/* Header Banner - Same background as Manifeste */}
      <div className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden grain-overlay">
        {/* Background base */}
        <div className="absolute inset-0 bg-card" />

        {/* Subtle gradient blobs */}
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
              Des livrables d'excellence, conçus pour vous aider à vendre, pas pour rester au fond d'un drive.
            </h2>

            <p className="text-muted text-base font-[var(--font-body)] leading-relaxed">
              Chaque support que nous créons a une raison stratégique d'exister. Il s'inscrit dans le tunnel de vente et porte le même message, de la première impression au closing.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Section - Dark background */}
      <section
        id="assets"
        ref={sectionRef}
        className="dark-section relative overflow-hidden grain-overlay scroll-mt-20"
        style={{ background: "var(--bg-dark)" }}
      >
        <div
          ref={triggerRef}
          className={`relative pt-10 sm:pt-12 pb-16 sm:pb-20 ${!reducedMotion ? "min-h-screen" : ""}`}
        >
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)",
            }}
          />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden lg:block">
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[8%] w-3 h-3 bg-accent/30 rounded-sm"
          />
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[35%] right-[15%] w-2 h-2 bg-accent/20 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[25%] left-[5%] w-4 h-1 bg-accent/25 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[50%] left-[3%] w-2 h-2 border border-accent/30 rounded-full"
          />
        </div>

        <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          {/* Mobile: compact active tab indicator */}
          <div className="sm:hidden mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 bg-accent rounded-md text-primary font-heading font-bold text-[11px]">
                {String(TABS.findIndex(t => t.id === activeTab) + 1).padStart(2, '0')}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeTab}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="text-white text-[14px] font-[var(--font-body)] font-medium"
                >
                  {content.title}
                </motion.span>
              </AnimatePresence>
              <span className="text-white/40 text-[12px] font-[var(--font-body)]">
                / {String(TABS.length).padStart(2, '0')}
              </span>
            </motion.div>
            {/* Progress dots */}
            <div className="flex gap-1.5 mt-3">
              {TABS.map((tab) => (
                <div
                  key={tab.id}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeTab === tab.id ? "w-6 bg-accent" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: full glassmorphism tab bar */}
          <div className="hidden sm:block pb-2 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            role="tablist"
            aria-label="Livrables marketing"
            className="relative inline-flex bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-1.5"
          >
          {TABS.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                onClick={(e) => handleTabClick(tab.id, index, e)}
                className={`relative flex items-center gap-2 px-5 py-2.5 text-[13px] font-[var(--font-body)] font-medium transition-all duration-300 rounded-md ${
                  isActive
                    ? "text-primary cursor-default"
                    : "text-white/60 hover:text-white hover:bg-white/5 active:scale-95 cursor-pointer"
                } ${isChangingTabRef.current ? "opacity-70 pointer-events-none" : ""}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                disabled={isChangingTabRef.current}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent rounded-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-2 ${isActive ? "text-primary" : ""}`}>
                  <Icon size={14} className={isActive ? "text-primary" : ""} />
                  <span className={isActive ? "text-primary" : ""}>{tab.label}</span>
                </span>
                {isActive && (
                  <span className="relative z-10 hidden lg:flex items-center justify-center w-5 h-5 rounded-full bg-dark text-accent text-[10px] font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>
        </div>

        {/* Content - Image behind, card overlay */}
        <div className="relative">
          {/* Info Card - Floating on top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-20 max-w-md lg:ml-0 mb-8 lg:mb-0 lg:absolute lg:top-8 lg:left-0"
          >
            {/* Card accent line */}
            <div className="absolute -left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/50 to-transparent rounded-full hidden lg:block" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white light-card rounded-lg p-6 sm:p-8 shadow-2xl border border-black/5 lg:ml-3"
              >
                {/* Numéro badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-primary font-heading font-bold text-xs">
                    {String(TABS.findIndex(t => t.id === activeTab) + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Icon - Dynamic based on tab */}
                <motion.div
                  key={`icon-${activeTab}`}
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="w-12 h-12 rounded-lg bg-dark flex items-center justify-center mb-5"
                >
                  {(() => {
                    const Icon = TABS.find(t => t.id === activeTab)?.icon || Globe;
                    return <Icon size={22} className="text-accent" />;
                  })()}
                </motion.div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-[24px] sm:text-[28px] leading-[1.1] tracking-[-0.02em] text-primary mb-4">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-muted text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed mb-6">
                  {content.description}
                </p>

                {/* CTA Button */}
                <ComingSoonLink
                  className="group inline-flex items-center justify-between w-full h-[52px] px-6 text-[14px] font-[var(--font-body)] font-semibold bg-dark text-white rounded-lg hover:bg-[var(--text-primary)] transition-all duration-300"
                >
                  <span>En savoir plus</span>
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </ComingSoonLink>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Large Asset Image - Behind, at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 lg:ml-auto lg:w-[75%]"
          >
            {/* Accent border frame */}
            <div className="absolute -inset-2 sm:-inset-3 border border-accent/30 rounded-t-xl pointer-events-none" />
            <div className="absolute -inset-4 sm:-inset-6 border border-accent/10 rounded-t-xl pointer-events-none hidden lg:block" />

            {/* Decorative corner accents */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-lg hidden lg:block" />
            <div className="absolute -top-3 left-1/4 w-8 h-1 bg-accent/40 hidden lg:block" />

            <div className="relative aspect-[14/9] overflow-hidden rounded-t-lg">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={content.image}
                    alt={content.title}
                    fill
                    className={`object-cover transition-all duration-300 ${
                      imagesLoaded[activeTab] === false
                        ? "opacity-60 scale-105"
                        : imagesLoaded[activeTab]
                          ? "opacity-100 scale-100"
                          : "opacity-60 scale-105"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={activeTab === "siteweb"}
                    loading={activeTab === "siteweb" ? "eager" : "lazy"}
                  />

                  {/* Loading skeleton overlay */}
                  {!imagesLoaded[activeTab] && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 via-white/5 to-transparent animate-pulse"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)]/20 via-transparent to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)]/30 via-transparent to-transparent pointer-events-none lg:block hidden z-10" />
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-8 right-4 sm:right-8 bg-accent px-4 py-2 rounded-lg shadow-lg hidden lg:block"
            >
              <span className="text-primary font-heading font-bold text-sm">+150%</span>
              <span className="text-primary/70 text-xs ml-1">conversion</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
        </div>
    </section>
    </>
  );
}

export default AssetsSection;
