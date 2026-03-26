# Template de reference — Longueurs et structure

> Ce fichier est la reference pour les longueurs de texte et le format exact de chaque champ.
> Le modele de reference UNIQUE est `creation-refonte-site-web.ts`. Tout nouveau service doit suivre exactement cette structure.

---

## 1. IDENTITE (5 champs)

```typescript
slug: "mon-service",                  // kebab-case, identique au nom de fichier
title: "Mon Service",                 // Nom affiche dans la nav et breadcrumb
icon: "Search",                       // Nom Lucide existant dans icon-resolver.ts
category: "STRATEGIE MARKETING",      // MAJUSCULES, 1-3 mots
order: 3,                             // Entier, determine l'ordre dans la liste
```

---

## 2. SEO (3 champs)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `metaTitle` | 50-60 car. | `"Mot-cle Principal : Sous-titre \| Vizion"` |
| `metaDescription` | 140-160 car. | Mot-cle + benefice + CTA implicite |
| `keywords` | 12-15 items | Principal, longue traine, variations, synonymes |

---

## 3. HERO (4 champs)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `heroTitle` | 8-12 mots (50-80 car.) | Adresse le lecteur : "Votre...", "Vous..." |
| `heroSubtitle` | 200-280 car. (3-4 lignes) | Probleme + solution + methode Vizion |
| `heroBadge` | 20-40 car. | Chiffre + contexte : "+70 entreprises accompagnees" |
| `heroImage` | — | `/images/services/{{slug}}/hero.avif` |

**Exemple heroSubtitle (262 car.) :**
> Vous envisagez une creation ou une refonte de site Internet ? Chez Vizion, nous ne construisons pas des sites classiques. Nous construisons de veritables actifs strategiques, qui facilitent la vente. Architecture, design, copywriting, referencement : tout est millimetre pour servir durablement votre croissance.

---

## 4. CONSTAT / NARRATIVE (1 objet)

```typescript
constat: {
  surtitre: "Le probleme",                                    // Toujours "Le probleme"
  title: "...",                                                // 10-15 mots, question ou constat
  paragraphs: ["..."],                                         // 1 paragraphe, 150-200 car.
  statements: [/* 4 items */],
}
```

### Chaque statement :

| Champ | Longueur | Exemple modele |
|-------|----------|----------------|
| `headline` | 6-10 mots (40-70 car.) | "Il n'est pas a la hauteur de votre produit" |
| `description` | 2-3 phrases (150-200 car.) | "Vos commerciaux vous le disent, vos clients aussi. Un site date envoie un signal de mefiance. Et vos prospects ne vous rappelleront jamais pour vous dire pourquoi." |

**Nombre fixe : 4 statements**

---

## 5. SOLUTION STICKY (4 champs)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `solutionTitle` | 12-18 mots | Commence par "Chez Vizion, nous..." |
| `solutionSubtitle` | 50-80 car. | Phrase de contraste : "Pas de ... . Des ..." |
| `solutionImage` | — | `/images/services/{{slug}}/solution.avif` |

### Chaque solutionItem :

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `title` | 8-12 mots | Commence par "Nous", termine par "." |
| `description` | 2-3 phrases (150-200 car.) | Explication concrete |

**Nombre fixe : 5 items**

**Exemples de titles modele :**
- "Nous pensons marketing avant design."
- "Nous creons un site qui parle a vos cibles."
- "Nous integrons le SEO des la conception."

---

## 6. SCROLL TITLE — INTERSTITIEL ANIME (1 objet, OBLIGATOIRE)

```typescript
scrollTitle: {
  hook: "Bref.",                                              // Toujours "Bref."
  phrase: "Chez Vizion, on cree\ndes sites internet...",      // 2 lignes avec \n
  adjectives: ["beaux", "performants", "et surtout utiles"],  // 3 adjectifs
  showcaseImages: [                                           // 6-9 screenshots
    "/images/services/{{slug}}/screenshots/01.avif",
    // ...
  ],
},
```

