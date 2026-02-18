import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const Legal = () => {
  return (
    <PageTransition>
      <SEO title="Mentions légales" description="Mentions légales du site Finassur - Informations sur l'éditeur et l'hébergement." />
      <div className="min-h-screen">
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Informations légales</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">Mentions légales</h1>
              <p className="text-xl text-gray-600">
                Dernière mise à jour : février 2025
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <ScrollReveal>
                <div className="space-y-12 text-gray-700">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">1. Éditeur du site</h2>
                    <p>
                      Le site <strong>finassur.fr</strong> est édité par :
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li><strong>Raison sociale :</strong> Finassur SAS</li>
                      <li><strong>Capital social :</strong> 500 000 €</li>
                      <li><strong>SIREN :</strong> 123 456 789</li>
                      <li><strong>RCS :</strong> Paris</li>
                      <li><strong>Siège social :</strong> 123 Avenue des Champs-Élysées, 75008 Paris</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">2. Hébergement</h2>
                    <p>
                      Le site est hébergé par un prestataire d'hébergement web. Pour toute question relative à l'hébergement, veuillez nous contacter à contact@finassur.fr.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">3. Propriété intellectuelle</h2>
                    <p>
                      L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est protégé par le droit d'auteur et le droit des marques. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable de Finassur est strictement interdite.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">4. Données personnelles</h2>
                    <p>
                      Les informations collectées via les formulaires du site sont traitées conformément à notre{' '}
                      <Link to="/privacy" className="text-secondary hover:underline font-medium">
                        Politique de confidentialité
                      </Link>
                      .
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">5. Cookies</h2>
                    <p>
                      Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Vous pouvez gérer vos préférences en matière de cookies dans les paramètres de votre navigateur.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">6. Contact</h2>
                    <p>
                      Pour toute question relative aux mentions légales :{' '}
                      <a href="mailto:contact@finassur.fr" className="text-secondary hover:underline font-medium">
                        contact@finassur.fr
                      </a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Legal;
