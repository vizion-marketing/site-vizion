"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  /** Grid column span: 1 = half width, 2 = full width */
  colSpan?: 1 | 2;
}

export interface ContactFormSectionProps {
  surtitre?: string;
  title: string;
  description?: string;
  fields: ContactFormField[];
  submitText?: string;
  contactInfo?: ContactInfo[];
  /** Called on form submit with FormData */
  onSubmit?: (data: Record<string, string>) => Promise<void>;
  variant?: "light" | "dark";
}

export function ContactFormSection({
  surtitre,
  title,
  description,
  fields,
  submitText = "Envoyer",
  contactInfo,
  onSubmit,
  variant = "light",
}: ContactFormSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const isDark = variant === "dark";
  const bg = isDark ? "var(--bg-dark)" : "var(--bg-card)";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onSubmit) return;

    setIsSubmitting(true);
    setFormStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => { data[key] = value as string; });

    try {
      await onSubmit(data);
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = isDark
    ? "bg-white/5 border border-white/10 text-primary placeholder-white/30 focus:border-accent/50 focus:ring-1 focus:ring-[var(--color-accent)]/20"
    : "bg-white border border-black/10 text-primary placeholder-black/30 focus:border-accent focus:ring-1 focus:ring-[var(--color-accent)]/20";

  const labelClass = "text-muted";

  return (
    <section
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay dark-section" : "grain-light"}`}
      style={{ background: bg }}
    >
      {isDark && (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-gradient-float-1 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 55%)" }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] animate-gradient-float-2 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)" }} />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] animate-gradient-float-3 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 55%)" }} />
        </>
      )}
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            {surtitre && (
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase text-muted">
                  {surtitre}
                </span>
              </div>
            )}

            <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[40px] leading-[1.08] tracking-[-0.02em] mb-4 sm:mb-5 text-primary">
              {title}
            </h2>

            {description && (
              <p className="text-[15px] sm:text-base font-[var(--font-body)] leading-relaxed mb-8 text-muted">
                {description}
              </p>
            )}

            {/* Contact Info */}
            {contactInfo && contactInfo.length > 0 && (
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <div className={`w-10 h-10 flex items-center justify-center ${isDark ? "bg-accent/10" : "bg-accent/10"}`}>
                      <info.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[11px] font-[var(--font-body)] uppercase tracking-wide text-muted/70">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a href={info.href} className="text-[14px] font-[var(--font-body)] font-medium text-primary hover:text-accent transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[14px] font-[var(--font-body)] font-medium text-primary">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {fields.map((field) => (
                <div key={field.name} className={field.colSpan === 2 ? "sm:col-span-2" : ""}>
                  <label htmlFor={field.name} className={`block text-[12px] sm:text-[13px] font-[var(--font-body)] font-medium mb-1.5 ${labelClass}`}>
                    {field.label} {field.required && <span className="text-accent">*</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      rows={5}
                      className={`w-full px-4 py-3 text-[14px] font-[var(--font-body)] outline-none transition-all duration-200 resize-none ${inputClass}`}
                    />
                  ) : field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      className={`w-full px-4 py-3 text-[14px] font-[var(--font-body)] outline-none transition-all duration-200 appearance-none ${inputClass}`}
                    >
                      <option value="">{field.placeholder || "Sélectionner..."}</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      className={`w-full px-4 py-3 text-[14px] font-[var(--font-body)] outline-none transition-all duration-200 ${inputClass}`}
                    />
                  )}
                </div>
              ))}

              {/* Submit */}
              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-dark group w-full sm:w-auto justify-center disabled:opacity-50"
                >
                  {isSubmitting ? "Envoi en cours..." : submitText}
                  <Send size={16} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Status messages */}
              {formStatus === "success" && (
                <div className={`sm:col-span-2 p-4 bg-accent/10 border border-accent/30`}>
                  <p className="text-[14px] font-[var(--font-body)] text-primary">
                    Message envoyé avec succès. Nous vous recontactons rapidement.
                  </p>
                </div>
              )}
              {formStatus === "error" && (
                <div className={`sm:col-span-2 p-4 border ${isDark ? "bg-red-500/10 border-red-500/30" : "bg-red-50 border-red-200"}`}>
                  <p className={`text-[14px] font-[var(--font-body)] ${isDark ? "text-red-400" : "text-red-600"}`}>
                    Une erreur est survenue. Veuillez réessayer.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
