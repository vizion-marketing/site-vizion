"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface LocalHeroNewProps {
  city: string;
  title: string;
  subtitle: string;
  benefits: string[];
}

const LocalHeroNew: React.FC<LocalHeroNewProps> = ({
  city,
  title,
  subtitle,
  benefits,
}) => {
  const [email, setEmail] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Parse title to replace {city} placeholder
  const displayTitle = title.replace(/\{city\}/gi, city);

  return (
    <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden px-6 py-24 selection:bg-white selection:text-black">
      {/* Background: Gradient + Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(117deg, #B7B7B7 0%, #000 50.77%, #6D6D6D 100.58%)'
        }}
      />
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-5xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Surtitre */}
        <motion.span 
          variants={itemVariants}
          className="font-['Inter'] text-[11px] uppercase tracking-[0.3em] text-white/60 mb-8 block"
        >
          Agence Marketing Local • {city}
        </motion.span>

        {/* H1 Title */}
        <motion.h1 
          variants={itemVariants}
          className="font-['Roboto'] font-black text-4xl md:text-6xl lg:text-7xl leading-[0.95] uppercase tracking-tighter text-white mb-8"
        >
          {displayTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="font-['Inter'] text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Email Capture Form */}
        <motion.form 
          variants={itemVariants}
          onSubmit={(e) => { e.preventDefault(); }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-2xl mx-auto"
        >
          <div className="relative w-full">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email professionnel"
              required
              className="w-full h-14 px-6 rounded-full bg-white text-black font-['Inter'] text-sm outline-none transition-all focus:ring-4 focus:ring-white/20 placeholder:text-black/40"
            />
          </div>
          <button 
            type="submit"
            className="group whitespace-nowrap h-14 px-8 rounded-full bg-white text-black font-['Roboto'] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:bg-neutral-200 active:scale-95"
          >
            Obtenir mon audit gratuit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>

        {/* Benefits Pills */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3"
        >
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full"
            >
              <CheckCircle className="w-3.5 h-3.5 text-white/70" />
              <span className="font-['Inter'] text-[11px] font-medium uppercase tracking-[1.65px] text-white/80">
                {benefit}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default LocalHeroNew;
export { LocalHeroNew };
