"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, PenTool, TrendingUp, Presentation, Cog, ArrowRight } from "lucide-react";
import Link from "next/link";
import { homeContent } from "@/content/home";

const { surtitre: piliersSurtitre, h2: piliersH2, description: piliersDescription } = homeContent.piliers;

const SERVICES = [
  {
    id: 1,
    title: "Product Marketing",
    subtitle: "Positionnement & Message",
    description: "Définissez un positionnement clair et une proposition de valeur qui résonne avec vos clients. Nous construisons l'architecture de message qui transforme votre offre en référence sur son marché.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    tags: ["Positionnement", "Messaging", "Go-to-Market"],
    stat: "+45%",
    statLabel: "conversion",
    span: "featured" as const,
  },
  {
    id: 2,
    title: "Content Marketing",
    subtitle: "Contenu & Acquisition",
    description: "Créez du contenu qui attire, éduque et convertit vos prospects en clients.",
    icon: PenTool,
    tags: ["SEO", "Lead Magnets", "Blog"],
    stat: "3x",
    statLabel: "trafic",
    span: "normal" as const,
  },
  {
    id: 3,
    title: "Growth Marketing",
    subtitle: "Acquisition & Croissance",
    description: "Accélérez votre croissance avec des campagnes d'acquisition ciblées et mesurables.",
    icon: TrendingUp,
    tags: ["Paid Ads", "Email", "Automation"],
    stat: "-40%",
    statLabel: "CAC",
    span: "normal" as const,
  },
  {
    id: 4,
    title: "Sales Enablement",
    subtitle: "Outils & Performance",
    description: "Équipez vos commerciaux avec les outils et contenus qui accélèrent le closing.",
    icon: Presentation,
    tags: ["Pitch Decks", "Battle Cards", "Objections"],
    stat: "+60%",
    statLabel: "win rate",
    span: "normal" as const,
  },
  {
    id: 5,
    title: "Automatisation",
    subtitle: "CRM & Workflows",
    description: "Automatisez vos processus marketing et commerciaux pour scaler sans friction.",
    icon: Cog,
    tags: ["HubSpot", "Zapier", "Intégrations"],
    stat: "10h",
    statLabel: "gagnées/sem",
    span: "wide" as const,
  },
];

interface ServiceCardProps {
  service: typeof SERVICES[0];
  index: number;
}

function FeaturedCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      className="col-span-1 md:col-span-2 md:row-span-2 relative overflow-hidden group"
    >
      <div className="relative h-full min-h-[400px] md:min-h-[500px] lg:min-h-[580px] bg-[#D4FD00] p-6 sm:p-8 lg:p-10 flex flex-col">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#D4FD00] via-[#D4FD00]/80 to-[#D4FD00]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#1a1a1a] flex items-center justify-center mb-6">
            <Icon size={28} className="text-[#D4FD00]" />
          </div>

          {/* Subtitle */}
          <p className="text-[#1a1a1a]/70 text-[12px] lg:text-[14px] font-medium tracking-wide uppercase mb-2">
            {service.subtitle}
          </p>

          {/* Title */}
          <h3 className="font-heading font-medium text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-[#1a1a1a]/80 text-[14px] lg:text-[16px] leading-relaxed mb-6 max-w-md">
            {service.description}
          </p>

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-[#1a1a1a]/10 text-[#1a1a1a] text-[11px] lg:text-[12px] font-medium backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stat badge */}
          <div className="flex items-baseline gap-2">
            <span className="text-[#1a1a1a] font-heading font-bold text-4xl lg:text-5xl">
              {service.stat}
            </span>
            <span className="text-[#1a1a1a]/70 text-base lg:text-lg">{service.statLabel}</span>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#1a1a1a]/20" />
      </div>
    </motion.div>
  );
}

function StandardCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  const isWide = service.span === "wide";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      className={`${isWide ? "col-span-1 md:col-span-2" : "col-span-1"} group`}
    >
      <div className="h-full min-h-[280px] bg-white border border-black/[0.06] p-6 sm:p-7 lg:p-8 flex flex-col transition-all duration-500 hover:bg-[#D4FD00] hover:-translate-y-1 hover:shadow-lg">
        {/* Icon */}
        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#f5f5f5] group-hover:bg-[#1a1a1a] flex items-center justify-center mb-5 transition-colors duration-500">
          <Icon size={24} className="text-[#1a1a1a] group-hover:text-[#D4FD00] transition-colors duration-500" />
        </div>

        {/* Subtitle */}
        <p className="text-[#D4FD00] group-hover:text-[#1a1a1a]/70 text-[11px] lg:text-[12px] font-medium tracking-wide uppercase mb-2 transition-colors duration-500">
          {service.subtitle}
        </p>

        {/* Title */}
        <h3 className="font-heading font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-3 transition-colors duration-500">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[#6b6b6b] group-hover:text-[#1a1a1a]/80 text-[13px] lg:text-[14px] leading-relaxed mb-5 transition-colors duration-500">
          {service.description}
        </p>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-[#f5f5f5] group-hover:bg-[#1a1a1a]/10 text-[#1a1a1a] text-[10px] lg:text-[11px] font-medium transition-colors duration-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stat */}
        <div className="flex items-baseline gap-2 pt-4 border-t border-black/[0.06] group-hover:border-[#1a1a1a]/20 transition-colors duration-500">
          <span className="text-[#1a1a1a] font-heading font-bold text-2xl lg:text-3xl">
            {service.stat}
          </span>
          <span className="text-[#6b6b6b] group-hover:text-[#1a1a1a]/70 text-sm transition-colors duration-500">
            {service.statLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const featuredService = SERVICES.find(s => s.span === "featured")!;
  const otherServices = SERVICES.filter(s => s.span !== "featured");

  return (
    <section id="services" className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
            <div className="w-2 h-2 bg-[#D4FD00]" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b] uppercase">
              {piliersSurtitre}
            </span>
          </div>

          <h2 className="font-heading font-medium text-[24px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] mb-3 sm:mb-4">
            {piliersH2}
          </h2>

          <p className="text-[#6b6b6b] text-[13px] sm:text-[15px] leading-relaxed max-w-xl">
            {piliersDescription}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {/* Featured Card - Product Marketing */}
          <FeaturedCard service={featuredService} index={0} />

          {/* Other Services */}
          {otherServices.map((service, index) => (
            <StandardCard key={service.id} service={service} index={index + 1} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 h-[48px] sm:h-[52px] px-6 sm:px-8 text-[13px] sm:text-[14px] font-semibold bg-[#1a1a1a] text-white hover:bg-black/90 hover:-translate-y-0.5 transition-all duration-300"
          >
            Voir tous nos services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
