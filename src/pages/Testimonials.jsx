import TestimonialCard from '../components/ui/TestimonialCard';
import { testimonialsData } from '../assets/data/testimonials';
import { Link } from 'react-router-dom';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const Testimonials = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Témoignages</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">
                Ils nous font confiance
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Découvrez les témoignages de nos clients satisfaits et leurs retours d'expérience.
              </p>
            </div>
          </div>
        </section>

        {/* Overall Rating */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white text-center">
                <div className="flex justify-center space-x-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-yellow-300 text-3xl"></i>
                  ))}
                </div>
                <div className="text-6xl font-bold mb-4">4.9/5</div>
                <p className="text-2xl text-white/90 mb-8">
                  Note moyenne basée sur plus de 850 avis clients vérifiés
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl font-bold mb-2">98%</div>
                    <div className="text-white/80">Taux de satisfaction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">1200+</div>
                    <div className="text-white/80">Entreprises financées</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">48h</div>
                    <div className="text-white/80">Délai de réponse moyen</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* All Testimonials */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial) => (
                <ScrollReveal key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* By Sector */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Témoignages par secteur</h2>
            </div>

            <ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {['BTP & Construction', 'Médical & Santé', 'IT & Tech', 'Transport'].map((sector, index) => {
                  const sectorTestimonials = testimonialsData.filter(t => t.sector.includes(sector.split(' ')[0]));
                  return (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg text-center">
                      <div className="text-3xl font-bold text-secondary mb-2">
                        {sectorTestimonials.length}
                      </div>
                      <div className="text-gray-600">{sector}</div>
                      <div className="flex justify-center mt-3">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-2xl text-center border border-gray-200">
              <h2 className="text-4xl font-bold text-primary mb-6">Rejoignez nos clients satisfaits</h2>
              <p className="text-xl text-gray-600 mb-8">
                Bénéficiez vous aussi d'un financement rapide et adapté à vos besoins.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Faire une demande
                </Link>
                <Link to="/simulator" className="btn-secondary">
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

export default Testimonials;
