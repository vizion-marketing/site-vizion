# Audit SEO - Vizion Marketing B2B Toulouse

**Date**: 23 février 2026
**Réalisé par**: Claude
**Objectif**: Analyser l'alignement mots-clés / contenu et proposer des améliorations

---

## 1. ANALYSE DES MOTS-CLÉS ACTUELS

### Mots-clés principaux définis (homepage)
```
- agence marketing toulouse ✅
- agence marketing b2b toulouse ✅
- agence marketing b2b ✅
- marketing produit toulouse ✅
- aide a la vente toulouse ⚠️ (typo: devrait être "aide à la vente")
- positionnement b2b toulouse ✅
- agence marketing digital toulouse ✅
- conseil marketing toulouse ✅
- stratégie marketing toulouse ✅
- accompagnement marketing b2b ✅
```

### Mots-clés layout.tsx (globaux)
```
- agence marketing toulouse
- agence marketing b2b toulouse
- marketing produit toulouse
- positionnement b2b toulouse
- sales enablement toulouse
- go-to-market toulouse
- conseil marketing toulouse
- accompagnement marketing b2b toulouse
```

---

## 2. ANALYSE DE L'ALIGNEMENT CONTENU vs MOTS-CLÉS

### ✅ Points forts

1. **Excellente répétition naturelle de "Toulouse"**
   - Badge hero: "AGENCE MARKETING B2B - TOULOUSE"
   - H1: "Votre agence Marketing spécialiste du B2B à Toulouse"
   - Meta descriptions enrichies avec "Toulouse" ou "Vizion Toulouse"

2. **Bon ciblage B2B**
   - Lexique professionnel cohérent
   - Focus "entreprises B2B", "PME", "ETI"
   - Vocabulaire expert: positionnement, sales enablement, go-to-market

3. **Schemas JSON-LD bien structurés**
   - BlogPosting avec données enrichies ✅
   - Organization schema avec adresse Toulouse
   - Breadcrumbs sur toutes les pages
   - FAQ schema

4. **Meta descriptions enrichies**
   - Articles blog incluent désormais "Vizion" et "Toulouse"
   - Taille optimale (150-160 caractères)
   - CTR-friendly avec appels à l'action

---

## 3. ⚠️ POINTS D'AMÉLIORATION IDENTIFIÉS

### A. Mots-clés manquants ou sous-exploités

#### 1. **Requêtes longue traîne manquantes**

**Opportunités locales:**
```
- agence marketing produit toulouse
- consultant marketing b2b toulouse
- expert positionnement toulouse
- agence go to market toulouse
- automatisation marketing toulouse
- crm marketing toulouse
```

**Opportunités métier:**
```
- architecture de message
- sales enablement b2b
- marketing cycle de vente long
- marketing décision complexe
- stratégie marketing produit
- directeur marketing externalisé
```

**Opportunités sectorielles:**
```
- agence marketing industrie toulouse
- marketing b2b technologie toulouse
- marketing saas b2b toulouse
- agence marketing pme toulouse
```

#### 2. **Variantes de recherche non couvertes**

```
❌ Non présent: "agence marketing stratégique toulouse"
❌ Non présent: "agence product marketing toulouse"
❌ Non présent: "consultant marketing produit toulouse"
❌ Non présent: "agence positionnement produit toulouse"
❌ Non présent: "marketing b2b complexe"
```

### B. Contenu à enrichir

#### 1. **Page d'accueil**
- ✅ Bien: H1 contient "agence marketing B2B Toulouse"
- ⚠️ Améliorer: Ajouter section "Secteurs d'expertise" avec mots-clés sectoriels
- ⚠️ Améliorer: Renforcer les mentions "product marketing" dans le corps
- ⚠️ Améliorer: Ajouter "marketing produit" dans le manifeste/intro

#### 2. **Articles de blog**
Actuels (3 articles):
1. ✅ "Qu'est-ce que le product marketing" - Bon ciblage keyword principal
2. ✅ "Comment choisir solution SaaS" - Bon pour SaaS/tech
3. ✅ "Transformation digitale 2024" - Bon pour tendances IA

**Articles manquants (opportunités SEO):**
```
📝 À créer: "Sales enablement : le guide complet 2026"
   → Cible: "sales enablement", "aide à la vente", "efficacité commerciale"

📝 À créer: "Comment définir son positionnement B2B"
   → Cible: "positionnement b2b", "positionnement produit", "architecture de message"

📝 À créer: "Marketing produit vs marketing traditionnel"
   → Cible: "marketing produit", "product marketing manager", "différence marketing"

📝 À créer: "CRM et automatisation marketing pour PME B2B"
   → Cible: "crm marketing", "automatisation marketing", "marketing automation b2b"

📝 À créer: "Go-to-Market strategy : lancement produit B2B"
   → Cible: "go-to-market", "stratégie lancement", "mise en marché"

📝 À créer: "Marketing B2B pour l'industrie : spécificités et bonnes pratiques"
   → Cible: "marketing industrie", "marketing b2b technique", "marketing manufacturier"
```

