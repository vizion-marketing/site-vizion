import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// Static categories and posts
const categoriesData: Record<string, { name: string; description: string }> = {
  "strategie": {
    name: "Stratégie",
    description: "Articles sur la stratégie digitale, la transformation et l'accompagnement au changement.",
  },
  "tech": {
    name: "Tech",
    description: "Guides et analyses sur les technologies, outils et bonnes pratiques techniques.",
  },
  "innovation": {
    name: "Innovation",
    description: "Découvrez les dernières innovations et tendances du marché.",
  },
};

const allPosts = [
  {
    slug: "transformation-digitale-2024",
    title: "Les tendances de la transformation digitale en 2024",
    description: "Découvrez les grandes tendances qui façonnent la transformation digitale des entreprises en 2024.",
    date: "15 janvier 2024",
    category: "Stratégie",
    author: "Marie Dupont",
  },
  {
    slug: "choisir-solution-saas",
    title: "Comment choisir la bonne solution SaaS pour votre entreprise",
    description: "Guide complet pour sélectionner une solution SaaS adaptée à vos besoins.",
    date: "10 février 2024",
    category: "Tech",
    author: "Thomas Martin",
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categoriesData[slug];
  
  if (!category) {
    return { title: "Catégorie non trouvée" };
  }
  
  return {
    title: `${category.name} - Blog`,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(categoriesData).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categoriesData[slug];
  
  if (!category) {
    notFound();
  }

  const posts = allPosts.filter(
    (post) => post.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-b from-[var(--color-bg-alt)] to-[var(--color-bg)]">
        <div className="container-base">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Retour au blog
          </Link>
          
          <div className="max-w-2xl animate-slide-up">
            <span className="badge mb-4">Catégorie</span>
            <h1 className="heading-display text-4xl md:text-5xl text-[var(--color-primary)] mb-6">
              {category.name}
            </h1>
            <p className="text-secondary text-lg leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding">
        <div className="container-base">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-secondary">Aucun article dans cette catégorie pour le moment.</p>
              <Link href="/blog" className="btn btn-primary mt-6 inline-flex">
                Voir tous les articles
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, idx) => (
                <Link
                  key={idx}
                  href={`/blog/${post.slug}`}
                  className="card group p-6 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge text-xs">{post.category}</span>
                    <span className="text-xs text-[var(--color-text-muted)]">{post.date}</span>
                  </div>

                  <h2 className="heading-section text-lg mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  <p className="text-xs text-[var(--color-text-muted)]">
                    Par {post.author}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
