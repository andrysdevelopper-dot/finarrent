import SolutionCard from '../components/ui/SolutionCard';
import SEO from '../components/utils/SEO';
import { solutionsData } from '../assets/data/solutions';
import { Link } from 'react-router-dom';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const Solutions = () => {
  return (
    <PageTransition>
      <SEO
        title="Solutions de financement"
        description="Crédit-bail, LOA, crédit professionnel. Découvrez nos solutions de financement adaptées aux équipements professionnels."
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Nos Solutions</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">
                Des solutions de financement adaptées à vos besoins
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Crédit-bail, LOA, leasing opérationnel... Découvrez toutes nos solutions pour financer vos équipements professionnels.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionsData.map((solution) => (
                <ScrollReveal key={solution.id}>
                  <SolutionCard solution={solution} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Comparatif des solutions</h2>
              <p className="text-xl text-gray-600">Trouvez la solution la plus adaptée à votre situation</p>
            </div>

            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-secondary to-accent text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Critère</th>
                      <th className="px-6 py-4 text-center">Crédit-bail</th>
                      <th className="px-6 py-4 text-center">LOA</th>
                      <th className="px-6 py-4 text-center">Crédit Pro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold">Propriété immédiate</td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-times text-red-500"></i></td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-times text-red-500"></i></td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-check text-accent"></i></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Déductibilité fiscale</td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-check text-accent"></i></td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-check text-accent"></i></td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-minus text-gray-400"></i></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Sans apport</td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-check text-accent"></i></td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-check text-accent"></i></td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-minus text-gray-400"></i></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Option d'achat</td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-check text-accent"></i></td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-check text-accent"></i></td>
                      <td className="px-6 py-4 text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Préservation trésorerie</td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-check text-accent"></i></td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-check text-accent"></i></td>
                      <td className="px-6 py-4 text-center"><i className="fa-solid fa-minus text-gray-400"></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary to-accent rounded-3xl p-6 sm:p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Besoin de conseils ?</h2>
              <p className="text-xl text-white/90 mb-8">
                Nos experts vous accompagnent pour choisir la solution la plus adaptée à votre projet.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 bg-white text-secondary font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Contactez-nous
                </Link>
                <Link to="/simulator" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30">
                  Simuler mon financement
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Solutions;
