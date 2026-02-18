import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const Privacy = () => {
  return (
    <PageTransition>
      <SEO title="Politique de confidentialité" description="Politique de confidentialité et protection des données personnelles - RGPD." />
      <div className="min-h-screen">
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <span className="text-secondary font-semibold text-sm">Protection des données</span>
              </div>
              <h1 className="text-5xl font-bold text-primary mb-6">Politique de confidentialité</h1>
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
                    <h2 className="text-2xl font-bold text-primary mb-4">1. Responsable du traitement</h2>
                    <p>
                      Le responsable du traitement des données personnelles est Finassur SAS, 123 Avenue des Champs-Élysées, 75008 Paris. Contact : contact@finassur.fr
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">2. Données collectées</h2>
                    <p>
                      Nous collectons les données suivantes lorsque vous remplissez nos formulaires (contact, demande de financement, newsletter) :
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>Identité : nom, prénom</li>
                      <li>Coordonnées : email, téléphone</li>
                      <li>Entreprise : raison sociale, SIREN, secteur d'activité</li>
                      <li>Projet : montant souhaité, message</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">3. Finalités du traitement</h2>
                    <p>
                      Vos données sont utilisées pour : traiter vos demandes de financement, vous recontacter, vous envoyer des informations sur nos services, et vous inscrire à notre newsletter si vous le souhaitez.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">4. Base légale</h2>
                    <p>
                      Le traitement repose sur votre consentement (formulaires) et l'exécution de mesures précontractuelles (demande de financement).
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">5. Durée de conservation</h2>
                    <p>
                      Les données sont conservées pendant la durée nécessaire à la finalité du traitement : 3 ans pour les prospects, durée du contrat + 5 ans pour les clients, jusqu'au désabonnement pour la newsletter.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">6. Vos droits (RGPD)</h2>
                    <p>
                      Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
                      <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
                      <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
                      <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                      <li><strong>Droit d'opposition</strong> : vous opposer au traitement</li>
                      <li><strong>Droit de retirer votre consentement</strong> à tout moment</li>
                    </ul>
                    <p className="mt-4">
                      Pour exercer ces droits : contact@finassur.fr. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">7. Sécurité</h2>
                    <p>
                      Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données (chiffrement SSL, accès restreint, hébergement sécurisé).
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">8. Cookies</h2>
                    <p>
                      Le site peut utiliser des cookies pour le fonctionnement technique et l'analyse d'audience. Vous pouvez les désactiver dans les paramètres de votre navigateur.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">9. Modifications</h2>
                    <p>
                      Cette politique peut être modifiée. La version en vigueur est celle publiée sur cette page.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">10. Contact</h2>
                    <p>
                      Questions sur vos données :{' '}
                      <a href="mailto:contact@finassur.fr" className="text-secondary hover:underline font-medium">
                        contact@finassur.fr
                      </a>
                      . Consultez également nos{' '}
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

export default Privacy;
