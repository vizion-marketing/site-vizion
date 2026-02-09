"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/icons";
import { TableOfContents } from "./TableOfContents";
import type { TOCHeading } from "@/lib/mdx";

interface ArticleSidebarProps {
  headings: TOCHeading[];
}

export function ArticleSidebar({ headings }: ArticleSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-24 flex flex-col gap-8">
      {/* Sommaire dynamique */}
      {headings.length > 0 && <TableOfContents headings={headings} />}

      {/* CTA Newsletter - fixed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative group overflow-hidden rounded-none p-6 border border-white/10 grain-overlay"
        style={{ background: "#0c0c0a" }}
      >
        {/* Base + radial gradients jaune Vizion animés */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)",
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#D4FD00] opacity-50" />
              <span className="relative inline-flex rounded-none h-2 w-2 bg-[#D4FD00]" />
            </span>
            <span className="text-[10px] font-light tracking-[0.12em] text-white/60">
              Accès Privé
            </span>
          </div>
          <h3 className="font-heading font-normal text-xl leading-[0.9] text-white tracking-tight">
            Propulsez votre vision créative
          </h3>
          <p className="font-[var(--font-body)] text-xs text-white/60 leading-relaxed max-w-[220px]">
            Rejoignez notre écosystème exclusif pour des ressources et insights
            premium hebdomadaires.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary group"
          >
            S'inscrire{" "}
            <ArrowUpRightIcon
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </motion.div>
    </aside>
  );
}
