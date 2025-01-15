import { notFound } from 'next/navigation';
import movies from '@/data/movies';
import { Star } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MovieDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--background)] py-8">
      <div className="container mx-auto px-4">
        <Link 
          href="/"
          className="text-blue-500 hover:text-blue-600 mb-8 inline-flex items-center gap-2"
        >
          ← Back to Movies
        </Link>
        
        <div className="mt-6 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
              {movie.title}
            </h1>
            
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="text-lg text-[var(--foreground)]">
                {movie.rating}/10
              </span>
            </div>
            
            <div className="text-[var(--foreground)]/60 mb-6">
              Release Date: {new Date(movie.releaseDate).toLocaleDateString()}
            </div>
            
            <div className="prose prose-lg text-[var(--foreground)]/80">
              <p>{movie.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
