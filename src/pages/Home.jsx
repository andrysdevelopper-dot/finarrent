import { Link } from 'react-router-dom';
import SectorCard from '../components/ui/SectorCard';
import ProcessStep from '../components/ui/ProcessStep';
import StatsCard from '../components/ui/StatsCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import Hero from '../components/layout/Hero';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';
import { sectorsData } from '../assets/data/sectors';
import { testimonialsData } from '../assets/data/testimonials';
import { useFinancingCalculator } from '../hooks/useFinancingCalculator';

const Home = () => {
  const {
    amount,
    setAmount,
    duration,
    setDuration,
    monthlyPayment,
    totalCost,
    interestRate
  } = useFinancingCalculator();

  const processSteps = [
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

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        
        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="grid md:grid-cols-4 gap-8">
                <StatsCard icon="fa-users" number="1500+" label="Clients Satisfaits" />
                <StatsCard icon="fa-file-signature" number="48h" label="Délai de Réponse" />
                <StatsCard icon="fa-euro-sign" number="50M€" label="Financés en 2024" />
                <StatsCard icon="fa-handshake" number="98%" label="Taux d'Accord" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Financing Simulator */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Simulez votre financement en temps réel</h2>
              <p className="text-xl text-gray-600">Obtenez instantanément une estimation de vos mensualités</p>
            </div>
            
            <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-indigo-50 rounded-3xl shadow-2xl p-10 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Montant du financement</label>
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
                </div>
                
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Durée du financement</label>
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
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-secondary/20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Votre mensualité estimée</div>
                    <div className="text-5xl font-bold text-primary">{monthlyPayment.toLocaleString()} €</div>
                    <div className="text-sm text-gray-500 mt-2">*Estimation indicative hors assurance</div>
                  </div>
                  <div className="text-right">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-calculator text-white text-2xl"></i>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Coût total</div>
                    <div className="text-lg font-bold text-gray-900">{totalCost.toLocaleString()} €</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Taux indicatif</div>
                    <div className="text-lg font-bold text-gray-900">{interestRate}%</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Frais de dossier</div>
                    <div className="text-lg font-bold text-gray-900">0€</div>
                  </div>
                </div>
                
                <Link to="/contact" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <span>Faire une demande de financement</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Nos secteurs d'expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des solutions de financement adaptées à chaque métier et chaque équipement professionnel
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectorsData.slice(0, 4).map((sector) => (
                <ScrollReveal key={sector.id}>
                  <SectorCard sector={sector} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Leasing */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                  <span className="text-secondary font-semibold text-sm">Expertise financière</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">Pourquoi choisir le leasing professionnel ?</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Le crédit-bail et la location avec option d'achat offrent des avantages fiscaux et financiers significatifs pour développer votre entreprise sans mobiliser votre trésorerie.
                </p>
                
                <div className="space-y-6">
                  <ScrollReveal delay={0.1}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-coins text-accent text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Préservez votre trésorerie</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Financez vos équipements sans apport et conservez votre capacité d'investissement pour d'autres projets stratégiques.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.2}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-chart-line text-secondary text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Avantages fiscaux optimisés</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Les loyers sont déductibles à 100% de votre résultat, réduisant ainsi votre charge fiscale globale.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.3}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-shield-halved text-indigo-600 text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Flexibilité et maîtrise du budget</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Mensualités fixes adaptées à votre activité avec possibilité de rachat ou renouvellement en fin de contrat.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.4}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-clock text-orange-600 text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Rapidité de mise en place</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Réponse de principe en 48h et déblocage des fonds sous 7 jours pour concrétiser rapidement vos projets.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl blur-3xl"></div>
                <div className="relative space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    <div className="h-72 overflow-hidden rounded-xl mb-6">
                      <img 
                        className="w-full h-full object-cover" 
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/00a4222416-9ecfd6053f8d692fbfb7.png" 
                        alt="Business handshake" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-secondary mb-1">15+</div>
                        <div className="text-sm text-gray-600">Années d'expérience</div>
                      </div>
                      <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-accent mb-1">98%</div>
                        <div className="text-sm text-gray-600">Clients satisfaits</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-8 text-white shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <i className="fa-solid fa-lightbulb text-white text-2xl"></i>
                      </div>
                      <div>
                        <div className="font-bold text-lg">Conseil personnalisé</div>
                        <div className="text-white/80 text-sm">Par nos experts en financement</div>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      Nos conseillers analysent votre situation et vous proposent la solution de financement la plus avantageuse pour votre entreprise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-6">
             <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Un processus simple et rapide</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                En 4 étapes, obtenez votre financement et recevez votre équipement
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
              
              {processSteps.map((step, index) => (
                <ProcessStep 
                  key={index} 
                  step={step} 
                  index={index}
                  isLast={index === processSteps.length - 1}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact" className="btn-primary">
                Démarrer ma demande maintenant
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Ils nous font confiance</h2>
              <p className="text-xl text-gray-600">Découvrez les témoignages de nos clients satisfaits</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonialsData.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-center space-x-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-yellow-300 text-2xl"></i>
                  ))}
                </div>
                <div className="text-5xl font-bold mb-4">4.9/5</div>
                <p className="text-xl text-white/90 mb-8">
                  Note moyenne basée sur plus de 850 avis clients vérifiés
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-white/80">Taux de satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">1200+</div>
                    <div className="text-white/80">Entreprises financées</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">48h</div>
                    <div className="text-white/80">Délai de réponse moyen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Markers */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Ils nous font confiance</h2>
              <p className="text-xl text-gray-600">Plus de 1200 entreprises nous ont choisi pour leurs financements</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-16">
              {['BOUYGUES', 'VINCI', 'EIFFAGE', 'SPIE', 'GEODIS', 'DOCTOLIB'].map((company, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center h-24">
                  <div className="text-2xl font-bold text-gray-400">{company}</div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-award text-secondary text-2xl"></i>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Années d'expérience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-building text-accent text-2xl"></i>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">1200+</div>
                <div className="text-gray-600">Entreprises clientes</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-euro-sign text-indigo-600 text-2xl"></i>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">2.5M€</div>
                <div className="text-gray-600">Financements accordés</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-handshake text-orange-600 text-2xl"></i>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600">Taux de satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white text-center">
                <h2 className="text-4xl font-bold mb-6">Prêt à développer votre entreprise ?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Obtenez votre financement en 3 minutes. Remplissez notre formulaire sécurisé et recevez une réponse de principe sous 48h.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact" className="px-8 py-4 bg-white text-secondary font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Faire une demande
                  </Link>
                  <Link to="/simulator" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30">
                    Simuler mon financement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
