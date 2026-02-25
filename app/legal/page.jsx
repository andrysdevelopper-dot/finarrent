export const metadata = { title: 'Mentions légales | Finassur', description: 'Mentions légales Finassur.' };

export default function LegalPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Mentions légales</h1>
        <div className="prose prose-lg text-gray-600">
          <p>Finassur SAS - Capital social 500 000€</p>
          <p>SIREN: 123 456 789 - RCS Paris</p>
          <p>Siège social: 123 Avenue des Champs-Élysées, 75008 Paris</p>
        </div>
      </div>
    </div>
  );
}
