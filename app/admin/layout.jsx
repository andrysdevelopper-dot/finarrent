import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function AdminLayout({ children }) {
  const session = await getSession();
  if (!session?.user) {
    redirect('/api/auth/login?returnTo=/admin/demandes');
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/demandes" className="text-primary font-bold text-xl">
              Admin Finassur
            </Link>
            <span className="text-gray-500">|</span>
            <span className="text-gray-600">{session.user.email || session.user.name}</span>
          </div>
          <a
            href="/api/auth/logout?returnTo=/"
            className="text-sm text-gray-600 hover:text-secondary"
          >
            Déconnexion
          </a>
        </div>
        {children}
      </div>
    </div>
  );
}
