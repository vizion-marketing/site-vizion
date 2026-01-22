import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";

// Static local pages data for SEO
const localPagesData: Record<string, {
  city: string;
  service: string;
  region: string;
  title: string;
  description: string;
  heroTitle: string;
  content: string;
  features: string[];
}> = {
  "paris/conseil-digital": {
    city: "Paris",
    service: "Conseil Digital",
    region: "Île-de-France",
    title: "Conseil Digital à Paris",
    description: "Cabinet de conseil digital à Paris. Accompagnement stratégique et solutions sur mesure pour entreprises parisiennes.",
    heroTitle: "Votre partenaire digital à Paris",
    content: "Basés au cœur de Paris, nous accompagnons les entreprises franciliennes dans leur transformation digitale depuis plus de 10 ans. Notre connaissance approfondie du tissu économique parisien nous permet de proposer des solutions parfaitement adaptées aux enjeux locaux.",
    features: [
      "Proximité et réactivité",
      "Connaissance de l'écosystème tech parisien",
      "Réseau de partenaires locaux",
      "Accompagnement personnalisé",
    ],
  },
  "lyon/solutions-saas": {
    city: "Lyon",
    service: "Solutions SaaS",
    region: "Auvergne-Rhône-Alpes",
    title: "Solutions SaaS à Lyon",
    description: "Développement de solutions SaaS à Lyon. Experts cloud et applications métier pour entreprises lyonnaises et rhônalpines.",
    heroTitle: "Solutions SaaS à Lyon",
    content: "Notre équipe lyonnaise conçoit des solutions cloud performantes pour les entreprises de la région Auvergne-Rhône-Alpes. Lyon étant devenu un hub technologique majeur en France, nous sommes fiers de contribuer à cet écosystème dynamique avec nos expertises SaaS.",
    features: [
      "Équipe locale dédiée",
      "Expertise cloud et DevOps",
      "Méthodologie agile adaptée aux PME/ETI",
      "Support en français",
    ],
  },
  "marseille/transformation-digitale": {
    city: "Marseille",
    service: "Transformation Digitale",
    region: "Provence-Alpes-Côte d'Azur",
    title: "Transformation Digitale à Marseille",
    description: "Accompagnement à la transformation digitale à Marseille et en région PACA. Stratégie et mise en œuvre.",
    heroTitle: "Transformation Digitale à Marseille",
    content: "Nous accompagnons les entreprises marseillaises et de la région PACA dans leur transformation digitale. Notre approche pragmatique et notre connaissance du tissu économique local nous permettent de proposer des solutions adaptées aux spécificités de votre marché.",
    features: [
      "Connaissance du marché méditerranéen",
      "Approche pragmatique",
      "Accompagnement de bout en bout",
      "Réseau de partenaires régionaux",
    ],
  },
};

type Props = {
  params: Promise<{ city: string; service: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, service } = await params;
  const key = `${city}/${service}`;
  const page = localPagesData[key];
  
  if (!page) {
    return { title: "Page non trouvée" };
  }
  
  return {
    title: page.title,
    description: page.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(localPagesData).map((key) => {
    const [city, service] = key.split("/");
    return { city, service };
  });
}

export default async function LocalPage({ params }: Props) {
  const { city, service } = await params;
  const key = `${city}/${service}`;
  const page = localPagesData[key];
  
  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-b from-[var(--color-bg-alt)] to-[var(--color-bg)]">
        <div className="container-base">
          <div className="max-w-2xl animate-slide-up">
            <div className="flex items-center gap-2 text-[var(--color-accent)] text-sm font-medium mb-4">
              <MapPin size={16} />
              {page.city}, {page.region}
            </div>
            <h1 className="heading-display text-4xl md:text-5xl text-[var(--color-primary)] mb-6">
              {page.heroTitle}
            </h1>
            <p className="text-secondary text-lg leading-relaxed">
              {page.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-base">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="heading-section text-2xl text-[var(--color-primary)] mb-4">
                  {page.service} à {page.city}
                </h2>
                <p className="text-body text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                  {page.content}
                </p>

                <h3 className="heading-section text-xl text-[var(--color-primary)] mb-4 mt-12">
                  Pourquoi nous choisir à {page.city} ?
                </h3>
                <ul className="space-y-3">
                  {page.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-[var(--color-text)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="heading-section text-xl text-[var(--color-primary)] mb-4 mt-12">
                  Nos services à {page.city}
                </h3>
                <p className="text-body text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                  Nous proposons une gamme complète de services pour accompagner votre entreprise :
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="text-[var(--color-text)]">• Audit de maturité digitale</li>
                  <li className="text-[var(--color-text)]">• Définition de stratégie numérique</li>
                  <li className="text-[var(--color-text)]">• Accompagnement à la transformation</li>
                  <li className="text-[var(--color-text)]">• Formation des équipes</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="card p-6 border border-[var(--color-border)] sticky top-32">
                <h3 className="heading-section text-lg text-[var(--color-primary)] mb-4">
                  Contactez notre équipe à {page.city}
                </h3>
                <p className="text-secondary text-sm mb-6">
                  Rencontrons-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner.
                </p>
                <Link 
                  href="/contact" 
                  className="btn btn-primary w-full justify-center py-3 inline-flex items-center gap-2"
                >
                  Prendre rendez-vous <ArrowRight size={16} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="section-padding bg-[var(--color-bg-alt)]">
        <div className="container-base">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-section text-2xl text-[var(--color-primary)] mb-4">
              Votre partenaire de confiance en {page.region}
            </h2>
            <p className="text-secondary mb-8">
              Nous accompagnons des entreprises de toutes tailles à {page.city} et dans toute la région {page.region}.
              Notre équipe locale est à votre écoute pour comprendre vos enjeux et proposer des solutions adaptées.
            </p>
            <Link href="/cas-clients" className="btn btn-secondary px-8 py-3 inline-flex items-center gap-2">
              Voir nos références régionales <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
