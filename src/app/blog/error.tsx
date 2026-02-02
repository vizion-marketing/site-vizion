"use client";

export default function BlogError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-[900] uppercase tracking-tight mb-4">
          Une erreur est survenue
        </h2>
        <p className="text-zinc-500 mb-8">
          Impossible de charger le blog. Veuillez réessayer.
        </p>
        <button
          onClick={reset}
          className="btn btn-primary px-8 py-3"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
