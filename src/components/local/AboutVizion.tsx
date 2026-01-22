"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AboutVizionProps {
  content?: string;
  image?: string;
}

const DEFAULT_CONTENT = "Nous croyons que chaque stratégie marketing doit être unique. Vizion est née d'une volonté de repousser les limites de la performance digitale, en alliant une approche data-driven à une vision créative sans compromis. Notre mission : transformer vos ambitions en résultats concrets.";
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000";

const AboutVizion: React.FC<AboutVizionProps> = ({ 
  content = DEFAULT_CONTENT, 
  image = DEFAULT_IMAGE 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center bg-white overflow-hidden py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block font-['Inter'] text-[11px] font-medium tracking-[0.3em] uppercase text-neutral-400"
              >
                Notre Histoire
              </motion.span>
              
              <h2 className="font-['Roboto'] text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-neutral-900 leading-[0.95]">
                À Propos de <br /><span className="text-neutral-400">Vizion</span>
              </h2>
            </div>

            <div className="relative">
              {/* Decorative accent */}
              <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-neutral-100 hidden md:block" />
              
              <p className="font-['Inter'] text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
                {content}
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <div className="h-1 w-24 bg-black" />
            </motion.div>
          </motion.div>

          {/* Right: Image with Parallax */}
          <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[70vh] group">
            {/* Frame Decor */}
            <div className="absolute -inset-4 border border-neutral-100 rounded-2xl -z-10 transition-transform duration-700 group-hover:scale-[1.02]" />
            
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
              <motion.div 
                style={{ y }}
                className="relative w-full h-[120%] -top-[10%]"
              >
                <img 
                  src={image} 
                  alt="Vizion Team" 
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
              </motion.div>
            </div>

            {/* Floating Detail */}
            <motion.div 
              style={{ opacity }}
              className="absolute -bottom-8 -left-8 bg-black text-white p-6 rounded-xl hidden lg:block shadow-2xl"
            >
              <p className="font-['Inter'] text-[10px] tracking-widest uppercase opacity-50 mb-1">Perspective</p>
              <p className="font-['Roboto'] text-lg font-bold uppercase tracking-tight">Vizion 2026</p>
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50/50 -z-20 skew-x-[-12deg] translate-x-1/2" />
    </section>
  );
};

export default AboutVizion;
export { AboutVizion };
