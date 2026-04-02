# Template de reference — Pages Enjeux Vizion

> Ce fichier definit les longueurs, le nombre d'items et les regles editoriales
> pour chaque section d'une page `/enjeux/[slug]`.
> Le modele de reference vivant sera le premier enjeu cree (lancement-produit.ts).

---

## Logique editoriale des pages enjeux

Les pages enjeux ne vendent PAS un service — elles parlent d'une **situation vecue**.
Le visiteur doit se reconnaître dans les 5 premières secondes.
Structure narrative : Reconnaissance → Tension → Resolution → Services → FAQ.

---

## 1. IDENTITE

```typescript
slug: "lancement-produit",     // kebab-case, identique au nom de fichier ET a l'URL
title: "Lancement de produit", // 3-5 mots, identique au label dans le mega menu Header.tsx
icon: "Rocket",                // Nom Lucide, identique a l'icone dans ENJEUX[] du Header.tsx
```

---

## 2. SEO

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `metaTitle` | 50-60 car. | `"[Situation] B2B : [angle] | Vizion"` |
| `metaDescription` | 140-160 car. | Situation + ce que Vizion fait + CTA implicite |
| `keywords` | 10-14 items | Situation, secteur, intention d'achat, variations |

**Exemples de metaTitle :**
- "Lancement produit B2B : positionnement et go-to-market | Vizion"
- "Restructuration commerciale B2B : diagnostic et plan d'action | Vizion"

---

## 3. HERO

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `heroTitle` | 8-14 mots (60-90 car.) | Commence par "Vous lancez..." / "Votre entreprise..." / "Vous traversez..." |
| `heroSubtitle` | 200-260 car. | Situation vecue → ce que Vizion fait dans CE cas precis |
| `heroBadge` | 20-40 car. | "+70 entreprises accompagnees" ou "Depuis 2021" |

**Exemple heroTitle :**
> "Vous lancez un nouveau produit et vous ne savez pas par où commencer."

**Exemple heroSubtitle (241 car.) :**
> "Lancement sans positionnement clair, equipe commerciale non preparee, canaux d'acquisition indefinis : les premieres semaines sont critiques. Chez Vizion, on structure le lancement de A a Z pour que votre produit trouve son marche rapidement."

---

## 4. SIGNAUX DE RECONNAISSANCE (Section 1)

```typescript
recognitionTitle: "Vous etes dans cette situation si...",   // Toujours cette formulation
recognitionSubtitle: "...",                                  // 100-150 car.
signals: [/* 4 items FIXE */]
```

### Chaque signal :

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `icon` | — | Icone Lucide evocatrice du signal |
| `title` | 6-10 mots | Commence par "Vous..." (identification directe) |
| `description` | 80-120 car. | Detail concret, pas de jargon |

**Exemples de titles (lancement produit) :**
- "Vous avez un produit mais pas encore de marche defini."
- "Votre equipe vente ne sait pas comment le pitcher."
- "Vous avez fixe une date de lancement sans plan marketing."
- "Vous ciblez tout le monde, donc personne en particulier."

**Nombre fixe : 4 signaux**

---

## 5. DEFIS CLES (Section 2 — fond sombre)

```typescript
defisSurtitre: "Ce que cette etape implique vraiment",   // Toujours cette formulation
defisTitle: "...",                                        // 8-14 mots, tension reelle
defisSubtitle: "...",                                     // 100-150 car.
defis: [/* 4 items FIXE */]
```

### Chaque defi :

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `icon` | — | Icone Lucide |
| `title` | 6-10 mots | Formulation directe du probleme (sans "vous") |
| `description` | 100-150 car. | Consequence concrete si le probleme n'est pas traite |

**Ton :** matter-of-fact, pas alarmiste. Pas de promesses. Juste la realite.

**Nombre fixe : 4 defis**

---

## 6. APPROCHE VIZION (Section 3 — sticky)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `approcheTitle` | 10-16 mots | Commence par "Chez Vizion, on..." |
| `approcheSubtitle` | 100-150 car. | 1-2 phrases de methode |

### Chaque approcheItem :

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `number` | — | "01", "02", "03", "04" |
| `title` | 6-10 mots | Commence par verbe d'action (Diagnostiquer, Structurer, Deployer...) |
| `description` | 150-200 car. | Ce que Vizion fait concretement dans cette etape |

**Nombre fixe : 4 items**

---

## 7. SERVICES RECOMMANDES (Section 4)

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `servicesTitle` | 8-12 mots | "Les services Vizion pour [la situation]" |
| `servicesSubtitle` | 100-150 car. | Logique de selection des services |

### Chaque service :

| Champ | Regle |
|-------|-------|
| `slug` | Slug exact d'un service existant dans `src/content/services/index.ts` |
| `icon` | Icone identique au service |
| `title` | Titre identique au service |
| `description` | 100-150 car. — POURQUOI ce service est pertinent dans CE contexte precis |
| `href` | `/services/[slug]` ou `/contact` si inexistant + commentaire `// TODO` |

**Nombre : 4 a 6 services**

**Regle de selection :** choisir les services les plus directement utiles dans cette situation.
Ne pas lister TOUS les services — seulement ceux qui repondent a l'enjeu du moment.

---

## 8. FAQ

| Champ | Pattern |
|-------|---------|
| `faqTitle` | `"Des questions sur [la situation en 3-4 mots] ?"` |

### Chaque FAQ :

| Champ | Longueur |
|-------|----------|
| `question` | 6-15 mots, naturelle (comme un vrai client la poserait) |
| `answer` | 200-300 car. — honnete, sans promesse chiffree |

**Nombre fixe : 5 FAQs**

**FAQs obligatoires :**
- "Par ou commencer quand on est dans cette situation ?"
- "Combien de temps dure un accompagnement ?"
- "Est-ce que Vizion peut intervenir seul ou en complement de nos equipes ?"
- 2 autres specifiques a la situation

---

## 9. CTA FINAL

| Champ | Longueur | Pattern |
|-------|----------|---------|
| `ctaTitle` | 6-10 mots | Accroche finale orientee conversation |
| `ctaDescription` | 80-120 car. | Mention "sans engagement", ton rassurant |
| `ctaButtonText` | 3-5 mots | Ex. "Nous contacter", "Prendre un rendez-vous" |
| `ctaButtonLink` | — | Toujours `"/contact"` |

---

## Checklist complete avant validation

- [ ] 9 sections presentes (identite, SEO, hero, signaux, defis, approche, services, FAQ, CTA)
- [ ] 4 signaux (section reconnaissance)
- [ ] 4 defis (section sombre)
- [ ] 4 approcheItems
- [ ] 4-6 services avec slugs valides
- [ ] 5 FAQs dont 3 generiques et 2 specifiques
- [ ] Aucun tiret cadratin —
- [ ] Aucune promesse chiffree non sourcee
- [ ] Aucun service avec href invalide (verifier dans index.ts)
- [ ] metaTitle 50-60 car.
- [ ] metaDescription 140-160 car.
- [ ] heroTitle commence par "Vous..." ou "Votre..."
- [ ] Les 4 signaux commencent par "Vous..."
- [ ] Les 4 approcheItems ont un number "01" a "04"
