const FooterBadges = () => {
  return (
    <div className="border-t border-white/10 pt-6 mb-6">
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        <div className="flex items-center space-x-3 text-white/70">
          <i className="fa-solid fa-shield-halved text-accent"></i>
          <span className="text-sm font-medium">Données sécurisées</span>
        </div>
        <div className="flex items-center space-x-3 text-white/70">
          <i className="fa-solid fa-headset text-secondary"></i>
          <span className="text-sm font-medium">Support expert</span>
        </div>
        <div className="flex items-center space-x-3 text-white/70">
          <i className="fa-solid fa-award text-orange-500"></i>
          <span className="text-sm font-medium">Certifié ISO 9001</span>
        </div>
        <div className="flex items-center space-x-3 text-white/70">
          <i className="fa-solid fa-check-circle text-green-400"></i>
          <span className="text-sm font-medium">Agréé ACPR</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBadges;
