"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { ArrowLeft } from "lucide-react";

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
    <section className="bg-grey border-y border-black/5">
      <div className="max-w-[82.5rem] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Previous Post */}
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex items-center gap-8 py-12 px-4 hover:bg-white transition-colors border-b md:border-b-0 md:border-r border-black/5"
            >
              <motion.div
                whileHover={{ x: -4 }}
                className="w-12 h-12 flex items-center justify-center rounded-none border border-black/10 group-hover:bg-black group-hover:border-black transition-all"
              >
                <ArrowLeft
                  size={20}
                  className="text-black group-hover:text-white transition-colors"
                />
              </motion.div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-light tracking-[0.12em] text-black/40 block mb-2">
                  Précédent
                </span>
                <p className="text-lg font-black tracking-tight font-[var(--font-body)] line-clamp-2 text-black group-hover:text-black/80 transition-colors">
                  {prevPost.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="py-12 px-4 border-b md:border-b-0 md:border-r border-black/5" />
          )}

          {/* Next Post */}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex items-center justify-end gap-8 py-12 px-4 hover:bg-white transition-colors"
            >
              <div className="flex-1 min-w-0 text-right">
                <span className="text-[10px] font-light tracking-[0.12em] text-black/40 block mb-2">
                  Suivant
                </span>
                <p className="text-lg font-black tracking-tight font-[var(--font-body)] line-clamp-2 text-black group-hover:text-black/80 transition-colors">
                  {nextPost.title}
                </p>
              </div>
              <motion.div
                whileHover={{ x: 4 }}
                className="w-12 h-12 flex items-center justify-center rounded-none border border-black/10 group-hover:bg-black group-hover:border-black transition-all"
              >
                <ArrowUpRightIcon
                  size={20}
                  className="text-black group-hover:text-white transition-colors"
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
