"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, PenTool, TrendingUp, Presentation, Cog, CheckCircle2 } from "lucide-react";
import { ComingSoonLink } from "@/components/ComingSoonLink";
import { homeContent } from "@/content/home";
import { ArrowUpRightIcon } from "@/components/icons";
import Image from "next/image";

interface ServicesSectionProps {
  surtitre?: string;
  h2?: string;
  description?: string;
}

const SERVICES = [
  {
    id: 1,
    title: "Audit et stratégie marketing",
    subtitle: "Diagnostic, feuille de route & direction marketing",
    description: "Votre marketing ne génère pas de résultats mesurables et vous ne savez pas pourquoi. Nous auditons votre positionnement, vos canaux et vos outils, puis nous structurons la feuille de route et pilotons sa mise en place. Direction marketing externalisée ou renfort ponctuel : nous nous adaptons à votre organisation. Pour que chaque euro investi repose sur un diagnostic solide et une exécution pilotée, pas sur des intuitions.",
    icon: Target,
    image: "/images/services/product-marketing.avif",
    tags: ["Audit marketing", "Feuille de route", "Direction externalisée", "Analyse concurrentielle"],
    span: "featured" as const,
    benefits: [
      "Diagnostic complet de votre marketing actuel",
      "Feuille de route structurée sur 6 à 12 mois",
      "Direction marketing externalisée ou renfort stratégique",
    ],
    href: "/services/product-marketing",
  },
  {
    id: 2,
    title: "Positionnement et narratif produit",
    subtitle: "Clarté & différenciation",
    description: "Votre offre est techniquement solide, mais vos prospects ne comprennent pas ce qui vous distingue. Nous construisons un positionnement clair et un narratif produit qui rendent votre valeur évidente. Pour que vos clients idéaux vous choisissent sans hésiter face à la concurrence.",
    icon: PenTool,
    tags: ["Positionnement", "Discours de marque", "Proposition de valeur", "Personas"],
    span: "normal" as const,
    href: "/services/content-marketing",
  },
  {
    id: 3,
    title: "Trafic et notoriété",
    subtitle: "Visibilité & acquisition",
    description: "Vous avez un bon produit, mais personne ne vous connaît sur votre marché. Nous déployons les canaux d'acquisition adaptés à votre cible : SEO, campagnes publicitaires, LinkedIn, contenu stratégique. Pour que les bons prospects vous trouvent avant vos concurrents.",
    icon: TrendingUp,
    tags: ["SEO", "LinkedIn Ads", "Google Ads", "Content marketing"],
    span: "normal" as const,
    href: "/services/growth-marketing",
  },
  {
    id: 4,
    title: "Automatisation et intelligence artificielle",
    subtitle: "Efficacité & productivité",
    description: "Vos équipes perdent du temps sur des tâches répétitives qui pourraient être automatisées. Nous déployons les automatisations et les outils d'IA adaptés à vos processus marketing et commerciaux. Pour que votre équipe se concentre sur ce qui génère vraiment du revenu.",
    icon: Cog,
    tags: ["CRM", "Workflows", "IA appliquée", "Intégrations"],
    span: "normal" as const,
    href: "/services/automatisation",
  },
  {
    id: 5,
    title: "Contenus d'aide à la vente",
    subtitle: "Outils commerciaux alignés",
    description: "Vos commerciaux improvisent à chaque rendez-vous et chacun raconte une histoire différente. Nous créons les présentations, fiches concurrentielles et guides d'appel alignés sur votre positionnement. Pour que chaque interaction commerciale renforce la même promesse, du premier contact à la signature.",
    icon: Presentation,
    tags: ["Présentations", "Fiches concurrence", "Guides d'appel", "Objections"],
    span: "normal" as const,
    href: "/services/sales-enablement",
  },
];

const AUTOMATION_IMAGE = "/images/services/automatisation.avif";

