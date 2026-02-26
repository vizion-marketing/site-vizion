"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ChevronRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const AUTHOR_CONFIG = {
  name: "Lucas Gonzalez",
  role: "Co-fondateur de Vizion",
  bio: "Ex-Top 300 LinkedIn France, Intervenant TSM et Co-fondateur de Vizion, passionné de marketing depuis plus de 10 ans.",
  avatar: "/images/portrait-lucas.png",
  linkedin: SOCIAL_LINKS.linkedin.lucas,
};

export function AuthorBio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-grey p-6 sm:p-8 rounded-none"
    >
      <div className="flex items-center gap-2.5 mb-6">
        <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
        <h4 className="surtitre text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-black/50">
          À propos de l&apos;auteur
        </h4>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm bg-zinc-200">
          <Image
            src={AUTHOR_CONFIG.avatar}
            alt={AUTHOR_CONFIG.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-black text-sm leading-tight font-[var(--font-body)]">
            {AUTHOR_CONFIG.name}
          </p>
          <p className="text-xs text-zinc-500 mt-1 font-[var(--font-body)]">
            {AUTHOR_CONFIG.role}
          </p>
        </div>
      </div>

      <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-[var(--font-body)]">
        {AUTHOR_CONFIG.bio}
      </p>

      {/* LinkedIn */}
      <a
        href={AUTHOR_CONFIG.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-bold tracking-wider flex items-center gap-2 group hover:text-zinc-600 transition-colors"
      >
        <Linkedin size={14} />
        Me suivre sur LinkedIn{" "}
        <ChevronRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>
    </motion.div>
  );
}
