"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, FileText, ArrowRight, BookOpen } from "lucide-react";

export interface Resource {
  title: string;
  url: string;
  type: "internal" | "external";
  description?: string;
}

interface ResourcesLibraryProps {
  resources: Resource[];
}

export function ResourcesLibrary({ resources }: ResourcesLibraryProps) {
  if (!resources || resources.length === 0) return null;

  const internalResources = resources.filter((r) => r.type === "internal");
  const externalResources = resources.filter((r) => r.type === "external");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 pt-8 border-t border-zinc-200"
    >
      <div className="flex items-center gap-2 mb-6">
        <BookOpen size={20} className="text-zinc-600" />
        <h3 className="text-lg font-black tracking-tight font-['Inter']">
          Ressources complémentaires
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Internal Resources */}
        {internalResources.length > 0 && (
          <div className="space-y-3">
            <span className="text-[10px] font-bold tracking-wider text-zinc-400">
              Sur notre site
            </span>
            {internalResources.map((resource, idx) => (
              <Link
                key={idx}
                href={resource.url}
                className="flex items-start gap-3 p-4 bg-[#F2F2F2] hover:bg-zinc-200 transition-colors rounded-sm group"
              >
                <div className="p-2 bg-black text-white rounded-sm">
                  <FileText size={14} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-black group-hover:text-zinc-700 transition-colors">
                    {resource.title}
                  </p>
                  {resource.description && (
                    <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                      {resource.description}
                    </p>
                  )}
                </div>
                <ArrowRight
                  size={14}
                  className="text-zinc-400 group-hover:translate-x-1 transition-transform mt-1"
                />
              </Link>
            ))}
          </div>
        )}

        {/* External Resources */}
        {externalResources.length > 0 && (
          <div className="space-y-3">
            <span className="text-[10px] font-bold tracking-wider text-zinc-400">
              Liens externes
            </span>
            {externalResources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-white border border-zinc-200 hover:border-zinc-400 transition-colors rounded-sm group"
              >
                <div className="p-2 bg-zinc-100 text-zinc-600 rounded-sm">
                  <ExternalLink size={14} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-black group-hover:text-zinc-700 transition-colors">
                    {resource.title}
                  </p>
                  {resource.description && (
                    <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                      {resource.description}
                    </p>
                  )}
                </div>
                <ExternalLink
                  size={14}
                  className="text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform mt-1"
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
