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
    const schemaPath = path.join(process.cwd(), 'prisma', 'schema.prisma');

    try {
        // 1. Generate Prisma Client
        console.log('📦 Generating Prisma Client...');
        execSync('npx prisma generate', { stdio: 'inherit' });

        // 2. Database migrations (production-safe)
        console.log('🗄️ Running database migrations...');
        try {
            execSync('npx prisma migrate deploy', { stdio: 'inherit' });
        } catch (dbError) {
            console.warn('⚠️ Warning: Database migration encountered an issue, but continuing build...', dbError.message);
        }

        // 3. Build Next.js
        console.log('⚡ Building Next.js application...');
        execSync('npm run build:next', { stdio: 'inherit' });

        // 4. Handling standalone mode assets
        console.log('📂 Copying static assets to standalone folder...');
        const standalonePath = path.join(process.cwd(), '.next', 'standalone');
        if (fs.existsSync(standalonePath)) {
            // ... (copying logic)
            const publicSrc = path.join(process.cwd(), 'public');
            const publicDst = path.join(standalonePath, 'public');
            if (fs.existsSync(publicSrc)) {
                fs.cpSync(publicSrc, publicDst, { recursive: true });
                console.log('✅ Public assets copied.');
            }

            const staticSrc = path.join(process.cwd(), '.next', 'static');
            const staticDst = path.join(standalonePath, '.next', 'static');
            if (fs.existsSync(staticSrc)) {
                fs.cpSync(staticSrc, staticDst, { recursive: true });
                console.log('✅ Static Next.js assets copied.');
            }
        }
    } finally {
        // No need to revert anymore as we are staying with PostgreSQL
    }

    console.log('✅ Build completed successfully!');
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}
