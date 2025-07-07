import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-300 mb-8 max-w-md">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link 
          href="/" 
          className="px-8 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
} 