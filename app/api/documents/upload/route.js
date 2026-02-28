import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { syncUser } from '@/lib/users';

export async function POST(request) {
    try {
        const session = await getSession();
        if (!session?.user) {
            return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
        }

        const data = await request.formData();
        const file = data.get('file');
        const demandeId = data.get('demandeId');
        const type = data.get('type') || 'autre';

        if (!file || !demandeId) {
            return NextResponse.json({ error: 'Fichier ou ID de demande manquant' }, { status: 400 });
        }

        // Vérifier l'existence de la demande et l'autorisation
        const demande = await prisma.demandeFinancement.findUnique({
            where: { id: demandeId },
            include: { user: true }
        });

        if (!demande) {
            return NextResponse.json({ error: 'Demande introuvable' }, { status: 404 });
        }

        const dbUser = await syncUser(session.user);

        // Autoriser si propriétaire ou admin
        if (demande.userId !== dbUser.id && dbUser.role !== 'admin') {
            return NextResponse.json({ error: 'Accès non autorisé à cette demande' }, { status: 403 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Générer un nom de fichier unique
        const timestamp = Date.now();
        const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
        const uniqueFilename = `${timestamp}_${sanitizedFilename}`;
        const uploadPath = join(process.cwd(), 'public', 'uploads', uniqueFilename);

        await writeFile(uploadPath, buffer);

        // Enregistrer en base de données
        const document = await prisma.document.create({
            data: {
                filename: uniqueFilename,
                originalName: file.name,
                path: `/uploads/${uniqueFilename}`,
                mimeType: file.type,
                type: type,
                fileSize: file.size,
                demandeId: demandeId,
            }
        });

        return NextResponse.json({ success: true, document });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Erreur lors de l upload' }, { status: 500 });
    }
}
