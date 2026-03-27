# Template de reference — Page Pilier

> Ce fichier est la reference pour les longueurs de texte et le format exact de chaque champ d'une page pilier.
> Le modele de reference UNIQUE est `credibilite-positionnement.ts` (Product Marketing B2B).

---

## 1. IDENTITE (7 champs)

```typescript
slug: "mon-pilier",                   // kebab-case, identique au nom de fichier
title: "Mon Pilier B2B",              // Nom affiche dans la nav et breadcrumb
icon: "Rocket",                       // Nom Lucide existant
category: "Ma Categorie",             // Nom de la categorie (PascalCase avec espaces)
isPilier: true,                       // OBLIGATOIRE — active CategoryDetailContent
order: 103,                           // 100+ pour les piliers
```

---

## 2. SEO (3 champs)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `metaTitle` | 50-60 car. | `"Mot-cle Principal : sous-titre descriptif \| Vizion"` |
| `metaDescription` | 140-160 car. | Mot-cle + benefice + CTA implicite |
| `keywords` | 8-12 items | Principal, longue traine, variations, synonymes |

---

## 3. HERO (4 champs)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `heroTitle` | 8-14 mots (50-90 car.) | Adresse le lecteur ou formule le benefice central |
| `heroSubtitle` | 200-300 car. (3-5 lignes) | Probleme + ce que la discipline resout + methode Vizion |
| `heroBadge` | 20-40 car. | MAJUSCULES, categorie ou chiffre cle |
| `heroImage` | — | `/images/services/{{slug}}/hero.avif` ou image existante |

**Exemple heroSubtitle (Product Marketing, 262 car.) :**
> Votre produit est solide. Mais vos prospects ne le percoivent pas. Le product marketing traduit votre valeur en messages clairs, structure votre go-to-market et arme vos equipes pour chaque conversation commerciale. Pour que le choix devienne evident.

---

## 4. CONSTAT / NARRATIVE (1 objet)

```typescript
constat: {
  surtitre: "LE [NOM DISCIPLINE]",                          // Majuscules, nom de la discipline
  title: "Le [Discipline] : qu'est-ce que c'est... ?",      // Question ou constat, 10-18 mots
  paragraphs: ["accroche emotionnelle", "definition + transition vers piliers"],  // 2 paragraphes
  statements: [/* 3 items */],
}
```

### Paragraphe 1 — Accroche emotionnelle
- **Longueur** : 200-300 car.
- **Ton** : le lecteur se reconnait dans le probleme
- **Pattern** : "Votre [atout] est [positif]. [Enumeration]. Le probleme ? [constat douloureux]."
- **Exemple** : "Votre produit est bon. Excellent meme. Bien meilleur que celui du concurrent. Le design est leche, les fonctionnalites sont solides, l'equipe technique livre sans relache. Le probleme ? Personne ne semble le voir."

### Paragraphe 2 — Definition + transition
- **Longueur** : 200-300 car.
- **Ton** : explicatif, introduit la discipline comme reponse au probleme
- **Pattern** : "Le [discipline] est ne pour [resoudre ce probleme] : [3 benefices concrets]. Cette discipline repose sur trois piliers :"
- **Termine toujours par** : "Cette discipline repose sur trois piliers :" (les statements en dessous les presentent)

### Chaque statement (3 obligatoires) :

| Champ | Longueur | Regles |
|-------|----------|--------|
| `icon` | — | Icone Lucide |
| `headline` | 6-12 mots | Commence par "Un" ou "Des" + descriptif |
| `description` | 2-3 phrases (150-220 car.) | Voix active avec "Vous" comme sujet, descriptif (PAS de "nous") |

**Exemples headlines :**
- "Un positionnement strategique differenciant"
- "Un discours immediatement comprehensible"
- "Des contenus pedagogiques qui batissent votre autorite"

**Exemples descriptions :**
- "Vous identifiez ce qui vous rend unique, vous le formulez en une proposition de valeur que chaque decideur saisit en 10 secondes, et toute votre equipe porte le meme message."

---

## 5. SOLUTION (3 champs)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `solutionTitle` | 8-15 mots | "Comment Vizion vous accompagne dans votre [discipline] ?" |
| `solutionImage` | — | Image existante d'un service enfant ou `/images/services/{{slug}}/hero.avif` |

