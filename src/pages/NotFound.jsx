import { Link } from 'react-router-dom';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/utils/SEO';

const NotFound = () => {
  return (
    <PageTransition>
      <SEO title="Page introuvable" description="La page demandée n'existe pas." />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-9xl font-bold text-secondary/20 mb-4">404</div>
            <h1 className="text-4xl font-bold text-primary mb-4">Page introuvable</h1>
            <p className="text-xl text-gray-600 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <i className="fa-solid fa-home"></i>
                <span>Retour à l'accueil</span>
              </Link>
              <Link
                to="/contact"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <i className="fa-solid fa-envelope"></i>
                <span>Nous contacter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
