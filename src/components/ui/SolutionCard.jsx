import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SolutionCard = ({ solution }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-secondary">
      {/* Icon */}
      <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
        <i className={`fa-solid ${solution.icon} text-white text-3xl`}></i>
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-primary mb-3">{solution.title}</h3>
      
      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
      
      {/* Advantages */}
      {solution.advantages && (
        <div className="space-y-2 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Avantages :</h4>
          {solution.advantages.slice(0, 3).map((advantage, index) => (
            <div key={index} className="flex items-start space-x-2 text-sm text-gray-600">
              <i className="fa-solid fa-check text-accent mt-1"></i>
              <span>{advantage}</span>
            </div>
          ))}
        </div>
      )}
      
      {/* Details */}
      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
        <div>
          <div className="text-xs text-gray-500 mb-1">Durée</div>
          <div className="font-semibold text-gray-900">{solution.duration}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Montant</div>
          <div className="font-semibold text-gray-900">{solution.minAmount} - {solution.maxAmount}</div>
        </div>
      </div>
      
      {/* CTA */}
      <Link
        to={`/solutions/${solution.id}`}
        className="inline-flex items-center space-x-2 text-secondary font-semibold hover:gap-3 transition-all"
      >
        <span>En savoir plus</span>
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
};

SolutionCard.propTypes = {
  solution: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    advantages: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.string.isRequired,
    minAmount: PropTypes.string.isRequired,
    maxAmount: PropTypes.string.isRequired
  }).isRequired
};

export default SolutionCard;
