import { prisma } from './prisma';

/**
 * Synchronise un utilisateur Auth0 avec la base de données locale Prisma.
 * @param {Object} auth0User - L'objet utilisateur provenant de getSession().user
 */
export async function syncUser(auth0User) {
    if (!auth0User || !auth0User.sub) return null;

    return await prisma.user.upsert({
        where: { auth0Id: auth0User.sub },
        update: {
            email: auth0User.email,
            name: auth0User.name,
        },
        create: {
            auth0Id: auth0User.sub,
            email: auth0User.email,
            name: auth0User.name,
            role: 'client', // Par défaut
        },
    });
}

/**
 * Vérifie si l'utilisateur a le rôle admin.
 */
export async function isAdmin(auth0User) {
    if (!auth0User || !auth0User.sub) return false;

    const user = await prisma.user.findUnique({
        where: { auth0Id: auth0User.sub },
        select: { role: true },
    });

    return user?.role === 'admin';
}
