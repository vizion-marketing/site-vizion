import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et protection des données personnelles - Vizion",
  alternates: {
    canonical: "https://by-vizion.com/confidentialite",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-grey pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Retour à l&apos;accueil
        </Link>

        <h1 className="font-[var(--font-body)] font-[900] text-4xl md:text-5xl tracking-tight text-black mb-12">
          Politique de Confidentialité
        </h1>

        <div className="prose prose-lg max-w-none text-black/80 space-y-8">
          <section>
            <h2 className="font-[var(--font-body)] font-[900] text-xl tracking-tight text-black mt-0">
              1. Introduction
            </h2>
            <p>
              Vizion (« nous », « notre ») s&apos;engage à protéger la vie privée des utilisateurs de son site web by-vizion.com. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-body)] font-[900] text-xl tracking-tight text-black">
              2. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données personnelles est :
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li><strong>Vizion</strong></li>
              <li>815 La Pyrénéenne, 31670 Labège, France</li>
              <li>Email : contact@by-vizion.com</li>
              <li>Téléphone : 07 50 83 65 43</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-body)] font-[900] text-xl tracking-tight text-black">
              3. Données collectées
            </h2>
            <p>
              Nous collectons les données personnelles suivantes :
            </p>
            <ul>
              <li><strong>Via le formulaire de contact :</strong> prénom, nom, email professionnel, entreprise, sujet et message</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite (via cookies analytiques)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-body)] font-[900] text-xl tracking-tight text-black">
              4. Finalités du traitement
            </h2>
            <p>
              Vos données personnelles sont utilisées pour :
            </p>
            <ul>
              <li>Répondre à vos demandes de contact</li>
              <li>Vous recontacter dans le cadre d&apos;une opportunité commerciale</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Établir des statistiques de fréquentation</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-body)] font-[900] text-xl tracking-tight text-black">
              5. Base légale du traitement
            </h2>
            <p>
              Le traitement de vos données repose sur :
            </p>
            <ul>
              <li><strong>Votre consentement</strong> lors de l&apos;envoi du formulaire de contact</li>
              <li><strong>Notre intérêt légitime</strong> pour l&apos;amélioration de nos services et l&apos;analyse de l&apos;audience</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-body)] font-[900] text-xl tracking-tight text-black">
              6. Durée de conservation
            </h2>
            <p>
              Vos données personnelles sont conservées pendant :
            </p>
            <ul>
              <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-body)] font-[900] text-xl tracking-tight text-black">
              7. Destinataires des données
            </h2>
            <p>
              Vos données peuvent être transmises à :
            </p>
            <ul>
              <li>Notre équipe interne (commerciale, technique)</li>
              <li>Nos sous-traitants techniques (hébergeur, service d&apos;envoi d&apos;emails)</li>
            </ul>
            <p>
              Nous ne vendons ni ne louons vos données personnelles à des tiers.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-body)] font-[900] text-xl tracking-tight text-black">
              8. Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : <strong>contact@by-vizion.com</strong>
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-body)] font-[900] text-xl tracking-tight text-black">
              9. Cookies
            </h2>
            <p>
              Notre site utilise des cookies pour :
            </p>
            <ul>
              <li><strong>Cookies essentiels :</strong> fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> mesure d&apos;audience (anonymisés)</li>
            </ul>
            <p>
              Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-body)] font-[900] text-xl tracking-tight text-black">
              10. Sécurité
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-body)] font-[900] text-xl tracking-tight text-black">
              11. Réclamation
            </h2>
            <p>
              Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d&apos;introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-black underline hover:no-underline">www.cnil.fr</a>
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-body)] font-[900] text-xl tracking-tight text-black">
              12. Modifications
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.
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
