# Configuration Auth0 pour Finassur (Next.js)

## État actuel

Auth0 est **préparé** mais **désactivé** temporairement car `@auth0/nextjs-auth0` v3 a un conflit avec React 19 (erreur `createContext`).

## Pour activer Auth0

1. **Mettre à jour Auth0** quand une version compatible React 19 sera disponible
2. Ou **rétrograder React** à la v18 dans `package.json`
3. Décommenter dans `app/layout.jsx` :
   - `import { UserProvider } from '@auth0/nextjs-auth0'`
   - Le wrapper `<UserProvider>` autour du contenu
4. Dans `components/layout/Header.jsx` : remplacer les valeurs mock par `useUser()` d'Auth0

## Configuration dashboard Auth0

Votre app est configurée pour **Regular Web Application** (Next.js) :

| Paramètre | Valeur |
|-----------|--------|
| **Application Type** | Regular Web Application |
| **Allowed Callback URLs** | `http://localhost:3000/api/auth/callback` |
| **Allowed Logout URLs** | `http://localhost:3000` |
| **Allowed Web Origins** | `http://localhost:3000` |

## Variables .env

```
AUTH0_DOMAIN=dev-zz4ppu27io12ca4e.us.auth0.com
AUTH0_CLIENT_ID=Wp8WBMaAW7uYEH84fspnsox1Lvq9JgUC
AUTH0_CLIENT_SECRET=<depuis le dashboard Auth0>
AUTH0_SECRET=6230f6579f0d31d9b7f1b003e08923226fbd315c1b69aaa555ba5ca84c2c3a2e
APP_BASE_URL=http://localhost:3000
```

## reCAPTCHA

Également désactivé (conflit React 19). Le formulaire Contact fonctionne sans. Pour réactiver : ajouter `GoogleReCaptchaProvider` dans le layout quand compatible.
