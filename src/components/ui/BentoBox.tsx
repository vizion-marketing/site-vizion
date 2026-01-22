"use client";

import React, { ReactNode } from 'react';

interface BentoBoxProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  variant?: 'split' | 'asymmetric';
  className?: string;
}

const BentoBox: React.FC<BentoBoxProps> = ({
  leftContent,
  rightContent,
  variant = 'split',
  className = '',
}) => {
  const leftWidthClass = variant === 'asymmetric' ? 'lg:flex-[0.6]' : 'lg:flex-1';
  const rightWidthClass = variant === 'asymmetric' ? 'lg:flex-[0.4]' : 'lg:flex-1';

  return (
    <section
      className={`relative w-full p-6 md:p-12 lg:p-16 rounded-[0.75rem] overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(117deg, #B7B7B7 0%, #000 50.77%, #6D6D6D 100.58%)',
      }}
    >
      {/* Carbon fibre pattern */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="relative z-10 max-w-[82.5rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          
          {/* Left Compartment */}
          <div 
            className={`flex flex-col bg-white rounded-[0.75rem] p-8 md:p-10 shadow-xl transition-all duration-500 hover:shadow-2xl ${leftWidthClass}`}
          >
            <div className="h-full flex flex-col justify-center">
              {leftContent}
            </div>
          </div>

          {/* Right Compartment */}
          <div 
            className={`flex flex-col bg-white rounded-[0.75rem] p-8 md:p-10 shadow-xl transition-all duration-500 hover:shadow-2xl ${rightWidthClass}`}
          >
            <div className="h-full flex flex-col justify-center">
              {rightContent}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoBox;
export { BentoBox };
