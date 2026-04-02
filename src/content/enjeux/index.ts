// ============================================================================
// Enjeux — Registry
// Un fichier par enjeu, tout centralisé ici.
// ============================================================================

export type { EnjeuxContent, EnjeuxSignal, EnjeuxDefi, EnjeuxApprocheItem, EnjeuxService, EnjeuxFAQ } from "./types";

import type { EnjeuxContent } from "./types";

import { lancementProduit } from "./lancement-produit";
import { restructurationCommerciale } from "./restructuration-commerciale";
import { changementDeCap } from "./changement-de-cap";
import { accelerationCroissance } from "./acceleration-croissance";
import { postRachat } from "./post-rachat";

export const allEnjeux: EnjeuxContent[] = [
  lancementProduit,
  restructurationCommerciale,
  changementDeCap,
  accelerationCroissance,
  postRachat,
];

export function getEnjeuxBySlug(slug: string): EnjeuxContent | undefined {
  return allEnjeux.find((e) => e.slug === slug);
}

export function getAllEnjeuxSlugs(): string[] {
  return allEnjeux.map((e) => e.slug);
}
