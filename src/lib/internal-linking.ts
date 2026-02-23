import { allPosts } from "contentlayer/generated";

/**
 * Interface pour un article suggéré
 */
export interface SuggestedArticle {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  featuredImage?: string;
  tags: string[];
  score: number; // Nombre de tags en commun
}

/**
 * Calcule les articles suggérés basés sur la similarité des tags
 *
 * @param currentSlug - Le slug de l'article actuel
 * @param currentTags - Les tags de l'article actuel
 * @param limit - Nombre maximum de suggestions (défaut: 3)
 * @returns Array d'articles suggérés triés par pertinence
 *
 * @example
 * const suggestions = getSuggestedArticles("product-marketing-guide", ["product marketing", "b2b", "positionnement"]);
 * // Retourne les 3 articles les plus pertinents
 */
export function getSuggestedArticles(
  currentSlug: string,
  currentTags: string[],
  limit: number = 3
): SuggestedArticle[] {
  // Filtrer les articles publiés, excluant l'article courant
  const eligiblePosts = allPosts.filter(
    (post) => !post.draft && post.slug !== currentSlug
  );

  // Calculer le score de similarité pour chaque article
  const scoredPosts = eligiblePosts.map((post) => {
    // Compter les tags en commun
    const commonTags = post.tags.filter((tag) =>
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
      tags: post.tags,
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
 *
 * @example
 * shouldShowSuggestion(headings, 1) // True si au moins 2 H2
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

  // Logique de décision :
  // - 0-2 H2 : aucune suggestion (article trop court)
  // - 3-4 H2 : 1 suggestion (après le 2ème H2)
  // - 5-6 H2 : 2 suggestions (après les 2ème et 4ème H2)
  // - 7+ H2 : 3 suggestions (après les 2ème, 4ème et 6ème H2)

  if (h2Count < 3) return 0;
  if (h2Count < 5) return 1;
  if (h2Count < 7) return 2;
  return 3;
}
