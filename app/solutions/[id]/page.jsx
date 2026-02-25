import Link from 'next/link';
import { solutionsData } from '@/assets/data/solutions';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const sol = solutionsData.find(s => s.id === params.id);
  if (!sol) return { title: 'Solution | Finassur' };
  return { title: `${sol.title} | Finassur`, description: sol.description };
}

export default function SolutionDetailPage({ params }) {
  const sol = solutionsData.find(s => s.id === params.id);
  if (!sol) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-y-1/2" />
        <div className="container mx-auto px-6 relative">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium mb-8 transition-colors group"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
            Retour aux solutions
          </Link>
          <div className="max-w-3xl">
            <div className={`inline-flex w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${sol.color} rounded-2xl items-center justify-center mb-6 shadow-lg shadow-secondary/20`}>
              <i className={`fa-solid ${sol.icon} text-white text-2xl sm:text-3xl`} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 tracking-tight">{sol.title}</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">{sol.description}</p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border-2 border-secondary/30 text-secondary font-semibold shadow-sm">
                <i className="fa-solid fa-clock text-sm" />
                Durée : {sol.duration}
              </span>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border-2 border-accent/30 text-accent font-semibold shadow-sm">
                <i className="fa-solid fa-euro-sign text-sm" />
                {sol.minAmount} - {sol.maxAmount}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Avantages */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <i className="fa-solid fa-check-double text-accent" />
                  </div>
                  <h2 className="text-xl font-bold text-primary">Avantages</h2>
                </div>
                <ul className="space-y-4">
                  {sol.advantages.map((a, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                        <i className="fa-solid fa-check text-accent text-xs" />
                      </span>
                      <span className="text-gray-700 leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Idéal pour */}
              <div className="bg-gradient-to-br from-secondary/5 to-white rounded-2xl p-8 border border-secondary/10 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <i className="fa-solid fa-building text-secondary" />
                  </div>
                  <h2 className="text-xl font-bold text-primary">Idéal pour</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {sol.idealFor.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white rounded-xl border border-secondary/20 text-secondary font-medium shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 sm:mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-secondary/25 hover:scale-105 transition-all duration-300"
              >
                Démarrer ma demande
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
