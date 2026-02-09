"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import { Calendar, Tag } from "lucide-react";

interface RelatedPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  featuredImage?: string;
}

interface BlogSidebarProps {
  category: string;
  relatedPosts: RelatedPost[];
  currentSlug: string;
}

export const BlogSidebar = ({ category, relatedPosts, currentSlug }: BlogSidebarProps) => {
  const filteredPosts = relatedPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  return (
    <aside className="sticky top-24 w-full flex flex-col gap-8">
      {/* CTA - Style gradient home avec btn-primary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative group overflow-hidden rounded-none p-6 border border-white/10 grain-overlay"
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
        </div>

        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#D4FD00] opacity-50" />
              <span className="relative inline-flex rounded-none h-2 w-2 bg-[#D4FD00]" />
            </span>
            <span className="text-[10px] font-light tracking-[0.12em] text-white/60">
              Accès Privé
            </span>
          </div>
          <h3 className="font-heading font-normal text-xl leading-[0.9] text-white tracking-tight">
            Propulsez votre vision créative
          </h3>
          <p className="font-[var(--font-body)] text-xs text-white/60 leading-relaxed max-w-[220px]">
            Rejoignez notre écosystème exclusif pour des ressources et insights premium hebdomadaires.
          </p>

          <Link
            href="/contact"
            className="btn btn-primary group"
          >
            S'inscrire <ArrowUpRightIcon size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* RELATED ARTICLES */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-light tracking-[0.12em] text-black/50">
            Articles Similaires
          </span>
          <div className="h-[1px] flex-1 bg-black/10" />
        </div>

        <div className="flex flex-col gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex gap-4 items-start"
                >
                  <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden rounded-none bg-[#F2F2F2] border border-black/5">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5 pt-1 flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[9px] font-bold tracking-wider text-black/40">
                      <span className="flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5" />
                        {post.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5" />
                        {post.date}
                      </span>
                    </div>

                    <h5 className="font-[var(--font-body)] font-bold text-sm leading-snug text-black group-hover:text-black/70 transition-colors line-clamp-2">
                      {post.title}
                    </h5>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="font-[var(--font-body)] text-xs text-black/40 italic">
              Aucun article similaire trouvé.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};