#### 3. **Pages services**
- ⚠️ Vérifier que chaque service a une page dédiée avec keywords ciblés
- ⚠️ Ajouter FAQ par service pour longue traîne
- ⚠️ Cas d'usage sectoriels sur chaque page service

---

## 4. RECOMMANDATIONS PRIORITAIRES

### 🎯 IMMÉDIAT (Semaine 1-2)

#### 1. Corriger la typo mot-clé
```diff
- "aide a la vente toulouse"
+ "aide à la vente toulouse"
```
**Fichier**: `src/content/home.ts` ligne 283

#### 2. Enrichir les balises title des pages clés
```
Page actuelle → Suggestion optimisée

/blog
"Blog | Vizion"
→ "Blog Marketing B2B | Guides et Conseils | Vizion Toulouse"

/cas-clients
"Cas Clients | Vizion"
→ "Cas Clients B2B | Success Stories Marketing | Vizion Toulouse"

/contact
"Contact | Vizion"
→ "Contact | Agence Marketing B2B à Toulouse | Vizion"
```

#### 3. Ajouter section "Nos expertises sectorielles" sur homepage
```markdown
## Nos expertises sectorielles

Nous accompagnons des entreprises B2B dans des secteurs à forte valeur ajoutée :

- **Industrie & Manufacturing** : Marketing produit pour solutions techniques
- **Technologies & SaaS** : Positionnement et go-to-market pour éditeurs
- **Services B2B** : Stratégie commerciale et sales enablement
- **Innovation & R&D** : Communication de l'innovation complexe
```

**Bénéfice**: Capture requêtes "agence marketing [secteur] toulouse"

---

### 🚀 COURT TERME (Mois 1)

#### 4. Créer 3 nouveaux articles piliers
```
1. "Sales Enablement : Guide Complet 2026"
   - 2500-3000 mots
   - Cible: "sales enablement", "aide à la vente", "outil commercial"
   - Internal links: services, cas clients

2. "Comment définir son positionnement B2B"
   - 2000-2500 mots
   - Cible: "positionnement b2b", "positionnement produit"
   - Framework exclusif Vizion

3. "Marketing Produit vs Marketing Traditionnel"
   - 1800-2000 mots
   - Cible: "marketing produit", "product marketing"
   - Comparaison tableau
```

#### 5. Optimiser internal linking
```
✅ Fait: Articles blog → homepage
📝 À faire: Homepage → articles pertinents
📝 À faire: Services → cas clients correspondants
📝 À faire: Blog → services en sidebar
📝 À faire: Cas clients → services utilisés
```

**Structure recommandée**:
```
Homepage
  ↓
Services (5 pages)
  ↓ ↓ ↓
Cas Clients (liés par service)
  ↓
Blog (articles thématiques)
  ↓
Lead magnets / Contact
```

#### 6. Enrichir schemas Organization
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vizion",
  "alternateName": "Vizion Marketing B2B",
  "description": "Agence marketing B2B spécialisée en positionnement produit, sales enablement et go-to-market pour PME et ETI à Toulouse",
  "areaServed": {
    "@type": "City",
    "name": "Toulouse"
  },
  "knowsAbout": [
    "Product Marketing",
    "Sales Enablement",
    "Go-to-Market Strategy",
    "B2B Marketing",
    "Marketing Automation"
  ],
  "serviceType": [
    "Stratégie Marketing Produit",
    "Positionnement B2B",
    "Sales Enablement",
    "Automatisation Marketing",
    "CRM"
  ]
}
```

---

### 🎓 MOYEN TERME (Mois 2-3)

#### 7. Créer glossaire SEO
```
/glossaire/

- Qu'est-ce que le product marketing ?
- Qu'est-ce que le sales enablement ?
- Qu'est-ce que le positionnement produit ?
- Qu'est-ce qu'une architecture de message ?
- Qu'est-ce qu'un buyer persona ?
- Qu'est-ce qu'une proposition de valeur ?
- Qu'est-ce qu'un go-to-market ?
```

**Format**: 1 page = 1 définition (300-500 mots) + liens internes

**Bénéfice**: Capture requêtes "qu'est-ce que [terme]"

#### 8. Programme de contenu régulier
```
Objectif: 2 articles/mois

