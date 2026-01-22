"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PillsBar } from '@/components/ui/PillsBar';
import { CheckCircle2, Zap } from 'lucide-react';

interface UseCase {
  id: string;
  label: string;
  description: string;
  image: string;
  features: string[];
}

interface AIMarketingSectionProps {
  useCases?: UseCase[];
}

const DEFAULT_USE_CASES: UseCase[] = [
  { 
    id: 'seo', 
    label: 'SEO IA', 
    description: 'Dominez les résultats de recherche grâce à notre moteur prédictif qui anticipe les intentions utilisateurs avant vos concurrents.', 
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', 
    features: ['Audit Automatisé', 'Cluster Sémantique', 'Backlink Scoring', 'Prédiction de Trend'] 
  },
  { 
    id: 'data', 
    label: 'Data Analysis', 
    description: 'Transformez vos flux de données brutes en décisions stratégiques. Notre IA identifie les patterns invisibles à l\'œil humain.', 
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800', 
    features: ['Churn Prediction', 'LTV Forecasting', 'Segment Dynamique', 'Dashboard Real-time'] 
  },
  { 
    id: 'content', 
    label: 'Content Scale', 
    description: 'Produisez du contenu de haute qualité à une échelle industrielle tout en préservant la voix unique de votre marque.', 
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', 
    features: ['Brand Voice Sync', 'Multi-canal Export', 'A/B Testing Auto', 'Asset Generation'] 
  }
];

const AIMarketingSection: React.FC<AIMarketingSectionProps> = ({ useCases = DEFAULT_USE_CASES }) => {
  const [activeTab, setActiveTab] = useState(useCases[0]?.id || '');

  const activeContent = useMemo(
    () => useCases.find((uc) => uc.id === activeTab) || useCases[0],
    [activeTab, useCases]
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  if (!useCases || useCases.length === 0) return null;

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Background */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 space-y-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Inter'] text-[11px] uppercase tracking-[0.3em] text-white/50"
          >
            Notre Différenciation
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Roboto'] text-4xl md:text-6xl font-black uppercase tracking-tighter text-center leading-[0.95]"
            style={{ 
              background: 'linear-gradient(117deg, #B7B7B7 0%, #FFF 50.77%, #6D6D6D 100.58%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            L'IA au Service <br /> de Votre Marketing
          </motion.h2>

          {/* Pills Selector */}
          <div className="w-full max-w-2xl flex justify-center">
            <PillsBar 
              items={useCases.map(uc => ({ id: uc.id, label: uc.label }))}
              activeId={activeTab}
              onSelect={setActiveTab}
              variant="selector"
            />
          </div>
        </div>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[500px]"
          >
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  className="h-1 bg-white mb-6"
                />
                <h3 className="font-['Roboto'] text-3xl font-black uppercase mb-6 tracking-tight">
                  {activeContent.label}
                </h3>
                <p className="font-['Inter'] text-xl text-neutral-400 leading-relaxed max-w-xl">
                  {activeContent.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeContent.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <span className="font-['Inter'] text-sm font-medium tracking-wide uppercase text-neutral-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative order-1 lg:order-2 group">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
                style={{
                  background: 'linear-gradient(117deg, #B7B7B7 0%, #000 50.77%, #6D6D6D 100.58%)'
                }}
              >
                <img 
                  src={activeContent.image} 
                  alt={activeContent.label}
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />

                {/* Data Overlay */}
                <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-white/50">Performance IA</p>
                      <p className="text-2xl font-mono font-bold tracking-tighter">+84.2%</p>
                    </div>
                    <div className="flex gap-1 h-8 items-end">
                      {[40, 70, 45, 90, 65, 80].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                          className="w-1 bg-white/60 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <p className="font-['Inter'] text-sm text-neutral-500 uppercase tracking-widest">
            Propulsé par <span className="text-white">Neural Engine V4</span>
          </p>
          
          <button className="px-8 py-4 bg-white text-black font-['Roboto'] text-xs font-black uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all active:scale-95 flex items-center gap-4">
            Découvrir l'Ecosystème
            <Zap size={14} fill="currentColor" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIMarketingSection;
export { AIMarketingSection };
