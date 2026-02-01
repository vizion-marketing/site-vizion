"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { ImagePlaceholder } from "@/components/ui";
import { SectionDiagonalTop, SectionDiagonalBottom } from "./shared/SectionDiagonal";
import type { Post } from "@/lib/types";
import { formatDate } from "@/lib/types";

export function BlogPreviewSection({ posts }: { posts: Post[] }) {
  return (
    <>
      {/* SECTION BLOG */}
      {/* SEO: Articles marketing B2B Toulouse - expertise et conseils */}
      {/* Images: 400x225px (16:9) pour thumbnails articles */}
      <section
        className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 bg-gradient-to-tr from-[#F5F5F5] via-[#F0F0F0] to-[#E8E8E8] relative grain-light"
        aria-label="Articles marketing B2B agence Toulouse"
      >
        {/* Diagonal top overlay - covers gap from previous section (Équipe) */}
        <SectionDiagonalTop fillColor="#FAFAF8" direction="left" />
        {/* Ambient glow */}
        <div className="absolute top-[25%] right-[10%] w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-gradient-to-bl from-cyan-50/15 via-sky-50/8 to-transparent rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[0%] w-[320px] sm:w-[520px] h-[320px] sm:h-[520px] bg-gradient-to-tr from-slate-200/25 via-gray-100/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[82.5rem] mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 md:mb-16">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black/40 mb-3 sm:mb-4"
              >
                <span className="w-5 h-[1px] bg-gradient-to-r from-[#B78726]/60 to-transparent" />
                {homeContent.blog.surtitre}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="font-['Roboto'] font-[900] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight uppercase text-black"
              >
                {homeContent.blog.h2}
              </motion.h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-black bg-white/70 backdrop-blur-sm border border-black/5 rounded-md sm:rounded-lg px-3 sm:px-4 py-2 hover:text-black/70 hover:shadow-md transition-all duration-300 group mt-4 sm:mt-6 md:mt-0"
            >
              {homeContent.blog.ctaText}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {posts.length > 0 ? (
              posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring", stiffness: 300, damping: 25 }}
                  className="group bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm overflow-hidden card-lift transition-all duration-300"
                >
                  {/* Image - 400x225px (16:9) */}
                  <Link href={`/blog/${post.slug}`} className="block relative overflow-hidden">
                    <div className="aspect-video w-full bg-[#F2F2F2] relative">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={`${post.title} - Blog agence marketing Toulouse`}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        />
                      ) : (
                        <ImagePlaceholder
                          width={400}
                          height={225}
                          label="Article blog"
                          rounded="none"
                          className="w-full h-full"
                        />
                      )}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <span className="px-2 py-0.5 bg-black/5 backdrop-blur-sm border border-black/5 rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-black/60">
                        {post.category}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="font-['Roboto'] font-black text-sm sm:text-base md:text-lg uppercase leading-tight mb-2 sm:mb-3 text-black transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-black/50 text-xs sm:text-sm font-['Inter'] leading-relaxed mb-4 sm:mb-6 line-clamp-2">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="pt-3 sm:pt-4 border-t border-black/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-[9px] sm:text-[10px] font-medium text-black/40 uppercase tracking-tight">
                          {formatDate(post.date)}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-black/10" />
                        <span className="text-[9px] sm:text-[10px] font-medium text-black/40 uppercase tracking-tight">
                          {post.readingTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[9px] sm:text-[10px] font-bold uppercase text-black flex items-center gap-1 sm:gap-1.5 hover:gap-2 transition-all duration-300 group/link"
                      >
                        Lire <ArrowRight size={10} className="transition-transform group-hover/link:translate-x-0.5 sm:hidden" />
                        <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-0.5 hidden sm:block" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              // Placeholder cards
              [1, 2, 3].map((i) => (
                <div key={i} className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-video w-full bg-black/5" />
                  <div className="p-4 sm:p-6">
                    <div className="h-3 sm:h-4 bg-black/5 rounded-lg w-1/4 mb-3 sm:mb-4" />
                    <div className="h-5 sm:h-6 bg-black/5 rounded-lg w-3/4 mb-2 sm:mb-3" />
                    <div className="h-3 sm:h-4 bg-black/5 rounded-lg w-full mb-2" />
                    <div className="h-3 sm:h-4 bg-black/5 rounded-lg w-2/3" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {/* Diagonal bottom → next section (FAQ white) */}
        <SectionDiagonalBottom fillColor="#FFFFFF" direction="right" />
      </section>
    </>
  );
}
