import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonialsData } from '@/assets/data/testimonials';

export const metadata = { title: 'Témoignages | Finassur', description: 'Découvrez les avis de nos clients.' };

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-primary mb-6 text-center">Ils nous font confiance</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonialsData.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
        </div>
      </div>
    </div>
  );
}
