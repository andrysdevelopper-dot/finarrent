import { useParams, Link, Navigate } from 'react-router-dom';
import { blogData } from '../assets/data/blog';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogData.find(p => p.id === parseInt(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Header */}
        <div className="relative h-[400px] md:h-[500px] w-full">
          <div className="absolute inset-0">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 pb-16">
            <div className="container mx-auto px-6 max-w-4xl">
               <div className="flex flex-wrap gap-3 mb-6">
                  <span className={`px-3 py-1 bg-${post.categoryColor || 'secondary'} text-white text-xs font-bold uppercase tracking-wider rounded-lg`}>
                    {post.category}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-lg flex items-center">
                     <i className="fa-regular fa-clock mr-2"></i> {post.readTime}
                  </span>
               </div>
               
               <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                 {post.title}
               </h1>
               
               <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                   {post.author.charAt(0)}
                 </div>
                 <div className="text-white">
                   <div className="font-semibold">{post.author}</div>
                   <div className="text-sm opacity-70">{post.date}</div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">
            {/* Main Article Content */}
            <ScrollReveal>
              <div className="prose prose-lg prose-indigo mx-auto text-gray-700 leading-relaxed mb-12">
                <p className="lead text-xl text-gray-600 font-medium mb-8">
                  {post.excerpt}
                </p>
                
                {/* Simulation of full content since data file only has excerpts */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2>Pourquoi est-ce important ?</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <blockquote>
                  "Le financement professionnel est un levier de croissance indispensable pour les entreprises modernes."
                </blockquote>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                
                <h3>Les points clés à retenir</h3>
                <ul>
                  <li>Avantage compétitif immédiat</li>
                  <li>Flexibilité financière accrue</li>
                  <li>Optimisation fiscale</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Tags */}
            <div className="border-t border-gray-100 pt-8 mt-8">
               <div className="flex flex-wrap gap-2">
                 {post.tags?.map((tag, idx) => (
                   <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">
                     #{tag}
                   </span>
                 ))}
               </div>
            </div>
            
            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center">
               <Link to="/blog" className="text-secondary font-semibold hover:underline flex items-center">
                 <i className="fa-solid fa-arrow-left mr-2"></i> Retour aux articles
               </Link>
            </div>
          </div>
        </div>
        
        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-secondary to-accent py-16 mt-12">
          <ScrollReveal>
            <div className="container mx-auto px-6 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Besoin d'approfondir le sujet ?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Nos experts sont à votre disposition pour analyser votre situation et vous proposer les meilleures solutions.
              </p>
              <div className="flex justify-center gap-4">
                 <Link to="/contact" className="btn-white">Contacter un expert</Link>
                 <Link to="/simulator" className="px-6 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition-colors font-semibold">Simuler mon projet</Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </PageTransition>
  );
};

export default BlogDetail;
