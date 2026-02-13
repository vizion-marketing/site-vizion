"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2, Phone } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    // Simulate form submission - replace with actual API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormState("success");
      setTimeout(() => {
        onClose();
        setFormState("idle");
        setFormData({ name: "", email: "", company: "", message: "" });
      }, 2000);
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl mx-4 z-50"
          >
            <div className="bg-white rounded-none shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Left - Form */}
                <div className="p-8 lg:p-10">
                  {/* Close button - mobile only shows here */}
                  <button
                    onClick={onClose}
                    className="lg:hidden absolute top-4 right-4 p-2 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-none transition-colors z-10"
                    aria-label="Fermer"
                  >
                    <X size={20} />
                  </button>

                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-normal tracking-tight text-black mb-2">
                      Nous contacter
                    </h2>
                    <p className="text-neutral-600 text-sm">
                      Lucas reviendra vers vous dans moins de 24h
                    </p>
                  </div>

                  {/* Form */}
                  {formState === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-[#D4FD00] rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={32} className="text-black" />
                      </div>
                      <h3 className="font-heading text-xl text-black mb-2">Message envoyé !</h3>
                      <p className="text-neutral-600 text-sm">
                        Lucas vous recontactera dans les 24h.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-xs font-bold text-neutral-600 mb-1.5">
                            Nom *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#F2F2F2] border-0 rounded-none text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4FD00]"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-xs font-bold text-neutral-600 mb-1.5">
                            Entreprise
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#F2F2F2] border-0 rounded-none text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4FD00]"
                            placeholder="Nom de l'entreprise"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-neutral-600 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#F2F2F2] border-0 rounded-none text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4FD00]"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-neutral-600 mb-1.5">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#F2F2F2] border-0 rounded-none text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4FD00] resize-none"
                          placeholder="Décrivez votre projet ou vos enjeux..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formState === "loading"}
                        className="w-full h-12 bg-black text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formState === "loading" ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Envoyer le message
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-neutral-400 text-center">
                        En soumettant ce formulaire, vous acceptez d'être recontacté par Vizion.
                      </p>

                      {/* Divider */}
                      <div className="flex items-center gap-4 my-2">
                        <div className="flex-1 h-px bg-neutral-200" />
                        <span className="text-xs text-neutral-400 font-medium">ou</span>
                        <div className="flex-1 h-px bg-neutral-200" />
                      </div>

                      {/* Phone CTA */}
                      <a
                        href="tel:+33750836543"
                        className="w-full h-12 bg-[#F2F2F2] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
                      >
                        <Phone size={16} />
                        07 50 83 65 43
                      </a>
                    </form>
                  )}
                </div>

                {/* Right - Photo */}
                <div className="hidden lg:block relative bg-[#0c0c0a]">
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-none transition-colors z-10"
                    aria-label="Fermer"
                  >
                    <X size={20} />
                  </button>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 pointer-events-none z-[1]">
                    <div
                      className="absolute w-full h-1/2 bottom-0 left-0"
                      style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                      }}
                    />
                    <div
                      className="absolute w-[60%] h-[60%] top-0 right-0"
                      style={{
                        background:
                          "radial-gradient(ellipse 100% 100% at 100% 0%, rgba(212, 253, 0, 0.2) 0%, transparent 60%)",
                      }}
                    />
                  </div>

                  {/* Photo */}
                  <Image
                    src="/images/team/lucas.jpg"
                    alt="Lucas Gonzalez - Fondateur Vizion"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 0vw, 50vw"
                  />

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-[2]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-[#D4FD00] rounded-full animate-pulse" />
                      <span className="text-[11px] font-bold tracking-widest text-white/80">
                        RÉPONSE SOUS 24H
                      </span>
                    </div>
                    <p className="text-white text-lg font-medium leading-relaxed">
                      "Je lis personnellement chaque message et reviens vers vous rapidement."
                    </p>
                    <p className="text-white/60 text-sm mt-2">
                      — Lucas Gonzalez, Fondateur
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
