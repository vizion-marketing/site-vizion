import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: "home" | "page" | "minimal";
}

export function Hero({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  variant = "page" 
}: HeroProps) {
  const isHome = variant === "home";
  
  return (
    <section 
      className={`relative ${isHome ? "pt-40 pb-24 md:pt-48 md:pb-32" : "pt-32 pb-16 md:pt-40 md:pb-20"}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-alt)] to-[var(--color-bg)] -z-10" />
      
      <div className="container-base">
        <div className={`max-w-3xl ${isHome ? "mx-auto text-center" : ""}`}>
          <h1 
            className={`heading-display animate-slide-up ${
              isHome 
                ? "text-4xl md:text-5xl lg:text-6xl" 
                : "text-3xl md:text-4xl lg:text-5xl"
            }`}
          >
            {title}
          </h1>
          
          {subtitle && (
            <p 
              className={`text-secondary text-lg md:text-xl mt-6 leading-relaxed animate-slide-up stagger-1 ${
                isHome ? "max-w-2xl mx-auto" : ""
              }`}
            >
              {subtitle}
            </p>
          )}
          
          {ctaText && ctaLink && (
            <div className={`mt-10 animate-slide-up stagger-2 ${isHome ? "flex justify-center gap-4" : ""}`}>
              <Link 
                href={ctaLink}
                className="btn btn-primary inline-flex items-center gap-2 px-8 py-3 text-base"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
