#!/bin/bash

# Script de build pour Clever Cloud (LF line endings)
echo "🚀 Lancement du build personnalisé..."

# 1. Configuration PostgreSQL
echo "🛠️ Configuration de Prisma pour PostgreSQL..."
sed -i 's/provider = "sqlite"/provider = "postgresql"/g' prisma/schema.prisma

# 2. Génération et Build
echo "🏗️ Build de l'application..."
npm run build

# 3. Synchronisation DB
echo "🗄️ Application du schéma sur PostgreSQL..."
npx prisma db push --accept-data-loss --skip-generate

echo "✅ Build terminé !"
