"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";

const ARTICLES = [
  {
    slug: "pourquoi-marketing-produit-b2b",
    category: "Marketing Produit",
    title: "Pourquoi le marketing produit est la clé de votre croissance B2B",
    excerpt: "Le marketing produit n'est pas une option. C'est le fondement d'une stratégie commerciale qui convertit.",
    readTime: "6 min",
    date: "12 Jan 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    slug: "sales-enablement-guide-complet",
    category: "Sales Enablement",
    title: "Sales enablement : le guide complet pour équiper vos commerciaux",
    excerpt: "Vos commerciaux perdent du temps à chercher les bons contenus. Voici comment structurer votre sales enablement.",
    readTime: "8 min",
    date: "5 Jan 2025",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    slug: "ia-marketing-b2b-cas-usage",
    category: "Intelligence Artificielle",
    title: "IA et marketing B2B : 5 cas d'usage concrets pour gagner du temps",
    excerpt: "L'IA n'est pas qu'un buzzword. Voici comment nous l'utilisons pour nos clients au quotidien.",
    readTime: "5 min",
    date: "28 Dec 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
];

export function BlogSection() {
  const [featured, ...rest] = ARTICLES;

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-white">
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
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
              <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b] uppercase">
                Notre blog
              </span>
            </div>

            <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]">
              Nos derniers articles
            </h2>

            <p className="text-[#6b6b6b] text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed mt-4 sm:mt-5">
              Stratégies, retours d'expérience et bonnes pratiques pour transformer votre marketing B2B.
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
              className="group inline-flex items-center gap-2 text-[14px] font-[var(--font-body)] font-semibold text-[#1a1a1a] hover:text-[#0a0a0a] transition-colors"
            >
              Voir tous les articles
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Featured Article - Large card spanning 7 columns and 2 rows */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 lg:row-span-2"
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group block h-full bg-[#fafaf8] border border-black/[0.06] overflow-hidden hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Image */}
                <div className="relative h-[240px] sm:h-[280px] lg:h-[60%] min-h-[240px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-[#D4FD00] text-[10px] font-bold tracking-wide text-[#1a1a1a]">
                      {featured.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-[22px] sm:text-[24px] md:text-[28px] text-[#1a1a1a] leading-tight mb-3 group-hover:text-[#0a0a0a] transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-[#6b6b6b] text-[14px] sm:text-[15px] font-[var(--font-body)] leading-relaxed line-clamp-3">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-black/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-[#999]">
                        <Clock size={13} />
                        <span className="text-[12px] font-medium">{featured.readTime}</span>
                      </div>
                      <span className="text-[12px] text-[#999]">{featured.date}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1a1a1a] group-hover:text-[#D4FD00] transition-colors">
                      Lire
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Secondary Articles - stacked on right */}
          {rest.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="lg:col-span-5 lg:row-span-1"
            >
              <Link
                href={`/blog/${article.slug}`}
                className="group flex flex-row h-full bg-[#fafaf8] border border-black/[0.06] overflow-hidden hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
              >
                {/* Image - left side */}
                <div className="relative w-[140px] sm:w-[180px] shrink-0 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content - right side */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-[#D4FD00]/20 text-[9px] font-bold tracking-wide text-[#1a1a1a]">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-[#999]">
                        <Clock size={11} />
                        <span className="text-[10px] font-medium">{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-heading font-semibold text-[15px] sm:text-[16px] text-[#1a1a1a] leading-snug mb-1.5 group-hover:text-[#0a0a0a] transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-[#6b6b6b] text-[12px] sm:text-[13px] font-[var(--font-body)] leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-black/[0.04]">
                    <span className="text-[11px] font-medium text-[#999]">{article.date}</span>
                    <ArrowRight size={14} className="text-[#999] group-hover:text-[#1a1a1a] group-hover:translate-x-1 transition-all" />
                  </div>
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
