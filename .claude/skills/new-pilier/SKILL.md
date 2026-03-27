---
name: new-pilier
description: Creer une nouvelle page pilier complete (contenu, images, SEO, liens vers services enfants). Utiliser quand on veut ajouter un pilier au site Vizion.
---

# Creer un nouveau pilier Vizion

Tu vas creer une page pilier complete pour **$ARGUMENTS** sur le site Vizion.

Un pilier est une page hub qui presente une discipline (ex: Product Marketing, Growth Marketing) et renvoie vers ses services enfants. Il utilise `isPilier: true` et le composant `CategoryDetailContent`.

## Etape 0 — Contexte dynamique

1. Lis `src/content/services/index.ts` pour voir les services et piliers existants
2. Lis `src/content/services/types.ts` pour connaitre le type `ServiceContent` exact (champs pilier-specifiques)
3. Lis `.claude/skills/new-pilier/template-reference.md` pour les regles de longueur et structure

## Etape 1 — Collecte d'informations

Avant de generer quoi que ce soit, demande a l'utilisateur les informations suivantes si elles ne sont pas evidentes :

1. **Nom de la discipline / categorie** (ex: "Sales Enablement", "Growth Marketing")
2. **Services enfants** (3-5 services existants ou a creer qui forment ce pilier)
3. **Angle editorial** : quel probleme central ce pilier resout pour le client ?
4. **Cibles principales** (types d'entreprises visees)

Si l'utilisateur a deja fourni ces infos ou si elles sont evidentes, passe directement a l'etape 2.

## Etape 2 — Recherche de sources pour les metriques

Les piliers ont une section **pilierMetrics** avec 3 metriques chiffrees et sourcees. C'est CRITIQUE : chaque metrique doit etre reelle, verifiable et accompagnee d'une URL source.

1. **Recherche web** : utilise WebSearch pour trouver 3 statistiques sectorielles recentes (2023-2026) en lien avec la discipline du pilier
2. **Sources acceptees** : Forrester, Gartner, McKinsey, HubSpot State of Marketing, LinkedIn B2B Institute, Salesforce State of Sales, Content Marketing Institute, SiriusDecisions/Forrester
3. **Sources refusees** : blogs d'agences, infographies sans source, chiffres non verifiables
4. **Format** : chaque metrique a un `value` (nombre), `suffix` (%, x, +), `label` (phrase courte), `direction` (up/down), `context` (explication 1 phrase + source + annee), `sourceUrl` (URL directe)

Si tu ne trouves pas 3 sources fiables, demande a l'utilisateur. Ne fabrique JAMAIS de chiffres.

## Etape 3 — Lire le modele de reference

Le modele de reference est **`src/content/services/credibilite-positionnement.ts`** (Product Marketing). C'est le fichier a utiliser comme reference pour le format et la structure d'un pilier.

1. Lis ce fichier pour voir le format exact et toutes les sections pilier
2. Lis le template-reference dans `.claude/skills/new-pilier/template-reference.md` pour les regles de longueur

## Etape 4 — Generer le fichier de contenu

Cree `src/content/services/$ARGUMENTS.ts` en respectant TOUTES ces regles :

### Regles de tonalite (CLAUDE.md)
- Rigoureuse, experte, accessible, partenariale. Jamais agressive.
- Vocabulaire : marketing strategique, positionnement, architecture de message, sales enablement, cycle de vente, feuille de route, alignement marketing-ventes
- INTERDIT : tiret cadratin `—` (em dash), promesses excessives, anglicismes inutiles, jargon vague
- Pas de fausses promesses : pas de "+40% de conversion", pas de "resultats garantis"

### Regles de copy (PILIER SPECIFIQUE)
- **Section constat** : paragraphe 1 = accroche emotionnelle (le probleme vecu par le client), paragraphe 2 = definition de la discipline + transition vers les 3 piliers
- **Statements constat** : voix active, descriptifs (pas de "nous"), titres qui commencent par "Un" ou "Des"
- **Solution items** : introduire le "nous" pour marquer l'accompagnement Vizion
- **Timing items** : commencent par "Vous..." (le lecteur se reconnait)
- **Targets items** : descriptifs, pas de promesse, expliquent pourquoi ce type d'entreprise est concerne
- **FAQ** : questions naturelles (pas de jargon), reponses honnetes sans promesses chiffrees
- **Testimonials** : credibles, pas de resultats miracles

### Regles de structure (voir template-reference.md pour le detail)
- **`isPilier: true`** obligatoire
- **`order: 10X`** (piliers dans les 100+)
- **11 sections** : identite, SEO, hero, constat (avec paragraphs + statements), solution, pilierMethodology, pilierMetrics, pilierTiming, pilierTargets, FAQ, CTA final
- **Related services** : 3-5 services enfants existants ou a creer
- **Champs process vides** : `processTitle: ""`, `processSubtitle: ""`, `processSteps: []` (les piliers n'ont pas de process timeline)

### Regles SEO
- Mot-cle principal dans : metaTitle, metaDescription, heroTitle, faqTitle, constat.title, 2+ questions FAQ
- metaTitle : 50-60 car., mot-cle en debut, "| Vizion" a la fin
- metaDescription : 140-160 car.
- 8-12 keywords (principal, longue traine, variations, synonymes)

### Regles Related Services
- Les `slug` doivent correspondre a des services existants dans index.ts
- Le `href` doit pointer vers `/services/{{slug}}`
- L'icone et le titre doivent correspondre au service reference
- Si un service n'existe pas encore : `href: "/contact"` + commentaire `// TODO: creer le service et changer vers /services/slug`

## Etape 5 — Mettre a jour le registry et le menu

### Registry (`src/content/services/index.ts`)
1. Ajouter l'import du nouveau pilier
2. L'ajouter au tableau `allServices`

### Menu services (`src/lib/constants.ts`)
1. Lis `src/lib/constants.ts` pour voir le tableau `SERVICE_MENU_CATEGORIES`
2. Trouve l'item de menu correspondant au nouveau pilier (par son `label`)
3. Ajoute `href: "/services/{{slug}}"` a cet item pour activer le lien dans le mega menu
4. Si aucun item ne correspond exactement, trouve le plus proche ou demande a l'utilisateur

## Etape 6 — Creer la structure d'images

Creer le dossier `public/images/services/$ARGUMENTS/` avec un fichier `IMAGES_A_FOURNIR.md` :

```
public/images/services/$ARGUMENTS/
├── hero.avif                    # A fournir (1200x800)
└── IMAGES_A_FOURNIR.md
```

Le fichier IMAGES_A_FOURNIR.md doit lister :
- Image hero (1200x800) : description du visuel attendu
- Image solution/metrics (800x600) : si `solutionImage` pointe vers une image dediee

Note : les piliers reutilisent souvent les images de leurs services enfants pour `solutionImage` et `heroImage`. Verifier si une image existante convient avant d'en demander une nouvelle.

## Etape 7 — Validation

1. Verifier que le build passe : `npm run build`
2. Verifier la checklist :
   - [ ] `isPilier: true` present
   - [ ] `order` dans les 100+
   - [ ] 11 sections presentes (identite, SEO, hero, constat, solution, methodology, metrics, timing, targets, FAQ, CTA)
   - [ ] `processTitle`, `processSubtitle`, `processSteps` vides mais presents
   - [ ] 3 statements dans constat (voix active, descriptifs)
   - [ ] 3-4 solution items (avec "nous")
   - [ ] 3-4 steps dans pilierMethodology
   - [ ] 3 metriques sourcees dans pilierMetrics (URLs valides)
   - [ ] 4-5 items dans pilierTiming (commencent par "Vous...")
   - [ ] 4-5 items dans pilierTargets + featuredIndex
   - [ ] 7 FAQs honnetes sans fausses promesses
   - [ ] 3 temoignages credibles
   - [ ] 3-5 related services avec bons slugs/href
   - [ ] Aucun tiret cadratin `—`
   - [ ] Mots-cles SEO bien places
   - [ ] Index mis a jour
   - [ ] Lien ajoute dans le menu services (constants.ts)
   - [ ] Structure images creee

Si le build echoue, corriger les erreurs avant de terminer.
