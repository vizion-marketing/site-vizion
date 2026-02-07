"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Filter,
  X,
  Star,
  TrendingUp,
  Building2,
} from "lucide-react";
import { CaseStudy } from "contentlayer/generated";
import { ImagePlaceholder } from "@/components/ui";
import { ArrowUpRightIcon } from "@/components/icons";
import { fadeInUp, staggerContainer, cardVariant } from "@/lib/animations";
import { sectors, sectorIconMap } from "@/lib/sectorIcons";

interface CasClientsContentProps {
  caseStudies: CaseStudy[];
  featuredCase: CaseStudy | null;
}

export function CasClientsContent({ caseStudies, featuredCase }: CasClientsContentProps) {
  const [selectedSector, setSelectedSector] = useState("all");
  
  // Filter case studies
  const filteredCaseStudies = selectedSector === "all" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.sector === selectedSector);

  return (
    <main className="min-h-screen bg-white font-[var(--font-body)]">
      
      {/* HERO SECTION */}
      <section className="relative pt-[120px] pb-[80px] md:pt-[140px] md:pb-[100px] px-6 md:px-12 bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] overflow-hidden">
        {/* Pattern texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />
        
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            {/* Left content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#D4FD00] opacity-75"></span>
                  <span className="relative inline-flex rounded-none h-2 w-2 bg-[#D4FD00]"></span>
                </span>
                <span className="text-[10px] font-light tracking-[0.12em] text-white/60">
                  +70 entreprises accompagnées
                </span>
              </div>
              
              <h1 className="font-[var(--font-body)] font-[900] text-[36px] md:text-[52px] lg:text-[64px] leading-[1.05] tracking-tight text-white mb-6">
                NOS CAS <span className="text-white/40">CLIENTS</span>
              </h1>
              
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                Découvrez comment nous avons accompagné des PME et ETI B2B dans leur transformation marketing et commerciale. Des résultats concrets, mesurables et durables.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Franchise", "SaaS B2B", "Services B2B", "Industrie B2B", "Business Local"].map((sector) => (
                  <span 
                    key={sector}
                    className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-none text-[11px] font-medium text-white/80"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right - Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "+70", label: "Clients accompagnés" },
                  { value: "5", label: "Secteurs d'expertise" },
                  { value: "92%", label: "Objectifs atteints" },
                  { value: "x3", label: "ROI moyen" },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-none p-5 border border-white/20 text-center"
                  >
                    <span className="text-3xl md:text-4xl font-black text-white block mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-medium text-white/60 tracking-wider">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE (if exists) */}
      {featuredCase && (
        <section className="py-12 px-6 md:px-12 bg-[#F2F2F2] border-b border-neutral-200">
          <div className="max-w-[82.5rem] mx-auto">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <span className="font-mono text-[10px] tracking-[0.4em] text-neutral-400 font-bold block mb-4">
                Cas client mis en avant
              </span>
              
              <Link 
                href={featuredCase.url}
                className="block bg-white rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image placeholder */}
                  <div className="relative min-h-[300px] lg:min-h-[400px] overflow-hidden">
                    <ImagePlaceholder
                      width={700}
                      height={400}
                      label={`Visuel cas client ${featuredCase.company}`}
                      rounded="none"
                      variant="dark"
                      className="w-full h-full absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between z-10">
                      <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-none border border-white/20 text-[10px] font-bold tracking-widest text-white">
                          <Star size={12} className="fill-[#D4FD00] text-[#D4FD00]" />
                          {featuredCase.sector}
                        </span>
                      </div>
                      <div>
                        <span className="font-[var(--font-body)] font-black text-4xl lg:text-5xl text-white">
                          {featuredCase.company}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <h2 className="font-[var(--font-body)] font-black text-2xl lg:text-3xl tracking-tight text-black mb-4 group-hover:text-neutral-600 transition-colors">
                        {featuredCase.title}
                      </h2>
                      <p className="text-neutral-600 text-base leading-relaxed mb-6">
                        {featuredCase.executiveSummary}
                      </p>
                    </div>
                    
                    <div>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {featuredCase.metrics.slice(0, 4).map((metric: { value: string; label: string }, idx: number) => (
                          <div key={idx} className="text-center">
                            <span className="text-2xl font-black text-black block">{metric.value}</span>
                            <span className="text-[10px] font-medium text-neutral-500">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                      
                      <span className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-black group-hover:gap-3 transition-all">
                        Découvrir ce cas <ArrowUpRightIcon size={16} />
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
                <span className="font-mono text-[10px] tracking-[0.4em] text-neutral-400 font-bold block mb-2">
                  Toutes nos études de cas
                </span>
                <h2 className="font-[var(--font-body)] font-black text-3xl md:text-4xl tracking-tight text-black">
                  Des résultats <span className="text-[#B7B7B7]">mesurables</span>
                </h2>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <Filter size={16} />
                <span>{filteredCaseStudies.length} cas client{filteredCaseStudies.length > 1 ? 's' : ''}</span>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {sectors.map((sector) => {
                const isActive = selectedSector === sector.id;
                const IconComponent = sector.icon;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setSelectedSector(sector.id)}
                    className={`
                      inline-flex items-center gap-2 px-4 py-2.5 rounded-none text-sm font-medium transition-all duration-300
                      ${isActive 
                        ? 'bg-black text-white shadow-lg' 
                        : 'bg-[#F2F2F2] text-neutral-600 hover:bg-neutral-200'
                      }
                    `}
                  >
                    {IconComponent && <IconComponent size={14} />}
                    {sector.label}
                    {isActive && selectedSector !== "all" && (
                      <X size={14} className="ml-1 opacity-60" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredCaseStudies.map((caseStudy, idx) => {
                const SectorIcon = sectorIconMap[caseStudy.sectorIcon] || Building2;
                return (
                  <motion.div
                    key={caseStudy.slug}
                    layout
                    variants={cardVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Link
                      href={caseStudy.url}
                      className="block bg-white border border-neutral-100 rounded-none overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
                    >
                      {/* Card Image */}
                      <div className="relative">
                        <ImagePlaceholder
                          width={400}
                          height={200}
                          label={`Visuel ${caseStudy.company}`}
                          rounded="none"
                          className="w-full"
                        />
                      </div>

                      {/* Card Header */}
                      <div className="p-6 pb-0">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#F2F2F2] rounded-lg flex items-center justify-center">
                              <SectorIcon size={16} className="text-black" />
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-neutral-400">
                              {caseStudy.sector}
                            </span>
                          </div>
                          {caseStudy.featured && (
                            <Star size={14} className="fill-[#D4FD00] text-[#D4FD00]" />
                          )}
                        </div>
                        
                        <span className="text-xs font-bold text-neutral-400 tracking-wider block mb-2">
                          {caseStudy.company}
                        </span>
                        
                        <h3 className="font-[var(--font-body)] font-black text-lg tracking-tight text-black mb-3 group-hover:text-neutral-600 transition-colors line-clamp-2 min-h-[56px]">
                          {caseStudy.title}
                        </h3>
                        
                        <p className="text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-2 min-h-[44px]">
                          {caseStudy.description}
                        </p>
                      </div>
                      
                      {/* Metrics */}
                      <div className="px-6 py-4 bg-[#F9F9F9] border-t border-neutral-100">
                        <div className="grid grid-cols-3 gap-3">
                          {caseStudy.metrics.slice(0, 3).map((metric: { value: string; label: string }, mIdx: number) => (
                            <div key={mIdx} className="text-center">
                              <span className="text-lg font-black text-black block leading-tight">
                                {metric.value}
                              </span>
                              <span className="text-[9px] font-medium text-neutral-400 leading-tight block">
                                {metric.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="px-6 py-4 flex items-center justify-between border-t border-neutral-100">
                        <span className="text-[10px] font-medium text-neutral-400">
                          {caseStudy.projectDuration} • {caseStudy.projectYear}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider text-black group-hover:gap-2 transition-all">
                          Lire <ChevronRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredCaseStudies.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-[#F2F2F2] rounded-none flex items-center justify-center mx-auto mb-4">
                <Filter size={24} className="text-neutral-400" />
              </div>
              <h3 className="font-[var(--font-body)] font-black text-xl text-black mb-2">
                Aucun cas client
              </h3>
              <p className="text-neutral-500 mb-4">
                Aucun cas client ne correspond à ce filtre.
              </p>
              <button
                onClick={() => setSelectedSector("all")}
                className="text-sm font-bold text-black underline"
              >
                Voir tous les cas clients
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#F2F2F2]">
        <div className="max-w-[82.5rem] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] rounded-none p-8 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />
            
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
