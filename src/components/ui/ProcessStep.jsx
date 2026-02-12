import PropTypes from 'prop-types';

const ProcessStep = ({ step, index, isLast }) => {
  return (
    <div className="relative h-full">
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative z-10 h-full flex flex-col">
        {/* Step Number */}
        <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-6 mx-auto text-white text-2xl font-bold">
          {index + 1}
        </div>
        
        {/* Icon */}
        <div className={`w-12 h-12 ${step.iconBg} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
          <i className={`fa-solid ${step.icon} ${step.iconColor} text-2xl`}></i>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-primary mb-3 text-center">{step.title}</h3>
        
        {/* Description */}
        <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};

ProcessStep.propTypes = {
  step: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  isLast: PropTypes.bool
};

export default ProcessStep;
