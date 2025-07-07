'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Install lucide-react or use any icons you prefer

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black">
      {/* Navigation */}
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-6 px-4 md:px-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold text-white tracking-widest">BUILDING HUMANOID</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-lg font-mono">
          {['Home', 'Timeline', 'Gallery', 'Blog', 'About', 'Contact'].map((text, i) => (
            <li key={i}>
              <Link
                href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                className={`hover:text-gray-300 transition-colors ${text === 'Home' ? 'text-white border-b-2 border-white' : 'text-white'}`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden w-full px-4 pb-4">
          <ul className="flex flex-col gap-4 text-lg font-mono text-white bg-black rounded-md border border-gray-700 p-4">
            {['Home', 'Timeline', 'Gallery', 'Blog', 'About', 'Contact'].map((text, i) => (
              <li key={i}>
                <Link
                  href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                  className="block w-full hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 text-center mt-12 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          We Are Building a Humanoid Robot
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mb-10 text-gray-300">
          We're two builders on a mission to create our own humanoid robot — no big labs, just dorm room dreams.
          Follow our journey as we share every breakthrough, setback, and late-night prototype. The future walks, and we’re teaching it how.
        </p>
        <Link
          href="/timeline"
          className="mt-4 px-8 py-3 rounded-full bg-white text-black font-bold shadow-lg hover:bg-gray-200 transition-colors"
        >
          See the Timeline
        </Link>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} BUILDING HUMANOID. All rights reserved.
      </footer>
    </div>
  );
}
