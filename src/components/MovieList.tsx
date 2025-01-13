'use client';
import { Movie } from '@/types/movie';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  if (!movies?.length) {
    return <p className="text-center text-gray-500">No movies available</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <div 
          key={movie.id}
          className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
          <p className="text-gray-600 mb-4">{movie.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Released: {movie.releaseDate}</span>
            <span>Rating: {movie.rating}/10</span>
          </div>
        </div>
      ))}
    </div>
  );
}
