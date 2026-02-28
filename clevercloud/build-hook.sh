#!/bin/bash

# Script de pré-build pour Clever Cloud
# Ce script prépare Prisma pour PostgreSQL avant le build de Next.js

echo "🚀 Lancement du Hook de Pré-Build..."

# 1. Installer les dépendances si nécessaire
npm install

# 2. Remplacer dynamiquement le provider SQLite par PostgreSQL dans le schéma Prisma
# On utilise sed pour modifier le fichier schema.prisma uniquement pour le déploiement
echo "🛠️ Configuration de Prisma pour PostgreSQL..."
sed -i 's/provider = "sqlite"/provider = "postgresql"/g' prisma/schema.prisma

# 3. Générer le client Prisma
echo "📦 Génération du client Prisma..."
npx prisma generate

# 4. Appliquer les modifications sur la base PostgreSQL de production
echo "🗄️ Application du schéma sur la base de données..."
npx prisma db push --skip-generate

# 5. Build de l'application Next.js
echo "🏗️ Build de l'application Next.js..."
npm run build

echo "✅ Hook de Pré-Build terminé avec succès !"