### Chaque solutionItem (3-4 items) :

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `title` | 4-8 mots | Nom du volet d'accompagnement |
| `description` | 2-3 phrases (150-220 car.) | Introduit le "nous" : "Nous construisons...", "Nous traduisons...", "Nous structurons..." |

**Exemples :**
```typescript
{
  title: "Positionnement et proposition de valeur",
  description: "Un positionnement clair par persona, une proposition de valeur lisible en 10 secondes. Nous construisons le socle strategique que toute votre equipe utilise pour parler d'une seule voix.",
}
```

---

## 6. PILIER METHODOLOGY (1 objet)

```typescript
pilierMethodology: {
  surtitre: "NOTRE APPROCHE",                                // Toujours
  title: "Comment nous structurons votre [discipline]",      // 6-10 mots
  subtitle: "...",                                            // 150-220 car., mentionne les phases
  steps: [/* 3-4 items */],
}
```

### Chaque step :

| Champ | Longueur | Pattern |
|-------|----------|--------|
| `title` | 3-6 mots | Nom de la phase |
| `description` | 2-4 phrases (150-250 car.) | "Nous [verbe]..." + detail concret + livrable implicite |

**Nombre : 3-4 etapes**

---

## 7. PILIER METRICS (1 objet) — SOURCES OBLIGATOIRES

```typescript
pilierMetrics: {
  surtitre: "POURQUOI LE [DISCIPLINE]",                      // Majuscules
  title: "Ce que le [discipline] change concretement",       // 6-10 mots
  subtitle: "Des chiffres issus d'etudes sectorielles...",   // 100-180 car.
  metrics: [/* 3 items */],
}
```

### Chaque metric :

| Champ | Type | Regles |
|-------|------|--------|
| `value` | number | Chiffre reel, verifie |
| `suffix` | string | "%", "x", "+" |
| `label` | string | 8-15 mots, phrase courte decrivant le chiffre |
| `direction` | "up" ou "down" | Tendance (up = positif croissant, down = probleme decroissant) |
| `context` | string | 1-2 phrases, explication + source + annee. Ex: "Forrester, 2024." |
| `sourceUrl` | string | URL directe vers l'etude ou le communique de presse |

**Nombre fixe : 3 metriques**

**Sources acceptees :** Forrester, Gartner, McKinsey, HubSpot, LinkedIn B2B Institute, Salesforce, Content Marketing Institute, SiriusDecisions, Demand Gen Report, ITSMA

**INTERDIT : inventer des chiffres ou utiliser des sources non verifiables**

---

## 8. PROCESS (vide pour les piliers)

Les piliers n'ont PAS de process timeline. Mais les champs sont obligatoires dans le type :

```typescript
processTitle: "",
processSubtitle: "",
processSteps: [],
```

---

## 9. TESTIMONIALS (3 champs)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `testimonialsTitle` | — | "Ce que nos clients en disent" |
| `testimonialsSubtitle` | 80-150 car. | Contextualise (type de clients) |

### Chaque testimonial :

| Champ | Longueur | Notes |
|-------|----------|-------|
| `quote` | 60-100 car. | 1 phrase percutante, credible, pas de chiffres miracles |
| `detail` | 150-250 car. | 2-3 phrases de developpement, ton naturel |
| `author` | — | Prenom + Nom (generique) |
| `role` | — | Poste |
| `company` | — | Type d'entreprise (pas de nom specifique si fictif) |
| `rating` | — | Toujours `5` |

**Nombre fixe : 3 temoignages**

---

## 10. FAQ (2 champs)

| Champ | Pattern |
|-------|---------|
| `faqTitle` | "Questions frequentes sur le [discipline] B2B" |

### Chaque FAQ :

| Champ | Longueur |
|-------|----------|
| `question` | 5-12 mots, ton naturel |
| `answer` | 3-5 phrases (150-280 car.), honnete, sans promesse chiffree |

**Nombre fixe : 7 FAQs**

**FAQs obligatoires :**
1. Definition de la discipline ("c'est quoi concretement ?")
2. Difference avec une discipline proche
3. Pourquoi commencer par ca
4. Delais
5. Taille d'entreprise ("c'est reserve aux grosses entreprises ?")
6. ROI (reponse honnete, pas de chiffres inventes)
7. Deroulement de l'accompagnement Vizion

