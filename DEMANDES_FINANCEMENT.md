# Processus de demande de financement

## Vue d'ensemble

Le système de demande de financement est maintenant **sécurisé et contrôlé** :

1. **API backend** (`POST /api/financement`) – Validation serveur, stockage en base
2. **Base de données** – SQLite (dev) ou PostgreSQL (prod)
3. **Sécurité** – reCAPTCHA v3, rate limiting (5 req/h/IP), validation stricte
4. **Numéro de référence** – Chaque demande reçoit un identifiant unique (ex. FIN-2025-00123)
5. **Espace admin** – `/admin/demandes` protégé par Auth0

## Configuration

### 1. Base de données

Dans `.env`, configurez `DATABASE_URL` :

```env
# SQLite (recommandé pour dev local)
DATABASE_URL="file:./prisma/dev.db"
```

Puis créez la base et les tables :

```bash
npx prisma migrate dev
```

### 2. reCAPTCHA (optionnel en dev)

- **Clé publique** : `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` (déjà dans .env)
- **Clé secrète** : `RECAPTCHA_SECRET_KEY` – à ajouter pour la vérification serveur

Sans `RECAPTCHA_SECRET_KEY`, le token `test-token` est accepté en dev.

### 3. Admin Auth0

L’espace admin (`/admin/demandes`) nécessite une connexion Auth0. Pour y accéder :

1. Allez sur `/api/auth/login` pour vous connecter
2. Puis sur `/admin/demandes` pour gérer les demandes

## Workflow des demandes

| Statut      | Description                    |
|------------|---------------------------------|
| En attente | Nouvelle demande reçue         |
| En cours   | Traitement par l’équipe        |
| Validée    | Financement accordé            |
| Refusée    | Demande refusée                |

## Fichiers créés

- `app/api/financement/route.js` – API de soumission
- `app/api/admin/demandes/route.js` – Liste des demandes (protégé)
- `app/api/admin/demandes/[id]/route.js` – Mise à jour statut/notes (protégé)
- `app/admin/demandes/` – Interface admin
- `lib/prisma.js` – Client Prisma
- `lib/reference.js` – Génération des numéros de référence
- `lib/recaptcha.js` – Vérification reCAPTCHA
- `lib/rateLimit.js` – Limitation des requêtes
