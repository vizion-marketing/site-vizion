---
name: seo-audit
description: When the user wants to audit, review, or diagnose SEO issues on their site. Also use when the user mentions "SEO audit," "technical SEO," "why am I not ranking," "SEO issues," "on-page SEO," "meta tags review," or "SEO health check." For building pages at scale to target keywords, see programmatic-seo. For adding structured data, see schema-markup.
---

# Audit SEO complet d'une page

Tu vas auditer le SEO de la page **$ARGUMENTS** (URL relative, slug, ou nom de page).

Si aucun argument n'est fourni, demande a l'utilisateur quelle page auditer. Propose la liste des pages disponibles :
- Pages services : lis `src/content/services/index.ts`
- Pages blog : liste via Sanity ou `src/app/blog/`
- Pages statiques : `/`, `/contact`, `/cas-clients`, `/blog`, `/services`

---

## Etape 0 — Identifier la page et son contexte

1. Determine le type de page : **service** (TypeScript), **blog** (Sanity), **client/cas-client** (Sanity), **statique** (homepage, contact)
2. Lis les fichiers sources correspondants :
   - Service → `src/content/services/[slug].ts` + `src/app/services/[slug]/page.tsx`
   - Blog → requete Sanity via `src/lib/sanity/posts.ts` + `src/app/blog/[slug]/page.tsx`
   - Client → `src/lib/sanity/clients.ts` + `src/app/cas-clients/[clientSlug]/page.tsx`
   - Homepage → `src/content/home.ts` + `src/content/b2b.ts` + `src/app/page.tsx`
