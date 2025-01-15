import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import movies from '@/data/movies';
import Footer from '@/components/Footer';
import { createSlug } from '@/utils/urlUtils';

interface Props {
  params: Promise<{
    movieSlug: string;
  }>;
}

async function getMovieBySlug(slug: string) {
  return movies.find(movie => createSlug(movie.title) === slug);
}

export default async function MoviePage({ params }: Props) {
  const resolvedParams = await params;
  const movie = await getMovieBySlug(resolvedParams.movieSlug);

  if (!movie) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <Link 
          href="/"
          className="text-blue-500 hover:text-blue-600 mb-8 inline-flex items-center gap-2"
        >
          ← Back to Movies
        </Link>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[600px] w-full max-w-sm mx-auto">
            <Image
              src={movie.image}
              alt={movie.title}
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{movie.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="text-lg">{movie.rating}/10</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{movie.description}</p>
            <p className="text-sm text-gray-500">
              Release Date: {formatDate(movie.releaseDate)}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
