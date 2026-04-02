---
name: enjeux-template
description: Créer ou reconstruire le template visuel complet des pages /enjeux/[slug]. Supprime le brouillon existant, crée 3 composants visuels dédiés via Gemini Design MCP, reconstruit EnjeuxDetailContent.tsx. À exécuter une fois pour initialiser le template, ou pour le rebuilder.
---

# Reconstruire le template visuel — Pages Enjeux

Ce skill supprime le brouillon actuel (`EnjeuxDetailContent.tsx` qui recycle des composants services) et crée un template propre, visuellement ambitieux, spécifique aux pages enjeux.

**Le template est générique** : il reçoit n'importe quel `EnjeuxContent` et s'adapte. Seul le contenu change d'une page enjeu à l'autre.

---

## Étape 0 — Lire le contexte

1. Lis `src/content/enjeux/types.ts` — structure de données exacte (`EnjeuxContent`)
2. Lis `src/app/enjeux/[slug]/EnjeuxDetailContent.tsx` — voir ce qui existe (brouillon à remplacer)
3. Lis `src/components/services/ServiceHeroV2.tsx` — à réutiliser tel quel pour le hero
4. Lis `src/components/services/RelatedServices.tsx` — à réutiliser pour les services recommandés
5. Lis `src/components/sections/FAQAccordion.tsx` — à réutiliser pour la FAQ
6. Lis `src/components/services/ServiceCTA.tsx` — à réutiliser pour le CTA final

---

## Étape 1 — Supprimer le brouillon

Supprime le fichier :
```
src/app/enjeux/[slug]/EnjeuxDetailContent.tsx
```

---

## Étape 2 — Créer les 3 composants visuels dédiés

Crée le dossier `src/components/enjeux/`.

Pour chaque composant, appelle **Gemini Design MCP** (`snippet_frontend`) avec le brief exact ci-dessous, puis sauvegarde le résultat dans le fichier correspondant.

**Règles communes à tous les composants (rappel design system) :**
- Coins carrés : JAMAIS de `rounded-*` (sauf `rounded-full` pour des bullets/dots)
- Police : DM Sans uniquement
- Tokens CSS : `bg-accent`, `text-primary`, `text-secondary`, `text-muted`, `bg-dark`, `bg-card`, `bg-grey`
- Accent sur fond clair : JAMAIS `text-accent` sur `bg-white` ou `bg-card` (contraste insuffisant). Utiliser `bg-black text-accent` ou `bg-accent text-primary`
- Sections sombres : classe `dark-section grain-overlay` + `style={{ background: "var(--bg-dark)" }}`
- Gradients avec opacité : `rgba(var(--color-accent-rgb), 0.08)` — jamais de hex hardcodé
- Padding standard : `py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12`
- Conteneur : `max-w-[82.5rem] mx-auto`
- Framer Motion : toujours `whileInView viewport={{ once: true }}`

---

### Composant A — `src/components/enjeux/EnjeuxSignals.tsx`

**Rôle :** Section "Vous êtes dans cette situation si..." — 4 signaux de reconnaissance.

**Brief Gemini :**

```
snippet_frontend:

Crée un composant React TypeScript "EnjeuxSignals" pour un site marketing B2B français.

Props :
- title: string (ex: "Vous êtes dans cette situation si...")
- subtitle: string (ex: "Un lancement mal préparé coûte des mois...")
- signals: Array<{ icon: string; title: string; description: string }>

Layout général :
- Section avec fond bg-card (#f8f8f6), padding py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12
- Conteneur max-w-[82.5rem] mx-auto
- Desktop (lg+) : grille 2 colonnes asymétriques grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start
- Mobile : colonne unique

Colonne gauche (sticky lg:sticky lg:top-28 lg:self-start) :
- Surtitre "Reconnaissance" : text-[11px] font-light tracking-[0.12em] uppercase text-primary/50 mb-4
- H2 (props.title) : font-normal clamp font-size via text-[clamp(26px,3.5vw,42px)] leading-[1.05] tracking-[-0.035em] text-primary mb-5
- Paragraph (props.subtitle) : text-[15px] text-secondary leading-relaxed max-w-sm

Colonne droite — liste des 4 signaux :
- Chaque item : flex flex-row items-start gap-5 py-7
- Entre les items (sauf le premier) : séparateur div h-px bg-black/[0.06]
- Badge numéro (index+1 padded "01","02"...) : inline-flex items-center justify-center w-8 h-8 bg-black text-accent text-[11px] font-semibold tracking-wide shrink-0 mt-0.5
- Titre signal (signal.title) : text-[16px] font-semibold text-primary leading-snug mb-2
- Description signal (signal.description) : text-[14px] text-secondary leading-relaxed

Animations Framer Motion :
- Colonne gauche : whileInView fadeInUp (y:24→0, opacity:0→1, duration:0.6), viewport once
- Chaque signal : whileInView stagger depuis la droite (x:24→0, opacity:0→1, delay: index*0.1, duration:0.5), viewport once

Imports nécessaires : framer-motion (motion), lucide-react (dynamique pour l'icône signal.icon)
"use client" requis (animations)
Export nommé : export function EnjeuxSignals(...)
Pas de rounded-* (sauf rounded-full si nécessaire)
Pas de tiret cadratin —
```

