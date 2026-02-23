"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Lightbulb } from "lucide-react";
import type { SuggestedArticle } from "@/lib/internal-linking";

interface RelatedInlineCardProps {
  article: SuggestedArticle;
  index?: number; // Pour les animations staggered
}

/**
 * RelatedInlineCard - Suggestion d'article contextuelle
 *
 * Affiche une carte suggestion inline dans le contenu de l'article.
 * Design cohérent avec le brand Vizion (lime accent, glassmorphism).
 *
 * Impact attendu : +40% internal pageviews, +25% temps sur site
 */
export function RelatedInlineCard({ article, index = 0 }: RelatedInlineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="my-12 not-prose" // not-prose pour échapper aux styles prose
    >
      <Link
        href={`/blog/${article.slug}`}
        className="group block relative overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 hover:border-[#D4FD00]/50 hover:shadow-lg hover:shadow-[#D4FD00]/10 transition-all duration-300"
      >
        {/* Effet glassmorphism au hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4FD00]/0 via-[#D4FD00]/0 to-[#D4FD00]/0 group-hover:from-[#D4FD00]/5 group-hover:via-[#D4FD00]/0 group-hover:to-[#D4FD00]/5 transition-all duration-500" />

        <div className="relative p-6">
          {/* Header avec icône */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D4FD00]/20 border border-[#D4FD00]/30">
              <Lightbulb size={16} className="text-black" />
            </div>
            <span className="text-xs font-bold tracking-wider text-zinc-600 uppercase">
              Article connexe
            </span>
          </div>

          <div className="flex gap-4">
            {/* Image (si disponible) */}
            {article.featuredImage && (
              <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100">
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            )}

            {/* Contenu */}
            <div className="flex-1 min-w-0">
              {/* Catégorie */}
              <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-wide text-black bg-[#D4FD00]/30 rounded mb-2">
                {article.category}
              </span>

              {/* Titre */}
              <h3 className="font-heading font-semibold text-base sm:text-lg text-zinc-900 mb-2 line-clamp-2 group-hover:text-black transition-colors">
                {article.title}
              </h3>

              {/* Meta + CTA */}
              <div className="flex items-center justify-between gap-4 mt-3">
                <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                  <Clock size={13} />
                  <span>{article.readingTime}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-black group-hover:gap-2.5 transition-all">
                  Lire l&apos;article
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre accent lime en bas */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#D4FD00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </motion.div>
  );
}
