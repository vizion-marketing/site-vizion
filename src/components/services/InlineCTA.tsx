"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface InlineCTAProps {
  text?: string;
  buttonText?: string;
  href?: string;
}

export function InlineCTA({
  text = "Vous avez un projet de site web en tête ?",
  buttonText = "Discuter de votre projet",
  href = "/contact",
}: InlineCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-card border border-black/[0.06] px-6 sm:px-10 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[82.5rem] mx-auto"
    >
      <p className="text-primary text-lg sm:text-xl font-medium tracking-tight text-center sm:text-left">
        {text}
      </p>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 bg-accent text-black font-medium px-6 py-3 hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 whitespace-nowrap shrink-0"
      >
        {buttonText}
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
