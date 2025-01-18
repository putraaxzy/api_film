'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Calendar } from 'lucide-react';
import { findMovieBySlug } from '@/utils/urlUtils';
import movies from '@/data/movies';

export default function MoviePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const movie = findMovieBySlug(movies, slug);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Movie Not Found</h1>
          <Link 
            href="/"
            className="inline-block px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={movie.image}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors mb-8"
          >
            ← Back to Movies
          </Link>

          {/* Movie Info */}
          <div className="flex flex-col md:flex-row gap-8 glass-card p-8">
            {/* Poster */}
            <div className="w-full md:w-[300px] shrink-0">
              <div className="aspect-[2/3] relative rounded-xl overflow-hidden">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-yellow-500">{movie.rating}</span>
                </div>
                {movie.duration && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="h-5 w-5" />
                    <span>{movie.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(movie.releaseDate).getFullYear()}</span>
                </div>
              </div>

              {movie.genre && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {movie.genre.map(genre => (
                    <span key={genre} className="px-3 py-1 rounded-full bg-white/10">
                      {genre}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {movie.description}
              </p>

              {/* Additional Info */}
              <div className="grid md:grid-cols-2 gap-6">
                {movie.director && (
                  <div>
                    <h3 className="font-semibold mb-2">Director</h3>
                    <p className="text-gray-300">{movie.director}</p>
                  </div>
                )}
                {movie.cast && (
                  <div>
                    <h3 className="font-semibold mb-2">Cast</h3>
                    <div className="text-gray-300">
                      {movie.cast.join(", ")}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Trailer Section */}
          {movie.trailerYoutubeId && (
            <div className="mt-8 glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Watch Trailer</h2>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${movie.trailerYoutubeId}`}
                  title={`${movie.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
