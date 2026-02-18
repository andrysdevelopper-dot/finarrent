import PropTypes from 'prop-types';

const AdvantageCard = ({ 
  icon, 
  title, 
  description, 
  gradient = 'from-secondary to-accent',
  features = []
}) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
      {/* Icon */}
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <i className={`fa-solid ${icon} text-white text-3xl`}></i>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <i className="fa-solid fa-check text-accent mt-1 flex-shrink-0"></i>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

AdvantageCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gradient: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string)
};

export default AdvantageCard;
