# Design System - Vizion

## Fonts

- **Titres**: `font-heading` (DM Sans) - font-medium, tracking tight
- **Corps**: `font-[var(--font-body)]` (DM Sans) - normal weight

## Couleurs

### Accent
- Primary: `#c8ff00` / `#EEFF41` (vert-jaune lime)

### Texte
- Noir principal: `#1a1a1a`, `#0a0a0a`
- Gris moyen: `#6b6b6b`
- Gris clair: `#999`
- Blanc avec opacité: `rgba(255,255,255,0.8)`

### Backgrounds
- Blanc: `#ffffff`, `#FEFEFE`
- Gris très clair: `#fafaf8`, `#f0f0eb`, `#F2F2F2`, `#EAEAEA`
- Noir: `#0a0a0a`, `#000`
- Gradients: `linear-gradient(135deg, #fafaf8 0%, #f0f0eb 100%)`

## Spacing & Layout

- Max width container: `max-w-[82.5rem]`
- Section padding: `py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12`
- Border radius: `rounded-[8px]`, `rounded-md`, `rounded-lg`, `rounded-xl`
- Gap: `gap-4 sm:gap-6`

## Composants

### Surtitre (Overline)
DM Sans, lettres fines (font-light), espacement entre lettres, pas de caps lock.
```jsx
<div className="flex items-center gap-2.5 mb-4 sm:mb-5">
  <div className="w-2 h-2 rounded-full bg-[#D4FD00]" />
  <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-[#6b6b6b]">
    Surtitre ici
  </span>
</div>
```

Alternative avec ligne:
```jsx
<div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
  <div className="h-[1px] w-6 sm:w-8 bg-black/20" />
  <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-black/50">
    Surtitre
  </span>
</div>
```

### H1 Principal
```jsx
<h1 className="font-heading font-medium text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[0.95] tracking-[-0.03em] text-[#1a1a1a]">
  Titre H1
</h1>
```

### H2 Principal
```jsx
<h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]">
  Titre principal
</h2>
```

Avec barre accent:
```jsx
<div className="flex gap-4 sm:gap-5">
  <div className="w-[3px] shrink-0 mt-2 h-10 bg-[#D4FD00] rounded-full" />
  <h2 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]">
    Titre
  </h2>
</div>
```

### Paragraphe Description
```jsx
<p className="text-[#6b6b6b] text-base font-[var(--font-body)] leading-relaxed max-w-[600px] mt-5 sm:mt-6">
  Description ici
</p>
```

### Boutons

#### Primaire (blanc sur fond sombre)
```jsx
<Link className="h-[44px] sm:h-[48px] px-5 sm:px-7 text-[13px] sm:text-[14px] font-[var(--font-body)] font-semibold tracking-[-0.01em] flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 bg-white text-black border border-white/50 shadow-[0_4px_24px_-1px_rgba(255,255,255,0.2),inset_0_1px_0_0_rgba(255,255,255,0.5)] hover:bg-white/95 hover:shadow-[0_8px_32px_-4px_rgba(255,255,255,0.35),inset_0_1px_0_0_rgba(255,255,255,0.6)] hover:-translate-y-0.5">
  Texte <ArrowRight size={16} />
</Link>
```

#### Primaire (noir sur fond clair)
```jsx
<Link className="h-[48px] sm:h-[56px] px-6 sm:px-8 text-[13px] sm:text-[15px] font-[var(--font-body)] font-semibold tracking-[-0.01em] bg-black text-white rounded-full hover:bg-black/90 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 border border-black/50 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3)]">
  Texte <ArrowRight size={14} />
</Link>
```

#### Secondaire (ghost)
```jsx
<Link className="h-[44px] sm:h-[48px] px-5 sm:px-7 text-[13px] sm:text-[14px] font-[var(--font-body)] font-semibold tracking-[-0.01em] flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 bg-white/10 backdrop-blur-xl text-white border border-white/20 hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5">
  Texte
</Link>
```

### Cards

#### Card Glassmorphism Light
```jsx
<div className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-md sm:rounded-lg p-4 sm:p-5 md:p-7 shadow-sm card-hover-glow transition-all duration-300">
  {/* Contenu */}
</div>
```

#### Card Glassmorphism Dark
```jsx
<div className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] backdrop-blur-xl border border-white/10 rounded-md sm:rounded-lg p-5 sm:p-8 md:p-10 relative overflow-hidden shadow-2xl shadow-black/30">
  {/* Carbon fibre pattern */}
  <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/carbon-fibre.png')]" />
  {/* Contenu relatif z-10 */}
</div>
```

### Tags/Badges
```jsx
<span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-black/5 backdrop-blur-sm border border-black/5 text-[9px] sm:text-[10px] font-bold tracking-wide rounded-lg">
  Tag
</span>
```

Sur fond sombre:
```jsx
<span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 text-[9px] sm:text-[10px] font-bold rounded-lg tracking-wide text-white/80">
  Tag
</span>
```

### Stats
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

### Liste avec Checkmarks
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

## Effets

### Grain Texture
Ajouter la classe `grain-light` ou `grain-overlay` à la section

### Ambient Glow
```jsx
<div className="absolute top-[35%] left-[25%] w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[#D4FD00] opacity-[0.045] rounded-full blur-[200px] pointer-events-none" />
```

### Diagonal Divider
```jsx
<div className="absolute bottom-0 left-0 w-full h-6 sm:h-8 md:h-10 pointer-events-none z-20">
  <svg className="w-full h-full block" viewBox="0 0 1440 40" preserveAspectRatio="none">
    <polygon points="0,40 1440,0 1440,40" fill="#F2F2F2" />
  </svg>
</div>
```

## Animations (Framer Motion)

### Fade In Up
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

### Slide In Left
```jsx
initial={{ opacity: 0, x: -10 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
```

## Section Background Template
```jsx
<section
  className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 relative grain-light overflow-hidden"
  style={{ background: 'linear-gradient(135deg, #fafaf8 0%, #f0f0eb 100%)' }}
>
  {/* Ambient glow */}
  <div className="absolute top-[35%] left-[25%] w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[#D4FD00] opacity-[0.045] rounded-full blur-[200px] pointer-events-none" />

  <div className="max-w-[82.5rem] mx-auto relative z-10">
    {/* Contenu */}
  </div>
</section>
```
