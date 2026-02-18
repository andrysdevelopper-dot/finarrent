import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';
import FAQItem from '../components/ui/FAQItem';

const FAQ = () => {
  const faqItems = [
    {
      question: "Quel est le délai de réponse pour une demande de financement ?",
      answer: "Nous nous engageons à vous donner une réponse de principe sous 48h ouvrées. Une fois votre dossier complet, la validation définitive intervient généralement sous 5 à 7 jours."
    },
    {
      question: "Ai-je besoin d'un apport pour financer mon équipement ?",
      answer: "Non, le crédit-bail et la LOA permettent de financer 100% du montant de votre équipement sans apport initial. Cela préserve votre trésorerie pour d'autres investissements."
    },
    {
      question: "Quels types d'équipements puis-je financer ?",
      answer: "Nous finançons tous types d'équipements professionnels : véhicules, matériel informatique, machines industrielles, équipements médicaux, matériel BTP, etc. De 3 000€ à 500 000€."
    },
    {
      question: "La simulation est-elle engageante ?",
      answer: "Non, la simulation en ligne est totalement gratuite et sans engagement. Elle vous donne une estimation indicative. Seule une étude personnalisée de votre dossier aboutira à une offre ferme."
    },
    {
      question: "Quelle est la différence entre crédit-bail et LOA ?",
      answer: "Le crédit-bail est une location avec option d'achat en fin de contrat, les loyers sont 100% déductibles. La LOA (Location avec Option d'Achat) fonctionne de manière similaire mais est souvent utilisée pour les véhicules. Les deux solutions préservent votre trésorerie."
    },
    {
      question: "Puis-je rembourser par anticipation ?",
      answer: "Oui, le remboursement anticipé est possible sur la plupart de nos solutions. Des conditions peuvent s'appliquer selon le type de financement. Contactez-nous pour une étude personnalisée."
    },
    {
      question: "Quels documents sont nécessaires pour une demande ?",
      answer: "Pour une première étude, nous avons besoin de votre raison sociale, SIREN, secteur d'activité et montant du projet. Pour aller plus loin, nous vous demanderons des documents complémentaires (bilan, KBis, etc.)."
    }
  ];

  return (
    <PageTransition>
      <SEO
        title="FAQ"
        description="Questions fréquentes sur le financement professionnel, crédit-bail, LOA et nos solutions Finassur."
      />
      <div className="min-h-screen">
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">FAQ</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">
                Questions fréquentes
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Retrouvez les réponses aux questions les plus courantes sur nos solutions de financement.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <ScrollReveal key={index}>
                    <FAQItem
                      question={item.question}
                      answer={item.answer}
                      defaultOpen={index === 0}
                    />
                  </ScrollReveal>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">Vous n'avez pas trouvé votre réponse ?</p>
                <Link to="/contact" className="btn-primary">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default FAQ;