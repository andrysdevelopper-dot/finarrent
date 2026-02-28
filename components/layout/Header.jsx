'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();
  const { user, isLoading } = useUser();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    { name: 'Crédit-bail', icon: 'fa-handshake', path: '/solutions/credit-bail' },
    { name: 'Location avec option d\'achat', icon: 'fa-file-contract', path: '/solutions/loa' },
    { name: 'Crédit professionnel', icon: 'fa-coins', path: '/solutions/credit-pro' },
    { name: 'Assurance professionnelle', icon: 'fa-shield-halved', path: '/assurance' }
  ];

  const sectors = [
    { name: 'BTP & Construction', icon: 'fa-hard-hat', path: '/sectors#btp' },
    { name: 'Médical & Santé', icon: 'fa-user-doctor', path: '/sectors#medical' },
    { name: 'Informatique & Tech', icon: 'fa-laptop-code', path: '/sectors#it' },
    { name: 'Transport & Logistique', icon: 'fa-truck', path: '/sectors#transport' }
  ];

  const isOverDarkHero = pathname === '/' && !isScrolled;
  const navLinkClass = isOverDarkHero ? 'text-white/95 hover:text-white' : 'text-gray-700 hover:text-secondary';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : isOverDarkHero ? 'bg-primary/20 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/Finassurs_logo.jpeg" alt="Finassur - Financement professionnel" className="h-10 sm:h-12 w-auto object-contain" />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group" onMouseEnter={() => setOpenDropdown('solutions')} onMouseLeave={() => setOpenDropdown(null)}>
              <button className={`${navLinkClass} font-medium flex items-center space-x-1 transition-colors`}>
                <span>Nos Solutions</span>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </button>
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${openDropdown === 'solutions' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="p-2">
                  {solutions.map((s, i) => (
                    <Link key={i} href={s.path} className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <i className={`fa-solid ${s.icon} text-secondary`}></i>
                      <span className="font-medium">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group" onMouseEnter={() => setOpenDropdown('sectors')} onMouseLeave={() => setOpenDropdown(null)}>
              <button className={`${navLinkClass} font-medium flex items-center space-x-1 transition-colors`}>
                <span>Secteurs Financés</span>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </button>
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${openDropdown === 'sectors' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="p-2">
                  {sectors.map((s, i) => (
                    <Link key={i} href={s.path} className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <i className={`fa-solid ${s.icon} text-secondary`}></i>
                      <span className="font-medium">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/assurance" className={`${navLinkClass} font-medium transition-colors`}>Assurance</Link>
            <Link href="/why-leasing" className={`${navLinkClass} font-medium transition-colors`}>Pourquoi Finassur</Link>
            <Link href="/blog" className={`${navLinkClass} font-medium transition-colors`}>Actualités</Link>
            <Link href="/contact" className={`${navLinkClass} font-medium transition-colors`}>Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <Link href="/espace" className={`hidden sm:flex items-center space-x-3 px-4 py-2 rounded-xl transition-all duration-300 group border border-transparent ${
                isOverDarkHero ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-50 hover:bg-gray-100 text-primary'
              }`}>
                {user.picture ? (
                  <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full border-2 border-accent/20" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <i className="fa-solid fa-user"></i>
                  </div>
                )}
                <div className="text-left hidden xl:block">
                  <div className="text-xs font-bold leading-tight line-clamp-1">{user.name}</div>
                  <div className={`text-[10px] opacity-70 ${isOverDarkHero ? 'text-white' : 'text-gray-500'}`}>Mon Dashboard</div>
                </div>
              </Link>
            ) : (
              <Link href="/api/auth/login" className={`hidden sm:flex items-center space-x-2 px-6 py-2.5 text-sm font-bold rounded-xl border-2 transition-all duration-300 ${
                isOverDarkHero ? 'border-white/80 text-white hover:bg-white/10' : 'border-secondary text-secondary hover:bg-secondary hover:text-white'
              }`}>
                <i className="fa-solid fa-user"></i>
                <span>Accéder à mon espace</span>
              </Link>
            )}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden ${isOverDarkHero ? 'text-white' : 'text-gray-700'}`} aria-label="Menu">
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 pt-4 border-t ${isOverDarkHero ? 'border-white/20' : 'border-gray-200'}`}>
            <div className="space-y-4">
              <Link href="/solutions" className={`block font-medium ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-secondary'}`} onClick={() => setIsMobileMenuOpen(false)}>Nos Solutions</Link>
              <Link href="/sectors" className={`block font-medium ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-secondary'}`} onClick={() => setIsMobileMenuOpen(false)}>Secteurs Financés</Link>
              <Link href="/assurance" className={`block font-medium ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-secondary'}`} onClick={() => setIsMobileMenuOpen(false)}>Assurance</Link>
              <Link href="/why-leasing" className={`block font-medium ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-secondary'}`} onClick={() => setIsMobileMenuOpen(false)}>Pourquoi Finassur</Link>
              <Link href="/blog" className={`block font-medium ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-secondary'}`} onClick={() => setIsMobileMenuOpen(false)}>Actualités</Link>
              <Link href="/contact" className={`block font-medium ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-secondary'}`} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              {user ? (
                <Link href="/espace" className={`flex items-center space-x-3 p-3 rounded-xl ${isOverDarkHero ? 'bg-white/10 text-white' : 'bg-gray-50 text-primary'}`} onClick={() => setIsMobileMenuOpen(false)}>
                  <img src={user.picture} alt="" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-xs opacity-70">Tableau de bord</div>
                  </div>
                </Link>
              ) : (
                <Link href="/api/auth/login" className={`flex items-center space-x-2 font-semibold ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-secondary hover:text-secondary/80'}`} onClick={() => setIsMobileMenuOpen(false)}>
                  <i className="fa-solid fa-user"></i>
                  <span>Accéder à mon espace</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
