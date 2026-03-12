import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '@/lib/prisma';
import { syncUser } from '@/lib/users';
import { STATUS_TO_LEGACY } from '@/lib/statusMap';

/**
 * GET /api/applications
 * Liste les demandes (applications) de l'utilisateur connecté.
 * Lie les demandes anonymes (même email) à l'utilisateur à la première connexion.
 */
export async function GET() {
  try {
    const session = await getSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    const dbUser = await syncUser(session.user);
    if (!dbUser) {
      return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 });
    }

    // Lier les demandes anonymes (même email) à l'utilisateur
    await prisma.application.updateMany({
      where: {
        email: dbUser.email,
        userId: null,
      },
      data: { userId: dbUser.id },
    });

    const applications = await prisma.application.findMany({
      where: { userId: dbUser.id },
      orderBy: { createdAt: 'desc' },
      include: { documents: true },
    });

    const formatted = applications.map((a) => ({
      id: a.id,
      reference: a.reference,
      productType: a.productType,
      status: STATUS_TO_LEGACY[a.status] || a.status,
      companyName: a.companyName,
      amount: a.amount != null ? `${a.amount.toLocaleString()}€` : null,
      sector: a.sector,
      createdAt: a.createdAt,
      documents: (a.documents || []).map((d) => ({
        id: d.id,
        path: d.fileUrl,
        originalName: d.fileName,
        type: d.type,
      })),
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    console.error('GET /api/applications error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
