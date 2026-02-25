import Link from 'next/link';

export default function FooterNav() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/90">Solutions</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="/solutions/credit-bail" className="text-white/60 hover:text-white transition-colors">Crédit-bail</Link></li>
          <li><Link href="/solutions/loa" className="text-white/60 hover:text-white transition-colors">LOA</Link></li>
          <li><Link href="/solutions/credit-pro" className="text-white/60 hover:text-white transition-colors">Crédit Pro</Link></li>
          <li><Link href="/assurance" className="text-white/60 hover:text-white transition-colors font-medium">Assurance Pro</Link></li>
          <li><Link href="/solutions/leasing-operationnel" className="text-white/60 hover:text-white transition-colors">Leasing Ops</Link></li>
          <li><Link href="/solutions/lld" className="text-white/60 hover:text-white transition-colors">LLD</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/90">Secteurs</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="/sectors/btp" className="text-white/60 hover:text-white transition-colors">BTP</Link></li>
          <li><Link href="/sectors/medical" className="text-white/60 hover:text-white transition-colors">Médical</Link></li>
          <li><Link href="/sectors/it" className="text-white/60 hover:text-white transition-colors">Tech</Link></li>
          <li><Link href="/sectors/transport" className="text-white/60 hover:text-white transition-colors">Transport</Link></li>
          <li><Link href="/sectors/industry" className="text-white/60 hover:text-white transition-colors">Industrie</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/90">Finassur</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">À propos</Link></li>
          <li><Link href="/why-leasing" className="text-white/60 hover:text-white transition-colors">Pourquoi nous</Link></li>
          <li><Link href="/process" className="text-white/60 hover:text-white transition-colors">Processus</Link></li>
          <li><Link href="/testimonials" className="text-white/60 hover:text-white transition-colors">Avis clients</Link></li>
          <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/90">Aide</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="/blog" className="text-white/60 hover:text-white transition-colors">Blog</Link></li>
          <li><Link href="/faq" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
          <li><Link href="/legal" className="text-white/60 hover:text-white transition-colors">Légal</Link></li>
        </ul>
      </div>
    </div>
  );
}
