# Learnings — Site Vizion

> Enseignements accumulés au fil du développement.
> Mettre à jour ce fichier après chaque itération significative.

**Dernière mise à jour :** 2026-02-24

---

## 1. Architecture & Décisions Structurantes

### Tailwind v4 sans fichier de config

Le projet utilise Tailwind CSS v4 avec le plugin PostCSS. **Il n'y a pas de `tailwind.config.ts`**. Toutes les personnalisations passent par :
- `globals.css` via les blocs `@theme inline { }` pour les tokens Tailwind
- `@utility` pour les classes utilitaires custom (`text-primary`, `text-secondary`, etc.)

**Conséquence :** Ne jamais chercher à créer un `tailwind.config.ts`. Toute extension du design system passe par `globals.css`.

### Contentlayer2 comme CMS

Le contenu est géré par Contentlayer2, pas un CMS headless. Les fichiers MDX dans `content/` sont la source de vérité.

**Points d'attention :**
- Le build Contentlayer (`contentlayer2 build`) doit tourner **avant** le build Next.js
- Les types sont générés dans `.contentlayer/generated/` — ne pas modifier manuellement
- Le nommage des fichiers suit le pattern `dossier__nom-du-contenu.mdx`
- Les computed fields (slug, url, readingTime) sont définis dans `contentlayer.config.ts`

### Next.js 16 + React 19

- App Router exclusivement (pas de `pages/` directory)
- Server Components par défaut, `"use client"` uniquement si nécessaire
- `generateStaticParams()` pour le SSG de toutes les routes dynamiques
- `generateMetadata()` pour le SEO par page
- Turbopack en dev, webpack pour le build (via `--webpack` flag en dev)

### Dev en mode Webpack

Le script `dev` utilise `next dev --webpack` au lieu de Turbopack par défaut. Probablement pour compatibilité avec Contentlayer2 qui peut avoir des issues avec Turbopack.

---

## 2. Design System — Patterns Confirmés

### Le système de couleurs est contextuel

La plus grande innovation du design system : les variables CSS `--text-primary`, `--text-secondary`, `--text-muted` et `--border-default` **changent de valeur** selon que le parent a la classe `dark-section` ou non.

**Ce pattern élimine le besoin d'un vrai dark mode.** Le site n'a pas de toggle dark/light — il gère le contraste section par section.

### Les 3 types de fond de section (confirmé via audit homepage)

Tout le site alterne entre exactement **3 types de fond** :

1. **Blanc** (`bg-white`) — Sections pures sans texture (Blog, Services)
2. **Card/Grisé** (`bg-card` = `#f8f8f6`) — Sections légèrement teintées, avec `grain-light` optionnel (Intro, CasClients, About, FAQ light)
3. **Sombre** (`dark-section grain-overlay` + `style={{ background: "var(--bg-dark)" }}`) — Hero, Assets, CTA final, FAQ dark

**Règle :** ne jamais inventer un 4e type de fond. Toute nouvelle section doit utiliser l'un de ces 3.

### Cartes : le pattern dépend du fond parent

| Fond parent | Carte standard | Hover carte |
|-------------|---------------|-------------|
| `bg-white` | `bg-card border border-black/[0.06]` | `hover:border-black/[0.12] hover:shadow-lg` |
| `bg-card` | `bg-white border border-black/[0.06]` | `hover:border-black/[0.12] hover:shadow-lg` |
| `dark-section` | `bg-white light-card border border-black/5 shadow-2xl` | — |
| `dark-section` (glass) | `bg-white/5 backdrop-blur-md border border-white/10` | `hover:bg-white/5` |

### Accent card = featured item
`bg-accent` avec `text-primary` (noir). Utilisé pour la carte mise en avant (ex: Services featured card, tab active dans Assets).

### Bordures : opacités canoniques

- Fond clair default: `border-black/[0.06]`
- Fond clair hover: `border-black/[0.12]` ou `border-black/[0.15]`
- Fond clair séparateur: `border-black/[0.08]`
- Fond sombre default: `border-white/10`
- Fond sombre hover: `border-white/20`
- Fond sombre séparateur: `border-white/5`

