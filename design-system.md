# Design System - Vizion

## Fonts

- **Titres**: `font-heading` → `var(--font-dm-sans)` (DM Sans), font-weight 400, tracking tight
- **Corps**: `font-[var(--font-body)]` → `var(--font-dm-sans)` (DM Sans), font-weight 400

## Couleurs

### CSS Variables
```css
--color-accent: #D4FD00;
--color-black: #000000;
--color-grey-light: #F2F2F2;
--color-grey-mid: #B7B7B7;
--color-grey-dark: #6D6D6D;
--bg-white: #FFFFFF;
--bg-grey: #F2F2F2;
--bg-gradient-hero: linear-gradient(117deg, #B7B7B7 0%, #000 50.77%, #6D6D6D 100.58%);
```

### Accent
- Primary lime: `#D4FD00`

### Texte
- Noir principal: `#000000`, `#1a1a1a`, `#0a0a0a`
- Body: `#52525B`
- Gris moyen: `#6b6b6b`, `#3f3f46`
- Gris clair: `#999`, `#71717a`
- Blanc avec opacité: `rgba(255,255,255,0.8)`, `text-white/50`, `text-white/60`

### Backgrounds
- Blanc: `#ffffff`
- Gris clair: `#fafaf8`, `#f8f8f6`, `#fafafa`, `#F2F2F2`
- Noir: `#0c0c0a` (hero/dark sections), `#0a0a0a`
- Gradient clair: `linear-gradient(135deg, #fafaf8 0%, #f0f0eb 100%)`

---

## Spacing & Layout

### CSS Variables
```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
--space-4xl: 6rem;     /* 96px */
--card-gap: 24px;
--card-padding-grey: 32px;
--card-padding-white: 24px;
```

### Containers
- `max-w-[82.5rem]` mx-auto — container principal (1320px)
- `.container-narrow` — max-width: 42rem
- `.container-base` — max-width: 64rem
- `.container-wide` — max-width: 82.5rem

### Section Padding
```jsx
className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12"
```

### Border Radius
Tous les radius sont à `0` (design sharp/carré) :
```css
--radius-sm: 0;
--radius-md: 0;
--radius-lg: 0;
--radius-xl: 0;
```
Exception : badges glassmorphism (`rounded-full`), et certaines images (`rounded-lg`).

---

## Typographie

### H1 (global CSS)
```css
font-family: var(--font-heading);
font-size: clamp(48px, 8vw, 72px);
font-weight: 400;
line-height: 0.92;
letter-spacing: -0.04em;
color: var(--color-black);
```

### H1 en Tailwind (Hero)
```jsx
<h1 className="font-heading font-normal text-[28px] min-[400px]:text-[32px] sm:text-[44px] md:text-[58px] lg:text-[80px] leading-[0.95] tracking-[-0.03em]">
```

### H1 Gradient Text (fond sombre)
```jsx
style={{
  backgroundImage: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.88) 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
}}
```

### H2 (global CSS)
```css
font-size: clamp(32px, 5vw, 52px);
font-weight: 400;
line-height: 1.05;
letter-spacing: -0.035em;
```

### H2 en Tailwind
```jsx
<h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]">
```

### H3 (global CSS)
```css
font-size: clamp(20px, 3vw, 28px);
font-weight: 400;
line-height: 1.15;
letter-spacing: -0.02em;
```

### Surtitre / Eyebrow
DM Sans, font-light, espacement entre lettres, pas de caps lock.
```css
.surtitre, .eyebrow {
  font-size: 11px;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: 0.12em;
}
```

### Paragraphe Description
```jsx
<p className="text-[#6b6b6b] text-base font-[var(--font-body)] leading-relaxed max-w-[600px]">
```
Sur fond sombre :
```jsx
<p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
```

---

## Composants

### Surtitre (Overline) — fond clair
Avec dot :
```jsx
<div className="flex items-center gap-2.5 mb-4 sm:mb-5">
  <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
  <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b]">
    Surtitre ici
  </span>
</div>
```

