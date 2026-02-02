"use client";

import Link from "next/link";

export default function BlogPostError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-[900] uppercase tracking-tight mb-4">
          Article introuvable
        </h2>
        <p className="text-zinc-500 mb-8">
          Impossible de charger cet article. Il a peut-être été déplacé ou supprimé.
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="btn btn-primary px-6 py-3">
            Réessayer
          </button>
          <Link href="/blog" className="btn btn-primary px-6 py-3 bg-zinc-100 text-black border-zinc-200">
            Retour au blog
          </Link>
        </div>
      </div>
    </div>
  );
}
