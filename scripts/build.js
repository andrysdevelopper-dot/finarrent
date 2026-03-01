#!/usr/bin/env node

/**
 * Custom build script for Clever Cloud (inspired by slformations)
 * Handles:
 * 1. Switching Prisma provider from SQLite to PostgreSQL
 * 2. Prisma generation
 * 3. Database synchronization
 * 4. Next.js build
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🏗️ Starting build process...');

try {
    // 1. Switch to PostgreSQL for production
    const schemaPath = path.join(process.cwd(), 'prisma', 'schema.prisma');
    if (fs.existsSync(schemaPath)) {
        console.log('🛠️ Configuring Prisma for PostgreSQL...');
        let schemaContent = fs.readFileSync(schemaPath, 'utf8');
        schemaContent = schemaContent.replace(/provider = "sqlite"/g, 'provider = "postgresql"');
        fs.writeFileSync(schemaPath, schemaContent);
    }

    // 2. Generate Prisma Client
    console.log('📦 Generating Prisma Client...');
    execSync('npx prisma generate', { stdio: 'inherit' });

    // 3. Database Sync
    console.log('🗄️ Synchronizing database schema...');
    try {
        execSync('npx prisma db push --accept-data-loss --skip-generate', { stdio: 'inherit' });
    } catch (dbError) {
        console.warn('⚠️ Warning: Database sync encountered an issue, but continuing build...', dbError.message);
    }

    // 4. Build Next.js
    console.log('⚡ Building Next.js application...');
    execSync('npm run build:next', { stdio: 'inherit' });

    console.log('✅ Build completed successfully!');
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}
