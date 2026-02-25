import Link from 'next/link';
import { assuranceTypes } from '@/assets/data/assurance';

export const metadata = {
  title: 'Assurance professionnelle | Finassur',
  description: 'RC Pro, D&O, flotte automobile, multirisque. Un interlocuteur unique pour financer et assurer votre activité.',
};

export default function AssurancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <span className="text-secondary font-semibold text-sm">Assurance professionnelle</span>
            </div>
            <h1 className="text-5xl font-bold text-primary mb-6">Assurance professionnelle</h1>
            <p className="text-xl text-gray-600 mb-8">RC Pro, D&O, flotte automobile, multirisque. Un interlocuteur unique pour financer et assurer votre activité.</p>
            <Link href="/contact?fromInsurance=1" className="btn-primary inline-flex items-center space-x-2">
              <i className="fa-solid fa-file-lines"></i>
              <span>Demander un devis assurance</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Types d'assurance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Nos solutions d&apos;assurance</h2>
            <p className="text-lg text-gray-600">Des garanties adaptées à chaque métier et à chaque risque.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {assuranceTypes.map((type) => (
              <div
                key={type.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-secondary/30"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`fa-solid ${type.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-2 mb-6">
                  {type.advantages.map((adv, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <i className="fa-solid fa-check text-accent text-sm"></i>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-primary">Idéal pour :</span> {type.idealFor.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Finassur pour l'assurance */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
                <span className="text-accent font-semibold text-sm">Avantages</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Pourquoi assurer avec Finassur ?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                En combinant financement et assurance, nous simplifions la gestion de votre entreprise. Un seul interlocuteur, des devis personnalisés et une réponse rapide.
              </p>
              <div className="space-y-6">
                {[
                  { icon: 'fa-handshake', bg: 'bg-secondary/10', color: 'text-secondary', title: 'Un interlocuteur unique', desc: 'Financement et assurance regroupés pour une gestion simplifiée.' },
                  { icon: 'fa-clock', bg: 'bg-accent/10', color: 'text-accent', title: 'Devis sous 48h', desc: 'Réponse rapide et personnalisée à votre demande.' },
                  { icon: 'fa-scale-balanced', bg: 'bg-indigo-500/10', color: 'text-indigo-600', title: 'Tarifs compétitifs', desc: 'Des conditions négociées grâce à notre volume d\'affaires.' },
                  { icon: 'fa-headset', bg: 'bg-orange-500/10', color: 'text-orange-600', title: 'Accompagnement dédié', desc: 'Un conseiller à votre écoute pour vos besoins spécifiques.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <i className={`fa-solid ${item.icon} ${item.color} text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-8 mb-6">
                <i className="fa-solid fa-shield-halved text-6xl text-secondary/40 mb-4"></i>
                <h3 className="text-2xl font-bold text-primary mb-4">Financement + Assurance</h3>
                <p className="text-gray-600 mb-6">
                  Équipez votre entreprise et protégez-la en une seule démarche. Nos solutions combinées vous font gagner du temps et optimisent vos coûts.
                </p>
                <Link href="/contact" className="btn-outline inline-flex items-center space-x-2">
                  <span>Demander un devis</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <i className="fa-solid fa-check-circle text-accent text-2xl"></i>
                  <div>
                    <div className="font-bold text-primary">Devis gratuit</div>
                    <div className="text-sm text-gray-600">Sans engagement</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <i className="fa-solid fa-check-circle text-accent text-2xl"></i>
                  <div>
                    <div className="font-bold text-primary">Réponse en 48h</div>
                    <div className="text-sm text-gray-600">Délai garanti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus simplifié */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Obtenir votre devis en 3 étapes</h2>
            <p className="text-lg text-gray-600">Un processus simple et rapide pour protéger votre activité.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', icon: 'fa-pen-to-square', title: 'Décrivez vos besoins', desc: 'Remplissez notre formulaire ou contactez-nous pour exposer votre situation.' },
              { step: '2', icon: 'fa-magnifying-glass', title: 'Étude personnalisée', desc: 'Nous analysons vos risques et vous proposons les garanties adaptées.' },
              { step: '3', icon: 'fa-file-signature', title: 'Devis et souscription', desc: 'Recevez votre devis sous 48h et souscrivez en toute sérénité.' },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`fa-solid ${item.icon} text-white text-2xl`}></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-white to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Prêt à protéger votre entreprise ?</h2>
            <p className="text-xl text-gray-600 mb-8">Demandez votre devis assurance personnalisé. Réponse garantie sous 48h.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?fromInsurance=1" className="btn-primary inline-flex items-center space-x-2">
                <i className="fa-solid fa-file-lines"></i>
                <span>Demander un devis assurance</span>
              </Link>
              <Link href="/contact" className="btn-outline inline-flex items-center space-x-2">
                <i className="fa-solid fa-phone"></i>
                <span>Nous contacter</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
