# Vizion — Guide Projet

> Ce fichier est la référence absolue pour tout agent IA travaillant sur ce projet.
> Consulte-le **avant** chaque intervention. Mets-le à jour **après** chaque itération significative.

**Docs complémentaires :** [LEARNINGS.md](LEARNINGS.md) | [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

## 1. Identité & Contexte Business

### Qui est Vizion ?

Agence de marketing stratégique B2B basée à Toulouse, pionnière de l'IA appliquée au marketing et aux ventes. Vizion accompagne les entreprises dans leurs moments de transformation : lancement de produit, innovation, restructuration, accélération.

**Fondateurs :**
- **Lucas Gonzalez** — Stratégie, positionnement, architecture de message. Top 300 personnalités LinkedIn France.
- **Hugo Schuppe** — Pilier technique. Automatisations, intégrations, systèmes d'information.

**Création :** 2021 | **Siège :** Toulouse | **Clients :** +70 entreprises

### Positionnement

- Le marketing doit servir la vente, pas produire du contenu pour produire.
- Intervention tout au long du cycle commercial, y compris négociation et closing.
- IA utilisée là où elle apporte une valeur mesurable (lead magnets, tri de prospection, personnalisation).
- Modèle hybride : équipe interne + réseau de freelances experts.
- Un directeur marketing dédié comme interlocuteur unique.

### Clients cibles

- PME 10–250 collaborateurs, ETI, scale-ups B2B
- Secteurs : industrie, technologie, éditeurs SaaS, services B2B
- Budget type : 4 500 € – 15 000 €/mois
- Cycle de vente : 3 à 18 mois, multi-décideurs

### Ligne éditoriale

**Tonalité :** Rigoureuse, experte, accessible, partenariale. Jamais agressive.

**Vocabulaire privilégié :** marketing stratégique, positionnement, architecture de message, sales enablement, cycle de vente, feuille de route, alignement marketing-ventes, directeur marketing dédié.

**Termes à éviter :** promesses excessives, anglicismes inutiles, jargon vague, vocabulaire d'agence d'exécution.

### Coordonnées

- **Site :** https://by-vizion.com
- **LinkedIn :** https://www.linkedin.com/company/vizion-marketing-b2b/
- **Contact :** contact@by-vizion.com | 07 50 83 65 43

---

## 2. Tech Stack

| Couche | Technologie | Version |
|--------|-------------|---------|
| Framework | Next.js (App Router) | 16.1.4 |
| Runtime | React | 19.2.3 |
| Langage | TypeScript | 5.x |
| CSS | Tailwind CSS v4 + CSS custom properties | 4.x |
| CMS | Contentlayer2 (MDX) | 0.5.8 |
| Animations | Framer Motion + GSAP + Lenis | 12.x / 3.14 / 1.3 |
| Icons | Lucide React | 0.562.0 |
| Email | Resend | 6.8.0 |
| SEO | Google APIs (Indexing) | 171.4.0 |
| Images | Sharp (AVIF/WebP) | 0.34.5 |
| Carousel | Embla Carousel | 8.6.0 |
| Utilitaires | clsx, tailwind-merge, github-slugger | — |

**Build :** `contentlayer2 build && next build`
**Dev :** `next dev --webpack`
**Déploiement :** Vercel

---

## 3. Architecture Fichiers

```
site-vizion/
├── content/                    # Contenu MDX (source de vérité)
│   ├── blog/                   # Articles de blog
│   ├── services/               # Pages services (6)
│   ├── cas-clients/            # Études de cas (10+)
│   ├── pages/                  # Pages statiques
│   └── local/                  # Pages SEO local
├── src/
│   ├── app/                    # App Router Next.js
│   │   ├── layout.tsx          # Layout racine (fonts, providers, shell)
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── globals.css         # Design system complet (1185 lignes)
│   │   ├── sitemap.ts          # Sitemap XML dynamique
│   │   ├── blog/               # /blog et /blog/[slug]
│   │   ├── services/           # /services et /services/[slug]
│   │   ├── cas-clients/        # /cas-clients et /cas-clients/[slug]
│   │   ├── contact/            # /contact
│   │   └── api/                # Routes API (contact, indexing, cron)
│   ├── components/
│   │   ├── home/               # Sections homepage (barrel export via index.ts)
│   │   ├── blog/               # Composants blog (barrel export via index.ts)
│   │   ├── services/           # Composants services
│   │   ├── sections/           # Sections réutilisables (barrel export via index.ts)
│   │   ├── ui/                 # Primitives UI
│   │   ├── mdx/                # Composants MDX (index.tsx)
│   │   ├── icons/              # Icônes custom
│   │   ├── Header.tsx          # Navigation
│   │   ├── Footer.tsx          # Pied de page
│   │   ├── CallWidget.tsx      # Widget CTA flottant
│   │   └── ContactModal.tsx    # Modale de contact
│   ├── content/
│   │   └── home.ts             # Contenu centralisé homepage (1000+ lignes)
│   └── lib/                    # Utilitaires
│       ├── constants.ts        # SITE_URL, SITE_NAME, SOCIAL_LINKS
│       ├── mdx.ts              # Extraction TOC (extractHeadings)
│       ├── metadata.ts         # Helper createMetadata()
│       ├── contentlayer.ts     # Bridge Contentlayer
│       ├── slug.ts             # Utilitaires slug
│       ├── internal-linking.ts # Suggestions d'articles liés
│       ├── blog-frontmatter.ts # Parsing frontmatter blog
│       └── animations.ts       # Constantes d'animation
├── public/images/              # Assets statiques (AVIF, PNG, WebP)
├── contentlayer.config.ts      # Schémas Contentlayer (563 lignes)
├── next.config.ts              # Config Next.js (images, headers, security)
├── postcss.config.mjs          # PostCSS (Tailwind v4 plugin)
└── tsconfig.json               # TypeScript (paths: @/*, contentlayer/generated)
```

---

## 4. Design System

### 4.1 Palette de couleurs

Le design est **monochrome corporate** avec un accent lime.

| Token CSS | Valeur | Usage |
|-----------|--------|-------|
| `--bg-white` | `#FFFFFF` | Fond principal |
| `--bg-card` | `#f8f8f6` | Fond cartes (légèrement grisé) |
| `--bg-grey` | `#F2F2F2` | Fond alternatif (sections grises) |
| `--bg-dark` | `#0c0c0a` | Fond sombre (hero, sections dark) |
| `--color-black` | `#000000` | Noir pur |
| `--color-grey-light` | `#F2F2F2` | Gris clair |
| `--color-grey-mid` | `#B7B7B7` | Gris moyen |
| `--color-grey-dark` | `#6D6D6D` | Gris foncé |
| `--color-accent` | `#D4FD00` | Accent lime (highlights, badges, icônes) |
| `--color-accent-rgb` | `212, 253, 0` | Canaux RGB pour usage dans `rgba()` |

### 4.2 Couleurs sémantiques (context-aware)

Ces variables **changent automatiquement** selon le contexte (`.dark-section`).

| Token | Mode clair | Mode sombre (`.dark-section`) |
|-------|-----------|-------------------------------|
| `--text-primary` | `#1a1a1a` | `#ffffff` |
| `--text-secondary` | `#52525B` | `rgba(255,255,255,0.85)` |
| `--text-muted` | `#6b6b6b` | `rgba(255,255,255,0.6)` |
| `--border-default` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.1)` |

**Utilities Tailwind correspondantes :** `text-primary`, `text-secondary`, `text-muted`, `border-default`, `bg-accent`, `text-accent`, `border-accent`, `bg-dark`, `bg-grey`, `bg-card`

### 4.3 Sections sombres — La règle d'or

```html
<!-- Section fond sombre → ajouter class="dark-section" -->
<section className="bg-dark dark-section">
  <p className="text-primary">Texte blanc automatique</p>

  <!-- Carte claire dans une section sombre → ajouter class="light-card" -->
  <div className="bg-white light-card">
    <p className="text-primary">Texte noir automatique</p>
  </div>
