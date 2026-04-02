"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Filter,
  X,
  Star,
  Building2,
} from "lucide-react";
import type { Client, CaseStudy } from "../../../sanity/lib/types";
import { resolveImageUrl } from "../../../sanity/lib/image";
import { ArrowUpRightIcon } from "@/components/icons";
import { fadeInUp, staggerContainer, cardVariant } from "@/lib/animations";
import { companyTypes, sectorIconMap } from "@/lib/sectorIcons";

// Map company type → URL slug for SEO-friendly links
const companyTypeSlugMap: Record<string, string> = {
  Franchise: "franchise",
  PME: "pme",
  ETI: "eti",
  "Scale-up": "scale-up",
  "Start-up": "start-up",
};

interface CasClientsContentProps {
  clients: Client[];
  caseStudies: CaseStudy[];
  featuredClient: Client | null;
  initialSector?: string;
}

export function CasClientsContent({ clients, caseStudies, featuredClient, initialSector }: CasClientsContentProps) {
  const [selectedSector, setSelectedSector] = useState(initialSector || "all");

  // Filter clients by company type
  const filteredClients = selectedSector === "all"
    ? clients
    : clients.filter((c) => c.companyType === selectedSector);

  // Count case studies per client
  function caseCountForClient(clientSlug: string): number {
    return caseStudies.filter((cs) => cs.clientSlug === clientSlug).length;
  }

  return (
    <main className="min-h-screen bg-white font-[var(--font-body)]">

      {/* HERO SECTION */}
      <section className="relative pt-[120px] pb-[80px] md:pt-[140px] md:pb-[100px] px-6 md:px-12 overflow-hidden grain-overlay dark-section" style={{ background: "var(--bg-dark)" }}>
        <div className="absolute inset-0 pointer-events-none z-0">
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

        <div className="max-w-[82.5rem] mx-auto relative z-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-[10px] font-light tracking-[0.12em] text-white/60">
                  +70 entreprises accompagnées
                </span>
              </div>

              <h1 className="font-[var(--font-body)] font-[900] text-[36px] md:text-[52px] lg:text-[64px] leading-[1.05] tracking-tight text-white mb-6">
                Nos cas <span className="text-white/40">clients</span>
              </h1>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                Découvrez comment nous avons accompagné des PME et ETI B2B dans leur transformation marketing et commerciale. Des résultats concrets, mesurables et durables.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Franchise", href: "/cas-clients/secteur/franchise" },
                  { label: "SaaS B2B", href: "/cas-clients/secteur/saas-b2b" },
                  { label: "Services B2B", href: "/cas-clients/secteur/services-b2b" },
                  { label: "Industrie B2B", href: "/cas-clients/secteur/industrie-b2b" },
                  { label: "Business Local", href: "/cas-clients/secteur/business-local" },
                ].map((sector) => (
                  <Link
                    key={sector.label}
                    href={sector.href}
                    className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-[11px] font-medium text-white/80 hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                  >
                    {sector.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED CLIENT */}
      {featuredClient && (
        <section className="py-12 px-6 md:px-12 bg-card border-b border-black/[0.06]">
          <div className="max-w-[82.5rem] mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <span className="text-[10px] tracking-[0.12em] text-muted font-light block mb-4 uppercase">
                Client mis en avant
              </span>

              <Link
                href={featuredClient.url || `/cas-clients/${featuredClient.slug}`}
                className="block bg-white overflow-hidden border border-black/[0.06] hover:shadow-xl transition-all duration-500 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative min-h-[300px] lg:min-h-[400px] overflow-hidden">
                    {resolveImageUrl(featuredClient.mainImage, 1200) && (
                    <Image
                      src={resolveImageUrl(featuredClient.mainImage, 1200)}
                      alt={`${featuredClient.name}, cas client ${featuredClient.sector}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between z-10">
                      <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] font-bold tracking-widest text-white">
                          <Star size={12} className="fill-[var(--color-accent)] text-accent" />
                          {featuredClient.companyType} &bull; {featuredClient.sector}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        {featuredClient.logo && (
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden shrink-0">
                            <Image
                              src={resolveImageUrl(featuredClient.logo)}
                              alt=""
                              width={36}
                              height={36}
                              className="w-9 h-9 object-contain"
                            />
                          </div>
                        )}
                        <span className="font-[var(--font-body)] font-black text-3xl lg:text-4xl text-white">
                          {featuredClient.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <h2 className="font-[var(--font-body)] font-black text-2xl lg:text-3xl tracking-tight text-primary mb-4 group-hover:text-secondary transition-colors">
                        {featuredClient.name}
                      </h2>
                      <p className="text-secondary text-base leading-relaxed mb-6">
                        {featuredClient.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex gap-4 mb-6">
                        <div className="bg-card border border-black/[0.06] px-5 py-4">
                          <span className="text-2xl font-black text-primary block">
                            {caseCountForClient(featuredClient.slug)}
                          </span>
                          <span className="text-[10px] font-medium text-muted">
                            {caseCountForClient(featuredClient.slug) > 1 ? "cas détaillés" : "cas détaillé"}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-primary group-hover:gap-3 transition-all">
                        Découvrir {featuredClient.name} <ArrowUpRightIcon size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* FILTER & GRID SECTION */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[82.5rem] mx-auto">

          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <span className="text-[10px] tracking-[0.12em] text-muted font-light block mb-2 uppercase">
                  Tous nos clients
                </span>
                <h2 className="font-[var(--font-body)] font-black text-3xl md:text-4xl tracking-tight text-primary">
                  Des résultats <span className="text-[var(--color-grey-mid)]">mesurables</span>
                </h2>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted">
                <Filter size={16} />
                <span>{filteredClients.length} client{filteredClients.length > 1 ? "s" : ""}</span>
              </div>
            </div>

            {/* Filters - buttons for UX + hidden links for SEO */}
            <div className="flex flex-wrap gap-2">
              {companyTypes.map((sector) => {
                const isActive = selectedSector === sector.id;
                const IconComponent = sector.icon;
                const typeSlug = companyTypeSlugMap[sector.id];
                const href = sector.id === "all"
                  ? "/cas-clients"
                  : `/cas-clients/secteur/${typeSlug}`;
                return (
                  <Link
                    key={sector.id}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSector(sector.id);
                    }}
                    className={`
                      inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-300
                      ${isActive
                        ? "bg-[var(--text-primary)] text-white shadow-lg"
                        : "bg-card text-secondary hover:bg-grey"
                      }
                    `}
                  >
                    {IconComponent && <IconComponent size={14} />}
                    {sector.label}
                    {isActive && selectedSector !== "all" && (
                      <X size={14} className="ml-1 opacity-60" />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Clients Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredClients.map((client, idx) => {
                const SectorIcon = sectorIconMap[client.sectorIcon] || Building2;
                const casCount = caseCountForClient(client.slug);

                return (
                  <motion.div
                    key={client.slug}
                    layout
                    variants={cardVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Link
                      href={client.url || `/cas-clients/${client.slug}`}
                      className="block bg-white border border-black/[0.06] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
                    >
                      {/* Client image */}
                      <div className="relative h-[200px] overflow-hidden">
                        {resolveImageUrl(client.mainImage, 800) && (
                        <Image
                          src={resolveImageUrl(client.mainImage, 800)}
                          alt={`Cas client ${client.name}, ${client.sector}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        {client.logo && (
                          <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                            <Image
                              src={resolveImageUrl(client.logo)}
                              alt=""
                              width={32}
                              height={32}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6 pb-0">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-card flex items-center justify-center">
                              <SectorIcon size={16} className="text-primary" />
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-muted">
                              {client.companyType} &bull; {client.sector}
                            </span>
                          </div>
                          {client.featured && (
                            <Star size={14} className="fill-[var(--color-accent)] text-accent" />
                          )}
                        </div>

                        <h3 className="font-[var(--font-body)] font-black text-lg tracking-tight text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-1">
                          {client.name}
                        </h3>

                        <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-2 min-h-[44px]">
                          {client.description}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="px-6 py-4 bg-card border-t border-black/[0.06]">
                        <div className="text-center">
                          <span className="text-lg font-black text-primary block leading-tight">
                            {casCount}
                          </span>
                          <span className="text-[9px] font-medium text-muted leading-tight block">
                            {casCount > 1 ? "cas clients" : "cas client"}
                          </span>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="px-6 py-4 flex items-center justify-between border-t border-black/[0.06]">
                        {client.location && (
                          <span className="text-[10px] font-medium text-muted">
                            {client.location}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider text-primary group-hover:gap-2 transition-all">
                          Voir <ChevronRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredClients.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-card flex items-center justify-center mx-auto mb-4">
                <Filter size={24} className="text-muted" />
              </div>
              <h3 className="font-[var(--font-body)] font-black text-xl text-primary mb-2">
                Aucun client
              </h3>
              <p className="text-secondary mb-4">
                Aucun client ne correspond à ce filtre.
              </p>
              <button
                onClick={() => setSelectedSector("all")}
                className="text-sm font-bold text-primary underline"
              >
                Voir tous les clients
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-card">
        <div className="max-w-[82.5rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 text-center relative overflow-hidden grain-overlay dark-section"
            style={{ background: "var(--bg-dark)" }}
          >
            <div className="absolute inset-0 pointer-events-none z-0">
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
            </div>

            <div className="relative z-10">
              <h2 className="font-[var(--font-body)] font-[900] text-[32px] md:text-[48px] leading-[1.1] tracking-tight mb-6 text-white">
                Écrivons ensemble <br />
                <span className="text-white/50">votre success story</span>
              </h2>

              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-[var(--font-body)]">
                Chaque entreprise mérite une stratégie sur-mesure. Discutons de vos enjeux et définissons ensemble le chemin vers vos objectifs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-primary group">
                  Démarrer un projet <ArrowUpRightIcon size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  Découvrir nos services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
