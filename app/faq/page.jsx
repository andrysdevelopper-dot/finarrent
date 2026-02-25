import FAQItem from '@/components/ui/FAQItem';

export const metadata = { title: 'FAQ | Finassur', description: 'Questions fréquentes sur le financement professionnel.' };

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-5xl font-bold text-primary mb-6 text-center">Questions fréquentes</h1>
        <div className="space-y-4 mt-12">
          <FAQItem question="Quel est le délai de réponse ?" answer="Réponse de principe sous 48h ouvrées." />
          <FAQItem question="Ai-je besoin d'un apport ?" answer="Non, le crédit-bail et la LOA permettent de financer 100% sans apport." />
          <FAQItem question="Quels équipements puis-je financer ?" answer="Véhicules, matériel informatique, machines, équipements médicaux, BTP, etc. De 3 000€ à 500 000€." />
        </div>
      </div>
    </div>
  );
}
