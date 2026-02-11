"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Barre blanche, carrée, sans glassmorphisme */}
      <div className="w-full bg-white border-b border-gray-200 px-4 sm:px-6 md:px-8 pt-2 pb-3 sm:pt-2 sm:pb-4">
        <div className="max-w-[82.5rem] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center group">
            <Image
              src="/logo-vizion.svg"
              alt="Vizion - Agence Marketing Produit B2B"
              width={115}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[14px] font-[var(--font-body)] font-medium text-[#52525b] hover:text-[#1a1a1a] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side - CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn btn-dark">
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#52525b] hover:bg-gray-100 rounded-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
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
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] font-[var(--font-body)] font-medium text-[#52525b] hover:text-[#1a1a1a] py-2 transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-gray-200">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-dark w-full justify-center"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
