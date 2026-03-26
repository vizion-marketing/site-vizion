---
name: new-service
description: Creer une nouvelle page service complete (contenu, images, SEO). Utiliser quand on veut ajouter un service au site Vizion.
---

# Creer un nouveau service Vizion

Tu vas creer une page service complete pour **$ARGUMENTS** sur le site Vizion.

## Etape 0 — Contexte dynamique

1. Lis `src/content/services/index.ts` pour voir les services existants
2. Lis `src/lib/icon-resolver.ts` pour connaitre les icones Lucide disponibles

## Etape 1 — Collecte d'informations

Avant de generer quoi que ce soit, demande a l'utilisateur les informations suivantes si elles ne sont pas evidentes du nom du service :

1. **Categorie** (ex: PRODUCT MARKETING, STRATEGIE MARKETING, GROWTH, etc.)
2. **3 services complementaires** parmi les existants (pour la section Related Services)
3. **Points de douleur specifiques** du client cible pour ce service (optionnel, tu peux les deduire)

Si l'utilisateur a deja fourni ces infos ou si elles sont evidentes, passe directement a l'etape 2.

## Etape 2 — Lire le modele de reference

Le modele de reference est **`src/content/services/creation-refonte-site-web.ts`**. C'est le SEUL fichier a utiliser comme reference pour le format, les longueurs de texte et la structure.

1. Lis `src/content/services/types.ts` pour connaitre le type `ServiceContent` exact
2. Lis `src/content/services/creation-refonte-site-web.ts` pour voir le format exact, les longueurs de texte et TOUTES les sections (y compris bento, scrollTitle, qualityGuarantees)
3. Lis `src/content/services/index.ts` pour connaitre le prochain `order`
4. Lis le fichier template dans `.claude/skills/new-service/template-reference.md` pour les regles de longueur et structure

## Etape 3 — Generer le fichier de contenu

Cree `src/content/services/$ARGUMENTS.ts` en respectant TOUTES ces regles :

### Regles de tonalite (CLAUDE.md)
- Rigoureuse, experte, accessible, partenariale. Jamais agressive.
- Vocabulaire : marketing strategique, positionnement, architecture de message, sales enablement, cycle de vente, feuille de route, alignement marketing-ventes
- INTERDIT : tiret cadratin `—` (em dash), promesses excessives, anglicismes inutiles, jargon vague

### Regles de structure (voir template-reference.md pour le detail)
- **14 sections obligatoires** : identite, SEO, hero, constat, solution, scrollTitle, bentoCards, process, quality, testimonials, FAQ, related, inlineCTAs, CTA final
- **Nombre d'items fixes** : 4 statements, 5 solution items, 3 garanties, 3 temoignages, 7 FAQs, 3 related services, 2 inline CTAs, 4-6 process steps
- **Bento obligatoire** : sectionTitle, sectionDescription, image, technology (avec logos), performance (metrique chiffree), noTemplate, widgets (avec tags), integrations (avec logos), growth
- **Longueurs de texte** : respecter les fourchettes de caracteres du template-reference.md. C'est CRITIQUE pour ne pas casser l'UI.

### Regles SEO
- Mot-cle principal dans : metaTitle, metaDescription, heroTitle, processTitle, faqTitle, 2+ questions FAQ
- metaTitle : 50-60 car., mot-cle en debut, "| Vizion" a la fin
- metaDescription : 140-160 car.
- 12-15 keywords (principal, longue traine, variations, synonymes)

### Regles Related Services
- Les `slug` doivent correspondre a des services existants dans index.ts
- Le `href` doit pointer vers `/services/{{slug}}` (PAS vers `/contact`, sauf si le service n'existe pas encore)
- L'icone et le titre doivent correspondre au service reference
- Si un service n'existe pas encore : `href: "/contact"` + commentaire `// TODO: changer vers /services/slug`

## Etape 4 — Mettre a jour le registry et le menu

### Registry (`src/content/services/index.ts`)
1. Ajouter l'import du nouveau service
2. L'ajouter au tableau `allServices`

### Menu services (`src/lib/constants.ts`)
1. Lis `src/lib/constants.ts` pour voir le tableau `SERVICE_MENU_CATEGORIES`
2. Trouve l'item de menu correspondant au nouveau service (par son `label`)
3. Ajoute `href: "/services/{{slug}}"` a cet item pour activer le lien dans le mega menu
4. Si aucun item ne correspond exactement, trouve le plus proche ou demande a l'utilisateur

## Etape 5 — Creer la structure d'images

Creer le dossier `public/images/services/$ARGUMENTS/` avec :

```
public/images/services/$ARGUMENTS/
├── hero.avif                    # A fournir (1200x800)
├── solution.avif                # A fournir (800x600)
├── bento.avif                   # A fournir (600x400, image equipe/contexte)
├── testimonials/
│   ├── 01.avif                  # A fournir (200x200, carre)
│   ├── 02.avif
│   └── 03.avif
└── screenshots/                 # Pour scrollTitle.showcaseImages (6-9 images)
    ├── 01.avif
    ├── 02.avif
    └── ...
```

Creer un fichier `IMAGES_A_FOURNIR.md` dans ce dossier avec la liste des images, dimensions et descriptions.

## Etape 6 — Validation

1. Verifier que le build passe : `npm run build`
2. Verifier la checklist :
   - [ ] 14 sections presentes (y compris bento et scrollTitle)
   - [ ] Longueurs de texte respectees
   - [ ] Nombre d'items corrects
   - [ ] Aucun tiret cadratin `—`
   - [ ] Mots-cles SEO bien places
   - [ ] Related services avec bons slugs/href
   - [ ] Icones existantes dans icon-resolver.ts
   - [ ] Structure images creee (dont bento.avif et screenshots/)
   - [ ] Index mis a jour
   - [ ] Lien ajoute dans le menu services (constants.ts)

Si le build echoue, corriger les erreurs avant de terminer.