### Coins carrés partout

Tous les `--radius-*` sont à `0`. C'est un choix esthétique assumé (minimalisme corporate). Ne jamais ajouter de `rounded-*` sans demande explicite.

### Police unique : DM Sans

Une seule famille typographique pour tout le site. Les variations se font par :
- Weight (300 léger pour surtitres, 400 pour titres, 500-600 pour emphase, 700 pour bold)
- Size (système clamp() responsive)
- Letter-spacing (serré pour les titres, large pour les surtitres)

### L'accent lime (#D4FD00) est l'unique couleur vive

Utilisée pour : badges, icônes, gradients décoratifs, hovers. Elle ne doit jamais être utilisée comme couleur de texte sur fond clair (contraste insuffisant).

### Gradients décoratifs (blobs)

Utilisés dans les sections card et sombres. Opacité accent entre `0.06` et `0.12` max.
```
radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08–0.12) 0%, transparent 55–60%)
```

### Texture grain

- `grain-overlay` → sections sombres
- `grain-light` → sections claires avec texture
- *(rien)* → sections blanches pures

---

## 3. Patterns de Composants

### Barrel exports systématiques

Chaque dossier de composants (`home/`, `blog/`, `sections/`) a un `index.ts` qui exporte tous les composants avec des named exports :
```typescript
export { HeroSection } from "./HeroSection";
export { IntroSection } from "./IntroSection";
```

**Toujours maintenir ce pattern** quand on ajoute un composant.

### Séparation Server/Client

Les pages (`page.tsx`) sont des Server Components qui :
1. Récupèrent les données (Contentlayer)
2. Génèrent les métadonnées SEO
3. Délèguent le rendu interactif à un composant Client

Exemple : `page.tsx` (server) → `ServiceContent.tsx` (client, avec animations)

### Sections homepage centralisées

Tout le contenu de la homepage est dans `src/content/home.ts` (1000+ lignes). Les composants de section lisent ce fichier. **Ne pas dupliquer du contenu dans les composants.**

### MDX Components personnalisés

Les composants MDX sont définis dans `src/components/mdx/index.tsx`. Ils utilisent un mix de :
- CSS variables (`var(--color-primary-dark)`)
- Classes Tailwind (`text-2xl md:text-3xl`)
- Classes custom du design system (`heading-display`, `text-body`)

**Corrigé :** les variables orphelines (`--color-primary`, `--color-bg-alt`, etc.) ont été remplacées par les tokens actuels (cf. section 8).

---

## 4. SEO — Patterns Établis

### Structure SEO par page

Chaque page dynamique implémente :
1. `generateMetadata()` — title, description, openGraph, twitter, canonical
2. Schema JSON-LD inline — type adapté (BlogPosting, Service, FAQPage, etc.)
3. Breadcrumbs schema — pour la navigation Google

### Sitemap dynamique

Le fichier `src/app/sitemap.ts` génère automatiquement le sitemap XML à partir de tous les contenus Contentlayer. Priorités :
- 1.0 : homepage
- 0.9 : services
- 0.8 : blog index, contact
- 0.7 : articles, études de cas
- 0.3 : pages légales

### Indexation proactive

Le projet inclut un système d'indexation Google via l'API Indexing :
- `/api/request-indexing` — indexation manuelle d'une URL
- `/api/cron/daily-indexing` — indexation quotidienne automatique

---

## 5. Sécurité — Bonnes Pratiques en Place

### Headers de sécurité complets

Configurés dans `next.config.ts` :
- HSTS (63072000s, includeSubDomains, preload)
- CSP stricte (self + exceptions Google Maps)
- X-Frame-Options SAMEORIGIN
- Referrer-Policy strict-origin-when-cross-origin

### API Routes sécurisées

- Vérification de l'origin (CSRF)
- Rate limiting (3 requêtes / 15 min par IP)
- Échappement HTML (prévention XSS)
- Validation des emails

---

## 6. Animations — Approche Multi-Couches

### Framer Motion pour les UI animations

- `fadeInUp` + `stagger` pour les grilles
- `whileInView` avec `viewport={{ once: true }}` pour les animations au scroll
- `MotionProvider` dans le layout racine

