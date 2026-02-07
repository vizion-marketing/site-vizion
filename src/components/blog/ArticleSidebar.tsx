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
        className="relative group overflow-hidden rounded-none p-6 bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] border border-white/10"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/carbon-fibre.png')]" />
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
