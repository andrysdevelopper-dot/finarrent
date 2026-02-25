'use client';

import Link from 'next/link';
import SectorCard from '@/components/ui/SectorCard';
import ProcessStep from '@/components/ui/ProcessStep';
import StatsCard from '@/components/ui/StatsCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import Hero from '@/components/layout/Hero';
import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { sectorsData } from '@/assets/data/sectors';
import { testimonialsData } from '@/assets/data/testimonials';

const processSteps = [
  { title: 'Simulation en ligne', description: 'Remplissez notre formulaire et obtenez une estimation immédiate de votre financement', icon: 'fa-file-lines', iconBg: 'bg-secondary/10', iconColor: 'text-secondary' },
  { title: 'Étude personnalisée', description: 'Un conseiller expert analyse votre dossier et vous propose la meilleure solution', icon: 'fa-user-tie', iconBg: 'bg-accent/10', iconColor: 'text-accent' },
  { title: 'Validation rapide', description: 'Réponse de principe sous 48h et validation définitive en quelques jours', icon: 'fa-check-double', iconBg: 'bg-indigo-500/10', iconColor: 'text-indigo-600' },
  { title: 'Livraison équipement', description: 'Déblocage des fonds et réception de votre matériel professionnel', icon: 'fa-truck-fast', iconBg: 'bg-orange-500/10', iconColor: 'text-orange-600' },
];