---

### Composant B — `src/components/enjeux/EnjeuxDefis.tsx`

**Rôle :** Section sombre "Ce que cette étape implique vraiment" — 4 défis en grille glassmorphism.

**Brief Gemini :**

```
snippet_frontend:

Crée un composant React TypeScript "EnjeuxDefis" pour un site marketing B2B français.

Props :
- surtitre: string
- title: string (ex: "Un lancement, c'est une fenêtre d'opportunité. Elle ne dure pas.")
- subtitle: string
- defis: Array<{ icon: string; title: string; description: string }>

Layout général :
- Section dark-section grain-overlay, style={{ background: "var(--bg-dark)" }}
- Padding py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12
- Conteneur max-w-[82.5rem] mx-auto

Header centré (max-w-2xl mx-auto text-center mb-14 sm:mb-16) :
- Surtitre (props.surtitre) : text-[11px] font-light tracking-[0.12em] uppercase text-white/40 mb-4
- H2 (props.title) : text-[clamp(26px,3.5vw,44px)] font-normal leading-[1.05] tracking-[-0.035em] text-white mb-5
- Subtitle (props.subtitle) : text-[15px] text-white/60 leading-relaxed

Grille des 4 défis :
- Grid 1 col mobile, 2 cols desktop : grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5
- Chaque card : bg-white/5 backdrop-blur-sm border border-white/10 p-7 sm:p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-default
- Intérieur de la card :
  - Ligne du haut (flex justify-between items-start) :
    - Gauche : icône Lucide (defi.icon, size 20, className="text-accent")
    - Droite : grand numéro décoratif (index+1 padded "01"...) text-[64px] font-bold leading-none text-white/[0.05] select-none
  - Titre (defi.title) : text-[17px] font-semibold text-white mt-5 mb-3 leading-snug
  - Description (defi.description) : text-[14px] text-white/60 leading-relaxed

Blobs décoratifs (position:absolute, pointer-events-none, overflow-hidden sur la section) :
- Blob top-right : radial-gradient ellipse rgba(var(--color-accent-rgb), 0.07)
- Blob bottom-left : radial-gradient ellipse rgba(var(--color-accent-rgb), 0.05)

Animations Framer Motion :
- Header : whileInView fadeInUp (y:20→0, opacity:0→1, duration:0.6), viewport once
- Cards : whileInView stagger fadeInUp (y:30→0, delay: index*0.1, duration:0.5), viewport once

"use client" requis
Export nommé : export function EnjeuxDefis(...)
Pas de rounded-* sur les cards
```

---

### Composant C — `src/components/enjeux/EnjeuxApproche.tsx`

**Rôle :** Section blanche "Approche Vizion" — 4 étapes numérotées avec sticky scroll editorial.

**Brief Gemini :**

```
snippet_frontend:

Crée un composant React TypeScript "EnjeuxApproche" pour un site marketing B2B français.

Props :
- title: string (ex: "Chez Vizion, on structure votre lancement avant de l'activer.")
- subtitle: string
- items: Array<{ number: string; title: string; description: string }>

Layout général :
- Section bg-white, padding py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12
- Conteneur max-w-[82.5rem] mx-auto

Layout desktop (lg+) : grille 2 colonnes grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start

Colonne gauche (lg:sticky lg:top-28 lg:self-start) — relatif pour le numéro décoratif :
- Surtitre "Approche" : text-[11px] font-light tracking-[0.12em] uppercase text-primary/50 mb-4
- H2 (props.title) : text-[clamp(26px,3.5vw,42px)] font-normal leading-[1.05] tracking-[-0.035em] text-primary mb-5
- Subtitle (props.subtitle) : text-[15px] text-secondary leading-relaxed max-w-xs
- Badge accent en bas (mt-8) : inline-flex items-center gap-2 bg-accent text-primary text-[12px] font-semibold px-4 py-2
  - Texte : "4 étapes structurées"
- Numéro décoratif arrière-plan (position absolute, aria-hidden) :
  - Affiche "04" — position absolute bottom-[-20px] right-[-10px]
  - Style : text-[180px] font-bold text-black/[0.03] leading-none select-none pointer-events-none

Colonne droite — liste des étapes :
- Chaque étape (div relative) :
  - Divider border-t border-black/[0.06] sauf le premier
  - Padding py-8
  - Layout flex flex-col gap-3
  - Numéro badge (item.number "01","02"...) : inline-flex w-fit bg-black text-accent text-[11px] font-semibold tracking-wide px-2.5 py-1 mb-1
  - Titre (item.title) : text-[18px] sm:text-[20px] font-semibold text-primary leading-snug
  - Description (item.description) : text-[14px] sm:text-[15px] text-secondary leading-relaxed

Animations Framer Motion :
- Colonne gauche : whileInView fadeInUp (y:20→0, opacity:0→1, duration:0.7), viewport once
- Étapes : whileInView stagger fadeInUp (y:16→0, opacity:0→1, delay: index*0.12, duration:0.5), viewport once

"use client" requis
Export nommé : export function EnjeuxApproche(...)
Pas de rounded-*
```

