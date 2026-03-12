import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '@/lib/prisma';
import { isAdmin } from '@/lib/users';
import { STATUS_TO_LEGACY, STATUS_TO_DB, VALID_LEGACY_STATUSES } from '@/lib/statusMap';

export async function PATCH(request, { params }) {
  try {
    const session = await getSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const adminAccess = await isAdmin(session.user);
    if (!adminAccess) {
      return NextResponse.json({ error: 'Accès administrateur requis' }, { status: 403 });
    }

    const { id } = await params;
    const body = await request.json();
    const { status, adminNotes } = body;

    const updateData = {};
    if (status && VALID_LEGACY_STATUSES.includes(status)) {
      updateData.status = STATUS_TO_DB[status];
    }
    if (adminNotes !== undefined) updateData.adminNotes = adminNotes;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: 'Aucune modification' }, { status: 400 });
    }

    const application = await prisma.application.update({
      where: { id },
      data: updateData,
    });

    const response = {
      ...application,
      status: STATUS_TO_LEGACY[application.status] || application.status,
    };
    return NextResponse.json(response);
  } catch (err) {
    console.error('Admin demande PATCH error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
