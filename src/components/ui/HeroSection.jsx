import PropTypes from 'prop-types';

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryCta, 
  secondaryCta,
  backgroundGradient = 'from-primary via-primary/95 to-secondary',
  children,
  stats
}) => {
  return (
    <section className={`relative bg-gradient-to-br ${backgroundGradient} text-white overflow-hidden`}>
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            {subtitle && (
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-semibold">{subtitle}</span>
              </div>
            )}
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>
            
            {description && (
              <p className="text-xl text-white/90 leading-relaxed">
                {description}
              </p>
            )}

            {/* CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <span>{primaryCta.text}</span>
                    {primaryCta.icon && <i className={primaryCta.icon}></i>}
                  </a>
                )}
                
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <span>{secondaryCta.text}</span>
                    {secondaryCta.icon && <i className={secondaryCta.icon}></i>}
                  </a>
                )}
              </div>
            )}

            {/* Stats Row */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-white/80 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Custom Content or Image */}
          <div className="relative">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  primaryCta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string
  }),
  secondaryCta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string
  }),
  backgroundGradient: PropTypes.string,
  children: PropTypes.node,
  stats: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }))
};

export default HeroSection;
