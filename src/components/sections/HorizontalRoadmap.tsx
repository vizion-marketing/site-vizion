"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface RoadmapMilestone {
  id: string;
  icon?: LucideIcon;
  phase?: string;
  title: string;
  description: string;
  /** Optional status badge */
  status?: "completed" | "in-progress" | "upcoming";
}

export interface HorizontalRoadmapProps {
  surtitre?: string;
  title?: string;
  titleHighlight?: string;
  milestones: RoadmapMilestone[];
  variant?: "light" | "dark";
}

export function HorizontalRoadmap({
  surtitre,
  title,
  titleHighlight,
  milestones,
  variant = "dark",
}: HorizontalRoadmapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDark = variant === "dark";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  const statusColors = {
    completed: "bg-[#D4FD00] text-[#1a1a1a]",
    "in-progress": "bg-[#D4FD00]/20 text-[#D4FD00]",
    upcoming: isDark ? "bg-white/10 text-white/50" : "bg-black/5 text-[#6b6b6b]",
  };

  const statusLabels = {
    completed: "Terminé",
    "in-progress": "En cours",
    upcoming: "À venir",
  };

  return (
    <section
      ref={containerRef}
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isDark ? "grain-overlay" : ""}`}
      style={{ background: isDark ? "#0c0c0a" : "#f8f8f6" }}
    >
      {isDark && (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-gradient-float-1 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)" }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] animate-gradient-float-2 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)" }} />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] animate-gradient-float-3 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)" }} />
        </>
      )}
      <div className="max-w-[82.5rem] mx-auto relative z-10">
        {/* Header */}
        {(surtitre || title) && (
          <div className="mb-10 sm:mb-16">
            {surtitre && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2.5 mb-4 sm:mb-5"
              >
                <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
                <span className={`text-[10px] sm:text-[11px] font-light tracking-[0.12em] uppercase ${isDark ? "text-white/50" : "text-[#6b6b6b]"}`}>
                  {surtitre}
                </span>
              </motion.div>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em] ${isDark ? "!text-white" : "text-[#1a1a1a]"}`}
              >
                {title}{" "}
                {titleHighlight && <span className="text-[#D4FD00]">{titleHighlight}</span>}
              </motion.h2>
            )}
          </div>
        )}

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-12 md:px-12">
          <div className="relative min-w-max">
            {/* Connecting line (background) */}
            <div className={`absolute top-[2.75rem] left-0 right-0 h-[2px] ${isDark ? "bg-white/10" : "bg-black/10"}`} />
            {/* Animated progress line */}
            <motion.div
              className="absolute top-[2.75rem] left-0 h-[2px] bg-[#D4FD00]"
              style={{ width: lineWidth }}
            />

            {/* Milestones */}
            <div className="flex gap-0">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-[280px] sm:w-[320px] shrink-0 relative pt-0"
                  >
                    {/* Node dot */}
                    <div className="flex items-center justify-start mb-6">
                      <div className={`w-10 h-10 flex items-center justify-center relative z-10 ${
                        milestone.status === "completed"
                          ? "bg-[#D4FD00]"
                          : milestone.status === "in-progress"
                            ? "bg-[#D4FD00]/20 border-2 border-[#D4FD00]"
                            : isDark
                              ? "bg-white/10 border border-white/20"
                              : "bg-white border border-black/15"
                      }`}>
                        {Icon ? (
                          <Icon size={18} className={milestone.status === "completed" ? "text-[#1a1a1a]" : "text-[#D4FD00]"} />
                        ) : (
                          <span className={`font-[var(--font-body)] font-bold text-[13px] ${
                            milestone.status === "completed" ? "text-[#1a1a1a]" : isDark ? "text-white/60" : "text-[#1a1a1a]/60"
                          }`}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pr-8">
                      {milestone.phase && (
                        <span className={`text-[10px] font-bold tracking-wider uppercase block mb-1.5 ${isDark ? "text-[#D4FD00]/60" : "text-[#D4FD00]"}`}>
                          {milestone.phase}
                        </span>
                      )}
                      <h3 className={`font-heading font-medium text-[16px] sm:text-[18px] mb-2 ${isDark ? "!text-white" : "text-[#1a1a1a]"}`}>
                        {milestone.title}
                      </h3>
                      <p className={`text-[13px] sm:text-[14px] font-[var(--font-body)] leading-relaxed mb-3 ${isDark ? "!text-white/50" : "text-[#6b6b6b]"}`}>
                        {milestone.description}
                      </p>
                      {milestone.status && (
                        <span className={`inline-block px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase ${statusColors[milestone.status]}`}>
                          {statusLabels[milestone.status]}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
