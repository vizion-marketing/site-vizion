"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ArticleCTAProps {
  title?: string;
  description?: string;
  link?: string;
}

// Valeurs par défaut
const DEFAULT_CTA = {
  title: "Prêt à accélérer votre croissance ?",
  description:
    "Réservez un audit gratuit avec notre équipe et découvrez comment Vizion peut vous aider à atteindre vos objectifs.",
  link: "/contact",
};

export function ArticleCTA({
  title = DEFAULT_CTA.title,
  description = DEFAULT_CTA.description,
  link = DEFAULT_CTA.link,
}: ArticleCTAProps) {
  return (
    <section className="py-24 lg:py-40 bg-gradient-to-tr from-black to-zinc-800 relative overflow-hidden">
      {/* Pattern texture overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-[11px] font-medium uppercase tracking-[1.65px] text-white/50 mb-6 block">
            Passez à l'action
          </span>

          <h2 className="text-[32px] md:text-[48px] font-black uppercase tracking-[-2px] leading-[1.05] text-white mb-6 font-['Roboto']">
            {title}
          </h2>

          <p className="text-white/60 text-lg mb-12 font-['Inter'] max-w-xl mx-auto">
            {description}
          </p>

          <Link
            href={link}
            className="inline-flex items-center gap-4 bg-white text-black font-bold uppercase text-[12px] tracking-widest px-8 py-4 hover:bg-zinc-200 transition-all"
          >
            Contactez-nous
            <ChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
