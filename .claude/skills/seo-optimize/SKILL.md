---
name: seo-optimize
description: Optimiser le SEO d'une page service a partir d'un mot-cle racine. Utiliser quand on veut ameliorer le referencement d'une page existante.
---

# Optimiser le SEO d'une page service

Tu vas optimiser le SEO de la page service correspondant a **$ARGUMENTS** (mot-cle racine).

## Etape 0 — Identifier la page cible

1. Lis `src/content/services/index.ts` pour lister les services existants
2. Identifie le fichier service le plus pertinent pour le mot-cle racine fourni
3. Si aucun service ne correspond, demande a l'utilisateur de preciser

## Etape 1 — Recherche de mots-cles

A partir du mot-cle racine `$ARGUMENTS`, genere un plan semantique complet :

### 1.1 Clustering de mots-cles

Organise les mots-cles en 4 categories :

| Categorie | Description | Exemples |
|-----------|-------------|----------|
| **Transactionnel** | Intent d'achat, pret a convertir | "agence [service]", "prestataire [service]", "devis [service]" |
| **Informationnel** | Questions, definitions, guides | "qu'est-ce que [service]", "comment [service]", "pourquoi [service]" |
| **Comparatif** | Alternatives, vs, meilleur | "[service] vs [alternative]", "meilleur [service]", "comparatif [service]" |
| **Longue traine** | Requetes specifiques B2B | "[service] pour [secteur]", "[service] [ville]", "[service] PME" |

### 1.2 Delivrable

Genere une liste de **20-30 mots-cles** organises par categorie avec :
- Volume de recherche estime (faible/moyen/fort)
- Difficulte estimee (faible/moyenne/forte)
- Intent (transactionnel/informationnel/comparatif)
- Priorite (P1/P2/P3)

Presente le resultat dans un tableau markdown AVANT de modifier quoi que ce soit. Attends la validation de l'utilisateur.

## Etape 2 — Audit SEO de la page actuelle

Lis le fichier service et analyse :

### 2.1 Champs SEO directs
- `metaTitle` : mot-cle principal present ? 50-60 car ? "| Vizion" a la fin ?
- `metaDescription` : mot-cle present ? 140-160 car ? CTA implicite ?
- `keywords[]` : 12-15 items ? couvre les 4 categories ? pas de doublons ?

### 2.2 Placement obligatoire du mot-cle (signaux on-page critiques)

Le mot-cle racine DOIT apparaitre naturellement dans ces zones a fort impact SEO :

| Zone | Champ(s) | Regle |
|------|----------|-------|
| **H1** | `heroTitle` | Mot-cle present, idealement en debut de titre. Format type : "Mot-cle : benefice/promesse" |
| **2 H2 minimum** | `solutionTitle`, `processTitle`, `qualityGuarantees.sectionTitle`, `bentoCards.sectionTitle` | Choisir les 2 H2 ou le mot-cle s'insere le plus naturellement (souvent un seul mot a ajouter) |
| **100 premiers mots** | `heroSubtitle` | Le mot-cle doit apparaitre dans le heroSubtitle, qui constitue les premiers mots visibles apres le H1. L'integrer dans la 1ere ou 2e phrase. |
| **Meta** | `metaTitle`, `metaDescription` | Voir section 3.2 |
| **FAQ** | `faqTitle`, `faqs[].question` | Mot-cle dans le faqTitle + 2-3 questions |

### 2.3 Densite semantique dans le reste du contenu
Pour chaque champ textuel, verifie la presence naturelle de variations du mot-cle :
- `constat.title` et `constat.statements[].headline`
- `solutionItems[].title`
- `ctaTitle`

### 2.4 FAQ SEO
Verifie que les 7 FAQs couvrent les questions strategiques :
- [ ] Question sur le prix/budget (requete transactionnelle)
- [ ] Question sur les delais
- [ ] Question "a qui s'adresse" (segmentation)
- [ ] Question sur les livrables
- [ ] 2+ questions contenant le mot-cle principal
- [ ] Au moins 1 question informationnelle ("qu'est-ce que", "quelle difference")
- [ ] Au moins 1 question comparative ou longue traine

### 2.5 Delivrable

Presente un rapport d'audit sous forme de checklist avec :
- Ce qui est OK
- Ce qui doit etre ameliore (avec la correction proposee)

Attends la validation de l'utilisateur avant de modifier.

## Etape 3 — Optimisation

Applique les corrections validees en modifiant le fichier service.

### 3.0 PRINCIPE FONDAMENTAL — Le copywriting prime sur le SEO

> **Le SEO est un levier, pas un objectif.** L'objectif est de convaincre un decideur B2B d'agir.
> Si une optimisation SEO degrade la qualite du texte, la fluidite de lecture, ou la force de l'argumentaire : NE PAS la faire.
> Un texte qui convertit vaut toujours mieux qu'un texte qui ranke mais ne convainc personne.

