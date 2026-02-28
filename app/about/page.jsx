import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata = {
  title: 'À propos | Finassur - Notre Mission & Notre Histoire',
  description: 'Découvrez l\'histoire de Finassur, notre mission d\'accompagnement des entreprises et nos valeurs d\'expertise et de proximité.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Notre Histoire</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">Accompagner la croissance des entreprises depuis 2009</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Finassur est né d'une volonté simple : rendre le financement professionnel accessible, rapide et transparent pour tous les entrepreneurs.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Équipe Finassur" 
                  className="relative rounded-3xl shadow-2xl z-10"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Plus qu'un courtier, un partenaire stratégique</h2>
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Chez Finassur, nous croyons que chaque projet mérite le meilleur financement. Notre expertise ne se limite pas à comparer les taux ; nous analysons votre cycle d'exploitation pour proposer la solution qui maximise votre trésorerie et votre rentabilité.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Depuis plus de 15 ans, nous avons tissé des relations privilégiées avec les plus grands bailleurs et assureurs européens, nous permettant de débloquer des dossiers complexes là où d'autres s'arrêtent.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="text-3xl font-bold text-secondary mb-1">1200+</div>
                      <div className="text-sm text-gray-500">Entreprises financées</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="text-3xl font-bold text-accent mb-1">98%</div>
                      <div className="text-sm text-gray-500">Taux d'accord</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-xl text-gray-600">Ce qui nous anime au quotidien pour servir nos clients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-rocket', title: 'Réactivité', desc: 'Une réponse de principe sous 48h. Parce que le temps est le capital le plus précieux d\'un entrepreneur.' },
              { icon: 'fa-shield-heart', title: 'Transparence', desc: 'Aucun coût caché. Nous expliquons chaque ligne de votre contrat pour une décision éclairée.' },
              { icon: 'fa-users-gear', title: 'Proximité', desc: 'Un conseiller dédié qui connaît votre métier et vous accompagne de la simulation à la livraison.' },
            ].map((val, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-secondary/30 transition-all group">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                    <i className={`fa-solid ${val.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{val.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Prêt à écrire le prochain chapitre avec nous ?</h2>
            <p className="text-xl text-white/90 mb-8">
              Confiez-nous votre projet de financement et bénéficiez de l'expertise Finassur.
            </p>
            <Link href="/contact" className="px-8 py-3 bg-white text-secondary font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all">
              Démarrer une étude gratuite
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
