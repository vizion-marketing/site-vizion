"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronDown,
  MessageSquare,
  Send,
  Target,
  BarChart3,
  Layers,
  ShieldCheck,
  Code,
  Cloud,
  Plug,
  Palette,
  Lightbulb,
  Cpu,
  Rocket,
  Search,
  Check,
  Zap
} from "lucide-react";
import type { Page, CaseStudy } from "contentlayer/generated";

// Icon mapping for dynamic rendering
const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number; size?: number }>> = {
  Target,
  BarChart3,
  Layers,
  ShieldCheck,
  Code,
  Cloud,
  Plug,
  Palette,
  Lightbulb,
  Cpu,
  Rocket,
  Search,
  Check,
  Zap,
};

// Types for structured data
interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface Metric {
  value: string;
  label: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  photo?: string;
}

interface ServiceDetailContentProps {
  service: Page;
  relatedCases: CaseStudy[];
}

// Components
const SectionHeading = ({ surtitre, h2, light = false }: { surtitre: string, h2: string, light?: boolean }) => (
  <div className="mb-12">
    <span className={`surtitre ${light ? 'text-white/70' : 'text-black/60'}`}>
      {surtitre}
    </span>
    <h2 className={`mt-4 h2 ${light ? 'text-white' : 'text-black'}`}>
      {h2}
    </h2>
  </div>
);

