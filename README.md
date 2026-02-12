# Finassur - Plateforme de Financement Professionnel

Application React complète pour Finassur, spécialisée dans le financement professionnel (crédit-bail, LOA, solutions de financement).

## 🚀 Technologies Utilisées

- **React 19** - Framework JavaScript
- **Vite** - Build tool et dev server
- **React Router DOM** - Navigation multi-pages
- **TailwindCSS v4** - Framework CSS
- **Auth0** - Authentification
- **EmailJS** - Envoi d'emails
- **Font Awesome** - Icônes

## 📋 Prérequis

- Node.js (v18 ou supérieur)
- npm ou yarn

## 🛠️ Installation

1. Clonez le repository
```bash
cd finassur
```

2. Installez les dépendances
```bash
npm install
```

3. Configurez les variables d'environnement

Créez un fichier `.env` à la racine du projet en vous basant sur `.env.example`:

```env
# Auth0 Configuration
REACT_APP_AUTH0_DOMAIN=your-domain.auth0.com
REACT_APP_AUTH0_CLIENT_ID=your_client_id

# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Configuration Auth0

1. Créez un compte sur [Auth0](https://auth0.com/)
2. Créez une nouvelle application (Single Page Application)
3. Configurez les URLs autorisées:
   - Allowed Callback URLs: `http://localhost:5173`
   - Allowed Logout URLs: `http://localhost:5173`
   - Allowed Web Origins: `http://localhost:5173`
4. Copiez le Domain et Client ID dans votre fichier `.env`

### Configuration EmailJS

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un nouveau service email
3. Créez un template d'email avec les variables suivantes:
   - `{{to_name}}` - Nom du destinataire
   - `{{from_name}}` - Nom de l'expéditeur
   - `{{company_name}}` - Nom de l'entreprise
   - `{{siren}}` - Numéro SIREN
   - `{{sector}}` - Secteur d'activité
   - `{{amount}}` - Montant du projet
   - `{{email}}` - Email
   - `{{phone}}` - Téléphone
   - `{{message}}` - Message
4. Copiez le Service ID, Template ID et Public Key dans votre fichier `.env`

## 🚀 Démarrage

### Mode Développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Build de Production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`

### Prévisualisation du Build

```bash
npm run preview
```

## 📁 Structure du Projet

```
finassur/
├── src/
│   ├── assets/
│   │   └── data/          # Données statiques (sectors, testimonials, solutions, blog)
│   ├── components/
│   │   ├── layout/        # Header, Footer
│   │   └── ui/            # Composants réutilisables (Cards, etc.)
│   ├── config/            # Configuration Auth0 et EmailJS
│   ├── hooks/             # Custom hooks (useFinancingCalculator, useScrollEffect)
│   ├── pages/             # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── Solutions.jsx
│   │   ├── Sectors.jsx
│   │   ├── WhyLeasing.jsx
│   │   ├── Process.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Blog.jsx
│   │   ├── Simulator.jsx
│   │   └── Contact.jsx
│   ├── utils/             # Utilitaires (validation, etc.)
│   ├── App.jsx            # Composant principal avec routing
│   ├── main.jsx           # Point d'entrée
│   └── index.css          # Styles globaux et configuration Tailwind
├── templates/             # Templates HTML originaux (référence)
├── public/                # Assets statiques
└── index.html             # HTML principal
```

## 🎨 Pages Disponibles

1. **Home** (`/`) - Page d'accueil avec hero, simulateur, secteurs, témoignages
2. **Solutions** (`/solutions`) - Toutes les solutions de financement
3. **Sectors** (`/sectors`) - Secteurs d'activité financés
4. **Why Leasing** (`/why-leasing`) - Avantages du leasing professionnel
5. **Process** (`/process`) - Processus de demande en 4 étapes
6. **Testimonials** (`/testimonials`) - Témoignages clients
7. **Blog** (`/blog`) - Articles et actualités
8. **Simulator** (`/simulator`) - Simulateur de financement interactif
9. **Contact** (`/contact`) - Formulaire de contact avec EmailJS

## 🎨 Design System

### Couleurs

- **Primary**: `#0A2540` (Bleu foncé)
- **Secondary**: `#6366F1` (Indigo)
- **Accent**: `#10B981` (Vert)

### Typographie

- **Font**: Inter (Google Fonts)
- **Poids**: 400, 500, 600, 700, 800, 900

### Classes Utilitaires Personnalisées

- `.btn-primary` - Bouton principal avec gradient
- `.btn-secondary` - Bouton secondaire
- `.btn-outline` - Bouton outline
- `.input-field` - Champ de formulaire
- `.premium-card` - Carte premium avec hover effect
- `.glass` - Effet glassmorphism
- `.gradient-text` - Texte avec gradient
- `.gradient-bg` - Fond avec gradient

## 🔧 Fonctionnalités Principales

### Simulateur de Financement
- Calcul en temps réel des mensualités
- Tableau d'amortissement
- Ajustement du montant et de la durée
- Taux d'intérêt configurable

### Formulaire de Contact
- Validation des champs
- Intégration EmailJS
- Messages de succès/erreur
- Protection RGPD

### Authentification Auth0
- Login/Logout
- Profil utilisateur
- Protection des routes (optionnel)

## 📱 Responsive Design

L'application est entièrement responsive et optimisée pour:
- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🔒 Sécurité

- Cryptage SSL
- Validation côté client et serveur
- Protection RGPD
- Variables d'environnement pour les clés sensibles

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Glissez-déposez le dossier dist/ sur Netlify
```

### Autres Plateformes

Le projet peut être déployé sur n'importe quelle plateforme supportant les applications React statiques.

## 📝 Configuration Supplémentaire

### Modifier les Données

Les données sont stockées dans `src/assets/data/`:
- `sectors.js` - Secteurs d'activité
- `testimonials.js` - Témoignages clients
- `solutions.js` - Solutions de financement
- `blog.js` - Articles de blog

### Personnaliser les Couleurs

Modifiez les couleurs dans `src/index.css`:

```css
@theme {
  --color-primary: #0A2540;
  --color-secondary: #6366F1;
  --color-accent: #10B981;
}
```

## 🐛 Dépannage

### Erreur Auth0
- Vérifiez que les URLs de callback sont correctement configurées
- Assurez-vous que le Domain et Client ID sont corrects

### Erreur EmailJS
- Vérifiez que le Service ID, Template ID et Public Key sont corrects
- Assurez-vous que le template contient toutes les variables nécessaires

### Erreur de Build
- Supprimez `node_modules` et `package-lock.json`
- Réinstallez les dépendances: `npm install`

## 📄 Licence

Ce projet est privé et propriétaire.

## 👥 Support

Pour toute question ou problème:
- Email: contact@finassur.fr
- Téléphone: 01 23 45 67 89

---

Développé avec ❤️ pour Finassur
