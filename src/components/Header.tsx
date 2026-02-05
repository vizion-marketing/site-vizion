"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

// Types pour les cas clients
interface CaseStudyNav {
  title: string;
  description: string;
  company: string;
  sector: string;
  slug: string;
  featured: boolean;
  heroImage: string | null;
}

interface HeaderProps {
  caseStudies?: CaseStudyNav[];
}

const navigation = [
  { label: "Services", href: "/#services" },
  { label: "Cas Clients", href: "/cas-clients" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/#about" },
];

export function Header({ caseStudies = [] }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
      {/* Glassmorphism container */}
      <div
        className={`max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-8 py-3 rounded-full transition-all duration-500 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
            : "bg-black/60 backdrop-blur-xl border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.03)]"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#c8ff00] flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" strokeWidth={2.5} />
            </div>
            <span className="text-white font-['Inter'] text-lg font-semibold tracking-tight">
              vizion
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[14px] font-['Inter'] font-medium text-white/60 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side - CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/contact"
              className="text-[14px] font-['Inter'] font-medium text-white/60 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>

            {/* Primary CTA with animated glowing border */}
            <Link href="/contact" className="glow-border-container group">
              <div className="glow-border-content px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl text-[14px] font-['Inter'] font-semibold text-white border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-white/15 transition-all duration-300">
                Prendre rendez-vous
              </div>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 mx-4 sm:mx-6 md:mx-8 bg-black/70 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)] overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] font-['Inter'] font-medium text-white/70 hover:text-white py-2 transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] font-['Inter'] font-medium text-white/70 hover:text-white py-2 transition-colors"
                >
                  Contact
                </Link>

                {/* Mobile CTA with animated glowing border */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="glow-border-container mt-2"
                >
                  <div className="glow-border-content w-full flex justify-center py-3 rounded-full bg-white/10 backdrop-blur-xl text-[15px] font-['Inter'] font-semibold text-white border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                    Prendre rendez-vous
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
