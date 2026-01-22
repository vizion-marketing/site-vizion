"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PillItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface PillsBarProps {
  items: PillItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  variant?: 'benefits' | 'selector';
  className?: string;
}

export const PillsBar: React.FC<PillsBarProps> = ({
  items,
  activeId,
  onSelect,
  variant = 'selector',
  className,
}) => {
  const isSelector = variant === 'selector';

  return (
    <nav 
      className={cn(
        "flex flex-wrap md:flex-row items-center gap-2 md:gap-3",
        className
      )}
    >
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <div key={item.id} className="relative">
            <motion.button
              disabled={!isSelector}
              onClick={() => isSelector && onSelect?.(item.id)}
              whileHover={isSelector ? { scale: 1.02 } : {}}
              whileTap={isSelector ? { scale: 0.96 } : {}}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2.5 z-10",
                "font-['Inter'] text-[11px] font-medium uppercase tracking-[1.65px] whitespace-nowrap",
                "transition-colors duration-250 ease-in-out outline-none",
                "rounded-full border",
                
                !isSelector && [
                  "bg-white/10 backdrop-blur-md border-white/10 cursor-default",
                  "text-white/70"
                ],

                isSelector && [
                  "cursor-pointer",
                  isActive 
                    ? "text-black border-transparent" 
                    : "text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-700"
                ]
              )}
            >
              {item.icon && (
                <span className={cn(
                  "w-3.5 h-3.5 flex items-center justify-center transition-transform duration-250",
                  isActive && "scale-110"
                )}>
                  {item.icon}
                </span>
              )}
              
              <span>{item.label}</span>

              {isSelector && isActive && (
                <motion.div
                  layoutId="active-pill-bg"
                  className="absolute inset-0 bg-neutral-100 rounded-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>

            {!isSelector && (
              <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default PillsBar;
