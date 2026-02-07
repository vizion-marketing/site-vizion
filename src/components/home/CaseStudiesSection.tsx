"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const CASE_STUDIES = [
  {
    id: "easyvirtual",
    logo: "easyVirtual.tours",
    category: "Direction Marketing Externalisee",
    metric: "25",
    metricLabel: "franchises deployees",
    title: "De 0 a 25 franchises en 1 an",
    description:
      "Positionnement, messaging, tunnel complet de recrutement franchises. Campagnes Meta et LinkedIn. Sales enablement pour les candidats.",
    slug: "easyvirtual-tours-franchise",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800",
  },
  {
    id: "ensenat",
    logo: "Ensenat Coaching",
    category: "SEO & Content Marketing",
    metric: "+1000%",
    metricLabel: "Trafic SEO en 3 mois",
    title: "Visibilite decuplee en 90 jours",
    description:
      "Strategie de contenu SEO, restructuration du site, optimisation technique. De l'invisibilite a la premiere page Google.",
    slug: "ensenat-coaching",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
  },
  {
    id: "olivier-bas",
    logo: "Olivier Bas",
    category: "Personal Branding LinkedIn",
    metric: "1M",
    metricLabel: "Vues LinkedIn",
    title: "Leader d'opinion sur LinkedIn",
    description:
      "Strategie editoriale, ghostwriting, optimisation de profil. Construction d'une audience qualifiee de decideurs B2B.",
    slug: "olivier-bas-linkedin",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=800",
  },
];

export function CaseStudiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      style={{ background: "#F2F2F2" }}
    >
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-4 sm:mb-5"
            >
              <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b]">
                Cas clients & resultats
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]"
            >
              Ce qu&apos;on a fait. Ce que ca a donne.
            </motion.h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white border border-black/10 text-[#1a1a1a] hover:bg-black hover:text-white transition-colors"
              aria-label="Cas precedent"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white border border-black/10 text-[#1a1a1a] hover:bg-black hover:text-white transition-colors"
              aria-label="Cas suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {CASE_STUDIES.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_85%] lg:flex-[0_0_70%] pr-4 sm:pr-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-black/[0.06] overflow-hidden h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.logo}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Metric overlay */}
                    <div className="absolute bottom-4 right-4 bg-[#D4FD00] p-3 sm:p-4">
                      <span className="font-[var(--font-body)] font-[900] text-2xl sm:text-3xl tracking-[-0.03em] text-[#1a1a1a] leading-none block">
                        {caseStudy.metric}
                      </span>
                      <span className="text-[9px] font-semibold tracking-wider text-[#1a1a1a]/70 uppercase">
                        {caseStudy.metricLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    {/* Category badge */}
                    <span className="inline-block px-2.5 py-1 bg-black/5 text-[10px] font-bold tracking-wide text-[#6b6b6b] mb-4">
                      {caseStudy.category}
                    </span>

                    {/* Logo/Name */}
                    <h3 className="font-heading font-medium text-lg sm:text-xl text-[#1a1a1a] mb-2">
                      {caseStudy.logo}
                    </h3>

                    {/* Title */}
                    <p className="text-base sm:text-lg text-[#6b6b6b] font-[var(--font-body)] mb-4">
                      {caseStudy.title}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#6b6b6b] font-[var(--font-body)] leading-relaxed mb-6">
                      {caseStudy.description}
                    </p>

                    {/* CTA */}
                    <Link
                      href={`/cas-clients/${caseStudy.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-[var(--font-body)] font-semibold text-[#1a1a1a] hover:text-[#D4FD00] transition-colors group"
                    >
                      Lire le cas complet
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {CASE_STUDIES.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`
                w-2 h-2 transition-all duration-300
                ${index === selectedIndex ? "bg-[#D4FD00] w-6" : "bg-black/20 hover:bg-black/40"}
              `}
              aria-label={`Aller au cas ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
