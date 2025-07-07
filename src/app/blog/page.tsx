import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Beginning: Why Build a Humanoid Robot?',
      excerpt: 'Exploring the motivations behind this ambitious project and the challenges we anticipate facing in the development process.',
      date: '2024-01-15',
      category: 'Project Overview',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Mechanical Design Challenges and Solutions',
      excerpt: 'A deep dive into the mechanical engineering challenges we encountered while designing the robot\'s structure and how we solved them.',
      date: '2024-02-20',
      category: 'Engineering',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Electronics Integration: From Concept to Reality',
      excerpt: 'The journey of integrating motors, sensors, and control systems into our humanoid robot prototype.',
      date: '2024-03-10',
      category: 'Electronics',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'AI and Machine Learning in Humanoid Robotics',
      excerpt: 'How we\'re implementing artificial intelligence to enable autonomous movement and decision-making capabilities.',
      date: '2024-04-05',
      category: 'AI/ML',
      readTime: '10 min read'
    },
    {
      id: 5,
      title: 'Testing and Iteration: Lessons Learned',
      excerpt: 'Key insights and lessons learned during the testing phase of our humanoid robot development.',
      date: '2024-05-12',
      category: 'Testing',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Future Plans and Next Steps',
      excerpt: 'What\'s next for our humanoid robot project and the roadmap for future development phases.',
      date: '2024-06-01',
      category: 'Planning',
      readTime: '4 min read'
    }
  ];

  const categories = ['All', 'Project Overview', 'Engineering', 'Electronics', 'AI/ML', 'Testing', 'Planning'];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="w-full max-w-4xl mx-auto flex justify-between items-center py-6 px-4 md:px-0">
        <Link href="/" className="text-2xl font-bold text-white tracking-widest">HUMANOID</Link>
        <ul className="flex gap-6 text-lg font-mono">
          <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
          <li><Link href="/timeline" className="hover:text-gray-300 transition-colors">Timeline</Link></li>
          <li><Link href="/gallery" className="hover:text-gray-300 transition-colors">Gallery</Link></li>
          <li><Link href="/blog" className="text-white border-b-2 border-white">Blog</Link></li>
          <li><Link href="/about" className="hover:text-gray-300 transition-colors">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
        </ul>
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
                {post.title}
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <button className="text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
                Read More →
              </button>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-white text-black">1</button>
            <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors">2</button>
            <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors">3</button>
            <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 