"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface NavPost {
  slug: string;
  title: string;
}

interface ArticleNavProps {
  prevPost?: NavPost;
  nextPost?: NavPost;
}

export function ArticleNav({ prevPost, nextPost }: ArticleNavProps) {
  if (!prevPost && !nextPost) return null;

  return (
    <section className="bg-[#F2F2F2] border-y border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[82.5rem] mx-auto">
          {/* Previous Post */}
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex items-center gap-8 py-12 px-4 hover:bg-white transition-colors border-b md:border-b-0 md:border-r border-zinc-200"
            >
              <motion.div
                whileHover={{ x: -4 }}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-300 group-hover:bg-black group-hover:border-black transition-all"
              >
                <ArrowLeft
                  size={20}
                  className="group-hover:text-white transition-colors"
                />
              </motion.div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-medium tracking-[1.65px] text-zinc-400 block mb-2">
                  Précédent
                </span>
                <p className="text-lg font-black tracking-tight font-['Inter'] line-clamp-2 group-hover:text-zinc-600 transition-colors">
                  {prevPost.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="py-12 px-4 border-b md:border-b-0 md:border-r border-zinc-200" />
          )}

          {/* Next Post */}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex items-center justify-end gap-8 py-12 px-4 hover:bg-white transition-colors"
            >
              <div className="flex-1 min-w-0 text-right">
                <span className="text-[11px] font-medium tracking-[1.65px] text-zinc-400 block mb-2">
                  Suivant
                </span>
                <p className="text-lg font-black tracking-tight font-['Inter'] line-clamp-2 group-hover:text-zinc-600 transition-colors">
                  {nextPost.title}
                </p>
              </div>
              <motion.div
                whileHover={{ x: 4 }}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-300 group-hover:bg-black group-hover:border-black transition-all"
              >
                <ArrowRight
                  size={20}
                  className="group-hover:text-white transition-colors"
                />
              </motion.div>
            </Link>
          ) : (
            <div className="py-12 px-4" />
          )}
        </div>
      </div>
    </section>
  );
}
