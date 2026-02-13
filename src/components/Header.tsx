"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Target,
  TrendingUp,
  Globe,
  Presentation,
  Zap,
  Brain,
  ArrowRight,
  Sparkles,
  Building2,
  Code2,
  Factory
} from "lucide-react";
import { ArrowUpRightIcon } from "@/components/icons";
import { ContactModal } from "@/components/ContactModal";

// Délai avant fermeture du dropdown (permet de bouger vers le contenu)
const CLOSE_DELAY = 150;

// ============================================================================
// NAVIGATION DATA
// ============================================================================

const servicesItems = [
  {
    icon: Target,
    title: "Pitch flou ?",
    description: "Positionnement, messaging et proposition de valeur différenciante",
    href: "/services/marketing-produit",
    tags: ["Positionnement", "Messaging"]
  },
  {
    icon: Presentation,
    title: "Équipe mal outillée ?",
    description: "Pitch decks, battle cards, scripts d'appel, objection handling",
    href: "/services/sales-enablement",
    tags: ["Sales Enablement", "Vente"]
  },
  {
    icon: Globe,
    title: "Site qui ne convertit pas ?",
    description: "Sites web et landing pages B2B optimisés pour convertir",
    href: "/services/sites-web-b2b",
    tags: ["Web", "Conversion"]
  },
  {
    icon: Zap,
    title: "Process manuels ?",
    description: "Workflows, déploiement CRM, intégrations sur mesure",
    href: "/services/automatisation-crm",
    tags: ["CRM", "Automation"]
  },
  {
    icon: Brain,
    title: "IA pas exploitée ?",
    description: "Intelligence artificielle au service de votre performance commerciale",
    href: "/services/ia-marketing-ventes",
    tags: ["IA", "Sales"]
  },
  {
    icon: TrendingUp,
    title: "Canaux dispersés ?",
    description: "Campagnes d'acquisition et notoriété alignées sur votre positionnement",
    href: "/services/acquisition-b2b",
    tags: ["Ads", "LinkedIn"]
  }
];

const casClientsItems = [
  {
    icon: Building2,
    title: "easyVirtual.tours",
    subtitle: "De 0 à 25 franchises en 18 mois",
    description: "Direction Marketing Externalisée pour un réseau de franchises",
    href: "/cas-clients/easyvirtual-tours-franchise",
    sector: "Franchise",
    metric: "+25 agences",
    image: "/images/cas-clients/easyvirtual-hero.jpg"
  },
  {
    icon: Code2,
    title: "DataFlow",
    subtitle: "+180% de MRR en 12 mois",
    description: "Repositionnement stratégique d'un éditeur SaaS B2B",
    href: "/cas-clients/dataflow-saas-croissance",
    sector: "SaaS B2B",
    metric: "x3 conversion",
    image: "/images/cas-clients/dataflow-hero.jpg"
  },
  {
    icon: Factory,
    title: "Précision Industries",
    subtitle: "+40% sur les marges",
    description: "Repositionnement d'une ETI industrielle en partenaire stratégique",
    href: "/cas-clients/precision-industries-repositionnement",
    sector: "Industrie B2B",
    metric: "2.8M€ nouveaux contrats",
    image: "/images/cas-clients/precision-hero.jpg"
  }
];

// ============================================================================
// SERVICES DROPDOWN
// ============================================================================

