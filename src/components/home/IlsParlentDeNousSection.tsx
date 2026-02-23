"use client";

import { motion } from "framer-motion";
import { Quote, Mic2, GraduationCap, Award, Network } from "lucide-react";
import { homeContent, type IlsParlentDeNousContent } from "@/content/home";

const TYPE_ICONS: Record<string, typeof Mic2> = {
  Conférence: Mic2,
  Enseignement: GraduationCap,
  Distinction: Award,
  Écosystème: Network,
};

interface IlsParlentDeNousSectionProps {
  content?: IlsParlentDeNousContent;
}

export function IlsParlentDeNousSection({
  content,
}: IlsParlentDeNousSectionProps = {}) {
  const data = content ?? homeContent.ilsParlentDeNous;

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 grain-overlay">
      {/* Background — full-bleed */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-none bg-[#f8f8f6]"
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
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 60%)",
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
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          {/* Overline */}
          <div className="flex items-center justify-center gap-2.5 mb-3 sm:mb-5">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4FD00] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4FD00]" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              {data.surtitre}
            </span>
          </div>

          <h2 className="font-heading font-medium text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.08] tracking-[-0.02em] text-primary">
            {data.h2.split(data.h2Highlight)[0]}
            <span className="text-[#D4FD00] drop-shadow-[0_0_20px_rgba(212,253,0,0.3)]">
              {data.h2Highlight}
            </span>
            {data.h2.split(data.h2Highlight)[1]}
          </h2>
        </motion.div>

        {/* Mentions grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {data.mentions.map((mention, index) => {
            const Icon = TYPE_ICONS[mention.type] || Quote;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative bg-white border border-black/[0.06] rounded-xl p-5 sm:p-6 hover:border-[#D4FD00]/30 hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#0c0c0a] flex items-center justify-center mb-4 group-hover:bg-[#D4FD00] transition-colors duration-300">
                  <Icon
                    size={18}
                    className="text-[#D4FD00] group-hover:text-[#0c0c0a] transition-colors duration-300"
                  />
                </div>

                {/* Type badge */}
                <span className="inline-block text-[10px] sm:text-[11px] font-medium tracking-[0.08em] text-[#D4FD00] uppercase bg-[#D4FD00]/10 px-2 py-0.5 rounded mb-3">
                  {mention.type}
                </span>

                {/* Source name */}
                <h3 className="font-heading font-semibold text-[16px] sm:text-[17px] text-primary mb-2 leading-tight">
                  {mention.source}
                </h3>

                {/* Description */}
                <p className="text-muted text-[13px] sm:text-[14px] leading-relaxed">
                  {mention.description}
                </p>

                {/* Decorative quote */}
                <div className="absolute top-4 right-4 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                  <Quote size={40} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IlsParlentDeNousSection;
