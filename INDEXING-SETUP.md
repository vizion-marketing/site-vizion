# Configuration de l'Indexation Automatique

Ce document explique comment configurer l'indexation automatique quotidienne des pages du site via Google Indexing API et IndexNow.

## 📋 Vue d'ensemble

Le système soumet automatiquement toutes les URLs du sitemap à Google et IndexNow (Bing, Yandex) **tous les jours à 2h du matin (UTC)**.

### Architecture

```
Vercel Cron (daily at 2am UTC)
    ↓
/api/cron/daily-indexing
    ↓
Collecte toutes les URLs du sitemap
    ↓
/api/request-indexing
    ↓
┌──────────────────┬──────────────────┐
│   Google         │   IndexNow       │
│   Indexing API   │   (Bing/Yandex)  │
└──────────────────┴──────────────────┘
```

## 🚀 Configuration Rapide

### 1. Variables d'environnement Vercel

Dans votre projet Vercel, ajoutez ces variables d'environnement :

```bash
# Requis pour les deux services
CRON_SECRET=<votre-secret-aleatoire>  # Générez avec: openssl rand -base64 32

# Pour IndexNow (Bing/Yandex) - Simple et recommandé
INDEXNOW_KEY=<votre-cle-uuid>  # Générez avec: uuidgen ou online UUID generator

# Pour Google Indexing API (Optionnel, plus complexe)
GOOGLE_INDEXING_CREDENTIALS=<json-service-account>
```

### 2. Configuration IndexNow (Recommandé - 5 minutes)

IndexNow est supporté par Bing et Yandex. Configuration très simple :

#### Étape 1 : Générer une clé API
```bash
# Générez un UUID (votre clé API)
uuidgen  # ou utilisez https://www.uuidgenerator.net/
```

Exemple : `12345678-1234-1234-1234-123456789abc`

#### Étape 2 : Créer le fichier de vérification

Créez `/public/12345678-1234-1234-1234-123456789abc.txt` contenant uniquement :
```
12345678-1234-1234-1234-123456789abc
```

#### Étape 3 : Ajouter la variable d'environnement

Dans Vercel :
```
INDEXNOW_KEY=12345678-1234-1234-1234-123456789abc
```

✅ **C'est tout !** IndexNow est configuré.

### 3. Configuration Google Indexing API (Optionnel - 30 minutes)

⚠️ **Important** : L'API Google Indexing est principalement pour les contenus JobPosting et BroadcastEvent. Pour les pages normales, Google recommande de soumettre votre sitemap via Search Console.

Si vous souhaitez quand même configurer :

#### Étape 1 : Créer un projet Google Cloud

1. Allez sur [Google Cloud Console](https://console.cloud.google.com)
2. Créez un nouveau projet : "Vizion Indexing"
3. Activez l'API "Indexing API" :
   - Menu ☰ → APIs & Services → Library
   - Recherchez "Indexing API"
   - Cliquez "Enable"

#### Étape 2 : Créer un Service Account

1. Menu ☰ → APIs & Services → Credentials
2. Cliquez "Create Credentials" → "Service Account"
3. Nom : "vizion-indexing-bot"
4. Rôle : "Owner" (pour simplifier)
5. Cliquez "Done"

#### Étape 3 : Créer une clé JSON

1. Cliquez sur le service account créé
2. Onglet "Keys" → "Add Key" → "Create new key"
3. Format : JSON
4. Téléchargez le fichier JSON

#### Étape 4 : Ajouter le service account à Search Console

1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Sélectionnez votre propriété (by-vizion.com)
3. Settings → Users and permissions
4. Cliquez "Add user"
5. Email : `vizion-indexing-bot@your-project.iam.gserviceaccount.com`
6. Permission : "Owner"

#### Étape 5 : Configurer la variable d'environnement

Dans Vercel, ajoutez :
```bash
GOOGLE_INDEXING_CREDENTIALS=<contenu-du-fichier-json-sur-une-ligne>
```

Pour mettre le JSON sur une ligne :
```bash
cat service-account.json | tr -d '\n' | pbcopy
```

## 🧪 Tester l'installation

### Test manuel de l'indexation

```bash
# Créez un fichier test-indexing.sh
curl -X POST https://by-vizion.com/api/request-indexing \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_CRON_SECRET" \
  -d '{"urls": ["https://by-vizion.com/"]}'
```

Réponse attendue :
```json
{
  "google": {
    "success": true,
    "summary": { "successful": 1, "failed": 0 }
  },
  "indexNow": {
    "success": true,
    "summary": { "successful": 1, "failed": 0 }
  }
}
```

### Test du cron (en local)

```bash
# Simuler l'appel Vercel Cron
curl https://by-vizion.com/api/cron/daily-indexing \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

### Vérifier les logs Vercel

1. Dashboard Vercel → Votre projet
2. Onglet "Logs"
3. Filtrer par "cron"
4. Vous devriez voir des logs quotidiens à 2h UTC

## 📊 Monitoring

### Vercel Cron Logs

Les logs de cron sont disponibles dans :
- Vercel Dashboard → Logs → Filter: "cron"

Exemple de log de succès :
```
Requesting indexing for 42 URLs
Indexing requested successfully: {
  totalUrls: 42,
  googleSuccess: 42,
  indexNowSuccess: 42
}
```

### Vérifier l'indexation

- **Google** : Search Console → Coverage report
- **Bing** : Bing Webmaster Tools → URL Inspection

## 🔧 Personnalisation

### Changer l'heure d'exécution

Éditez `vercel.json` :
```json
{
  "crons": [{
    "path": "/api/cron/daily-indexing",
    "schedule": "0 14 * * *"  // 14h UTC = 15h/16h FR
  }]
}
```

Format cron : `minute hour day month dayOfWeek`

Exemples :
- `0 2 * * *` - 2h tous les jours (défaut)
- `0 */6 * * *` - Toutes les 6h
- `0 8 * * 1` - 8h tous les lundis

### Filtrer les URLs à indexer

Éditez `src/app/api/cron/daily-indexing/route.ts` :

```typescript
// Exclure certaines pages
const urls = allUrls.filter(url =>
  !url.includes('/draft') &&
  !url.includes('/test')
);
```

## 🚨 Dépannage

### "Unauthorized" dans les logs

→ Vérifiez que `CRON_SECRET` est bien configuré dans Vercel

### "IndexNow not configured"

→ Vérifiez que `INDEXNOW_KEY` existe et que `/public/{key}.txt` est créé

### "Google Indexing API not configured"

→ Vérifiez `GOOGLE_INDEXING_CREDENTIALS` et les permissions Search Console

### Cron ne s'exécute pas

→ Vérifiez que `vercel.json` est bien à la racine du projet et redéployez

## 📚 Ressources

- [Vercel Cron Jobs](https://vercel.com/docs/cron-jobs)
- [Google Indexing API](https://developers.google.com/search/apis/indexing-api/v3/quickstart)
- [IndexNow Protocol](https://www.indexnow.org/)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

## ⚡ Recommandations

1. **Commencez avec IndexNow** (simple, rapide, efficace pour Bing)
2. **Google Search Console** suffit généralement pour Google (soumettre le sitemap manuellement)
3. **Google Indexing API** uniquement si vous avez du contenu JobPosting/BroadcastEvent

L'indexation automatique quotidienne garantit que toutes vos nouvelles pages et mises à jour sont rapidement découvertes par les moteurs de recherche ! 🎉
