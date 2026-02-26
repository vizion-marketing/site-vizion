"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { homeContent } from "@/content/home";

interface BlogSectionProps {
  articles: Array<{
    slug: string;
    title: string;
    description?: string;
    date: string;
    category?: string;
    readingTime?: string;
    featuredImage?: string;
  }>;
  surtitre?: string;
  h2?: string;
  description?: string;
  ctaText?: string;
}

// Format date for display
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogSection({ articles, surtitre, h2, description, ctaText }: BlogSectionProps) {
  return (
    <section id="blog" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-white">
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12 mb-10 sm:mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Overline */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                {surtitre ?? homeContent.blog.surtitre}
              </span>
            </div>

            <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary">
              {h2 ?? homeContent.blog.h2}
            </h2>

            <p className="text-muted text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed mt-4 sm:mt-5">
              {description ?? "Retours d\u0027expérience, analyses et guides pratiques pour les dirigeants qui veulent un marketing qui génère du revenu."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-[14px] font-[var(--font-body)] font-semibold text-primary hover:text-primary transition-colors"
            >
              {ctaText ?? homeContent.blog.ctaText}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${article.slug}`}
                className="group block bg-card border border-black/[0.06] overflow-hidden hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image
                    src={article.featuredImage || "/images/blog/placeholder.avif"}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Category & Read Time */}
                  <div className="flex items-center gap-3 mb-3">
                    {article.category && (
                      <span className="px-2.5 py-1 bg-accent/20 text-[10px] font-bold tracking-wide text-primary rounded">
                        {article.category}
                      </span>
                    )}
                    {article.readingTime && (
                      <div className="flex items-center gap-1 text-[#999]">
                        <Clock size={12} />
                        <span className="text-[11px] font-medium">{article.readingTime}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-[17px] sm:text-[18px] text-primary leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  {article.description && (
                    <p className="text-muted text-[13px] sm:text-[14px] font-[var(--font-body)] leading-relaxed line-clamp-2 mb-4">
                      {article.description}
                    </p>
                  )}

                  {/* Date */}
                  <span className="text-[11px] font-medium text-[#999] tracking-wide">
                    {formatDate(article.date)}
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
