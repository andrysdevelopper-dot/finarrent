import Link from 'next/link';
import { solutionsData } from '@/assets/data/solutions';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const sol = solutionsData.find(s => s.id === id);
  if (!sol) return { title: 'Solution | Finassur' };
  return { title: `${sol.title} | Finassur`, description: sol.description };
}

export default async function SolutionDetailPage({ params }) {
  const { id } = await params;
  const sol = solutionsData.find(s => s.id === id);
  if (!sol) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-40 sm:pb-32 overflow-hidden bg-[#0A192F] text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-bold mb-12 transition-all group"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-2 transition-transform" />
            Retour aux solutions
          </Link>
          <div className="max-w-4xl">
            <div className={`inline-flex w-20 h-20 bg-gradient-to-br ${sol.color} rounded-[24px] items-center justify-center mb-10 shadow-2xl shadow-black/20 animate-float`}>
              <i className={`fa-solid ${sol.icon} text-white text-3xl`} />
            </div>
            <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight leading-tight">
              {sol.title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 mb-12 leading-relaxed font-light max-w-3xl">
              {sol.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 text-white font-bold shadow-xl">
                <i className="fa-solid fa-clock text-accent" />
                Délai : {sol.duration}
              </span>
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 text-white font-bold shadow-xl">
                <i className="fa-solid fa-euro-sign text-accent" />
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
