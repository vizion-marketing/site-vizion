# Troubleshooting — Site Vizion

> Guide de résolution des problèmes courants.
> Mettre à jour ce fichier à chaque bug résolu.

**Dernière mise à jour :** 2026-02-24

---

## Table des matières

1. [Bugs de contraste (texte invisible)](#1-bugs-de-contraste--texte-invisible)
2. [Build & Compilation](#2-build--compilation)
3. [Contentlayer & MDX](#3-contentlayer--mdx)
4. [Styling & CSS](#4-styling--css)
5. [Images](#5-images)
6. [SEO](#6-seo)
7. [Animations](#7-animations)
8. [API Routes](#8-api-routes)
9. [Checklist de Validation Visuelle](#9-checklist-de-validation-visuelle)

---

## 1. Bugs de Contraste — Texte Invisible

### Symptôme : Texte blanc sur fond blanc/gris

**Cause :** Un composant utilise `text-white` ou `text-primary` (en mode `.dark-section`) alors qu'il est rendu sur un fond clair.

**Diagnostic :**
```
1. Vérifier si le composant parent a la classe `dark-section`
2. Si non → le `--text-primary` vaut #1a1a1a (noir) = OK
3. Si oui → le `--text-primary` vaut #ffffff (blanc)
   → Si le composant enfant a un fond blanc, le texte sera invisible
```

**Solution :**
```html
<!-- Ajouter light-card sur les éléments à fond clair dans une dark-section -->
<section className="dark-section bg-[#0c0c0a]">
  <div className="bg-white light-card">
    <p className="text-primary">Ce texte sera noir</p>
  </div>
</section>
```

**Prévention :** Toujours vérifier la présence de `.dark-section` dans l'arbre DOM parent.

---

### Symptôme : Texte noir/gris sur fond sombre

**Cause :** La classe `dark-section` est absente du conteneur à fond sombre.

**Diagnostic :**
```
1. Le fond est sombre (#0c0c0a, #000, #18181b) ?
2. La classe `dark-section` est-elle sur le conteneur ?
3. Les textes enfants utilisent-ils les utilities sémantiques (text-primary, text-secondary) ?
```

**Solution :**
```html
<!-- AVANT (bug) -->
<section className="bg-[#0c0c0a]">
  <p className="text-primary">Texte #1a1a1a sur fond #0c0c0a = INVISIBLE</p>
</section>

<!-- APRÈS (fix) -->
<section className="bg-[#0c0c0a] dark-section">
  <p className="text-primary">Texte #ffffff sur fond #0c0c0a = VISIBLE</p>
</section>
```

---

### Symptôme : Texte trop transparent, difficile à lire

**Cause :** Utilisation d'opacités trop faibles (`text-white/30`, `text-white/40`).

**Règle :** Le texte lisible doit avoir une opacité minimum de `/60`.

| Usage | Opacité minimum |
|-------|----------------|
| Texte principal | `/100` (plein) |
| Texte secondaire | `/80` ou `/85` |
| Texte tertiaire/muted | `/60` |
| Labels/captions | `/60` |
| Éléments décoratifs (non-texte) | `/30` OK |

---

### Symptôme : Accent lime (#D4FD00) illisible

**Cause :** Le lime est utilisé comme couleur de texte sur fond clair.

**Règle :** `#D4FD00` ne doit **jamais** être utilisé pour du texte sur fond blanc ou gris clair. Ratio de contraste trop faible (~1.8:1, minimum requis 4.5:1).

**Usages valides du lime :**
- Icônes sur fond sombre
- Badges/pills avec fond lime + texte noir
- Gradients décoratifs
- Bordures et accents visuels
- Texte sur fond sombre (contraste suffisant ~12:1)

---

## 2. Build & Compilation

### Erreur : "Cannot find module 'contentlayer/generated'"

**Cause :** Le build Contentlayer n'a pas été exécuté.

**Solution :**
```bash
npx contentlayer2 build
# Puis relancer le dev server
npm run dev
```

**Note :** Le script `build` fait déjà `contentlayer2 build && next build`, mais en dev il faut parfois lancer manuellement.

---

### Erreur : TypeScript type mismatch avec Contentlayer

**Cause :** Les types générés dans `.contentlayer/generated/` sont désynchronisés avec `contentlayer.config.ts`.

**Solution :**
```bash
# Supprimer le cache et régénérer
rm -rf .contentlayer
npx contentlayer2 build
```

---

### Erreur : "Field X does not exist on type Post/Service/CaseStudy"

**Cause :** Un champ a été ajouté/supprimé dans `contentlayer.config.ts` sans régénérer les types.

**Solution :**
1. Vérifier que le champ existe dans `contentlayer.config.ts`
2. Régénérer : `npx contentlayer2 build`
3. Redémarrer le serveur TypeScript dans l'IDE

---

### Le dev server ne démarre pas / crash au démarrage

**Vérifications :**
1. `node_modules` existe ? → `npm install`
2. `.contentlayer/` existe ? → `npx contentlayer2 build`
3. `.env.local` existe ? → Créer avec les variables nécessaires
4. Port 3000 libre ? → Vérifier avec `netstat -ano | findstr :3000`

---

## 3. Contentlayer & MDX

### Le contenu MDX ne se met pas à jour en dev

**Cause :** Contentlayer ne watch pas toujours correctement les fichiers.

**Solution :**
```bash
# Arrêter le serveur, régénérer, relancer
npx contentlayer2 build
npm run dev
```

---

### Erreur dans le frontmatter d'un fichier MDX

**Symptôme :** Build qui échoue avec une erreur de parsing YAML.

**Causes fréquentes :**
- Guillemets manquants autour d'une valeur contenant des `:` ou des `#`
- Indentation incorrecte dans les tableaux YAML
- Champs JSON mal formatés (metrics, painPoints, etc.)

**Exemple de frontmatter correct :**
```yaml
---
title: "Mon titre : avec des caractères spéciaux"
metrics:
  - value: "+40%"
    label: "Croissance du CA"
  - value: "3x"
    label: "Leads qualifiés"
painPoints:
  - title: "Problème 1"
    description: "Description du problème"
---
```

---

### Le readingTime ne se calcule pas

**Cause :** Computed field défini dans `contentlayer.config.ts`. S'il ne fonctionne pas, vérifier que le body du MDX n'est pas vide.

---

## 4. Styling & CSS

### Les classes Tailwind custom ne fonctionnent pas

**Cause :** Tailwind v4 utilise `@utility` dans `globals.css`, pas un fichier de config.

**Vérification :** La classe est-elle définie dans `globals.css` avec `@utility` ?

```css
/* globals.css */
@utility text-primary {
  color: var(--text-primary);
}
```

Si elle n'existe pas, l'ajouter dans `globals.css`, pas dans un hypothétique `tailwind.config.ts`.

---

### Variables CSS non résolues (valeur vide ou fallback)

**Symptôme :** Un élément n'a pas la couleur attendue.

**Diagnostic :** Ouvrir les DevTools → Computed → vérifier la valeur de la variable CSS.

**Variables qui existent :**
```
--bg-white, --bg-grey
--color-black, --color-grey-light, --color-grey-mid, --color-grey-dark, --color-accent
--text-primary, --text-secondary, --text-muted
--border-default
--space-xs à --space-4xl
--shadow-sm à --shadow-xl
--transition-fast, --transition-base, --transition-slow
```

**Variables qui N'existent PAS (attention aux composants MDX) :**
```
--color-primary          → utiliser --color-black ou --text-primary
--color-primary-dark     → utiliser --color-black
--color-bg-alt           → utiliser --bg-grey
--color-text-secondary   → utiliser --text-secondary
--color-border           → utiliser --border-default
```

---

### Les ombres ne s'appliquent pas

**Rappel :** Les radius sont à `0` partout. Si un `rounded-*` est ajouté par erreur, le design sera incohérent.

---

## 5. Images

### Image non affichée (next/image)

**Causes fréquentes :**
1. **Image distante non autorisée** → Vérifier `remotePatterns` dans `next.config.ts`
2. **Chemin incorrect** → Les images locales sont dans `/public/images/`
3. **Format non supporté** → Utiliser AVIF, WebP, PNG, ou JPEG

**Remote patterns autorisés :**
- `images.unsplash.com`
- `i.pravatar.cc`
- `placehold.co`

Pour ajouter un nouveau domaine :
```typescript
// next.config.ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "nouveau-domaine.com" },
  ],
},
```

---

### Image trop lourde / CLS (Cumulative Layout Shift)

**Solution :** Toujours spécifier `width` et `height` sur `<Image>`.

```typescript
<Image
  src="/images/mon-image.avif"
  alt="Description"
  width={800}
  height={450}  // Toujours fournir les dimensions
  className="w-full h-auto"
/>
```

---

## 6. SEO

### Page absente du sitemap

**Vérifier dans `src/app/sitemap.ts` :**
1. La page est-elle filtrée (draft, template) ?
2. Le type de contenu est-il inclus dans la génération ?

**Template de base :**
```typescript
{
  url: `${SITE_URL}/ma-route`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
}
```

---

### Metadata manquante sur une page

**Checklist :**
1. `generateMetadata()` exporté et fonctionnel ?
2. Les champs `title`, `description`, `openGraph`, `twitter` sont-ils remplis ?
3. Le `canonical` pointe-t-il vers la bonne URL ?

---

### Schema JSON-LD invalide

**Validation :** Utiliser [Schema Markup Validator](https://validator.schema.org/) ou [Rich Results Test](https://search.google.com/test/rich-results).

**Erreurs fréquentes :**
- `@type` manquant
- URLs non absolues (toujours utiliser `${SITE_URL}/...`)
- Dates au mauvais format (utiliser ISO 8601 : `2024-01-15`)

---

## 7. Animations

### Animations Framer Motion qui ne se déclenchent pas

**Causes :**
1. **`"use client"` manquant** → Framer Motion nécessite un Client Component
2. **`viewport={{ once: true }}` empêche le re-trigger** → C'est le comportement voulu
3. **`MotionProvider` absent** → Vérifier qu'il est dans le layout racine

---

### Lenis smooth scroll ne fonctionne pas

**Vérifications :**
1. `SmoothScroller` est-il dans le layout racine ?
2. Les styles Lenis sont-ils dans `globals.css` ?
3. `[data-lenis-prevent]` est utilisé pour les éléments qui ne doivent pas scroller ?

---

### Animation qui lag/saccade

**Solutions :**
- Utiliser `will-change: transform` avec parcimonie
- Préférer `transform` et `opacity` (GPU-accelerated)
- Éviter d'animer `width`, `height`, `top`, `left` (provoquent des reflows)
- Vérifier que les images dans l'animation sont optimisées

---

## 8. API Routes

### Formulaire de contact : erreur 429

**Cause :** Rate limiting (3 requêtes / 15 minutes par IP).

**Solution :** Attendre 15 minutes ou ajuster la limite dans `/api/contact/route.ts`.

---

### Email non envoyé (Resend)

**Vérifications :**
1. Clé API Resend dans `.env.local` ?
2. Domaine vérifié sur Resend ?
3. Vérifier les logs Resend dashboard

---

### Indexation Google échoue

**Vérifications :**
1. Credentials Google API dans `.env.local` ?
2. Le service account a-t-il les permissions Indexing API ?
3. Le site est-il vérifié dans Google Search Console ?

---

## 9. Checklist de Validation Visuelle

> À exécuter avant chaque mise en production.

### Contraste & Lisibilité

- [ ] Aucun texte blanc sur fond blanc/gris
- [ ] Aucun texte noir/gris foncé sur fond sombre sans `dark-section`
- [ ] Toutes les sections à fond sombre ont la classe `dark-section`
- [ ] Toutes les cartes claires dans des sections sombres ont la classe `light-card`
- [ ] Opacité minimum de `/60` pour tout texte lisible
- [ ] Accent lime (#D4FD00) jamais utilisé comme texte sur fond clair

### Responsive

- [ ] Vérifier sur mobile (375px), tablette (768px), desktop (1440px)
- [ ] Les titres `clamp()` sont lisibles à toutes les tailles
- [ ] Les grilles passent en colonne unique sur mobile
- [ ] Les images ne débordent pas du viewport

### Typographie

- [ ] Police DM Sans chargée correctement
- [ ] Pas de border-radius (coins carrés partout)
- [ ] Hiérarchie visuelle respectée (H1 > H2 > H3 > body)

### Performance

- [ ] Images au format AVIF/WebP avec dimensions explicites
- [ ] Pas de `console.log` en production (supprimé automatiquement)
- [ ] Pas d'imports inutiles ou de composants non utilisés

### SEO

- [ ] Metadata complète sur chaque page
- [ ] Schema JSON-LD valide
- [ ] Sitemap à jour
- [ ] Liens canoniques corrects
