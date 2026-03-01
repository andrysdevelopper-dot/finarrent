import { execSync } from 'child_process';
import fs from 'fs';

/**
 * Custom start script for Clever Cloud (inspired by slformations)
 */

const nextDir = '.next';

if (!fs.existsSync(nextDir)) {
    console.log('🏗️ .next directory not found. Running build...');
    try {
        execSync('npm run build', { stdio: 'inherit' });
    } catch (error) {
        console.error('❌ Build failed during startup:', error);
        process.exit(1);
    }
}

console.log('🚀 Starting Next.js application...');
try {
    // We try to use the standalone server if possible, otherwise next start
    const standaloneServer = '.next/standalone/server.js';
    if (fs.existsSync(standaloneServer)) {
        console.log('🚀 Running standalone server...');
        execSync(`node ${standaloneServer}`, { stdio: 'inherit' });
    } else {
        execSync('npx next start -p 8080', { stdio: 'inherit' });
    }
} catch (error) {
    console.error('❌ Failed to start application:', error.message);
    process.exit(1);
}
