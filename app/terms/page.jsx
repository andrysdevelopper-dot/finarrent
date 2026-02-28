import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata = {
  title: 'Conditions Générales d&apos;Utilisation | Finassur',
  description: 'Les conditions d&apos;utilisation du site et des services Finassur.',
};

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="text-4xl font-bold text-primary mb-8 text-center">Conditions Générales d&apos;Utilisation</h1>
              
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">1. Objet</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Les présentes CGU ont pour objet de définir les modalités de mise à disposition 
                    du site Finassur et les conditions d&apos;utilisation par l&apos;utilisateur.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. Services</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Finassur propose des outils de simulation et de mise en relation pour le financement 
                    professionnel et l&apos;assurance. Les simulations sont fournies à titre indicatif et 
                    ne constituent pas un engagement contractuel.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. Responsabilité</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Finassur s&apos;efforce de fournir des informations précises mais ne peut être tenue responsable 
                    des erreurs ou omissions. L&apos;octroi d&apos;un financement est soumis à l&apos;acceptation finale 
                    du dossier par nos partenaires financiers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Accès au site</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à internet. 
                    Tous les frais liés à l&apos;accès au service sont à la charge de l&apos;utilisateur.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Droit applicable</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux 
                    de Paris seront seuls compétents.
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