---

## 11. PILIER TIMING — Bento Grid (1 objet)

```typescript
pilierTiming: {
  surtitre: "LE BON MOMENT",                                // Toujours
  title: "Quand investir dans le [discipline] ?",           // Question directe
  subtitle: "...",                                            // 120-200 car.
  items: [/* 4-5 items */],
}
```

### Chaque item :

| Champ | Longueur | Pattern |
|-------|----------|--------|
| `icon` | — | Icone Lucide |
| `title` | 8-14 mots | Commence par "Vous..." (le lecteur se reconnait) |
| `description` | 2-3 phrases (120-200 car.) | Decrit la situation et ses consequences |

**Nombre : 4-5 items**

**Layout bento :** 3 cartes en row 1, reste + CTA sombre en row 2. Le CTA sombre est genere automatiquement par le composant.

---

## 12. PILIER TARGETS (1 objet)

```typescript
pilierTargets: {
  surtitre: "A QUI S'ADRESSE LE [DISCIPLINE]",              // Majuscules
  title: "Le [discipline] pour [formule inclusive].",        // 10-18 mots
  subtitle: "...",                                            // 120-200 car.
  highlightWords: ["mots a surligner en accent"],            // 1-3 mots du titre
  items: [/* 4-5 items */],
  featuredIndex: 1,                                          // Index 0-based de la carte accent
}
```

### Chaque item :

| Champ | Longueur | Pattern |
|-------|----------|--------|
| `icon` | — | Icone Lucide |
| `title` | 3-6 mots | Type d'entreprise |
| `description` | 2-3 phrases (120-200 car.) | Pourquoi cette cible est concernee, sans promesse |

**Nombre : 4-5 items**

**Types de cibles recurrents :**
- Startups et scale-ups B2B
- PME et ETI en croissance
- Editeurs SaaS et entreprises tech
- Industriels et fabricants
- Societes de conseil et services B2B

Adapter selon la discipline. Ne pas reprendre systematiquement les 5.

---

## 13. RELATED SERVICES (3 champs)

| Champ | Pattern |
|-------|---------|
| `relatedServicesTitle` | "Les services de ce pilier" |
| `relatedServicesSubtitle` | 80-150 car., mentionne que les services sont activables independamment |

### Chaque relatedService :

| Champ | Regle |
|-------|-------|
| `slug` | Slug exact d'un service existant dans index.ts |
| `icon` | Icone exacte du service reference |
| `title` | Titre exact du service reference |
| `description` | 100-180 car., contextualise dans le pilier (pourquoi ce service fait partie de cette discipline) |
| `href` | `/services/{{slug}}` ou `/contact` si inexistant + commentaire TODO |

**Nombre : 3-5 services**

---

## 14. CTA FINAL (4 champs)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `ctaTitle` | 6-12 mots | Accroche finale liee a la discipline |
| `ctaDescription` | 100-180 car. | Mention "30 minutes", "sans engagement", ton invite |
| `ctaButtonText` | 3-6 mots | Verbe + discipline |
| `ctaButtonLink` | — | `"/contact"` |

---

## CHECKLIST FINALE

Avant de valider le pilier, verifier :

- [ ] `isPilier: true` + `order: 10X`
- [ ] Constat : 2 paragraphes (accroche + definition), 3 statements (voix active, "Un/Des")
- [ ] Solution : 3-4 items avec "nous"
- [ ] Methodology : 3-4 phases
- [ ] Metrics : 3 chiffres avec `sourceUrl` reelles et verifiees
- [ ] Timing : 4-5 items commencant par "Vous..."
- [ ] Targets : 4-5 items + `featuredIndex` + `highlightWords`
- [ ] FAQ : 7 questions, honnetes, sans promesses chiffrees
- [ ] Testimonials : 3 temoignages credibles
- [ ] Related services : 3-5 services avec slugs/href corrects
- [ ] `processTitle: ""`, `processSubtitle: ""`, `processSteps: []`
- [ ] Aucun tiret cadratin `—`
- [ ] Aucune couleur hex hardcodee
- [ ] Mots-cles SEO bien places
- [ ] Index et menu mis a jour
