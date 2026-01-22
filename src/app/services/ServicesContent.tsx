"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Check, 
  Layers, 
  Lightbulb, 
  BarChart3, 
  Rocket, 
  Search, 
  Cpu, 
  Target,
  Code,
  Cloud,
  Plug,
  Palette,
  ShieldCheck
} from "lucide-react";
import type { Page } from "contentlayer/generated";

// Icon mapping for dynamic rendering
const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number; size?: number }>> = {
  Lightbulb,
  Cpu,
  Target,
  BarChart3,
  Layers,
  Search,
  Rocket,
  Code,
  Cloud,
  Plug,
  Palette,
  ShieldCheck,
};

interface ServicesContentProps {
  services: Page[];
}

export function ServicesContent({ services }: ServicesContentProps) {
  return (
    <main className="min-h-screen bg-white font-sans text-black overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-black overflow-hidden">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-[82.5rem] mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <span className="surtitre text-white/70 mb-6">
              Notre expertise
            </span>
            <h1 className="h1 text-white mb-8 max-w-4xl">
              NOS SERVICES
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-light leading-relaxed font-['Inter']">
              Nous concevons des écosystèmes numériques sur mesure qui transforment la complexité en avantage concurrentiel. Notre approche allie stratégie de haut niveau et exécution technologique d'excellence.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-[32px] rounded-sm min-w-[200px]">
                <p className="font-['Roboto'] font-black text-3xl text-white mb-1">50+</p>
                <p className="surtitre text-white/60">Projets livrés</p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-[32px] rounded-sm min-w-[200px]">
                <p className="font-['Roboto'] font-black text-3xl text-white mb-1">98%</p>
                <p className="surtitre text-white/60">Satisfaction client</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[82.5rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Roboto'] font-[900] text-[36px] md:text-[48px] leading-tight uppercase tracking-[-1.68px] text-black mb-8">
                Une approche <br />holistique
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-['Inter']">
                Le succès ne repose pas sur un seul pilier. C'est pourquoi nous intégrons chaque aspect de votre vision — de la réflexion stratégique à l'infrastructure technologique — pour créer des solutions cohérentes et scalables.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-['Inter']">
                Notre méthodologie repose sur l'immersion totale dans vos enjeux métiers pour garantir un impact réel sur votre croissance.
              </p>
              <Link href="/contact" className="btn-primary">
                Discutons de votre projet
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video lg:aspect-square bg-gray-50 rounded-sm overflow-hidden border border-gray-100 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 border-[0.5px] border-black/10 rounded-full flex items-center justify-center">
                  <Layers className="text-black/20 w-12 h-12" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID - Dynamic from MDX */}
      <section className="py-24 md:py-32 bg-[#F2F2F2]">
        <div className="max-w-[82.5rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {services.map((service, index) => {
              const IconComponent = ICONS[service.icon || "Layers"] || Layers;
              const isEven = index % 2 === 0;
              const serviceSlug = service.slug.replace("services/", "");
              
              // Extract first 3 features for preview
              const previewFeatures = (service.features as Array<{ title: string }> || [])
                .slice(0, 3)
                .map(f => f.title);
              
              if (isEven) {
                // Dark card style
                return (
                  <motion.div 
                    key={service.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[#0a0a0a] to-[#222] p-[32px] min-h-[540px] flex flex-col justify-between group rounded-sm relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex justify-between items-start mb-12">
                          <span className="font-['Roboto'] font-black text-6xl text-white/10 group-hover:text-white/20 transition-colors duration-500">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                            <IconComponent className="text-white w-5 h-5" strokeWidth={1.5} />
                          </div>
                        </div>
                        <h2 className="font-['Roboto'] font-[900] text-[40px] leading-[1.1] uppercase tracking-[-1.68px] text-white mb-6">
                          {service.title.split(' ').map((word, i) => (
                            <span key={i}>
                              {word}
                              {i === 0 && <br />}
                              {i > 0 && ' '}
                            </span>
                          ))}
                        </h2>
                        <p className="text-white/70 text-lg font-light mb-8 max-w-sm font-['Inter']">
                          {service.description}
                        </p>
                        <ul className="space-y-4 mb-12">
                          {previewFeatures.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white/80 font-['Inter'] text-[14px]">
                              <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                                <Check className="w-2.5 h-2.5 text-white" />
                              </div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link 
                        href={`/services/${serviceSlug}`} 
                        className="flex items-center gap-2 w-fit px-8 py-4 bg-white text-black font-['Inter'] text-[13px] uppercase tracking-widest font-bold hover:gap-4 transition-all"
                      >
                        Explorer <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              } else {
                // Light card style
                return (
                  <motion.div 
                    key={service.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-[32px] md:p-[48px] min-h-[540px] flex flex-col justify-between group rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-12">
                        <span className="font-['Roboto'] font-black text-6xl text-black/5 group-hover:text-black/10 transition-colors duration-500">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center">
                          <IconComponent className="text-black w-5 h-5" strokeWidth={1.5} />
                        </div>
                      </div>
                      <h2 className="font-['Roboto'] font-[900] text-[40px] leading-[1.1] uppercase tracking-[-1.68px] text-black mb-6">
                        {service.title.split(' ').map((word, i) => (
                          <span key={i}>
                            {word}
                            {i === 0 && <br />}
                            {i > 0 && ' '}
                          </span>
                        ))}
                      </h2>
                      <p className="text-gray-500 text-lg font-light mb-8 max-w-sm font-['Inter']">
                        {service.description}
                      </p>
                      <ul className="space-y-4 mb-12">
                        {previewFeatures.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-700 font-['Inter'] text-[14px]">
                            <div className="w-4 h-4 rounded-full bg-black/5 flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-black" />
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      href={`/services/${serviceSlug}`} 
                      className="flex items-center gap-2 w-fit px-8 py-4 bg-black text-white font-['Inter'] text-[13px] uppercase tracking-widest font-bold hover:gap-4 transition-all"
                    >
                      Explorer <ChevronRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                );
              }
            })}
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-[82.5rem] mx-auto px-6">
          <div className="mb-20">
            <span className="surtitre text-black/40 mb-4 block">
              Work flow
            </span>
            <h2 className="h2">
              Notre méthode
            </h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-10"></div>
            
            {[
              { title: "Immersion", desc: "Comprendre votre écosystème et vos défis.", icon: Search },
              { title: "Stratégie", desc: "Planifier l'architecture et les technologies.", icon: Target },
              { title: "Exécution", desc: "Développement agile avec sprints réguliers.", icon: Rocket },
              { title: "Optimisation", desc: "Monitoring et amélioration continue.", icon: BarChart3 },
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow group relative"
              >
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold mb-6 text-sm relative z-10 group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <div className="mb-6 text-gray-400 group-hover:text-black transition-colors">
                  <step.icon strokeWidth={1.5} size={32} />
                </div>
                <h3 className="font-['Roboto'] font-black text-xl uppercase mb-3 tracking-tight">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-['Inter']">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[82.5rem] mx-auto rounded-sm bg-gradient-to-br from-[#0a0a0a] to-[#222] p-12 md:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="h2 text-white mb-8 max-w-2xl">
              Discutons de votre <br />prochain projet
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl font-['Inter']">
              Transformez vos idées en solutions concrètes. Nos experts sont prêts à vous accompagner dans votre transformation digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary !bg-white !text-black hover:!bg-gray-100">
                Prendre rendez-vous
              </Link>
              <Link href="/contact" className="btn-secondary !border-white/20 !text-white hover:!bg-white/5">
                Nous contacter
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