**Test a appliquer avant chaque modification :**
1. Lis la phrase modifiee a voix haute. Est-ce qu'elle sonne naturelle ?
2. Un dirigeant B2B lirait-il cette phrase sans tiquer ?
3. Le mot-cle s'integre-t-il de facon invisible, ou on sent qu'il a ete "place" ?

Si la reponse a (3) est "on le sent", reformule ou abandonne l'optimisation.

### 3.1 Regles absolues (CLAUDE.md)
- **Tiret cadratin `—` INTERDIT** dans tout le contenu
- Tonalite : rigoureuse, experte, accessible, partenariale
- Ne pas casser les longueurs de texte (respecter template-reference.md)

### 3.2 Ce qui peut etre optimise (zones techniques, pas de copywriting)

**metaTitle** (pas visible sur la page, uniquement Google) :
- Mot-cle principal en debut de titre
- 50-60 caracteres max
- Format : `"Mot-cle Principal : Benefice | Vizion"`

**metaDescription** (pas visible sur la page, uniquement Google) :
- Mot-cle principal dans les 80 premiers caracteres
- 140-160 caracteres
- Inclure un benefice + CTA implicite

**keywords[]** (pas visible, uniquement pour le sitemap/schema) :
- 12-15 mots-cles
- Mix des 4 categories (transactionnel, informationnel, comparatif, longue traine)
- Mot-cle principal en premier

**faqTitle** :
- Integrer le mot-cle naturellement (ex: "Des questions sur [mot-cle] ?")

### 3.3 Placement obligatoire du mot-cle (a proposer systematiquement)

Ces optimisations sont attendues sur chaque page. Le copywriting doit rester naturel, mais le mot-cle DOIT etre place. Si l'integration directe degrade le titre, proposer une reformulation alternative qui integre le mot-cle tout en conservant la force du message.

**heroTitle (H1) :**
- Le mot-cle DOIT apparaitre dans le H1
- Format recommande : "Mot-cle : promesse/benefice" (ex: "Positionnement marketing : clarifiez ce que vous vendez")
- Si le mot-cle ne rentre pas tel quel, proposer 2-3 variantes au user

**heroSubtitle (100 premiers mots) :**
- Le mot-cle DOIT apparaitre dans les 2 premieres phrases du heroSubtitle
- C'est le premier paragraphe que Google lit apres le H1, signal SEO fort
- Integrer naturellement sans repeter le H1

**2 H2 minimum :**
- Choisir 2 parmi : `solutionTitle`, `processTitle`, `qualityGuarantees.sectionTitle`, `bentoCards.sectionTitle`
- Souvent il suffit d'ajouter un seul mot (ex: "positionnement" → "positionnement marketing")
- Privilegier les H2 ou l'ajout est le plus invisible

**FAQs (questions uniquement) :**
- Reformuler 2-3 questions pour inclure le mot-cle SI la formulation reste celle qu'un humain taperait dans Google
- Ne jamais reformuler une reponse juste pour y placer un mot-cle

### 3.4 Ce qu'il est INTERDIT de modifier pour du SEO

- **Les statements du constat** (c'est du pur copywriting emotionnel)
- **Les solutionItems** (argumentaire de vente, pas du contenu SEO)
- **Les temoignages** (paroles de clients, sacrees)
- **Les descriptions de garanties** (promesses de marque)
- **Le ctaTitle et ctaDescription** (conversion > SEO)
- **Les descriptions de relatedServices** (contextualisation editoriale)
- **Tout texte ou le mot-cle apparaitrait de facon forcee ou repetitive**
- Le slug, l'ordre, la categorie, les images, icones ou hrefs

## Etape 4 — Validation

1. Verifier que le build passe : `npm run build`
2. Presenter un diff resume des changements effectues
3. Checklist finale :
   - [ ] **H1** : heroTitle contient le mot-cle (idealement en debut)
   - [ ] **100 premiers mots** : heroSubtitle contient le mot-cle dans les 2 premieres phrases
   - [ ] **2 H2 minimum** contiennent le mot-cle naturellement
   - [ ] metaTitle optimise (50-60 car, mot-cle en debut)
   - [ ] metaDescription optimisee (140-160 car, mot-cle present)
   - [ ] keywords[] mis a jour (12-15 items, 4 categories)
   - [ ] faqTitle contient le mot-cle
   - [ ] 2+ questions FAQ contiennent le mot-cle naturellement
   - [ ] Aucun texte de copywriting degrade (statements, solutions, temoignages intacts)
   - [ ] Aucun keyword stuffing (relire les textes modifies a voix haute)
   - [ ] Aucun tiret cadratin
   - [ ] Longueurs de texte respectees
   - [ ] Build OK
