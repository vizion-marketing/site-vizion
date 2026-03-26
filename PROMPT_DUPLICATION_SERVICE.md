# Prompt de duplication de page service Vizion

> Ce prompt est a utiliser tel quel pour creer chaque nouvelle page service.
> Remplacer les variables `{{...}}` par les informations specifiques au service.

---

## VARIABLES A REMPLIR AVANT EXECUTION

```
SERVICE_NAME = {{nom du service, ex: "Audit Marketing"}}
SERVICE_SLUG = {{slug URL, ex: "audit-marketing"}}
SERVICE_ICON = {{icone Lucide, ex: "Search"}}
SERVICE_CATEGORY = {{categorie, ex: "STRATEGIE MARKETING"}}
SERVICE_ORDER = {{ordre d'affichage, ex: 2}}
RELATED_SERVICES = {{3 slugs de services existants, ex: ["site-web-landing-page", "seo-referencement", "strategie-contenu"]}}
```

---

## PROMPT

Tu vas creer une page service complete pour "{{SERVICE_NAME}}" sur le site Vizion (agence marketing B2B Toulouse). Tu dois produire un fichier TypeScript de contenu + la structure d'images correspondante.

### CONTEXTE

Vizion est une agence de marketing strategique B2B basee a Toulouse. Tonalite : rigoureuse, experte, accessible, partenariale. Jamais agressive. Le marketing doit servir la vente. Clients cibles : PME 10-250 collaborateurs, ETI, scale-ups B2B.

**Vocabulaire privilegie :** marketing strategique, positionnement, architecture de message, sales enablement, cycle de vente, feuille de route, alignement marketing-ventes, directeur marketing dedie.

**Interdictions absolues :**
- Le tiret cadratin `—` (em dash, U+2014) est STRICTEMENT INTERDIT dans tout le texte. Utiliser `.` `,` `:` ou `()` a la place.
- Pas de promesses excessives, pas d'anglicismes inutiles, pas de jargon vague.
- Pas de vocabulaire d'agence d'execution.

### FICHIER A CREER

Chemin : `src/content/services/{{SERVICE_SLUG}}.ts`

Le fichier doit exporter une constante nommee en camelCase (ex: `auditMarketing`) typee `ServiceContent` importee de `./types`.

### STRUCTURE OBLIGATOIRE — TOUTES LES SECTIONS

Le fichier DOIT contenir TOUTES les sections suivantes, sans exception. L'ordre dans le fichier n'a pas d'importance (c'est le composant qui ordonne le rendu), mais toutes les cles doivent etre presentes.

---

#### 1. IDENTITE (5 champs)

```typescript
slug: "{{SERVICE_SLUG}}",
title: "{{SERVICE_NAME}}",
icon: "{{SERVICE_ICON}}",       // Nom exact Lucide (doit exister dans icon-resolver.ts)
category: "{{SERVICE_CATEGORY}}",
order: {{SERVICE_ORDER}},
```

**Icones disponibles :** Search, FileText, Zap, ClipboardList, Wrench, Target, Pencil, Globe, BarChart3, Repeat, Smartphone, Layout, Code, Rocket, MessageSquareText, Palette, UserCheck, TrendingUp, Users, Mail, Settings, Shield, Lightbulb, Megaphone, PenTool, Eye, Link, LineChart, CalendarCheck, Handshake, Brain, Crosshair, BadgeCheck, Layers, ArrowUpRight.

Si tu as besoin d'une icone qui n'est pas dans cette liste, signale-le pour qu'on l'ajoute a `icon-resolver.ts`.

---

#### 2. SEO (3 champs)

```typescript
metaTitle: "...",          // 50-60 caracteres, mot-cle principal en debut, "| Vizion" a la fin
metaDescription: "...",    // 140-160 caracteres, mot-cle principal + benefice + CTA implicite
keywords: ["...", ...],    // 12-15 mots-cles (principal, longue traine, variations, concurrentiels)
```

**Regles SEO :**
- Le mot-cle principal doit apparaitre dans : metaTitle, metaDescription, heroTitle, faqTitle, au moins 2 questions FAQ, processTitle
- Inclure des variations (avec/sans accent, singulier/pluriel, synonymes)
- Les keywords servent aussi au schema JSON-LD genere automatiquement

