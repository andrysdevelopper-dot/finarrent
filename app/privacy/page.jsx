import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata = {
  title: 'Politique de Confidentialité | Finassur',
  description: 'Comment nous protégeons et gérons vos données personnelles chez Finassur.',
};

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="text-4xl font-bold text-primary mb-8 text-center">Politique de Confidentialité</h1>
              
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Collecte des données</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Finassur collecte des données personnelles (nom, email, téléphone, SIREN) lors de vos demandes 
                    de financement ou via notre newsletter. Ces données sont nécessaires au traitement de vos 
                    demandes et à l&apos;amélioration de nos services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. Utilisation des données</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Vos données sont utilisées exclusivement par Finassur et ses partenaires financiers 
                    pour l&apos;étude de vos dossiers de financement ou d&apos;assurance. Nous ne vendons jamais 
                    vos données à des tiers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. Vos droits (RGPD)</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez 
                    d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données 
                    vous concernant. Vous pouvez exercer ces droits en nous contactant à : 
                    privacy@finassur.fr
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Cookies</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Notre site utilise des cookies techniques essentiels au bon fonctionnement et des cookies 
                    d&apos;analyse (Google Analytics) pour mesurer l&apos;audience du site de manière anonyme.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Sécurité</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Nous mettons en œuvre toutes les mesures de sécurité nécessaires (chiffrement SSL, 
                    sécurisation des serveurs) pour protéger vos données contre tout accès non autorisé.
                  </p>
                </section>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