</section>
```

### 4.4 Typographie

- **Police unique :** DM Sans (weights: 300, 400, 500, 600, 700)
- **H1 :** `clamp(48px, 8vw, 72px)` | weight 400 | line-height 0.92 | letter-spacing -0.04em
- **H2 :** `clamp(32px, 5vw, 52px)` | weight 400 | line-height 1.05 | letter-spacing -0.035em
- **H3 :** `clamp(20px, 3vw, 28px)` | weight 400 | line-height 1.15 | letter-spacing -0.02em
- **Surtitre :** 11px | weight 300 | letter-spacing 0.12em | uppercase
- **Body :** 16px | weight 400 | line-height 1.6

### 4.5 Principes visuels

- **Border radius :** Toujours `0` (coins carrés, esthétique minimaliste)
- **Ombres :** sm → xl avec rgba(0,0,0,X) progressif
- **Transitions :** fast (150ms), base (250ms), slow (400ms)
- **Conteneurs :** narrow (42rem), base (64rem), wide (82.5rem)

### 4.6 Sections — Les 3 types de fond (RÉFÉRENCE ABSOLUE)

Tout le site repose sur **3 fonds de section**, pas un de plus. Chaque page doit alterner entre eux.

| Type | Classes | Fond | Texture | Exemple homepage |
|------|---------|------|---------|------------------|
| **Blanc** | `bg-white` | `#FFFFFF` | — | Blog, Services |
| **Card/Grisé** | `bg-card` (+ éventuellement `grain-overlay` ou `grain-light`) | `#f8f8f6` | Optionnel | Intro/Manifeste, Cas Clients, About, FAQ light |
| **Sombre** | `dark-section grain-overlay` + `style={{ background: "var(--bg-dark)" }}` | `#0c0c0a` | `grain-overlay` | Hero, Assets, FAQ dark, CTA final |

