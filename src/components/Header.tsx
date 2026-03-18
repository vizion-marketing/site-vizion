"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Compass,
  Rocket,
  TrendingUp,
  Handshake,
  Sparkles,
} from "lucide-react";
import {
  SERVICE_MENU_CATEGORIES,
  SERVICE_MENU_BANNER,
} from "@/lib/constants";
import type { ServiceMenuItem } from "@/lib/constants";

// ============================================================================
// NAV ITEMS
// ============================================================================

const navItems = [
  { label: "Accueil", target: "top", href: "/" },
  { label: "Services", target: "services", href: "/services", hasMegaMenu: true },
  { label: "Cas Clients", target: "cas-clients", href: "/cas-clients" },
  { label: "Notre agence", target: "agence", href: "/#agence" },
  { label: "Blog", target: "blog", href: "/blog" },
];

const HEADER_HEIGHT = 80;

// ============================================================================
// SCROLL HELPER
// ============================================================================

function scrollToTarget(target: string) {
  if (target === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(target);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

// ============================================================================
// CATEGORY ICON MAP
// ============================================================================

const CATEGORY_ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Compass,
  Rocket,
  TrendingUp,
  Handshake,
  Sparkles,
};

function CategoryIcon({ name, size = 14, className }: { name: string; size?: number; className?: string }) {
  const Icon = CATEGORY_ICON_MAP[name];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.5} className={className} />;
}

// ============================================================================
// DESKTOP MEGA MENU
// ============================================================================

function DesktopMegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // 3 colonnes :
  // Col 1: Audit & Stratégie (2) + Growth (3)
  // Col 2: Product Marketing (4) + Sales Enablement (3)
  // Col 3: Marketing Automation & IA (2) en haut + bloc Externalisation en dessous
  const col1 = SERVICE_MENU_CATEGORIES.filter((c) =>
    ["Audit & Stratégie", "Growth"].includes(c.title)
  );
  const col2 = SERVICE_MENU_CATEGORIES.filter((c) =>
    ["Product Marketing", "Sales Enablement"].includes(c.title)
  );
  const col3Category = SERVICE_MENU_CATEGORIES.find((c) =>
    c.title === "Marketing Automation & IA"
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 top-[80px] bg-black/10 z-40"
            onClick={onClose}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 z-50 w-[1060px] bg-white border border-black/[0.08] shadow-xl"
          >
            {/* Layout : 3 cols services + panneau CTA */}
            <div className="grid grid-cols-[1fr_1fr_1fr_240px]">
              {/* Col 1 — Audit & Stratégie + Growth */}
              <div className="p-5 flex flex-col gap-4 border-r border-black/[0.06]">
                {col1.map((category, i) => (
                  <MegaMenuCategory key={category.title} category={category} onClose={onClose} isFirst={i === 0} />
                ))}
              </div>

              {/* Col 2 — Product Marketing + Sales Enablement */}
              <div className="p-5 flex flex-col gap-4 border-r border-black/[0.06]">
                {col2.map((category, i) => (
                  <MegaMenuCategory key={category.title} category={category} onClose={onClose} isFirst={i === 0} />
                ))}
              </div>

              {/* Col 3 — Marketing Automation & IA */}
              <div className="p-5 flex flex-col gap-4 border-r border-black/[0.06]">
                {col3Category && (
                  <MegaMenuCategory category={col3Category} onClose={onClose} isFirst />
                )}
              </div>

              {/* Col 4 — CTA Externalisation, pleine hauteur */}
              <Link
                href={SERVICE_MENU_BANNER.href}
                onClick={onClose}
                className="flex flex-col justify-between p-5 group relative overflow-hidden"
                style={{ background: "var(--bg-dark)" }}
              >
                {/* Diffusion accent */}
                <div
                  className="absolute -top-20 -right-20 w-60 h-60 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at center, rgba(var(--color-accent-rgb), 0.15) 0%, transparent 70%)" }}
                />
                <div
                  className="absolute -bottom-10 -left-10 w-40 h-40 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at center, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 70%)" }}
                />

                {/* Image PNG par dessus */}
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                  <Image
                    src="/images/menu.png"
                    alt=""
                    width={240}
                    height={400}
                    className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700 max-h-full"
                  />
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-accent block mb-3">
                    Sur mesure
                  </span>
                  <span className="text-[20px] font-semibold text-white leading-[1.2] tracking-[-0.02em] block">
                    Externalisez votre stratégie Marketing de A à Z
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {["CMO à temps partagé", "Exécution complète", "Niveau d'implication au choix"].map((tag) => (
                      <span key={tag} className="text-[10px] font-medium text-white/80 bg-white/10 backdrop-blur-sm border border-white/10 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-white">
                    Nous contacter
                    <div className="w-6 h-6 flex items-center justify-center bg-accent text-primary group-hover:translate-x-1 transition-transform duration-200">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function MegaMenuCategory({ category, onClose, isFirst = false }: { category: (typeof SERVICE_MENU_CATEGORIES)[number]; onClose: () => void; isFirst?: boolean }) {
  return (
    <div className={isFirst ? "" : "pt-4 border-t border-black/[0.04]"}>
      <div className="flex items-center gap-2 mb-3 px-2 py-1.5 bg-card -mx-1">
        <CategoryIcon name={category.icon} size={13} className="text-muted" />
        <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-primary">
          {category.title}
        </span>
      </div>
      <div className="flex flex-col gap-0.5">
        {category.items.map((item) => (
          <MegaMenuServiceItem key={item.label} item={item} onClose={onClose} />
        ))}
      </div>
    </div>
  );
}

function MegaMenuServiceItem({ item, onClose }: { item: ServiceMenuItem; onClose: () => void }) {
  const content = (
    <div className="relative py-2 px-2 -mx-1 hover:bg-accent transition-all duration-200 cursor-pointer group/item">
      <span className="text-[13px] font-medium text-primary leading-tight block group-hover/item:translate-x-0.5 transition-transform duration-200">
        {item.label}
      </span>
      <span className="text-[11px] text-muted leading-snug block mt-0.5 group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-all duration-200">
        {item.description}
      </span>
    </div>
  );

  if (item.href) {
    return <Link href={item.href} onClick={onClose}>{content}</Link>;
  }
  return content;
}

// ============================================================================
// MOBILE MENU
// ============================================================================

function MobileMenu({
  isOpen,
  onClose,
  isHomePage,
}: {
  isOpen: boolean;
  onClose: () => void;
  isHomePage: boolean;
}) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleClick = useCallback(
    (item: (typeof navItems)[number]) => {
      if (item.hasMegaMenu) {
        setServicesOpen((prev) => !prev);
        return;
      }
      onClose();
      if (isHomePage) {
        setTimeout(() => scrollToTarget(item.target), 150);
      }
    },
    [onClose, isHomePage]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-white border-b border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="px-4 sm:px-6 py-6 flex flex-col gap-2">
            {navItems.map((item) => {
              if (item.hasMegaMenu) {
                return (
                  <div key={item.target}>
                    <button
                      onClick={() => handleClick(item)}
                      className="flex items-center justify-between w-full py-3 border-b border-black/5 text-left cursor-pointer"
                    >
                      <span className="text-[16px] font-semibold text-primary">
                        {item.label}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-secondary transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="py-3 flex flex-col gap-4">
                            {SERVICE_MENU_CATEGORIES.map((category) => (
                              <div key={category.title}>
                                <p className="surtitre text-secondary mb-2 flex items-center gap-1.5">
                          <CategoryIcon name={category.icon} size={13} className="text-muted" />
                          {category.title}
                        </p>
                                <div className="flex flex-col gap-1">
                                  {category.items.map((sItem) => {
                                    const itemContent = (
                                      <div className="py-1.5 pl-2">
                                        <span className="text-[14px] font-medium text-primary leading-tight block">
                                          {sItem.label}
                                        </span>
                                        <span className="text-[12px] text-secondary leading-snug block">
                                          {sItem.description}
                                        </span>
                                      </div>
                                    );
                                    return sItem.href ? (
                                      <Link key={sItem.label} href={sItem.href} onClick={onClose}>
                                        {itemContent}
                                      </Link>
                                    ) : (
                                      <div key={sItem.label}>{itemContent}</div>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}

                            {/* Banner mobile */}
                            <Link
                              href={SERVICE_MENU_BANNER.href}
                              onClick={onClose}
                              className="flex items-center justify-between p-3 bg-accent mt-2"
                            >
                              <div className="flex flex-col">
                                <span className="text-[13px] font-semibold text-primary">
                                  {SERVICE_MENU_BANNER.label}
                                </span>
                                <span className="text-[11px] text-primary/70">
                                  {SERVICE_MENU_BANNER.description}
                                </span>
                              </div>
                              <ArrowRight size={16} className="text-primary shrink-0" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isAnchor = isHomePage && (item.href === "/" || item.href.startsWith("/#"));
              return isAnchor ? (
                <button
                  key={item.target}
                  onClick={() => handleClick(item)}
                  className="flex items-center py-3 border-b border-black/5 text-left cursor-pointer"
                >
                  <span className="text-[16px] font-semibold text-primary">
                    {item.label}
                  </span>
                </button>
              ) : (
                <Link
                  key={item.target}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center py-3 border-b border-black/5 text-left cursor-pointer"
                >
                  <span className="text-[16px] font-semibold text-primary">
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {/* CTA */}
            <div className="pt-4 mt-2">
              <Link
                href="/contact"
                onClick={onClose}
                className="btn btn-dark w-full justify-center"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// MAIN HEADER
// ============================================================================

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const megaMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le mega menu quand on change de page
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMegaMenuEnter = useCallback(() => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setMegaMenuOpen(true);
  }, []);

  const handleMegaMenuLeave = useCallback(() => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Bar */}
      <div
        className={`w-full bg-white border-b border-gray-200 px-4 sm:px-6 md:px-8 pt-2 pb-3 sm:pt-2 sm:pb-4 transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-[82.5rem] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center group cursor-pointer"
          >
            <Image
              src="/images/logo-vizion.avif"
              alt="Vizion - Agence Marketing Produit B2B"
              width={115}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              if (item.hasMegaMenu) {
                return (
                  <div
                    key={item.target}
                    onMouseEnter={handleMegaMenuEnter}
                    onMouseLeave={handleMegaMenuLeave}
                    className="relative"
                  >
                    <button
                      className="relative text-[14px] font-medium text-secondary hover:text-primary transition-colors duration-200 cursor-pointer group flex items-center gap-1"
                      onClick={() => setMegaMenuOpen((prev) => !prev)}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${megaMenuOpen ? "rotate-180" : ""}`}
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </button>
                  </div>
                );
              }

              const isAnchor = isHomePage && (item.href === "/" || item.href.startsWith("/#"));
              return isAnchor ? (
                <button
                  key={item.target}
                  onClick={() => scrollToTarget(item.target)}
                  className="relative text-[14px] font-medium text-secondary hover:text-primary transition-colors duration-200 cursor-pointer group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={item.target}
                  href={item.href}
                  className="relative text-[14px] font-medium text-secondary hover:text-primary transition-colors duration-200 cursor-pointer group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* Right side - CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn btn-dark">
              Nous contacter
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-secondary hover:bg-gray-100 rounded-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <div
        onMouseEnter={handleMegaMenuEnter}
        onMouseLeave={handleMegaMenuLeave}
      >
        <DesktopMegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
        />
      </div>

      {/* Mobile Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isHomePage={isHomePage}
      />
    </header>
  );
}
