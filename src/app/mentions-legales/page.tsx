import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site Vizion - Agence marketing B2B",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#F2F2F2] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Retour à l&apos;accueil
        </Link>

        <h1 className="font-['Inter'] font-[900] text-4xl md:text-5xl tracking-tight text-black mb-12">
          Mentions Légales
        </h1>

        <div className="prose prose-lg max-w-none text-black/80 space-y-8">
          <section>
            <h2 className="font-['Inter'] font-[900] text-xl tracking-tight text-black mt-0">
              1. Éditeur du site
            </h2>
            <p>
              Le site <strong>by-vizion.com</strong> est édité par :
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>Raison sociale :</strong> Vizion</li>
              <li><strong>Forme juridique :</strong> SAS</li>
              <li><strong>Siège social :</strong> 815 La Pyrénéenne, 31670 Labège, France</li>
              <li><strong>Email :</strong> contact@by-vizion.com</li>
              <li><strong>Téléphone :</strong> 07 50 83 65 43</li>
            </ul>
          </section>

          <section>
            <h2 className="font-['Inter'] font-[900] text-xl tracking-tight text-black">
              2. Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication est <strong>Lucas Gonzalez</strong>, en qualité de représentant légal de Vizion.
            </p>
          </section>

          <section>
            <h2 className="font-['Inter'] font-[900] text-xl tracking-tight text-black">
              3. Hébergement
            </h2>
            <p>
              Le site est hébergé par :
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>Vercel Inc.</strong></li>
              <li>440 N Barranca Ave #4133</li>
              <li>Covina, CA 91723, États-Unis</li>
              <li>Site web : vercel.com</li>
            </ul>
          </section>

          <section>
            <h2 className="font-['Inter'] font-[900] text-xl tracking-tight text-black">
              4. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur le site by-vizion.com (textes, images, graphismes, logo, icônes, etc.) sont la propriété exclusive de Vizion, sauf mentions contraires.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable de Vizion.
            </p>
          </section>

          <section>
            <h2 className="font-['Inter'] font-[900] text-xl tracking-tight text-black">
              5. Données personnelles
            </h2>
            <p>
              Les informations relatives au traitement des données personnelles sont détaillées dans notre{" "}
              <Link href="/confidentialite" className="text-black underline hover:no-underline">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-['Inter'] font-[900] text-xl tracking-tight text-black">
              6. Cookies
            </h2>
            <p>
              Le site by-vizion.com utilise des cookies pour améliorer l&apos;expérience utilisateur et mesurer l&apos;audience. En poursuivant votre navigation, vous acceptez l&apos;utilisation de cookies conformément à notre politique de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="font-['Inter'] font-[900] text-xl tracking-tight text-black">
              7. Limitation de responsabilité
            </h2>
            <p>
              Vizion s&apos;efforce de fournir des informations aussi précises que possible sur le site. Toutefois, Vizion ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </section>

          <section>
            <h2 className="font-['Inter'] font-[900] text-xl tracking-tight text-black">
              8. Droit applicable
            </h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <p className="text-sm text-black/50 pt-8 border-t border-black/10">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>
      </div>
    </main>
  );
}