**Padding section standard :**
```html
<!-- Standard -->
className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"

<!-- Large (hero, CTA) -->
className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12"
```

**Conteneur intérieur standard :**
```html
<div className="max-w-[82.5rem] mx-auto">
```

### 4.7 Cartes et blocs — Patterns canoniques

#### Sur fond blanc (`bg-white`)
```html
<!-- Carte standard -->
<div className="bg-card border border-black/[0.06]">...</div>
<!-- Hover standard -->
<div className="bg-card border border-black/[0.06] hover:border-black/[0.12] hover:shadow-lg transition-all duration-300">...</div>
```

#### Sur fond card/grisé (`bg-card`)
```html
<!-- Carte blanche sur fond grisé -->
<div className="bg-white border border-black/[0.06]">...</div>
<!-- Quote box / élément secondaire -->
<div className="bg-card border border-black/[0.06]">...</div>
```

#### Sur fond sombre (`dark-section`)
```html
<!-- Carte blanche (restaure les couleurs claires) -->
<div className="bg-white light-card border border-black/5 shadow-2xl">...</div>

<!-- Glassmorphism (éléments transparents) -->
<div className="bg-white/5 backdrop-blur-md border border-white/10">...</div>

<!-- Badge / Chip flottant -->
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">...</div>
```

#### Carte accent (featured / mise en avant)
```html
<div className="bg-accent">
  <span className="text-primary">Texte toujours noir sur accent</span>
</div>
```

### 4.8 Bordures — Opacités par contexte

| Contexte | Default | Hover | Séparateur |
|----------|---------|-------|------------|
| Fond clair | `border-black/[0.06]` | `border-black/[0.12]` ou `border-black/[0.15]` | `border-black/[0.08]` |
| Fond sombre | `border-white/10` | `border-white/20` | `border-white/5` |
| Accent | `border-accent/30` | `border-accent/40` | — |

### 4.9 Hover states — Patterns par type d'élément

| Élément | Pattern hover |
|---------|---------------|
| Carte cliquable | `hover:border-black/[0.12] hover:shadow-lg transition-all duration-300` |
| Carte service | `hover:bg-accent hover:-translate-y-1` + barre bottom `group-hover:w-full` |
| Image dans carte | `group-hover:scale-105 transition-transform duration-500` |
| Bouton glassmorphism (dark) | `hover:bg-white/5 active:scale-95` |
| Lien CTA | `group-hover:translate-x-1 transition-transform` (avec ArrowRight) |

### 4.10 Gradients décoratifs (blobs)

Utilisés dans les sections card/grisé et sombres pour ajouter de la profondeur.

```html
<!-- Sur fond card/grisé -->
<div style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.12) 0%, transparent 60%)' }} />

<!-- Sur fond sombre -->
<div style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 55%)' }} />
```

**Opacité accent dans les gradients :** `0.06` à `0.12` max (jamais plus, sinon trop visible).

### 4.11 Texture grain

| Classe | Usage |
|--------|-------|
| `grain-overlay` | Sections sombres (Hero, Assets, CTA, FAQ dark) |
| `grain-light` | Sections claires avec texture subtile (FAQ light) |
| *(aucune)* | Sections blanches pures (Blog, Services) |

---

## 5. Règles de Contraste — OBLIGATOIRE

> Ces règles préviennent les bugs visuels de type "texte invisible".
> Toute violation constitue un bug critique.

### 5.1 Règles absolues

| Contexte | Texte autorisé | Texte INTERDIT |
|----------|----------------|----------------|
| Fond blanc (`#FFF`) | `text-primary`, `text-secondary`, noir, gris foncé | `text-white`, blanc, gris clair |
| Fond gris (`#F2F2F2`) | `text-primary`, `text-secondary`, noir, gris foncé | `text-white`, blanc, gris clair |
| Fond sombre (`#0c0c0a`) | `text-white`, `text-primary` (via `.dark-section`) | `text-black`, noir, gris foncé sans `.dark-section` |
| Carte blanche dans section sombre | `text-primary` (via `.light-card`) | `text-white` directement |

