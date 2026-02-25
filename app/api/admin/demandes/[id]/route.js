import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '@/lib/prisma';

const VALID_STATUSES = ['en_attente', 'en_cours', 'validee', 'refusee'];

export async function PATCH(request, { params }) {
  try {
    const session = await getSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { status, adminNotes } = body;

    const updateData = {};
    if (status && VALID_STATUSES.includes(status)) updateData.status = status;
    if (adminNotes !== undefined) updateData.adminNotes = adminNotes;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: 'Aucune modification' }, { status: 400 });
    }

    const demande = await prisma.demandeFinancement.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(demande);
  } catch (err) {
    console.error('Admin demande PATCH error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
