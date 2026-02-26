"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { homeContent, type LocalSEOContent } from "@/content/home";

interface LocalSEOSectionProps {
  content?: LocalSEOContent;
}

export function LocalSEOSection({ content }: LocalSEOSectionProps = {}) {
  const data = content ?? homeContent.localSEO;

  return (
    <section className="dark-section relative w-full py-16 sm:py-20 md:py-24 lg:py-32 grain-overlay">
      {/* Background — full-bleed, même que le hero */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none"
        style={{ minWidth: "100vw", background: "var(--bg-dark)" }}
        aria-hidden
      />

      {/* Gradient blobs — même palette que le hero */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none pointer-events-none overflow-hidden"
        style={{ minWidth: "100vw" }}
        aria-hidden
      >
        <div
          className="absolute w-[80%] h-[60%] top-[-10%] left-[-20%] animate-gradient-float-1"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute w-[60%] h-[50%] bottom-[-15%] right-[-15%] animate-gradient-float-3"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)",
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
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/80 uppercase">
              {data.surtitre}
            </span>
          </div>

          <h2 className="font-heading font-medium text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] text-white mb-4 sm:mb-5">
            {data.h2.split(data.h2Highlight)[0]}
            <span className="text-accent">{data.h2Highlight}</span>
            {data.h2.split(data.h2Highlight)[1]}
          </h2>

          <p className="text-white/90 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
            {data.description}
          </p>
        </motion.div>

        {/* Main grid: text + map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Left: Copy + Preuve locale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-5 sm:space-y-6 mb-8">
              {data.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-white/90 text-[14px] sm:text-[15px] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA */}
            <a
              href={data.cta.href}
              className="group inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-accent hover:text-white transition-colors duration-300"
            >
              {data.cta.text}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </motion.div>

          {/* Right: Map embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden border border-white/[0.12] aspect-[4/3] sm:aspect-[16/10] relative">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&q=Labège+Toulouse+France&zoom=12`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Vizion - Agence marketing Toulouse, Occitanie"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-dark/90 backdrop-blur-sm border border-white/15 rounded-lg px-3 py-2">
              <MapPin size={14} className="text-accent" />
              <span className="text-[11px] sm:text-[12px] text-white font-medium">
                Labège, Toulouse
              </span>
            </div>
          </motion.div>
        </div>

        {/* Cities grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/70 uppercase">
              Zones d&apos;intervention
            </span>
            <div className="flex-1 h-px bg-white/[0.10]" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {data.villes.map((ville, index) => (
              <motion.div
                key={ville.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className={`group relative flex flex-col items-center gap-1.5 py-3 sm:py-4 px-3 rounded-xl border transition-all duration-300 ${
                  ville.label === "Siège"
                    ? "bg-accent/10 border-accent/30 hover:border-accent/50"
                    : "bg-white/[0.04] border-white/[0.10] hover:bg-white/[0.08] hover:border-white/[0.20]"
                }`}
              >
                <MapPin
                  size={14}
                  className={
                    ville.label === "Siège"
                      ? "text-accent"
                      : "text-white/60 group-hover:text-white transition-colors"
                  }
                />
                <span
                  className={`text-[13px] sm:text-[14px] font-medium ${
                    ville.label === "Siège" ? "text-accent" : "text-white"
                  }`}
                >
                  {ville.name}
                </span>
                <span className="text-[10px] text-white/60">{ville.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LocalSEOSection;
