import Link from 'next/link';
import { sectorsData } from '@/assets/data/sectors';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const sector = sectorsData.find(s => s.id === params.id);
  if (!sector) return { title: 'Secteur | Finassur' };
  return { title: `${sector.title} | Finassur`, description: sector.description };
}

export default function SectorDetailPage({ params }) {
  const sector = sectorsData.find(s => s.id === params.id);
  if (!sector) notFound();

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
        <div className="container mx-auto px-6">
          <Link href="/sectors" className="text-secondary hover:underline mb-6 inline-block">← Retour aux secteurs</Link>
          <div className={`inline-flex w-20 h-20 bg-gradient-to-br ${sector.color} rounded-2xl items-center justify-center mb-6`}>
            <i className={`fa-solid ${sector.icon} text-white text-4xl`}></i>
          </div>
          <h1 className="text-5xl font-bold text-primary mb-6">{sector.title}</h1>
          <p className="text-xl text-gray-600">{sector.description}</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-6">Équipements financés</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {sector.equipments?.map((eq, i) => (
              <li key={i} className="flex items-center gap-3">
                <i className="fa-solid fa-check text-accent"></i>
                <span>{eq}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Link href="/contact" className="btn-primary">Demander un financement</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
