# Brief UI/UX — Page Service Template

> Ce fichier contient les spécifications complètes pour implémenter la page service template.
> Il est destiné à être passé à un agent IA (Claude Code + MCP Gemini Design) pour coder les sections.

---

## STRUCTURE GLOBALE

```
HERO → MÉTRIQUES → PROBLÈME → SOLUTION → PREUVE → LIVRABLES → PROCESSUS → TÉMOIGNAGE → FAQ → ARTICLES → CTA
```

| # | Section | Fond | Rôle |
|---|---------|------|------|
| **1** | Hero (texte + image) | `dark-section` | H1 + proposition de valeur + CTA + breadcrumbs |
| **2** | Barre de métriques | `bg-card` | 3-4 KPIs animés — preuve immédiate |
| **3** | Pain Points | `bg-white` | 3-4 problèmes du persona — identification |
| **4** | Features / Bénéfices | `bg-card` | 4-6 bénéfices concrets — sticky scroll reveal |
| **5** | Cas client highlight | `dark-section` | 1-2 études de cas liées — preuve terrain |
| **6** | Livrables | `bg-white` | Galerie visuelle — tangibiliser l'offre |
| **7** | Process Steps | `bg-card` | 4-6 étapes méthode — timeline progressive |
| **8** | Témoignage | `bg-white` | Citation client — preuve émotionnelle |
| **9** | FAQ | `bg-card` | 4-8 Q&A — accordéon sticky |
| **10** | Articles liés | `bg-white` | Carousel posts — maillage interne SEO |
| **11** | CTA final | `dark-section` | Appel à l'action — conversion |

### Alternance des fonds
```
dark → card → white → card → dark → white → card → white → card → white → dark
```

### CTAs Hero — Hardcodés
- Primaire → `/contact`
- Secondaire → scroll vers `#processus`

---

## MODIFICATIONS SANITY NÉCESSAIRES

### Nouveaux champs à ajouter au schema `service.ts`

