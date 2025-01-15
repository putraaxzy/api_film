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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
            transition-transform duration-200 hover:scale-105 cursor-pointer max-w-[280px]"
          onClick={() => router.push(`/movie/${createSlug(movie.title)}`)}
        >
          <div className="relative h-[400px]">
            {movie.image ? (
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover rounded-t-lg"
                priority={movie.id <= 4}
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700 rounded-t-lg">
                <ImageOff className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>
          <div className="p-3">
            <h3 className="font-medium text-sm mb-1 text-gray-900 dark:text-white line-clamp-1">
              {movie.title}
            </h3>
            <div className="flex items-center gap-3">
              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
              <span className="text-xs text-gray-600 dark:text-gray-300">
                {movie.rating}/10
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-3">
              {movie.description}
            </p>
            <div className="text-xs text-gray-400 dark:text-gray-500">
              Release: {formatDate(movie.releaseDate)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
