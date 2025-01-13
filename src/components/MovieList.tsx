'use client';
import { Movie } from '@/types/movie';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  console.log('MovieList received movies:', movies); // Debug log

  if (!movies?.length) {
    return <p className="text-center text-gray-500">No movies available</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <article className="p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-2">{movie.description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <time dateTime={movie.releaseDate}>
          {new Date(movie.releaseDate).toLocaleDateString()}
        </time>
        <span className="font-medium">★ {movie.rating.toFixed(1)}</span>
      </div>
    </article>
  );
}