| Champ | Type | Section |
|-------|------|---------|
| `painPointsSubtitle` | string | Pain Points (#3) |
| `featuresSubtitle` | string | Features (#4) |
| `deliverablesTitle` | string | Livrables (#6) |
| `deliverablesSubtitle` | string | Livrables (#6) |
| `deliverables[]` | deliverableVisual[] | Livrables (#6) |

### Nouvel objet schema : `deliverableVisual`
```typescript
// sanity/schemas/objects/deliverableVisual.ts
{
  name: "deliverableVisual",
  title: "Livrable visuel",
  type: "object",
  fields: [
    { name: "title", title: "Titre", type: "string", validation: required },
    { name: "description", title: "Description", type: "text", rows: 2 },
    { name: "image", title: "Capture/Mockup", type: "image", options: { hotspot: true }, validation: required }
  ]
}
```

### Nouveau type TS dans `types.ts`
```typescript
export interface DeliverableVisual {
  title: string;
  description?: string;
  image: SanityImage;
}
```

### Mise à jour de l'interface `Service`
```typescript
deliverablesTitle?: string;
deliverablesSubtitle?: string;
deliverables?: DeliverableVisual[];
```

---

## SECTION 1 — HERO

**Concept :** Split asymétrique avec tension visuelle. Le texte domine, l'image crée l'atmosphère.

### Props
```typescript
interface ServiceHeroProps {
  category: string;        // surtitre text
  title: string;           // H1
  subtitle: string;        // paragraph
  badge?: string;          // badge text
  imageUrl?: string;       // hero image URL (from Sanity CDN)
  imageAlt?: string;
  breadcrumbLabel: string; // service name for breadcrumb
}
```

### Layout desktop (≥1024px)
- Grid `grid-cols-[1fr_0.85fr]` — texte prend plus de place que l'image
- Gauche (55%) : surtitre, H1, sous-titre, CTAs, badge
- Droite (45%) : image `aspect-[4/3]` avec `translateY(-40px)` pour créer de la tension
- Breadcrumbs au-dessus du grid : "Accueil / Services / [Nom]" en `text-white/60`

### Image
- `next/image` avec `priority`, `object-cover`
- `translateY(-40px)` — sort du cadre vertical
- `border border-white/10`
- Overlay gradient en bas : `linear-gradient(to top, rgba(12,12,10,0.6) 0%, transparent 40%)`

### CTAs
- **Primaire :** `bg-accent text-black font-semibold px-8 py-4` — petit carré `■` (8x8) à gauche du texte — hover: `bg-accent/90 scale(1.02)` 200ms
- **Secondaire :** `border border-white/20 text-white px-8 py-4` — flèche `↓` à droite (scrolle vers #processus) — hover: flèche descend `translateY(4px)` + `bg-white/5`

### Badge
- `bg-white/8 backdrop-blur-sm border border-white/15`
- Checkmark accent à gauche

### Mobile (< 768px)
- Image **au-dessus** du texte, `aspect-[16/9]`, pas de translateY
- CTAs en `flex-col w-full`
- Badge masqué
- Breadcrumbs masqués (`hidden md:flex`)

### Animations (au chargement, PAS whileInView)
| Élément | Animation | Delay | Duration | Easing |
|---------|-----------|-------|----------|--------|
| Breadcrumbs | `opacity: 0→1` | 0ms | 400ms | ease-out |
| Surtitre | `opacity: 0→1, y: 12→0` | 100ms | 500ms | cubic-bezier |
| H1 | `opacity: 0→1, y: 20→0` | 200ms | 600ms | cubic-bezier |
| Subtitle | `opacity: 0→1, y: 15→0` | 350ms | 500ms | ease-out |
| CTAs | `opacity: 0→1, y: 15→0` | 450ms | 500ms | ease-out |
| Badge | `opacity: 0→1, scale: 0.96→1` | 550ms | 400ms | spring |
| Image | `opacity: 0→1, scale: 1.08→1` | 200ms | 900ms | `[0.25, 0.1, 0.25, 1]` |

### Fond
- `dark-section grain-overlay` + `style={{ background: "var(--bg-dark)" }}`
- Blobs accent animés en arrière-plan (radial-gradient, opacity 0.06-0.12)

---

## SECTION 2 — BARRE DE MÉTRIQUES

**Concept :** Interstitiel de crédibilité. Bande compacte de chiffres entre le hero sombre et le contenu clair.

### Layout
- `bg-card`, padding `py-10 sm:py-12 px-4 sm:px-6 md:px-12`
- `grid grid-cols-2 md:grid-cols-4 gap-8`
- Séparateurs : `border-r border-black/[0.06]` entre chaque (sauf le dernier)
- Trait accent en haut de chaque métrique : petit tiret `w-8 h-0.5 bg-accent mb-4`

### Chaque métrique
- Valeur : `text-3xl sm:text-4xl md:text-5xl font-semibold text-primary` — **compteur animé** (roule de 0 à la valeur, 1800ms, easeOutExpo)
- Prefix/suffix en `text-accent` (le +, le %)
- Label : `text-sm text-secondary mt-2`

### Mobile
- `grid-cols-2 gap-y-8`
- Séparateurs horizontaux entre rangées

### Animation
- `whileInView`, `viewport: { once: true, amount: 0.5 }`
- 4 compteurs avec stagger 150ms

---

## SECTION 3 — PAIN POINTS

**Concept :** Grille empathique. Chaque carte = un miroir du problème du prospect.

### Layout
- `bg-white`, padding section standard
- Header centré : surtitre (dot + "LE CONSTAT") + H2 + sous-titre, `max-w-3xl mx-auto`
- Grille : `grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8`
  - 2 items → `md:grid-cols-2`
  - 3 items → `md:grid-cols-3`
  - 4 items → `md:grid-cols-2` (2×2)

### Chaque carte
- `bg-card border border-black/[0.06] p-8`
- Icône : `w-11 h-11 bg-accent/10` avec icône Lucide `w-5 h-5 text-primary`
- Titre : `text-lg font-medium text-primary mb-2`
- Description : `text-sm text-secondary leading-relaxed`
- **Barre accent en bas :** `w-0` par défaut → `w-12 bg-accent h-[3px]` au hover, `transition-all duration-500`
- Hover : `border-black/[0.12] shadow-lg translateY(-2px)` 300ms

### Animations
- Header : fadeInUp stagger 100ms
- Cartes : stagger 120ms, `y: 40→0, opacity: 0→1`, 600ms
- `viewport: { once: true, margin: "-60px" }`

---

## SECTION 4 — FEATURES / BÉNÉFICES (Sticky scroll reveal)

**Concept :** Colonne gauche sticky, solutions défilent à droite une par une.

### Layout desktop
- `bg-card`, padding section standard
- `grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-12 lg:gap-16`
- **Colonne gauche (sticky) :** `lg:sticky lg:top-[120px] lg:self-start`
  - Surtitre + H2 + image optionnelle (`aspect-[4/3] mt-8`) + lien CTA "Voir tous nos services →"
- **Colonne droite :** stack de cartes solutions

### Cartes solutions (droite)
- `bg-white border border-black/[0.06] p-8`, `gap-5` entre cartes
- En haut : numéro `text-5xl font-light text-accent/20` + trait `w-16 h-px bg-accent/40 mb-4`
- Titre : `text-xl font-medium text-primary`
- Description : `text-sm text-secondary leading-relaxed`
- **Carte active** (au centre viewport, détection via IntersectionObserver threshold 0.6) : `border-accent/30`
- Cartes inactives : `border-black/[0.06]`

### Mobile (< 1024px)
- Sticky désactivé — layout vertical
- Header centré en haut
- Cartes stack full-width
- Image colonne gauche masquée (`hidden lg:block`)
- Numéros en `text-3xl`

### Animations
- Header gauche : fadeInUp au chargement de la section
- Cartes : chaque carte a son propre `whileInView`, `y: 30→0, opacity: 0→1`
- `viewport: { once: true, margin: "-80px" }`

---

## SECTION 5 — CAS CLIENT HIGHLIGHT

**Concept :** Cinematic proof. Carte blanche imposante qui flotte sur fond sombre.

### Layout desktop (1 cas client)
- `dark-section grain-overlay`, padding section standard
- Header centré : surtitre accent + H2 blanc
- Carte : `bg-white light-card shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden`
  - `grid-cols-[0.45fr_1fr]`
  - Image gauche : `h-full object-cover`, overlay gradient vers la droite
  - Contenu droite : `p-10`
    - Secteur + nom client : `text-xs uppercase tracking-wider text-secondary`
    - Titre résultat : `text-lg font-normal text-primary`
    - Métriques : `flex gap-8`, chaque avec `border-t-2 border-accent pt-3`
      - Valeur : `text-2xl font-semibold text-primary`
      - Label : `text-xs text-secondary`
    - Lien : `text-primary font-medium` + ArrowRight, underline animée au hover

### Si 2 cas clients
- `grid-cols-1 md:grid-cols-2 gap-6` — cartes verticales
- Image en haut `aspect-[16/9]`

### Blob décoratif
- `radial-gradient(ellipse 60% 50% at 50% 60%, rgba(var(--color-accent-rgb), 0.06) 0%, transparent 50%)`
- Derrière la carte

### Mobile
- Carte verticale : image `aspect-[16/9]` en haut, contenu en dessous
- Métriques en `grid-cols-3`
- Ombre réduite `shadow-xl`

### Animations
- Carte : `y: 50→0, opacity: 0→1, scale: 0.97→1`, 800ms
- Image : `scale: 1.05→1`, 1200ms
- Métriques : compteurs animés, stagger 150ms

---

## SECTION 6 — LIVRABLES (Galerie visuelle)

**Concept :** Preuve tangible. Le visiteur voit ce qu'il achète. Format magazine.

### Layout
- `bg-white`, padding section standard
- Header centré : surtitre + H2
- `grid grid-cols-1 sm:grid-cols-2 gap-8` (2 colonnes, pas 3 — images doivent être assez grandes)

### Chaque carte livrable
- `bg-card border border-black/[0.06] overflow-hidden group`
- Zone image : `aspect-[4/3] relative overflow-hidden bg-grey`
  - Image : `object-cover w-full h-full`
  - Hover image : `group-hover:scale-105 transition-transform duration-700`
  - **Badge numéro** : `absolute bottom-4 left-4`, carré `w-10 h-10 bg-accent flex items-center justify-center`, texte `text-sm font-semibold text-black` — "01", "02", etc.
- Zone texte : `p-6`
  - Titre : `text-base font-medium text-primary mb-1.5`
  - Description : `text-sm text-secondary leading-relaxed`
- Hover carte : `border-black/[0.12] shadow-lg`, 500ms

### Animations
- Cartes : `y: 40→0, opacity: 0→1`, stagger 150ms

---

## SECTION 7 — PROCESS STEPS (Timeline progressive)

**Concept :** Timeline verticale avec ligne qui se dessine au scroll.

### Layout
- `bg-card`, padding section standard
- Header centré : surtitre + H2 + sous-titre
- Timeline : `max-w-[52rem] mx-auto`

### La ligne verticale
- `absolute left-[28px] top-0 bottom-0 w-px bg-black/[0.08]`
- **Animation GSAP** : `scaleY(0→1)` avec `transformOrigin: "top"`, liée au scroll progress
- **Dot accent** : `w-3 h-3 bg-accent rounded-full` à chaque transition

### Chaque étape
- `grid grid-cols-[56px_1fr] gap-6`
- Colonne gauche : numéro `text-4xl sm:text-5xl font-extralight text-black/10` + ligne verticale
- Colonne droite :
  - Trait horizontal : `w-full h-px bg-black/[0.06] mb-4`
  - Titre : `text-xl font-medium text-primary mb-2`
  - Description : `text-sm text-secondary leading-relaxed mb-3`
  - Durée : icône Clock `w-3.5 h-3.5` + `text-xs text-secondary`
  - Livrables : checkmarks en `text-accent`, `flex flex-wrap gap-x-6 gap-y-1`, `text-xs`

### Interaction scroll
- Chaque étape : IntersectionObserver individuel (seuil 0.3)
- Active : numéro passe de `text-black/10` → `text-accent/40`, contenu slide `x: -20→0`
- Dot accent : `scale: 0→1` (pop)

### Mobile
- Numéro au-dessus du contenu (pas 2 colonnes)
- Ligne verticale masquée
- Séparation : `border-b border-black/[0.06] pb-8 mb-8`

### id="processus" sur la section (ancre pour le CTA secondaire du hero)

---

## SECTION 8 — TÉMOIGNAGE

**Concept :** Citation cinématique plein écran. La typo fait tout le travail.

### Layout
- `bg-white`, padding section standard (plus généreux : `py-20 sm:py-24 md:py-32`)
- Centré : `max-w-[48rem] mx-auto text-center`

### Guillemet décoratif
- `"` géant : `text-8xl sm:text-9xl text-accent/20 font-serif leading-none`

### Citation
- `text-xl sm:text-2xl font-light text-primary leading-[1.7] italic`

### Trait séparateur
- `w-12 h-px bg-accent mx-auto my-8`

### Auteur
- Photo : `w-14 h-14 rounded-full object-cover` (exception coins carrés — avatars toujours ronds)
- Pas de photo → initiales dans cercle `bg-card text-primary font-medium`
- `flex items-center gap-4 justify-center`
- Nom : `text-base font-medium text-primary`
- Poste : `text-sm text-secondary`

### Animations
- Guillemet : `scale: 0.8→1, opacity: 0→0.2`, 600ms
- Citation : `y: 20→0, opacity: 0→1`, 800ms, delay 200ms
- Trait : `scaleX: 0→1`, 400ms, delay 600ms
- Auteur : `y: 10→0, opacity: 0→1`, 500ms, delay 800ms

---

## SECTION 9 — FAQ (Accordéon sticky)

**Concept :** Double colonne — titre sticky à gauche, accordéon à droite.

### Layout desktop
- `bg-card`, padding section standard
- `grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16`

### Colonne gauche (sticky)
- `lg:sticky lg:top-[120px] lg:self-start`
- Surtitre + H2 + paragraphe + lien CTA `text-accent font-medium` "Nous contacter →"

### Colonne droite (accordéon)
- Chaque item : `border-b border-black/[0.06]`
- **Question fermée :** `py-5 cursor-pointer flex justify-between items-center`
  - Texte : `text-base font-medium text-primary`
  - Icône : `Plus` de Lucide, `w-5 h-5 text-secondary`
  - Hover : texte → `text-accent` (200ms)
- **Question ouverte :**
  - Icône switch vers `Minus` (ou rotate-45 du Plus)
  - Réponse : AnimatePresence Framer Motion, `height: 0→auto, opacity: 0→1`, 300ms
  - Texte réponse : `text-sm text-secondary leading-relaxed pb-5`
- **Première question ouverte par défaut**

### Mobile
- Sticky désactivé, layout vertical
- Lien CTA dupliqué en bas de l'accordéon

---

## SECTION 10 — ARTICLES LIÉS

**Concept :** Maillage éditorial. 3 articles recommandés.

### Layout
- `bg-white`, padding section standard
- Header : `flex justify-between items-end mb-12`
  - Gauche : surtitre + H2
  - Droite : "Voir tous les articles →" avec underline au hover
- `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`

### Cartes articles
- Identiques aux cartes blog existantes
- `bg-card border border-black/[0.06] overflow-hidden group`
- Image : `aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-700`
- Catégorie : `text-xs uppercase tracking-wider text-secondary mt-5 mx-6`
- Titre : `text-lg font-medium text-primary line-clamp-2 mx-6 mt-2`
- Extrait : `text-sm text-secondary line-clamp-2 mx-6 mt-2`
- Lien : `text-sm font-medium text-primary mx-6 mt-4 mb-6` + ArrowRight, `group-hover:text-accent`

### Données
- Filtrées via `relatedBlogTags` du service → fetch posts correspondants

### Animations
- Stagger fadeInUp 100ms entre cartes

---

## SECTION 11 — CTA FINAL

**Concept :** Closing statement. Sobre, direct, un seul message.

### Layout
- `dark-section grain-overlay`, padding généreux `py-24 sm:py-32 md:py-40`
- `text-center max-w-[40rem] mx-auto relative z-10`

### Contenu
- H2 : `text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight`
- Sous-texte : `text-lg text-white/70 mt-4 mb-10` — "Premier échange sans engagement"
- CTAs : `flex flex-col sm:flex-row gap-4 justify-center`
  - Primaire : `bg-accent text-black font-medium px-10 py-4` — carré ■ avant texte — hover: `bg-accent/90 scale-[1.02]`
  - Secondaire : `border border-white/20 text-white px-10 py-4` — hover: `bg-white/5`

### Blob
- `radial-gradient(ellipse 70% 50% at 50% 50%, rgba(var(--color-accent-rgb), 0.07) 0%, transparent 50%)`
- Centré, `absolute inset-0 pointer-events-none`

### Animations
- Contenu : `y: 30→0, opacity: 0→1`, 600ms
- Blob : `scale: 0.8→1, opacity: 0→0.07`, 1200ms

---

## INTERACTIONS SCROLL CLÉS

| Section | Comportement |
|---------|-------------|
| #4 Features | Colonne gauche sticky, solutions défilent à droite |
| #7 Process | Ligne verticale se dessine avec scroll progress (GSAP) |
| #9 FAQ | Colonne gauche sticky, accordéon défile à droite |
| #2 Métriques | Compteurs animés au viewport entry |
| #5 Cas Client | Compteurs métriques animés dans la carte |

---

## SCHÉMA JSON-LD

1. **Service** — type, provider, description, areaServed
2. **BreadcrumbList** — Accueil > Services > [Service]
3. **FAQPage** — Si des FAQs existent
4. **Organization** — Vizion comme provider

---

## FICHIERS À CRÉER

| Fichier | Rôle |
|---------|------|
| `src/app/services/[slug]/page.tsx` | Server Component — data fetching, metadata, JSON-LD, generateStaticParams |
| `src/app/services/[slug]/ServiceDetailContent.tsx` | Client Component — assemble toutes les sections |
| `src/components/services/ServiceHero.tsx` | Section 1 |
| `src/components/services/MetricsBar.tsx` | Section 2 |
| `src/components/services/PainPoints.tsx` | Section 3 |
| `src/components/services/FeaturesSticky.tsx` | Section 4 |
| `src/components/services/CaseStudyHighlight.tsx` | Section 5 |
| `src/components/services/DeliverablesGallery.tsx` | Section 6 |
| `src/components/services/ProcessTimeline.tsx` | Section 7 |
| `src/components/services/TestimonialCinematic.tsx` | Section 8 |
| `src/components/services/ServiceFAQ.tsx` | Section 9 |
| `src/components/services/RelatedArticles.tsx` | Section 10 |
| `src/components/services/ServiceCTA.tsx` | Section 11 |
| `src/components/services/index.ts` | Barrel export |

## DONNÉES EXISTANTES (Sanity)

- Queries GROQ : `sanity/lib/queries.ts` (ALL_SERVICES_QUERY, SERVICE_BY_SLUG_QUERY)
- Types TS : `sanity/lib/types.ts` (interface Service)
- Data access : `src/lib/sanity/services.ts` (getAllServices, getServiceBySlug)
- Schema : `sanity/schemas/service.ts`
- Images : `resolveImageUrl()` dans `sanity/lib/image.ts`

Tout le data layer est prêt. Les routes n'existent pas encore — tout est à créer.