---

#### 3. HERO (4 champs)

```typescript
heroTitle: "...",           // 8-12 mots. Accroche directe, adresse le lecteur ("Votre...", "Vous...")
heroSubtitle: "...",        // 3-4 lignes (200-280 caracteres). Probleme + solution + methode
heroBadge: "...",           // Court, chiffre + contexte (ex: "+70 entreprises accompagnees")
heroImage: "/images/services/{{SERVICE_SLUG}}/hero.avif",
```

**REGLE CRITIQUE DE LONGUEUR :** Le `heroSubtitle` doit faire entre 200 et 280 caracteres (environ 3-4 lignes affichees). C'est la longueur du modele. Ni plus court, ni plus long.

---

#### 4. NARRATIVE / LE CONSTAT (1 objet complexe)

```typescript
constat: {
  surtitre: "Le probleme",
  title: "...",             // 10-15 mots. Question ou constat qui interpelle
  paragraphs: ["..."],      // 1 paragraphe de 2-3 phrases (150-200 caracteres)
  statements: [
    { headline: "...", description: "..." },   // headline: 6-10 mots, description: 2-3 phrases (150-200 car.)
    { headline: "...", description: "..." },
    { headline: "...", description: "..." },
    { headline: "...", description: "..." },
  ],  // TOUJOURS 4 statements
},
```

**REGLE CRITIQUE :** Exactement 4 statements. Chaque `description` fait 2-3 phrases, environ 150-200 caracteres. Pas plus long.

---

#### 5. SOLUTION STICKY (4 champs)

```typescript
solutionTitle: "Chez Vizion, nous ...",      // Commence par "Chez Vizion", 12-18 mots
solutionSubtitle: "Pas de ... . ...",        // 1 phrase courte de contraste (50-80 car.)
solutionImage: "/images/services/{{SERVICE_SLUG}}/solution.avif",
solutionItems: [
  { title: "Nous ... .", description: "..." },   // title: "Nous" + verbe, 8-12 mots, termine par "."
  { title: "Nous ... .", description: "..." },   // description: 2-3 phrases, 150-200 car.
  { title: "Nous ... .", description: "..." },
  { title: "Nous ... .", description: "..." },
  { title: "Nous ... .", description: "..." },
],  // TOUJOURS 5 items
```

**REGLE CRITIQUE :** Exactement 5 items. Chaque `title` commence par "Nous" et se termine par un point. Chaque `description` fait 2-3 phrases, longueur similaire entre elles.

---

#### 6. SCROLL TITLE — SECTION INTERSTITIELLE ANIMEE (1 objet, OBLIGATOIRE)

```typescript
scrollTitle: {
  hook: "Bref.",                                    // Toujours "Bref."
  phrase: "Chez Vizion, on ...\ndes ... ...",       // 2 lignes avec \n, format "Chez Vizion, on [verbe]\ndes [objet]..."
  adjectives: ["...", "...", "et surtout ..."],     // 3 adjectifs, le dernier commence par "et surtout"
},
```

**IMPORTANT :** Cette section est OBLIGATOIRE pour chaque service. C'est un titre anime au scroll qui resume le service en une phrase. Le dernier adjectif suit le pattern "et surtout [valeur cle]".

**Note :** Le champ `showcaseImages` est optionnel. S'il est omis, le composant affiche juste le titre anime sans galerie d'images. Si le service a des realisations visuelles a montrer (sites, designs, rapports...), inclure 6-9 chemins d'images.

---

#### 7. PROCESS / TIMELINE (3 champs)

```typescript
processTitle: "Un ... avec Vizion : comment ca se passe ?",   // Pattern fixe
processSubtitle: "...",                                        // 1-2 phrases, 100-150 car.
processSteps: [
  {
    icon: "...",            // Icone Lucide (optionnel mais recommande)
    title: "...",           // 3-5 mots
    description: "...",     // 3-4 phrases, 200-280 car.
    duration: "...",        // ex: "1 semaine", "2 a 3 semaines"
    deliverables: ["...", "...", "...", "..."],   // 4-6 livrables
  },
  // ... 4 a 6 etapes
],
```