---

## Étape 3 — Créer le barrel export

Crée `src/components/enjeux/index.ts` :

```typescript
export { EnjeuxSignals } from "./EnjeuxSignals";
export { EnjeuxDefis } from "./EnjeuxDefis";
export { EnjeuxApproche } from "./EnjeuxApproche";
```

---

## Étape 4 — Recréer EnjeuxDetailContent.tsx

Crée `src/app/enjeux/[slug]/EnjeuxDetailContent.tsx` avec la structure suivante :

```typescript
"use client";

import { EnjeuxSignals, EnjeuxDefis, EnjeuxApproche } from "@/components/enjeux";
import { ServiceHeroV2 } from "@/components/services/ServiceHeroV2";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { InlineCTA } from "@/components/services/InlineCTA";
import type { EnjeuxContent } from "@/content/enjeux";

interface EnjeuxDetailContentProps {
  enjeu: EnjeuxContent;
}

export function EnjeuxDetailContent({ enjeu }: EnjeuxDetailContentProps) {
  return (
    <main>
      {/* 1. Hero — sombre, pleine hauteur */}
      <ServiceHeroV2
        category="Vos enjeux"
        title={enjeu.heroTitle}
        subtitle={enjeu.heroSubtitle}
        badge={enjeu.heroBadge}
        breadcrumbLabel={enjeu.title}
      />

      {/* 2. Signaux de reconnaissance — grisé */}
      <EnjeuxSignals
        title={enjeu.recognitionTitle}
        subtitle={enjeu.recognitionSubtitle}
        signals={enjeu.signals}
      />

      {/* 3. Défis clés — sombre */}
      <EnjeuxDefis
        surtitre={enjeu.defisSurtitre}
        title={enjeu.defisTitle}
        subtitle={enjeu.defisSubtitle}
        defis={enjeu.defis}
      />

      {/* 4. Approche Vizion — blanc */}
      <EnjeuxApproche
        title={enjeu.approcheTitle}
        subtitle={enjeu.approcheSubtitle}
        items={enjeu.approcheItems}
      />

      {/* 5. CTA inline — blanc */}
      <div className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-[82.5rem] mx-auto">
          <InlineCTA
            text="Vous êtes dans cette situation ?"
            buttonText="Nous contacter"
            href="/contact"
          />
        </div>
      </div>

      {/* 6. Services recommandés — grisé */}
      <RelatedServices
        title={enjeu.servicesTitle}
        subtitle={enjeu.servicesSubtitle}
        services={enjeu.services}
      />

      {/* 7. FAQ — blanc */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-[82.5rem] mx-auto">
          <h2 className="text-[clamp(24px,3vw,38px)] font-normal tracking-[-0.03em] text-primary mb-10">
            {enjeu.faqTitle}
          </h2>
          <FAQAccordion faqs={enjeu.faqs} />
        </div>
      </section>

      {/* 8. CTA final — sombre */}
      <ServiceCTA
        title={enjeu.ctaTitle}
        description={enjeu.ctaDescription}
        buttonText={enjeu.ctaButtonText}
        buttonLink={enjeu.ctaButtonLink}
      />
    </main>
  );
}
```

**Avant d'écrire ce fichier, vérifie les props exactes de chaque composant réutilisé** (RelatedServices, ServiceCTA, FAQAccordion, InlineCTA) en lisant leurs fichiers sources. Ajuste les props si nécessaire.

---

## Étape 5 — Vérification TypeScript

Lance :
```bash
npx tsc --noEmit --pretty 2>&1 | head -40
```

Corrige toutes les erreurs avant de terminer. Les erreurs fréquentes :
- Props incorrectes sur les composants réutilisés → lire leur interface et adapter
- Import manquant → vérifier les barrel exports
- Type mismatch sur `signals` vs `defis` → vérifier types.ts

---

## Étape 6 — Résumé à communiquer

Une fois terminé, indique :
- Composants créés : EnjeuxSignals, EnjeuxDefis, EnjeuxApproche
- Template mis à jour : EnjeuxDetailContent.tsx
- Structure des sections (1→8) avec les fonds utilisés
- Prochaine étape : utiliser `/new-enjeux [nom]` pour créer du contenu
