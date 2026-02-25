import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const demandes = await prisma.demandeFinancement.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(demandes);
  } catch (err) {
    console.error('Admin demandes GET error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
