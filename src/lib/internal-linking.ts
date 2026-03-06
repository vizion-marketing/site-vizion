/**
 * Interface pour un article suggéré
 */
export interface SuggestedArticle {
  slug: string;
  title: string;
  category: string;
  readingTime?: string;
  featuredImage?: string;
  tags: string[];
  score: number; // Nombre de tags en commun
}

/**
 * Interface minimale pour un post passé en paramètre
 */
interface PostLike {
  slug: string;
  title: string;
  category: string;
  readingTime?: string;
  featuredImage?: string;
  tags?: string[];
  draft?: boolean;
}

/**
 * Calcule les articles suggérés basés sur la similarité des tags
 *
 * @param currentSlug - Le slug de l'article actuel
 * @param currentTags - Les tags de l'article actuel
 * @param limit - Nombre maximum de suggestions (défaut: 3)
 * @param posts - Liste des posts à comparer
 * @returns Array d'articles suggérés triés par pertinence
 *
 * @example
 * const suggestions = getSuggestedArticles("product-marketing-guide", ["product marketing", "b2b"], 3, allPosts);
 */
export function getSuggestedArticles(
  currentSlug: string,
  currentTags: string[],
  limit: number = 3,
  posts: PostLike[],
): SuggestedArticle[] {
  // Filtrer les articles publiés, excluant l'article courant
  const eligiblePosts = posts.filter(
    (post) => !post.draft && post.slug !== currentSlug
  );

  // Calculer le score de similarité pour chaque article
  const scoredPosts = eligiblePosts.map((post) => {
    const postTags = post.tags || [];
    // Compter les tags en commun
    const commonTags = postTags.filter((tag) =>
      currentTags.some((currentTag) =>
        currentTag.toLowerCase() === tag.toLowerCase()
      )
    );

    return {
      slug: post.slug,
      title: post.title,
      category: post.category,
      readingTime: post.readingTime,
      featuredImage: post.featuredImage,
      tags: postTags,
      score: commonTags.length,
    };
  });

  // Filtrer les articles sans tags en commun et trier par score décroissant
  return scoredPosts
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      // Trier d'abord par score
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      // En cas d'égalité, trier par titre alphabétique pour cohérence
      return a.title.localeCompare(b.title);
    })
    .slice(0, limit);
}

/**
 * Détermine si on doit afficher une suggestion à une position donnée
 *
 * @param headings - Les headings extraits de l'article
 * @param insertAfterH2Index - Index du H2 après lequel insérer (0-based)
 * @returns true si on doit afficher la suggestion
 */
export function shouldShowSuggestion(
  headings: Array<{ level: number; text: string; slug: string }>,
  insertAfterH2Index: number
): boolean {
  const h2Count = headings.filter((h) => h.level === 2).length;
  return h2Count > insertAfterH2Index;
}

/**
 * Obtient le nombre total de suggestions à afficher dans un article
 * Basé sur la longueur du contenu (nombre de H2)
 *
 * @param headings - Les headings extraits de l'article
 * @returns Nombre de suggestions à afficher (0, 1, 2 ou 3)
 */
export function getSuggestionCount(
  headings: Array<{ level: number; text: string; slug: string }>
): number {
  const h2Count = headings.filter((h) => h.level === 2).length;

  if (h2Count < 3) return 0;
  if (h2Count < 5) return 1;
  if (h2Count < 7) return 2;
  return 3;
}
