---
name: service-illustration
description: Generer une illustration HTML/Tailwind custom pour la section SolutionSticky d'un service Vizion. Prend le slug du service en argument.
---

# Generer une illustration service

Tu vas creer une illustration HTML/Tailwind pour le service **$ARGUMENTS** dans la section SolutionSticky du site Vizion.

## Etape 1 — Lire le contenu du service

1. Lis `src/content/services/$ARGUMENTS.ts` pour comprendre :
   - Le titre du service (`title`, `heroTitle`)
   - Les items de la solution (`solutionItems`) — ce sont les points cles affiches a cote de l'illustration
   - Le constat/probleme (`constat`)
   - Les features bento si elles existent (`bentoCards`)
   - Le process (`processSteps`)
   - Les metriques (`metrics`)
   - La categorie du service

2. Lis l'illustration existante dans `src/components/services/SolutionIllustrations.tsx` pour :
   - Comprendre le format attendu (composant React fonctionnel)
   - Voir le mapping slug → composant dans `ILLUSTRATIONS`
   - Reperer l'illustration actuelle pour ce slug

## Etape 2 — Concevoir l'illustration

L'illustration doit :

### Representer visuellement le service
- **Mimer un outil ou ecran reel** que le client utiliserait ou verrait (ex: dashboard, email, pipeline CRM, interface IA, SERP Google, post LinkedIn, wireframe, etc.)
- **Inclure des donnees realistes** issues du contenu du service (metriques, etapes, termes specifiques)
- **Raconter une histoire** : l'illustration doit montrer le RESULTAT du service, pas juste des blocs abstraits

### Respecter le design system
- **Fond** : `bg-white/[0.07] backdrop-blur-md border border-white/10` (glassmorphism dark)
- **Texte principal** : `text-white` ou `text-white/80`
- **Texte secondaire** : `text-white/40` a `text-white/60`
- **Accent** : `text-accent`, `bg-accent/10`, `border-accent/20`, `bg-accent/30`
- **Separateurs** : `border-white/[0.08]`
- **Sous-cartes** : `bg-white/[0.04] border border-white/[0.06]` ou `bg-white/[0.06] border border-white/[0.08]`
- **Coins carres** : JAMAIS de `rounded-*` (sauf rounded-full pour des points/dots decoratifs)
- **Police** : tailles `text-[9px]` a `text-[16px]` (c'est une illustration compacte)

### Contraintes techniques
- Le composant doit etre `w-full` (prend toute la largeur)
- PAS de `max-w-[xxxpx]` — l'illustration s'adapte a son conteneur
- PAS d'imports externes (pas d'icones Lucide, pas d'images)
- Utiliser des caracteres Unicode pour les icones simples (▶ ◇ ◷ → ✓ ● ■ etc.)
- PAS de `"use client"` sur le composant individuel (le fichier parent l'a deja)
- PAS d'emoji
- Texte en francais
- Pas de tiret cadratin (em dash —)

### Niveau de detail attendu
- **Minimum 30 lignes** de JSX pour l'illustration
- **Donnees realistes** : vrais chiffres, vrais noms, vrais termes metier
- **Interactivite CSS** : hover states sur les elements cliquables (hover:border-accent/30, etc.)
- **Hierarchie visuelle** : un element principal mis en avant (bg-accent/10 ou bordure accent)

## Etape 3 — Implementer

1. Ouvre `src/components/services/SolutionIllustrations.tsx`
2. Remplace le composant existant pour ce slug par ta nouvelle illustration
3. Garde le meme nom de fonction
4. Verifie que le mapping dans `ILLUSTRATIONS` pointe bien vers ton nouveau composant

## Etape 4 — Verifier

1. Verifie que le fichier compile : `npx tsc --noEmit --pretty 2>&1 | head -20`
2. Si erreur, corrige immediatement

## Exemples d'illustrations par type de service

| Type de service | Illustration recommandee |
|---|---|
| Strategie/audit | Dashboard avec scores, barres de progression, recommandations |
| Site web/landing | Browser mockup avec wireframe detaille, sections, metriques |
| CRM | Pipeline kanban avec deals, montants, probabilites |
| SEO | SERP Google avec positions, snippets enrichis |
| Contenu | Calendrier editorial, preview article avec metriques |
| Prospection | Sequence emails avec taux d'ouverture, timeline |
| Publicite | Dashboard ads avec graphiques, CPL, ROAS |
| Personal branding | Post LinkedIn avec engagement, profil |
| IA | Interface conversationnelle avec resultats structures |
| Workflows | Diagramme de flux avec noeuds, conditions, actions |
| Sales enablement | Slides preview, tableau comparatif, objections |
