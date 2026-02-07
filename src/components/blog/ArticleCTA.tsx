"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ArrowUpRightIcon } from "@/components/icons";

interface ArticleCTAProps {
  title?: string;
  description?: string;
  link?: string;
}

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
    <section className="py-24 px-6 md:px-12 bg-[#F2F2F2]">
      <div className="max-w-[82.5rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] rounded-none p-12 md:p-20 relative overflow-hidden"
        >
          {/* Pattern texture overlay - même que home */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />

          {/* Cadres décoratifs style home */}
          <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-[#D4FD00]/20 pointer-events-none z-10" />
          <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-[#D4FD00]/20 pointer-events-none z-10" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Surtitre - style design system */}
            <div className="flex items-center justify-center gap-2.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#D4FD00] shrink-0" />
              <span className="surtitre text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-white/80">
                Passez à l'action
              </span>
            </div>

            <h2 className="font-[var(--font-body)] font-[900] text-[32px] md:text-[48px] leading-[1.05] tracking-tight mb-6 text-white">
              <span className="relative inline-block">
                <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[10px] bg-[#D4FD00] -z-10" />
                {title}
              </span>
            </h2>

            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl mx-auto font-[var(--font-body)]">
              {description}
            </p>

            <Link href={link} className="btn btn-primary group">
              Contactez-nous <ArrowUpRightIcon size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Trust elements - style home */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <CheckCircle2 size={14} className="text-[#D4FD00]" />
                <span>Audit gratuit</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <CheckCircle2 size={14} className="text-[#D4FD00]" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <CheckCircle2 size={14} className="text-[#D4FD00]" />
                <span>Réponse sous 48h</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
