import { useState } from 'react';
import PropTypes from 'prop-types';

const FinancingCalculator = ({ 
  onCalculate,
  defaultAmount = 50000,
  defaultDuration = 36,
  defaultRate = 3.5
}) => {
  const [amount, setAmount] = useState(defaultAmount);
  const [duration, setDuration] = useState(defaultDuration);
  const [rate] = useState(defaultRate);

  // Calculate monthly payment
  const calculateMonthlyPayment = () => {
    const monthlyRate = rate / 100 / 12;
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, duration)) / 
                    (Math.pow(1 + monthlyRate, duration) - 1);
    return payment.toFixed(2);
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalCost = (monthlyPayment * duration).toFixed(2);
  const totalInterest = (totalCost - amount).toFixed(2);

  const handleCalculate = () => {
    if (onCalculate) {
      onCalculate({
        amount,
        duration,
        rate,
        monthlyPayment,
        totalCost,
        totalInterest
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
      <h3 className="text-2xl font-bold text-primary mb-6">Simulateur de Financement</h3>

      {/* Amount Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <label className="text-gray-700 font-semibold">Montant du financement</label>
          <span className="text-2xl font-bold text-secondary">{amount.toLocaleString('fr-FR')} €</span>
        </div>
        <input
          type="range"
          min="5000"
          max="500000"
          step="1000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>5 000 €</span>
          <span>500 000 €</span>
        </div>
      </div>

      {/* Duration Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <label className="text-gray-700 font-semibold">Durée</label>
          <span className="text-2xl font-bold text-secondary">{duration} mois</span>
        </div>
        <input
          type="range"
          min="12"
          max="84"
          step="6"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>12 mois</span>
          <span>84 mois</span>
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Mensualité</div>
            <div className="text-3xl font-bold text-primary">{monthlyPayment} €</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Coût total</div>
            <div className="text-2xl font-bold text-gray-700">{totalCost} €</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Intérêts</div>
            <div className="text-2xl font-bold text-gray-700">{totalInterest} €</div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleCalculate}
        className="w-full btn-primary text-center justify-center"
      >
        <span>Obtenir une offre personnalisée</span>
        <i className="fa-solid fa-arrow-right ml-2"></i>
      </button>

      {/* Info Text */}
      <p className="text-xs text-gray-500 text-center mt-4">
        Taux indicatif de {rate}% - Simulation à titre informatif
      </p>
    </div>
  );
};

FinancingCalculator.propTypes = {
  onCalculate: PropTypes.func,
  defaultAmount: PropTypes.number,
  defaultDuration: PropTypes.number,
  defaultRate: PropTypes.number
};

export default FinancingCalculator;
