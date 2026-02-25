import FirstVisitSplash from '@/components/FirstVisitSplash';
import HomeClient from '@/components/pages/HomeClient';

export const metadata = {
  title: 'Financement professionnel - Crédit-bail & LOA | Finassur',
  description: 'Finassur accompagne les entreprises : crédit-bail, LOA, solutions de financement. De 3 000€ à 500 000€, réponse en 48h. Simulez votre projet en ligne.',
};

export default function Home() {
  return (
    <FirstVisitSplash>
      <HomeClient />
    </FirstVisitSplash>
  );
}
