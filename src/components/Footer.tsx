import { Github, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-gray-200/10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              Movie Collection
            </h3>
            <p className="text-sm text-[var(--foreground)]/60">
              Discover free api movies collection with a wide range of movies to choose from.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-[var(--foreground)]/60 hover:text-blue-500">Home</Link></li>
              <li><Link href="/docs" className="text-[var(--foreground)]/60 hover:text-blue-500">Documentation</Link></li>
              <li><a href="#" className="text-[var(--foreground)]/60 hover:text-blue-500">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3">Follow Me!</h4>
            <div className="flex space-x-3">
              <a href="https://github.com/putraaxzy" className="text-[var(--foreground)]/60 hover:text-blue-500">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://x.com/ptraaypxt?t=5UwNZHmIM0KsY1qsZSV2dA&s=09" className="text-[var(--foreground)]/60 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/onlyptraa/" className="text-[var(--foreground)]/60 hover:text-blue-500">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200/10">
          <p className="text-center text-sm text-[var(--foreground)]/60">
            © {new Date().getFullYear()} Movie Collection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
