import { getSession } from '@auth0/nextjs-auth0';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { syncUser } from '@/lib/users';
import DossierDetailClient from '@/components/espace/DossierDetailClient';

const STATUS_TO_LEGACY = {
  PENDING: 'en_attente',
  REVIEWING: 'en_cours',
  DOCUMENTS_NEEDED: 'documents_manquants',
  QUOTE_SENT: 'devis_envoye',
  QUOTE_ACCEPTED: 'devis_accepte',
  PENDING_SIGNATURE: 'signature_en_attente',
  SIGNED: 'signe',
  TRANSMITTED: 'transmis',
  APPROVED: 'validee',
  REJECTED: 'refusee',
  COMPLETED: 'finalise',
};

export default async function DossierDetailPage({ params }) {
  const { id } = await params;
  const session = await getSession();
  if (!session?.user) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] pt-32 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 mb-4">Connectez-vous pour accéder à ce dossier.</p>
          <a
            href={`/api/auth/login?returnTo=/espace/${id}`}
            className="btn-primary inline-flex items-center gap-2"
          >
            <i className="fa-solid fa-right-to-bracket"></i>
            Se connecter
          </a>
        </div>
      </div>
    );
  }

  const dbUser = await syncUser(session.user);

  const application = await prisma.application.findUnique({
    where: { id },
    include: { documents: true },
  });

  if (!application || application.userId !== dbUser?.id) {
    notFound();
  }

  const dossier = {
    ...application,
    status: STATUS_TO_LEGACY[application.status] || application.status,
    amount: application.amount != null ? `${application.amount.toLocaleString()}€` : null,
    documents: (application.documents || []).map((d) => ({
      ...d,
      path: d.fileUrl,
      originalName: d.fileName,
    })),
  };

  return (
    <DossierDetailClient
      dossier={dossier}
      user={session.user}
    />
  );
}
