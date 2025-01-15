'use client';
import Image from 'next/image';
import type { Movie } from '../types/movie';
import { Star, ImageOff } from 'lucide-react';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
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
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="relative w-full aspect-[2/3]">
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
            <h3 className="font-bold text-sm mb-1 line-clamp-1">{movie.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs mb-2 line-clamp-2">
              {movie.description}
            </p>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">
                {formatDate(movie.releaseDate)}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">{movie.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
