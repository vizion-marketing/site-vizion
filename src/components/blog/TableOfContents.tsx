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
      className="bg-white border border-zinc-100 rounded-none overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="h-0.5 bg-[#D4FD00]" />

      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <List size={16} className="text-black/40" />
          <h4 className="text-[10px] font-light tracking-[0.12em] text-black/50">
            Sommaire
          </h4>
        </div>

        <div className="relative">
          {/* Vertical progress track */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-zinc-100 overflow-hidden">
            <div
              className="w-full bg-[#D4FD00] transition-all duration-300 ease-out"
              style={{ height: `${progressPercent}%` }}
            />
          </div>

          <ul className="space-y-0.5 pl-4">
            {headings.map((heading) => (
              <li key={heading.id}>
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={`text-left text-sm py-1.5 px-3 transition-all duration-200 hover:text-black hover:translate-x-0.5 w-full ${
                    activeId === heading.id
                      ? "text-black font-semibold bg-[#D4FD00]/10 border-l-2 border-[#D4FD00] -ml-[2px]"
                      : "text-zinc-400"
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
