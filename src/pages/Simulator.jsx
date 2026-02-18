import { useFinancingCalculator } from '../hooks/useFinancingCalculator';
import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const Simulator = () => {
  const {
    amount,
    setAmount,
    duration,
    setDuration,
    monthlyPayment,
    totalCost,
    totalInterest,
    interestRate
  } = useFinancingCalculator();

  return (
    <PageTransition>
      <SEO
        title="Simulateur de financement"
        description="Simulez votre financement professionnel en temps réel. Obtenez une estimation de vos mensualités pour crédit-bail et LOA."
      />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Simulateur</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">
                Simulez votre financement en temps réel
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Obtenez instantanément une estimation de vos mensualités et du coût total de votre financement.
              </p>
            </div>
          </div>
        </section>

        {/* Main Simulator */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-200">
                  {/* Inputs */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Montant du financement
                      </label>
                      <input
                        type="range"
                        min="3000"
                        max="500000"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        step="1000"
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-secondary"
                      />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">3 000€</span>
                        <span className="text-3xl font-bold text-secondary">{amount.toLocaleString()} €</span>
                        <span className="text-sm text-gray-500">500 000€</span>
                      </div>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        min="3000"
                        max="500000"
                        step="1000"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:outline-none"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Durée du financement (mois)
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="84"
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        step="12"
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-accent"
                      />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">12 mois</span>
                        <span className="text-3xl font-bold text-accent">{duration} mois</span>
                        <span className="text-sm text-gray-500">84 mois</span>
                      </div>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:outline-none bg-white"
                      >
                        {[12, 24, 36, 48, 60, 72, 84].map((months) => (
                          <option key={months} value={months}>
                            {months} mois ({Math.floor(months / 12)} an{months > 12 ? 's' : ''})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-secondary/20">
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Mensualité estimée</div>
                        <div className="text-3xl sm:text-5xl font-bold text-primary mb-2">
                          {monthlyPayment.toLocaleString()} €
                        </div>
                        <div className="text-sm text-gray-500">*Estimation indicative hors assurance</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                          <i className="fa-solid fa-calculator text-white text-4xl"></i>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Coût total</div>
                        <div className="text-xl font-bold text-gray-900">{totalCost.toLocaleString()} €</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Intérêts totaux</div>
                        <div className="text-xl font-bold text-gray-900">{totalInterest.toLocaleString()} €</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Taux indicatif</div>
                        <div className="text-xl font-bold text-gray-900">{interestRate}%</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">Frais de dossier</div>
                        <div className="text-xl font-bold text-gray-900">0€</div>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      state={{
                        fromSimulator: {
                          amount,
                          duration,
                          monthlyPayment,
                          totalCost,
                          interestRate
                        }
                      }}
                      className="btn-primary w-full flex items-center justify-center space-x-2"
                    >
                      <span>Faire une demande de financement</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Amortization Table */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">Tableau d'amortissement</h2>
                <p className="text-xl text-gray-600">Détail de vos mensualités</p>
              </div>

              <ScrollReveal>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-secondary to-accent text-white">
                        <tr>
                          <th className="px-6 py-4 text-left">Mois</th>
                          <th className="px-6 py-4 text-right">Mensualité</th>
                          <th className="px-6 py-4 text-right">Capital</th>
                          <th className="px-6 py-4 text-right">Intérêts</th>
                          <th className="px-6 py-4 text-right">Reste dû</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {Array.from({ length: Math.min(12, duration) }, (_, i) => {
                          const monthlyRate = interestRate / 100 / 12;
                          const remainingMonths = duration - i;
                          const remainingBalance = amount * (Math.pow(1 + monthlyRate, remainingMonths) - Math.pow(1 + monthlyRate, i)) / (Math.pow(1 + monthlyRate, duration) - 1);
                          const interestPayment = remainingBalance * monthlyRate;
                          const principalPayment = monthlyPayment - interestPayment;

                          return (
                            <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                              <td className="px-6 py-4 font-semibold">{i + 1}</td>
                              <td className="px-6 py-4 text-right font-semibold">{monthlyPayment.toLocaleString()} €</td>
                              <td className="px-6 py-4 text-right">{Math.round(principalPayment).toLocaleString()} €</td>
                              <td className="px-6 py-4 text-right">{Math.round(interestPayment).toLocaleString()} €</td>
                              <td className="px-6 py-4 text-right">{Math.round(remainingBalance - principalPayment).toLocaleString()} €</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {duration > 12 && (
                    <div className="px-6 py-4 bg-gray-50 text-center text-sm text-gray-600">
                      Affichage des 12 premiers mois sur {duration} mois au total
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-primary mb-6">À savoir sur cette simulation</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-info-circle text-secondary mt-1"></i>
                      <span className="text-gray-700">
                        Cette simulation est donnée à titre indicatif et ne constitue pas une offre de financement.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-info-circle text-secondary mt-1"></i>
                      <span className="text-gray-700">
                        Le taux appliqué est un taux moyen indicatif de {interestRate}%. Le taux réel dépendra de votre profil et de votre dossier.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-info-circle text-secondary mt-1"></i>
                      <span className="text-gray-700">
                        Les mensualités n'incluent pas l'assurance emprunteur qui peut être souscrite en option.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <i className="fa-solid fa-info-circle text-secondary mt-1"></i>
                      <span className="text-gray-700">
                        Pour obtenir une offre personnalisée, contactez-nous ou remplissez notre formulaire de demande.
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Simulator;
