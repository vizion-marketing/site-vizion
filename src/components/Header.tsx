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
  ArrowUpRight,
  Compass,
  Rocket,
  TrendingUp,
  Handshake,
  Sparkles,
  Monitor,
  Building2,
  RefreshCw,
  Layers,
  Zap,
} from "lucide-react";
import {
  SERVICE_MENU_CATEGORIES,
  SERVICE_MENU_BANNER,
} from "@/lib/constants";
import type { ServiceMenuItem } from "@/lib/constants";
import type { MenuCaseStudy, MenuClient, MenuPost } from "../../sanity/lib/types";

// ============================================================================
// TYPES
// ============================================================================

type ActiveMenu = "services" | "cas-clients" | "enjeux" | "ressources" | null;

interface HeaderProps {
  menuCaseStudies?: MenuCaseStudy[];
  menuClients?: MenuClient[];
  menuPosts?: MenuPost[];
}

// ============================================================================
// NAV ITEMS
// ============================================================================

const navItems = [
  { label: "Nos services", target: "services", href: "/services", megaMenu: "services" as ActiveMenu },
  { label: "Pour qui ?", target: "enjeux", href: "/enjeux", megaMenu: "enjeux" as ActiveMenu },
  { label: "Nos formations", target: "formations", href: "/formations", megaMenu: null as ActiveMenu },
  { label: "Nos cas clients", target: "cas-clients", href: "/cas-clients", megaMenu: "cas-clients" as ActiveMenu },
  { label: "Notre agence", target: "agence", href: "/#agence", megaMenu: null as ActiveMenu },
  { label: "Nos ressources", target: "ressources", href: "/blog", megaMenu: "ressources" as ActiveMenu },
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
  Monitor,
  Sparkles,
};

function CategoryIcon({ name, size = 14, className }: { name: string; size?: number; className?: string }) {
  const Icon = CATEGORY_ICON_MAP[name];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.5} className={className} />;
}

// ============================================================================
// DESKTOP MEGA MENU - SERVICES
// ============================================================================

