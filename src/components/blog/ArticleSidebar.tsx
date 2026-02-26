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
    <aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] flex flex-col gap-6">
      {/* Sommaire dynamique */}
      {headings.length > 0 && (
        <div className="flex-1 min-h-0 flex flex-col">
          <TableOfContents headings={headings} />
        </div>
      )}

      {/* CTA Newsletter - fixed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative group overflow-hidden rounded-none p-6 shrink-0 bg-accent"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[var(--text-primary)] opacity-30" />
              <span className="relative inline-flex rounded-none h-2 w-2 bg-[var(--text-primary)]" />
            </span>
            <span className="text-[10px] font-light tracking-[0.12em] text-primary/60">
              Accès Privé
            </span>
          </div>
          <h3 className="font-heading font-normal text-xl leading-[0.9] text-primary tracking-tight">
            Propulsez votre vision créative
          </h3>
          <p className="font-[var(--font-body)] text-xs text-primary/70 leading-relaxed max-w-[220px]">
            Rejoignez notre écosystème exclusif pour des ressources et insights
            premium hebdomadaires.
          </p>
          <Link
            href="/contact"
            className="btn btn-dark group"
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
