# Vizion Design System - Consignes de Reproduction

Ce document contient **toutes les spécifications exactes** pour reproduire le design system Vizion dans n'importe quel fichier ou projet.

---

## 1. PALETTE DE COULEURS

### Couleurs principales
```
Noir principal    : #000000
Blanc             : #FFFFFF
Gris clair (fond) : #F2F2F2
Gris moyen        : #B7B7B7
Gris foncé        : #6D6D6D
```

### Couleurs de texte
```
Texte body        : #52525B
Texte prose       : #27272a
Texte secondaire  : #3f3f46
Texte tertiaire   : #71717a
```

### Couleur d'accent (CTA)
```
Jaune néon        : #EEFF41  (Utiliser UNIQUEMENT pour les CTAs principaux)
```

### Gradient signature
```css
/* Gradient Hero - Pour sections premium, cartes mises en avant */
background: linear-gradient(117deg, #B7B7B7 0%, #000 50.77%, #6D6D6D 100.58%);
```

---

## 2. TYPOGRAPHIE

### Polices
```
Titres (headings) : Roboto, sans-serif
Corps (body)      : Inter, sans-serif
```

### Hiérarchie typographique

| Niveau | Police | Taille | Poids | Line-height | Letter-spacing | Transform |
|--------|--------|--------|-------|-------------|----------------|-----------|
| **H1** | Roboto | clamp(48px, 8vw, 72px) | 900 | 0.92 | -0.04em | UPPERCASE |
| **H2** | Roboto | clamp(32px, 5vw, 52px) | 900 | 1.05 | -0.035em | UPPERCASE |
| **H3** | Roboto | clamp(20px, 3vw, 28px) | 900 | 1.15 | -0.02em | UPPERCASE |
| **Surtitre** | Inter | 11px | 400 | 16.5px | 1.65px | UPPERCASE |
| **Body** | Inter | 16px | 400 | 1.7 | - | - |

### Exemples Tailwind

```jsx
// H1
<h1 className="font-[Roboto] text-[clamp(48px,8vw,72px)] font-black leading-[0.92] tracking-[-0.04em] uppercase text-black">

// H2
<h2 className="font-[Roboto] text-[clamp(32px,5vw,52px)] font-black leading-[1.05] tracking-[-0.035em] uppercase text-black">

// H3
<h3 className="font-[Roboto] text-[clamp(20px,3vw,28px)] font-black leading-[1.15] tracking-[-0.02em] uppercase text-black">

// Surtitre / Eyebrow
<span className="font-[Inter] text-[11px] font-normal leading-[16.5px] tracking-[1.65px] uppercase">

// Body
<p className="font-[Inter] text-base text-[#52525B] leading-[1.7]">
```

---

## 3. ESPACEMENTS

### Variables d'espacement
```
XS   : 0.25rem (4px)
SM   : 0.5rem  (8px)
MD   : 1rem   (16px)
LG   : 1.5rem (24px)
XL   : 2rem   (32px)
2XL  : 3rem   (48px)
3XL  : 4rem   (64px)
4XL  : 6rem   (96px)
```

### Espacements de cartes
```
Gap entre cartes     : 24px
Padding fond gris    : 32px
Padding fond blanc   : 24px
```

### Padding de sections
```
Standard : 96px vertical (py-24)
Compact  : 48px vertical (py-12)
```

### Largeurs de containers
```
Narrow : max-width 672px  (42rem)  - Articles, formulaires
Base   : max-width 1024px (64rem)  - Contenu standard
Wide   : max-width 1320px (82.5rem) - Sections larges
```

---

## 4. BORDER RADIUS

```
SM : 6px   (rounded-md)
MD : 8px   (rounded-lg)
LG : 12px  (rounded-xl)
XL : 16px  (rounded-2xl)
Full : 9999px (rounded-full) - Uniquement pour les boutons
```

---

## 5. OMBRES

```css
/* SM - Subtile */
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

/* MD - Légère */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

/* LG - Moyenne */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

/* XL - Forte */
box-shadow: 0 16px 48px rgba(0, 0, 0, 0.16);
```

---

## 6. TRANSITIONS

```
Fast : 150ms ease
Base : 250ms ease
Slow : 400ms ease
```

### Easing signatures
```css
/* Standard */
cubic-bezier(0.4, 0, 0.2, 1)

/* Smooth (Apple-like) */
cubic-bezier(0.16, 1, 0.3, 1)

/* Framer Motion */
[0.23, 1, 0.32, 1]
```

---

## 7. COMPOSANTS

### Carte fond gris
```jsx
<div className="flex p-8 justify-between items-start gap-6 bg-[#F2F2F2] rounded-xl transition-all duration-250 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5">
```