### 5.2 Opacités minimales

- Texte sur fond sombre : **minimum `text-white/60`** (jamais `/30` ou `/40` pour du texte lisible)
- Texte sur fond clair : **minimum `text-black/60`**
- Exception : éléments décoratifs uniquement (pas de contenu textuel)

### 5.3 Règle d'or des couleurs — JAMAIS de hex hardcodé

**Toujours utiliser les tokens et utilities :**
- Accent lime → `bg-accent`, `text-accent`, `border-accent` (JAMAIS `#D4FD00`)
- Accent avec opacité → `rgba(var(--color-accent-rgb), 0.12)` (JAMAIS `rgba(212, 253, 0, 0.12)`)
- Fond carte → `bg-card` (JAMAIS `#f8f8f6`, `#fafaf8`, `#fafafa`)
- Fond sombre → `bg-dark` (JAMAIS `#0c0c0a`)
- Fond gris → `bg-grey` (JAMAIS `#F2F2F2`)
- Texte principal → `text-primary` (JAMAIS `#1a1a1a`)

**Style standard des cartes sur fond clair :**
```html
<div className="bg-card border border-black/[0.06]">...</div>
```

### 5.4 Checklist avant chaque composant

1. Le composant sera-t-il affiché sur fond clair OU sombre ?
2. Si fond sombre → la classe `dark-section` est-elle présente sur le parent ?
3. Si carte claire dans section sombre → la classe `light-card` est-elle ajoutée ?
4. Aucune couleur de texte hardcodée en blanc sur fond clair ?
5. Aucune couleur de texte hardcodée en noir sur fond sombre ?
6. Aucune couleur hex hardcodée ? (utiliser les tokens CSS)

---

## 6. Conventions de Code

### 6.1 Composants React

```typescript
// "use client" uniquement si nécessaire (animations, state, event handlers)
"use client";

// Imports typés séparés
import type { Service } from "contentlayer/generated";
import type { Metadata } from "next";

// Props toujours typées avec interface
interface MonComposantProps {
  title: string;
  items: string[];
}

// Export nommé (pas de default export)
export function MonComposant({ title, items }: MonComposantProps) {
  return <div>...</div>;
}
```

### 6.2 Nommage

- **Composants :** PascalCase (`ArticleHero.tsx`, `ServicesSection.tsx`)
- **Suffixes :** `Section` (sections de page), `Modal` (modales), `Provider` (context)
- **Barrel exports :** `index.ts` dans chaque dossier de composants
- **Fichiers lib :** kebab-case (`internal-linking.ts`, `blog-frontmatter.ts`)

### 6.3 Data Fetching

```typescript
// SSG avec generateStaticParams
export async function generateStaticParams() {
  return allPosts
    .filter((post) => !post.draft)
    .map((post) => ({ slug: post.slug }));
}

// Metadata dynamique
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug && !p.draft);
  // ...
}

// Import direct Contentlayer
import { allPosts, allServices, allCaseStudies } from "contentlayer/generated";
```

### 6.4 Styling

- **Toujours utiliser les tokens CSS** plutôt que des valeurs hardcodées
- **clsx + tailwind-merge** pour les classes conditionnelles
- **Fond sombre = `dark-section`** obligatoirement sur le conteneur
- **Pas de `rounded-*`** — le design est à coins carrés (`rounded-none` ou rien)
- **Tailwind v4** — pas de `tailwind.config.ts`, tout dans `globals.css` via `@theme` et `@utility`

### 6.5 Images

```typescript
import Image from "next/image";

// Toujours utiliser next/image avec dimensions
<Image
  src="/images/mon-image.avif"
  alt="Description accessible"
  width={800}
  height={450}
  className="w-full h-auto"
/>
```

- Formats privilégiés : AVIF > WebP > PNG
- **Conversion automatique PNG → AVIF** : toute image PNG ajoutée au projet doit être convertie en AVIF via Sharp (`npx sharp-cli -i input.png -o output.avif --format avif`) avant utilisation. Le PNG source peut être conservé ou supprimé selon le contexte.
- Toujours un `alt` descriptif
- Remote patterns autorisés : `images.unsplash.com`, `i.pravatar.cc`, `placehold.co`

### 6.6 SEO

Chaque page doit inclure :
- `generateMetadata()` avec title, description, openGraph, twitter, canonical
- Schema JSON-LD adapté (BlogPosting, Service, FAQPage, BreadcrumbList)
- Apparaître dans `sitemap.ts`

