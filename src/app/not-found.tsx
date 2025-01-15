import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Oops! Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Sorry, we couldn't find what you were looking for.
        </p>
        <Link 
          href="/"
          className="text-blue-500 hover:text-blue-600 underline"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
