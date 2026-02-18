import { Link } from 'react-router-dom';

const FooterLegal = () => {
  return (
    <div className="border-t border-white/20 pt-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div>
          <h5 className="font-bold mb-3 text-sm uppercase tracking-wider text-white/80">Informations Légales</h5>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link to="/legal" className="text-white/60 hover:text-white transition-colors">Mentions légales</Link>
            <span className="text-white/30">•</span>
            <Link to="/terms" className="text-white/60 hover:text-white transition-colors">CGU</Link>
            <span className="text-white/30">•</span>
            <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>

        <div>
          <h5 className="font-bold mb-3 text-sm uppercase tracking-wider text-white/80">Informations Société</h5>
          <div className="text-sm text-white/60 space-y-1">
            <div>Finassur SAS - Capital social 500 000€</div>
            <div>SIREN: 123 456 789 - RCS Paris</div>
            <div>Siège social: 123 Avenue des Champs-Élysées, 75008 Paris</div>
          </div>
        </div>

        <div>
          <h5 className="font-bold mb-3 text-sm uppercase tracking-wider text-white/80">Agrément & Régulation</h5>
          <div className="text-sm text-white/60 space-y-1">
            <div>Établissement de crédit agréé ACPR n°12345</div>
            <div>Membre de l'Association Française des Sociétés Financières</div>
            <div>Soumis au contrôle de la Banque de France</div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
        <div className="text-white/60 text-sm text-center md:text-left">
          © 2025 Finassur. Tous droits réservés.
        </div>
      </div>
    </div>
  );
};

export default FooterLegal;