Avec ligne :
```jsx
<div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
  <div className="h-[1px] w-6 sm:w-8 bg-black/20" />
  <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-black/50">
    Surtitre
  </span>
</div>
```

### Badge Glassmorphism avec Ping (fond sombre — Hero/CTA)
```jsx
<div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FD00] opacity-50" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-br from-[#D4FD00] via-[#D4FD00]/80 to-[#D4FD00]/50 shadow-[0_0_8px_rgba(212,253,0,0.5)]" />
  </span>
  <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.08em] uppercase text-white/90">
    Texte du badge
  </span>
</div>
```

### H2 avec Barre Accent
```jsx
<div className="flex gap-4 sm:gap-5">
  <div className="w-[3px] shrink-0 mt-2 h-10 bg-[#D4FD00] rounded-full" />
  <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]">
    Titre
  </h2>
</div>
```

### Mot Surligné (accent)
```jsx
<span className="relative inline-block">
  <span className="relative z-10 text-[#D4FD00]">mot</span>
  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#D4FD00]/40 -z-0"
        style={{ transform: 'skewX(-3deg)' }} />
</span>
```

---

## Boutons

Utiliser les classes CSS globales `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-dark`.

### Base `.btn`
```css
display: inline-flex;
align-items: center;
justify-content: center;
gap: 8px;
height: 44px; /* sm: 48px */
padding: 0 20px; /* sm: 0 28px */
font-size: 13px; /* sm: 14px */
font-weight: 600;
letter-spacing: -0.01em;
border-radius: 0;
border: 1px solid transparent;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
active: scale(0.98);
```

### `.btn-primary` — blanc sur fond sombre
```css
background: #fff;
color: #000;
border-color: rgba(0, 0, 0, 0.1);
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
hover: translateY(-1px) + box-shadow enhanced
```

### `.btn-secondary` — glass sombre
```css
background: rgba(0, 0, 0, 0.4);
backdrop-filter: blur(12px);
color: #fff;
border-color: rgba(255, 255, 255, 0.3);
box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.2);
hover: translateY(-1px) + bg rgba(0,0,0,0.5)
```

### `.btn-dark` — noir plein (fond clair)
```css
background: #0a0a0a;
color: #fff;
border-color: rgba(0, 0, 0, 0.5);
box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
hover: translateY(-1px)
```

### Usage JSX
```jsx
<Link href="/contact" className="btn btn-primary group">
  Texte <ArrowUpRightIcon className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform" size={16} />
</Link>
<Link href="/cas-clients" className="btn btn-secondary group">
  Texte <ArrowUpRightIcon className="shrink-0 inline-block group-hover:translate-x-0.5 transition-transform" size={16} />
</Link>
```

---

## Cards

### Card Glassmorphism Light
```jsx
<div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg p-4 sm:p-5 md:p-7 shadow-sm card-hover-glow transition-all duration-300">
```

### Card Glassmorphism Dark
```jsx
<div className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] backdrop-blur-xl border border-white/10 rounded-md sm:rounded-lg p-5 sm:p-8 md:p-10 relative overflow-hidden shadow-2xl shadow-black/30">
  <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />
  {/* Contenu relatif z-10 */}
</div>
```

### Card White Standard
```jsx
<div className="bg-white border border-black/10 p-6 sm:p-8">
```

### Card Hover Effects
- `.card-hover-glow` : translateY(-4px) scale(1.01) + shadow
- `.card-border-glow` : translateY(-2px) + gradient border fade-in

---

## Tags/Badges

### Fond clair
```jsx
<span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-black/5 backdrop-blur-sm border border-black/5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded-lg">
  Tag
</span>
```

### Fond sombre
```jsx
<span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 text-[9px] sm:text-[10px] font-bold rounded-lg tracking-wide text-white/80">
  Tag
</span>
```

### Category badge (lime)
```jsx
<span className="px-2.5 py-1 bg-[#D4FD00]/20 text-[10px] font-bold tracking-wide rounded">
  Catégorie
</span>
```

---

## Stats

