'use client';

import { useState } from 'react';

export default function FAQItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-secondary/30 transition-colors">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-primary text-lg pr-4">{question}</span>
        <i className={`fa-solid fa-chevron-down text-secondary transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">{answer}</div>
      </div>
    </div>
  );
}
