import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const About = () => {
  const values = [
    {
      icon: 'fa-handshake',
      title: 'Proximité',
      description: 'Un interlocuteur dédié pour chaque client, une relation de confiance durable.'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Expertise',
      description: '15 ans d\'expérience dans le financement professionnel et l\'assurance.'
    },
    {
      icon: 'fa-bolt',
      title: 'Réactivité',
      description: 'Réponse de principe sous 48h et accompagnement jusqu\'à la signature.'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Transparence',
      description: 'Des conditions claires, sans frais cachés, une relation basée sur l\'honnêteté.'
    }
  ];

  return (
    <PageTransition>
      <SEO
        title="À propos"
        description="Finassur, leader du financement professionnel depuis 2009. Découvrez notre histoire, nos valeurs et notre équipe."
      />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">À propos</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">
                Leader du financement professionnel depuis 2009
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Plus de 1200 entreprises nous font confiance pour financer leurs équipements professionnels. Découvrez notre histoire et nos engagements.
              </p>
            </div>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-primary mb-8">Notre histoire</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Créée en 2009, <strong className="text-primary">Finassur</strong> s'est imposée comme un acteur majeur du financement professionnel en France. 
                    Notre mission : accompagner les entreprises à tous les stades de leur développement en leur proposant des solutions de financement adaptées.
                  </p>
                  <p>
                    Crédit-bail, LOA, leasing opérationnel, crédit professionnel... Nous proposons une gamme complète de solutions pour financer 
                    tous types d'équipements : véhicules, matériel informatique, machines industrielles, équipements médicaux ou BTP.
                  </p>
                  <p>
                    Aujourd'hui, notre équipe de plus de 50 personnes accompagne chaque année des centaines d'entreprises, de la TPE à la grande entreprise, 
                    dans tous les secteurs d'activité.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Nos valeurs</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Les principes qui guident notre action au quotidien
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6">
                      <i className={`fa-solid ${value.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Chiffres clés */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <ScrollReveal>
                <div className="text-center p-8 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl">
                  <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Années d'expérience</div>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="text-center p-8 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl">
                  <div className="text-4xl font-bold text-secondary mb-2">1200+</div>
                  <div className="text-gray-600 font-medium">Entreprises accompagnées</div>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="text-center p-8 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl">
                  <div className="text-4xl font-bold text-secondary mb-2">50M€</div>
                  <div className="text-gray-600 font-medium">Financements accordés</div>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="text-center p-8 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl">
                  <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                  <div className="text-gray-600 font-medium">Clients satisfaits</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-primary mb-6">Prêt à développer votre entreprise ?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Contactez-nous pour une étude personnalisée de votre projet de financement.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Nous contacter
                </Link>
                <Link to="/simulator" className="btn-outline">
                  Simuler mon projet
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