**REGLE CRITIQUE :** 4 a 6 etapes. Chaque `description` fait 3-4 phrases (200-280 caracteres). Les durees doivent etre realistes pour du B2B.

---

#### 8. QUALITY GUARANTEES (1 objet)

```typescript
qualityGuarantees: {
  surtitre: "Nos engagements",
  sectionTitle: "Pourquoi choisir Vizion\npour ... ?",    // \n pour retour a la ligne
  sectionDescription: "...",                               // 1-2 phrases, 100-150 car.
  cardSurtitre: "Ce que nous garantissons",
  cardTitle: "Des ...\n...",                               // 2 lignes courtes
  cardDescription: "...",                                  // 1-2 phrases, 80-120 car.
  guarantees: [
    { icon: "...", title: "...", description: "..." },     // title: 6-10 mots, description: 1-2 phrases (100-150 car.)
    { icon: "...", title: "...", description: "..." },
    { icon: "...", title: "...", description: "..." },
  ],  // TOUJOURS 3 garanties
  featureCard: {
    surtitre: "Notre vraie difference ?",
    title: "...\n...",                                     // 2 lignes
    description: "...",                                    // 1-2 phrases, 100-150 car.
    linkText: "Discuter de votre ...",
    linkHref: "/contact",
  },
},
```

**REGLE CRITIQUE :** Exactement 3 garanties. La `featureCard` est toujours presente.

---

#### 9. TESTIMONIALS (3 champs)

```typescript
testimonialsTitle: "Ils nous ont confie ...",              // Pattern "Ils nous ont confie [le service]"
testimonialsSubtitle: "Consultez les retours ...",         // 1-2 phrases, 120-180 car.
testimonials: [
  {
    quote: "...",           // 1 phrase courte et percutante (titre du temoignage), 60-100 car.
    detail: "...",          // 2-3 phrases, developpement du temoignage, 150-250 car.
    author: "...",          // Nom ou role generique si pas de vrai client
    role: "...",            // Poste
    company: "Client Vizion",
    photo: "/images/services/{{SERVICE_SLUG}}/testimonials/01.avif",
    rating: 5,
  },
  // ... TOUJOURS 3 temoignages
],
```

**REGLE CRITIQUE :** Exactement 3 temoignages. Le `quote` est court et impactant (une phrase). Le `detail` developpe en 2-3 phrases. Si pas de vrais clients pour ce service, utiliser des profils generiques realistes (Dirigeant B2B, Responsable marketing, Directeur commercial).

---

#### 10. FAQ (2 champs)

```typescript
faqTitle: "Des questions sur ... ?",                      // Pattern fixe
faqs: [
  { question: "...", answer: "..." },                     // answer: 3-5 phrases, 200-300 car.
  // ... 7 FAQs
],
```

**REGLE CRITIQUE :** Exactement 7 FAQs. Les reponses font 3-5 phrases (200-300 caracteres). Inclure obligatoirement :
- Une FAQ sur le prix/budget
- Une FAQ sur les delais
- Une FAQ sur les livrables
- Une FAQ "a qui ca s'adresse"
- Le mot-cle principal doit apparaitre dans au moins 2 questions

---

#### 11. RELATED SERVICES — SERVICES COMPLEMENTAIRES (3 champs)

```typescript
relatedServicesTitle: "Vous voulez aller plus loin ... ?",
relatedServicesSubtitle: "...",                            // 1-2 phrases, 80-120 car.
relatedServices: [
  {
    slug: "{{SLUG_SERVICE_EXISTANT_1}}",
    icon: "{{ICONE_DU_SERVICE_1}}",
    title: "{{TITRE_DU_SERVICE_1}}",
    description: "...",                                    // 2 phrases contextualisees, 120-180 car.
    href: "/services/{{SLUG_SERVICE_EXISTANT_1}}",         // TOUJOURS pointer vers /services/slug
  },
  // ... TOUJOURS 3 services
],
```

**REGLES CRITIQUES :**
1. Exactement 3 services complementaires
2. Les `slug` DOIVENT correspondre a des services existants dans le registry (`src/content/services/index.ts`)
3. Le `href` DOIT pointer vers `/services/{{slug}}` (PAS vers `/contact`)
4. L'`icon` DOIT correspondre a l'icone du service reference
5. Le `title` DOIT correspondre au titre exact du service reference
6. La `description` doit etre contextualisee : expliquer POURQUOI ce service est complementaire au service actuel

