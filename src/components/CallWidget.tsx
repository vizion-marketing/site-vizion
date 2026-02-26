"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";

export function CallWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-black/70 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)] min-w-[240px]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
              <div className="relative">
                <div className="w-10 h-10 rounded-none bg-gradient-to-br from-[var(--color-accent)] to-[#a8e000] flex items-center justify-center text-black font-bold text-sm">
                  LG
                </div>
                {/* Online indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#22c55e] rounded-none border-2 border-black/70" />
              </div>
              <div>
                <h4 className="font-heading font-normal text-sm text-white">
                  Lucas Gonzalez
                </h4>
                <p className="text-[11px] text-white/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#22c55e] animate-pulse" />
                  Disponible maintenant
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              {/* Call Button */}
              <a
                href="tel:+33750836543"
                className="flex items-center gap-3 w-full px-4 py-3 rounded-none bg-accent text-black font-[var(--font-body)] font-semibold text-[13px] hover:bg-accent transition-all duration-200 active:scale-[0.98]"
              >
                <Phone size={16} strokeWidth={2.5} />
                <span>Appeler maintenant</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/33750836543"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-4 py-3 rounded-none bg-white/10 text-white font-[var(--font-body)] font-medium text-[13px] hover:bg-white/20 transition-all duration-200 border border-white/10"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>

              {/* Book a call */}
              <Link
                href="/contact"
                className="flex items-center gap-3 w-full px-4 py-3 rounded-none bg-white/10 text-white font-[var(--font-body)] font-medium text-[13px] hover:bg-white/20 transition-all duration-200 border border-white/10"
              >
                <Calendar size={16} />
                <span>Planifier un appel</span>
              </Link>
            </div>

            {/* Footer */}
            <p className="text-[10px] text-white/40 mt-3 pt-3 border-t border-white/10 text-center">
              Réponse en moins de 2h
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button with Label */}
      <div className="flex items-center gap-3">
        {/* Always visible label */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-black/70 backdrop-blur-2xl border border-white/20 rounded-none px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)] flex items-center gap-2"
        >
          <span className="text-[13px] font-[var(--font-body)] font-medium text-white whitespace-nowrap">
            Vous préférez nous appeler ?
          </span>
        </motion.div>

        {/* Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative"
          whileTap={{ scale: 0.95 }}
        >
          {/* Glowing ring animation */}
          <div className="absolute inset-0 rounded-none bg-accent opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />

          {/* Pulse animation when closed */}
          {!isExpanded && (
            <div className="absolute inset-0 rounded-none bg-accent animate-ping opacity-20" />
          )}

          {/* Button */}
          <div className="relative w-14 h-14 rounded-none bg-black/70 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)] flex items-center justify-center transition-all duration-300 hover:border-accent/50 hover:shadow-[0_8px_32px_rgba(var(--color-accent-rgb),0.2)]">
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="phone"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="relative"
                >
                  <Phone size={22} className="text-accent" />
                  {/* Online indicator */}
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#22c55e] opacity-75" />
                    <span className="relative inline-flex rounded-none h-3 w-3 bg-[#22c55e] border-2 border-black/70" />
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
