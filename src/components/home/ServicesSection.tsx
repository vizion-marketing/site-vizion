"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, PenTool, TrendingUp, Presentation, Cog, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { ArrowUpRightIcon } from "@/components/icons";

const { surtitre: piliersSurtitre, h2: piliersH2, description: piliersDescription } = homeContent.piliers;

const SERVICES = [
  {
    id: 1,
    title: "Product Marketing",
    subtitle: "Positionnement & Message",
    description: "Définissez un positionnement clair et une proposition de valeur qui résonne avec vos clients.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    tags: ["Positionnement", "Messaging", "Go-to-Market"],
    stat: "+45%",
    statLabel: "conversion",
    span: "featured" as const,
    benefits: [
      "Architecture de message différenciante",
      "Positionnement concurrentiel clair",
      "Stratégie go-to-market structurée",
    ],
    href: "/services/product-marketing",
  },
  {
    id: 2,
    title: "Content Marketing",
    subtitle: "Contenu & Acquisition",
    description: "Créez du contenu qui attire, éduque et convertit vos prospects en clients.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
    tags: ["SEO", "Lead Magnets", "Blog"],
    stat: "3x",
    statLabel: "trafic",
    span: "normal" as const,
    href: "/services/content-marketing",
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
    href: "/services/growth-marketing",
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
    href: "/services/sales-enablement",
  },
  {
    id: 5,
    title: "Automatisation",
    subtitle: "CRM & Workflows",
    description: "Automatisez vos processus marketing et commerciaux pour scaler sans friction.",
    icon: Cog,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    tags: ["HubSpot", "Zapier", "Intégrations"],
    stat: "10h",
    statLabel: "gagnées/sem",
    span: "wide" as const,
    href: "/services/automatisation",
  },
];

type Service = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Target;
  image?: string;
  tags: string[];
  stat: string;
  statLabel: string;
  span: "featured" | "normal" | "wide";
  benefits?: string[];
  href: string;
};

interface ServiceCardProps {
  service: Service;
  index: number;
  total: number;
}