export default function HomeClient() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="grid md:grid-cols-4 gap-8">
                <StatsCard icon="fa-users" number="1500+" label="Clients Satisfaits" />
                <StatsCard icon="fa-file-signature" number="48h" label="Délai de Réponse" />
                <StatsCard icon="fa-euro-sign" number="50M€" label="Financés en 2025" />
                <StatsCard icon="fa-handshake" number="98%" label="Taux d'Accord" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Nos secteurs d&apos;expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Des solutions de financement adaptées à chaque métier et chaque équipement professionnel</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectorsData.slice(0, 4).map((sector) => (
                <ScrollReveal key={sector.id}><SectorCard sector={sector} /></ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-accent/10 via-white to-secondary/10 rounded-3xl p-8 sm:p-12 border-2 border-accent/20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
                      <span className="text-accent font-semibold text-sm">Assurance professionnelle</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-6">Protégez votre entreprise avec nos solutions d&apos;assurance</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">RC Pro, D&O, flotte automobile, multirisque... Un interlocuteur unique pour financer vos équipements <strong>et</strong> assurer votre activité. Devis personnalisé sous 48h.</p>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/assurance" className="btn-primary inline-flex items-center space-x-2">
                        <i className="fa-solid fa-shield-halved"></i>
                        <span>Découvrir nos assurances</span>
                      </Link>
                      <Link href="/contact" className="btn-outline inline-flex items-center space-x-2">
                        <span>Demander un devis</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { icon: 'fa-shield-halved', title: 'RC Pro', desc: 'Responsabilité civile', color: 'accent' },
                      { icon: 'fa-user-tie', title: 'D&O', desc: 'Dirigeants', color: 'secondary' },
                      { icon: 'fa-truck', title: 'Flotte', desc: 'Véhicules pro', color: 'accent' },
                      { icon: 'fa-building', title: 'Multirisque', desc: 'Locaux & équipements', color: 'secondary' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100">
                        <i className={`fa-solid ${item.icon} text-${item.color} text-2xl mb-3`}></i>
                        <div className="font-bold text-primary">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                  <span className="text-secondary font-semibold text-sm">Expertise financière</span>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">Pourquoi choisir le leasing professionnel ?</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">Le crédit-bail et la location avec option d&apos;achat offrent des avantages fiscaux et financiers significatifs pour développer votre entreprise sans mobiliser votre trésorerie.</p>
                <div className="space-y-6">
                  {[
                    { icon: 'fa-coins', bg: 'bg-accent/10', color: 'text-accent', title: 'Préservez votre trésorerie', desc: 'Financez vos équipements sans apport et conservez votre capacité d\'investissement.' },
                    { icon: 'fa-chart-line', bg: 'bg-secondary/10', color: 'text-secondary', title: 'Avantages fiscaux optimisés', desc: 'Les loyers sont déductibles à 100% de votre résultat.' },
                    { icon: 'fa-shield-halved', bg: 'bg-indigo-500/10', color: 'text-indigo-600', title: 'Flexibilité et maîtrise du budget', desc: 'Mensualités fixes adaptées à votre activité.' },
                    { icon: 'fa-clock', bg: 'bg-orange-500/10', color: 'text-orange-600', title: 'Rapidité de mise en place', desc: 'Réponse de principe en 48h et déblocage sous 7 jours.' },
                  ].map((item, i) => (
                    <ScrollReveal key={i} delay={i * 0.1}>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <i className={`fa-solid ${item.icon} ${item.color} text-xl`}></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl blur-3xl"></div>
                <div className="relative space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    <div className="h-72 overflow-hidden rounded-xl mb-6">
                      <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/00a4222416-9ecfd6053f8d692fbfb7.png" alt="Business handshake" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-secondary mb-1">15+</div>
                        <div className="text-sm text-gray-600">Années d&apos;expérience</div>
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
                    <p className="text-white/90 leading-relaxed">Nos conseillers analysent votre situation et vous proposent la solution de financement la plus avantageuse pour votre entreprise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Un processus simple et rapide</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">En 4 étapes, obtenez votre financement et recevez votre équipement</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
              {processSteps.map((step, index) => (
                <ProcessStep key={index} step={step} index={index} isLast={index === processSteps.length - 1} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/contact" className="btn-primary">Démarrer ma demande maintenant</Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Ils nous font confiance</h2>
              <p className="text-xl text-gray-600">Découvrez les témoignages de nos clients satisfaits</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonialsData.slice(0, 3).map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
            </div>
            <div className="mt-16 bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-center space-x-2 mb-6">
                  {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-yellow-300 text-2xl"></i>)}
                </div>
                <div className="text-5xl font-bold mb-4">4.9/5</div>
                <p className="text-xl text-white/90 mb-8">Note moyenne basée sur plus de 850 avis clients vérifiés</p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div><div className="text-3xl font-bold mb-2">98%</div><div className="text-white/80">Taux de satisfaction</div></div>
                  <div><div className="text-3xl font-bold mb-2">1200+</div><div className="text-white/80">Entreprises financées</div></div>
                  <div><div className="text-3xl font-bold mb-2">48h</div><div className="text-white/80">Délai de réponse moyen</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Ils nous font confiance</h2>
              <p className="text-xl text-gray-600">Plus de 1200 entreprises nous ont choisi pour leurs financements</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-16">
              {['BOUYGUES', 'VINCI', 'EIFFAGE', 'SPIE', 'GEODIS', 'DOCTOLIB'].map((company, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center h-24">
                  <div className="text-2xl font-bold text-gray-400">{company}</div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: 'fa-award', num: '15+', label: "Années d'expérience", color: 'secondary' },
                { icon: 'fa-building', num: '1200+', label: 'Entreprises clientes', color: 'accent' },
                { icon: 'fa-euro-sign', num: '50M€', label: 'Financements accordés', color: 'indigo-600' },
                { icon: 'fa-handshake', num: '98%', label: 'Taux de satisfaction', color: 'orange-600' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className={`w-16 h-16 bg-${item.color === 'secondary' ? 'secondary' : item.color === 'accent' ? 'accent' : 'indigo-500'}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`fa-solid ${item.icon} text-${item.color} text-2xl`}></i>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{item.num}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white text-center">
                <h2 className="text-4xl font-bold mb-6">Prêt à développer votre entreprise ?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Obtenez votre financement en 3 minutes. Remplissez notre formulaire sécurisé et recevez une réponse de principe sous 48h.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-white text-secondary font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Faire une demande</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
