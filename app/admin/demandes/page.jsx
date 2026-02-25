import DemandesClient from './DemandesClient';

export const metadata = {
  title: 'Demandes de financement | Admin Finassur',
  description: 'Gérer les demandes de financement',
};

export default function AdminDemandesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">Demandes de financement</h1>
      <DemandesClient />
    </div>
  );
}