**Services actuellement disponibles :**
| Slug | Titre | Icone |
|------|-------|-------|
| `site-web-landing-page` | Site Web et Landing Page | Globe |
| `audit-marketing` | Audit Marketing | Search |
*(mettre a jour cette liste a chaque nouveau service)*

**Si un service n'existe pas encore :** utiliser `href: "/contact"` en attendant sa creation, mais ajouter un commentaire `// TODO: changer vers /services/{{slug}} quand le service sera cree`.

---

#### 12. INLINE CTAs (1 objet)

```typescript
inlineCTAs: {
  afterTestimonials: {
    text: "...",            // 1 question courte, 40-60 car.
    buttonText: "...",      // 3-5 mots
    href: "/contact",
  },
  afterProcess: {
    text: "...",            // 1 question courte, 40-60 car.
    buttonText: "...",      // 3-5 mots
    href: "/contact",
  },
},
```

**REGLE :** Les deux CTAs sont obligatoires. Textes differents entre eux.

---

#### 13. CTA FINAL (4 champs)

```typescript
ctaTitle: "...",            // 6-10 mots, accroche finale
ctaDescription: "...",      // 1-2 phrases courtes, 80-120 car., mention "sans engagement"
ctaButtonText: "...",       // 3-5 mots
ctaButtonLink: "/contact",
```

---

### REGISTRE — MISE A JOUR DU FICHIER INDEX

Apres creation du fichier de contenu, mettre a jour `src/content/services/index.ts` :

1. Ajouter l'import : `import { {{camelCase}} } from "./{{SERVICE_SLUG}}";`
2. Ajouter au tableau `allServices` : `{{camelCase}},`

---

### STRUCTURE D'IMAGES A CREER

Creer le dossier `public/images/services/{{SERVICE_SLUG}}/` avec la structure suivante :

```
public/images/services/{{SERVICE_SLUG}}/
├── hero.avif                    # Image hero (1200x800 recommande)
├── solution.avif                # Image section solution sticky (800x600 recommande)
├── testimonials/
│   ├── 01.avif                  # Photo temoignage 1 (200x200 recommande, carre)
│   ├── 02.avif                  # Photo temoignage 2
│   └── 03.avif                  # Photo temoignage 3
└── screenshots/                 # OPTIONNEL : si scrollTitle.showcaseImages est rempli
    ├── 01.avif                  # Screenshots/visuels pour galerie (6-9 images)
    ├── 02.avif
    └── ...
```

Creer un fichier `IMAGES_A_FOURNIR.md` dans ce dossier qui liste chaque image avec :
- Le chemin exact
- Les dimensions recommandees
- Une description de ce que l'image doit montrer
- Le format (AVIF obligatoire)

---

### CHECKLIST FINALE

Avant de valider, verifier :

- [ ] **Toutes les 13 sections** sont presentes (identite, SEO, hero, constat, solution, scrollTitle, process, quality, testimonials, FAQ, related, inlineCTAs, CTA final)
- [ ] **Longueurs de texte** respectees pour chaque champ (voir les fourchettes de caracteres ci-dessus)
- [ ] **Nombre d'items fixes** respecte : 4 statements, 5 solution items, 3 garanties, 3 temoignages, 7 FAQs, 3 related services, 2 inline CTAs
- [ ] **Aucun tiret cadratin** `—` dans le texte
- [ ] **Mots-cles SEO** presents dans heroTitle, processTitle, faqTitle, et au moins 2 questions FAQ
- [ ] **Related services** pointent vers des slugs existants avec les bons href `/services/...`
- [ ] **Icones** existent toutes dans `icon-resolver.ts`
- [ ] **Structure d'images** creee avec `IMAGES_A_FOURNIR.md`
- [ ] **Index mis a jour** (`src/content/services/index.ts`)
- [ ] **Tonalite** : rigoureuse, experte, accessible, partenariale. Pas d'anglicismes, pas de promesses vagues
- [ ] **Build** : `npm run build` passe sans erreur