| Champ | Regle |
|-------|-------|
| `hook` | Toujours `"Bref."` |
| `phrase` | 2 lignes separees par `\n`. Format : "Chez Vizion, on [verbe]\ndes [objet]..." |
| `adjectives` | Exactement 3. Le dernier commence par "et surtout" |
| `showcaseImages` | OBLIGATOIRE. 6-9 chemins `/images/services/{{slug}}/screenshots/0X.avif` |

**Exemples adaptes par service :**
- Site web : `"Chez Vizion, on cree\ndes sites internet..."` → `["beaux", "performants", "et surtout utiles"]`
- Audit : `"Chez Vizion, on audite\nvotre marketing..."` → `["en profondeur", "sans complaisance", "et surtout pour agir"]`
- SEO : `"Chez Vizion, on construit\nvotre visibilite..."` → `["technique", "editoriale", "et surtout durable"]`

---

## 7. BENTO CARDS — GRILLE DE SPECIFICITES (1 objet, OBLIGATOIRE)

Le bento est une grille visuelle qui met en avant les specificites techniques et methodologiques du service. Il est OBLIGATOIRE pour chaque service.

```typescript
bentoCards: {
  sectionTitle: "Les specificites de notre agence de ...",       // 8-12 mots
  sectionDescription: "...",                                      // 150-200 car.
  image: {
    src: "/images/services/{{slug}}/bento.avif",
    alt: "Description de l'image",
  },
  technology: {
    title: "Titre sur 2 lignes\navec retour ligne",              // 2 lignes avec \n
    description: "...",                                            // 200-280 car.
    logos: ["Next.js", "React", "WordPress", ...],                // 6-10 noms de technologies/outils
  },
  performance: {
    value: 90,                                                     // Nombre (metrique phare)
    suffix: "+",                                                   // Optionnel : "+", "%", "x"
    label: "Score Google",                                         // 2-3 mots
    description: "...",                                            // 100-150 car.
  },
  noTemplate: {
    title: "...",                                                  // 8-12 mots, avantage differenciant
    description: "...",                                            // 100-150 car.
  },
  widgets: {
    title: "...",                                                  // 8-12 mots
    description: "...",                                            // 100-150 car.
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],         // 5 tags courts
  },
  integrations: {
    title: "...",                                                  // 8-12 mots
    description: "...",                                            // 100-150 car.
    logos: ["HubSpot", "Salesforce", ...],                        // 8-10 noms d'outils
  },
  growth: {
    title: "...",                                                  // 8-12 mots
    description: "...",                                            // 100-150 car.
  },
},
```

### Adaptation par service :

Le bento doit etre adapte au contexte du service. Les 6 cartes (technology, performance, noTemplate, widgets, integrations, growth) doivent refleter les specificites du service, pas etre un copier-coller du modele site-web.

**Exemples d'adaptation :**
- **Site web** : technologies dev, score Google, sur-mesure, widgets custom, integrations CRM, tracking
- **SEO** : outils SEO, trafic organique, strategie sur-mesure, types de contenus, integrations analytics, ROI
- **Audit** : methodes d'analyse, nombre de points audites, diagnostic personnalise, axes d'audit, outils de mesure, suivi post-audit
- **Contenu** : formats de contenu, frequence de publication, editorial sur-mesure, types de ressources, distribution multi-canal, mesure de performance

---

## 8. PROCESS / TIMELINE (3 champs)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `processTitle` | — | `"Un [service] avec Vizion : comment ca se passe ?"` |
| `processSubtitle` | 100-150 car. | 1-2 phrases |

### Chaque processStep :

| Champ | Longueur | Notes |
|-------|----------|-------|
| `icon` | — | Icone Lucide (optionnel mais recommande) |
| `title` | 3-5 mots | Court et clair |
| `description` | 3-4 phrases (200-280 car.) | Detail du travail effectue |
| `duration` | — | Realiste B2B : "1 semaine", "2 a 3 semaines" |
| `deliverables` | 4-6 items | Noms courts de livrables |

**Nombre : 4 a 6 etapes**

