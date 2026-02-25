import { getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default async function EspacePage() {
  const session = await getSession();

  if (!session?.user) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12">
              <img
                src="/Finassurs_logo.jpeg"
                alt="Finassur"
                className="h-12 w-auto mx-auto mb-6 object-contain"
              />
              <h1 className="text-2xl font-bold text-primary mb-2">
                Votre financement en toute simplicité
              </h1>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Connectez-vous à votre espace personnel pour suivre vos demandes de financement, 
                consulter vos dossiers et gérer vos projets en un clic. Réponse de principe sous 48h, 
                accompagnement personnalisé et données sécurisées.
              </p>
              <a
                href="/api/auth/login?returnTo=/espace"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <i className="fa-solid fa-right-to-bracket" />
                Se connecter
              </a>
              <p className="text-sm text-gray-500 mt-6">
                Pas encore de compte ? La connexion en crée un automatiquement.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-6 text-secondary font-medium hover:text-secondary/80 transition-colors"
              >
                Accéder au site
                <i className="fa-solid fa-arrow-right text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={user.picture || 'https://via.placeholder.com/64'}
                  alt={user.name || 'Avatar'}
                  className="w-16 h-16 rounded-full border-2 border-secondary/20"
                />
                <div>
                  <h1 className="text-2xl font-bold text-primary">
                    Bonjour, {user.name || user.email?.split('@')[0] || 'Utilisateur'}
                  </h1>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
              <a
                href="/api/auth/logout?returnTo=/"
                className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-secondary font-medium transition-colors"
              >
                <i className="fa-solid fa-right-from-bracket" />
                Déconnexion
              </a>
            </div>
          </div>

          {/* Dashboard - contenu principal */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <i className="fa-solid fa-file-lines text-secondary text-xl" />
              </div>
              <h2 className="text-lg font-bold text-primary mb-2">Mes demandes</h2>
              <p className="text-gray-600 text-sm mb-4">
                Consultez l&apos;état de vos demandes de financement
              </p>
              <Link
                href="/contact"
                className="text-secondary font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                Nouvelle demande
                <i className="fa-solid fa-arrow-right text-xs" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <i className="fa-solid fa-user text-accent text-xl" />
              </div>
              <h2 className="text-lg font-bold text-primary mb-2">Mon profil</h2>
              <p className="text-gray-600 text-sm mb-4">
                Gérez vos informations personnelles
              </p>
              <span className="text-gray-400 text-sm">Bientôt disponible</span>
            </div>
          </div>

          {/* Accès rapide */}
          <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-6 text-white">
            <h2 className="text-lg font-bold mb-4">Accès rapide</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors"
              >
                Faire une demande
              </Link>
              <Link
                href="/solutions"
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors"
              >
                Nos solutions
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
