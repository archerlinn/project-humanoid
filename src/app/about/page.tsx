import Link from 'next/link';

export default function About() {
  const specifications = [
    {
      category: 'Physical Dimensions',
      specs: [
        'Height: 180cm (5&apos;11")',
        'Weight: 75kg (165 lbs)',
        'Material: Aerospace-grade aluminum and carbon fiber',
        'Degrees of Freedom: 32 DOF'
      ]
    },
    {
      category: 'Electronics',
      specs: [
        'Main Processor: NVIDIA Jetson Orin',
        'Sensors: LiDAR, IMU, Force sensors, Vision cameras',
        'Battery: 48V Lithium-ion, 2-hour runtime',
        'Communication: WiFi 6, Bluetooth 5.0'
      ]
    },
    {
      category: 'Software',
      specs: [
        'Operating System: Ubuntu 22.04 LTS',
        'AI Framework: ROS2 + PyTorch',
        'Computer Vision: OpenCV + YOLO',
        'Motion Planning: MoveIt2'
      ]
    },
    {
      category: 'Capabilities',
      specs: [
        'Autonomous navigation',
        'Object recognition and manipulation',
        'Human interaction and speech recognition',
        'Dynamic balance and walking'
      ]
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Lead Robotics Engineer',
      expertise: 'Mechanical Design, Control Systems',
      description: '10+ years experience in humanoid robotics with focus on dynamic locomotion and balance control.'
    },
    {
      name: 'Sarah Kim',
      role: 'AI/ML Specialist',
      expertise: 'Computer Vision, Machine Learning',
      description: 'PhD in Computer Science specializing in computer vision and autonomous systems for robotics.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Electronics Engineer',
      expertise: 'Circuit Design, Sensor Integration',
      description: 'Expert in embedded systems and sensor fusion for real-time robot control applications.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      expertise: 'Robotics Research, Project Management',
      description: 'Leading researcher in human-robot interaction with 15+ years in academic and industry robotics.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-6 px-4 md:px-0">
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-white tracking-widest">BUILDING HUMANOID</Link>
        </div>
        <ul className="flex gap-6 text-lg font-mono">
          <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
          <li><Link href="/timeline" className="hover:text-gray-300 transition-colors">Timeline</Link></li>
          <li><Link href="/gallery" className="hover:text-gray-300 transition-colors">Gallery</Link></li>
          <li><Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link></li>
          <li><Link href="/about" className="text-white border-b-2 border-white">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
        </ul>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-16">About the Project</h1>

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our humanoid robot project represents a comprehensive effort to develop a fully autonomous, 
                human-like robot capable of performing complex tasks in real-world environments. The project 
                combines cutting-edge mechanical engineering, advanced electronics, and state-of-the-art 
                artificial intelligence to create a robot that can walk, interact, and learn.
              </p>
              <p className="text-gray-300 leading-relaxed">
                                 The goal is to push the boundaries of what&apos;s possible in humanoid robotics, creating a 
                 platform that can serve as a foundation for future research and applications in healthcare, 
                 education, and industrial automation.
              </p>
            </div>
            <div className="bg-gray-900 h-64 flex items-center justify-center border border-gray-700">
              <span className="text-gray-500 text-lg">Project Image</span>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="border border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-4">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.specs.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-white mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="border border-gray-700 p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-3">{member.expertise}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To advance the field of humanoid robotics through innovative engineering, 
            cutting-edge AI research, and open collaboration. We believe that humanoid 
            robots have the potential to transform how we live and work, and we&apos;re 
            committed to making this vision a reality.
          </p>
        </section>
      </main>
    </div>
  );
} 