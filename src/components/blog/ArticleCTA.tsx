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
          className="rounded-none p-12 md:p-20 relative overflow-hidden grain-overlay"
          style={{ background: "#0c0c0a" }}
        >
          {/* Base + radial gradients jaune Vizion animés */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div
              className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute w-[50%] h-[50%] bottom-[5%] right-[-15%] animate-gradient-float-4"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.05) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute w-[45%] h-[45%] top-[20%] left-[-10%] animate-gradient-float-5"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
              }}
            />
          </div>

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
