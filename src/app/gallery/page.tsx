'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Install lucide-react or use any icons you prefer

export default function Gallery() {
  const [menuOpen, setMenuOpen] = useState(false);

  const galleryItems = [
    {
      id: 1,
      title: 'Initial CAD Design',
      description: 'First 3D model of the robot structure',
      category: 'Design',
      image: '/placeholder-1.jpg'
    },
    {
      id: 2,
      title: 'Mechanical Assembly',
      description: 'Early prototype assembly process',
      category: 'Assembly',
      image: '/placeholder-2.jpg'
    },
    {
      id: 3,
      title: 'Electronics Integration',
      description: 'Motor control board installation',
      category: 'Electronics',
      image: '/placeholder-3.jpg'
    },
    {
      id: 4,
      title: 'Sensor Testing',
      description: 'Testing various sensor configurations',
      category: 'Testing',
      image: '/placeholder-4.jpg'
    },
    {
      id: 5,
      title: 'Software Development',
      description: 'AI algorithm development workspace',
      category: 'Software',
      image: '/placeholder-5.jpg'
    },
    {
      id: 6,
      title: 'Final Prototype',
      description: 'Complete robot ready for testing',
      category: 'Prototype',
      image: '/placeholder-6.jpg'
    }
  ];

  const categories = ['All', 'Design', 'Assembly', 'Electronics', 'Testing', 'Software', 'Prototype'];

  return (
    <div className="min-h-screen bg-black text-white">
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

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-16">Project Gallery</h1>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-gray-900 h-64 mb-4 flex items-center justify-center border border-gray-700 hover:border-white transition-colors">
                <span className="text-gray-500 text-lg">Image Placeholder</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors">
            Load More Images
          </button>
        </div>
      </main>
    </div>
  );
} 