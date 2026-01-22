"use client";

import React, { useState, useRef, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  orientation?: 'horizontal' | 'vertical';
  defaultTab?: string;
  className?: string;
}

export default function Tabs({
  tabs,
  orientation = 'horizontal',
  defaultTab,
  className,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (orientation === 'horizontal') {
      if (e.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (e.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else {
      if (e.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
      if (e.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
    }

    if (nextIndex !== index) {
      const nextTabId = tabs[nextIndex].id;
      setActiveTab(nextTabId);
      tabRefs.current[nextTabId]?.focus();
    }
  };

  const isVertical = orientation === 'vertical';

  return (
    <div
      className={cn(
        'flex w-full',
        isVertical ? 'flex-col md:flex-row gap-12' : 'flex-col gap-8',
        className
      )}
    >
      {/* Tab List */}
      <div
        role="tablist"
        aria-orientation={orientation}
        className={cn(
          'flex overflow-x-auto no-scrollbar',
          isVertical 
            ? 'md:flex-col md:w-64 md:border-r border-b md:border-b-0 border-neutral-200' 
            : 'flex-row border-b border-neutral-200'
        )}
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[tab.id] = el; }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={cn(
                'relative px-6 py-4 text-[11px] font-medium uppercase tracking-[1.65px] transition-colors duration-250 outline-none whitespace-nowrap text-left font-["Inter"]',
                isActive ? 'text-black' : 'text-black/40 hover:text-black/60'
              )}
            >
              {tab.label}
              
              {isActive && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className={cn(
                    'absolute bg-black',
                    isVertical
                      ? 'md:left-auto md:right-0 md:top-0 md:bottom-0 md:w-[2px] left-0 bottom-0 right-0 h-[2px] md:h-auto'
                      : 'left-0 right-0 bottom-0 h-[2px]'
                  )}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="flex-1 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="w-full h-full"
          >
            {tabs.find((t) => t.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export { Tabs };
