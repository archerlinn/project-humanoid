import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black">
      <nav className="w-full max-w-4xl mx-auto flex justify-between items-center py-6 px-4 md:px-0">
        <span className="text-2xl font-bold text-white tracking-widest">HUMANOID</span>
        <ul className="flex gap-6 text-lg font-mono">
          <li><Link href="/" className="text-white border-b-2 border-white">Home</Link></li>
          <li><Link href="/timeline" className="hover:text-gray-300 transition-colors">Timeline</Link></li>
          <li><Link href="/gallery" className="hover:text-gray-300 transition-colors">Gallery</Link></li>
          <li><Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link></li>
          <li><Link href="/about" className="hover:text-gray-300 transition-colors">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
        </ul>
      </nav>
      <main className="flex flex-col items-center justify-center flex-1 text-center mt-12">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Building a Humanoid Robot</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-10 text-gray-300">
          Follow the journey of creating a next-generation humanoid robot, from concept to reality. Explore milestones, tech deep-dives, and behind-the-scenes progress.
        </p>
        <Link href="/timeline" className="mt-4 px-8 py-3 rounded-full bg-white text-black font-bold shadow-lg hover:bg-gray-200 transition-colors">See the Timeline</Link>
      </main>
      <footer className="w-full py-6 text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} HUMANOID. All rights reserved.
      </footer>
    </div>
  );
}
