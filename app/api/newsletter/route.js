import { NextResponse } from 'next/server';
import { validateEmail } from '@/utils/validation';

/**
 * POST /api/newsletter
 * Inscription newsletter.
 * Phase 2 : stocker en DB + envoi de confirmation via Nodemailer.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const email = body?.email?.trim();

    if (!email) {
      return NextResponse.json({ error: 'Email requis' }, { status: 400 });
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    // TODO Phase 2 : stocker en DB + envoi via Nodemailer
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
