'use client';
import { useState } from 'react';
import type { Movie } from '../types/movie';
import MovieList from './MovieList';
import { Search } from 'lucide-react';

interface MovieContainerProps {
  initialMovies: Movie[];
}

export default function MovieContainer({ initialMovies }: MovieContainerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const filteredMovies = initialMovies.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <div className="max-w-2xl mx-auto">
          <div className={`relative transition-all duration-300 ${
            isFocused ? 'scale-105' : 'scale-100'
          }`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className={`h-5 w-5 transition-colors duration-200 ${
                isFocused ? 'text-blue-500' : 'text-gray-400'
              }`} />
            </div>
            <input
              type="search"
              placeholder="Search for movies..."
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="block w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                shadow-sm transition-all duration-300 bg-white dark:bg-gray-800
                hover:shadow-md text-gray-900 dark:text-white placeholder-gray-400
                dark:placeholder-gray-500"
            />
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-gray-500 text-center">
              Found {filteredMovies.length} movies matching your search
            </p>
          )}
        </div>
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
}
