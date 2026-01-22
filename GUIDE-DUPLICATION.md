# Guide de Duplication de Contenu

Ce guide explique comment dupliquer rapidement des pages et du contenu sur le site.

## Principe Général

Toutes les pages de contenu sont des fichiers `.mdx` (Markdown + JSX) dans le dossier `content/`. 
Pour dupliquer une page, il suffit de :
1. Copier le fichier `.mdx` existant
2. Modifier le frontmatter (les métadonnées entre `---`)
3. Adapter le contenu

## 1. Dupliquer une Page de Service

### Étapes

```bash
# Depuis la racine du projet
cp content/pages/services/conseil-strategique.mdx content/pages/services/nouveau-service.mdx
```

### Frontmatter à modifier

```yaml
---
title: "Nom du Nouveau Service"           # Titre SEO
description: "Description du service..."   # Description SEO (155 caractères max)
template: "service"                        # Garder "service"
heroTitle: "Titre affiché en haut"        # Grand titre de la page
heroSubtitle: "Sous-titre explicatif"     # Texte sous le titre
ctaText: "Texte du bouton"                # Ex: "Demander un devis"
ctaLink: "/contact"                       # Lien du bouton CTA
order: 3                                  # Ordre d'affichage (optionnel)
---
```

### Ajouter à la navigation

Modifier le fichier `src/components/Header.tsx` pour ajouter le lien dans le dropdown Services.

---

## 2. Dupliquer une Page Locale (SEO Géographique)

Les pages locales sont des landing pages complètes optimisées pour une ville spécifique. Une seule page par ville suffit (ex: `/local/toulouse`).

### Architecture

```
content/local/
├── _template.mdx          # Template annoté à copier
├── toulouse.mdx           # Page Toulouse (référence)
├── paris.mdx              # À créer
├── lyon.mdx               # À créer
└── bordeaux.mdx           # À créer
```

### Étapes de duplication

#### 1. Copier le template

```bash
# Depuis la racine du projet
cp content/local/_template.mdx content/local/[ville-minuscules].mdx

# Exemples :
cp content/local/_template.mdx content/local/paris.mdx
cp content/local/_template.mdx content/local/lyon.mdx
cp content/local/_template.mdx content/local/bordeaux.mdx
```

#### 2. Personnaliser les métadonnées principales

Ouvrez le fichier et modifiez :

```yaml
title: "Agence Marketing B2B à [Ville] | Stratégie Data-Driven & Croissance Mesurable"
# Exemple Paris: "Agence Marketing B2B à Paris | Stratégie Data-Driven & Croissance Mesurable"

description: "Agence marketing performance à [Ville] spécialisée B2B tech..."
# IMPORTANT : 120-155 caractères max, inclure la ville et les mots-clés principaux

city: "[Ville]"        # Ex: "Paris", "Lyon", "Bordeaux"
region: "[Région]"     # Ex: "Île-de-France", "Auvergne-Rhône-Alpes", "Nouvelle-Aquitaine"
```

#### 3. Adapter le Hero au contexte local

```yaml
heroTitle: "L'agence marketing qui accélère la croissance des entreprises [secteur dominant] à [Ville]"
# Exemples personnalisés par ville :
# Paris: "...entreprises tech et scale-ups à Paris"
# Lyon: "...entreprises biotech et industrie 4.0 à Lyon"  
# Bordeaux: "...entreprises wine-tech et e-commerce à Bordeaux"
# Nantes: "...entreprises digital et créatives à Nantes"

heroSubtitle: "Stratégie data-driven, acquisition performante et automatisation IA pour les entreprises B2B ambitieuses. [Spécificité locale]"
# Exemples :
# Paris: "De Station F aux scale-ups du CAC40"
# Lyon: "Du pôle santé Lyonbiopôle aux industries 4.0"
# Toulouse: "De l'écosystème aérospatial aux scale-ups SaaS"
```

#### 4. Adapter les logos clients aux secteurs locaux

Identifier les 5-6 secteurs dominants de la ville et créer des logos correspondants :

