import MovieContainer from '@/components/MovieContainer';
import Footer from '@/components/Footer';
import movies from '@/data/movies';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 relative">
            <span className="inline-block animate-shimmer bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent bg-[200%_auto] hover:scale-105 transition-transform duration-300 cursor-default text-shadow-glow">
              Movie Collection
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--foreground)]/60 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Explore our handpicked selection of cinematic masterpieces from around the world!
          </p>
        </header>
        <MovieContainer initialMovies={movies} />
      </main>
      <Footer />
    </div>
  );
}