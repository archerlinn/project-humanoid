'use client';

import Navigation from '../../components/Navigation';
import { getAssetPath } from '../../utils/paths';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: 'KBot RL Training - Step 1',
      description: 'Initial reinforcement learning training session for KBot humanoid robot',
      category: 'AI/ML',
      type: 'video',
      media: getAssetPath('/screencast-2025-07-09-143856.webm')
    },
    {
      id: 2,
      title: 'KBot RL Training - Step 100',
      description: 'Progress update showing KBot after 100 training steps',
      category: 'AI/ML',
      type: 'video',
      media: getAssetPath('/screencast-2025-07-09-140425.webm')
    },
    {
      id: 3,
      title: 'ZBot Training - Step 1',
      description: 'Initial training session for ZBot humanoid robot',
      category: 'AI/ML',
      type: 'video',
      media: getAssetPath('/screencast-2025-07-09-142345.webm')
    },
    {
      id: 4,
      title: 'ZBot Training - Step 200',
      description: 'Advanced training progress showing ZBot after 200 training steps',
      category: 'AI/ML',
      type: 'video',
      media: getAssetPath('/screencast-2025-07-09-140625.webm')
    },
    {
      id: 5,
      title: 'Initial CAD Design',
      description: 'First 3D model of the robot structure',
      category: 'Design',
      type: 'image',
      media: '/placeholder-1.jpg'
    },
    {
      id: 6,
      title: 'Mechanical Assembly',
      description: 'Early prototype assembly process',
      category: 'Assembly',
      type: 'image',
      media: '/placeholder-2.jpg'
    },
    {
      id: 7,
      title: 'Electronics Integration',
      description: 'Motor control board installation',
      category: 'Electronics',
      type: 'image',
      media: '/placeholder-3.jpg'
    },
    {
      id: 8,
      title: 'Sensor Testing',
      description: 'Testing various sensor configurations',
      category: 'Testing',
      type: 'image',
      media: '/placeholder-4.jpg'
    },
    {
      id: 9,
      title: 'Software Development',
      description: 'AI algorithm development workspace',
      category: 'Software',
      type: 'image',
      media: '/placeholder-5.jpg'
    },
    {
      id: 10,
      title: 'Final Prototype',
      description: 'Complete robot ready for testing',
      category: 'Prototype',
      type: 'image',
      media: '/placeholder-6.jpg'
    }
  ];

  const categories = ['All', 'AI/ML', 'Design', 'Assembly', 'Electronics', 'Testing', 'Software', 'Prototype'];

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
              <div className="bg-gray-900 h-64 mb-4 flex items-center justify-center border border-gray-700 hover:border-white transition-colors overflow-hidden">
                {item.type === 'video' ? (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={item.media} type="video/webm" />
                  </video>
                ) : (
                  <span className="text-gray-500 text-lg">Image Placeholder</span>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{item.description}</p>
                {item.type === 'video' && (
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>🎥</span>
                    <span>Training Video</span>
                  </div>
                )}
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