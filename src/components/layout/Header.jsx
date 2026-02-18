import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  // const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  
  // Temporary mock values for development without Auth0
  const isAuthenticated = false;
  const isLoading = false;
  const user = null;
  const loginWithRedirect = () => console.log('Auth disabled');
  const logout = () => console.log('Auth disabled');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

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

  // Sur la page d'accueil en haut = Hero sombre → texte clair. Sinon ou après scroll = fond clair → texte sombre
  const isOverDarkHero = location.pathname === '/' && !isScrolled;
  const navLinkClass = isOverDarkHero
    ? 'text-white/95 hover:text-white'
    : 'text-gray-700 hover:text-secondary';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : isOverDarkHero
            ? 'bg-primary/20 backdrop-blur-sm'
            : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/Finassurs_logo.jpeg"
              alt="Finassur - Financement professionnel"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`${navLinkClass} font-medium flex items-center space-x-1 transition-colors`}>
                <span>Nos Solutions</span>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${
                  openDropdown === 'solutions' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="p-2">
                  {solutions.map((solution, index) => (
                    <Link
                      key={index}
                      to={solution.path}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <i className={`fa-solid ${solution.icon} text-secondary`}></i>
                      <span className="font-medium">{solution.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sectors Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('sectors')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`${navLinkClass} font-medium flex items-center space-x-1 transition-colors`}>
                <span>Secteurs Financés</span>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${
                  openDropdown === 'sectors' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="p-2">
                  {sectors.map((sector, index) => (
                    <Link
                      key={index}
                      to={sector.path}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <i className={`fa-solid ${sector.icon} text-secondary`}></i>
                      <span className="font-medium">{sector.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/assurance" className={`${navLinkClass} font-medium transition-colors`}>
              Assurance
            </Link>
            <Link to="/why-leasing" className={`${navLinkClass} font-medium transition-colors`}>
              Pourquoi Finassur
            </Link>
            <Link to="/blog" className={`${navLinkClass} font-medium transition-colors`}>
              Actualités
            </Link>
            <Link to="/contact" className={`${navLinkClass} font-medium transition-colors`}>
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            {!isLoading && (
              <>
                {isAuthenticated ? (
                  <div className="hidden lg:flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={user?.picture || 'https://via.placeholder.com/40'}
                        alt={user?.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                    </div>
                    <button
                      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                      className="px-6 py-2.5 text-secondary font-semibold hover:bg-secondary hover:text-white rounded-lg transition-all duration-300 border-2 border-secondary"
                    >
                      Déconnexion
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => loginWithRedirect()}
                    className={`hidden lg:block px-6 py-2.5 font-semibold rounded-lg transition-all duration-300 border-2 ${
                      isOverDarkHero
                        ? 'text-white border-white/80 hover:bg-white/20'
                        : 'text-secondary border-secondary hover:bg-secondary hover:text-white'
                    }`}
                  >
                    Connexion
                  </button>
                )}
              </>
            )}
            <Link
              to="/simulator"
              className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center"
            >
              <span className="hidden sm:inline">Simuler mon projet</span>
              <i className="fa-solid fa-calculator sm:hidden text-lg"></i>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${isOverDarkHero ? 'text-white' : 'text-gray-700'}`}
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 pt-4 border-t ${isOverDarkHero ? 'border-white/20' : 'border-gray-200'}`}>
            <div className="space-y-4">
              <Link
                to="/solutions"
                className={`block font-medium transition-colors ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-secondary'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nos Solutions
              </Link>
              <Link
                to="/sectors"
                className={`block font-medium transition-colors ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-secondary'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Secteurs Financés
              </Link>
              <Link
                to="/assurance"
                className={`block font-medium transition-colors ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-secondary'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Assurance
              </Link>
              <Link
                to="/why-leasing"
                className={`block font-medium transition-colors ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-secondary'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pourquoi Finassur
              </Link>
              <Link
                to="/blog"
                className={`block font-medium transition-colors ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-secondary'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Actualités
              </Link>
              <Link
                to="/contact"
                className={`block font-medium transition-colors ${isOverDarkHero ? 'text-white hover:text-white/90' : 'text-gray-700 hover:text-secondary'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              {!isLoading && !isAuthenticated && (
                <button
                  onClick={() => {
                    loginWithRedirect();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left font-semibold ${isOverDarkHero ? 'text-white' : 'text-secondary'}`}
                >
                  Connexion
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
