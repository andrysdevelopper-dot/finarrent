import ProcessStep from '../components/ui/ProcessStep';
import { Link } from 'react-router-dom';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const Process = () => {
  const steps = [
    {
      title: 'Simulation en ligne',
      description: 'Remplissez notre formulaire et obtenez une estimation immédiate de votre financement',
      icon: 'fa-file-lines',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary'
    },
    {
      title: 'Étude personnalisée',
      description: 'Un conseiller expert analyse votre dossier et vous propose la meilleure solution',
      icon: 'fa-user-tie',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent'
    },
    {
      title: 'Validation rapide',
      description: 'Réponse de principe sous 48h et validation définitive en quelques jours',
      icon: 'fa-check-double',
      iconBg: 'bg-indigo-500/10',
      iconColor: 'text-indigo-600'
    },
    {
      title: 'Livraison équipement',
      description: 'Déblocage des fonds et réception de votre matériel professionnel',
      icon: 'fa-truck-fast',
      iconBg: 'bg-orange-500/10',
      iconColor: 'text-orange-600'
    }
  ];

  const documents = [
    { name: 'Pièce d\'identité du dirigeant', icon: 'fa-id-card' },
    { name: 'Kbis de moins de 3 mois', icon: 'fa-file-contract' },
    { name: 'Derniers bilans comptables', icon: 'fa-file-invoice' },
    { name: 'Devis du fournisseur', icon: 'fa-file-lines' },
    { name: 'RIB de l\'entreprise', icon: 'fa-building-columns' }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Notre Processus</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">
                Un processus simple et rapide
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                En 4 étapes, obtenez votre financement et recevez votre équipement professionnel.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
              {steps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <ProcessStep step={step} index={index} isLast={index === steps.length - 1} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">Documents nécessaires</h2>
                <p className="text-xl text-gray-600">Préparez ces documents pour accélérer votre dossier</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {documents.map((doc, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className={`fa-solid ${doc.icon} text-secondary text-xl`}></i>
                      </div>
                      <span className="font-semibold text-gray-900">{doc.name}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">Délais moyens</h2>
              </div>

              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-center text-white">
                        <div className="text-2xl font-bold">J+0</div>
                        <div className="text-xs">Demande</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-xl p-4">
                      <div className="font-bold text-gray-900 mb-1">Soumission du dossier</div>
                      <div className="text-sm text-gray-600">Remplissage du formulaire en ligne</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-center text-white">
                        <div className="text-2xl font-bold">J+2</div>
                        <div className="text-xs">Réponse</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-xl p-4">
                      <div className="font-bold text-gray-900 mb-1">Réponse de principe</div>
                      <div className="text-sm text-gray-600">Accord ou demande de compléments</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-center text-white">
                        <div className="text-2xl font-bold">J+5</div>
                        <div className="text-xs">Validation</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-xl p-4">
                      <div className="font-bold text-gray-900 mb-1">Validation définitive</div>
                      <div className="text-sm text-gray-600">Signature électronique du contrat</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-center text-white">
                        <div className="text-2xl font-bold">J+7</div>
                        <div className="text-xs">Livraison</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-xl p-4">
                      <div className="font-bold text-gray-900 mb-1">Déblocage des fonds</div>
                      <div className="text-sm text-gray-600">Réception de votre équipement</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Prêt à commencer ?</h2>
              <p className="text-xl text-white/90 mb-8">
                Lancez votre demande de financement maintenant et obtenez une réponse en 48h.
              </p>
              <Link to="/contact" className="px-8 py-4 bg-white text-secondary font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block">
                Démarrer ma demande
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Process;
