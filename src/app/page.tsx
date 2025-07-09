'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import { getAssetPath } from '../utils/paths';

export default function Home() {
  const videos = [
    getAssetPath('/screencast-2025-07-09-143856.webm'),
    getAssetPath('/screencast-2025-07-09-140425.webm'),
    getAssetPath('/screencast-2025-07-09-142345.webm'),
    getAssetPath('/screencast-2025-07-09-140625.webm')
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black">
      {/* Background Videos Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
          {videos.map((video) => (
            <div key={video} className="relative overflow-hidden">
              <video
                className={`absolute inset-0 w-full h-full object-cover`}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video} type="video/webm" />
              </video>
            </div>
          ))}
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navigation */}
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-6 px-4 md:px-0 relative z-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold text-white tracking-widest">BUILDING HUMANOID</span>
        </div>

        <Navigation />
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 text-center mt-12 px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          We Are Building a Humanoid Robot
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mb-10 text-gray-300">
          We're two builders on a mission to create our own humanoid robot — no big labs, just dorm room dreams.
          Follow our journey as we share every breakthrough, setback, and late-night prototype. The future walks, and we're teaching it how.
        </p>
        <Link
          href="/timeline"
          className="mt-4 px-8 py-3 rounded-full bg-white text-black font-bold shadow-lg hover:bg-gray-200 transition-colors"
        >
          See the Timeline
        </Link>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-gray-500 mt-12 relative z-10">
        &copy; {new Date().getFullYear()} BUILDING HUMANOID. All rights reserved.
      </footer>
    </div>
  );
}
