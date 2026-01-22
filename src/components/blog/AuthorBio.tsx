"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, ChevronRight } from "lucide-react";

// Configuration auteur Vizion (fixe)
const AUTHOR_CONFIG = {
  name: "Vizion",
  role: "Agence Marketing",
  bio: "Vizion accompagne les entreprises B2B dans leur croissance grâce à une approche structurée autour de 5 piliers : Stratégie, Marketing Produit, Acquisition, Activation des Ventes et Automatisation IA.",
  avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&auto=format&fit=crop",
  linkedin: "https://www.linkedin.com/company/vizion",
  twitter: "https://twitter.com/vizion",
  website: "/contact",
};

export function AuthorBio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#F2F2F2] p-8 rounded-sm"
    >
      <h4 className="text-[11px] font-medium uppercase tracking-[1.65px] text-zinc-500 mb-6">
        À propos de l'auteur
      </h4>

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
          <p className="font-black uppercase text-sm leading-tight font-['Roboto']">
            {AUTHOR_CONFIG.name}
          </p>
          <p className="text-xs text-zinc-500 mt-1 font-['Inter']">
            {AUTHOR_CONFIG.role}
          </p>
        </div>
      </div>

      <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-['Inter']">
        {AUTHOR_CONFIG.bio}
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-4 mb-6">
        {AUTHOR_CONFIG.linkedin && (
          <a
            href={AUTHOR_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white hover:bg-black hover:text-white transition-colors rounded-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        )}
        {AUTHOR_CONFIG.twitter && (
          <a
            href={AUTHOR_CONFIG.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white hover:bg-black hover:text-white transition-colors rounded-sm"
            aria-label="Twitter"
          >
            <Twitter size={16} />
          </a>
        )}
      </div>

      <Link
        href={AUTHOR_CONFIG.website}
        className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 group hover:text-zinc-600 transition-colors"
      >
        Contactez-nous{" "}
        <ChevronRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </Link>
    </motion.div>
  );
}
