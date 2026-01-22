import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
      <div className="container-narrow text-center py-20">
        <h1 className="heading-display text-6xl md:text-8xl text-[var(--color-primary)] mb-4">
          404
        </h1>
        <h2 className="heading-section text-2xl text-[var(--color-text)] mb-4">
          Page non trouvée
        </h2>
        <p className="text-secondary mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn btn-primary inline-flex items-center gap-2 px-8 py-3">
          <ArrowLeft size={18} /> Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
