import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";

// MDX components for rendering content
export const mdxComponents: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="heading-display text-4xl md:text-5xl mb-6">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="heading-section text-2xl md:text-3xl mt-12 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="heading-section text-xl md:text-2xl mt-8 mb-3">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="heading-section text-lg md:text-xl mt-6 mb-2">{children}</h4>
  ),
  
  // Text
  p: ({ children }) => (
    <p className="text-body mb-6 leading-relaxed">{children}</p>
  ),
  
  // Links
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="link underline underline-offset-2"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href || "#"} className="link underline underline-offset-2">
        {children}
      </Link>
    );
  },
  
  // Lists
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-body">{children}</li>
  ),
  
  // Quotes
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[var(--color-primary)] pl-6 my-8 italic text-[var(--color-text-secondary)]">
      {children}
    </blockquote>
  ),
  
  // Code
  code: ({ children }) => (
    <code className="bg-[var(--color-bg-alt)] px-1.5 py-0.5 rounded-none text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-[var(--color-primary-dark)] text-white p-6 rounded-none overflow-x-auto my-6">
      {children}
    </pre>
  ),
  
  // Dividers
  hr: () => (
    <hr className="border-t border-[var(--color-border)] my-12" />
  ),
  
  // Strong/Bold
  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--color-primary-dark)]">{children}</strong>
  ),
  
  // Images
  img: ({ src, alt }) => (
    <span className="block my-8">
      <Image
        src={src || ""}
        alt={alt || ""}
        width={800}
        height={450}
        className="rounded-none shadow-md w-full h-auto"
      />
    </span>
  ),
};