### Fond clair
```jsx
<div className="bg-[#fafaf8] border border-black/[0.06] rounded-[8px] p-3 sm:p-4 lg:p-5 flex flex-col gap-1 sm:gap-1.5">
  <span className="text-lg sm:text-2xl lg:text-3xl font-[var(--font-body)] font-[900] tracking-[-0.02em] text-[#1a1a1a] leading-none">
    +70
  </span>
  <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-[var(--font-body)] font-semibold tracking-wider text-[#999] leading-tight">
    Clients accompagnés
  </span>
</div>
```

### Stats en ligne (fond sombre — Hero)
```jsx
<div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-3 sm:pt-4 border-t border-white/5">
  <div className="flex items-center gap-2">
    <span className="text-[#D4FD00] font-heading font-bold text-xl sm:text-2xl">70+</span>
    <span className="text-white/50 text-[10px] sm:text-xs leading-tight">clients<br/>accompagnés</span>
  </div>
  <div className="w-px h-8 bg-white/10 hidden sm:block" />
  {/* ... */}
</div>
```

---

## Liste avec Checkmarks
```jsx
<ul className="space-y-3">
  {items.map((item, i) => (
    <li key={i} className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-[#c8ff00] shrink-0 mt-0.5" />
      <span className="text-sm font-[var(--font-body)] text-[#1a1a1a] leading-relaxed">{item}</span>
    </li>
  ))}
</ul>
```

### Feature badges en ligne (Hero)
```jsx
<div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pb-3 sm:pb-4 border-b border-white/10">
  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-tight" style={{ color: "rgba(255,255,255,0.8)" }}>
    <CheckCircle2 size={14} style={{ color: "#D4FD00" }} />
    Feature text
  </div>
</div>
```

---

## Effets

### Grain Texture
- `grain-overlay` : sections sombres (opacity 0.025, mix-blend-mode: overlay)
- `grain-light` : sections claires (opacity 0.018, mix-blend-mode: multiply)
- `grain-medium` : texture prononcée (opacity 0.04, mix-blend-mode: multiply)

### Ambient Glow (fond clair)
```jsx
<div className="absolute top-[35%] left-[25%] w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[#D4FD00] opacity-[0.045] rounded-full blur-[200px] pointer-events-none" />
```

### Radial Gradients Animés (fond sombre — Hero/CTA)
```jsx
<div className="absolute inset-0 pointer-events-none z-0">
  <div
    className="absolute w-[80%] h-[60%] top-[10%] left-[-20%] animate-gradient-float-1"
    style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.12) 0%, transparent 55%)" }}
  />
  <div
    className="absolute w-[70%] h-[50%] top-[-10%] right-[-10%] animate-gradient-float-2"
    style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.08) 0%, transparent 55%)" }}
  />
  <div
    className="absolute w-[60%] h-[70%] bottom-[-15%] left-[15%] animate-gradient-float-3"
    style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.06) 0%, transparent 55%)" }}
  />
  <div
    className="absolute w-[50%] h-[50%] bottom-[5%] right-[-15%] animate-gradient-float-4"
    style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 253, 0, 0.05) 0%, transparent 55%)" }}
  />
</div>
```

### Diagonal Divider
```jsx
<div className="absolute bottom-0 left-0 w-full h-6 sm:h-8 md:h-10 pointer-events-none z-20">
  <svg className="w-full h-full block" viewBox="0 0 1440 40" preserveAspectRatio="none">
    <polygon points="0,40 1440,0 1440,40" fill="#F2F2F2" />
  </svg>
</div>
```

### Decorative Accent Frames (images)
```jsx
<div className="absolute -inset-2 sm:-inset-3 border border-[#D4FD00]/20 rounded-lg pointer-events-none hidden lg:block" />
<div className="absolute -inset-4 sm:-inset-6 border border-[#D4FD00]/10 rounded-xl pointer-events-none hidden lg:block" />
```

### Corner Accents
```jsx
<div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4FD00] rounded-tr-lg hidden lg:block" />
<div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4FD00] rounded-bl-lg hidden lg:block" />
```

### Glow Border (rotating conic-gradient)
```css
.glow-border-container — conic-gradient animé #D4FD00, rotation 3s
.glow-border-content — contenu relatif z-10
```

