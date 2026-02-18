import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Financement & Assurance professionnels</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              Développez votre activité avec des{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">
                solutions de financement
              </span>{' '}
              et{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                d'assurance
              </span>{' '}
              adaptées
            </h1>

            <p className="text-base sm:text-xl text-white/90 leading-relaxed">
              Crédit-bail, LOA, assurance professionnelle... Financez vos équipements et protégez votre entreprise. De 3 000€ à 500 000€, réponse en 48h.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Obtenir un financement</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link
                to="/assurance"
                className="px-8 py-4 bg-accent/90 hover:bg-accent text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <i className="fa-solid fa-shield-halved"></i>
                <span>Assurance Pro</span>
              </Link>
              <Link
                to="/process"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 inline-flex items-center space-x-2"
              >
                <i className="fa-solid fa-play-circle"></i>
                <span>Comment ça marche</span>
              </Link>
            </div>

            <div className="flex items-center flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-check-circle text-accent text-xl"></i>
                <span className="font-medium">Sans apport</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-check-circle text-accent text-xl"></i>
                <span className="font-medium">Réponse en 48h</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-check-circle text-accent text-xl"></i>
                <span className="font-medium">100% en ligne</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stats Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="h-64 overflow-hidden rounded-2xl mb-6">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a94c12e6b2-de3b0a26544f06bb6d8f.png"
                  alt="Professional business team"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl">
                  <div className="text-3xl font-bold text-secondary">50M€</div>
                  <div className="text-sm text-gray-600 mt-1">Financements accordés</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl">
                  <div className="text-3xl font-bold text-accent">1200+</div>
                  <div className="text-sm text-gray-600 mt-1">Entreprises clientes</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-indigo-500/5 to-indigo-500/10 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-600">48h</div>
                  <div className="text-sm text-gray-600 mt-1">Réponse moyenne</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
