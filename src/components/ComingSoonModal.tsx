"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2, Phone, Construction } from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.name,
          lastName: "",
          email: formData.email,
          company: formData.company,
          subject: "autre",
          message: `[Page en construction] ${formData.message}`,
        }),
      });

      if (!res.ok) throw new Error("Erreur");
      setFormState("success");
      setTimeout(() => {
        onClose();
        setFormState("idle");
        setFormData({ name: "", email: "", company: "", message: "" });
      }, 2500);
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-4 z-50"
          >
            <div className="bg-white rounded-none shadow-2xl overflow-hidden">
              <div className="p-8 lg:p-10">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-none transition-colors z-10"
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>

                {/* Header - Coming Soon */}
                <div className="mb-8">
                  <div className="w-12 h-12 bg-accent flex items-center justify-center mb-4">
                    <Construction size={24} className="text-black" />
                  </div>
                  <h2 className="font-heading text-2xl lg:text-3xl font-normal tracking-tight text-black mb-2">
                    Page en construction
                  </h2>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Cette page arrive très bientôt. En attendant, contactez-nous directement et nous vous répondrons sous 24h.
                  </p>
                </div>

                {/* Form */}
                {formState === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-black" />
                    </div>
                    <h3 className="font-heading text-xl text-black mb-2">Message envoy&eacute; !</h3>
                    <p className="text-neutral-600 text-sm">
                      Nous vous recontacterons dans les 24h.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cs-name" className="block text-xs font-bold text-neutral-600 mb-1.5">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="cs-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-grey border-0 rounded-none text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="cs-company" className="block text-xs font-bold text-neutral-600 mb-1.5">
                          Entreprise
                        </label>
                        <input
                          type="text"
                          id="cs-company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-grey border-0 rounded-none text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                          placeholder="Nom de l'entreprise"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cs-email" className="block text-xs font-bold text-neutral-600 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="cs-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-grey border-0 rounded-none text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="cs-message" className="block text-xs font-bold text-neutral-600 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="cs-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-grey border-0 rounded-none text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] resize-none"
                        placeholder="Parlez-nous de votre projet..."
                      />
                    </div>

                    {formState === "error" && (
                      <p className="text-red-500 text-sm text-center">
                        Une erreur est survenue. Veuillez r&eacute;essayer.
                      </p>
                    )}

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

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-1">
                      <div className="flex-1 h-px bg-neutral-200" />
                      <span className="text-xs text-neutral-400 font-medium">ou</span>
                      <div className="flex-1 h-px bg-neutral-200" />
                    </div>

                    {/* Phone CTA */}
                    <a
                      href="tel:+33750836543"
                      className="w-full h-12 bg-grey text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
                    >
                      <Phone size={16} />
                      07 50 83 65 43
                    </a>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