---

## Animations

### CSS Keyframes disponibles

| Classe | Durée | Usage |
|--------|-------|-------|
| `animate-gradient-float-1` | 15s | Blob gradient flottant |
| `animate-gradient-float-2` | 18s | Blob gradient flottant |
| `animate-gradient-float-3` | 14s | Blob gradient flottant |
| `animate-gradient-float-4` | 16s | Blob gradient flottant |
| `animate-gradient-float-5` | 17s | Blob gradient flottant |
| `animate-gradient-move-1` | 20s | Orbe mouvement (Assets) |
| `animate-gradient-move-2` | 25s | Orbe mouvement |
| `animate-gradient-move-3` | 30s | Orbe mouvement |
| `animate-scroll-left` | 50s | Marquee logos (pause on hover) |
| `animate-fade-in-up` | 0.6s | Fade in + slideUp |
| `animate-shimmer` | 8s | Shimmer text |

### Framer Motion — Scroll Reveal
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

### Framer Motion — Stagger Children
```jsx
const containerVariants = {
  visible: { transition: { staggerChildren: 0.22, delayChildren: 0.05 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } }
};
```

### Framer Motion — Layout Tab
```jsx
<motion.div layoutId="activeTab" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
```

### GSAP — Timeline Entrance (Hero)
```javascript
gsap.timeline({ defaults: { ease: "power3.out" } })
  .fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 })
```

### GSAP — ScrollTrigger Pin
```javascript
ScrollTrigger.create({
  trigger: leftColumn,
  start: "top 96px",
  endTrigger: rightColumn,
  end: "bottom bottom",
  pin: true,
  pinSpacing: false,
});
```

---

## Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.16);
```

---

## Transitions
```css
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
--transition-slow: 400ms ease;
```

---

## Section Templates

### Section Sombre (Hero / FinalCTA)
```jsx
<section
  className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 relative overflow-hidden grain-overlay"
  style={{ background: "#0c0c0a" }}
>
  {/* Radial gradients animés */}
  <div className="absolute inset-0 pointer-events-none z-0">
    {/* animate-gradient-float-1 à 4 */}
  </div>
  <div className="max-w-[82.5rem] mx-auto relative z-10">
    {/* Contenu */}
  </div>
</section>
```

### Section Claire
```jsx
<section
  className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative grain-light overflow-hidden"
  style={{ background: 'linear-gradient(135deg, #fafaf8 0%, #f0f0eb 100%)' }}
>
  {/* Ambient glow subtil */}
  <div className="absolute top-[35%] left-[25%] w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[#D4FD00] opacity-[0.045] rounded-full blur-[200px] pointer-events-none" />
  <div className="max-w-[82.5rem] mx-auto relative z-10">
    {/* Contenu */}
  </div>
</section>
```

### Section Blanche
```jsx
<section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden">
  <div className="max-w-[82.5rem] mx-auto relative z-10">
    {/* Contenu */}
  </div>
</section>
```

---

## Borders
```css
border-black/10     /* cards standard */
border-black/[0.06] /* subtil */
border-black/[0.04] /* très subtil */
border-white/10     /* sur fond sombre */
border-white/20     /* glassmorphism */
border-[#D4FD00]/20 /* accent frame */
```

---

## Responsive Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

Mobile-first. Touch targets minimum 44px.

---

## Icône Arrow (CTA)
Utiliser `ArrowUpRightIcon` depuis `@/components/icons` avec `group-hover:translate-x-0.5 transition-transform`.

## Logo Marquee
```jsx
<div className="relative overflow-hidden w-full"
  style={{
    maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
  }}
>
  <div className="flex animate-scroll-left gap-8 w-max">
    {[...Array(2)].map((_, setIndex) => (
      <div key={setIndex} className="flex gap-8 items-center shrink-0">
        {logos.map((logo) => (
          <img key={logo.name} src={logo.src} alt={logo.name}
            className="h-6 sm:h-7 w-auto opacity-50 hover:opacity-80 transition-opacity brightness-0 invert" />
        ))}
      </div>
    ))}
  </div>
</div>
```
