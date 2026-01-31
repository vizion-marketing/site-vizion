"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Search,
  Mail,
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  Sparkles,
  BookOpen,
  Star,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import { allPosts } from "contentlayer/generated";
import { ImagePlaceholder } from "@/components/ui";

// Fixed categories for the blog
const categories = [
  "Tous",
  "Actualité",
  "IA for Sales",
  "Product Marketing",
  "Vente",
];

// Format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

// Posts per page
const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and sort posts
  const publishedPosts = useMemo(() => {
    return allPosts
      .filter((post) => !post.draft)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  // Get featured posts
  const featuredPost = publishedPosts[0]; // À la une (right side)
  const editorPick = publishedPosts[1]; // Le préféré de la rédac
  const readerFavorite = publishedPosts[0]; // Le préféré des lecteurs (same as featured for now)

  // Filter by category and search
  const filteredPosts = useMemo(() => {
    return publishedPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "Tous" || post.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [publishedPosts, activeCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset page when filter changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-white font-['Inter'] selection:bg-black selection:text-white">
      {/* HERO SECTION - Style Homepage */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-[120px] md:pb-[80px] px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] overflow-hidden">
        {/* Pattern texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-[82.5rem] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* TOP - Blog Title Block */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="bg-black/20 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/10"
              >
                {/* Status Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EEFF41] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EEFF41]"></span>
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.15em] text-white/60 uppercase">
                    Le laboratoire de performance
                  </span>
                </div>
                
                <h1 className="font-['Roboto'] font-[900] text-[36px] sm:text-[56px] md:text-[80px] lg:text-[100px] leading-[0.9] tracking-tight uppercase text-white mb-4">
                  <span className="relative inline-block">
                    <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[14px] bg-[#EEFF41] -z-10"></span>
                    Blog
                  </span>
                </h1>

                <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">
                  Stratégies d'élite et insights exclusifs pour propulser votre croissance B2B.
                </p>
              </motion.div>

              {/* BOTTOM - 2 Article Cards Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Le préféré de la rédac */}
                {editorPick && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <Link href={`/blog/${editorPick.slug}`} className="group block h-full">
                      <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-[#EEFF41]/30 transition-all duration-500">
                        {/* Image */}
                        <div className="aspect-[16/10] relative overflow-hidden">
                          {editorPick.featuredImage ? (
                            <Image
                              src={editorPick.featuredImage}
                              alt={editorPick.title}
                              fill
                              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                          ) : (
                            <ImagePlaceholder
                              width={300}
                              height={200}
                              label="Image article"
                              rounded="sm"
                              variant="dark"
                              className="w-full h-full"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                          {/* Badge */}
                          <div className="absolute top-3 left-3 z-10">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white text-black text-[9px] font-black uppercase tracking-wider rounded-full">
                              <Star size={10} className="fill-black" />
                              Rédac
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 mb-1.5 block">
                            {editorPick.category}
                          </span>
                          <h3 className="font-['Roboto'] font-black text-sm uppercase leading-tight text-white group-hover:text-[#EEFF41] transition-colors line-clamp-2">
                            {editorPick.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}

                {/* Le préféré des lecteurs */}
                {readerFavorite && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <Link href={`/blog/${readerFavorite.slug}`} className="group block h-full">
                      <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-[#EEFF41]/30 transition-all duration-500">
                        {/* Image */}
                        <div className="aspect-[16/10] relative overflow-hidden">
                          {readerFavorite.featuredImage ? (
                            <Image
                              src={readerFavorite.featuredImage}
                              alt={readerFavorite.title}
                              fill
                              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                          ) : (
                            <ImagePlaceholder
                              width={300}
                              height={200}
                              label="Image article"
                              rounded="sm"
                              variant="dark"
                              className="w-full h-full"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                          {/* Badge */}
                          <div className="absolute top-3 left-3 z-10">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#EEFF41] text-black text-[9px] font-black uppercase tracking-wider rounded-full">
                              <TrendingUp size={10} />
                              Populaire
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 mb-1.5 block">
                            {readerFavorite.category}
                          </span>
                          <h3 className="font-['Roboto'] font-black text-sm uppercase leading-tight text-white group-hover:text-[#EEFF41] transition-colors line-clamp-2">
                            {readerFavorite.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>

            {/* RIGHT - Featured Post Card (À la une) */}
            {featuredPost && (
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
                className="lg:col-span-5 relative"
              >
                <Link href={`/blog/${featuredPost.slug}`} className="group block h-full">
                  <div className="relative h-full min-h-[320px] sm:min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                    {/* Image - Full height */}
                    <div className="absolute inset-0">
                      {featuredPost.featuredImage ? (
                        <Image
                          src={featuredPost.featuredImage}
                          alt={featuredPost.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                      ) : (
                        <ImagePlaceholder
                          width={500}
                          height={600}
                          label="Image article à la une"
                          rounded="sm"
                          variant="dark"
                          className="w-full h-full"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                    </div>

                    {/* Badge - Top */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#EEFF41] text-black text-[10px] font-black uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(238,255,65,0.3)]">
                        <Sparkles size={12} />
                        À la une
                      </span>
                    </div>

                    {/* Content - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-3 block">
                        {featuredPost.category}
                      </span>
                      <h3 className="font-['Roboto'] font-black text-2xl md:text-3xl uppercase leading-[1.1] text-white mb-4 group-hover:text-[#EEFF41] transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-white/60 text-sm line-clamp-2 mb-6 max-w-md">
                        {featuredPost.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-white/40 text-xs">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {formatDate(featuredPost.date)}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {featuredPost.readingTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-2 text-[11px] font-black uppercase text-white group-hover:text-[#EEFF41] transition-colors">
                          Lire l'article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#EEFF41]/40 pointer-events-none z-20" />
                <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-white/30 pointer-events-none z-20" />
              </motion.div>
            )}
          </div>
        </div>

        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[5%] w-40 h-40 border border-white/5 rounded-full blur-[2px] pointer-events-none hidden xl:block" 
        />
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-[3%] w-24 h-24 border border-white/5 rounded-full blur-[2px] pointer-events-none hidden xl:block" 
        />
      </section>

      {/* FILTERS SECTION */}
      <section className="bg-white py-6 sm:py-10 px-4 sm:px-6 md:px-12 border-b border-black/5">
        <div className="max-w-[82.5rem] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Left - Categories */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer par catégorie">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-5 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-300 rounded-full border ${
                    activeCategory === cat
                      ? "bg-black border-black text-white shadow-[0_0_20px_rgba(0,0,0,0.15)]"
                      : "bg-transparent border-black/20 text-black hover:border-black hover:bg-black hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right - Search + Count */}
            <div className="flex items-center gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                <input
                  type="search"
                  aria-label="Rechercher des articles"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full md:w-56 bg-[#F2F2F2] border-none rounded-full px-10 py-2.5 text-sm text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                />
              </div>

              {/* Results count */}
              <div className="hidden md:flex items-center gap-2 text-sm text-black/50">
                <BookOpen size={16} />
                <span><strong className="text-black">{filteredPosts.length}</strong> articles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="bg-[#F9F9F9] py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-[82.5rem] mx-auto">
          {paginatedPosts.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {paginatedPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    variants={fadeInUp}
                    layout
                    className="group bg-white rounded-2xl overflow-hidden border border-transparent hover:border-[#EEFF41]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500"
                  >
                    {/* Image */}
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="aspect-video w-full overflow-hidden bg-[#F2F2F2] relative">
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <ImagePlaceholder
                            width={400}
                            height={225}
                            label="Image article"
                            rounded="sm"
                            className="w-full h-full"
                          />
                        )}

                        {/* Category badge on image */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-black text-[9px] font-black uppercase tracking-wider rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6">
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="font-['Roboto'] font-black text-lg uppercase leading-tight mb-3 text-black group-hover:text-black/80 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-black/60 text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.description}
                      </p>

                      {/* Meta */}
                      <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-[10px] font-bold text-black/40 uppercase">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {formatDate(post.date)}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readingTime}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-black group-hover:text-[#000] transition-colors"
                        >
                          Lire <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-6">
                <Search size={24} className="text-black/30" />
              </div>
              <h3 className="font-['Roboto'] font-black text-xl uppercase mb-2">Aucun article trouvé</h3>
              <p className="text-black/50">Essayez une autre recherche ou catégorie</p>
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <nav className="mt-12 sm:mt-16 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto" aria-label="Pagination des articles">
              <button
                aria-label="Page précédente"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-xl border border-black/10 hover:bg-black hover:text-white hover:border-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  aria-label={`Page ${num}`}
                  aria-current={num === currentPage ? "page" : undefined}
                  onClick={() => setCurrentPage(num)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-xl text-sm font-black transition-all ${
                    num === currentPage
                      ? "bg-black text-white shadow-[0_0_20px_rgba(0,0,0,0.15)]"
                      : "border border-black/10 hover:border-black hover:bg-black hover:text-white"
                  }`}
                >
                  {num.toString().padStart(2, "0")}
                </button>
              ))}

              <button
                aria-label="Page suivante"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-xl border border-black/10 hover:bg-black hover:text-white hover:border-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* CTA NEWSLETTER - Style Homepage */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-[#F2F2F2]">
        <div className="max-w-[82.5rem] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] rounded-[var(--radius-xl)] p-6 sm:p-10 md:p-20 relative overflow-hidden"
          >
            {/* Pattern texture overlay */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            {/* Decorative elements */}
            <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-[#EEFF41]/20" />
            <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-[#EEFF41]/20" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-[#EEFF41] text-[#EEFF41]" />)}
                </div>
                <span className="text-[10px] font-black text-white uppercase tracking-wider">Newsletter exclusive</span>
              </div>

              <h2 className="font-['Roboto'] font-[900] text-[28px] sm:text-[40px] md:text-[56px] leading-[1] tracking-tight uppercase mb-6 text-white">
                Restez à la <span className="relative inline-block"><span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[10px] bg-[#EEFF41] -z-10"></span>pointe</span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl mx-auto">
                Recevez nos meilleures analyses et stratégies B2B directement dans votre boîte mail, une fois par semaine.
              </p>

              <form
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const input = form.querySelector('input[type="email"]') as HTMLInputElement;
                  const btn = form.querySelector('button') as HTMLButtonElement;
                  if (!input?.value) return;
                  btn.disabled = true;
                  btn.textContent = '...';
                  try {
                    const res = await fetch('/api/newsletter', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email: input.value }),
                    });
                    if (res.ok) {
                      input.value = '';
                      btn.textContent = 'Inscrit !';
                      setTimeout(() => { btn.textContent = "S'inscrire"; btn.disabled = false; }, 3000);
                    } else {
                      const data = await res.json();
                      btn.textContent = data.error || 'Erreur';
                      setTimeout(() => { btn.textContent = "S'inscrire"; btn.disabled = false; }, 3000);
                    }
                  } catch {
                    btn.textContent = 'Erreur réseau';
                    setTimeout(() => { btn.textContent = "S'inscrire"; btn.disabled = false; }, 3000);
                  }
                }}
              >
                <div className="relative flex-grow">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    required
                    aria-label="Votre adresse email"
                    placeholder="votre@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-all backdrop-blur-sm"
                  />
                </div>
                <button type="submit" className="bg-white text-black font-['Roboto'] font-black uppercase text-[12px] tracking-widest px-8 py-4 rounded-xl hover:bg-[#EEFF41] hover:shadow-[0_0_30px_rgba(238,255,65,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait">
                  S&apos;inscrire <ArrowRight size={14} />
                </button>
              </form>

              {/* Trust elements */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <CheckCircle2 size={14} className="text-[#EEFF41]" />
                  <span>Pas de spam</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <CheckCircle2 size={14} className="text-[#EEFF41]" />
                  <span>Désinscription en 1 clic</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <CheckCircle2 size={14} className="text-[#EEFF41]" />
                  <span>+500 abonnés</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
