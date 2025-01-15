import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="mb-8">
          <Link 
            href="/"
            className="text-sm text-blue-500 hover:text-blue-600 mb-4 inline-flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </nav>

        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Movie Collection API</h1>
          <p className="text-lg text-[var(--foreground)]/60 mb-6">
            A modern movie collection showcase with search capabilities and responsive design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[var(--foreground)]/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Tech Stack</h3>
              <ul className="list-disc list-inside text-[var(--foreground)]/60 space-y-1">
                <li>Next.js 14+ (App Router)</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Lucide Icons</li>
              </ul>
            </div>
            <div className="border border-[var(--foreground)]/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-[var(--foreground)]/60 space-y-1">
                <li>Dynamic Search</li>
                <li>Responsive Design</li>
                <li>Dark/Light Mode</li>
                <li>Animated UI Elements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Data Structure</h2>
          <div className="border border-[var(--foreground)]/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Movie Interface</h3>
            <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto">
{`interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: string;  // Format: "YYYY-MM-DD"
  rating: number;       // Range: 0-10
  image: string;        // TMDB image URL
}`}
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Getting Started</h2>
          <div className="border border-[var(--foreground)]/10 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Installation</h3>
              <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto">
                <code className="language-bash text-sm">
{`# Clone the repository
git clone https://github.com/arundaya-project/api_film.git

# Navigate to project directory
cd api_film

# Install dependencies
npm install

# Start development server
npm run dev`}
                </code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Project Structure</h3>
              <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto">
                <code className="text-sm">
{`api_film/
├── src/
│   ├── app/          # Next.js app router
│   ├── components/   # React components
│   ├── data/        # Static movie data
│   └── types/       # TypeScript interfaces
├── public/          # Static files
└── package.json     # Dependencies`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">API Reference</h2>
          <div className="border border-[var(--foreground)]/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">GET /api/movies</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Description:</h4>
                <p className="text-[var(--foreground)]/60">
                  Retrieves a list of all movies in the collection.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Response Format:</h4>
                <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto">
{`{
  "movies": [
    {
      "id": number,
      "title": string,
      "description": string,
      "releaseDate": string, // "YYYY-MM-DD"
      "rating": number,      // 0-10
      "image": string       // TMDB image URL
    }
  ]
}`}
                </pre>
              </div>
              <div>
                <h4 className="font-medium mb-2">Example Usage:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-[var(--foreground)]/10 rounded-lg p-4">
                    <h5 className="text-sm font-semibold mb-3 text-blue-500">JavaScript</h5>
                    <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto text-sm">
                      <code className="language-javascript">
{`// Using Fetch API
const response = await fetch('/api/movies');
const data = await response.json();

// Using Axios
const response = await axios.get('/api/movies');
const data = response.data;`}
                      </code>
                    </pre>
                  </div>

                  <div className="border border-[var(--foreground)]/10 rounded-lg p-4">
                    <h5 className="text-sm font-semibold mb-3 text-green-500">Kotlin</h5>
                    <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto text-sm">
                      <code dangerouslySetInnerHTML={{ __html: `<span class="text-purple-400">suspend</span> <span class="text-blue-400">fun</span> getMovies() {
    <span class="text-blue-400">val</span> client = OkHttpClient()
    <span class="text-blue-400">val</span> request = Request.Builder()
        .url(<span class="text-green-400">"http://localhost:3000/api/movies"</span>)
        .build()
    
    client.newCall(request).execute().use { response ->
        <span class="text-blue-400">val</span> data = response.body?.string()
        <span class="text-blue-400">val</span> movies = Json.decodeFromString&lt;List&lt;Movie&gt;&gt;(data!!)
    }
}` }} />
                    </pre>
                  </div>

                  <div className="border border-[var(--foreground)]/10 rounded-lg p-4">
                    <h5 className="text-sm font-semibold mb-3 text-orange-500">Java</h5>
                    <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto text-sm">
                      <code dangerouslySetInnerHTML={{ __html: `<span class="text-blue-400">public</span> <span class="text-purple-400">class</span> MovieClient {
    <span class="text-blue-400">public</span> List&lt;Movie&gt; getMovies() {
        <span class="text-purple-400">var</span> client = HttpClient.newHttpClient();
        <span class="text-purple-400">var</span> request = HttpRequest.newBuilder()
            .uri(URI.create(<span class="text-green-400">"http://localhost:3000/api/movies"</span>))
            .build();
            
        <span class="text-purple-400">var</span> response = client.send(
            request, 
            HttpResponse.BodyHandlers.ofString()
        );
        <span class="text-blue-400">return</span> objectMapper.readValue(
            response.body(), 
            <span class="text-blue-400">new</span> TypeReference&lt;List&lt;Movie&gt;&gt;(){}
        );
    }
}` }} />
                    </pre>
                  </div>

                  <div className="border border-[var(--foreground)]/10 rounded-lg p-4">
                    <h5 className="text-sm font-semibold mb-3 text-green-500">Python</h5>
                    <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto text-sm">
                      <code dangerouslySetInnerHTML={{ __html: `<span class="text-purple-400">import</span> requests

response = requests.get(
    <span class="text-green-400">'http://localhost:3000/api/movies'</span>
)
data = response.json()` }} />
                    </pre>
                  </div>

                  <div className="border border-[var(--foreground)]/10 rounded-lg p-4">
                    <h5 className="text-sm font-semibold mb-3 text-purple-500">PHP</h5>
                    <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto text-sm">
{`$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 
    'http://localhost:3000/api/movies'
);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($curl);
$data = json_decode($response);
curl_close($curl);`}
                    </pre>
                  </div>

                  <div className="border border-[var(--foreground)]/10 rounded-lg p-4">
                    <h5 className="text-sm font-semibold mb-3 text-cyan-500">Go</h5>
                    <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto text-sm">
{`resp, err := http.Get(
    "http://localhost:3000/api/movies"
)
if err != nil {
    log.Fatalln(err)
}
body, _ := ioutil.ReadAll(resp.Body)
var data map[string]interface{}
json.Unmarshal(body, &data)`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Components</h2>
          <div className="space-y-6">
            {[
              {
                name: 'MovieContainer',
                description: 'Main container with enhanced search and animation',
                props: ['initialMovies: Movie[]'],
                features: [
                  'Animated search input with focus effects',
                  'Real-time filtering of movies',
                  'Search results counter',
                  'Smooth transitions'
                ]
              },
              {
                name: 'Footer',
                description: 'Responsive footer with social links',
                features: [
                  'Social media links',
                  'Quick navigation links',
                  'Responsive grid layout',
                  'Dynamic year display'
                ]
              }
            ].map(component => (
              <div key={component.name} className="border border-[var(--foreground)]/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{component.name}</h3>
                <p className="text-[var(--foreground)]/60 mb-4">{component.description}</p>
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Styling</h2>
          <div className="border border-[var(--foreground)]/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Custom Animations</h3>
            <pre className="bg-[var(--foreground)]/5 p-4 rounded-md overflow-x-auto">
{`// Available animations
.animate-shimmer    // Gradient shimmer effect
.animate-fade-in   // Smooth fade in animation
.text-shadow-glow  // Text glow effect`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