3. Lis `src/lib/metadata.ts` pour comprendre le helper `createMetadata()`
4. Identifie le **mot-cle principal** de la page (depuis metaTitle, heroTitle, ou demande a l'utilisateur)

---

## Etape 1 — Audit des balises meta et metadonnees

### 1.1 Title tag (metaTitle)

| Critere | Regle | Priorite |
|---------|-------|----------|
| Longueur | 50-60 caracteres (max 60 pour eviter la troncature Google) | CRITIQUE |
| Mot-cle principal | Present, idealement dans les 3 premiers mots | CRITIQUE |
| Branding | Se termine par " \| Vizion" | IMPORTANT |
| Unicite | Aucune autre page du site ne doit avoir le meme title | CRITIQUE |
| Lisibilite | Doit donner envie de cliquer (pas juste un empilement de mots-cles) | IMPORTANT |

### 1.2 Meta description (metaDescription)

| Critere | Regle | Priorite |
|---------|-------|----------|
| Longueur | 140-160 caracteres (Google tronque a ~155) | CRITIQUE |
| Mot-cle principal | Present dans les 80 premiers caracteres | IMPORTANT |
| CTA implicite | Contient un benefice + incitation a cliquer | IMPORTANT |
| Unicite | Pas de duplication avec d'autres pages | CRITIQUE |
| Pas de guillemets doubles | Eviter `"` qui tronquent la description dans les SERP | MOYEN |

### 1.3 URL / Slug

| Critere | Regle | Priorite |
|---------|-------|----------|
| Mot-cle present | Le slug contient le mot-cle principal (en kebab-case) | IMPORTANT |
| Longueur | Max 3-5 mots, court et descriptif | MOYEN |
| Pas de stop words | Eviter les articles (le, la, les, de, du) sauf si necessaire | MOYEN |
| Coherence | Le slug reflète le contenu reel de la page | IMPORTANT |

### 1.4 Canonical

| Critere | Regle | Priorite |
|---------|-------|----------|
| Presence | La page a une balise canonical (via `createMetadata()` → `alternates.canonical`) | CRITIQUE |
| Self-referencing | Le canonical pointe vers la page elle-meme | CRITIQUE |
| URL absolue | Commence par `https://by-vizion.com/` | CRITIQUE |

### 1.5 Robots

| Critere | Regle | Priorite |
|---------|-------|----------|
| Index/Follow | `index: true, follow: true` (sauf pages no-index volontaires) | CRITIQUE |
| max-image-preview | `"large"` pour les rich results | MOYEN |
| max-snippet | `-1` (pas de limite) | MOYEN |

### 1.6 Open Graph & Twitter Cards

| Critere | Regle | Priorite |
|---------|-------|----------|
| og:title | Present, coherent avec le title tag | IMPORTANT |
| og:description | Present, coherent avec la meta description | IMPORTANT |
| og:image | Image 1200x630px minimum, URL absolue | IMPORTANT |
| og:type | "website" (pages statiques) ou "article" (blog) | MOYEN |
| og:locale | "fr_FR" | MOYEN |
| twitter:card | "summary_large_image" | MOYEN |

**Delivrable :** Tableau recapitulatif avec statut (OK / A CORRIGER / MANQUANT) pour chaque critere.

---

## Etape 2 — Audit de la structure de contenu (On-Page)

### 2.1 Hierarchie des titres (Hn)

| Critere | Regle | Priorite |
|---------|-------|----------|
| H1 unique | Une seule balise H1 par page | CRITIQUE |
| Mot-cle dans H1 | Le mot-cle principal apparait dans le H1 (idealement en debut) | CRITIQUE |
| Hierarchie logique | H1 → H2 → H3, pas de saut (H1 → H3 sans H2) | IMPORTANT |
| H2 avec mot-cle | Au moins 2 H2 contiennent le mot-cle ou une variation semantique | IMPORTANT |
| Nombre de H2 | Minimum 3-4 H2 pour structurer le contenu | MOYEN |
| H2 descriptifs | Chaque H2 decrit clairement le contenu de sa section (pas de "En savoir plus") | MOYEN |

**Pour les pages services, verifier :** `heroTitle` (H1), `solutionTitle`, `processTitle`, `qualityGuarantees.sectionTitle`, `bentoCards.sectionTitle`, `faqTitle` (H2).

**Pour les articles blog :** Extraire la hierarchie Hn du body Portable Text.

### 2.2 Contenu textuel

| Critere | Regle | Priorite |
|---------|-------|----------|
| Longueur minimale | Services : 1500+ mots. Blog : 1200+ mots. Landing : 800+ mots | IMPORTANT |
| Mot-cle dans les 100 premiers mots | Le mot-cle apparait dans le premier paragraphe (heroSubtitle ou intro) | CRITIQUE |
| Densite mot-cle | 1-2% du contenu total (pas de keyword stuffing) | IMPORTANT |
| Contenu duplique | Aucun paragraphe copie-colle depuis une autre page du site | CRITIQUE |
| Listes a puces/numerotees | Au moins 1-2 listes pour la scannabilite (et featured snippets) | MOYEN |
| Paragraphes courts | Max 3-4 phrases par paragraphe (lisibilite mobile) | MOYEN |

### 2.3 Images

| Critere | Regle | Priorite |
|---------|-------|----------|
| Alt text | Toutes les images ont un `alt` descriptif et unique | CRITIQUE |
| Alt avec mot-cle | Au moins 1-2 images ont le mot-cle dans le alt (naturellement) | IMPORTANT |
| Format optimise | AVIF > WebP > PNG (pas de JPEG non compresse) | IMPORTANT |
| Dimensions declarees | `width` et `height` specifies (evite le CLS) | IMPORTANT |
| Lazy loading | Images below-the-fold en lazy loading (Next.js Image le fait par defaut) | MOYEN |
| Taille fichier | < 200 Ko par image idealement | MOYEN |

---

## Etape 3 — Audit du champ semantique

### 3.1 Analyse du champ semantique actuel

A partir du mot-cle principal, genere le **champ semantique attendu** :

1. **Synonymes directs** : 5-8 termes equivalents au mot-cle
2. **Termes co-occurrents** : 10-15 mots qui apparaissent systematiquement dans les pages bien classees sur ce mot-cle (ex: pour "positionnement marketing" → marche cible, proposition de valeur, differenciation, concurrents, matrice, audit, perception, message cle)
3. **Entites nommees attendues** : concepts, methodes, outils, frameworks lies au sujet
4. **Questions associees** (People Also Ask) : 5-8 questions que les utilisateurs posent sur ce sujet
5. **LSI keywords** (Latent Semantic Indexing) : termes connexes qui enrichissent le contexte semantique

### 3.2 Score de couverture semantique

Parcours tout le contenu textuel de la page et calcule :

| Metrique | Calcul | Seuil acceptable |
|----------|--------|-----------------|
| **Synonymes couverts** | Nb synonymes presents / Nb synonymes attendus | >= 60% |
| **Co-occurrents couverts** | Nb co-occurrents presents / Nb co-occurrents attendus | >= 50% |
| **Entites couvertes** | Nb entites presentes / Nb entites attendues | >= 40% |
| **Questions couvertes** (FAQ) | Nb questions PAA traitees / Nb questions PAA attendues | >= 50% |
| **Score global** | Moyenne ponderee (synonymes 30%, co-occurrents 35%, entites 15%, questions 20%) | >= 55% |

### 3.3 Delivrable

Presente un tableau en 3 colonnes :

```
| Terme attendu | Present ? | Ou l'integrer naturellement |
|---------------|-----------|----------------------------|
| proposition de valeur | Non | heroSubtitle ou solutionItems |
| differenciation | Oui (constat statement 2) | — |
| ...           | ...       | ...                        |
```

**Regle absolue :** Ne jamais proposer d'inserer un terme de maniere forcee. Le champ semantique doit enrichir le contenu, pas le surcharger. Si un terme ne s'integre pas naturellement, le mentionner comme "optionnel" dans le rapport.

### 3.4 Analyse TF-IDF (Term Frequency - Inverse Document Frequency)

Pour aller au-dela du simple comptage de mots-cles, evalue la **pertinence relative** des termes :

1. **Termes sur-representes** : mots qui apparaissent trop souvent par rapport au reste du site (risque de keyword stuffing)
2. **Termes sous-representes** : mots attendus par Google pour ce sujet mais quasi absents de la page
3. **Termes discriminants** : mots qui distinguent cette page des autres pages du site (doivent etre lies au mot-cle cible)

**Methode pratique :**
- Extrais tout le texte visible de la page (H1, H2, paragraphes, FAQ, alt, meta)
- Compare la frequence des termes cles avec les autres pages services du site
- Identifie les termes qui devraient etre plus presents pour renforcer la topicalite

### 3.5 Entites Google (Knowledge Graph)

Identifie les **entites semantiques** que Google associe au sujet :

| Type d'entite | Exemples | Comment les integrer |
|---------------|----------|---------------------|
| **Concepts** | Methodologies, frameworks, modeles (ex: SWOT, Value Proposition Canvas) | Mentionner dans le process ou les FAQ |
| **Outils** | Logiciels, plateformes liees au sujet (ex: HubSpot, Salesforce pour le CRM) | Section bento "integrations" ou FAQ |
| **Personnes/Organisations** | Experts reconnus, entreprises de reference dans le domaine | Temoignages, etudes de cas |
| **Metriques** | KPIs standard du domaine (ex: CAC, LTV, taux de conversion) | Section metrics, process, guarantees |

L'objectif est que Google comprenne que la page traite du sujet de maniere **exhaustive et experte**, pas juste qu'elle contient le mot-cle.

### 3.6 Content Gap (analyse des lacunes)

Compare le contenu de la page avec ce que les **top 3-5 resultats Google** couvrent typiquement pour le mot-cle cible :

1. **Sous-sujets manquants** : aspects du sujet traites par les concurrents mais absents de notre page
2. **Angles differenciants** : aspects que NOUS couvrons et pas les concurrents (avantage a conserver)
3. **Questions non traitees** : interrogations des utilisateurs (People Also Ask) sans reponse sur la page
4. **Formats manquants** : les concurrents ont des tableaux comparatifs, des calculateurs, des schemas ? Evaluer si pertinent

**Delivrable :** Liste des lacunes avec recommandation (ajouter / ignorer / differencier).

### 3.7 Score E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

Evalue les signaux de confiance de la page selon les criteres Google :

| Signal E-E-A-T | Verification | Comment l'ameliorer |
|-----------------|-------------|---------------------|
| **Experience** | La page montre une experience concrete (cas clients, chiffres reels, screenshots) | Ajouter des exemples concrets, metrics reelles |
| **Expertise** | L'auteur/l'entreprise est identifie comme expert (schema Person, credentials) | Schema Author, "A propos" visible, certifications |
| **Authoritativeness** | Liens entrants, citations, temoignages clients verifiables | Temoignages avec nom/entreprise, logos clients |
| **Trustworthiness** | Mentions legales, HTTPS, politique de confidentialite, coherence des infos | Verifier les liens footer, schema Organization |

**Pour Vizion specifiquement :**
- Lucas Gonzalez (Top 300 LinkedIn France) est un signal d'autorite fort → le mentionner si pertinent
- +70 clients accompagnes → signal de confiance
- Temoignages avec rating → schema Review/AggregateRating

---

## Etape 4 — Audit du maillage interne

### 4.1 Inventaire des liens internes

Lis le contenu de la page et identifie TOUS les liens internes :

| Depuis | Vers (URL) | Ancre | Type |
|--------|-----------|-------|------|
| Section hero | /contact | "Contactez-nous" | CTA |
| FAQ reponse 3 | /services/seo-b2b | "notre offre SEO" | Contextuel |
| Related services | /services/... | Nom du service | Navigation |

### 4.2 Analyse de la qualite du maillage

| Critere | Regle | Priorite |
|---------|-------|----------|
| **Nombre de liens internes** | Minimum 3-5 liens contextuels (hors navigation/footer) | CRITIQUE |
| **Liens vers pages strategiques** | La page lie vers au moins 1-2 pages piliers du site | IMPORTANT |
| **Liens depuis des pages strategiques** | Verifier que des pages a forte autorite lient vers cette page | IMPORTANT |
| **Profondeur de clic** | La page est accessible en max 3 clics depuis la homepage | CRITIQUE |
| **Orphan page** | La page est liee depuis au moins 2-3 autres pages (hors sitemap/nav) | CRITIQUE |
| **Distribution du jus** | Pas de page qui concentre tous les liens internes au detriment des autres | MOYEN |
| **Liens brises** | Aucun lien interne vers une page 404 ou inexistante | CRITIQUE |

### 4.3 Audit des pages liantes (incoming)

Pour evaluer l'autorite interne de la page, recherche TOUS les fichiers du site qui lient vers cette page :

1. Chercher le slug/href dans tous les fichiers `.ts`, `.tsx` du projet
2. Lister chaque lien entrant avec son ancre et son contexte
3. Evaluer : la page est-elle suffisamment maillée par rapport a son importance strategique ?

### 4.4 Opportunites de maillage manquantes

Identifie les liens qui DEVRAIENT exister mais n'existent pas :

1. **Pages thematiquement proches** : autres services de la meme categorie, articles blog sur le meme sujet
2. **Pages piliers ↔ sous-pages** : un pilier doit lier vers ses sous-services, et inversement
3. **Articles blog ↔ pages services** : un article sur le positionnement devrait lier vers `/services/positionnement-marketing`
4. **Cas clients ↔ services** : un cas client devrait lier vers le service utilise
5. **FAQ ↔ contenu approfondi** : une reponse FAQ peut lier vers un article qui developpe le sujet

**Pattern de recherche :**
- Lis `src/content/services/index.ts` pour connaitre tous les services et leurs categories
- Identifie les services de la meme categorie que la page auditee
- Cherche dans les articles blog les tags/categories qui correspondent
- Cherche dans les cas clients les secteurs/services qui correspondent

---

## Etape 5 — Audit des ancres de liens

### 5.1 Qualite des textes d'ancre

| Critere | Regle | Priorite |
|---------|-------|----------|
| **Ancres descriptives** | Jamais de "cliquez ici", "en savoir plus", "lire la suite" comme seule ancre | CRITIQUE |
| **Ancre = mot-cle cible** | L'ancre du lien contient le mot-cle de la page de destination (ou une variation) | IMPORTANT |
| **Variete des ancres** | Pas toujours la meme ancre pour la meme destination (varier exact match, partiel, marque) | IMPORTANT |
| **Longueur** | 2-6 mots idealement (pas une phrase entiere) | MOYEN |
| **Contexte** | L'ancre est entouree de texte pertinent qui renforce le signal semantique | MOYEN |
| **Pas de sur-optimisation** | Eviter de repeter l'ancre exact-match plus de 2-3 fois vers la meme page | IMPORTANT |

### 5.2 Typologie des ancres (ratio sain)

Pour les liens entrants vers la page auditee, evaluer la distribution :

| Type d'ancre | Description | Ratio ideal |
|--------------|-------------|-------------|
| **Exact match** | Ancre = mot-cle principal de la page cible | 20-30% |
| **Partial match** | Ancre contient le mot-cle + mots supplementaires | 30-40% |
| **Marque** | "Vizion", "notre equipe", "nos experts" | 10-15% |
| **Generique** | "decouvrir", "en savoir plus" (a minimiser) | < 10% |
| **URL nue** | L'URL elle-meme comme ancre | < 5% |

### 5.3 Delivrable

Tableau de chaque lien avec evaluation :

```
| Ancre actuelle | Page cible | Evaluation | Ancre suggeree |
|----------------|-----------|------------|----------------|
| "en savoir plus" | /services/seo-b2b | GENERIQUE — a remplacer | "strategie SEO B2B" |
| "positionnement" | /services/positionnement | EXACT MATCH — OK | — |
```

---

## Etape 6 — Audit des donnees structurees (Schema.org / JSON-LD)

### 6.1 Schemas attendus par type de page

| Type de page | Schemas requis | Schemas recommandes |
|-------------|----------------|---------------------|
| **Service** | WebPage, Service, BreadcrumbList | FAQPage, AggregateRating, Review |
| **Blog** | BlogPosting, BreadcrumbList | FAQPage, Person (author), HowTo |
| **Client** | WebPage, BreadcrumbList | Organization, Review |
| **Cas client** | WebPage, BreadcrumbList | CaseStudy (custom), Review |
| **Homepage** | Organization, WebPage | FAQPage, BreadcrumbList, LocalBusiness |

### 6.2 Verification de chaque schema

Pour chaque schema present, verifier :

| Critere | Regle | Priorite |
|---------|-------|----------|
| **@context** | `"https://schema.org"` | CRITIQUE |
| **@type** | Correct pour le contenu | CRITIQUE |
| **Champs requis** | Tous les champs obligatoires du type sont remplis | CRITIQUE |
| **URLs absolues** | Toutes les URLs commencent par `https://` | IMPORTANT |
| **Coherence** | Les donnees du schema correspondent au contenu visible | CRITIQUE |
| **Pas de schema vide** | Aucun champ avec valeur vide ou placeholder | IMPORTANT |
| **BreadcrumbList** | Position indices corrects (1, 2, 3...), URLs valides | IMPORTANT |
| **FAQPage** | Questions/reponses correspondent aux FAQ visibles | IMPORTANT |
| **Rating** | Si present, entre 1 et 5, reviewCount > 0 | IMPORTANT |

### 6.3 Schemas manquants

Identifier les schemas qui devraient etre ajoutes pour enrichir les resultats de recherche (featured snippets, rich results).

---

## Etape 7 — Audit technique rapide

### 7.1 Performance & Core Web Vitals (verifications code)

| Critere | Verification | Priorite |
|---------|-------------|----------|
| **Images next/image** | Toutes les images utilisent `<Image>` de Next.js | IMPORTANT |
| **Fonts preload** | Les fonts DM Sans sont preloadees dans le layout | MOYEN |
| **Bundle size** | Pas d'import lourd inutile ("use client" minimal) | MOYEN |
| **Lazy components** | Sections below-the-fold en dynamic import si lourdes | MOYEN |

### 7.2 Presence dans le sitemap

| Critere | Regle | Priorite |
|---------|-------|----------|
| **Page dans sitemap.ts** | La page apparait dans `src/app/sitemap.ts` | CRITIQUE |
| **Priority correcte** | Homepage 1.0, Services/Blog 0.7, Cas clients 0.6 | MOYEN |
| **lastModified** | Date de derniere modification coherente | MOYEN |

### 7.3 Erreurs courantes

- [ ] Pas de contenu duplique entre pages
- [ ] Pas de redirect chains (A → B → C)
- [ ] Pas de liens nofollow internes inutiles
- [ ] Pas de contenu cache aux moteurs (CSS display:none sur du contenu indexable)

---

## Etape 8 — Audit de la topical authority (autorite thematique)

### 8.1 Cluster de contenu

Evalue si la page s'inscrit dans un **cluster thematique** coherent :

| Critere | Regle | Priorite |
|---------|-------|----------|
| **Page pilier identifiee** | La page fait partie d'un cluster avec une page pilier (isPilier=true) | IMPORTANT |
| **Liens pilier ↔ sous-pages** | La page pilier lie vers cette page ET inversement | CRITIQUE |
| **Couverture du cluster** | Le cluster couvre suffisamment de sous-sujets (min 3-5 pages liees) | IMPORTANT |
| **Coherence semantique** | Toutes les pages du cluster partagent le meme univers semantique | IMPORTANT |

### 8.2 Mapping du cluster

Pour la page auditee, cartographie son cluster :

```
Page Pilier : /services/[categorie-pilier]
  ├── Page auditee : /services/[slug]
  ├── Page soeur 1 : /services/[autre-slug]
  ├── Page soeur 2 : /services/[autre-slug]
  ├── Articles blog lies : /blog/[slug-1], /blog/[slug-2]
  └── Cas clients lies : /cas-clients/[client]/[case]
```

Verifier :
1. Chaque noeud du cluster a-t-il des liens bidirectionnels avec le pilier ?
2. Les pages soeurs se lient-elles entre elles ?
3. Les articles blog renforcent-ils les pages services via des liens contextuels ?
4. Le contenu de chaque page est-il unique ou y a-t-il de la cannibalisation ?

### 8.3 Cannibalisation de mots-cles

Verifie qu'aucune autre page du site ne cible le meme mot-cle principal :

1. Cherche le mot-cle principal dans les `metaTitle`, `heroTitle`, `keywords[]` de TOUTES les pages services
2. Cherche dans les titres et descriptions des articles blog
3. Si cannibalisation detectee : recommander de differencier les angles ou de fusionner les pages

**Delivrable :** Schema du cluster + alertes de cannibalisation.

---

## Etape 9 — Analyse SERP et intent matching

### 9.1 Analyse de l'intent de recherche

Pour le mot-cle principal, determine le **type d'intent dominant** sur Google :

| Intent | Indicateurs SERP | Format de page attendu |
|--------|-----------------|----------------------|
| **Transactionnel** | Annonces Google Ads, fiches produit, pages prix | Page service avec CTA forts, temoignages, pricing |
| **Informationnel** | Featured snippets, PAA, articles longs, Wikipedia | Article blog long, guide, FAQ riche |
| **Navigationnel** | Site officiel, pages marque | Page d'accueil ou page a propos |
| **Commercial** | Comparatifs, "meilleur X", avis, listes | Page avec tableaux comparatifs, avantages/inconvenients |

### 9.2 Adequation format/intent

Verifie que le **format de la page correspond a l'intent SERP** :

| Question | Impact |
|----------|--------|
| L'intent est informationnel mais on sert une page service courte ? | La page ne rankera probablement pas → ajouter du contenu educatif |
| L'intent est transactionnel mais la page n'a pas de CTA visible ? | Opportunite de conversion manquee |
| Les top resultats sont tous des listes/comparatifs et on sert un texte narratif ? | Mismatch de format → adapter la structure |
| Google affiche des featured snippets (definitions, listes, tableaux) ? | Structurer le contenu pour capter ces positions 0 |

### 9.3 Featured Snippet opportunities

Identifie si la page peut capter un featured snippet :

| Type de snippet | Comment l'optimiser |
|-----------------|---------------------|
| **Paragraphe** (definition) | Repondre en 40-60 mots juste apres un H2 contenant la question |
| **Liste** (etapes, points) | Utiliser des H3 numerotes ou des listes HTML sous un H2 cible |
| **Tableau** | Structurer les comparaisons/metriques dans des `<table>` HTML |
| **FAQ** | Schema FAQPage + reponses concises (2-3 phrases) puis developpement |

### 9.4 SERP features actives

Lister les fonctionnalites SERP visibles pour le mot-cle (a verifier manuellement ou via Search Console) :

- [ ] Featured snippet (position 0)
- [ ] People Also Ask (PAA)
- [ ] Knowledge Panel
- [ ] Images pack
- [ ] Video carousel
- [ ] Local pack (Google Maps)
- [ ] Sitelinks
- [ ] FAQ rich result

Pour chaque feature active, indiquer si la page est optimisee pour la capter.

---

## Etape 10 — Rapport final et recommandations

### 10.1 Score global

Attribue un score sur 100 a chaque axe :

| Axe | Poids | Score /100 |
|-----|-------|-----------|
| **Meta & Technique** (title, description, canonical, robots, OG, sitemap) | 15% | ? |
| **Contenu & Structure** (Hn, longueur, images, lisibilite) | 20% | ? |
| **Champ semantique** (TF-IDF, co-occurrents, entites, content gap) | 15% | ? |
| **Maillage interne** (nb liens, pages liantes, orphan, profondeur) | 15% | ? |
| **Ancres** (qualite, variete, descriptivite) | 5% | ? |
| **Donnees structurees** (schemas presents, corrects, complets) | 5% | ? |
| **Topical Authority** (cluster, cannibalisation, couverture thematique) | 10% | ? |
| **Intent & SERP** (adequation format, featured snippets, SERP features) | 10% | ? |
| **E-E-A-T** (experience, expertise, autorite, confiance) | 5% | ? |
| **SCORE GLOBAL** | 100% | **?/100** |

### 10.2 Recommandations priorisees

Classe chaque recommandation par impact et effort :

```
## Corrections critiques (a faire immediatement)
1. [CRITIQUE] Le H1 ne contient pas le mot-cle principal → Reformuler heroTitle
2. [CRITIQUE] Aucun lien interne contextuel → Ajouter 3 liens dans le contenu

## Ameliorations importantes (a planifier)
3. [IMPORTANT] Champ semantique faible (35%) → Enrichir heroSubtitle et solutionItems
4. [IMPORTANT] Ancres generiques sur 60% des liens → Réécrire les ancres

## Quick wins (faible effort, impact positif)
5. [QUICK WIN] metaDescription trop courte (120 car.) → Allonger a 155 car.
6. [QUICK WIN] Alt text manquant sur 2 images → Ajouter des alt descriptifs

## Nice to have (optimisations secondaires)
7. [OPTIONNEL] Ajouter un schema HowTo pour le process en 5 etapes
```

### 10.3 Presentation

Presente le rapport complet a l'utilisateur AVANT de modifier quoi que ce soit. Attends sa validation et ses priorites avant d'appliquer des corrections.

---

## Etape 11 — Application des corrections (sur validation)

Une fois les corrections validees par l'utilisateur :

1. Applique les modifications par ordre de priorite
2. Respecte les regles du CLAUDE.md :
   - **Tiret cadratin `—` INTERDIT** dans tout le contenu
   - Tonalite : rigoureuse, experte, accessible, partenariale
   - Le copywriting prime sur le SEO (voir seo-optimize skill, section 3.0)
   - Utiliser les tokens CSS, pas les couleurs hardcodees
3. Verifie le build : `npm run build`
4. Presente un diff resume des changements

### Checklist finale

**Meta & Technique :**
- [ ] metaTitle optimise (50-60 car, mot-cle en debut, "| Vizion")
- [ ] metaDescription optimisee (140-160 car, mot-cle present, CTA implicite)
- [ ] Canonical self-referencing en URL absolue
- [ ] robots index/follow
- [ ] Open Graph et Twitter Cards complets (image 1200x630)
- [ ] Page presente dans sitemap.ts

**Contenu & Structure :**
- [ ] H1 unique contenant le mot-cle principal
- [ ] 2+ H2 contiennent le mot-cle ou variation semantique
- [ ] Hierarchie Hn logique (pas de saut)
- [ ] Mot-cle dans les 100 premiers mots
- [ ] Longueur suffisante (services 1500+, blog 1200+)
- [ ] Alt text descriptif sur toutes les images

**Champ semantique :**
- [ ] Score de couverture semantique >= 55%
- [ ] Synonymes et co-occurrents integres naturellement
- [ ] Entites Google pertinentes mentionnees
- [ ] Pas de keyword stuffing (densite 1-2%)

**Maillage interne & Ancres :**
- [ ] 3+ liens internes contextuels (hors nav/footer)
- [ ] Liens bidirectionnels avec la page pilier
- [ ] Ancres descriptives (pas de "cliquez ici", "en savoir plus")
- [ ] Distribution saine des types d'ancres
- [ ] Pas de page orpheline
- [ ] Pas de lien interne brise

**Donnees structurees :**
- [ ] Schemas JSON-LD requis presents et valides
- [ ] BreadcrumbList avec indices corrects
- [ ] FAQPage coherent avec les FAQ visibles
- [ ] Pas de champ vide ou placeholder

**Topical Authority :**
- [ ] Page integree dans un cluster thematique
- [ ] Pas de cannibalisation de mot-cle avec une autre page
- [ ] Articles blog et cas clients lies au service

**Intent & SERP :**
- [ ] Format de page coherent avec l'intent de recherche
- [ ] Contenu structure pour capter les featured snippets pertinents
- [ ] FAQ optimisees pour les People Also Ask

**E-E-A-T :**
- [ ] Signaux d'experience (cas concrets, chiffres, screenshots)
- [ ] Auteur/entreprise identifie (schema, mentions)
- [ ] Temoignages avec rating schema

**Conformite CLAUDE.md :**
- [ ] Aucun tiret cadratin
- [ ] Tonalite respectee
- [ ] Build OK
