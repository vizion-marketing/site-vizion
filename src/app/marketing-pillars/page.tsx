"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Package, 
  Rocket, 
  TrendingUp, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  Users,
  BarChart3
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---

const PILLARS_SMALL = [
  {
    id: "02",
    title: "Marketing Produit",
    description: "Adapter votre offre aux besoins réels du marché et optimiser l'expérience utilisateur.",
    icon: Package,
    tags: ["UX/UI", "POSITIONNEMENT", "PRICING"],
    progress: 85,
    progressLabel: "Score d'innovation"
  },
  {
    id: "03",
    title: "Activation",
    description: "Transformer l'intérêt en action immédiate via des campagnes d'acquisition chirurgicales.",
    icon: Rocket,
    tags: ["SOCIAL ADS", "BRANDING", "EVENTS"],
    progress: 92,
    progressLabel: "Taux de conversion"
  },
  {
    id: "04",
    title: "Growth & Lead Gen",
    description: "Industrialiser la génération de prospects qualifiés et booster votre visibilité organique.",
    icon: TrendingUp,
    tags: ["SEO", "RETARGETING", "CONTENT"],
    progress: 78,
    progressLabel: "Volume de leads"
  },
  {
    id: "05",
    title: "CRM & Automation",
    description: "Fidéliser vos clients et automatiser vos cycles de vente pour une efficacité maximale.",
    icon: Settings,
    tags: ["HUBSPOT", "WORKFLOWS", "DATA"],
    progress: 88,
    progressLabel: "Rétention client"
  }
];