function FeaturedCard({ service, index, total }: ServiceCardProps) {
  const Icon = service.icon;
  const cardNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      className="col-span-1 md:col-span-2 md:row-span-2 relative overflow-hidden group"
    >
      <div className="relative h-full min-h-[480px] md:min-h-[500px] lg:min-h-[520px] bg-[#D4FD00] flex flex-col">
        {/* Top Content - sur fond lime */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-10 pb-0">
          {/* Header: Icon + Number */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#1a1a1a] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <Icon size={28} className="text-[#D4FD00]" />
            </div>
            <span className="text-[#1a1a1a]/20 font-heading font-bold text-5xl lg:text-7xl">
              {cardNumber}
            </span>
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
          <p className="text-[#1a1a1a]/80 text-[14px] lg:text-[16px] leading-relaxed mb-5 max-w-lg">
            {service.description}
          </p>

          {/* Benefits list */}
          {service.benefits && (
            <ul className="space-y-2">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1a1a1a] shrink-0 mt-0.5" />
                  <span className="text-[#1a1a1a]/90 text-[13px] lg:text-[14px] leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image en bas avec contenu overlay */}
        <div className="relative flex-1 mt-6 min-h-[180px] lg:min-h-[200px]">
          {/* Image */}
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Filtre noir semi-transparent */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Contenu overlay sur l'image */}
          <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-[11px] lg:text-[12px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom: Stat + CTA */}
            <div className="flex items-end justify-between gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-white font-heading font-bold text-4xl lg:text-5xl drop-shadow-lg">
                  {service.stat}
                </span>
                <span className="text-white/80 text-base lg:text-lg">{service.statLabel}</span>
              </div>

              {/* CTA Button */}
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 h-[44px] sm:h-[48px] px-5 sm:px-6 text-[12px] sm:text-[13px] font-semibold bg-[#D4FD00] text-[#1a1a1a] hover:bg-white transition-all duration-300 group/btn"
              >
                {service.title}
                <ArrowUpRightIcon
                  className="shrink-0 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                  size={14}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#1a1a1a]/20 group-hover:border-[#1a1a1a]/40 transition-colors duration-300" />
      </div>
    </motion.div>
  );
}

function StandardCard({ service, index, total }: ServiceCardProps) {
  const Icon = service.icon;
  const isWide = service.span === "wide";
  const hasImage = !!service.image;
  const cardNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
      className={`${isWide ? "col-span-1 md:col-span-2" : "col-span-1"} group`}
    >
      <div className={`relative h-full min-h-[280px] lg:min-h-[260px] bg-white border border-black/10 overflow-hidden transition-all duration-500 hover:bg-[#D4FD00] hover:-translate-y-1 ${isWide ? "flex flex-col md:flex-row" : "flex flex-col"}`}>
        {/* Accent line bottom - animates on hover */}
        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#1a1a1a] group-hover:w-full transition-all duration-500" />

        {/* Image pour carte wide */}
        {hasImage && isWide && (
          <div className="relative w-full md:w-2/5 h-48 md:h-auto shrink-0 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 group-hover:to-[#D4FD00]/20 transition-colors duration-500" />
          </div>
        )}

        {/* Content */}
        <div className={`flex flex-col p-6 sm:p-7 lg:p-8 ${isWide && hasImage ? "flex-1" : ""}`}>
          {/* Image pour carte normale (petite, en haut) */}
          {hasImage && !isWide && (
            <div className="relative w-full h-32 -mx-6 sm:-mx-7 lg:-mx-8 -mt-6 sm:-mt-7 lg:-mt-8 mb-5 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent group-hover:from-[#D4FD00] group-hover:via-[#D4FD00]/50 transition-colors duration-500" />
            </div>
          )}

          {/* Header: Icon + Number */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#f5f5f5] group-hover:bg-[#1a1a1a] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Icon size={24} className="text-[#1a1a1a] group-hover:text-[#D4FD00] transition-colors duration-500" />
            </div>
            <span className="text-black/10 group-hover:text-[#1a1a1a]/20 font-heading font-bold text-4xl transition-colors duration-500">
              {cardNumber}
            </span>
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

          {/* Bottom: Stat + CTA */}
          <div className="flex items-end justify-between gap-4 pt-4 border-t border-black/10 group-hover:border-[#1a1a1a]/20 transition-colors duration-500">
            <div className="flex items-baseline gap-2">
              <span className="text-[#1a1a1a] font-heading font-bold text-2xl lg:text-3xl">
                {service.stat}
              </span>
              <span className="text-[#6b6b6b] group-hover:text-[#1a1a1a]/70 text-sm transition-colors duration-500">
                {service.statLabel}
              </span>
            </div>

            {/* CTA Link */}
            <Link
              href={service.href}
              className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] font-semibold text-[#1a1a1a] group-hover:text-[#1a1a1a] transition-colors duration-300 group/btn"
            >
              <span className="border-b border-transparent group-hover/btn:border-[#1a1a1a] transition-colors duration-300">
                {service.title}
              </span>
              <ArrowUpRightIcon
                className="shrink-0 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                size={14}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const featuredService = SERVICES.find(s => s.span === "featured")! as Service;
  const otherServices = SERVICES.filter(s => s.span !== "featured") as Service[];
  const total = SERVICES.length;

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
          <FeaturedCard service={featuredService} index={0} total={total} />

          {/* Other Services */}
          {otherServices.map((service, index) => (
            <StandardCard key={service.id} service={service} index={index + 1} total={total} />
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
            className="inline-flex items-center gap-2 h-[48px] sm:h-[52px] px-6 sm:px-8 text-[13px] sm:text-[14px] font-semibold bg-[#1a1a1a] text-white hover:bg-black/90 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            Voir tous nos services
            <ArrowUpRightIcon
              className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              size={16}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
