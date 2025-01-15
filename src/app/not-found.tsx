import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg mb-4">Page not found</p>
        <p className="text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
    </div>
  );
}
