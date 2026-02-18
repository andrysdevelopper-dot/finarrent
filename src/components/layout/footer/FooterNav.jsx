import { Link } from 'react-router-dom';

const FooterNav = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* Solutions */}
      <div>
        <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/90">Solutions</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/solutions/credit-bail" className="text-white/60 hover:text-white transition-colors">Crédit-bail</Link></li>
          <li><Link to="/solutions/loa" className="text-white/60 hover:text-white transition-colors">LOA</Link></li>
          <li><Link to="/solutions/credit-pro" className="text-white/60 hover:text-white transition-colors">Crédit Pro</Link></li>
          <li><Link to="/assurance" className="text-white/60 hover:text-white transition-colors font-medium">Assurance Pro</Link></li>
          <li><Link to="/solutions/leasing-operationnel" className="text-white/60 hover:text-white transition-colors">Leasing Ops</Link></li>
          <li><Link to="/solutions/lld" className="text-white/60 hover:text-white transition-colors">LLD</Link></li>
        </ul>
      </div>

      {/* Sectors */}
      <div>
        <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/90">Secteurs</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/sectors/btp" className="text-white/60 hover:text-white transition-colors">BTP</Link></li>
          <li><Link to="/sectors/medical" className="text-white/60 hover:text-white transition-colors">Médical</Link></li>
          <li><Link to="/sectors/it" className="text-white/60 hover:text-white transition-colors">Tech</Link></li>
          <li><Link to="/sectors/transport" className="text-white/60 hover:text-white transition-colors">Transport</Link></li>
          <li><Link to="/sectors/industry" className="text-white/60 hover:text-white transition-colors">Industrie</Link></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/90">Finassur</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">À propos</Link></li>
          <li><Link to="/why-leasing" className="text-white/60 hover:text-white transition-colors">Pourquoi nous</Link></li>
          <li><Link to="/process" className="text-white/60 hover:text-white transition-colors">Processus</Link></li>
          <li><Link to="/testimonials" className="text-white/60 hover:text-white transition-colors">Avis clients</Link></li>
          <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/90">Aide</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/blog" className="text-white/60 hover:text-white transition-colors">Blog</Link></li>
          <li><Link to="/simulator" className="text-white/60 hover:text-white transition-colors">Simulateur</Link></li>
          <li><Link to="/faq" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
          <li><Link to="/legal" className="text-white/60 hover:text-white transition-colors">Légal</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterNav;
