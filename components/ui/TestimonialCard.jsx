export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="flex items-center mb-6">
        {[...Array(testimonial.rating)].map((_, index) => (
          <div key={index} className="w-5 h-5 text-yellow-400">
            <i className="fa-solid fa-star"></i>
          </div>
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed mb-6 text-lg">&quot;{testimonial.text}&quot;</p>
      <div className="flex items-center space-x-4">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
        <div>
          <div className="font-bold text-primary">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</div>
        </div>
      </div>
      {testimonial.sector && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <div className="text-gray-600">
              <i className="fa-solid fa-industry text-secondary mr-2"></i>
              {testimonial.sector}
            </div>
            {testimonial.amount && <div className="text-gray-600 font-semibold">{testimonial.amount}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