### Carte fond blanc
```jsx
<div className="flex p-6 justify-center items-center gap-6 bg-white rounded-xl transition-all duration-250 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5">
```

### Carte Hero (gradient)
```jsx
<div className="flex p-8 justify-between items-start gap-6 rounded-xl text-white transition-all duration-250 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
     style={{ background: 'linear-gradient(117deg, #B7B7B7 0%, #000 50.77%, #6D6D6D 100.58%)' }}>
```

---

## 8. BOUTONS

### Bouton Primary (Glassmorphism Dark)
```jsx
<button className="inline-flex items-center justify-center gap-2 px-8 py-4 font-[Inter] font-semibold text-[15px] tracking-[-0.01em] rounded-full cursor-pointer text-white transition-all duration-300"
        style={{
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 24px -1px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 1px 0 0 rgba(255,255,255,0.1) inset'
        }}>
  Texte du bouton
</button>
```

### Bouton Secondary (Glassmorphism Light)
```jsx
<button className="inline-flex items-center justify-center gap-2 px-8 py-4 font-[Inter] font-semibold text-[15px] tracking-[-0.01em] rounded-full cursor-pointer text-black transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 2px 16px -1px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.5) inset'
        }}>
  Texte du bouton
</button>
```

### Bouton Glass (sur fond sombre)
```jsx
<button className="inline-flex items-center justify-center gap-2 px-8 py-4 font-[Inter] font-semibold text-[15px] tracking-[-0.01em] rounded-full cursor-pointer text-white transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 4px 24px -1px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1) inset, 0 1px 0 0 rgba(255,255,255,0.2) inset'
        }}>
  Texte du bouton
</button>
```

### Bouton Accent (CTA Jaune)
```jsx
<button className="inline-flex items-center justify-center gap-2 px-8 py-4 font-[Inter] font-semibold text-[15px] tracking-[-0.01em] rounded-full cursor-pointer bg-[#EEFF41] text-black transition-all duration-300 hover:-translate-y-0.5">
  Texte du bouton
</button>
```

### Hover states des boutons
```css
/* Au hover, ajouter : */
transform: translateY(-2px);
/* + augmenter légèrement l'opacité du background */
/* + renforcer le box-shadow */
```

---

## 9. ANIMATIONS

### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
/* Durée : 400ms */
```

### Slide Up
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Durée : 400ms */
```

### Stagger delays
```
Element 1 : 100ms
Element 2 : 200ms
Element 3 : 300ms
Element 4 : 400ms
```

### Framer Motion patterns
```jsx
// Variants standard
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
  }
};

// Container avec stagger
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};
```

---

## 10. EFFETS VISUELS

### Grain / Texture de bruit
```css
/* Overlay de grain subtil (2.5% opacité) */
.grain-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.025;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: overlay;
}
```

### Glassmorphism
```css
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
background: rgba(X, X, X, 0.1 à 0.75);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Hover glow sur cartes
```css
transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

/* Au hover : */
transform: translateY(-4px) scale(1.01);
box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.03);
```

---

## 11. RESPONSIVE

### Breakpoints Tailwind utilisés
```
md: 768px+
lg: 1024px+
```

### Patterns courants
```jsx
// Caché mobile, visible desktop
className="hidden lg:flex"

// Grid responsive
className="grid grid-cols-1 lg:grid-cols-12"

// Padding responsive
className="px-4 lg:px-6"
```

### Typographie fluid
Utiliser `clamp()` pour les titres :
```css
/* Min, Préféré, Max */
clamp(48px, 8vw, 72px)  /* H1 */
clamp(32px, 5vw, 52px)  /* H2 */
clamp(20px, 3vw, 28px)  /* H3 */
```

---

## 12. CLASSES UTILITAIRES PERSONNALISÉES

### Classes CSS à réutiliser
```css
/* Containers */
.container-narrow { max-width: 42rem; margin-inline: auto; padding-inline: 1.5rem; }
.container-base   { max-width: 64rem; margin-inline: auto; padding-inline: 1.5rem; }
.container-wide   { max-width: 82.5rem; margin-inline: auto; padding-inline: 1.5rem; }

/* Padding sections */
.section-padding    { padding-block: 6rem; }
.section-padding-sm { padding-block: 3rem; }

