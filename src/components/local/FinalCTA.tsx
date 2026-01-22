"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { BentoBox } from '@/components/ui/BentoBox';

interface FinalCTAProps {
  city: string;
  reassurancePoints?: string[];
}

const DEFAULT_REASSURANCE = [
  "Réponse en moins de 24h",
  "Audit gratuit de 30min",
  "Sans engagement",
];

const FinalCTA: React.FC<FinalCTAProps> = ({ 
  city, 
  reassurancePoints = DEFAULT_REASSURANCE 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Left content: Form
  const leftContent = (
    <div className="space-y-8">
      <div>
        <h2 className="font-['Roboto'] text-3xl md:text-4xl font-black uppercase tracking-tight text-black mb-4">
          Prêt à accélérer <br />à <span className="underline decoration-2 underline-offset-4">{city}</span> ?
        </h2>
        <p className="font-['Inter'] text-neutral-600 text-lg">
          Décrivez-nous votre projet. Notre équipe vous recontacte pour une analyse stratégique.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block font-['Inter'] text-[11px] font-bold uppercase tracking-widest text-neutral-500">
              Nom Complet
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jean Dupont"
              className="w-full bg-white border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black transition-all duration-200 outline-none rounded-xl py-4 px-5 font-['Inter'] text-neutral-900 placeholder:text-neutral-400"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block font-['Inter'] text-[11px] font-bold uppercase tracking-widest text-neutral-500">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="06 12 34 56 78"
              className="w-full bg-white border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black transition-all duration-200 outline-none rounded-xl py-4 px-5 font-['Inter'] text-neutral-900 placeholder:text-neutral-400"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block font-['Inter'] text-[11px] font-bold uppercase tracking-widest text-neutral-500">
            Email Professionnel
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="contact@votreentreprise.com"
            className="w-full bg-white border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black transition-all duration-200 outline-none rounded-xl py-4 px-5 font-['Inter'] text-neutral-900 placeholder:text-neutral-400"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block font-['Inter'] text-[11px] font-bold uppercase tracking-widest text-neutral-500">
            Votre Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Quels sont vos objectifs ?"
            className="w-full bg-white border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black transition-all duration-200 outline-none rounded-xl py-4 px-5 font-['Inter'] text-neutral-900 placeholder:text-neutral-400 resize-none"
            required
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-black text-white py-5 rounded-xl font-['Roboto'] font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-colors hover:bg-neutral-800 shadow-xl shadow-black/10"
        >
          Envoyer ma demande
          <Send size={18} />
        </motion.button>
        
        <p className="font-['Inter'] text-[10px] text-center text-neutral-400 pt-2">
          En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
        </p>
      </form>
    </div>
  );

  // Right content: Reassurance
  const rightContent = (
    <div className="space-y-8 h-full flex flex-col justify-center">
      <h3 className="font-['Roboto'] font-black text-2xl uppercase tracking-tight text-black">
        Pourquoi nous ?
      </h3>
      
      <div className="space-y-6">
        {reassurancePoints.map((point, index) => (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index} 
            className="flex items-start gap-4 group"
          >
            <div className="mt-1 bg-black rounded-full p-1.5 text-white group-hover:scale-110 transition-transform">
              <CheckCircle2 size={16} />
            </div>
            <div className="space-y-1">
              <p className="font-['Roboto'] font-bold text-black text-lg leading-tight uppercase">
                {point}
              </p>
              <p className="font-['Inter'] text-sm text-neutral-500">
                Expertise locale garantie à {city}.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto pt-8 border-t border-neutral-200">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                <img 
                  src={`https://i.pravatar.cc/100?u=expert${i + 20}`} 
                  alt="Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="font-['Inter'] text-sm text-neutral-600">
            <span className="font-bold text-black">+50 entreprises</span> accompagnées ce mois-ci.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[82.5rem] mx-auto">
      <BentoBox 
        variant="asymmetric"
        leftContent={leftContent}
        rightContent={rightContent}
      />
    </section>
  );
};

export default FinalCTA;
export { FinalCTA };
