"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
            {/* Overline */}
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ARTICLES.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${article.slug}`}
                className="group block bg-[#fafaf8] border border-black/[0.06] rounded-xl overflow-hidden hover:border-black/[0.12] hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Category & Read Time */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 bg-[#D4FD00]/20 text-[10px] font-bold tracking-wide text-[#1a1a1a] rounded">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-[#999]">
                      <Clock size={12} />
                      <span className="text-[11px] font-medium">{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-[17px] sm:text-[18px] text-[#1a1a1a] leading-tight mb-2 group-hover:text-[#0a0a0a] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#6b6b6b] text-[13px] sm:text-[14px] font-[var(--font-body)] leading-relaxed line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>

                  {/* Date */}
                  <span className="text-[11px] font-medium text-[#999] tracking-wide">
                    {article.date}
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
