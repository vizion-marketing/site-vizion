"use client";

import React, { useState, useRef, useLayoutEffect, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Layout, Users, Presentation, FileText, Megaphone } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@/components/SmoothScroller";

gsap.registerPlugin(ScrollTrigger);

const TABS = [
  { id: "siteweb", label: "Site Web", icon: Globe },
  { id: "landingpages", label: "Landing pages", icon: Layout },
  { id: "casclients", label: "Cas clients", icon: Users },
  { id: "salesdeck", label: "Sales deck", icon: Presentation },
  { id: "leadmagnets", label: "Lead magnets", icon: FileText },
  { id: "publicite", label: "Publicité", icon: Megaphone },
];

const TAB_CONTENT = {
  siteweb: {
    title: "Site Web",
    description: "Des sites vitrines et produits conçus pour convertir. Architecture claire, copywriting orienté bénéfices, design qui inspire confiance.",
    image: "/images/pigment.avif",
    link: "/services/site-web",
  },
  landingpages: {
    title: "Landing pages",
    description: "Des pages d'atterrissage optimisées pour la conversion. Structure éprouvée, messages percutants, formulaires efficaces.",
    image: "/images/assets/landing-dashboard.png",
    link: "/services/landing-pages",
  },
  casclients: {
    title: "Cas clients",
    description: "Transformez vos succès en preuves sociales. Des études de cas qui rassurent vos prospects et accélèrent la décision d'achat.",
    image: "/images/assets/casclients-dashboard.png",
    link: "/services/cas-clients",
  },
  salesdeck: {
    title: "Sales deck",
    description: "Des présentations commerciales qui marquent les esprits. Structure narrative, visuels impactants, arguments imparables.",
    image: "/images/assets/salesdeck-dashboard.png",
    link: "/services/sales-deck",
  },
  leadmagnets: {
    title: "Lead magnets",
    description: "Des contenus à forte valeur ajoutée qui génèrent des leads qualifiés. Guides, templates, checklists conçus pour convertir.",
    image: "/images/assets/leadmagnets-dashboard.png",
    link: "/services/lead-magnets",
  },
  publicite: {
    title: "Publicité",
    description: "Campagnes Meta, Google Ads et LinkedIn Ads. Ciblage précis, créatifs performants, optimisation continue pour maximiser votre ROI.",
    image: "/images/assets/publicite-dashboard.png",
    link: "/services/publicite",
  },
};

const SCROLL_DURATION_VH = 1.2;
const TRIGGER_OFFSET_PX = 80;
const SNAP_DEBOUNCE_MS = 120;
const SNAP_DURATION = 0.35;
const ASSETS_TRIGGER_ID = "assets-tabs";
const MOBILE_BREAKPOINT = 1024;

