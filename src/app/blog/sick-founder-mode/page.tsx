'use client';

import Navigation from '../../../components/Navigation';
import Link from 'next/link';

export default function SickFounderMode() {
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
        {/* Back to Blog */}
        <div className="mb-8">
          <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            I Was Sick But Still in Founder Mode — Here's What I Did
          </h1>
          <div className="flex items-center text-gray-400 text-sm">
            <span>July 2024</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
            <span className="mx-2">•</span>
            <span>Founder Life</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            This week I got hit with a pretty rough fever — 39°C, body sore, head heavy, classic viral vibes. But weirdly, my brain was still kind of... locked in?
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            Not full productivity beast mode, but alert enough to want to keep building. So I leaned into it (gently) and tried a few things that helped me bounce back while still getting a bit of work done.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">1. Coding While Sick (Yes, locked in)</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I didn't force myself to hit big milestones or sprint through tasks. But I kept my laptop nearby — mostly to keep experimenting with the reinforcement learning model I've been tuning.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I was testing different setups, tweaking reward functions, adjusting hyperparameters — nothing too heavy. Just following curiosity and logging results. Honestly, being sick kind of cut out distractions. I wasn't bouncing between tabs or overthinking. Just chill coding in the office, trying stuff, seeing what stuck.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            And if I got tired? I'd just lean back, watch my bots walk around, and vibe.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">2. Water. So much water.</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I drank around 7–8 liters a day — spaced out of course. With a fever, your body loses water fast through sweat and higher respiration, so staying hydrated really helps.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            No fancy electrolytes or IVs — just a big jug and steady sipping. It made a noticeable difference in how I felt.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">3. Hot Bath (40°C for 1 hour)</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Took a long hot bath at around 40°C — hotter than body temp. The goal was to sweat it all out and relax everything.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            There's some science here too: warm baths can raise your core temp slightly and help circulation and immune response. That said... 1 hour might've been a bit excessive. But it felt like a system reboot.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">4. Sweating It Out (All Out)</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            No AC. Full long sleeves and pants. In summer. I just let myself sweat through the night.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            Would I recommend it? Not really. But it weirdly helped. It felt like I was giving my body a chance to flush stuff out. Woke up drenched — and my fever had finally broken.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Final Thoughts</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Not saying this is some magic recovery method, but it helped me stay lightly engaged without pushing too hard. I still rested, still let my body do its thing, but didn't totally disconnect from what I love doing — building stuff.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            Sometimes founder mode doesn't turn off, even when your body wants a timeout. The key is finding that middle ground: support your recovery, stay curious, and don't beat yourself up for slowing down.
          </p>

          <p className="text-xl text-gray-300 leading-relaxed font-semibold">
            Rest counts too.
          </p>
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <div className="text-gray-400 text-sm">
              Written by Archer Lin
            </div>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
} 