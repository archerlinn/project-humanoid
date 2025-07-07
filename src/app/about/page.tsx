'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Install lucide-react or use any icons you prefer

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  const specifications = [
    {
      category: 'Physical Dimensions',
      specs: [
        'Height: TBD',
        'Weight: TBD',
        'Material: TBD',
        'Degrees of Freedom: TBD'
      ]
    },
    {
      category: 'Electronics',
      specs: [
        'Main Processor: TBD',
        'Sensors: TBD',
        'Battery: TBD',
        'Communication: TBD'
      ]
    },
    {
      category: 'Software',
      specs: [
        'Operating System: TBD',
        'AI Framework: TBD',
        'Computer Vision: TBD',
        'Motion Planning: TBD'
      ]
    },
    {
      category: 'Capabilities',
      specs: [
        'Autonomous navigation: TBD',
        'Object recognition and manipulation: TBD',
        'Human interaction and speech recognition: TBD',
        'Dynamic balance and walking: TBD'
      ]
    }
  ];

  const teamMembers = [
    {
      name: 'Archer Lin',
      role: 'Robotics Engineer',
      expertise: 'Expertise: Robotics Engineering',
      description: 'Currently a Master student in Robotics Engineering at Purdue University.'
    },
    {
      name: 'Katherine Ma',
      role: 'Computer Engineer',
      expertise: 'Expertise: Computer Engineering',
      description: 'Currently a Bachelor student in Computer Engineering at Purdue University.'
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
                 platform that can serve as a foundation for future research and applications in the world.
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