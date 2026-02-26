"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, Mic } from "lucide-react";
import Image from "next/image";

const ACTUALITES = [
  {
    icon: GraduationCap,
    tag: "Enseignement",
    title: "Intervention à la Toulouse School of Management",
    description:
      "Lucas intervient auprès des étudiants du programme Grande École de la TSM sur les enjeux du marketing et du positionnement produit.",
    span: "tall" as const,
    image: "/images/actualites/tsm.avif", // À fournir
  },
  {
    icon: Award,
    tag: "Distinction",
    title: "Top 300 LinkedIn France",
    description:
      "Lucas Gonzalez classé parmi les 300 personnalités les plus influentes sur LinkedIn France selon Favikon.",
    span: "normal" as const,
  },
  {
    icon: Globe,
    tag: "Conférence",
    title: "Sommet international du marketing",
    description:
      "Lucas intervient au sommet international du marketing pour partager la méthodologie Vizion sur le sales enablement.",
    span: "normal" as const,
    image: "/images/actualites/sommet-marketing.avif", // À fournir
  },
  {
    icon: Mic,
    tag: "Podcast",
    title: "Coffee Showbiz - Image de marque",
    description:
      "Lucas est invité sur le podcast du Coffee Showbiz pour parler image de marque et stratégie de visibilité sur LinkedIn.",
    span: "wide" as const,
    image: "/images/actualites/podcast.avif", // À fournir
  },
];

export function IlsParlentDeNousSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 grain-overlay">
      {/* Background — full-bleed */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none bg-card"
        style={{ minWidth: "100vw" }}
        aria-hidden
      />

      {/* Gradient blobs */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none pointer-events-none overflow-hidden"
        style={{ minWidth: "100vw" }}
        aria-hidden
      >
        <div
          className="absolute w-[60%] h-[50%] top-[-15%] left-[-10%]"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          {/* Overline */}
          <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              Actualités
            </span>
          </div>

          <h2 className="font-heading font-medium text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] text-primary">
            Suivez l&apos;actualité de{" "}
            <span className="text-accent drop-shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.3)]">
              Vizion
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid — 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-min">
          {ACTUALITES.map((item, index) => {
            const Icon = item.icon;
            const isTall = item.span === "tall";
            const isWide = item.span === "wide";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative overflow-hidden border border-black/[0.06] hover:border-accent/30 hover:shadow-md transition-all duration-300 ${
                  isTall
                    ? "sm:row-span-2 bg-dark dark-section"
                    : isWide
                      ? "sm:col-span-2 lg:col-span-2 bg-white light-card"
                      : "bg-white light-card"
                } ${item.image ? "flex flex-col" : ""}`}
              >
                {/* Dedicated Image Section (if exists) */}
                {item.image && (
                  <div className={`relative overflow-hidden ${
                    isTall ? "h-[200px] sm:h-[240px]" : isWide ? "h-[180px]" : "h-[160px]"
                  }`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes={isTall ? "(max-width: 640px) 100vw, 33vw" : isWide ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                    />
                  </div>
                )}

                <div
                  className={`relative z-10 flex flex-col ${
                    item.image ? "flex-1" : "h-full"
                  } ${
                    isTall ? "p-6 sm:p-8 justify-between" : "p-5 sm:p-6"
                  } ${!item.image && isTall ? "min-h-[320px] sm:min-h-0" : ""}`}
                >
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-300 ${
                      isTall
                        ? "bg-accent group-hover:bg-white"
                        : "bg-dark group-hover:bg-accent"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`transition-colors duration-300 ${
                        isTall
                          ? "text-primary group-hover:text-primary"
                          : "text-accent group-hover:text-primary"
                      }`}
                    />
                  </div>

                  {/* Tag */}
                  <span
                    className="inline-block text-[10px] sm:text-[11px] font-medium tracking-[0.08em] uppercase px-2 py-0.5 w-fit mb-3 text-accent bg-accent/10"
                  >
                    {item.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className={`font-heading font-semibold leading-tight mb-3 text-primary ${
                      isTall
                        ? "text-[20px] sm:text-[24px]"
                        : "text-[16px] sm:text-[18px]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>

                {/* Decorative gradient for tall card without image */}
                {isTall && !item.image && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 100%)",
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IlsParlentDeNousSection;
