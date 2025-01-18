'use client';
import Image from 'next/image';
import type { Movie } from '../types/movie';
import { Star, ImageOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { createSlug } from '@/utils/urlUtils';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  const router = useRouter();

  // Use consistent path format
  const handleMovieClick = (title: string) => {
    router.push(`/movie/${createSlug(title)}`);
  };

  if (!movies?.length) {
    return <p className="text-center text-gray-500">No movies available</p>;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {movies.map((movie) => (
        <div
          key={movie.id}
          onClick={() => handleMovieClick(movie.title)}
          className="group glass-card hover-glow animate-float cursor-pointer 
                   transform transition-all duration-500 hover:-translate-y-2"
        >
          <div className="relative aspect-[2/3] overflow-hidden rounded-t-2xl">
            {movie.image ? (
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={movie.id <= 4}
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-black/50">
                <ImageOff className="w-12 h-12 text-gray-400" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Star className="h-5 w-5 fill-yellow-400" />
                <span className="text-lg font-bold">{movie.rating.toFixed(1)}</span>
              </div>
              <p className="text-white/90 text-sm line-clamp-3">{movie.description}</p>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-white/90 group-hover:text-blue-400 transition-colors duration-300">
              {movie.title}
            </h3>
            <div className="text-sm text-blue-400/80 font-medium">
              {formatDate(movie.releaseDate)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
