---
name: new-enjeux
description: Creer une nouvelle page enjeu complete (/enjeux/[slug]) pour le site Vizion. Utiliser quand on veut ajouter une situation de transformation (ex. lancement produit, restructuration commerciale) dans la section "Vos enjeux" du menu.
---

# Creer une page enjeu Vizion

Tu vas creer la page enjeu complete pour **$ARGUMENTS** sur le site Vizion.

Les pages enjeux sont accessibles depuis le mega menu "Vos enjeux" du header.
Elles s'adressent a une situation vecue par le client (le "quand"), pas a un service (le "quoi").
Route : `/enjeux/$ARGUMENTS`

## Etape 0 — Contexte dynamique

1. Lis `src/content/enjeux/types.ts` pour connaitre le type `EnjeuxContent` exact
2. Lis `src/content/services/index.ts` pour connaitre tous les services existants (slugs, titres, icones)
3. Lis `.claude/skills/new-enjeux/template-reference.md` pour les regles de longueur et de structure
4. Verifie si `src/content/enjeux/index.ts` existe. S'il n'existe pas, tu devras le creer.
5. Verifie si `src/app/enjeux/[slug]/page.tsx` existe. S'il n'existe pas, tu devras le creer.
6. **IMPORTANT** — Verifie si `src/components/enjeux/EnjeuxSignals.tsx` existe.
   - S'il n'existe PAS : STOP. Dis a l'utilisateur : "Le template visuel n'existe pas encore. Lance d'abord `/enjeux-template` pour creer les composants visuels, puis relance `/new-enjeux $ARGUMENTS`."
   - S'il existe : continue normalement.

## Etape 1 — Comprendre l'enjeu

Deduis les informations suivantes a partir du nom de l'enjeu ($ARGUMENTS) :

1. **Situation vecue** : a quel moment de vie de l'entreprise se situe cet enjeu ?
2. **Signaux de reconnaissance** : quels sont les 4 signes que l'on est dans cette situation ?
3. **Defis reels** : quelles sont les 4 consequences concretes si on ne structure pas bien cette etape ?
4. **Services Vizion les plus pertinents** : parmi les services dans index.ts, lesquels sont les plus directement utiles dans ce contexte ? (choisir 4 a 6 max)

Si le nom est ambigu, demande des precisions a l'utilisateur avant de continuer.

## Etape 2 — Generer le fichier de contenu

Cree `src/content/enjeux/$ARGUMENTS.ts` en important et exportant `EnjeuxContent`.

### Regles de tonalite (CLAUDE.md)
- Rigoureuse, experte, accessible, partenariale. Jamais agressive.
- Le visiteur doit se reconnaitre dans les premieres lignes. Parler SA situation, pas des services.
- INTERDIT : tiret cadratin `—` (em dash), promesses chiffrees non sourcees, anglicismes inutiles
- Les signaux commencent tous par "Vous..." (identification directe)
- Les approcheItems commencent par un verbe d'action (Diagnostiquer, Structurer, Aligner, Deployer...)

### Regles de structure (voir template-reference.md pour le detail)
- **9 sections** : identite, SEO, hero, signaux (4), defis (4), approche (4), services (4-6), FAQ (5), CTA
- **Longueurs de texte** : respecter strictement les fourchettes du template-reference.md
- **Services** : utiliser uniquement des slugs existants dans index.ts. Si un service pertinent n'existe pas encore, href: "/contact" + commentaire // TODO

### Regles SEO
- Mot-cle situation dans : metaTitle, metaDescription, heroTitle, faqTitle, 2+ questions FAQ
- metaTitle : 50-60 car., "[Situation] B2B : [angle] | Vizion"
- metaDescription : 140-160 car.
- 10-14 keywords (situation, secteur, intention, variations)

## Etape 3 — Creer ou mettre a jour l'index des enjeux

### Si `src/content/enjeux/index.ts` n'existe pas :

Cree-le avec :
```typescript
export { default as lancementProduit } from "./lancement-produit";
// etc.

export const allEnjeux = [
  // importer et lister tous les enjeux
];
```

### Si `src/content/enjeux/index.ts` existe :

Ajouter l'import et l'entree dans `allEnjeux`.

## Etape 4 — Creer ou verifier la route Next.js

### Si `src/app/enjeux/[slug]/page.tsx` n'existe pas :

Tu dois creer toute l'infrastructure de la route. Lis d'abord un exemple de page service :
- `src/app/services/[slug]/ServiceDetailContent.tsx` pour comprendre le pattern

Cree les fichiers suivants :

**`src/app/enjeux/[slug]/page.tsx`** — Server Component avec generateStaticParams + generateMetadata :
```typescript
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allEnjeux } from "@/content/enjeux";
import { EnjeuxDetailContent } from "./EnjeuxDetailContent";
import { createMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return allEnjeux.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const enjeu = allEnjeux.find((e) => e.slug === slug);
  if (!enjeu) return {};
  return createMetadata({
    title: enjeu.metaTitle,
    description: enjeu.metaDescription,
    path: `/enjeux/${slug}`,
  });
}

export default async function EnjeuxPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const enjeu = allEnjeux.find((e) => e.slug === slug);
  if (!enjeu) notFound();
  return <EnjeuxDetailContent enjeu={enjeu} />;
}
```

**`src/app/enjeux/[slug]/EnjeuxDetailContent.tsx`** — Client Component qui assemble les sections.

Structure des sections dans l'ordre :
1. Hero (fond sombre) — heroTitle, heroSubtitle, heroBadge, CTA "Nous contacter"
2. Signaux de reconnaissance (fond card/grise) — "Vous etes dans cette situation si..." + 4 cards
3. Defis cles (fond sombre) — titre tension + 4 defis en grille
4. Approche Vizion (fond blanc, sticky) — methode en 4 etapes numerotees
5. Services recommandes (fond card/grise) — 4-6 cards cliquables vers /services/[slug]
6. FAQ (fond blanc) — 5 questions avec accordeon
7. CTA final (fond sombre) — accroche + bouton "Nous contacter"

**Regles de design (CLAUDE.md) :**
- Sections sombres : `dark-section grain-overlay` + `style={{ background: "var(--bg-dark)" }}`
- Sections grises : `bg-card`
- Sections blanches : `bg-white`
- Coins carres partout (pas de rounded-*)
- Tokens CSS : bg-accent, text-primary, text-secondary, border-black/[0.06], etc.
- Padding standard : `py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12`
- Conteneur : `max-w-[82.5rem] mx-auto`

### Si `src/app/enjeux/[slug]/page.tsx` existe deja :

Verifier que le nouveau enjeu est bien dans allEnjeux (index.ts) et que generateStaticParams le couvre.

## Etape 5 — Mettre a jour le sitemap

Verifie que `src/app/sitemap.ts` inclut les routes `/enjeux/[slug]`.
Si ce n'est pas le cas, ajoute les enjeux au sitemap en suivant le meme pattern que les services.

## Etape 6 — Validation

1. Verifier que le build passe : `npm run build`
2. Verifier la checklist du template-reference.md
3. Verifier que chaque `href` de service pointe vers un slug existant dans index.ts

Si le build echoue, corriger les erreurs avant de terminer.
