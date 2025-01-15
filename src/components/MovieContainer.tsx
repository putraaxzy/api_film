'use client';
import { useState, useCallback } from 'react';
import type { Movie } from '../types/movie';
import MovieList from './MovieList';
import { Search } from 'lucide-react';

interface MovieContainerProps {
  initialMovies: Movie[];
}

export default function MovieContainer({ initialMovies }: MovieContainerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const filteredMovies = initialMovies.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search className={`h-5 w-5 ${isFocused ? 'text-blue-500' : 'text-gray-400'}`} />
            </div>
            <input
              type="search"
              placeholder="Search movies..."
              onChange={handleSearch}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-gray-500 text-center">
              Found {filteredMovies.length} movies
            </p>
          )}
        </div>
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
}
