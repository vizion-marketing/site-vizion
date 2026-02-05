"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  // Filter out current post and limit to 3
  const filteredPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  if (filteredPosts.length === 0) return null;

  return (
    <section className="py-20 bg-[#F2F2F2]">
      <div className="container mx-auto px-6">
        <div className="max-w-[82.5rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-[11px] font-medium tracking-[1.65px] text-zinc-500 mb-4 block">
              Continuer la lecture
            </span>
            <h2 className="text-[32px] md:text-[40px] font-black tracking-[-2px] leading-[1.05] text-black font-['Inter']">
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
                className="group bg-white p-6 flex flex-col gap-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="aspect-video w-full overflow-hidden bg-zinc-200 relative">
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
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <span className="text-[11px] font-medium tracking-[1.65px] text-zinc-500 mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-['Inter'] font-black text-[20px] tracking-[-0.5px] leading-tight mb-4 group-hover:text-zinc-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Metadata */}
                  <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <div className="flex gap-4">
                      <span className="text-[10px] font-bold text-zinc-400">
                        {post.date}
                      </span>
                      <span className="text-[10px] font-bold text-zinc-400">
                        • {post.readingTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-[11px] font-bold tracking-wider group-hover:translate-x-1 transition-transform"
                    >
                      Lire <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
