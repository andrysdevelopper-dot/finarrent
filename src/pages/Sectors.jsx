import SectorCard from '../components/ui/SectorCard';
import { sectorsData } from '../assets/data/sectors';
import { Link } from 'react-router-dom';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const Sectors = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Nos Secteurs</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">
                Financement adapté à chaque secteur d'activité
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                De l'industrie au médical, du BTP à l'informatique, nous finançons tous vos équipements professionnels.
              </p>
            </div>
          </div>
        </section>

        {/* All Sectors Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectorsData.map((sector) => (
                <ScrollReveal key={sector.id}>
                  <SectorCard sector={sector} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Nos chiffres clés par secteur</h2>
            </div>
            
            <ScrollReveal>
              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-2">🏗️</div>
                  <div className="text-3xl font-bold text-primary mb-2">35%</div>
                  <div className="text-gray-600">BTP & Construction</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-2">🏥</div>
                  <div className="text-3xl font-bold text-primary mb-2">25%</div>
                  <div className="text-gray-600">Médical & Santé</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-2">💻</div>
                  <div className="text-3xl font-bold text-primary mb-2">20%</div>
                  <div className="text-gray-600">IT & Tech</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-2">🚛</div>
                  <div className="text-3xl font-bold text-primary mb-2">20%</div>
                  <div className="text-gray-600">Transport</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Votre secteur n'est pas listé ?</h2>
              <p className="text-xl text-white/90 mb-8">
                Nous finançons tous types d'équipements professionnels. Contactez-nous pour une solution sur-mesure.
              </p>
              <Link to="/contact" className="px-8 py-4 bg-white text-secondary font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block">
                Contactez-nous
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Sectors;
