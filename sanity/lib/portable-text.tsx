import type { PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "./image";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="heading-display text-4xl md:text-5xl mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="heading-section text-2xl md:text-3xl mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="heading-section text-xl md:text-2xl mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="heading-section text-lg md:text-xl mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-body mb-6 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--color-accent)] pl-6 my-8 italic text-secondary">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-primary">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="bg-[var(--bg-grey)] px-1.5 py-0.5 rounded-none text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
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
        <Link href={href} className="link underline underline-offset-2">
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-body">{children}</li>,
    number: ({ children }) => <li className="text-body">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <span className="block my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ""}
            width={800}
            height={450}
            className="rounded-none shadow-md w-full h-auto"
          />
          {value.caption && (
            <span className="block text-sm text-muted mt-2">
              {value.caption}
            </span>
          )}
        </span>
      );
    },
    figure: ({ value }) => {
      if (!value?.image?.asset) return null;
      const isFullWidth = value.type === "full-width";
      return (
        <figure className={`my-8 ${isFullWidth ? "-mx-4 md:-mx-8" : ""}`}>
          <Image
            src={urlFor(value.image).width(1200).url()}
            alt={value.alt || ""}
            width={1200}
            height={675}
            className="rounded-none shadow-md w-full h-auto"
          />
          {value.caption && (
            <figcaption className="text-sm text-muted mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => {
      const typeStyles: Record<string, string> = {
        info: "border-blue-500 bg-blue-50",
        tip: "border-[var(--color-accent)] bg-[rgba(var(--color-accent-rgb),0.08)]",
        warning: "border-amber-500 bg-amber-50",
      };
      const style = typeStyles[value.type || "info"] || typeStyles.info;
      return (
        <div className={`border-l-4 p-4 my-8 ${style}`}>
          {value.title && (
            <p className="font-semibold text-primary mb-1">{value.title}</p>
          )}
          <p className="text-body">{value.body}</p>
        </div>
      );
    },
    statHighlight: ({ value }) => (
      <div className="my-8 p-6 bg-card border border-black/[0.06]">
        <div className="text-3xl font-semibold text-primary">{value.value}</div>
        <div className="text-sm text-muted mt-1">{value.label}</div>
        {value.description && (
          <p className="text-body mt-2">{value.description}</p>
        )}
      </div>
    ),
  },
};
