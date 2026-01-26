"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Building2, Code, Briefcase, MapPin, Factory } from "lucide-react";

// Types pour les cas clients
interface CaseStudyNav {
  title: string;
  description: string;
  company: string;
  sector: string;
  slug: string;
  featured: boolean;
  heroImage: string | null;
}

interface HeaderProps {
  caseStudies?: CaseStudyNav[];
}

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; description: string; href: string }[];
  isCasClients?: boolean;
}

// Icônes par secteur
const sectorIcons: Record<string, React.ReactNode> = {
  "Franchise": <Building2 className="w-4 h-4" />,
  "SaaS B2B": <Code className="w-4 h-4" />,
  "Services B2B": <Briefcase className="w-4 h-4" />,
  "Business Local": <MapPin className="w-4 h-4" />,
  "Industrie B2B": <Factory className="w-4 h-4" />,
};


const baseNavigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Cas Clients", href: "/cas-clients", isCasClients: true },
  { label: "Blog", href: "/blog" },
];

export function Header({ caseStudies = [] }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileSector, setExpandedMobileSector] = useState<string | null>(null);

  // Navigation avec indicateur pour cas clients
  const navigation = useMemo(() => {
    return baseNavigation.map(item => {
      if (item.isCasClients && caseStudies.length > 0) {
        return { ...item, children: [] }; // Ajoute children vide pour activer le dropdown
      }
      return item;
    });
  }, [caseStudies]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sélectionner le cas vedette (premier featured avec image) et les autres
  const { featuredCase, otherCases } = useMemo(() => {
    const sorted = [...caseStudies].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
    // Le premier avec image devient le featured
    const withImage = sorted.find(cs => cs.heroImage);
    const others = sorted.filter(cs => cs !== withImage).slice(0, 3);
    return { featuredCase: withImage || sorted[0], otherCases: others };
  }, [caseStudies]);

  const CasClientsDropdown = () => (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[560px] bg-black/95 backdrop-blur-xl rounded-[var(--radius-lg)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden"
    >
      <div className="flex">
        {/* Colonne gauche - Cas vedette avec image */}
        {featuredCase && (
          <Link
            href={`/cas-clients/${featuredCase.slug}`}
            className="group/hero relative w-[220px] flex-shrink-0 overflow-hidden"
          >
            {/* Image de fond ou gradient fallback */}
            <div className="absolute inset-0">
              {featuredCase.heroImage ? (
                <Image
                  src={featuredCase.heroImage}
                  alt={featuredCase.company}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/hero:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
              )}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
            </div>
            
            {/* Contenu */}
            <div className="relative h-full min-h-[200px] p-4 flex flex-col justify-end">
              {/* Badge secteur */}
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-white/60">{sectorIcons[featuredCase.sector]}</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-white/60">
                  {featuredCase.sector}
                </span>
              </div>
              
              {/* Titre */}
              <h4 className="text-[14px] font-bold text-white leading-tight line-clamp-3 group-hover/hero:text-white transition-colors">
                {featuredCase.title}
              </h4>
              
              {/* Entreprise */}
              <span className="text-[11px] text-white/50 mt-2 block">
                {featuredCase.company}
              </span>
              
              {/* CTA jaune fluo */}
              <div className="flex items-center gap-1 mt-3 text-[10px] font-semibold text-[#EEFF41] group-hover/hero:brightness-110 transition-all">
                <span>Lire l&apos;étude</span>
                <ArrowRight className="w-3 h-3 group-hover/hero:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        )}

        {/* Colonne droite - Liste des autres cas */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="px-4 pt-4 pb-2">
            <span className="text-[9px] font-black uppercase tracking-widest text-white/40">
              Autres résultats
            </span>
          </div>

          {/* Liste des cas */}
          <div className="px-3 pb-3 space-y-0.5 flex-1">
            {otherCases.map((cs) => (
              <Link
                key={cs.slug}
                href={`/cas-clients/${cs.slug}`}
                className="group/case flex items-start gap-3 p-2.5 rounded-[var(--radius-md)] hover:bg-white/5 transition-all duration-200"
              >
                {/* Indicateur secteur */}
                <div className="flex-shrink-0 w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-white/40 group-hover/case:bg-white/10 group-hover/case:text-white/60 transition-all">
                  {sectorIcons[cs.sector]}
                </div>
                
                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-[12px] font-semibold text-white/80 group-hover/case:text-white line-clamp-2 leading-snug transition-colors">
                    {cs.title}
                  </h4>
                  <span className="text-[10px] text-white/40 mt-0.5 block">
                    {cs.company}
                  </span>
                </div>

                <ArrowRight className="flex-shrink-0 w-3.5 h-3.5 text-[#EEFF41] group-hover/case:translate-x-0.5 transition-all mt-0.5" />
              </Link>
            ))}
          </div>

          {/* CTA vers tous les cas - Bloc jaune fluo */}
          <div className="mt-auto">
            <Link 
              href="/cas-clients" 
              className="flex items-center justify-between px-4 py-3 transition-all group/all"
              style={{ backgroundColor: '#EEFF41' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5FF6B'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EEFF41'}
            >
              <div>
                <span className="text-[11px] font-bold text-black">
                  Tous les cas clients
                </span>
                <span className="text-[9px] text-black/60 block">
                  {caseStudies.length} études de cas
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-black group-hover/all:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-[12px] border-b border-white/10 ${
        isScrolled 
          ? "bg-black/20 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.08)]" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 flex items-center group transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/logo-vizion.svg"
            alt="Vizion - Agence Marketing B2B"
            width={120}
            height={32}
            className="h-7 md:h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => (item.children || item.isCasClients) && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200"
              >
                {item.label}
                {(item.children || (item.isCasClients && caseStudies.length > 0)) && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                )}
              </Link>

              {/* Dropdown Menu - Cas Clients */}
              <AnimatePresence>
                {item.isCasClients && caseStudies.length > 0 && activeDropdown === item.label && (
                  <CasClientsDropdown />
                )}
              </AnimatePresence>

              {/* Dropdown Menu - Services (et autres) */}
              <AnimatePresence>
                {item.children && !item.isCasClients && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-black/90 backdrop-blur-xl rounded-[var(--radius-lg)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden"
                  >
                    <div className="p-3 grid gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="group/item flex flex-col p-3 rounded-[var(--radius-md)] hover:bg-white/10 transition-all duration-200"
                        >
                          <span className="text-sm font-bold text-white group-hover/item:translate-x-1 transition-transform">
                            {child.label}
                          </span>
                          <span className="text-[11px] text-white/50 mt-1 line-clamp-1">
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="bg-white/[0.05] p-3 border-t border-white/10">
                      <Link href="/services" className="text-[11px] font-black uppercase tracking-wider text-white flex items-center justify-center gap-2 hover:gap-3 transition-all">
                        Nos Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-7 py-3 rounded-full text-[15px] font-['Inter'] font-semibold tracking-[-0.01em] transition-all duration-300 active:scale-95 bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
          >
            Nous contacter
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay - Glassmorphisme */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container-wide py-8 flex flex-col gap-6">
              {navigation.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  {/* Menu item principal */}
                  {item.isCasClients && caseStudies.length > 0 ? (
                    // Cas Clients avec expandable
                    <>
                      <button
                        onClick={() => setExpandedMobileSector(expandedMobileSector === 'cas-clients' ? null : 'cas-clients')}
                        className="text-lg font-['Roboto'] font-[900] uppercase tracking-tight text-white flex items-center justify-between w-full text-left"
                      >
                        {item.label}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedMobileSector === 'cas-clients' ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {expandedMobileSector === 'cas-clients' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 border-l-2 border-white/20 space-y-3">
                              {/* Cas vedette */}
                              {featuredCase && (
                                <Link
                                  href={`/cas-clients/${featuredCase.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-2 px-3 -mx-3 bg-white/5 rounded-lg"
                                >
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block mb-1">
                                    À la une
                                  </span>
                                  <span className="text-sm text-white font-semibold line-clamp-2 leading-snug">
                                    {featuredCase.title}
                                  </span>
                                  <span className="text-[11px] text-white/40 mt-1 block">
                                    {featuredCase.company}
                                  </span>
                                </Link>
                              )}

                              {/* Autres cas */}
                              {otherCases.map((cs) => (
                                <Link
                                  key={cs.slug}
                                  href={`/cas-clients/${cs.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-2"
                                >
                                  <span className="text-sm text-white/80 font-medium line-clamp-2 leading-snug">
                                    {cs.title}
                                  </span>
                                  <span className="text-[11px] text-white/40 mt-1 block">
                                    {cs.company}
                                  </span>
                                </Link>
                              ))}
                              
                              {/* Voir tous - Bloc jaune fluo */}
                              <Link
                                href="/cas-clients"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between mt-3 -mx-4 px-4 py-3 rounded-lg"
                                style={{ backgroundColor: '#EEFF41' }}
                              >
                                <div>
                                  <span className="text-sm font-bold text-black">
                                    Tous les cas clients
                                  </span>
                                  <span className="text-[10px] text-black/60 block">
                                    {caseStudies.length} études de cas
                                  </span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-black" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    // Autres items de navigation
                    <>
                      <Link
                        href={item.href}
                        onClick={() => !item.children && setMobileMenuOpen(false)}
                        className="text-lg font-['Roboto'] font-[900] uppercase tracking-tight text-white flex items-center justify-between"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="grid gap-4 pl-4 border-l-2 border-white/20">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-white/60 hover:text-white font-['Inter'] font-medium transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex justify-center py-4 rounded-full font-semibold tracking-[-0.01em] bg-white/10 backdrop-blur-xl text-white border border-white/20 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  Nous Contacter
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
