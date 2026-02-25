'use client';

import { useState, useCallback } from 'react';

export function useFinancingCalculator() {
  const [amount, setAmount] = useState(50000);
  const [duration, setDuration] = useState(36);
  const [interestRate] = useState(3.5);

  const calculateMonthlyPayment = useCallback(() => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = duration;
    const monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return Math.round(monthlyPayment);
  }, [amount, duration, interestRate]);

  const calculateTotalCost = useCallback(() => {
    const monthly = calculateMonthlyPayment();
    return monthly * duration;
  }, [calculateMonthlyPayment, duration]);

  const calculateTotalInterest = useCallback(() => {
    const totalCost = calculateTotalCost();
    return totalCost - amount;
  }, [calculateTotalCost, amount]);

  return {
    amount,
    setAmount,
    duration,
    setDuration,
    interestRate,
    monthlyPayment: calculateMonthlyPayment(),
    totalCost: calculateTotalCost(),
    totalInterest: calculateTotalInterest()
  };
}
