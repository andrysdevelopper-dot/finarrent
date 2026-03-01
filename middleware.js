import { getSession } from '@auth0/nextjs-auth0/edge';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    const { pathname } = request.nextUrl;

    // 1. Ne pas intercepter les routes Auth0 pour éviter les boucles
    if (pathname.startsWith('/api/auth') || pathname.startsWith('/_next') || pathname === '/favicon.ico') {
        return NextResponse.next();
    }

    // 2. Protéger les routes sensibles (Admin et Espace Client)
    if (pathname.startsWith('/admin') || pathname.startsWith('/espace')) {
        const session = await getSession(request);

        if (!session) {
            const loginUrl = new URL('/api/auth/login', request.url);
            loginUrl.searchParams.set('returnTo', pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/espace/:path*',
    ],
};
