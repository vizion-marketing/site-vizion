"use client";

import Link from "next/link";

export default function CaseStudyError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-[900] tracking-tight mb-4">
          Étude de cas introuvable
        </h2>
        <p className="text-zinc-500 mb-8">
          Impossible de charger cette étude de cas.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button onClick={reset} className="btn btn-primary">
            Réessayer
          </button>
          <Link href="/cas-clients" className="btn btn-secondary">
            Retour aux cas clients
          </Link>
        </div>
      </div>
    </div>
  );
}
