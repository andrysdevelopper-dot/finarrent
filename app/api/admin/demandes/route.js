import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '@/lib/prisma';
import { isAdmin } from '@/lib/users';
import { STATUS_TO_LEGACY, PRODUCT_TO_REQUEST } from '@/lib/statusMap';

export async function GET() {
  try {
    const session = await getSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const adminAccess = await isAdmin(session.user);
    if (!adminAccess) {
      return NextResponse.json({ error: 'Accès administrateur requis' }, { status: 403 });
    }

    const applications = await prisma.application.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { name: true, email: true, role: true } },
        documents: true,
      },
    });

    const formatted = applications.map((a) => ({
      ...a,
      status: STATUS_TO_LEGACY[a.status] || a.status,
      requestType: PRODUCT_TO_REQUEST[a.productType] || a.productType,
      message: a.description,
      amount: a.amount != null ? `${a.amount.toLocaleString()}€` : a.amount,
      documents: (a.documents || []).map((doc) => ({
        ...doc,
        path: doc.fileUrl,
        originalName: doc.fileName,
      })),
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    console.error('Admin demandes GET error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
