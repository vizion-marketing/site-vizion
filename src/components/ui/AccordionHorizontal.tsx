"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  content: React.ReactNode;
}

interface AccordionHorizontalProps {
  items: AccordionItem[];
  className?: string;
}

const AccordionHorizontal: React.FC<AccordionHorizontalProps> = ({ items, className = "" }) => {
  const [expandedId, setExpandedId] = useState<string | null>(items[0]?.id || null);

  const transitionBase = { duration: 0.25 };
  const transitionSlow = { duration: 0.4 };

  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-[82.5rem] mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-4 h-auto lg:h-[420px] items-stretch">
          {items.map((item) => {
            const isExpanded = expandedId === item.id;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setExpandedId(item.id)}
                initial={false}
                animate={{
                  flexGrow: isExpanded ? 2.5 : 1,
                }}
                transition={transitionSlow}
                className={`
                  relative overflow-hidden cursor-pointer
                  bg-white p-6 rounded-[0.75rem]
                  border border-transparent
                  shadow-sm hover:shadow-xl
                  transition-shadow duration-250
                  flex flex-col
                  ${isExpanded ? 'ring-1 ring-black/5' : 'hover:bg-neutral-50'}
                `}
              >
                {/* Header Section */}
                <div className="flex items-start gap-4">
                  <motion.div 
                    layout="position"
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 text-black" strokeWidth={1.5} />
                  </motion.div>

                  <div className="flex flex-col min-w-0">
                    <motion.h3 
                      layout="position"
                      className="font-['Roboto'] font-black uppercase text-lg leading-tight tracking-tight text-black"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      layout="position"
                      className="font-['Inter'] text-sm text-neutral-500 mt-1 line-clamp-2"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>

                {/* Content Section */}
                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={transitionBase}
                      className="mt-6 flex-grow flex flex-col"
                    >
                      <div className="font-['Inter'] text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-6">
                        {item.content}
                      </div>
                      
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.2, ...transitionSlow }}
                        className="h-1 w-12 bg-black mt-auto origin-left"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Collapsed indicator */}
                {!isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-neutral-300"
                  >
                    <span>Cliquez pour développer</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccordionHorizontal;
export { AccordionHorizontal };