const AccordionItem = ({ q, a, isOpen, onClick }: { q: string, a: string, isOpen: boolean, onClick: () => void }) => (
  <div className="border-b border-black/10 last:border-none">
    <button 
      onClick={onClick}
      className="flex w-full items-center justify-between py-6 text-left transition-all hover:opacity-70"
      aria-expanded={isOpen}
    >
      <span className="text-lg font-bold font-['Roboto'] uppercase tracking-tight pr-4">{q}</span>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="flex-shrink-0">
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-black/60 leading-relaxed max-w-2xl font-['Inter']">{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export function ServiceDetailContent({ service, relatedCases }: ServiceDetailContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Parse structured data from service
  const features = (service.features as Feature[]) || [];
  const process = (service.process as ProcessStep[]) || [];
  const metrics = (service.metrics as Metric[]) || [];
  const faqs = (service.faqs as FAQ[]) || [];
  const testimonial = service.testimonial as Testimonial | undefined;
  const tags = service.tags || [];
  const IconComponent = ICONS[service.icon || "Layers"] || Layers;

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#111111] via-[#000000] to-[#1a1a1a]" />
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="relative z-10 max-w-[82.5rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="surtitre text-white/70">
              {service.category || "Notre expertise"}
            </span>
            <h1 className="mt-6 h1 text-white max-w-4xl">
              {service.heroTitle || service.title}
            </h1>
            <p className="mt-8 text-xl text-white/80 max-w-2xl leading-relaxed font-['Inter']">
              {service.heroSubtitle || service.description}
            </p>
            
            {tags.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-medium uppercase tracking-wider border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-12">
              <Link 
                href={service.ctaLink || "/contact"} 
                className="btn-primary !bg-white !text-black inline-flex items-center gap-3"
              >
                {service.ctaText || "Démarrer le projet"} <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VUE D'ENSEMBLE & METRICS */}
      {metrics.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-[82.5rem] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <div>
                <SectionHeading surtitre="Expertise" h2="Pourquoi ce service ?" />
                <p className="text-lg text-black/70 leading-relaxed font-['Inter']">
                  {service.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {metrics.map((metric, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="card-white shadow-sm hover:shadow-md transition-all text-center p-6"
                  >
                    <div className="font-['Roboto'] font-black text-4xl mb-2">{metric.value}</div>
                    <div className="surtitre text-black/40 leading-tight">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. CE QUI EST INCLUS (Features) */}
      {features.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-[#F2F2F2]">
          <div className="max-w-[82.5rem] mx-auto">
            <SectionHeading surtitre="Livrables" h2="Ce qui est inclus" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const FeatureIcon = ICONS[feature.icon] || Layers;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all group flex flex-col items-start"
                  >
                    <div className="h-14 w-14 bg-black rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                      <FeatureIcon size={28} />
                    </div>
                    <h3 className="font-['Roboto'] font-black text-2xl uppercase tracking-tight mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-black/60 leading-relaxed font-['Inter']">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. PROCESS DÉTAILLÉ */}
      {process.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
          <div className="max-w-[82.5rem] mx-auto">
            <SectionHeading surtitre="Méthodologie" h2="Notre processus" />
            
            <div className="relative mt-20">
              <div className="hidden lg:block absolute top-8 left-0 w-full h-[1px] bg-black/10 z-0" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {process.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col"
                  >
                    <div className="h-16 w-16 bg-white border-2 border-black rounded-full flex items-center justify-center font-['Roboto'] font-black text-2xl mb-8 z-10">
                      {i + 1}
                    </div>
                    <h4 className="font-['Roboto'] font-black text-xl uppercase tracking-tight mb-3">
                      {step.title}
                    </h4>
                    <p className="text-black/60 text-sm leading-relaxed font-['Inter']">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. CAS CLIENTS LIÉS */}
      {relatedCases.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-[#F2F2F2]">
          <div className="max-w-[82.5rem] mx-auto">
            <SectionHeading surtitre="Impact" h2="Projets réalisés" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCases.map((caseStudy, i) => (
                <Link 
                  key={caseStudy.slug} 
                  href={`/cas-clients/${caseStudy.slug}`}
                  className="bg-white p-8 rounded-[32px] border border-black/5 flex flex-col justify-between group cursor-pointer hover:border-black/20 transition-all"
                >
                  <div>
                    <div className="flex justify-between items-start mb-12">
                      <div className="h-10 px-4 bg-black/5 rounded-lg flex items-center font-bold text-sm tracking-tighter font-['Roboto']">
                        {caseStudy.company}
                      </div>
                      <ArrowRight className="text-black/20 group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="font-['Roboto'] font-black text-3xl uppercase tracking-tighter mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-black/60 font-['Inter'] text-sm mt-4 line-clamp-2">
                      {caseStudy.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-black/5 flex items-center gap-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-bold uppercase text-xs tracking-widest font-['Inter']">
                      {caseStudy.sector}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. TESTIMONIAL */}
      {testimonial && (
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl text-black/10 mb-8">"</div>
              <blockquote className="text-2xl md:text-3xl font-['Roboto'] font-bold leading-relaxed mb-8 text-black">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="h-12 w-12 bg-black/5 rounded-full flex items-center justify-center font-['Roboto'] font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-['Roboto'] font-bold">{testimonial.author}</p>
                  <p className="text-sm text-black/60 font-['Inter']">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 7. FAQ SECTION */}
      {faqs.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-[#F2F2F2]">
          <div className="max-w-4xl mx-auto">
            <SectionHeading surtitre="Support" h2="Questions fréquentes" />
            <div className="mt-12 bg-white rounded-lg p-8">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  q={faq.question} 
                  a={faq.answer} 
                  isOpen={openFaq === i} 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[82.5rem] mx-auto">
          <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#111111] to-[#000000] p-12 md:p-20 text-white">
            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="h1 text-white mb-8">
                  Commençons
                </h2>
                <p className="text-xl text-white/70 mb-12 max-w-md font-['Inter']">
                  Prêt à transformer votre entreprise ? Envoyez-nous un message et recevez une réponse sous 24h.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                      <MessageSquare size={20} />
                    </div>
                    <span className="font-medium font-['Inter']">contact@vizion.fr</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Zap size={20} />
                    </div>
                    <span className="font-medium font-['Inter']">Audit gratuit de 30 minutes</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[24px] text-black">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="surtitre text-black/40 px-1">Nom complet</label>
                      <input 
                        type="text" 
                        className="w-full bg-[#F2F2F2] border-none rounded-xl p-4 focus:ring-2 focus:ring-black outline-none transition-all font-['Inter']" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="surtitre text-black/40 px-1">Email professionnel</label>
                      <input 
                        type="email" 
                        className="w-full bg-[#F2F2F2] border-none rounded-xl p-4 focus:ring-2 focus:ring-black outline-none transition-all font-['Inter']" 
                        placeholder="john@company.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="surtitre text-black/40 px-1">Votre message</label>
                    <textarea 
                      rows={4} 
                      className="w-full bg-[#F2F2F2] border-none rounded-xl p-4 focus:ring-2 focus:ring-black outline-none transition-all resize-none font-['Inter']" 
                      placeholder="Parlez-nous de vos objectifs..." 
                    />
                  </div>
                  <button className="btn-primary w-full py-5 flex items-center justify-center gap-3 group">
                    Envoyer
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
