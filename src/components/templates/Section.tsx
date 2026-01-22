import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  variant?: "default" | "alt" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Section({ 
  children, 
  variant = "default", 
  size = "md",
  className = "" 
}: SectionProps) {
  const bgClasses = {
    default: "bg-[var(--color-bg)]",
    alt: "bg-[var(--color-bg-alt)]",
    dark: "bg-[var(--color-primary-dark)] text-white",
  };
  
  const paddingClasses = {
    sm: "section-padding-sm",
    md: "section-padding",
    lg: "py-24 md:py-32",
  };
  
  return (
    <section className={`${bgClasses[variant]} ${paddingClasses[size]} ${className}`}>
      <div className="container-base">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
      <h2 className="heading-section text-2xl md:text-3xl">{title}</h2>
      {subtitle && (
        <p className="text-secondary mt-4 text-lg">{subtitle}</p>
      )}
    </div>
  );
}
