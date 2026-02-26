"use client";

import React, { useState, useRef, useEffect, ReactNode, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Tab {
  id: string;
  label: string;
  number?: string;
  icon?: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (id: string) => void;
  variant?: "underline" | "pills" | "enclosed";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
}

export interface TabPanelProps {
  id: string;
  activeTab: string;
  children: ReactNode;
  className?: string;
}

export function Tabs({
  tabs,
  defaultTab,
  onChange,
  variant = "underline",
  size = "md",
  className = "",
  children,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const updateIndicator = (tabId: string) => {
    const tab = tabRefs.current.get(tabId);
    if (tab && tabsRef.current) {
      const containerRect = tabsRef.current.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      setIndicatorStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      });
    }
  };

  useEffect(() => {
    updateIndicator(activeTab);
    const handleResize = () => updateIndicator(activeTab);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let newIndex = index;
    if (e.key === "ArrowRight") {
      newIndex = (index + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      newIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      newIndex = 0;
    } else if (e.key === "End") {
      newIndex = tabs.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    const newTab = tabs[newIndex];
    setActiveTab(newTab.id);
    onChange?.(newTab.id);
    tabRefs.current.get(newTab.id)?.focus();
  };

  const sizeClasses = {
    sm: "text-[11px] sm:text-xs px-3 sm:px-4 py-2",
    md: "text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3",
    lg: "text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4",
  };

  const variantClasses = {
    underline: "border-b border-black/10",
    pills: "bg-black/5 p-1 rounded-none",
    enclosed: "border border-black/10 rounded-none",
  };

  return (
    <div className={className}>
      {/* Tab Bar */}
      <div className="relative">
        {/* Mobile fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none sm:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none sm:hidden" />

        <div
          ref={tabsRef}
          role="tablist"
          className={`relative flex overflow-x-auto scrollbar-hide ${variantClasses[variant]}`}
          style={{
            maskImage: "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
          }}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => {
                if (el) tabRefs.current.set(tab.id, el);
              }}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              onClick={() => handleTabClick(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`
                relative flex items-center gap-2 whitespace-nowrap font-[var(--font-body)] font-semibold tracking-[-0.01em]
                transition-colors duration-200 shrink-0
                ${sizeClasses[size]}
                ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted hover:text-primary"
                }
                ${variant === "pills" && activeTab === tab.id ? "bg-white shadow-sm" : ""}
              `}
            >
              {tab.number && (
                <span
                  className={`
                    font-[var(--font-body)] font-bold text-[10px] sm:text-[11px]
                    ${activeTab === tab.id ? "text-accent" : "text-[#999]"}
                  `}
                >
                  {tab.number}
                </span>
              )}
              {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          ))}

          {/* Animated indicator */}
          {variant === "underline" && (
            <motion.div
              className="absolute bottom-0 h-[2px] bg-accent"
              initial={false}
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
              }}
            />
          )}
        </div>
      </div>

      {/* Tab Panels */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {React.Children.map(children, (child) => {
            if (React.isValidElement<TabPanelProps>(child) && child.props.id === activeTab) {
              return child;
            }
            return null;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function TabPanel({ id, activeTab, children, className = "" }: TabPanelProps) {
  if (id !== activeTab) return null;

  return (
    <motion.div
      key={id}
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Tabs;
