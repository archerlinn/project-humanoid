'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Teaching Robots to Walk: Our First Steps into Humanoid AI',
      excerpt: 'Part 1 of our humanoid building journey - exploring K-Scale Labs\' KSimGym framework and understanding the fundamentals of humanoid locomotion through reinforcement learning.',
      date: '2025-07-07',
      category: 'AI/ML',
      readTime: '8 min read',
      slug: 'humanoid-walking-training'
    },
    {
      id: 2,
      title: 'Complete Guide to PPO, RNN, and Actor-Critic Methods',
      excerpt: 'A comprehensive technical deep dive into the algorithms behind modern reinforcement learning - understanding how PPO, RNNs, and Actor-Critic methods work together.',
      date: '2025-07-07',
      category: 'AI/ML',
      readTime: '15 min read',
      slug: 'ppo-rnn-actor-critic-guide'
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

        <Navigation />
      </nav>

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
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <Link 
                href={`/blog/${post.slug}`}
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