### GSAP pour les animations complexes

- Scroll-triggered animations précises
- Plugin `@gsap/react` pour l'intégration React

### Lenis pour le smooth scroll

- `SmoothScroller` wrapper dans le layout racine
- Styles Lenis dans `globals.css` (overrides scroll-behavior)

---

## 7. Images — Stratégie d'Optimisation

- **Format principal :** AVIF (meilleure compression)
- **Fallback :** WebP
- **Logo :** SVG pour le header/footer, PNG pour Schema.org
- **Outil :** next/image avec Sharp pour l'optimisation automatique
- **Stockage :** `public/images/` organisé par catégorie (about/, blog/, services/, etc.)

---

## 8. Problèmes Résolus (2026-02-24)

### Variables CSS orphelines dans MDX components — CORRIGÉ

Le fichier `src/components/mdx/index.tsx` référençait 5 variables inexistantes. Corrigé :
- `var(--color-primary)` → `var(--color-accent)` (bordure blockquote)
- `var(--color-bg-alt)` → `var(--bg-grey)` (fond code inline)
- `var(--color-primary-dark)` → `var(--bg-dark)` (fond blocs pre) et `text-primary` (strong)
- `var(--color-text-secondary)` → `text-secondary` (texte blockquote)
- `var(--color-border)` → `border-default` (séparateurs hr)

### Variables orphelines dans globals.css @theme — CORRIGÉ

- `var(--color-bg)` → `var(--bg-white)`
- `var(--color-text)` → `var(--text-primary)`
- `var(--font-roboto)` → `var(--font-dm-sans)` (seule police du projet)

### Variables orphelines dans not-found.tsx — CORRIGÉ

- `var(--color-bg)` → `var(--bg-white)`
- `var(--color-primary)` → `text-accent`
- `var(--color-text)` → `text-primary`

### Couleurs hardcodées centralisées — CORRIGÉ

~535 instances de couleurs hardcodées remplacées par des tokens CSS :
- `#D4FD00` (432 instances) → `bg-accent`, `text-accent`, `border-accent`, `var(--color-accent)`
- `rgba(212, 253, 0, X)` (195 instances) → `rgba(var(--color-accent-rgb), X)` via nouveau token `--color-accent-rgb`
- `#0c0c0a` / `#0a0a0a` (95 instances) → `bg-dark`, `var(--bg-dark)` via nouveau token `--bg-dark`
- `#F2F2F2` (46 instances) → `bg-grey` via nouvelle utility
- `#1a1a1a` (68 instances) → `text-primary`, `border-black/X`, `currentColor`

### Nouveaux tokens et utilities ajoutés

**Tokens CSS (`globals.css`):**
- `--bg-dark: #0c0c0a` — fond sombre des sections hero et dark
- `--color-accent-rgb: 212, 253, 0` — canaux RGB pour usage dans rgba()

**Utilities Tailwind (`globals.css`):**
- `bg-accent`, `text-accent`, `border-accent` — couleur d'accent lime
- `bg-dark` — fond sombre
- `bg-grey` — fond gris alternatif

---

## 9. Dettes Techniques Restantes

### Pas de tests automatisés

Aucun framework de test configuré (ni Jest, ni Vitest). La validation passe par :
- TypeScript strict (erreurs de compilation)
- Contentlayer (validation des schémas MDX)
- Tests manuels

### Pas de système de dark mode natif

Le site n'utilise pas `prefers-color-scheme` ni `next-themes`. Le contraste est géré manuellement section par section via `.dark-section`. C'est un choix conscient mais qui nécessite une rigueur constante.

### Couleurs résiduelles acceptées

- `#D4FD00` dans le template email (`src/app/api/contact/route.ts`) — normal, les emails ne supportent pas les CSS variables
- Variantes de couleurs proches (#c8ff00, #b8ef00) dans un gradient BentoGrid — variantes uniques, non tokenisables

---

## 10. Évolutions Prévues

- Page `/services` (liste) — en cours de création
- Composants services (`src/components/services/`) — en expansion
