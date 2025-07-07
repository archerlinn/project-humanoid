'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Install lucide-react or use any icons you prefer

export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: 'Complete Guide to K-SCALE Lab\'s Humanoid Walking RL Training Code',
      excerpt: 'A deep dive into our first reinforcement learning pipeline (using K-SCALE Lab\'s K-Sim-Gym) for training humanoid robots to walk using PPO with JAX/Equinox.',
      date: '2025-07-07',
      category: 'Technical Deep Dive',
      readTime: '10 min read',
      slug: 'humanoid-walking-training'
    }
  ];

  const categories = ['All', 'Project Overview', 'Engineering', 'Electronics', 'AI/ML', 'Testing', 'Planning'];

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
                className={`hover:text-gray-300 transition-colors ${text === 'Blog' ? 'text-white border-b-2 border-white' : 'text-white'}`}
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
                  onClick={() => setMenuOpen(false)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-16">Project Blog</h1>
        
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

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-800 pb-8 last:border-b-0">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm bg-gray-800 text-gray-300 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-400">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 hover:text-gray-300 transition-colors cursor-pointer">
                <Link href="/blog/humanoid-walking-training">
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <Link 
                href="/blog/humanoid-walking-training"
                className="text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors inline-block"
              >
                Read Full Article →
              </Link>
            </article>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-bold mb-4">More Posts Coming Soon</h3>
          <p className="text-gray-300">
            We'll be sharing regular updates on our progress, technical insights, and behind-the-scenes content.
          </p>
        </div>
      </main>
    </div>
  );
} 