```yaml
clientLogos:
  - id: "secteur-1"
    src: "/logos/[secteur].svg"
    alt: "[Nom du secteur]"
  # Exemples par ville :
  # Paris: fintech, SaaS, e-commerce, medtech, AI, greentech
  # Lyon: biotech, chimie, industrie, logistique, digital-health, foodtech
  # Toulouse: aerospace, defense, deep-tech, IoT, cybersecurity, space-tech
  # Bordeaux: wine-tech, agritech, e-commerce, tourisme-tech, maritime
```

#### 5. Personnaliser les cas clients

Les 3 cas clients doivent refléter des secteurs pertinents pour la ville :

```yaml
featuredCases:
  - id: "case-1"
    metric: "+340% Pipeline"  # Métrique impactante et crédible
    quote: "[Citation spécifique mentionnant le problème résolu et le résultat]"
    author: "[Prénom Nom]"
    role: "[Titre exact]"     # Ex: "VP Revenue", "CMO", "CEO"
    company: "[Nom] ([Secteur local])"  # Ex: "CloudSecure (Cybersecurity SaaS)"
```

**Conseils pour les citations** :
- Être spécifique, pas générique
- Mentionner une métrique concrète dans la citation
- Inclure le contexte du problème résolu
- Longueur idéale : 20-30 mots

Exemple : ✅ "Notre CAC était hors de contrôle à 4800€. Vizion a restructuré notre acquisition avec du SEO technique et de l'ABM ciblé. On est maintenant à 2300€ avec un volume 2x supérieur."

Contre-exemple : ❌ "Vizion nous a beaucoup aidé et nous sommes très contents des résultats."

#### 6. CRITICAL : Personnaliser la FAQ avec le contexte local

La FAQ est cruciale pour le SEO local. Chaque ville doit avoir des réponses adaptées :

**Question 1** - Approche locale :
```yaml
question: "Quelle est votre approche du marketing B2B à [Ville] ?"
answer: "...Nous travaillons principalement avec des entreprises tech de l'écosystème [ville] : [lister 4-5 secteurs clés spécifiques à la ville]."
```

Exemples de secteurs par ville :
- **Paris** : SaaS, fintech, e-commerce, medtech, AI
- **Lyon** : biotech, chimie fine, industrie 4.0, medtech, logistique
- **Toulouse** : aérospatial, deep tech, IoT, cybersécurité, systèmes embarqués
- **Bordeaux** : wine-tech, agritech, e-commerce, maritime, tourisme digital
- **Nantes** : digital, créative tech, industrie verte, mobilité, santé connectée
- **Marseille** : maritime, logistique, tourisme tech, cleantech, commerce international

**Question 5** - Spécificité de l'écosystème local :
```yaml
question: "Quelle est votre spécificité sur l'écosystème [ville] ?"
answer: "[Ville] a un écosystème tech très spécifique : [décrire 2-3 caractéristiques majeures]. Nous connaissons les acteurs clés ([lister 2-3 orga/événements locaux])..."
```

Exemples d'acteurs locaux à mentionner :
- **Paris** : Station F, French Tech Central, Big (ex-Google), événements (Viva Tech)
- **Lyon** : Lyon French Tech, Lyonbiopôle, Tuba, Only Lyon, ADERLY
- **Toulouse** : French Tech Toulouse, IoT Valley, Aerospace Valley, ANITI (IA), Kinéis
- **Bordeaux** : French Tech Bordeaux, Darwin Ecosystem, Bordeaux Technowest
- **Nantes** : Nantes Tech, Atlanpole, Quartier de la Création, La Cantine Numérique

#### 7. Adapter les métadonnées legacy

```yaml
localUSP: "[Ville] concentre un écosystème [caractéristique unique]. [2-3 phrases sur les spécificités économiques de la ville]"
# Exemple Toulouse : "Toulouse concentre un écosystème tech unique en Europe : capitale mondiale de l'aérospatial, hub deep tech en explosion (IA, quantique, cyber), et tissu industriel en transformation digitale."

sectors:
  - "[Secteur dominant 1]"
  - "[Secteur dominant 2]"
  - "[Secteur dominant 3]"
  - "[Secteur en croissance 4]"
  - "[Secteur en croissance 5]"

clientCount: [X]  # Nombre réel de clients dans cette ville
```

### URL générée

