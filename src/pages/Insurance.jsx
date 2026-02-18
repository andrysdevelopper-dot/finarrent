import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const Insurance = () => {
  const insuranceTypes = [
    {
      icon: 'fa-shield-halved',
      title: 'Responsabilité Civile Professionnelle',
      description: 'Protégez votre entreprise contre les dommages causés à des tiers dans le cadre de votre activité.',
      features: ['RC Pro obligatoire pour de nombreux métiers', 'Couverture des erreurs et négligences', 'Garantie défense pénale']
    },
    {
      icon: 'fa-user-tie',
      title: 'Assurance D&O (Dirigeants)',
      description: 'Protection des mandataires sociaux contre les poursuites liées à leur gestion.',
      features: ['Protection des dirigeants', 'Couverture des erreurs de gestion', 'Défense juridique incluse']
    },
    {
      icon: 'fa-truck',
      title: 'Assurance Flotte automobile',
      description: 'Couvrez votre parc de véhicules professionnels avec des formules adaptées.',
      features: ['Tous risques ou au tiers', 'Conducteurs tiers', 'Option bris de glace']
    },
    {
      icon: 'fa-building',
      title: 'Assurance Multirisque Professionnelle',
      description: 'Protection globale de vos locaux, stocks et équipements professionnels.',
      features: ['Incendie, vol, dégâts des eaux', 'Perte d\'exploitation', 'Contenu et bâtiment']
    },
    {
      icon: 'fa-briefcase-medical',
      title: 'Assurance Santé & Prévoyance',
      description: 'Complémentaire santé et prévoyance pour vos collaborateurs.',
      features: ['Complémentaire santé collective', 'Prévoyance (décès, invalidité)', 'Tarifs négociés']
    },
    {
      icon: 'fa-file-contract',
      title: 'Assurance Crédit & Garantie',
      description: 'Sécurisez vos créances et garantissez vos engagements.',
      features: ['Assurance-crédit export', 'Garantie à l\'export', 'Cautionnement']
    }
  ];

  return (
    <PageTransition>
      <SEO
        title="Assurance professionnelle"
        description="Finassur vous accompagne pour vos assurances professionnelles : RC Pro, D&O, flotte automobile, multirisque. Devis personnalisé sous 48h."
      />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
                <span className="text-accent font-semibold text-sm">Assurance professionnelle</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Protégez votre entreprise avec nos solutions d'assurance
              </h1>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                RC Pro, D&O, flotte automobile, multirisque... Des solutions sur-mesure pour couvrir tous les risques de votre activité. Devis personnalisé sous 48h.
              </p>
            </div>
          </div>
        </section>

        {/* Types d'assurance */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-4">Nos solutions d'assurance</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Une gamme complète pour protéger votre entreprise, vos dirigeants et vos équipements
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insuranceTypes.map((item, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                      <i className={`fa-solid ${item.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-gray-700">
                          <i className="fa-solid fa-check text-accent"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-8 text-center">Pourquoi choisir Finassur pour votre assurance ?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-magnifying-glass-chart text-accent text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">Analyse personnalisée</h3>
                      <p className="text-gray-600 text-sm">Nous analysons vos risques et vos besoins pour vous proposer la couverture la plus adaptée au meilleur prix.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-handshake text-secondary text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">Courtier multi-compagnies</h3>
                      <p className="text-gray-600 text-sm">Nous comparons les offres des meilleures compagnies pour vous garantir le meilleur rapport qualité-prix.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-clock text-accent text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">Réactivité</h3>
                      <p className="text-gray-600 text-sm">Devis sous 48h et accompagnement en cas de sinistre pour un règlement rapide.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-coins text-secondary text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">Financement + Assurance</h3>
                      <p className="text-gray-600 text-sm">Bénéficiez d'une offre globale : financement de vos équipements et assurance professionnelle en un seul interlocuteur.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-secondary to-accent">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-2xl sm:text-4xl font-bold mb-6">Obtenez votre devis assurance personnalisé</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Remplissez notre formulaire et recevez une proposition sous 48h. Sans engagement.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/contact"
                  state={{ fromInsurance: true }}
                  className="px-8 py-4 bg-white text-secondary font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Demander un devis assurance
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
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

export default Insurance;