Cluster 1: Marketing Produit (4 articles)
Cluster 2: Sales Enablement (4 articles)
Cluster 3: IA & Automatisation (4 articles)
Cluster 4: Go-to-Market (4 articles)
Cluster 5: Études de cas sectorielles (4 articles)
```

#### 9. Optimiser pour featured snippets
```
Format recommandé:
- Listes numérotées
- Tableaux comparatifs
- Définitions courtes (40-60 mots)
- FAQ structurée (schema FAQ)
- Étapes process (schema HowTo)
```

---

## 5. MOTS-CLÉS PAR INTENTION DE RECHERCHE

### 🔍 Informationnelle (Top of Funnel)
```
✅ Déjà couvert:
- "qu'est-ce que le product marketing"
- "transformation digitale 2024"

📝 À créer:
- "comment faire marketing produit"
- "qu'est-ce que le sales enablement"
- "comment définir positionnement b2b"
- "marketing b2b vs b2c différences"
- "go to market strategy exemple"
```

### 🎯 Navigationnelle (Brand)
```
✅ Déjà couvert:
- "vizion marketing toulouse"
- "vizion agence"
- "by-vizion"

📝 À créer:
- Articles mentionnant Lucas Gonzalez (personal branding)
- Page "À propos" optimisée avec bios
```

### 💼 Transactionnelle (Bottom of Funnel)
```
✅ Déjà couvert:
- "agence marketing b2b toulouse"
- "conseil marketing toulouse"

⚠️ À renforcer:
- "agence product marketing toulouse" → Créer page service dédiée
- "consultant positionnement toulouse" → Mettre en avant expertise
- "directeur marketing externalisé toulouse" → Landing page spécifique
- "audit marketing b2b gratuit" → Lead magnet
```

---

## 6. ANALYSE CONCURRENTIELLE (Suggestions)

### Benchmark local Toulouse
```
📊 À faire:
1. Identifier top 5 agences marketing B2B Toulouse
2. Analyser leurs mots-clés principaux
3. Identifier gaps (keywords qu'ils ciblent mais pas vous)
4. Identifier opportunités (keywords peu concurrentiels)
```

### Opportunités de différenciation
```
✅ Déjà unique:
- "Marketing produit" (peu de focus local)
- "Sales enablement" (rare en agence FR)
- "IA appliquée marketing" (moderne)

📝 À renforcer:
- "Marketing cycle de vente long"
- "Marketing décision complexe"
- "Marketing innovation technique"
- "Directeur marketing externalisé" (CMO as a Service)
```

---

## 7. CHECKLIST D'ACTION IMMÉDIATE

### Cette semaine
- [ ] Corriger typo "aide a la vente" → "aide à la vente"
- [ ] Enrichir title tag de /blog, /cas-clients, /contact
- [ ] Ajouter section "Expertises sectorielles" homepage
- [ ] Planifier 3 articles piliers

### Ce mois
- [ ] Créer article "Sales Enablement Guide 2026"
- [ ] Créer article "Positionnement B2B"
- [ ] Créer article "Marketing Produit vs Traditionnel"
- [ ] Optimiser internal linking (homepage ↔ articles)
- [ ] Enrichir schema Organization

### Ce trimestre
- [ ] Créer glossaire marketing (15 définitions)
- [ ] Programme contenu régulier (2 articles/mois)
- [ ] Landing page "Directeur Marketing Externalisé"
- [ ] Lead magnet "Audit Marketing B2B"
- [ ] Optimiser pour featured snippets

---

## 8. MÉTRIQUES DE SUIVI

### KPIs à monitorer
```
Trafic organique:
- Visites depuis Google
- Impressions sur keywords cibles
- Position moyenne keywords principaux

Engagement:
- Taux de rebond pages clés
- Temps sur page articles
- Pages/session

Conversion:
- Taux conversion contact depuis organic
- Leads qualifiés depuis blog
- Demandes devis depuis cas clients
```

### Outils recommandés
```
- Google Search Console (positions, CTR)
- Google Analytics 4 (trafic, engagement)
- Ahrefs / Semrush (keywords, backlinks)
- PageSpeed Insights (Core Web Vitals)
```

---

## 9. CONCLUSION

### Points forts actuels
✅ Excellente base technique (schemas, structure, mobile)
✅ Identité locale forte (Toulouse bien présent)
✅ Contenu expert de qualité
✅ Meta descriptions optimisées

### Axes d'amélioration prioritaires
1. **Créer plus de contenu** (3 articles → 15+ articles sur 6 mois)
2. **Cibler longue traîne** (glossaire, FAQ sectorielles)
3. **Renforcer internal linking** (maillage article ↔ service ↔ cas)
4. **Optimiser transactionnel** (landing pages services, lead magnets)

### ROI attendu (6 mois)
```
Trafic organique: +150% à +200%
Keywords en top 10: +30 à +50
Leads qualifiés organic: +80% à +120%
```

---

**Fin de l'audit** | Document vivant à mettre à jour trimestriellement
