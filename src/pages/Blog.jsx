import BlogCard from '../components/ui/BlogCard';
import { blogData } from '../assets/data/blog';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailJSConfig } from '../config/emailjs';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        emailJSConfig.serviceId,
        emailJSConfig.templateNewsletter,
        {
          to_name: 'Équipe Finassur',
          from_name: 'Nouvel Abonné Blog',
          email: email,
          message: 'Demande inscription newsletter via Blog',
          type: 'newsletter'
        },
        emailJSConfig.publicKey
      );

      setSubmitStatus('success');
      setEmail('');
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const categories = ['Tous', 'Conseils', 'Fiscalité', 'Secteurs', 'Guides'];
  
  const filteredArticles = selectedCategory === 'Tous' 
    ? blogData 
    : blogData.filter(article => article.category === selectedCategory);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Blog & Actualités</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">
                Actualités et conseils en financement professionnel
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Découvrez nos articles, guides et actualités pour optimiser vos financements.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ScrollReveal key={article.id}>
                  <BlogCard article={article} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Restez informé</h2>
              <p className="text-xl text-white/90 mb-8">
                Recevez nos derniers articles et conseils directement dans votre boîte mail.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@entreprise.fr"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-75"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-white text-secondary font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-75 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <i className="fa-solid fa-spinner fa-spin text-secondary"></i>
                  ) : (
                    "S'abonner"
                  )}
                </button>
              </form>
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-white/20 rounded-xl inline-block backdrop-blur-sm">
                  <p className="text-white font-medium flex items-center justify-center">
                    <i className="fa-solid fa-check-circle mr-2"></i> 
                    Inscription réussie ! Merci de votre confiance.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500/20 rounded-xl inline-block backdrop-blur-sm">
                  <p className="text-white font-medium flex items-center justify-center">
                    <i className="fa-solid fa-circle-exclamation mr-2"></i>
                    Une erreur est survenue. Veuillez réessayer.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Blog;
