"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";

import type { TOCHeading } from "@/lib/mdx";
export type { TOCHeading };

interface TableOfContentsProps {
  headings: TOCHeading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

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
  };

  if (headings.length === 0) return null;

  // Progress based on active heading position
  const activeIndex = headings.findIndex((h) => h.id === activeId);
  const progressPercent =
    headings.length > 0 ? ((activeIndex + 1) / headings.length) * 100 : 0;

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="border border-white/10 rounded-none overflow-hidden flex flex-col min-h-0 grain-overlay dark-section"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Top accent bar */}
      <div className="h-0.5 bg-accent shrink-0" />

      <div className="p-6 flex flex-col min-h-0">
        <div className="flex items-center gap-2 mb-4 shrink-0">
          <List size={16} className="text-white/40" />
          <h4 className="text-[10px] font-light tracking-[0.12em] text-white/50">
            Sommaire
          </h4>
        </div>

        <div className="relative overflow-y-auto min-h-0 toc-scroll">
          {/* Vertical progress track */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/10 overflow-hidden">
            <div
              className="w-full bg-accent transition-all duration-300 ease-out"
              style={{ height: `${progressPercent}%` }}
            />
          </div>

          <ul className="space-y-0.5 pl-4">
            {headings.map((heading) => (
              <li key={heading.id}>
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={`text-left text-sm py-1.5 px-3 transition-all duration-200 hover:text-white hover:translate-x-0.5 w-full ${
                    activeId === heading.id
                      ? "text-white font-semibold bg-accent/10 border-l-2 border-accent -ml-[2px]"
                      : "text-white/70"
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
      </div>
    </motion.nav>
  );
}
