/**
 * Convertit un titre (ou toute chaîne) en slug compatible URL et nom de fichier.
 * Minuscules, espaces → tirets, suppression des caractères non autorisés, normalisation des accents.
 */
export function slugify(text: string): string {
  if (!text || typeof text !== "string") return "";

  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "") // retirer accents
    .replace(/[\s_]+/g, "-") // espaces et underscores → tirets
    .replace(/[^a-z0-9-]/g, "") // garder uniquement alphanum et tirets
    .replace(/-+/g, "-") // pas de tirets multiples
    .replace(/^-|-$/g, ""); // pas de tiret en début/fin
}
