"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Users,
  ChevronDown,
  Send
} from "lucide-react";
import { ImagePlaceholder } from "@/components/ui";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Une erreur est survenue');
      }

      setFormStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden font-[var(--font-body)] selection:bg-[#D4FD00] selection:text-black">
      {/* HERO SECTION - GRADIENT & CARBON TEXTURE */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 md:px-8 lg:px-12 overflow-hidden bg-black dark-section">
        {/* Base + radial gradients jaune Vizion animés */}
        <div className="absolute inset-0 z-0 grain-overlay" style={{ background: "#0c0c0a" }}>
          <div
            className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[50%] h-[50%] bottom-[5%] right-[-15%] animate-gradient-float-4"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.05) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[45%] h-[45%] top-[20%] left-[-10%] animate-gradient-float-5"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
            }}
          />
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-10" />

        {/* Layout Container */}
        <div className="relative z-20 max-w-[82.5rem] w-full grid grid-cols-1 lg:grid-cols-10 gap-8 items-stretch">
          
          {/* COLONNE GAUCHE - FORMULAIRE (55%) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-none p-8 md:p-12 h-full flex flex-col">
              
              {/* Status Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#D4FD00] opacity-75"></span>
                  <span className="relative inline-flex rounded-none h-3 w-3 bg-[#D4FD00]"></span>
                </span>
                <span className="text-[10px] font-bold text-white/80 tracking-[0.2em]">
                  Nous sommes disponibles
                </span>
              </div>

              {/* Header Text */}
              <h1 className="font-heading font-normal text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[0.95] mb-4">
                Parlons de <br />
                <span className="text-white/40">votre projet</span>
              </h1>
              <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed">
                Une question, un projet ? Notre équipe est à votre écoute pour vous accompagner dans votre transformation digitale.
              </p>

              {/* Formulaire */}
              <form onSubmit={handleSubmit} className="space-y-5 flex-grow">
                {/* Success Message */}
                {formStatus === 'success' && (
                  <div className="bg-[#D4FD00]/20 border border-[#D4FD00]/40 rounded-none p-4 mb-4">
                    <p className="text-[#D4FD00] text-sm font-medium">
                      Message envoyé avec succès ! Nous vous répondrons sous 24h.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {formStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/40 rounded-none p-4 mb-4">
                    <p className="text-red-400 text-sm font-medium">
                      {errorMessage}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.15em] text-white/40 font-bold ml-1">Prénom *</label>
                    <input
                      required
                      name="firstName"
                      type="text"
                      placeholder="Jean"
                      className="w-full bg-white/10 border border-white/20 rounded-none px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.15em] text-white/40 font-bold ml-1">Nom *</label>
                    <input
                      required
                      name="lastName"
                      type="text"
                      placeholder="Dupont"
                      className="w-full bg-white/10 border border-white/20 rounded-none px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.15em] text-white/40 font-bold ml-1">Email professionnel *</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="contact@entreprise.com"
                    className="w-full bg-white/10 border border-white/20 rounded-none px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.15em] text-white/40 font-bold ml-1">Entreprise</label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Nom de votre entreprise"
                      className="w-full bg-white/10 border border-white/20 rounded-none px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.15em] text-white/40 font-bold ml-1">Sujet *</label>
                    <div className="relative">
                      <select
                        required
                        name="subject"
                        className="w-full bg-white/10 border border-white/20 rounded-none px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-white/60 transition-all duration-300 cursor-pointer"
                      >
                        <option className="bg-zinc-900 text-white" value="">Sélectionnez un sujet</option>
                        <option className="bg-zinc-900 text-white" value="projet">Nouveau projet</option>
                        <option className="bg-zinc-900 text-white" value="question">Question générale</option>
                        <option className="bg-zinc-900 text-white" value="autre">Autre</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.15em] text-white/40 font-bold ml-1">Message *</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Décrivez brièvement votre projet ou votre demande..."
                    className="w-full bg-white/10 border border-white/20 rounded-none px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-white/60 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-none flex items-center justify-center gap-3 mt-6 group disabled:opacity-70 disabled:cursor-not-allowed text-[15px] font-[var(--font-body)] font-semibold tracking-[-0.01em] transition-all duration-300 bg-[#D4FD00]/90 backdrop-blur-xl text-black border border-[#D4FD00]/50 shadow-[0_4px_24px_-1px_rgba(212,253,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:bg-[#D4FD00] hover:shadow-[0_8px_32px_-4px_rgba(212,253,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.4)]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-none animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
                
                <p className="text-[10px] text-white/30 text-center mt-4">
                  En envoyant ce formulaire, vous acceptez notre{" "}
                  <Link href="/confidentialite" className="underline hover:text-white/50 transition-colors">
                    politique de confidentialité
                  </Link>.
                </p>
              </form>
            </div>
          </motion.div>

          {/* COLONNE DROITE - PHOTO (45%) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative group min-h-[600px] hidden lg:block"
          >
            {/* Decorative Corners */}
            <div className="absolute top-[-12px] right-[-12px] w-20 h-20 border-t-2 border-r-2 border-[#D4FD00]/40 z-30 transition-all duration-500 group-hover:w-24 group-hover:h-24" />
            <div className="absolute bottom-[-12px] left-[-12px] w-16 h-16 border-b-2 border-l-2 border-white/40 z-30 transition-all duration-500 group-hover:w-20 group-hover:h-20" />

            {/* Main Image Container */}
            <div className="relative h-full w-full rounded-none overflow-hidden transition-all duration-700 ease-out shadow-2xl">
              <ImagePlaceholder
                width={400}
                height={600}
                label="Portrait expert commercial"
                rounded="none"
                variant="dark"
                className="w-full h-full"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

              {/* Floating Contact Card */}
              <div className="absolute bottom-6 inset-x-6 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-none space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-heading font-normal text-lg tracking-tight leading-tight">Lucas Gonzalez</h3>
                    <p className="text-[#D4FD00] text-[10px] font-light tracking-[0.12em]">Directeur Commercial</p>
                  </div>
                  <div className="bg-[#D4FD00] text-black text-[9px] font-black px-2.5 py-1 rounded-none tracking-tight flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-black opacity-75"></span>
                      <span className="relative inline-flex rounded-none h-1.5 w-1.5 bg-black"></span>
                    </span>
                    Réponse 24h
                  </div>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <a href="mailto:contact@by-vizion.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group/link">
                    <div className="w-8 h-8 rounded-none bg-white/5 flex items-center justify-center border border-white/5 group-hover/link:border-white/20 group-hover/link:bg-white/10 transition-all">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm">contact@by-vizion.com</span>
                  </a>
                  <a href="tel:+33750836543" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group/link">
                    <div className="w-8 h-8 rounded-none bg-white/5 flex items-center justify-center border border-white/5 group-hover/link:border-white/20 group-hover/link:bg-white/10 transition-all">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm">07 50 83 65 43</span>
                  </a>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-8 h-8 rounded-none bg-white/5 flex items-center justify-center border border-white/5">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm">815 La Pyrénéenne, 31670 Labège</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[5%] w-48 h-48 border border-white/5 rounded-none blur-[2px] pointer-events-none hidden xl:block z-10" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-[3%] w-32 h-32 border border-white/5 rounded-none blur-[2px] pointer-events-none hidden xl:block z-10" 
        />
      </section>

      {/* SECTION BONUS - NOS ENGAGEMENTS */}
      <section className="bg-[#F2F2F2] py-24 relative">
        <div className="max-w-[82.5rem] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-[10px] font-light tracking-[0.12em] text-black/40 mb-4 block">
              Pourquoi nous choisir
            </span>
            <h2 className="font-heading font-normal text-4xl md:text-5xl tracking-tight leading-[0.95]" style={{ color: '#000000' }}>
              Nos engagements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white p-8 rounded-none border border-black/5 group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-none bg-[#D4FD00] flex items-center justify-center text-black mb-6 transform group-hover:rotate-6 transition-transform duration-500">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-normal text-xl tracking-tight mb-3" style={{ color: '#000000' }}>Réactivité 24h</h3>
              <p className="text-black/60 leading-relaxed">
                Le temps est votre ressource la plus précieuse. Nous garantissons une première réponse sous 24h ouvrées maximum.
              </p>
              <div className="h-1 w-12 bg-black/10 group-hover:w-full group-hover:bg-[#D4FD00] transition-all duration-500 mt-6" />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-none border border-black/5 group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-none bg-[#D4FD00] flex items-center justify-center text-black mb-6 transform group-hover:rotate-6 transition-transform duration-500">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-normal text-xl tracking-tight mb-3" style={{ color: '#000000' }}>Expertise B2B</h3>
              <p className="text-black/60 leading-relaxed">
                Spécialistes des environnements complexes, nous comprenons les enjeux de croissance propres aux PME et ETI.
              </p>
              <div className="h-1 w-12 bg-black/10 group-hover:w-full group-hover:bg-[#D4FD00] transition-all duration-500 mt-6" />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-none border border-black/5 group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-none bg-[#D4FD00] flex items-center justify-center text-black mb-6 transform group-hover:rotate-6 transition-transform duration-500">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-normal text-xl tracking-tight mb-3" style={{ color: '#000000' }}>Partenariat long-terme</h3>
              <p className="text-black/60 leading-relaxed">
                Nous ne sommes pas un simple prestataire. Nous devenons votre partenaire stratégique pour une croissance durable.
              </p>
              <div className="h-1 w-12 bg-black/10 group-hover:w-full group-hover:bg-[#D4FD00] transition-all duration-500 mt-6" />
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
