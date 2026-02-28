import PageTransition from '@/components/animations/PageTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata = {
  title: 'Mentions Légales | Finassur',
  description: 'Informations légales concernant la société Finassur, éditeur du site.',
};

export default function LegalPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="text-4xl font-bold text-primary mb-8 text-center">Mentions Légales</h1>
              
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-building text-secondary"></i>Éditeur du site
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-2">
                    <p><strong>Finassur SAS</strong></p>
                    <p>Société par Actions Simplifiée au capital de 500 000€</p>
                    <p>Siège social : 123 Avenue des Champs-Élysées, 75008 Paris</p>
                    <p>SIREN : 123 456 789 - RCS Paris</p>
                    <p>TVA Intracommunautaire : FR 12 123456789</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-user-tie text-secondary"></i>Directeur de la publication
                  </h2>
                  <p className="text-gray-600">M. Jean Dupont, en sa qualité de Président de Finassur SAS.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-server text-secondary"></i>Hébergement
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-2">
                    <p>Ce site est hébergé par :</p>
                    <p><strong>Vercel Inc.</strong></p>
                    <p>340 S Lemon Ave #1192, Walnut, CA 91789, USA</p>
                    <p>Site web : https://vercel.com</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-certificate text-secondary"></i>Régulation
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Finassur est un intermédiaire en opérations de banque et en services de paiement (IOBSP) 
                    et intermédiaire d&apos;assurance (IAS) inscrit au Registre Unique des Intermédiaires 
                    tenu par l&apos;ORIAS sous le numéro 12345678.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-copyright text-secondary"></i>Propriété intellectuelle
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur 
                    et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                    les documents téléchargeables et les représentations iconographiques et photographiques.
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
