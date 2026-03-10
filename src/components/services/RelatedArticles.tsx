"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Post } from "../../../sanity/lib/types";
import { resolveImageUrl } from "../../../sanity/lib/image";

interface RelatedArticlesProps {
  posts: Post[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between sm:items-end mb-12 gap-4"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                Ressources
              </span>
            </div>
            <h2 className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-primary">
              Articles liés
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors shrink-0"
          >
            <span className="border-b border-transparent group-hover:border-current transition-colors">
              Voir tous les articles
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.slice(0, 3).map((post) => {
            const imgUrl = post.featuredImage
              ? resolveImageUrl(post.featuredImage, 600)
              : post.featuredImageUrl || null;
            const href = post.url || `/blog/${post.slug}`;

            return (
              <motion.article
                key={post._id}
                variants={itemVariants}
                className="group bg-card border border-black/[0.06] overflow-hidden hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
              >
                <Link href={href} className="block">
                  {imgUrl && (
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={imgUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="px-6 py-5">
                    <span className="text-xs uppercase tracking-wider text-secondary">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-medium text-primary line-clamp-2 mt-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-secondary line-clamp-2 mt-2">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-4 group-hover:text-accent transition-colors">
                      Lire l&apos;article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