**Exemple description modele (272 car.) :**
> Nous commencons par comprendre votre marche, vos cibles et ce qui vous differencie. Vous repartez avec une proposition de valeur claire, un cahier des charges precis, une arborescence validee et les arguments qui feront mouche. Si votre secteur est complexe, nous prevoyons plusieurs sessions.

---

## 9. QUALITY GUARANTEES (1 objet)

```typescript
qualityGuarantees: {
  surtitre: "Nos engagements",                               // Toujours
  sectionTitle: "Pourquoi choisir Vizion\npour ... ?",       // \n pour retour ligne
  sectionDescription: "...",                                  // 100-150 car.
  cardSurtitre: "Ce que nous garantissons",                  // Toujours
  cardTitle: "Des ...\n...",                                  // 2 lignes courtes
  cardDescription: "...",                                     // 80-120 car.
  guarantees: [/* 3 items */],
  featureCard: { /* ... */ },
}
```

### Chaque guarantee :

| Champ | Longueur |
|-------|----------|
| `icon` | Icone Lucide |
| `title` | 6-10 mots |
| `description` | 1-2 phrases (100-150 car.) |

### featureCard :

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `surtitre` | — | `"Notre vraie difference ?"` |
| `title` | 2 lignes avec `\n` | — |
| `description` | 100-150 car. | — |
| `linkText` | 3-5 mots | `"Discuter de votre ..."` |
| `linkHref` | — | `"/contact"` |

**Nombre fixe : 3 garanties + 1 featureCard**

---

## 10. TESTIMONIALS (3 champs)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `testimonialsTitle` | — | `"Ils nous ont confie [le service]"` |
| `testimonialsSubtitle` | 120-180 car. | `"Consultez les retours d'experience..."` |

### Chaque testimonial :

| Champ | Longueur | Notes |
|-------|----------|-------|
| `quote` | 60-100 car. | 1 phrase percutante (titre) |
| `detail` | 150-250 car. | 2-3 phrases de developpement |
| `author` | — | Nom ou profil generique |
| `role` | — | Poste |
| `company` | — | Nom ou "Client Vizion" |
| `photo` | — | `/images/services/{{slug}}/testimonials/0X.avif` |
| `rating` | — | Toujours `5` |

**Nombre fixe : 3 temoignages**

---

## 11. FAQ (2 champs)

| Champ | Pattern |
|-------|---------|
| `faqTitle` | `"Des questions sur [le service] ?"` |

### Chaque FAQ :

| Champ | Longueur |
|-------|----------|
| `question` | 6-15 mots |
| `answer` | 3-5 phrases (200-300 car.) |

**Nombre fixe : 7 FAQs**

**FAQs obligatoires :** prix/budget, delais, livrables, "a qui ca s'adresse" + mot-cle principal dans 2+ questions.

---

## 12. RELATED SERVICES (3 champs)

| Champ | Pattern |
|-------|---------|
| `relatedServicesTitle` | `"Vous voulez aller plus loin ... ?"` |
| `relatedServicesSubtitle` | 80-120 car. |

### Chaque relatedService :

| Champ | Regle |
|-------|-------|
| `slug` | Slug exact d'un service existant |
| `icon` | Icone exacte du service reference |
| `title` | Titre exact du service reference |
| `description` | 120-180 car., contextualise (pourquoi complementaire) |
| `href` | `/services/{{slug}}` ou `/contact` si inexistant + commentaire TODO |

**Nombre fixe : 3 services**

---

## 13. INLINE CTAs (1 objet, 2 emplacements)

```typescript
inlineCTAs: {
  afterTestimonials: { text: "...", buttonText: "...", href: "/contact" },
  afterProcess: { text: "...", buttonText: "...", href: "/contact" },
},
```

| Champ | Longueur |
|-------|----------|
| `text` | 40-60 car., question courte |
| `buttonText` | 3-5 mots |

**Les 2 CTAs sont obligatoires. Textes differents.**

---

## 14. CTA FINAL (4 champs)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `ctaTitle` | 6-10 mots | Accroche finale |
| `ctaDescription` | 80-120 car. | Mention "sans engagement" |
| `ctaButtonText` | 3-5 mots | — |
| `ctaButtonLink` | — | `"/contact"` |