`/local/[ville]` → `/local/toulouse`, `/local/paris`, `/local/lyon`

### Checklist avant publication

- [ ] `title` et `description` contiennent le nom de la ville
- [ ] `city` et `region` sont correctement renseignés
- [ ] `heroTitle` et `heroSubtitle` sont personnalisés au contexte local
- [ ] Les `clientLogos` reflètent les secteurs dominants de la ville
- [ ] Les 3 `featuredCases` sont adaptés aux secteurs locaux
- [ ] Les 7-8 questions de `faq` mentionnent spécifiquement la ville et son écosystème
- [ ] La question sur "l'écosystème [ville]" liste les acteurs/événements locaux pertinents
- [ ] `localUSP` et `sectors` sont personnalisés
- [ ] Test en local : `npm run dev` → vérifier `/local/[ville]`
- [ ] Vérifier que tous les placeholders `[Ville]`, `[Région]`, etc. sont remplacés

---

## 3. Dupliquer un Article de Blog

### Étapes

```bash
cp content/blog/transformation-digitale-2024.mdx content/blog/nouvel-article.mdx
```

### Frontmatter à modifier

```yaml
---
title: "Titre de l'article"
description: "Description SEO de l'article..."
date: 2024-03-15                    # Date au format YYYY-MM-DD
author: "Nom de l'auteur"
category: "Stratégie"               # Catégorie existante ou nouvelle
tags: ["tag1", "tag2", "tag3"]      # Tags pour le filtrage
featuredImage: "/images/blog/..."   # Optionnel
draft: false                        # true = non publié
---
```

### Catégories existantes

- `Stratégie` - Articles sur la stratégie digitale
- `Tech` - Articles techniques
- `Innovation` - Nouvelles tendances

Pour ajouter une nouvelle catégorie, créer simplement un article avec cette catégorie.

---

## 4. Dupliquer une Étude de Cas (Cas Client)

### Étapes

```bash
cp content/pages/cas-clients/startup-fintech.mdx content/pages/cas-clients/nouveau-cas.mdx
```

### Frontmatter à modifier

```yaml
---
title: "Nom du Client - Type de projet"
description: "Résumé du cas client..."
template: "case-study"
heroTitle: "Cas Client : Nom"
heroSubtitle: "Sous-titre accrocheur"
featuredImage: "/images/cases/..."    # Optionnel
order: 2
---
```

### Structure recommandée du contenu

```markdown
## Le défi

Description du problème initial du client...

### Objectifs

- Objectif 1
- Objectif 2
- Objectif 3

## Notre solution

### Approche

Description de la méthodologie...

### Technologies utilisées

- Tech 1
- Tech 2

## Résultats

- **+200%** - Métrique 1
- **6 mois** - Métrique 2
- **99.9%** - Métrique 3

> "Témoignage du client..." — Nom, Rôle
```

---

## 5. Checklist de Duplication

Avant de publier une nouvelle page, vérifiez :

- [ ] Le `title` est unique et contient les mots-clés importants
- [ ] La `description` fait entre 120 et 155 caractères
- [ ] Les liens internes sont corrects
- [ ] Les images sont optimisées (WebP, taille < 500Ko)
- [ ] Le slug (nom du fichier) est en minuscules avec des tirets
- [ ] La page s'affiche correctement en local (`npm run dev`)

---

## 6. Commandes Utiles

```bash
# Lancer le serveur de développement
npm run dev

# Vérifier le build
npm run build

# Lister tous les fichiers de contenu
ls -la content/**/*.mdx
```

---

## 7. Bonnes Pratiques SEO

### Titres (title)
- 50-60 caractères max
- Mot-clé principal en début
- Inclure la ville pour les pages locales

### Descriptions
- 120-155 caractères
- Inclure un appel à l'action
- Mentionner le bénéfice principal

### URLs (slugs)
- Minuscules uniquement
- Tirets pour séparer les mots
- Court et descriptif
- Ex: `conseil-strategique.mdx` → `/services/conseil-strategique`

### Contenu
- H1 unique par page
- H2 pour les sections principales
- H3 pour les sous-sections
- Paragraphes de 2-4 phrases max
- Listes à puces pour la lisibilité
