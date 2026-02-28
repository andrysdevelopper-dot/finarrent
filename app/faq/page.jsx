import FAQItem from '@/components/ui/FAQItem';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Link from 'next/link';

export const metadata = {
  title: 'FAQ | Finassur - Vos questions sur le financement pro',
  description: 'Retrouvez toutes les réponses à vos questions sur le crédit-bail, la LOA, l\'assurance professionnelle et le processus de demande.',
};

const faqs = [
  {
    category: 'Fonctionnement',
    items: [
      { q: "Qu'est-ce que le crédit-bail ?", a: "Le crédit-bail (ou leasing) est un contrat de location de matériel professionnel avec une option d'achat à la fin. Il permet de financer 100% de l'investissement sans apport." },
      { q: "Quel est le délai de réponse ?", a: "Nous fournissons une réponse de principe sous 48h ouvrées. Une fois le dossier complet, la validation définitive et le déblocage des fonds interviennent généralement sous 5 à 7 jours." },
      { q: "Quelle est la durée possible du financement ?", a: "La durée varie généralement entre 24 et 84 mois (2 à 7 ans), selon le type de matériel et la stratégie fiscale de votre entreprise." },
    ]
  },
  {
    category: 'Éligibilité',
    items: [
      { q: "Puis-je financer du matériel d'occasion ?", a: "Oui, nous finançons le matériel neuf comme d'occasion, sous réserve que le vendeur soit un professionnel capable de fournir une facture avec TVA." },
      { q: "Acceptez-vous les entreprises en création ?", a: "Oui, nous accompagnons les créateurs d'entreprise (start-ups, artisans, professions libérales) sur présentation d'un business plan et d'un prévisionnel cohérents." },
      { q: "Quel est le montant minimum ?", a: "Le montant minimum de financement est de 3 000€. Nous accompagnons les projets jusqu'à 500 000€ et plus via nos partenaires bancaires." },
    ]
  },
  {
    category: 'Documents & Garanties',
    items: [
      { q: "Quels sont les documents à fournir ?", a: "Pour une étude rapide : les 3 derniers bilans (si existants), un RIB, une pièce d'identité du dirigeant et le devis du matériel à financer." },
      { q: "Des garanties personnelles sont-elles demandées ?", a: "Cela dépend du dossier. Dans de nombreux cas de crédit-bail, le matériel lui-même sert de garantie. Une caution personnelle peut être demandée pour les jeunes entreprises." },
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Questions Fréquentes</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir pour financer et assurer votre activité en toute sérénité.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            {faqs.map((cat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-secondary border-l-4 border-secondary pl-4">{cat.category}</h2>
                  <div className="space-y-4">
                    {cat.items.map((item, i) => (
                      <FAQItem key={i} question={item.q} answer={item.a} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Fallback CTA */}
          <ScrollReveal delay={0.4}>
            <div className="mt-20 bg-primary rounded-3xl p-8 sm:p-12 text-white text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
              <p className="text-white/80 mb-8">
                Nos conseillers sont à votre disposition pour répondre à toutes vos interrogations spécifiques.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-secondary px-8 py-3 rounded-xl font-bold">
                  Nous contacter
                </Link>
                <a href="tel:0123456789" className="flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 transition-all rounded-xl border border-white/30 font-bold">
                  <i className="fa-solid fa-phone"></i>
                  01 23 45 67 89
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
