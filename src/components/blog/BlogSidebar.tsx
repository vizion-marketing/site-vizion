"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';

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
      {/* PREMIUM CTA SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative group overflow-hidden rounded-[1rem] p-6 bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] border border-white/10 shadow-2xl"
      >
        {/* Carbon Texture Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/carbon-fibre.png')]" />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-['Inter'] text-[10px] tracking-[0.2em] text-neutral-400 font-medium">
              Accès Privé
            </span>
            <h3 className="font-['Inter'] font-[900] text-xl leading-[0.9] text-white tracking-tighter">
              Propulsez votre <br /> vision créative
            </h3>
          </div>
          
          <p className="font-['Inter'] text-xs text-neutral-300 leading-relaxed max-w-[220px]">
            Rejoignez notre écosystème exclusif pour des ressources et insights premium hebdomadaires.
          </p>

          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white px-5 py-2.5 rounded-full text-[10px] font-['Inter'] font-[900] tracking-widest text-black hover:bg-neutral-200 transition-all duration-300 group/btn"
          >
            S'inscrire 
            <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* RELATED ARTICLES SECTION */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <h4 className="font-['Inter'] font-[900] text-[11px] tracking-[0.25em] text-neutral-400">
            Articles Similaires
          </h4>
          <div className="h-[1px] flex-1 bg-neutral-200" />
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
                  <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg bg-neutral-200 border border-neutral-100">
                    {post.featuredImage && (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-1.5 pt-1">
                    <div className="flex items-center gap-2 text-[9px] font-['Inter'] font-semibold tracking-wider text-neutral-400">
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
                    
                    <h5 className="font-['Inter'] font-bold text-sm leading-snug text-neutral-900 group-hover:text-black transition-colors line-clamp-2">
                      {post.title}
                    </h5>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="font-['Inter'] text-xs text-neutral-500 italic">
              Aucun article similaire trouvé.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};
