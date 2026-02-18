import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const Terms = () => {
  return (
    <PageTransition>
      <SEO title="Conditions Générales d'Utilisation" description="CGU du site Finassur - Conditions d'utilisation des services." />
      <div className="min-h-screen">
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Conditions générales</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">Conditions Générales d'Utilisation</h1>
              <p className="text-xl text-gray-600">
                Dernière mise à jour : février 2025
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="space-y-12 text-gray-700">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">1. Objet</h2>
                    <p>
                      Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation du site finassur.fr ainsi que les droits et obligations des parties dans ce cadre.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">2. Acceptation des CGU</h2>
                    <p>
                      L'accès et l'utilisation du site sont subordonnés à l'acceptation et au respect des présentes CGU. En accédant au site, l'utilisateur accepte sans réserve les présentes conditions.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">3. Description des services</h2>
                    <p>
                      Finassur propose des solutions de financement professionnel (crédit-bail, LOA, crédit professionnel) pour les entreprises. Le site permet de simuler un financement, de consulter les solutions proposées et de déposer une demande de financement via formulaire.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">4. Utilisation du site</h2>
                    <p>
                      L'utilisateur s'engage à utiliser le site de manière conforme aux présentes CGU, aux lois et règlements en vigueur. Il est interdit d'utiliser le site à des fins illicites ou de nuire à son bon fonctionnement.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">5. Simulateur et informations</h2>
                    <p>
                      Les simulations proposées sur le site sont données à titre indicatif et ne constituent en aucun cas une offre de financement. Seule une étude personnalisée de votre dossier pourra aboutir à une proposition ferme.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">6. Propriété intellectuelle</h2>
                    <p>
                      L'ensemble des éléments du site (contenus, marques, logos, etc.) sont protégés et restent la propriété exclusive de Finassur. Toute reproduction non autorisée est interdite.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">7. Limitation de responsabilité</h2>
                    <p>
                      Finassur s'efforce d'assurer l'exactitude des informations diffusées sur le site mais ne peut garantir l'absence d'erreur ou d'omission. L'utilisateur utilise le site sous sa seule responsabilité.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">8. Modifications</h2>
                    <p>
                      Finassur se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prendront effet dès leur publication sur le site.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">9. Droit applicable</h2>
                    <p>
                      Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">10. Contact</h2>
                    <p>
                      Pour toute question :{' '}
                      <a href="mailto:contact@finassur.fr" className="text-secondary hover:underline font-medium">
                        contact@finassur.fr
                      </a>
                      {' '}ou consultez nos{' '}
                      <Link to="/legal" className="text-secondary hover:underline font-medium">
                        mentions légales
                      </Link>
                      .
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

export default Terms;
