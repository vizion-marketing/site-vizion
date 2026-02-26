"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export interface RelatedPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  featuredImage?: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
  currentSlug: string;
}

export function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
  const filteredPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  if (filteredPosts.length === 0) return null;

  return (
    <section className="py-20 px-6 md:px-12 bg-grey">
      <div className="max-w-[82.5rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
            <span className="surtitre text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-black/50">
              Continuer la lecture
            </span>
          </div>
          <h2 className="font-heading font-normal text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.02em] text-black">
            Articles similaires
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-none overflow-hidden border border-transparent hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 p-6 flex flex-col gap-6"
            >
              {/* Image */}
              <div className="aspect-video w-full overflow-hidden bg-grey relative">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-500">
                    <div className="w-full h-full opacity-30 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />
                  </div>
                )}
                {/* Badge catégorie */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-black text-[9px] font-black tracking-wider rounded-none">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="font-[var(--font-body)] font-black text-lg leading-tight mb-3 text-black group-hover:text-black/80 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Metadata */}
                <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-black/40">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-[10px] font-black tracking-wider text-black group-hover:text-black transition-colors"
                  >
                    Lire <ArrowUpRightIcon size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
