# Images à produire pour le site Vizion

Ce document liste toutes les images nécessaires pour le site avec leurs dimensions exactes.

## Images prioritaires (actuellement manquantes)

### Assets Portfolio (/public/assets/)
Ces images apparaissent dans la section "Assets Portfolio" de la page d'accueil.

1. **plaquettes.jpg**
   - Dimensions: 1600x900px (ratio 16:9)
   - Format: JPG optimisé
   - Utilisation: Card principale - Plaquettes A4
   - Description: Brochures institutionnelles et fiches produits haut de gamme

2. **publicites.jpg**
   - Dimensions: 800x800px (ratio 1:1)
   - Format: JPG optimisé
   - Utilisation: Card secondaire - Publicités
   - Description: Campagnes display et formats print

3. **landing-pages.jpg**
   - Dimensions: 800x1200px (ratio 2:3, format vertical)
   - Format: JPG optimisé
   - Utilisation: Card haute - Landing Pages
   - Description: Conversion optimisée et design orienté utilisateur

4. **sales-deck.jpg**
   - Dimensions: 800x800px (ratio 1:1)
   - Format: JPG optimisé
   - Utilisation: Card secondaire - Sales Deck
   - Description: Présentations commerciales stratégiques

5. **social-media.jpg**
   - Dimensions: 800x800px (ratio 1:1)
   - Format: JPG optimisé
   - Utilisation: Card secondaire - Contenu Social
   - Description: Posts LinkedIn et visuels engageants

## Images SEO (public/)

6. **og-image.jpg**
   - Dimensions: 1200x630px (ratio Open Graph standard)
   - Format: JPG optimisé
   - Utilisation: Partage réseaux sociaux (Open Graph, Twitter Card)
   - Description: Image de prévisualisation lors du partage du site

7. **logo-vizion.svg**
   - Dimensions: 200x60px (ratio 10:3)
   - Format: SVG vectoriel
   - Utilisation: Logo principal du site + Schema.org
   - Description: Logo Vizion en vectoriel

## Images clients (/public/images/clients/)

8. **easyvirtual-bg.jpg**
   - Dimensions: 800x600px (ratio 4:3)
   - Format: JPG optimisé
   - Utilisation: Background cas client easyVirtual.tours
   - Description: Image de fond pour l'étude de cas

## Images externes (déjà gérées automatiquement)

### Unsplash (images des cas clients et use cases IA)
- Ces images sont déjà hébergées sur Unsplash
- Pas besoin de les produire
- Dimensions automatiquement optimisées via paramètres URL

### Pravatar (avatars d'équipe et témoignages)
- Avatars générés automatiquement
- Dimensions: 300x300px pour l'équipe, 56x56px pour témoignages
- Pas besoin de les produire (temporaires)

## Recommandations techniques

### Optimisation
- Compression JPG: qualité 80-85%
- Utiliser WebP en complément si possible
- Optimiser avec ImageOptim ou TinyPNG avant upload

### Nommage
- Respecter exactement les noms listés ci-dessus
- Utiliser des tirets pour séparer les mots
- Tout en minuscules

### Placement
- Assets portfolio: `/public/assets/`
- Images clients: `/public/images/clients/`
- Images SEO: `/public/`

## Checklist de production

- [ ] plaquettes.jpg (1600x900px)
- [ ] publicites.jpg (800x800px)
- [ ] landing-pages.jpg (800x1200px)
- [ ] sales-deck.jpg (800x800px)
- [ ] social-media.jpg (800x800px)
- [ ] og-image.jpg (1200x630px)
- [ ] logo-vizion.svg (200x60px)
- [ ] easyvirtual-bg.jpg (800x600px)
