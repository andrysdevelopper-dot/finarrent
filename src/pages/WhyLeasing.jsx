import { Link } from 'react-router-dom';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const WhyLeasing = () => {
  const advantages = [
    {
      icon: 'fa-coins',
      color: 'from-accent to-emerald-600',
      title: 'Préservez votre trésorerie',
      description: 'Financez vos équipements sans apport et conservez votre capacité d\'investissement pour d\'autres projets stratégiques.',
      details: [
        'Pas d\'apport initial requis',
        'Mensualités fixes et prévisibles',
        'Conservation de votre capacité d\'emprunt',
        'Optimisation de votre fonds de roulement'
      ]
    },
    {
      icon: 'fa-chart-line',
      color: 'from-secondary to-indigo-600',
      title: 'Avantages fiscaux optimisés',
      description: 'Les loyers sont déductibles à 100% de votre résultat, réduisant ainsi votre charge fiscale globale.',
      details: [
        'Déductibilité totale des loyers',
        'Optimisation de votre IS ou IR',
        'Pas d\'immobilisation au bilan',
        'Ratios financiers préservés'
      ]
    },
    {
      icon: 'fa-shield-halved',
      color: 'from-indigo-500 to-indigo-600',
      title: 'Flexibilité et maîtrise du budget',
      description: 'Mensualités fixes adaptées à votre activité avec possibilité de rachat ou renouvellement en fin de contrat.',
      details: [
        'Durées de 12 à 84 mois',
        'Option d\'achat en fin de contrat',
        'Possibilité de renouvellement',
        'Adaptation à votre saisonnalité'
      ]
    },
    {
      icon: 'fa-clock',
      color: 'from-orange-500 to-orange-600',
      title: 'Rapidité de mise en place',
      description: 'Réponse de principe en 48h et déblocage des fonds sous 7 jours pour concrétiser rapidement vos projets.',
      details: [
        'Réponse sous 48h',
        'Dossier simplifié',
        'Déblocage rapide',
        'Accompagnement personnalisé'
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Expertise financière</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">
                Pourquoi choisir le leasing professionnel ?
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Le crédit-bail et la LOA offrent des avantages fiscaux et financiers significatifs pour développer votre entreprise sans mobiliser votre trésorerie.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <i className={`fa-solid ${advantage.icon} text-white text-3xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{advantage.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{advantage.description}</p>
                    <ul className="space-y-3">
                      {advantage.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <i className="fa-solid fa-check text-accent mt-1"></i>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Leasing vs Achat comptant</h2>
              <p className="text-xl text-gray-600">Comparez les deux options</p>
            </div>

            <ScrollReveal>
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-secondary">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fa-solid fa-star text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Leasing</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-check text-accent mt-1"></i>
                      <span>Pas d'apport initial</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-check text-accent mt-1"></i>
                      <span>Loyers 100% déductibles</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-check text-accent mt-1"></i>
                      <span>Trésorerie préservée</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-check text-accent mt-1"></i>
                      <span>Flexibilité en fin de contrat</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-check text-accent mt-1"></i>
                      <span>Renouvellement facilité</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fa-solid fa-shopping-cart text-gray-600 text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Achat comptant</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-times text-red-500 mt-1"></i>
                      <span>Mobilisation de trésorerie</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-times text-red-500 mt-1"></i>
                      <span>Amortissement sur plusieurs années</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-check text-accent mt-1"></i>
                      <span>Propriété immédiate</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-times text-red-500 mt-1"></i>
                      <span>Risque d'obsolescence</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-times text-red-500 mt-1"></i>
                      <span>Revente à gérer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Convaincu ? Lancez-vous !</h2>
              <p className="text-xl text-white/90 mb-8">
                Obtenez votre financement en quelques clics et développez votre activité dès maintenant.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/simulator" className="px-8 py-4 bg-white text-secondary font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Simuler mon financement
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30">
                  Parler à un conseiller
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default WhyLeasing;
