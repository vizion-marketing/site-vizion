# Site Vitrine + Blog

Site web vitrine avec moteur de blog, optimisé pour le SEO et la performance.

## Stack Technique

- **Framework**: Next.js 14+ (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Contenu**: MDX avec Contentlayer2
- **Animations**: Framer Motion
- **Icônes**: Lucide React

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

## Build Production

```bash
npm run build
npm run start
```

## Structure du Projet

```
├── content/                 # Contenu MDX
│   ├── blog/               # Articles de blog
│   ├── pages/              # Pages vitrine
│   │   ├── services/       # Pages services
│   │   └── cas-clients/    # Études de cas
│   └── local/              # Pages SEO local
│       ├── paris/
│       ├── lyon/
│       └── [ville]/[service].mdx
├── src/
│   ├── app/                # Routes Next.js App Router
│   ├── components/         # Composants React
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── mdx/           # Composants MDX
│   │   └── templates/     # Templates réutilisables
│   └── lib/               # Utilitaires
└── contentlayer.config.ts  # Configuration Contentlayer
```

## Gestion du Contenu

### Ajouter un Article de Blog

1. Créer un fichier `.mdx` dans `content/blog/`
2. Ajouter le frontmatter requis :

```mdx
---
title: "Titre de l'article"
description: "Description pour le SEO"
date: 2024-01-15
author: "Nom de l'auteur"
category: "Stratégie"
tags: ["tag1", "tag2"]
---

Contenu de l'article en Markdown...
```

### Ajouter une Page Service

1. Créer un fichier `.mdx` dans `content/pages/services/`
2. Utiliser le template "service" :

```mdx
---
title: "Nom du Service"
description: "Description du service"
template: "service"
heroTitle: "Titre principal"
heroSubtitle: "Sous-titre"
ctaText: "Texte du bouton"
ctaLink: "/contact"
order: 1
---

Contenu de la page...
```

### Ajouter une Page Locale (SEO)

1. Créer un dossier avec le nom de la ville dans `content/local/`
2. Créer un fichier `.mdx` pour chaque service :

```mdx
---
title: "Service à Ville"
description: "Description SEO locale"
city: "Paris"
service: "Conseil Digital"
region: "Île-de-France"
heroTitle: "Votre partenaire à Paris"
---

Contenu localisé...
```

## Duplication de Contenu

### Dupliquer une Page Service

```bash
# Copier un service existant
cp content/pages/services/conseil-strategique.mdx content/pages/services/nouveau-service.mdx
```

Modifier le frontmatter et le contenu du nouveau fichier.

### Dupliquer une Page Locale

```bash
# Créer un nouveau dossier ville
mkdir content/local/bordeaux

# Copier un template existant
cp content/local/paris/conseil-digital.mdx content/local/bordeaux/conseil-digital.mdx
```

Modifier `city`, `region` et le contenu pour la nouvelle ville.

### Dupliquer une Étude de Cas

```bash
cp content/pages/cas-clients/startup-fintech.mdx content/pages/cas-clients/nouveau-cas.mdx
```

## Design System

### Variables CSS Principales

```css
--color-primary: #1e3a5f;     /* Bleu principal */
--color-accent: #4f8cff;      /* Bleu accent */
--color-bg: #fafbfc;          /* Fond */
--color-text: #1a1d21;        /* Texte */
```

### Classes Utilitaires

- `.heading-display` - Grands titres
- `.heading-section` - Titres de section
- `.text-body` - Texte courant
- `.text-secondary` - Texte secondaire
- `.container-base` - Container standard
- `.section-padding` - Espacement section
- `.card` - Style de carte
- `.btn`, `.btn-primary`, `.btn-secondary` - Boutons
- `.badge` - Badges/tags

## SEO

Le site génère automatiquement :
- Sitemap XML (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Métadonnées Open Graph
- Métadonnées structurées

## Déploiement

Le site est configuré pour un export statique (`output: "export"`).

Pour déployer sur Vercel, Netlify, ou tout hébergement statique :

```bash
npm run build
# Les fichiers sont générés dans le dossier 'out/'
```

## Performance

- Images optimisées avec `next/image`
- CSS critique inline
- Polices optimisées avec `next/font`
- Génération statique (SSG) pour toutes les pages