---

## 7. Contenu (Contentlayer)

### Schémas disponibles

| Type | Dossier | Route | Champs clés |
|------|---------|-------|-------------|
| `Post` | `content/blog/` | `/blog/[slug]` | title, description, date, author, category, tags, featuredImage, draft |
| `Service` | `content/services/` | `/services/[slug]` | heroTitle, heroSubtitle, icon, metrics, painPoints, features, processSteps, faqs |
| `CaseStudy` | `content/cas-clients/` | `/cas-clients/[slug]` | title, sector, company, challenges, approachPhases, metrics, testimonial |
| `Page` | `content/pages/` | Variable | title, description, template |

### Computed fields automatiques

- `slug` : dérivé du chemin fichier
- `url` : préfixé avec la route (`/blog/`, `/services/`, etc.)
- `readingTime` : calculé automatiquement (200 mots/min)

### Convention de nommage fichiers MDX

```
content/blog/blog__mon-titre-article.mdx
content/services/services__nom-service.mdx
content/cas-clients/cas-clients__nom-client.mdx
```

---

## 8. Animations

### Framer Motion (composants UI)

```typescript
// Pattern standard : fadeInUp avec stagger
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={staggerContainer}
>
```

### GSAP (animations avancées)

- Utilisé pour les scroll-triggered animations complexes
- Provider : `MotionProvider`

### Lenis (smooth scroll)

- Provider : `SmoothScroller`
- Intégré dans le layout racine

---

## 9. API Routes

| Route | Méthode | Rôle | Sécurité |
|-------|---------|------|----------|
| `/api/contact` | POST | Soumission formulaire (Resend) | CSRF, rate limit (3/15min), XSS escape |
| `/api/blog/publish` | POST | Webhook publication blog | Auth token |
| `/api/request-indexing` | POST | Demande indexation Google | Auth |
| `/api/cron/daily-indexing` | POST | Indexation quotidienne SEO | Cron auth |

---

## 10. Routage

### Routes statiques

| Route | Page |
|-------|------|
| `/` | Accueil |
| `/blog` | Liste des articles |
| `/services` | Liste des services |
| `/cas-clients` | Liste des études de cas |
| `/contact` | Formulaire de contact |
| `/mentions-legales` | Mentions légales |
| `/confidentialite` | Politique de confidentialité |

### Routes dynamiques

| Pattern | Source |
|---------|--------|
| `/blog/[slug]` | `allPosts` (Contentlayer) |
| `/services/[slug]` | `allServices` (Contentlayer) |
| `/cas-clients/[slug]` | `allCaseStudies` (Contentlayer) |

---

## 11. Performance & Sécurité

### Optimisations actives

- Images : AVIF/WebP avec Sharp, device sizes optimisés
- Package imports optimisés : `lucide-react`, `framer-motion`
- CSS optimisé (experimental)
- Console supprimée en production
- Turbopack en dev

### Headers de sécurité (next.config.ts)

- HSTS, X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- CSP configurée (self + Google Maps)
- Referrer-Policy strict
- Permissions-Policy restrictive

---

## 12. Workflow de Développement

### Avant chaque modification

1. **Lire** CLAUDE.md, LEARNINGS.md, TROUBLESHOOTING.md
2. **Lire** les fichiers concernés avant de les modifier
3. **Vérifier** les règles de contraste si le composant touche au visuel
4. **Respecter** les conventions existantes (nommage, exports, styling)

### Après chaque itération significative

1. **Mettre à jour** LEARNINGS.md si un pattern nouveau est découvert
2. **Mettre à jour** TROUBLESHOOTING.md si un bug est résolu
3. **Mettre à jour** CLAUDE.md si l'architecture évolue

### Commandes utiles

```bash
npm run dev          # Serveur de développement (webpack)
npm run build        # Build production (contentlayer + next)
npm run start        # Serveur de production
npm run lint         # ESLint
```

---

## 13. MCP Gemini Design

**Gemini est le développeur frontend.** Pour tout travail UI/design, utiliser ce MCP.

### Avant d'écrire du code UI :

- Nouveau composant visuel → `snippet_frontend` ou `create_frontend`
- Redesign d'un élément existant → `modify_frontend`
- Changement texte/logique trivial → Le faire soi-même

### Règles critiques :

1. Si l'UI existe déjà et nécessite un restyle → `modify_frontend`, PAS `snippet_frontend`
2. Les tâches mixtes (logique + UI) doivent être séparées mentalement : logique soi-même, UI déléguée à Gemini
