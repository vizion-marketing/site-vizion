import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page non trouvée",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center">
      <div className="max-w-lg mx-auto text-center py-20 px-6">
        <h1 className="font-['Roboto'] font-[900] text-7xl md:text-9xl uppercase tracking-tight text-black mb-4">
          404
        </h1>
        <h2 className="font-['Roboto'] font-[900] text-xl md:text-2xl uppercase tracking-tight text-black mb-4">
          Page non trouvée
        </h2>
        <p className="text-black/50 font-['Inter'] text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white font-['Roboto'] font-bold text-[12px] uppercase tracking-widest rounded-full hover:bg-black/80 transition-colors"
        >
          <ArrowLeft size={16} /> Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
