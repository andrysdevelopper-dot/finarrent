import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="text-center px-6">
        <h1 className="text-9xl font-bold text-secondary">404</h1>
        <h2 className="text-2xl font-bold text-primary mt-4 mb-6">Page introuvable</h2>
        <p className="text-gray-600 mb-8">La page que vous recherchez n&apos;existe pas ou a été déplacée.</p>
        <Link href="/" className="btn-primary">Retour à l&apos;accueil</Link>
      </div>
    </div>
  );
}
