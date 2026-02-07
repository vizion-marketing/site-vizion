# API de publication d’articles de blog

Cette API permet à un générateur d’articles externe de publier automatiquement sur le blog du site. L’article est créé dans le dépôt Git (fichier MDX dans `content/blog/`) puis un redéploiement est déclenché pour que le nouvel article soit visible après le prochain build.

## Endpoint

- **URL** : `POST /api/blog/publish`
- **Authentification** : requise (voir ci-dessous).

## Authentification

Envoyez l’un des deux headers suivants :

- `Authorization: Bearer <votre_clé_api>`
- `x-api-key: <votre_clé_api>`

La clé doit correspondre à la variable d’environnement `BLOG_PUBLISH_API_KEY` configurée côté serveur. En cas d’absence ou de clé invalide, l’API renvoie `401 Unauthorized`.

## Corps de la requête (JSON)

### Champs obligatoires

| Champ        | Type   | Description                          |
| ------------ | ------ | ------------------------------------ |
| `title`      | string | Titre de l’article (non vide).       |
| `description`| string | Résumé / meta description (non vide).|
| `date`       | string | Date de publication (ISO 8601).      |
| `category`   | string | Catégorie (ex. « IA for Sales »).    |

### Champs optionnels

| Champ           | Type    | Description |
| --------------- | ------- | ----------- |
| `author`        | string  | Auteur (défaut : `"Vizion"`). |
| `tags`          | string[]| Liste de tags. |
| `featuredImage` | string  | URL de l’image à la une (http/https). |
| `draft`         | boolean | Si `true`, article en brouillon (défaut : `false`). |
| `body`          | string  | Contenu MDX du corps de l’article. |
| `slug`          | string  | Slug d’URL. Si absent, dérivé du titre. |
| `resources`     | array   | Liste de ressources (voir format ci-dessous). |
| `ctaTitle`      | string  | Titre du CTA en fin d’article. |
| `ctaDescription`| string  | Description du CTA. |
| `ctaLink`       | string  | Lien du CTA (ex. `/contact`). |

### Format de `resources`

Chaque élément doit contenir :

- `title` (string) : libellé du lien
- `url` (string) : URL (interne ou externe)
- `type` (string) : `"internal"` ou `"external"`
- `description` (string, optionnel)

Exemple :

```json
"resources": [
  { "title": "Notre service", "url": "/services", "type": "internal", "description": "En savoir plus" },
  { "title": "McKinsey", "url": "https://www.mckinsey.com/...", "type": "external" }
]
```

## Exemple de payload minimal

```json
{
  "title": "Mon nouvel article",
  "description": "Résumé court pour le référencement et les cartes.",
  "date": "2025-02-06",
  "category": "IA for Sales",
  "body": "## Introduction\n\nContenu en **Markdown** ou MDX."
}
```

## Exemple de payload complet

```json
{
  "title": "Les tendances 2025",
  "description": "Découvrez les tendances qui comptent en 2025.",
  "date": "2025-02-06T10:00:00.000Z",
  "category": "Product Marketing",
  "author": "Vizion",
  "tags": ["tendances", "2025", "marketing"],
  "featuredImage": "https://images.unsplash.com/photo-xxx",
  "draft": false,
  "body": "## Introduction\n\nContenu de l'article…",
  "resources": [
    { "title": "En savoir plus", "url": "/contact", "type": "internal", "description": "Nous contacter" }
  ],
  "ctaTitle": "Prêt à avancer ?",
  "ctaDescription": "Réservez un échange.",
  "ctaLink": "/contact"
}
```

## Réponses

### Succès (200)

```json
{
  "success": true,
  "slug": "les-tendances-2025",
  "path": "content/blog/les-tendances-2025.mdx",
  "deployTriggered": true
}
```

- `deployTriggered` : `true` si le Deploy Hook Vercel a été appelé avec succès. L’article n’apparaît sur le site qu’après la fin du prochain build (quelques minutes selon la plateforme).

### Erreurs

| Code | Signification |
| ---- | -------------- |
| 400  | Corps invalide (JSON invalide, champs manquants, date/URL invalide, ou corps trop volumineux — max 1 Mo). |
| 401  | Authentification manquante ou clé invalide. |
| 409  | Un article avec ce slug existe déjà. Changer le titre ou fournir un `slug` différent. |
| 502  | Erreur côté GitHub (indisponibilité ou refus). |
| 503  | Configuration serveur incomplète (ex. `GITHUB_TOKEN` ou `GITHUB_REPO` manquants). |

Exemple de réponse d’erreur :

```json
{
  "error": "Le champ 'title' est requis et doit être une chaîne non vide."
}
```

## Variables d’environnement côté serveur

À configurer sur l’environnement qui exécute l’API (voir `env.example` à la racine du projet) :

- `BLOG_PUBLISH_API_KEY` : clé partagée avec le générateur (obligatoire).
- `GITHUB_TOKEN` : token GitHub avec droit `contents: write` sur le dépôt (obligatoire).
- `GITHUB_REPO` : dépôt au format `owner/repo` (obligatoire), ou `GITHUB_REPO_OWNER` et `GITHUB_REPO_NAME`.
- `GITHUB_BRANCH` : branche cible (optionnel, défaut : `main`).
- `VERCEL_DEPLOY_HOOK_URL` : URL du Deploy Hook Vercel pour déclencher un build après push (recommandé).

## Rappel

L’article n’est visible sur le site qu’après le prochain déploiement réussi (build ContentLayer + déploiement). Prévoir quelques minutes de délai après un appel réussi à l’API.
