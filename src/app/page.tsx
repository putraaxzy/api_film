'use client'

import MovieContainer from '@/components/MovieContainer';
import dynamic from 'next/dynamic';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import movies from '@/data/movies';

const FeaturedMovies = dynamic(() => import('@/components/FeaturedMovies'), {
  ssr: false
});

const Home = () => {
  const featuredMovies = movies.filter(movie => movie.rating >= 8.5);
  
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-background" />
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/mkomfZHG5q4?autoplay=1&mute=1&controls=0&loop=1&playlist=mkomfZHG5q4&showinfo=0&rel=0&modestbranding=1"
              className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                pointerEvents: 'none',
                filter: 'brightness(0.6)',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm font-medium text-purple-400">Discover Cinema</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black tracking-tight">
              <span className="inline-block animate-shimmer bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 
                            bg-clip-text text-transparent bg-[200%_auto]">
                Explore the Magic of Movies
              </span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Immerse yourself in a world of storytelling through our carefully curated collection
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Movies Section */}
        <section className="py-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
            Featured Movies
          </h2>
          <FeaturedMovies movies={featuredMovies} />
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
            Browse by Category
          </h2>
          <CategorySection />
        </section>

        {/* All Movies Section */}
        <section className="py-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
            All Movies
          </h2>
          <MovieContainer initialMovies={movies} />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;