export function AssetsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("siteweb");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
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
      lenis.scrollTo(targetScroll, {
        duration: 0.6,
        easing: (t: number) => t * (2 - t),
      });
    },
    [lenis]
  );

  useEffect(() => {
    if (!lenis || reducedMotion || !isMobile) return undefined;
    const handler = () => {
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
      snapTimeoutRef.current = setTimeout(snapToNearestTab, SNAP_DEBOUNCE_MS);
    };
    lenis.on("scroll", handler);
    return () => {
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
      lenis.off("scroll", handler);
    };
  }, [lenis, reducedMotion, isMobile, snapToNearestTab]);

  useLayoutEffect(() => {
    if (reducedMotion || !isMobile) return undefined;
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
  }, [reducedMotion, isMobile]);

  const handleTabClick = useCallback(
    (tabId: string, index: number, e?: React.MouseEvent<HTMLButtonElement>) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      
      // Empêcher les clics multiples rapides
      if (isChangingTabRef.current || activeTab === tabId) {
        return;
      }
      
      isChangingTabRef.current = true;
      
      if (!isMobile || reducedMotion) {
        // Sur PC : changement d'onglet immédiat sans scroll
        setActiveTab(tabId);
        // Réinitialiser le flag après un court délai pour permettre l'animation
        setTimeout(() => {
          isChangingTabRef.current = false;
        }, 300);
      } else {
        // Sur mobile : scroll vers l'onglet
        goToTab(index);
        setTimeout(() => {
          isChangingTabRef.current = false;
        }, 600);
      }
    },
    [isMobile, reducedMotion, goToTab, activeTab]
  );

  return (
    <>
      {/* Header Banner - Same background as Manifeste */}
      <div className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden grain-overlay">
        {/* Background base */}
        <div className="absolute inset-0 bg-[#f8f8f6]" />

        {/* Subtle gradient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[70%] h-[60%] top-[-10%] left-[-15%]"
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute w-[50%] h-[50%] top-[20%] right-[-10%]"
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)',
            }}
          />
          <div
            className="absolute w-[60%] h-[50%] bottom-[-15%] left-[20%]"
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)',
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
            <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] mb-4">
              Nous créons des assets exceptionnels pensés pour transformer vos prospects en clients.
            </h2>

            <p className="text-[#6b6b6b] text-base font-[var(--font-body)] leading-relaxed">
              Tout au long du cycle de vente, nous concevons les outils qui font la différence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Section - Dark background */}
      <section
        id="assets"
        ref={sectionRef}
        className="relative overflow-hidden grain-overlay scroll-mt-20"
        style={{ background: "#0c0c0a" }}
      >
        <div
          ref={triggerRef}
          className={`relative pt-10 sm:pt-12 pb-16 sm:pb-20 ${isMobile && !reducedMotion ? "min-h-screen" : ""}`}
        >
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
            }}
          />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden lg:block">
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[8%] w-3 h-3 bg-[#D4FD00]/30 rounded-sm"
          />
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[35%] right-[15%] w-2 h-2 bg-[#D4FD00]/20 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[25%] left-[5%] w-4 h-1 bg-[#D4FD00]/25 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[50%] left-[3%] w-2 h-2 border border-[#D4FD00]/30 rounded-full"
          />
        </div>

        <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          {/* Glassmorphism Tabs with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative inline-flex bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-1.5 mb-10 sm:mb-14"
        >
          {TABS.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={(e) => handleTabClick(tab.id, index, e)}
                className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 text-[12px] sm:text-[13px] font-[var(--font-body)] font-medium transition-all duration-300 rounded-md ${
                  isActive
                    ? "text-[#0c0c0a]"
                    : "text-white/60 hover:text-white"
                }`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#D4FD00] rounded-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={14} className={isActive ? "text-[#0c0c0a]" : ""} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </span>
                {isActive && (
                  <span className="relative z-10 hidden lg:flex items-center justify-center w-5 h-5 rounded-full bg-[#0c0c0a] text-[#D4FD00] text-[10px] font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

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
            <div className="absolute -left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-[#D4FD00] via-[#D4FD00]/50 to-transparent rounded-full hidden lg:block" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-lg p-6 sm:p-8 shadow-2xl border border-black/5 lg:ml-3"
              >
                {/* Numéro badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#D4FD00] rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-[#0c0c0a] font-heading font-bold text-xs">
                    {String(TABS.findIndex(t => t.id === activeTab) + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Icon - Dynamic based on tab */}
                <motion.div
                  key={`icon-${activeTab}`}
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="w-12 h-12 rounded-lg bg-[#0c0c0a] flex items-center justify-center mb-5"
                >
                  {(() => {
                    const Icon = TABS.find(t => t.id === activeTab)?.icon || Globe;
                    return <Icon size={22} className="text-[#D4FD00]" />;
                  })()}
                </motion.div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-[24px] sm:text-[28px] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-4">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-[#6b6b6b] text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed mb-6">
                  {content.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={content.link}
                  className="group inline-flex items-center justify-between w-full h-[52px] px-6 text-[14px] font-[var(--font-body)] font-semibold bg-[#0c0c0a] text-white rounded-lg hover:bg-[#1a1a1a] transition-all duration-300"
                >
                  <span>En savoir plus</span>
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
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
            <div className="absolute -inset-2 sm:-inset-3 border border-[#D4FD00]/30 rounded-t-xl pointer-events-none" />
            <div className="absolute -inset-4 sm:-inset-6 border border-[#D4FD00]/10 rounded-t-xl pointer-events-none hidden lg:block" />

            {/* Decorative corner accents */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4FD00] rounded-tr-lg hidden lg:block" />
            <div className="absolute -top-3 left-1/4 w-8 h-1 bg-[#D4FD00]/40 hidden lg:block" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-t-lg"
              >
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-auto"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200`;
                  }}
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0a]/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0a]/30 via-transparent to-transparent pointer-events-none lg:block hidden" />
              </motion.div>
            </AnimatePresence>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-8 right-4 sm:right-8 bg-[#D4FD00] px-4 py-2 rounded-lg shadow-lg hidden lg:block"
            >
              <span className="text-[#0c0c0a] font-heading font-bold text-sm">+150%</span>
              <span className="text-[#0c0c0a]/70 text-xs ml-1">conversion</span>
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
