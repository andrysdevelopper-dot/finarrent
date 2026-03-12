import { execSync } from 'child_process';
import fs from 'fs';

/**
 * Custom start script for Clever Cloud (inspired by slformations)
 */

// 1. Detect environment and set defaults
process.env.PORT = process.env.PORT || '8080';
process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

console.log(`🚀 Starting Next.js application on ${process.env.HOSTNAME}:${process.env.PORT}...`);

try {
    // 2. Try Running standalone server if available
    const standaloneServer = '.next/standalone/server.js';
    if (fs.existsSync(standaloneServer)) {
        console.log('🚀 Running standalone server...');
        execSync(`node ${standaloneServer}`, { stdio: 'inherit' });
    } else {
        // Fallback for local or Non-standalone
        console.log('📦 Standalone server not found, falling back to next start...');
        const hostArg = process.env.HOSTNAME === '0.0.0.0' ? '-H 0.0.0.0' : '';
        execSync(`npx next start -p ${process.env.PORT} ${hostArg}`, { stdio: 'inherit' });
    }
} catch (error) {
    console.error('❌ Failed to start application:', error.message);
    process.exit(1);
}