type Service = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Target;
  image?: string;
  tags: string[];
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
            <span className="text-primary/20 font-heading font-bold text-5xl lg:text-7xl">
              {cardNumber}
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-primary/70 text-[12px] lg:text-[14px] font-medium tracking-wide uppercase mb-2">
            {service.subtitle}
          </p>

          {/* Title */}
          <h3 className="font-heading font-medium text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-primary mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-primary/80 text-[14px] lg:text-[16px] leading-relaxed mb-5 max-w-[90%]">
            {service.description}
          </p>

          {/* Benefits list */}
          {service.benefits && (
            <ul className="space-y-2">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-primary/90 text-[13px] lg:text-[14px] leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image en bas avec contenu overlay */}
        <div className="relative flex-1 mt-6 min-h-[180px] lg:min-h-[200px]">
          {/* Image */}
          <Image
            src={service.image!}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {/* Filtre noir semi-transparent */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Contenu overlay sur l'image */}
          <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end">
            {/* Bottom row: Tags + CTA aligned */}
            <div className="flex items-end justify-between gap-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-[11px] lg:text-[12px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <ComingSoonLink
                className="inline-flex items-center gap-2 h-[44px] sm:h-[48px] px-5 sm:px-6 text-[12px] sm:text-[13px] font-semibold bg-[#D4FD00] text-primary hover:bg-white transition-all duration-300 group/btn shrink-0"
              >
                {service.title}
                <ArrowUpRightIcon
                  className="shrink-0 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                  size={14}
                />
              </ComingSoonLink>
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
  const cardNumber = String(index + 1).padStart(2, "0");
  const isWide = service.span === "wide";
  const hasImage = !!service.image;

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
            <Image
              src={service.image!}
              alt={service.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 group-hover:to-[#D4FD00]/20 transition-colors duration-500" />
          </div>
        )}

        {/* Content */}
        <div className={`flex flex-col p-6 sm:p-7 lg:p-8 ${isWide && hasImage ? "flex-1" : ""}`}>
          {/* Image pour carte normale (petite, en haut) */}
          {hasImage && !isWide && (
            <div className="relative w-full h-32 -mx-6 sm:-mx-7 lg:-mx-8 -mt-6 sm:-mt-7 lg:-mt-8 mb-5 overflow-hidden">
              <Image
                src={service.image!}
                alt={service.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent group-hover:from-[#D4FD00] group-hover:via-[#D4FD00]/50 transition-colors duration-500" />
            </div>
          )}

          {/* Icon */}
          <div className="mb-5">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#f5f5f5] group-hover:bg-[#1a1a1a] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Icon size={24} className="text-primary group-hover:text-[#D4FD00] transition-colors duration-500" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-[#D4FD00] group-hover:text-primary/70 text-[11px] lg:text-[12px] font-medium tracking-wide uppercase mb-2 transition-colors duration-500">
            {service.subtitle}
          </p>

          {/* Title */}
          <h3 className="font-heading font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.1] tracking-[-0.02em] text-primary mb-3 transition-colors duration-500">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-muted group-hover:text-primary/80 text-[13px] lg:text-[14px] leading-relaxed mb-5 transition-colors duration-500">
            {service.description}
          </p>

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-[#f5f5f5] group-hover:bg-[#1a1a1a]/10 text-primary text-[10px] lg:text-[11px] font-medium transition-colors duration-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom: Number + CTA */}
          <div className="flex items-end justify-between gap-4 pt-4 border-t border-black/10 group-hover:border-[#1a1a1a]/20 transition-colors duration-500">
            <span className="text-primary/15 font-heading font-bold text-3xl lg:text-4xl">
              {cardNumber}
            </span>

            {/* CTA Link */}
            <ComingSoonLink
              className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] font-semibold text-primary group-hover:text-primary transition-colors duration-300 group/btn"
            >
              <span className="border-b border-[#1a1a1a] group-hover/btn:border-[#1a1a1a] transition-colors duration-300">
                {service.title}
              </span>
              <ArrowUpRightIcon
                className="shrink-0 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                size={14}
              />
            </ComingSoonLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection({ surtitre, h2, description }: ServicesSectionProps = {}) {
  const piliersSurtitre = surtitre ?? homeContent.piliers.surtitre;
  const piliersH2 = h2 ?? homeContent.piliers.h2;
  const piliersDescription = description ?? homeContent.piliers.description;
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
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              {piliersSurtitre}
            </span>
          </div>

          <h2 className="font-heading font-medium text-[24px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary mb-3 sm:mb-4">
            {piliersH2}
          </h2>

          <p className="text-muted text-[13px] sm:text-[15px] leading-relaxed max-w-xl">
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

          {/* Image card — séparée de Automatisation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="col-span-1 relative overflow-hidden group"
          >
            <div className="relative h-full min-h-[280px] lg:min-h-[260px]">
              <Image
                src={AUTOMATION_IMAGE}
                alt="Automatisation et workflows"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-wide text-white/90">
                  CRM & Workflows
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <ComingSoonLink
            className="inline-flex items-center gap-2 h-[48px] sm:h-[52px] px-6 sm:px-8 text-[13px] sm:text-[14px] font-semibold bg-[#1a1a1a] text-white hover:bg-black/90 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            Voir tous nos services
            <ArrowUpRightIcon
              className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              size={16}
            />
          </ComingSoonLink>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
