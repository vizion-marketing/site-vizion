"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// ============================================================================
// NAV ITEMS — anchor IDs des sections homepage + hrefs pour les autres pages
// ============================================================================

const navItems = [
  { label: "Accueil", target: "top", href: "/" },
  { label: "Services", target: "services", href: "/services" },
  { label: "Cas Clients", target: "cas-clients", href: "/cas-clients" },
  { label: "Notre agence", target: "agence", href: "/#agence" },
  { label: "Blog", target: "blog", href: "/blog" },
];

const HEADER_HEIGHT = 80;

// ============================================================================
// SCROLL HELPER
// ============================================================================

function scrollToTarget(target: string) {
  if (target === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(target);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

// ============================================================================
// MOBILE MENU
// ============================================================================

function MobileMenu({
  isOpen,
  onClose,
  isHomePage,
}: {
  isOpen: boolean;
  onClose: () => void;
  isHomePage: boolean;
}) {
  const handleClick = useCallback(
    (item: (typeof navItems)[number]) => {
      onClose();
      if (isHomePage) {
        setTimeout(() => scrollToTarget(item.target), 150);
      }
    },
    [onClose, isHomePage]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-white border-b border-gray-200"
        >
          <div className="px-4 sm:px-6 py-6 flex flex-col gap-2">
            {navItems.map((item) =>
              isHomePage ? (
                <button
                  key={item.target}
                  onClick={() => handleClick(item)}
                  className="flex items-center py-3 border-b border-black/5 text-left cursor-pointer"
                >
                  <span className="text-[16px] font-semibold text-primary">
                    {item.label}
                  </span>
                </button>
              ) : (
                <Link
                  key={item.target}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center py-3 border-b border-black/5 text-left cursor-pointer"
                >
                  <span className="text-[16px] font-semibold text-primary">
                    {item.label}
                  </span>
                </Link>
              )
            )}

            {/* CTA */}
            <div className="pt-4 mt-2">
              <Link
                href="/contact"
                onClick={onClose}
                className="btn btn-dark w-full justify-center"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// MAIN HEADER
// ============================================================================

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Bar */}
      <div
        className={`w-full bg-white border-b border-gray-200 px-4 sm:px-6 md:px-8 pt-2 pb-3 sm:pt-2 sm:pb-4 transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-[82.5rem] mx-auto flex items-center justify-between">
          {/* Logo — retour accueil */}
          <Link
            href="/"
            className="relative z-10 flex items-center group cursor-pointer"
          >
            <Image
              src="/images/logo-vizion.avif"
              alt="Vizion - Agence Marketing Produit B2B"
              width={115}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) =>
              isHomePage ? (
                <button
                  key={item.target}
                  onClick={() => scrollToTarget(item.target)}
                  className="relative text-[14px] font-medium text-secondary hover:text-primary transition-colors duration-200 cursor-pointer group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={item.target}
                  href={item.href}
                  className="relative text-[14px] font-medium text-secondary hover:text-primary transition-colors duration-200 cursor-pointer group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          {/* Right side - CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn btn-dark">
              Nous contacter
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-secondary hover:bg-gray-100 rounded-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isHomePage={isHomePage}
      />
    </header>
  );
}
