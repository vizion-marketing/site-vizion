"use client";

import { motion } from "framer-motion";
import { Users, BarChart3, Clock, AlertTriangle } from "lucide-react";
import type { NarrativeBlock, NarrativeStatement } from "@/content/services";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Icônes par index pour la grille
const statementIcons = [Users, BarChart3, Clock, AlertTriangle];

function StatementCard({
  statement,
  index,
}: {
  statement: NarrativeStatement;
  index: number;
}) {
  const Icon = statementIcons[index % statementIcons.length];
  return (
    <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
      <div className="w-10 h-10 bg-accent/10 flex items-center justify-center mb-4">
        <Icon size={18} className="text-primary" />
      </div>
      <h3 className="text-[15px] sm:text-[17px] font-semibold text-primary leading-snug mb-2">
        {statement.headline}
      </h3>
      <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed">
        {statement.description}
      </p>
    </motion.div>
  );
}

export function ServiceNarrative({ constat }: { constat: NarrativeBlock }) {
  return (
    <section className="bg-card py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          {/* Gauche — Titre + description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
                  {constat.surtitre}
                </span>
              </div>
              <h2 className="font-heading font-medium text-[24px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary mb-4 sm:mb-6">
                {constat.title}
              </h2>
            </motion.div>

            {constat.paragraphs[0] && (
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-[14px] sm:text-[15px] leading-relaxed text-muted max-w-lg"
              >
                {constat.paragraphs[0]}
              </motion.p>
            )}
          </motion.div>

          {/* Droite — Grille 2×2 de statements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10"
          >
            {constat.statements?.map((statement, i) => (
              <StatementCard key={i} statement={statement} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