interface ServicesDropdownProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function ServicesDropdown({ isOpen, onOpen, onClose }: ServicesDropdownProps) {
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    onOpen();
  }, [onOpen]);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
    }, CLOSE_DELAY);
  }, [onClose]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1.5 text-[14px] font-medium transition-colors duration-200 ${
          isOpen ? "text-[#1a1a1a]" : "text-[#52525b] hover:text-[#1a1a1a]"
        }`}
      >
        Services
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-50 w-[680px] p-6"
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-black/10 rotate-45" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-black/5">
                <div>
                  <span className="text-[10px] font-light tracking-[0.12em] text-black/40 mb-1 block">NOS SERVICES</span>
                  <span className="text-[15px] font-semibold text-[#1a1a1a]">Un tunnel de vente aligné</span>
                </div>
                <Link
                  href="/#services"
                  onClick={onClose}
                  className="flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-black/60 hover:text-[#1a1a1a] transition-colors"
                >
                  Voir tous les services
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {servicesItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={onClose}
                      className="group flex gap-3 p-3 rounded-none transition-all duration-200 hover:bg-[#fafaf8]"
                    >
                      <div className="w-10 h-10 shrink-0 flex items-center justify-center text-[#1a1a1a] bg-black/5 group-hover:bg-[#D4FD00] transition-colors">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[13px] font-semibold text-[#1a1a1a] group-hover:text-black block mb-0.5">{item.title}</span>
                        <span className="text-[11px] text-black/50 leading-snug line-clamp-2 group-hover:text-black/60">{item.description}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between bg-[#fafaf8] -mx-6 -mb-6 px-6 py-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#D4FD00]" />
                  <span className="text-[11px] text-black/60">IA appliquée au marketing B2B</span>
                </div>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="text-[11px] font-bold text-[#1a1a1a] hover:text-black flex items-center gap-1 transition-colors"
                >
                  Parlons de votre projet <ArrowUpRightIcon size={12} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// CAS CLIENTS DROPDOWN (RICH MENU WITH IMAGES)
// ============================================================================

interface CasClientsDropdownProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function CasClientsDropdown({ isOpen, onOpen, onClose }: CasClientsDropdownProps) {
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    onOpen();
  }, [onOpen]);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
    }, CLOSE_DELAY);
  }, [onClose]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1.5 text-[14px] font-medium transition-colors duration-200 ${
          isOpen ? "text-[#1a1a1a]" : "text-[#52525b] hover:text-[#1a1a1a]"
        }`}
      >
        Clients
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-50 w-[720px] p-6"
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-black/10 rotate-45" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-black/5">
                <div>
                  <span className="text-[10px] font-light tracking-[0.12em] text-black/40 mb-1 block">NOS RÉALISATIONS</span>
                  <span className="text-[15px] font-semibold text-[#1a1a1a]">Ils sont devenus l'évidence sur leur marché</span>
                </div>
                <Link
                  href="/cas-clients"
                  onClick={onClose}
                  className="flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-black/60 hover:text-[#1a1a1a] transition-colors"
                >
                  Voir tous les cas clients
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {casClientsItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={onClose}
                      className="group block"
                    >
                      {/* Image */}
                      <div className="relative w-full h-28 mb-3 overflow-hidden bg-black/5 transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:from-black/70" />
                        <div className="absolute bottom-2 left-2 z-20">
                          <span className="text-[9px] px-2 py-0.5 bg-[#D4FD00] text-black font-bold tracking-wide transition-all duration-300 group-hover:bg-white group-hover:text-black">
                            {item.sector}
                          </span>
                        </div>
                        <div className="absolute bottom-2 right-2 z-20">
                          <span className="text-[10px] text-white/90 font-semibold">
                            {item.metric}
                          </span>
                        </div>
                        {/* Placeholder gradient if no image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40 flex items-center justify-center transition-all duration-300 group-hover:from-black/70 group-hover:to-black/30">
                          <Icon size={32} className="text-white/30 transition-all duration-300 group-hover:text-white/50 group-hover:scale-110" strokeWidth={1} />
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <span className="text-[13px] font-semibold text-[#1a1a1a] group-hover:text-black transition-colors duration-200 block mb-0.5">
                          {item.title}
                        </span>
                        <span className="text-[11px] text-[#D4FD00] font-medium block mb-1 transition-colors duration-200 group-hover:text-[#b8d600]">
                          {item.subtitle}
                        </span>
                        <span className="text-[10px] text-black/50 leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-black/70">
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between bg-[#fafaf8] -mx-6 -mb-6 px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-black/60">+70 entreprises accompagnées depuis 2021</span>
                </div>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="text-[11px] font-bold text-[#1a1a1a] hover:text-black flex items-center gap-1 transition-colors"
                >
                  Devenir le prochain cas client <ArrowUpRightIcon size={12} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// MOBILE MENU
// ============================================================================

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

function MobileMenu({ isOpen, onClose, onOpenContact }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-white border-b border-gray-200 overflow-y-auto max-h-[calc(100vh-80px)]"
        >
          <div className="px-4 sm:px-6 py-6 flex flex-col gap-2">
            {/* Accueil Link */}
            <div className="border-b border-black/5 pb-4">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center py-3"
              >
                <span className="text-[16px] font-semibold text-[#1a1a1a]">Accueil</span>
              </Link>
            </div>

            {/* Services Section */}
            <div className="border-b border-black/5 pb-4">
              <button
                onClick={() => toggleSection("services")}
                className="flex items-center justify-between w-full py-3 text-[16px] font-semibold text-[#1a1a1a]"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${expandedSection === "services" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {expandedSection === "services" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-1 pt-2">
                      {servicesItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={index}
                            href={item.href}
                            onClick={onClose}
                            className="flex items-center gap-3 p-3 rounded-none hover:bg-[#fafaf8] transition-colors"
                          >
                            <div className="w-8 h-8 flex items-center justify-center bg-black/5 text-[#1a1a1a]">
                              <Icon size={16} strokeWidth={1.5} />
                            </div>
                            <span className="text-[14px] font-medium text-[#52525b] flex-1">{item.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clients Section */}
            <div className="border-b border-black/5 pb-4">
              <button
                onClick={() => toggleSection("cas-clients")}
                className="flex items-center justify-between w-full py-3 text-[16px] font-semibold text-[#1a1a1a]"
              >
                Clients
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${expandedSection === "cas-clients" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {expandedSection === "cas-clients" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-3 pt-2">
                      {casClientsItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={index}
                            href={item.href}
                            onClick={onClose}
                            className="flex items-start gap-3 p-3 rounded-none hover:bg-[#fafaf8] transition-colors"
                          >
                            <div className="w-10 h-10 flex items-center justify-center bg-black/5 text-[#1a1a1a] shrink-0">
                              <Icon size={18} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                              <span className="text-[14px] font-semibold text-[#1a1a1a] block">{item.title}</span>
                              <span className="text-[12px] text-[#D4FD00] font-medium">{item.subtitle}</span>
                            </div>
                          </Link>
                        );
                      })}
                      <Link
                        href="/cas-clients"
                        onClick={onClose}
                        className="flex items-center gap-2 px-3 py-2 text-[13px] font-bold text-black/60"
                      >
                        Voir tous les clients
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* L'agence Link */}
            <div className="border-b border-black/5 pb-4">
              <Link
                href="/#equipe"
                onClick={onClose}
                className="flex items-center py-3"
              >
                <span className="text-[16px] font-semibold text-[#1a1a1a]">L'agence</span>
              </Link>
            </div>

            {/* CTA */}
            <div className="pt-4 mt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="btn btn-dark w-full justify-center"
              >
                Nous contacter
              </button>
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenDropdown = useCallback((name: string) => {
    setOpenDropdown(name);
  }, []);

  const handleCloseDropdown = useCallback((name: string) => {
    setOpenDropdown((current) => (current === name ? null : current));
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Bar */}
      <div className="w-full bg-white border-b border-gray-200 px-4 sm:px-6 md:px-8 pt-2 pb-3 sm:pt-2 sm:pb-4">
        <div className="max-w-[82.5rem] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center group">
            <Image
              src="/logo-vizion.svg"
              alt="Vizion - Agence Marketing Produit B2B"
              width={115}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="text-[14px] font-medium text-[#52525b] hover:text-[#1a1a1a] transition-colors duration-200"
            >
              Accueil
            </Link>

            <ServicesDropdown
              isOpen={openDropdown === "services"}
              onOpen={() => handleOpenDropdown("services")}
              onClose={() => handleCloseDropdown("services")}
            />

            <CasClientsDropdown
              isOpen={openDropdown === "cas-clients"}
              onOpen={() => handleOpenDropdown("cas-clients")}
              onClose={() => handleCloseDropdown("cas-clients")}
            />

            <Link
              href="/#equipe"
              className="text-[14px] font-medium text-[#52525b] hover:text-[#1a1a1a] transition-colors duration-200"
            >
              L'agence
            </Link>
          </nav>

          {/* Right side - CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => setContactModalOpen(true)}
              className="btn btn-dark"
            >
              Nous contacter
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#52525b] hover:bg-gray-100 rounded-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Contact Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </header>
  );
}
