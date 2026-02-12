import { useParams, Link, Navigate } from 'react-router-dom';
import { sectorsData } from '../assets/data/sectors';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const SectorDetail = () => {
  const { id } = useParams();
  const sector = sectorsData.find(s => s.id === id);

  if (!sector) {
    return <Navigate to="/sectors" replace />;
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <i className="fa-solid fa-chevron-right text-xs"></i>
            <Link to="/sectors" className="hover:text-primary transition-colors">Secteurs</Link>
            <i className="fa-solid fa-chevron-right text-xs"></i>
            <span className="text-secondary font-semibold">{sector.title}</span>
          </div>

          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 mb-10 overflow-hidden relative">
             <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${sector.color} text-white text-4xl mb-8 shadow-lg`}>
                    <i className={`fa-solid ${sector.icon}`}></i>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                    Financement pour le secteur {sector.title}
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {sector.description}
                  </p>
               </div>
               
               <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                 <h3 className="font-bold text-xl mb-6 text-primary">Équipements finançables</h3>
                 <div className="grid gap-4">
                   {sector.equipments?.map((item, idx) => (
                     <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                       <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                         <i className="fa-solid fa-check text-green-500 text-sm"></i>
                       </div>
                       <span className="font-medium text-gray-700">{item}</span>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
          </div>

          {/* Challenge & Solutions */}
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
               {/* Context/Challenges */}
               <ScrollReveal>
                 <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                   <h2 className="text-2xl font-bold text-primary mb-6">Enjeux du secteur</h2>
                   <div className="prose prose-lg text-gray-600">
                     <p>
                       Le secteur <strong>{sector.title}</strong> fait face à des défis constants en matière d'investissement. 
                       Renouveler le matériel pour rester compétitif tout en préservant sa trésorerie est une équation complexe.
                     </p>
                     <p>
                       Que ce soit pour répondre aux nouvelles normes environnementales, augmenter la productivité ou simplement remplacer du matériel obsolète, 
                       le choix du financement est stratégique.
                     </p>
                   </div>
                 </div>
               </ScrollReveal>

               {/* Why Choose Us */}
               <ScrollReveal delay={0.2}>
                 <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                   <h2 className="text-2xl font-bold text-primary mb-6">Pourquoi choisir Finassur ?</h2>
                   <div className="grid sm:grid-cols-2 gap-6">
                     <div className="flex items-start space-x-4">
                       <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-secondary text-xl">
                          <i className="fa-solid fa-bolt"></i>
                       </div>
                       <div>
                         <h4 className="font-bold text-lg mb-2">Rapidité</h4>
                         <p className="text-gray-600 text-sm">Accords de financement sous 48h pour ne pas ralentir votre activité.</p>
                       </div>
                     </div>
                     <div className="flex items-start space-x-4">
                       <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 text-accent text-xl">
                          <i className="fa-solid fa-hand-holding-dollar"></i>
                       </div>
                       <div>
                         <h4 className="font-bold text-lg mb-2">Sur-mesure</h4>
                         <p className="text-gray-600 text-sm">Loyers adaptés à la saisonnalité de votre CA.</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <ScrollReveal delay={0.3}>
                <div className="bg-primary text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                   <div className="relative z-10">
                     <h3 className="text-2xl font-bold mb-4">Investissez maintenant</h3>
                     <p className="text-white/80 mb-8">
                       Simulez votre financement en quelques clics et obtenez une pré-acceptation immédiate.
                     </p>
                     <Link to="/simulator" className="block w-full py-4 bg-accent text-white text-center rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/50 mb-4">
                       Simuler mon projet
                     </Link>
                     <Link to="/contact" className="block w-full py-4 bg-white/10 backdrop-blur-sm text-white text-center rounded-xl font-semibold hover:bg-white/20 transition-all">
                       Parler à un expert
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

export default SectorDetail;
