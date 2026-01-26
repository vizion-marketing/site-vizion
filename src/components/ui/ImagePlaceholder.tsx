"use client";

import React from 'react';
import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  width: number;
  height: number;
  label: string;
  className?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  variant?: 'light' | 'dark';
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width,
  height,
  label,
  className = '',
  rounded = 'lg',
  variant = 'light',
}) => {
  const roundedClass = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  }[rounded];

  const bgClass = variant === 'light'
    ? 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300'
    : 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900';

  const textClass = variant === 'light' ? 'text-gray-500' : 'text-gray-400';
  const borderClass = variant === 'light'
    ? 'border-2 border-dashed border-gray-300'
    : 'border-2 border-dashed border-gray-600';

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${bgClass} ${roundedClass} ${borderClass} overflow-hidden ${className}`}
      style={{
        width: '100%',
        maxWidth: `${width}px`,
        aspectRatio: `${width}/${height}`,
      }}
    >
      <ImageIcon className={`w-10 h-10 ${textClass} mb-3`} strokeWidth={1.5} />
      <span className={`text-sm font-medium ${textClass} text-center px-4`}>
        {label}
      </span>
      <span className={`text-xs ${textClass} mt-2 font-mono opacity-70`}>
        {width} × {height}px
      </span>
    </div>
  );
};

export default ImagePlaceholder;
export { ImagePlaceholder };
