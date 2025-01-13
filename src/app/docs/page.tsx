import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Navigation */}
        <nav className="mb-8">
          <Link 
            href="/"
            className="text-sm text-blue-500 hover:text-blue-600 mb-4 inline-flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </nav>

        {/* Introduction */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Movie Collection API</h1>
          <p className="text-lg text-[var(--foreground)]/60 mb-6">
            A comprehensive documentation for the Movie Collection API and its frontend implementation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[var(--foreground)]/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Tech Stack</h3>
              <ul className="list-disc list-inside text-[var(--foreground)]/60 space-y-1">
                <li>Next.js 14 (App Router)</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Lucide Icons</li>
              </ul>
            </div>
            <div className="border border-[var(--foreground)]/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-[var(--foreground)]/60 space-y-1">
                <li>Server-side Rendering</li>
                <li>API Routes</li>
                <li>Responsive Design</li>
                <li>Type Safety</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Getting Started</h2>
          <div className="border border-[var(--foreground)]/10 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Installation</h3>
              <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto">
{`git clone https://github.com/arundaya-project/api_film>
cd api_prjkt
npm install`}
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Development</h3>
              <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto">
{`npm run dev`}
              </pre>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">API Reference</h2>
          <div className="border border-[var(--foreground)]/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[var(--foreground)]">GET /api/movies</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Endpoint:</h4>
                <pre className="bg-[var(--foreground)]/5 p-4 rounded-md">GET http://localhost:3000/api/movies</pre>
              </div>
              <div>
                <h4 className="font-medium mb-2">Response:</h4>
                <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto">
{`[
  {
    "id": number,
    "title": string,
    "description": string,
    "releaseDate": "YYYY-MM-DD",
    "rating": number (0-10)
  }
]`}
                </pre>
              </div>
              <div>
                <h4 className="font-medium mb-2">Example Usage:</h4>
                <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto">
{`// Using fetch
const response = await fetch('http://localhost:3000/api/movies');
const movies = await response.json();

// Using axios
const response = await axios.get('http://localhost:3000/api/movies');
const movies = response.data;`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Components</h2>
          <div className="space-y-6">
            {[
              {
                name: 'MovieContainer',
                description: 'Main container component with search functionality',
                props: ['initialMovies: Movie[]'],
                usage: `<MovieContainer initialMovies={movies} />`,
                features: [
                  'Real-time search filtering',
                  'Search through titles and descriptions',
                  'Animated search input',
                  'Results counter'
                ]
              },
              {
                name: 'MovieList',
                description: 'Responsive grid layout for movie cards',
                props: ['movies: Movie[]'],
                usage: `<MovieList movies={movies} />`,
                features: [
                  'Responsive grid layout',
                  'Empty state handling',
                  'Movie card components',
                  'Rating display'
                ]
              }
            ].map(component => (
              <div key={component.name} className="border border-[var(--foreground)]/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{component.name}</h3>
                <p className="text-[var(--foreground)]/60 mb-4">{component.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Props:</h4>
                  <ul className="list-disc list-inside text-[var(--foreground)]/60">
                    {component.props.map(prop => (
                      <li key={prop}>{prop}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Usage:</h4>
                  <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto">
                    {component.usage}
                  </pre>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Features:</h4>
                  <ul className="list-disc list-inside text-[var(--foreground)]/60">
                    {component.features.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Data Types</h2>
          <div className="border border-[var(--foreground)]/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Movie Interface</h3>
            <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto">
{`interface Movie {
  id: number;        // Unique identifier
  title: string;     // Movie title
  description: string; // Movie description
  releaseDate: string; // Format: "YYYY-MM-DD"
  rating: number;    // Range: 0-10
}`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
