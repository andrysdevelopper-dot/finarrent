import { useParams, Link, Navigate } from 'react-router-dom';
import { solutionsData } from '../assets/data/solutions';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const SolutionDetail = () => {
  const { id } = useParams();
  const solution = solutionsData.find(s => s.id === id);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <i className="fa-solid fa-chevron-right text-xs"></i>
            <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
            <i className="fa-solid fa-chevron-right text-xs"></i>
            <span className="text-secondary font-semibold">{solution.title}</span>
          </div>

          {/* Header */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 grid md:grid-cols-3 gap-10 items-center">
              <div className="md:col-span-2">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} text-white text-3xl mb-6 shadow-lg`}>
                  <i className={`fa-solid ${solution.icon}`}></i>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{solution.title}</h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  {solution.description}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                 <div className="space-y-4">
                   <div>
                     <div className="text-sm text-gray-500 mb-1">Montant</div>
                     <div className="text-2xl font-bold text-primary">{solution.minAmount} - {solution.maxAmount}</div>
                   </div>
                   <div>
                     <div className="text-sm text-gray-500 mb-1">Durée</div>
                     <div className="text-2xl font-bold text-primary">{solution.duration}</div>
                   </div>
                   <Link to="/simulator" className="btn-primary w-full text-center block mt-4">
                     Simuler ce projet
                   </Link>
                 </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Advantages */}
              <ScrollReveal>
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                    <i className="fa-solid fa-star text-accent mr-3"></i>
                    Avantages clés
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {solution.advantages?.map((advantage, idx) => (
                      <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-xl">
                        <i className="fa-solid fa-check-circle text-accent mt-1 mr-3 text-lg"></i>
                        <span className="text-gray-700 font-medium">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Description Text (Mocked for now as data is simple) */}
              <ScrollReveal delay={0.2}>
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                   <h2 className="text-2xl font-bold text-primary mb-6">En détail</h2>
                   <div className="prose prose-lg text-gray-600">
                     <p>
                       Le <strong>{solution.title}</strong> est une solution de financement flexible conçue pour les 
                       {solution.idealFor?.join(', ')}. Elle permet d'acquérir du matériel professionnel sans fragiliser votre trésorerie.
                     </p>
                     <p className="mt-4">
                       Grâce à cette formule, vous bénéficiez d'une fiscalité avantageuse et d'une gestion simplifiée de vos investissements.
                       Nos experts vous accompagnent pour définir les mensualités les plus adaptées à votre activité.
                     </p>
                   </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
               {/* Ideal For */}
               <ScrollReveal delay={0.3}>
                 <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-primary mb-6">Idéal pour</h3>
                  <div className="flex flex-wrap gap-2">
                    {solution.idealFor?.map((target, idx) => (
                      <span key={idx} className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
               </ScrollReveal>

              {/* CTA Box */}
              <ScrollReveal delay={0.4}>
                <div className="bg-gradient-to-br from-primary to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Besoin d'un conseil ?</h3>
                    <p className="text-white/80 mb-6">
                      Nos conseillers sont disponibles pour étudier votre projet.
                    </p>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-phone text-accent"></i>
                      </div>
                      <span className="font-bold text-xl">01 23 45 67 89</span>
                    </div>
                    <Link to="/contact" className="block w-full py-3 bg-white text-primary text-center rounded-xl font-bold hover:bg-accent hover:text-white transition-all">
                      Contactez-nous
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SolutionDetail;
