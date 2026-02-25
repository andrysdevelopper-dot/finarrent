import Link from 'next/link';
import { solutionsData } from '@/assets/data/solutions';

export const metadata = {
  title: 'Solutions de financement | Finassur',
  description: 'Crédit-bail, LOA, crédit professionnel, leasing opérationnel. Découvrez nos solutions de financement pour entreprises.',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <span className="text-secondary font-semibold text-sm">Nos Solutions</span>
            </div>
            <h1 className="text-5xl font-bold text-primary mb-6">Solutions de financement professionnel</h1>
            <p className="text-xl text-gray-600">Crédit-bail, LOA, crédit pro... La solution adaptée à votre projet</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((sol) => (
              <Link key={sol.id} href={`/solutions/${sol.id}`} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-secondary">
                <div className={`w-16 h-16 bg-gradient-to-br ${sol.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`fa-solid ${sol.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{sol.title}</h3>
                <p className="text-gray-600 mb-4">{sol.description}</p>
                <span className="text-secondary font-semibold inline-flex items-center gap-2">En savoir plus <i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