const TEAM = [
  { name: "Marc Lefebvre", role: "Head of Strategy", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100" },
  { name: "Sophie Chen", role: "Growth Expert", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100" },
  { name: "Lucas Meyer", role: "Automation Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100" },
];

// --- Components ---

const SmallCard = ({ pillar, index }: { pillar: typeof PILLARS_SMALL[0]; index: number }) => {
  const Icon = pillar.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white border border-neutral-200 rounded-[var(--radius-lg)] p-[var(--space-lg)] flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div>
        <div className="flex justify-between items-start mb-[var(--space-md)]">
          <div className="p-[var(--space-sm)] bg-neutral-50 rounded-[var(--radius-md)] group-hover:bg-black group-hover:text-white transition-colors duration-300">
            <Icon size={20} strokeWidth={1.5} />
          </div>
          <span className="text-[10px] font-bold text-neutral-300 tracking-widest font-mono">
            PILIER {pillar.id}
          </span>
        </div>
        <h3 className="font-['Roboto'] font-bold text-sm tracking-wider uppercase mb-[var(--space-sm)] text-neutral-900">
          {pillar.title}
        </h3>
        <p className="font-['Inter'] text-xs text-neutral-500 leading-relaxed mb-[var(--space-lg)]">
          {pillar.description}
        </p>
      </div>

      <div>
        <div className="mb-[var(--space-md)]">
          <div className="flex justify-between text-[10px] font-bold mb-1 text-neutral-400">
            <span>{pillar.progressLabel}</span>
            <span>{pillar.progress}%</span>
          </div>
          <div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${pillar.progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-neutral-900" 
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {pillar.tags.map((tag) => (
            <span key={tag} className="text-[9px] font-bold tracking-tighter text-neutral-400 border border-neutral-100 px-1.5 py-0.5 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function MarketingPillarsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 selection:bg-black selection:text-white">
      {/* Header Section */}
      <section className="section-padding container-wide mx-auto px-4 pt-[var(--space-4xl)] pb-[var(--space-2xl)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="font-['Roboto'] font-extrabold text-3xl md:text-5xl tracking-tight leading-[1.1] text-black uppercase mb-[var(--space-lg)]">
            On intervient sur <span className="text-neutral-400">5 piliers</span> pour améliorer votre performance marketing & commerciale
          </h1>
          <p className="font-['Inter'] text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Une approche holistique du cycle de vente : de la définition de votre vision stratégique jusqu'à l'automatisation de vos revenus.
          </p>
        </motion.div>
      </section>

      {/* Main Grid Section */}
      <section className="container-wide mx-auto px-4 pb-[var(--space-4xl)]">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-[var(--space-lg)] items-stretch">
          
          {/* Large Card: Pillar 01 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative group overflow-hidden bg-neutral-950 rounded-[var(--radius-xl)] flex flex-col text-white"
          >
            {/* Background Texture/Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1),transparent)]" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
            </div>

            <div className="relative z-10 p-[var(--space-2xl)] md:p-[var(--space-3xl)] flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-[var(--space-xl)]">
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Target className="text-white" size={24} />
                </div>
                <div className="h-[1px] w-12 bg-white/20" />
                <span className="font-mono text-sm tracking-[0.3em] text-neutral-500 uppercase">Pilier 01</span>
              </div>

              <h2 className="font-['Roboto'] text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-[var(--space-md)]">
                Vision & <br />Stratégie
              </h2>
              
              <p className="font-['Inter'] text-neutral-400 text-lg mb-[var(--space-xl)] max-w-md leading-relaxed">
                Le socle de toute croissance durable. Nous auditons votre existant pour définir une roadmap chiffrée et alignée sur vos objectifs business.
              </p>

              <ul className="space-y-[var(--space-md)] mb-[var(--space-2xl)]">
                {[
                  "Audit complet des KPIs & Tracking actuel",
                  "Définition du 'Ideal Customer Profile' (ICP)",
                  "Roadmap d'exécution trimestrielle",
                  "Analyse concurrentielle & Benchmarking"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center gap-3 text-neutral-200"
                  >
                    <CheckCircle2 size={18} className="text-neutral-500" />
                    <span className="font-['Inter'] font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Visual Element / Illustration Mock */}
              <div className="mt-auto pt-[var(--space-xl)] relative">
                <div className="absolute -right-10 -bottom-10 opacity-30 blur-3xl w-64 h-64 bg-white/10 rounded-full" />
                <div className="bg-neutral-900/50 border border-white/5 rounded-[var(--radius-lg)] p-[var(--space-lg)] backdrop-blur-md">
                  <div className="flex items-end gap-2 h-24">
                    {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.8 + (i * 0.05) }}
                        className="flex-1 bg-gradient-to-t from-neutral-800 to-neutral-400 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-3 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    <span>Baseline</span>
                    <span>Projection +240%</span>
                  </div>
                </div>
              </div>

              <div className="mt-[var(--space-2xl)]">
                <button className="group/btn relative px-8 py-4 bg-white text-black font-['Roboto'] font-bold uppercase text-sm tracking-widest rounded-full overflow-hidden transition-all hover:pr-12">
                  <span className="relative z-10 flex items-center gap-2">
                    J'analyse mes KPIs marketing actuels
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Grid: Small Cards */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[var(--space-md)]">
            {PILLARS_SMALL.map((pillar, idx) => (
              <SmallCard key={pillar.id} pillar={pillar} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Team Section */}
      <footer className="bg-white border-t border-neutral-100 py-[var(--space-3xl)]">
        <div className="container-wide mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-[var(--space-2xl)]">
          <div className="flex items-center gap-8">
            <div className="flex -space-x-4">
              {TEAM.map((member, i) => (
                <div 
                  key={i} 
                  className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-neutral-100 shadow-sm"
                  title={`${member.name} - ${member.role}`}
                >
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-['Roboto'] font-bold text-xs uppercase tracking-widest text-neutral-400 mb-1">Expertise Humaine</p>
              <p className="font-['Inter'] text-sm text-neutral-600">Nos experts vous accompagnent sur chaque pilier.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-[var(--space-lg)]">
             <div className="text-right hidden sm:block">
               <p className="font-['Roboto'] font-bold text-xl text-black">PRÊT À ACCÉLÉRER ?</p>
               <p className="font-['Inter'] text-xs text-neutral-400">Réponse sous 24h ouvrées.</p>
             </div>
             <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-10 py-5 rounded-[var(--radius-md)] font-['Roboto'] font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-3 transition-shadow hover:shadow-2xl hover:shadow-black/20"
             >
              Découvrir notre expertise
              <ArrowRight size={16} />
             </motion.button>
          </div>
        </div>
        
        <div className="container-wide mx-auto px-4 mt-[var(--space-3xl)] pt-[var(--space-xl)] border-t border-neutral-50 flex flex-col md:flex-row justify-between text-[10px] text-neutral-400 font-mono uppercase tracking-[0.2em]">
          <span>© 2024 Performance Marketing Agency</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-black transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}