import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
  badge?: string;
}

export function Card({ title, description, href, icon, badge }: CardProps) {
  const content = (
    <>
      {badge && (
        <span className="badge mb-4">{badge}</span>
      )}
      {icon && (
        <div className="w-12 h-12 rounded-lg bg-[var(--color-accent-soft)] flex items-center justify-center text-[var(--color-primary)] mb-4">
          {icon}
        </div>
      )}
      <h3 className="heading-section text-xl mb-2">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed">{description}</p>
      {href && (
        <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] mt-4 group-hover:gap-2 transition-all">
          En savoir plus <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="card group block">
        {content}
      </Link>
    );
  }

  return <div className="card">{content}</div>;
}

interface BlogCardProps {
  title: string;
  description: string;
  href: string;
  date: string;
  category: string;
  author?: string;
}

export function BlogCard({ title, description, href, date, category, author }: BlogCardProps) {
  return (
    <Link href={href} className="card group block">
      <div className="flex items-center gap-3 mb-4">
        <span className="badge">{category}</span>
        <span className="text-xs text-[var(--color-text-muted)]">{date}</span>
      </div>
      <h3 className="heading-section text-xl mb-2 group-hover:text-[var(--color-accent)] transition-colors">
        {title}
      </h3>
      <p className="text-secondary text-sm leading-relaxed line-clamp-2">{description}</p>
      {author && (
        <p className="text-xs text-[var(--color-text-muted)] mt-4">Par {author}</p>
      )}
    </Link>
  );
}

interface CaseStudyCardProps {
  title: string;
  description: string;
  href: string;
  results?: string[];
}

export function CaseStudyCard({ title, description, href, results }: CaseStudyCardProps) {
  return (
    <Link href={href} className="card group block">
      <h3 className="heading-section text-xl mb-2 group-hover:text-[var(--color-accent)] transition-colors">
        {title}
      </h3>
      <p className="text-secondary text-sm leading-relaxed mb-4">{description}</p>
      {results && results.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {results.map((result, index) => (
            <span 
              key={index}
              className="text-xs font-medium text-[var(--color-primary)] bg-[var(--color-accent-soft)] px-2 py-1 rounded"
            >
              {result}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
