'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { Movie } from '@/types/movie';
import { createSlug } from '@/utils/urlUtils';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface FeaturedMoviesProps {
  movies: Movie[];
}

const FeaturedMovies = ({ movies }: FeaturedMoviesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const handleMovieClick = (title: string) => {
    router.push(`/movie/${createSlug(title)}`);
  };

  return (
    <div className="relative group">
      <div className="relative h-[600px] md:h-[700px] rounded-2xl overflow-hidden">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform
              ${index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
            
            {/* Content Container */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-6xl mx-auto">
                  {/* Poster Card */}
                  <div className="w-[220px] md:w-[280px] lg:w-[320px] h-[330px] md:h-[420px] lg:h-[480px] 
                              rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] 
                              transform transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={movie.image}
                      alt={movie.title}
                      width={320}
                      height={480}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  {/* Movie Info */}
                  <div className="flex-1 max-w-xl text-center md:text-left">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 
                                 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                      {movie.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full 
                                    bg-yellow-500/20 backdrop-blur-sm">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-lg font-bold text-yellow-500">
                          {movie.rating.toFixed(1)}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">
                        {new Date(movie.releaseDate).getFullYear()}
                      </span>
                    </div>
                    <p className="text-lg text-gray-300/90 leading-relaxed mb-8 
                                line-clamp-3 md:line-clamp-none">
                      {movie.description}
                    </p>
                    <button
                      onClick={() => handleMovieClick(movie.title)}
                      className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md
                               hover:bg-white/20 transition-colors duration-300
                               text-white font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full
                 bg-black/30 hover:bg-black/50 backdrop-blur-md
                 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full
                 bg-black/30 hover:bg-black/50 backdrop-blur-md
                 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {movies.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 
              ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