function DesktopServicesMegaMenu({ onClose }: { onClose: () => void }) {
  const col1 = SERVICE_MENU_CATEGORIES.filter((c) =>
    ["Stratégie", "Growth Marketing"].includes(c.title)
  );
  const col2 = SERVICE_MENU_CATEGORIES.filter((c) =>
    ["Marketing Produit", "Activation des Ventes"].includes(c.title)
  );
  const col3 = SERVICE_MENU_CATEGORIES.filter((c) =>
    ["Transformation Digitale"].includes(c.title)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 z-50 w-[1060px] bg-white border border-black/[0.08] shadow-2xl shadow-black/10"
    >
      <div className="grid grid-cols-[1fr_1fr_1fr_240px]">
        {/* Col 1 - Audit & Stratégie + Growth */}
        <div className="p-5 flex flex-col gap-4 border-r border-black/[0.06]">
          {col1.map((category, i) => (
            <MegaMenuCategory key={category.title} category={category} onClose={onClose} isFirst={i === 0} />
          ))}
        </div>

        {/* Col 2 - Marketing Produit + Activation des Ventes */}
        <div className="p-5 flex flex-col gap-4 border-r border-black/[0.06]">
          {col2.map((category, i) => (
            <MegaMenuCategory key={category.title} category={category} onClose={onClose} isFirst={i === 0} />
          ))}
        </div>

        {/* Col 3 - Digitalisez + Automatisez */}
        <div className="p-5 flex flex-col gap-4 border-r border-black/[0.06]">
          {col3.map((category, i) => (
            <MegaMenuCategory key={category.title} category={category} onClose={onClose} isFirst={i === 0} />
          ))}
        </div>

        {/* Col 4 - CTA Externalisation */}
        <Link
          href={SERVICE_MENU_BANNER.href}
          onClick={onClose}
          className="flex flex-col justify-between p-5 group relative overflow-hidden dark-section"
          style={{ background: "var(--bg-dark)" }}
        >
          {/* Background hero image */}
          <Image
            src="/images/services/creation-landing-page/hero.avif"
            alt=""
            fill
            className="object-cover object-center opacity-40"
            sizes="220px"
            aria-hidden="true"
          />
          {/* Gradient: transparent top → black bottom */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.92) 100%)" }} />

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
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

function MegaMenuCategory({ category, onClose, isFirst = false }: { category: (typeof SERVICE_MENU_CATEGORIES)[number]; onClose: () => void; isFirst?: boolean }) {
  const titleContent = (
    <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-black -mx-1 group/cat hover:bg-black/90 transition-colors duration-200">
      <CategoryIcon name={category.icon} size={13} className="text-white/60" />
      <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/90 group-hover/cat:text-white transition-colors duration-200">
        {category.title}
      </span>
      {category.href && (
        <ArrowUpRight size={10} className="text-accent ml-auto" />
      )}
    </div>
  );

  return (
    <div className={isFirst ? "" : "pt-4 border-t border-black/[0.06]"}>
      {category.href ? (
        <Link href={category.href} onClick={onClose}>
          {titleContent}
        </Link>
      ) : (
        titleContent
      )}
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
    <div className="relative py-2 px-2 -mx-1 hover:bg-black/[0.04] transition-all duration-200 cursor-pointer group/item">
      <span className="text-[13px] font-medium text-black/80 leading-tight block group-hover/item:translate-x-0.5 group-hover/item:font-semibold transition-all duration-200">
        {item.label}
      </span>
      <span className="text-[11px] text-black/50 leading-snug block mt-0.5 group-hover/item:text-black/70 group-hover/item:translate-x-0.5 transition-all duration-200">
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
// DESKTOP MEGA MENU - VOS ENJEUX
// ============================================================================

const ENJEUX = [
  {
    icon: Rocket,
    label: "Vous lancez un nouveau produit ou service",
    description: "Positionnement, go-to-market, outils commerciaux : on structure le lancement de A à Z.",
    href: "/enjeux/lancement-produit",
  },
  {
    icon: RefreshCw,
    label: "Vous restructurez votre organisation commerciale",
    description: "Votre pipe stagne ou votre organisation commerciale ne tient plus. On repose les bases.",
    href: "/enjeux/restructuration-commerciale",
  },
  {
    icon: Compass,
    label: "Vous changez de cap ou pivotez",
    description: "Pivot, nouveau segment, repositionnement : on réaligne le message et les canaux.",
    href: "/enjeux/changement-de-cap",
  },
  {
    icon: TrendingUp,
    label: "Vous voulez accélérer votre croissance",
    description: "Les fondations sont là. On optimise, on scale, on va chercher la prochaine étape.",
    href: "/enjeux/acceleration-croissance",
  },
  {
    icon: Layers,
    label: "Vous traversez un post-rachat ou une intégration",
    description: "Rachat, fusion, restructuration post-levée : on aligne marketing et commerce sur la nouvelle identité.",
    href: "/enjeux/post-rachat",
  },
  {
    icon: Zap,
    label: "Vous voulez challenger l'existant",
    description: "Vos résultats plafonnent ou vos pratiques marketing s'essoufflent. On audite, on remet en question, on relance.",
    href: "/enjeux/challenger-l-existant",
  },
];

function DesktopEnjeuxMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 z-50 w-[680px] bg-white border border-black/[0.08] shadow-2xl shadow-black/10"
    >
      <div className="grid grid-cols-[1fr_220px]">
        {/* Left - 5 situations */}
        <div className="p-5 flex flex-col gap-0.5">
          <div className="flex items-center gap-2 px-2 py-1.5 bg-black/[0.03] -mx-1 mb-3">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-black/50">
              Vos situations
            </span>
          </div>
          {ENJEUX.map((enjeu) => (
            <Link
              key={enjeu.href}
              href={enjeu.href}
              onClick={onClose}
              className="relative py-2.5 px-2 -mx-1 hover:bg-black/[0.04] transition-all duration-200 cursor-pointer group/item flex items-start gap-3"
            >
              <div className="w-7 h-7 shrink-0 flex items-center justify-center bg-black/[0.04] border border-black/[0.06] mt-0.5 group-hover/item:bg-accent group-hover/item:border-accent transition-all duration-200">
                <enjeu.icon size={13} strokeWidth={1.5} className="text-black/50 group-hover/item:text-black transition-colors duration-200" />
              </div>
              <div>
                <span className="text-[13px] font-semibold text-black/80 leading-tight block group-hover/item:translate-x-0.5 transition-transform duration-200">
                  {enjeu.label}
                </span>
                <span className="text-[11px] text-black/45 leading-snug block mt-0.5 group-hover/item:text-black/60 group-hover/item:translate-x-0.5 transition-all duration-200">
                  {enjeu.description}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Right - CTA */}
        <div
          className="flex flex-col justify-between p-5 dark-section relative overflow-hidden"
          style={{ background: "var(--bg-dark)" }}
        >
          {/* Background hero image */}
          <Image
            src="/images/services/positionnement-messaging/hero.avif"
            alt=""
            fill
            className="object-cover object-center opacity-40"
            sizes="220px"
            aria-hidden="true"
          />
          {/* Gradient: transparent top → black bottom */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.92) 100%)" }} />
          <div className="relative z-10">
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-accent block mb-3">
              Pas sûr de votre situation ?
            </span>
            <span className="text-[16px] font-semibold text-white leading-[1.25] tracking-[-0.02em] block">
              On diagnostique votre enjeu en 30 min.
            </span>
          </div>
          <div className="relative z-10 mt-6">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center gap-2 text-[13px] font-semibold text-white group/cta"
            >
              Prendre un rendez-vous
              <div className="w-6 h-6 flex items-center justify-center bg-accent text-black group-hover/cta:translate-x-1 transition-transform duration-200">
                <ArrowUpRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// DESKTOP MEGA MENU - CAS CLIENTS
// ============================================================================

function DesktopCasClientsMegaMenu({
  onClose,
  caseStudies,
  clients,
}: {
  onClose: () => void;
  caseStudies: MenuCaseStudy[];
  clients: MenuClient[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 z-50 w-[1060px] bg-white border border-black/[0.08] shadow-2xl shadow-black/10"
    >
      <div className="grid grid-cols-[1fr_280px]">
        {/* Left - 3 dernières études de cas */}
        <div className="p-5 border-r border-black/[0.06]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 px-2 py-1.5 bg-black/[0.03] -mx-1">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-black/50">
                Dernières études de cas
              </span>
            </div>
            <Link
              href="/cas-clients"
              onClick={onClose}
              className="flex items-center gap-1.5 text-[12px] font-medium text-black/40 hover:text-black/70 hover:font-semibold transition-all group/all"
            >
              Voir toutes
              <ArrowUpRight size={12} className="group-hover/all:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {caseStudies.map((cs) => (
              <Link
                key={cs._id}
                href={cs.url}
                onClick={onClose}
                className="group/card block border border-black/[0.06] hover:border-black/[0.12] hover:bg-black/[0.02] transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                {cs.heroImageUrl ? (
                  <div className="relative h-[120px] overflow-hidden bg-black/[0.04]">
                    <Image
                      src={cs.heroImageUrl}
                      alt={cs.title}
                      fill
                      sizes="220px"
                      className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-[120px] bg-black/[0.04] flex items-center justify-center">
                    <Building2 size={24} className="text-black/20" />
                  </div>
                )}

                {/* Content */}
                <div className="p-3">
                  <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-black/50 block mb-1">
                    {cs.sector}
                  </span>
                  <span className="text-[13px] font-semibold text-black/80 leading-tight block mb-1 line-clamp-2">
                    {cs.title}
                  </span>
                  <span className="text-[11px] text-black/40 block mb-2">
                    {cs.company}
                  </span>

                  {/* Metrics (max 2) */}
                  {cs.metrics && cs.metrics.length > 0 && (
                    <div className="flex gap-3 pt-2 border-t border-black/[0.06]">
                      {cs.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[13px] font-semibold text-primary leading-none">
                            {m.value}
                          </span>
                          <span className="text-[9px] text-black/40 leading-tight mt-0.5">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right - Liste des clients */}
        <div className="p-5 flex flex-col">
          <div className="flex items-center gap-2 px-2 py-1.5 bg-black/[0.03] -mx-1 mb-3">
            <Building2 size={13} className="text-black/30" />
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-black/50">
              Nos clients
            </span>
          </div>

          <div className="flex flex-col gap-0.5 flex-1">
            {clients.map((client) => (
              <Link
                key={client._id}
                href={client.url}
                onClick={onClose}
                className="flex items-center gap-3 py-2 px-2 -mx-1 hover:bg-black/[0.04] transition-all duration-200 group/client"
              >
                {/* Logo ou initiale */}
                {client.logoUrl ? (
                  <div className="w-8 h-8 shrink-0 border border-black/[0.06] flex items-center justify-center overflow-hidden">
                    <Image
                      src={client.logoUrl}
                      alt={client.name}
                      width={32}
                      height={32}
                      className="object-contain w-full h-full p-1 grayscale opacity-70 group-hover/client:grayscale-0 group-hover/client:opacity-100 transition-all duration-200"
                    />
                  </div>
                ) : (
                  <div className="w-7 h-7 shrink-0 bg-black/[0.04] border border-black/[0.06] flex items-center justify-center">
                    <span className="text-[11px] font-semibold text-black/60">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <span className="text-[13px] font-medium text-black/70 leading-tight block truncate group-hover/client:text-black group-hover/client:translate-x-0.5 transition-all duration-200">
                    {client.name}
                  </span>
                </div>

                <span className="text-[9px] font-medium tracking-[0.04em] uppercase px-1.5 py-0.5 bg-black/[0.04] border border-black/[0.06] text-black/40 shrink-0 whitespace-nowrap">
                  {client.sector}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA bottom */}
          <Link
            href="/cas-clients"
            onClick={onClose}
            className="flex items-center justify-between mt-4 pt-4 border-t border-black/[0.06] group/cta"
          >
            <span className="text-[12px] font-semibold text-black/70">
              Tous les cas clients
            </span>
            <div className="w-6 h-6 flex items-center justify-center bg-accent text-black group-hover/cta:translate-x-0.5 transition-transform duration-200">
              <ArrowUpRight size={12} />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// DESKTOP MEGA MENU - NOS RESSOURCES
// ============================================================================

function DesktopRessourcesMegaMenu({
  onClose,
  posts,
}: {
  onClose: () => void;
  posts: MenuPost[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 z-50 w-[820px] bg-white border border-black/[0.08] shadow-2xl shadow-black/10"
    >
      <div className="grid grid-cols-[1fr_260px]">
        {/* Gauche — derniers articles */}
        <div className="p-5 border-r border-black/[0.06]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 px-2 py-1.5 bg-black/[0.03] -mx-1">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-black/50">
                Derniers articles
              </span>
            </div>
            <Link
              href="/blog"
              onClick={onClose}
              className="flex items-center gap-1.5 text-[12px] font-medium text-black/40 hover:text-black/70 hover:font-semibold transition-all group/all"
            >
              Voir tous
              <ArrowUpRight size={12} className="group-hover/all:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col gap-1">
            {posts.length > 0 ? posts.map((post) => (
              <Link
                key={post._id}
                href={post.url}
                onClick={onClose}
                className="group/post flex items-center gap-3 py-2 px-2 -mx-1 hover:bg-black/[0.04] transition-all duration-200"
              >
                {post.featuredImageUrl ? (
                  <div className="relative w-16 h-11 shrink-0 overflow-hidden bg-black/[0.04]">
                    <Image
                      src={post.featuredImageUrl}
                      alt={post.title}
                      fill
                      sizes="64px"
                      className="object-cover group-hover/post:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-11 shrink-0 bg-black/[0.04] border border-black/[0.06]" />
                )}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-accent block mb-0.5">
                    {post.category}
                  </span>
                  <span className="text-[13px] font-semibold text-black/80 leading-tight block line-clamp-2 group-hover/post:translate-x-0.5 transition-transform duration-200">
                    {post.title}
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-black/20 shrink-0 group-hover/post:text-black/50 transition-colors" />
              </Link>
            )) : (
              <p className="text-[13px] text-black/40 py-4 px-2">Aucun article pour le moment.</p>
            )}
          </div>
        </div>

        {/* Droite — nos ressources */}
        <div className="p-5 flex flex-col">
          <div className="flex items-center gap-2 px-2 py-1.5 bg-black/[0.03] -mx-1 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-black/50">
              Nos ressources
            </span>
          </div>

          {/* Lead magnet card */}
          <div className="flex-1 flex flex-col border border-black/[0.08] overflow-hidden">
            <div
              className="dark-section p-4 flex-1 relative overflow-hidden"
              style={{ background: "var(--bg-dark)" }}
            >
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 120% 120% at 50% 120%, rgba(var(--color-accent-rgb), 0.25) 0%, transparent 60%)`,
                }}
              />
              <div className="relative z-10">
                <span className="inline-block text-[9px] font-bold tracking-[0.15em] uppercase bg-accent text-black px-2 py-0.5 mb-3">
                  À venir
                </span>
                <p className="text-[14px] font-semibold text-white leading-[1.3] tracking-[-0.01em] mb-2">
                  Les meilleures pratiques marketing de 2026
                </p>
                <p className="text-[11px] text-white/50 leading-snug">
                  Le guide complet pour les équipes B2B : stratégie, outils, IA.
                </p>
              </div>
            </div>
            <div className="p-3 border-t border-black/[0.06] bg-black/[0.02]">
              <span className="text-[11px] text-black/40 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent/60 inline-block" />
                Bientôt disponible
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// DESKTOP MEGA MENU WRAPPER
// ============================================================================

function DesktopMegaMenu({
  activeMenu,
  onClose,
  caseStudies,
  clients,
  posts,
}: {
  activeMenu: ActiveMenu;
  onClose: () => void;
  caseStudies: MenuCaseStudy[];
  clients: MenuClient[];
  posts: MenuPost[];
}) {
  return (
    <AnimatePresence>
      {activeMenu && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 top-[80px] bg-black/20 z-40"
            onClick={onClose}
          />

          {activeMenu === "services" && (
            <DesktopServicesMegaMenu onClose={onClose} />
          )}
          {activeMenu === "enjeux" && (
            <DesktopEnjeuxMegaMenu onClose={onClose} />
          )}
          {activeMenu === "cas-clients" && (
            <DesktopCasClientsMegaMenu
              onClose={onClose}
              caseStudies={caseStudies}
              clients={clients}
            />
          )}
          {activeMenu === "ressources" && (
            <DesktopRessourcesMegaMenu onClose={onClose} posts={posts} />
          )}
        </>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// MOBILE MENU
// ============================================================================

function MobileMenu({
  isOpen,
  onClose,
  isHomePage,
  caseStudies,
  clients,
  posts,
}: {
  isOpen: boolean;
  onClose: () => void;
  isHomePage: boolean;
  caseStudies: MenuCaseStudy[];
  clients: MenuClient[];
  posts: MenuPost[];
}) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [enjeuxOpen, setEnjeuxOpen] = useState(false);
  const [casClientsOpen, setCasClientsOpen] = useState(false);
  const [ressourcesOpen, setRessourcesOpen] = useState(false);

  const handleClick = useCallback(
    (item: (typeof navItems)[number]) => {
      if (item.megaMenu === "services") {
        setServicesOpen((prev) => !prev);
        return;
      }
      if (item.megaMenu === "enjeux") {
        setEnjeuxOpen((prev) => !prev);
        return;
      }
      if (item.megaMenu === "cas-clients") {
        setCasClientsOpen((prev) => !prev);
        return;
      }
      if (item.megaMenu === "ressources") {
        setRessourcesOpen((prev) => !prev);
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
          className="lg:hidden bg-white border-b border-black/[0.08] max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="px-4 sm:px-6 py-6 flex flex-col gap-2">
            {navItems.map((item) => {
              // Services accordion
              if (item.megaMenu === "services") {
                return (
                  <div key={item.target}>
                    <button
                      onClick={() => handleClick(item)}
                      className="flex items-center justify-between w-full py-3 border-b border-black/[0.06] text-left cursor-pointer"
                    >
                      <span className="text-[16px] font-semibold text-black">
                        {item.label}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-black/40 transition-transform duration-200 ${
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
                                {category.href ? (
                                  <Link href={category.href} onClick={onClose} className="surtitre text-white/90 mb-2 flex items-center gap-2 bg-black px-3 py-2 hover:bg-black/90 transition-colors">
                                    <CategoryIcon name={category.icon} size={13} className="text-white/60" />
                                    {category.title}
                                    <ArrowUpRight size={10} className="text-accent ml-auto" />
                                  </Link>
                                ) : (
                                  <p className="surtitre text-white/90 mb-2 flex items-center gap-2 bg-black px-3 py-2">
                                    <CategoryIcon name={category.icon} size={13} className="text-white/60" />
                                    {category.title}
                                  </p>
                                )}
                                <div className="flex flex-col gap-1">
                                  {category.items.map((sItem) => {
                                    const itemContent = (
                                      <div className="py-1.5 pl-2">
                                        <span className="text-[14px] font-medium text-black/80 leading-tight block">
                                          {sItem.label}
                                        </span>
                                        <span className="text-[12px] text-black/50 leading-snug block">
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
                              <ArrowUpRight size={16} className="text-primary shrink-0" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Vos enjeux accordion
              if (item.megaMenu === "enjeux") {
                return (
                  <div key={item.target}>
                    <button
                      onClick={() => handleClick(item)}
                      className="flex items-center justify-between w-full py-3 border-b border-black/[0.06] text-left cursor-pointer"
                    >
                      <span className="text-[16px] font-semibold text-black">
                        {item.label}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-black/40 transition-transform duration-200 ${enjeuxOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {enjeuxOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="py-3 flex flex-col gap-1">
                            {ENJEUX.map((enjeu) => (
                              <Link key={enjeu.href} href={enjeu.href} onClick={onClose}>
                                <div className="py-2 pl-2 flex items-start gap-3">
                                  <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-black/[0.04] border border-black/[0.06] mt-0.5">
                                    <enjeu.icon size={12} strokeWidth={1.5} className="text-black/50" />
                                  </div>
                                  <div>
                                    <span className="text-[14px] font-semibold text-black/80 leading-tight block">
                                      {enjeu.label}
                                    </span>
                                    <span className="text-[12px] text-black/50 leading-snug block mt-0.5">
                                      {enjeu.description}
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            ))}
                            <Link
                              href="/contact"
                              onClick={onClose}
                              className="flex items-center justify-between p-3 bg-accent mt-2"
                            >
                              <span className="text-[13px] font-semibold text-primary">
                                Diagnostic gratuit en 30 min
                              </span>
                              <ArrowUpRight size={16} className="text-primary shrink-0" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Cas Clients accordion
              if (item.megaMenu === "cas-clients") {
                return (
                  <div key={item.target}>
                    <button
                      onClick={() => handleClick(item)}
                      className="flex items-center justify-between w-full py-3 border-b border-black/[0.06] text-left cursor-pointer"
                    >
                      <span className="text-[16px] font-semibold text-black">
                        {item.label}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-black/40 transition-transform duration-200 ${
                          casClientsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {casClientsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="py-3 flex flex-col gap-3">
                            {/* Dernières études */}
                            {caseStudies.length > 0 && (
                              <div>
                                <p className="surtitre text-black/50 mb-2">
                                  Dernières études
                                </p>
                                <div className="flex flex-col gap-2">
                                  {caseStudies.map((cs) => (
                                    <Link key={cs._id} href={cs.url} onClick={onClose}>
                                      <div className="flex items-center gap-3 py-1.5">
                                        {cs.heroImageUrl ? (
                                          <div className="relative w-14 h-10 shrink-0 overflow-hidden bg-black/[0.04]">
                                            <Image
                                              src={cs.heroImageUrl}
                                              alt={cs.title}
                                              fill
                                              sizes="56px"
                                              className="object-cover"
                                            />
                                          </div>
                                        ) : (
                                          <div className="w-14 h-10 shrink-0 bg-black/[0.04] flex items-center justify-center">
                                            <Building2 size={16} className="text-black/20" />
                                          </div>
                                        )}
                                        <div>
                                          <span className="text-[14px] font-medium text-black/80 leading-tight block">
                                            {cs.title}
                                          </span>
                                          <span className="text-[12px] text-black/50 leading-snug block">
                                            {cs.company} · {cs.sector}
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Clients */}
                            {clients.length > 0 && (
                              <div>
                                <p className="surtitre text-black/50 mb-2 flex items-center gap-1.5">
                                  <Building2 size={13} className="text-black/30" />
                                  Nos clients
                                </p>
                                <div className="flex flex-col gap-1">
                                  {clients.map((client) => (
                                    <Link key={client._id} href={client.url} onClick={onClose}>
                                      <div className="py-1.5 pl-2 flex items-center gap-2">
                                        {client.logoUrl ? (
                                          <Image
                                            src={client.logoUrl}
                                            alt={client.name}
                                            width={24}
                                            height={24}
                                            className="object-contain shrink-0 grayscale opacity-70"
                                          />
                                        ) : (
                                          <div className="w-5 h-5 bg-black/[0.04] flex items-center justify-center shrink-0">
                                            <span className="text-[9px] font-semibold text-black/60">
                                              {client.name.charAt(0)}
                                            </span>
                                          </div>
                                        )}
                                        <span className="text-[14px] font-medium text-black/70 leading-tight">
                                          {client.name}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* CTA */}
                            <Link
                              href="/cas-clients"
                              onClick={onClose}
                              className="flex items-center justify-between p-3 bg-accent mt-2"
                            >
                              <span className="text-[13px] font-semibold text-primary">
                                Tous les cas clients
                              </span>
                              <ArrowUpRight size={16} className="text-primary shrink-0" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Nos ressources accordion
              if (item.megaMenu === "ressources") {
                return (
                  <div key={item.target}>
                    <button
                      onClick={() => handleClick(item)}
                      className="flex items-center justify-between w-full py-3 border-b border-black/[0.06] text-left cursor-pointer"
                    >
                      <span className="text-[16px] font-semibold text-black">
                        {item.label}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-black/40 transition-transform duration-200 ${
                          ressourcesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {ressourcesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="py-3 flex flex-col gap-2">
                            {posts.map((post) => (
                              <Link key={post._id} href={post.url} onClick={onClose}>
                                <div className="flex items-center gap-3 py-1.5">
                                  {post.featuredImageUrl ? (
                                    <div className="relative w-14 h-10 shrink-0 overflow-hidden bg-black/[0.04]">
                                      <Image
                                        src={post.featuredImageUrl}
                                        alt={post.title}
                                        fill
                                        sizes="56px"
                                        className="object-cover"
                                      />
                                    </div>
                                  ) : (
                                    <div className="w-14 h-10 shrink-0 bg-black/[0.04] border border-black/[0.06]" />
                                  )}
                                  <div>
                                    <span className="text-[10px] font-semibold tracking-wider uppercase text-accent block mb-0.5">
                                      {post.category}
                                    </span>
                                    <span className="text-[14px] font-medium text-black/80 leading-tight block line-clamp-1">
                                      {post.title}
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            ))}
                            <div className="mt-2 p-3 border border-black/[0.06] bg-black/[0.02]">
                              <span className="text-[9px] font-bold tracking-widest uppercase bg-accent text-black px-1.5 py-0.5 inline-block mb-2">
                                À venir
                              </span>
                              <p className="text-[13px] font-semibold text-black/80 leading-tight">
                                Les meilleures pratiques marketing de 2026
                              </p>
                            </div>
                            <Link
                              href="/blog"
                              onClick={onClose}
                              className="flex items-center justify-between p-3 bg-accent mt-2"
                            >
                              <span className="text-[13px] font-semibold text-primary">
                                Tous les articles
                              </span>
                              <ArrowUpRight size={16} className="text-primary shrink-0" />
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
                  className="flex items-center py-3 border-b border-black/[0.06] text-left cursor-pointer"
                >
                  <span className="text-[16px] font-semibold text-black">
                    {item.label}
                  </span>
                </button>
              ) : (
                <Link
                  key={item.target}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center py-3 border-b border-black/[0.06] text-left cursor-pointer"
                >
                  <span className="text-[16px] font-semibold text-black">
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
                className="bg-accent text-black font-semibold w-full justify-center flex items-center py-3 text-[14px]"
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

export function Header({ menuCaseStudies = [], menuClients = [], menuPosts = [] }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [scrolled, setScrolled] = useState(false);
  const [headerHovered, setHeaderHovered] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isTransparent = !scrolled && !headerHovered && !mobileMenuOpen;
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer les menus quand on change de page
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMenuEnter = useCallback((menu: ActiveMenu) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    setActiveMenu(menu);
  }, []);

  const handleMenuLeave = useCallback(() => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Bar */}
      <div
        onMouseEnter={() => setHeaderHovered(true)}
        onMouseLeave={() => setHeaderHovered(false)}
        className={`w-full px-4 sm:px-6 md:px-8 pt-2 pb-3 sm:pt-2 sm:pb-4 transition-all duration-300 border-b ${
          isTransparent
            ? "bg-transparent border-transparent"
            : `bg-white/95 backdrop-blur-xl border-black/[0.08] ${scrolled ? "shadow-lg shadow-black/[0.08]" : ""}`
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
              className="h-8 w-auto transition-all duration-300"
              style={isTransparent ? { filter: "brightness(0) invert(1)" } : undefined}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              if (item.megaMenu) {
                return (
                  <div
                    key={item.target}
                    onMouseEnter={() => handleMenuEnter(item.megaMenu)}
                    onMouseLeave={handleMenuLeave}
                    className="relative"
                  >
                    <button
                      className={`text-[14px] font-medium hover:font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1 ${isTransparent ? "text-white/80 hover:text-white" : "text-black/60 hover:text-black"}`}
                      onClick={() => setActiveMenu((prev) => prev === item.megaMenu ? null : item.megaMenu)}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeMenu === item.megaMenu ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                );
              }

              const isAnchor = isHomePage && (item.href === "/" || item.href.startsWith("/#"));
              const navClass = `text-[14px] font-medium hover:font-semibold transition-all duration-200 cursor-pointer ${isTransparent ? "text-white/80 hover:text-white" : "text-black/60 hover:text-black"}`;

              return isAnchor ? (
                <button
                  key={item.target}
                  onClick={() => scrollToTarget(item.target)}
                  className={navClass}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.target}
                  href={item.href}
                  className={navClass}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side - CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-accent text-black font-semibold px-6 py-2.5 text-[13px] hover:bg-accent/90 transition-colors duration-200"
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-none transition-colors ${isTransparent ? "text-white/80 hover:bg-white/[0.1]" : "text-black/70 hover:bg-black/[0.06]"}`}
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
        onMouseEnter={() => {
          if (menuTimeoutRef.current) {
            clearTimeout(menuTimeoutRef.current);
            menuTimeoutRef.current = null;
          }
        }}
        onMouseLeave={handleMenuLeave}
      >
        <DesktopMegaMenu
          activeMenu={activeMenu}
          onClose={() => setActiveMenu(null)}
          caseStudies={menuCaseStudies}
          clients={menuClients}
          posts={menuPosts}
        />
      </div>

      {/* Mobile Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isHomePage={isHomePage}
        caseStudies={menuCaseStudies}
        clients={menuClients}
        posts={menuPosts}
      />
    </header>
  );
}
