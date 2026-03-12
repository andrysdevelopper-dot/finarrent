import Link from 'next/link';
import { blogData } from '@/assets/data/blog';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = blogData.find(p => p.id === Number(id));
  if (!post) return { title: 'Article | Finassur' };
  return { title: `${post.title} | Finassur`, description: post.excerpt };
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = blogData.find(p => p.id === Number(id));
  if (!post) notFound();

  return (
    <div className="min-h-screen">
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/blog" className="text-secondary hover:underline mb-6 inline-block">← Retour au blog</Link>
          <span className="text-secondary text-sm font-medium">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 mb-8">
            <span>{post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime} de lecture</span>
          </div>
          <div className="h-96 overflow-hidden rounded-2xl mb-8">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600">{post.excerpt}</p>
            <p className="mt-6 text-gray-600">Contenu de l&apos;article à compléter...</p>
          </div>
        </div>
      </article>
    </div>
  );
}
