import PropTypes from 'prop-types';

const StatsCard = ({ icon, value, label, color = 'from-secondary to-indigo-600' }) => {
  return (
    <div className="text-center p-4 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl">
      {icon && (
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
          <i className={`fa-solid ${icon} text-white text-xl`}></i>
        </div>
      )}
      <div className="text-3xl font-bold text-secondary mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

StatsCard.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default StatsCard;
