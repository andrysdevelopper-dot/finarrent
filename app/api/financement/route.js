import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateReference } from '@/lib/reference';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { checkRateLimit } from '@/lib/rateLimit';
import { validateEmail, validatePhone, validateSIREN } from '@/utils/validation';

const AMOUNTS = [
  '3 000€ - 10 000€',
  '10 000€ - 30 000€',
  '30 000€ - 50 000€',
  '50 000€ - 100 000€',
  '100 000€ - 200 000€',
  '200 000€ - 500 000€',
  'Plus de 500 000€',
];

const SECTORS = [
  'BTP & Construction',
  'Médical & Santé',
  'Informatique & Tech',
  'Transport & Logistique',
  'Industrie',
  'Services',
  'Autre',
];

function getClientIp(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

function validateBody(body) {
  const errors = {};
  const required = [
    'requestType',
    'companyName',
    'siren',
    'sector',
    'amount',
    'firstName',
    'lastName',
    'email',
    'phone',
    'consent',
  ];

  for (const field of required) {
    if (!body[field] || (typeof body[field] === 'string' && !body[field].trim())) {
      if (field === 'recaptchaToken') continue;
      if (field === 'consent') {
        if (!body.consent) errors.consent = 'Vous devez accepter la politique de confidentialité';
      } else {
        errors[field] = 'Ce champ est requis';
      }
    }
  }

  if (body.email && !validateEmail(body.email)) errors.email = 'Email invalide';
  if (body.phone && !validatePhone(body.phone)) errors.phone = 'Numéro de téléphone invalide';
  if (body.siren && !validateSIREN(body.siren)) errors.siren = 'SIREN invalide (9 chiffres requis)';
  if (body.requestType && !['financement', 'assurance'].includes(body.requestType)) {
    errors.requestType = 'Type invalide';
  }
  if (body.amount && !AMOUNTS.includes(body.amount)) errors.amount = 'Montant invalide';
  if (body.sector && !SECTORS.includes(body.sector)) errors.sector = 'Secteur invalide';

  if (body.website) errors._spam = 'Requête rejetée';

  return errors;
}

export async function POST(request) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Trop de demandes. Réessayez dans 1 heure.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    const errors = validateBody(body);
    if (Object.keys(errors).length > 0) {
      if (errors._spam) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ errors }, { status: 400 });
    }

    const recaptchaResult = await verifyRecaptcha(body.recaptchaToken || '');
    if (!recaptchaResult.success) {
      return NextResponse.json(
        { error: 'Vérification de sécurité échouée. Réessayez.' },
        { status: 400 }
      );
    }

    let reference;
    let attempts = 0;
    const maxAttempts = 5;

    do {
      reference = generateReference();
      const existing = await prisma.demandeFinancement.findUnique({
        where: { reference },
      });
      if (!existing) break;
      attempts++;
    } while (attempts < maxAttempts);

    if (attempts >= maxAttempts) {
      return NextResponse.json(
        { error: 'Erreur technique. Veuillez réessayer.' },
        { status: 500 }
      );
    }

    await prisma.demandeFinancement.create({
      data: {
        reference,
        requestType: body.requestType,
        companyName: body.companyName.trim(),
        siren: body.siren.replace(/\s/g, ''),
        sector: body.sector,
        amount: body.amount,
        equipmentType: body.equipmentType || null,
        firstName: body.firstName.trim(),
        lastName: body.lastName.trim(),
        email: body.email.trim(),
        phone: body.phone.trim(),
        message: body.message?.trim() || null,
        ipAddress: ip !== 'unknown' ? ip : null,
        userAgent: request.headers.get('user-agent')?.slice(0, 500) || null,
      },
    });

    return NextResponse.json({
      success: true,
      reference,
      message: `Votre demande ${reference} a été enregistrée. Nous vous recontacterons sous 48h.`,
    });
  } catch (err) {
    console.error('API financement error:', err);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
