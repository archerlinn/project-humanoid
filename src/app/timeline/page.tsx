'use client';

import Navigation from '../../components/Navigation';

export default function Timeline() {
  const milestones = [
    {
      date: '2025 Q3',
      title: 'Project Conception',
      description: 'Initial research and concept development for the humanoid robot project.',
      status: 'in-progress'
    },
    {
      date: '2025 Q3',
      title: 'Mechanical Design',
      description: 'CAD modeling and mechanical structure design for the robot body.',
      status: 'planned'
    },
    {
      date: '2025 Q3',
      title: 'Electronics Integration',
      description: 'Motor control systems, sensors, and power management implementation.',
      status: 'planned'
    },
    {
      date: '2025 Q4',
      title: 'Software Development',
      description: 'AI algorithms, computer vision, and autonomous navigation systems.',
      status: 'planned'
    },
    {
      date: '2026 Q1',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, and refinement.',
      status: 'planned'
    },
    {
      date: '2026 Q2',
      title: 'Final Assembly',
      description: 'Complete robot assembly and final integration testing.',
      status: 'planned'
    }
  ];

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
        <h1 className="text-5xl font-bold text-center mb-16">Project Timeline</h1>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white"></div>
          
          {milestones.map((milestone, index) => (
            <div key={index} className="relative mb-12 flex items-start">
              {/* Timeline dot */}
              <div className={`absolute left-6 w-4 h-4 rounded-full border-2 border-white ${
                milestone.status === 'completed' ? 'bg-white' : 
                milestone.status === 'in-progress' ? 'bg-gray-500' : 'bg-transparent'
              }`}></div>
              
              {/* Content */}
              <div className="ml-16">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-mono text-gray-400">{milestone.date}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    milestone.status === 'completed' ? 'bg-green-900 text-green-300' :
                    milestone.status === 'in-progress' ? 'bg-yellow-900 text-yellow-300' :
                    'bg-gray-900 text-gray-300'
                  }`}>
                    {milestone.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 