/* Backgrounds */
.bg-gradient-hero { background: linear-gradient(117deg, #B7B7B7 0%, #000 50.77%, #6D6D6D 100.58%); }
.bg-grey { background: #F2F2F2; }

/* Cards */
.card-grey  { /* voir section 7 */ }
.card-white { /* voir section 7 */ }
.card-hero  { /* voir section 7 */ }

/* Buttons */
.btn { /* voir section 8 */ }
.btn-primary { /* voir section 8 */ }
.btn-secondary { /* voir section 8 */ }
.btn-glass { /* voir section 8 */ }

/* Typography */
.surtitre, .eyebrow { /* voir section 2 */ }
.text-inverted { color: white !important; }

/* Animations */
.animate-fade-in { animation: fadeIn 400ms ease forwards; }
.animate-slide-up { animation: slideUp 400ms ease forwards; }
```

---

## 13. TEXTE SUR FOND SOMBRE

Quand le fond utilise le gradient hero ou est sombre :

```jsx
// Tous les titres passent en blanc
<h1 className="text-white">
<h2 className="text-white">
<h3 className="text-white">

// Texte body avec opacité
<p className="text-white/80">  // 80% opacité
<p className="text-white/60">  // 60% opacité pour texte secondaire
```

---

## 14. CHECKLIST AVANT INTÉGRATION

Avant de créer un nouveau composant, vérifier :

- [ ] Polices : Roboto (titres) + Inter (body)
- [ ] Couleurs : Palette monochrome + #EEFF41 pour CTA
- [ ] Titres : UPPERCASE, font-weight 900, letter-spacing négatif
- [ ] Espacements : Multiples de 8px (8, 16, 24, 32, 48, 64, 96)
- [ ] Border-radius : 6px/8px/12px pour éléments, 9999px pour boutons
- [ ] Boutons : Glassmorphism + border inset + blur 20px
- [ ] Transitions : 250ms ease standard, cubic-bezier pour premium
- [ ] Hover : translateY(-2px) + shadow augmenté
- [ ] Responsive : Mobile-first, breakpoint lg: pour desktop

---

## 15. DO & DON'T

### DO (Faire)
- Utiliser le gradient hero pour les sections premium
- Garder les titres en UPPERCASE avec tracking serré
- Appliquer le glassmorphism sur les boutons
- Utiliser des transitions fluides (400ms)
- Respecter la hiérarchie des ombres

### DON'T (Ne pas faire)
- Utiliser d'autres couleurs que la palette définie
- Mettre des titres en lowercase ou sentence case
- Utiliser des border-radius incohérents
- Oublier le backdrop-filter sur les éléments glass
- Utiliser le jaune #EEFF41 ailleurs que sur les CTAs principaux

---

## 16. EXEMPLE DE SECTION COMPLÈTE

```jsx
<section className="bg-[#F2F2F2] py-24">
  <div className="max-w-[82.5rem] mx-auto px-6">

    {/* Surtitre */}
    <span className="font-[Inter] text-[11px] font-normal tracking-[1.65px] uppercase text-[#6D6D6D]">
      Nos services
    </span>

    {/* Titre H2 */}
    <h2 className="font-[Roboto] text-[clamp(32px,5vw,52px)] font-black leading-[1.05] tracking-[-0.035em] uppercase text-black mt-4 mb-12">
      Ce que nous faisons
    </h2>

    {/* Grid de cartes */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Carte */}
      <div className="flex flex-col p-8 bg-white rounded-xl transition-all duration-250 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5">
        <h3 className="font-[Roboto] text-[clamp(20px,3vw,28px)] font-black leading-[1.15] tracking-[-0.02em] uppercase text-black mb-4">
          Titre carte
        </h3>
        <p className="font-[Inter] text-base text-[#52525B] leading-[1.7]">
          Description de la carte avec le texte explicatif.
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-12 text-center">
      <button className="btn btn-primary">
        Découvrir nos services
      </button>
    </div>

  </div>
</section>
```

---

## 17. CONTEXT POUR GEMINI MCP

Quand tu utilises le MCP Gemini Design (`create_frontend`, `modify_frontend`, `snippet_frontend`), passe ce contexte :

```
Project uses Vizion Design System:
- Fonts: Roboto (headings, weight 900, uppercase), Inter (body)
- Colors: #000000, #FFFFFF, #F2F2F2, #B7B7B7, #6D6D6D, accent #EEFF41
- Gradient hero: linear-gradient(117deg, #B7B7B7 0%, #000 50.77%, #6D6D6D 100.58%)
- Text colors: #52525B (body), #27272a (prose)
- Headings: uppercase, font-black, negative letter-spacing (-0.04em to -0.02em)
- Spacing: 8px multiples (8, 16, 24, 32, 48, 64, 96)
- Border-radius: 6px/8px/12px elements, 9999px buttons
- Buttons: Glassmorphism with backdrop-filter blur(20px), rounded-full
- Transitions: 250ms ease, hover translateY(-2px)
- Shadows: 0 4px 12px rgba(0,0,0,0.08) to 0 16px 48px rgba(0,0,0,0.16)
```

---

*Document généré pour maintenir la cohérence du Design System Vizion.*
