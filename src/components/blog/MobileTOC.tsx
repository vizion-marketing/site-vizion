"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "lucide-react";
import type { TOCHeading } from "@/lib/mdx";

interface MobileTOCProps {
  headings: TOCHeading[];
}

export function MobileTOC({ headings }: MobileTOCProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  // Show button after scrolling past the hero (~400px)
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -80% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    setIsOpen(false);
    // Small delay to let the sheet close before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Floating button — only on mobile, hidden on lg+ */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 lg:hidden w-12 h-12 flex items-center justify-center bg-[#0c0c0a] border border-white/10 rounded-none shadow-lg"
            aria-label="Ouvrir le sommaire"
          >
            <List size={20} className="text-[#D4FD00]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bottom sheet drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white rounded-none max-h-[70vh] overflow-hidden flex flex-col"
            >
              {/* Top accent bar */}
              <div className="h-0.5 bg-[#D4FD00] shrink-0" />

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 shrink-0">
                <div className="flex items-center gap-2">
                  <List size={16} className="text-black/40" />
                  <h4 className="text-[10px] font-light tracking-[0.12em] text-black/50">
                    Sommaire
                  </h4>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-black transition-colors"
                  aria-label="Fermer le sommaire"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Headings list */}
              <div className="overflow-y-auto flex-1 px-6 py-4">
                <ul className="space-y-1">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <button
                        onClick={() => scrollToHeading(heading.id)}
                        className={`text-left text-sm py-2.5 px-3 transition-all duration-200 w-full ${
                          activeId === heading.id
                            ? "text-black font-semibold bg-[#D4FD00]/10 border-l-2 border-[#D4FD00] -ml-[2px]"
                            : "text-zinc-500"
                        }`}
                        style={{
                          paddingLeft:
                            heading.level === 2
                              ? "12px"
                              : heading.level === 3
                                ? "28px"
                                : "44px",
                        }}
                      >
                        {heading.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
