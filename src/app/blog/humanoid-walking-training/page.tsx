'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';

export default function HumanoidWalkingTraining() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back to Blog */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Blog Post Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">
            Teaching Robots to Walk: Our First Steps into Humanoid AI
          </h1>
          
          <p className="text-gray-400 italic mb-8">
            Part 1 of our Humanoid Building Journey
          </p>

          <hr className="border-gray-700 my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            The Dream of Walking Machines
          </h2>
          
          <p>
            Building a humanoid robot that can walk naturally has been a dream of roboticists for decades. 
            While we&apos;ve seen impressive demonstrations from companies like Boston Dynamics and Tesla, 
            the algorithms and training methods behind these achievements have largely remained proprietary black boxes.
          </p>
          
          <p>
            That&apos;s why we were excited to discover <strong>K-Scale Labs&apos; KBot</strong> and their 
            open-source <strong>KSimGym</strong> framework – a complete, production-ready system for training 
            humanoid locomotion using modern reinforcement learning techniques.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Why Start with Simulation?
          </h2>
          
          <p>
            Before diving into expensive hardware, we knew we needed to understand the fundamentals of humanoid control. 
            Real robots are costly, fragile, and time-consuming to iterate on. Simulation allows us to:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Fail fast and cheap</strong>: No broken servos or damaged components</li>
            <li><strong>Parallelize learning</strong>: Run thousands of virtual robots simultaneously</li>
            <li><strong>Perfect the algorithms</strong>: Get the AI right before moving to hardware</li>
            <li><strong>Understand the science</strong>: Learn what makes humanoid walking work</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Discovering KSimGym: A Production-Ready Framework
          </h2>
          
          <p>
            K-Scale Labs has open-sourced something remarkable with KSimGym – a complete reinforcement learning 
            pipeline specifically designed for humanoid locomotion. After studying their codebase, we were 
            impressed by the sophistication of their approach:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            The Neural Architecture
          </h3>
          
          <p>
            Their system uses a actor-critic approach:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Actor Network</strong>: A recurrent neural network that learns to control the robot&apos;s 20 joints</li>
            <li><strong>Critic Network</strong>: A value estimator that judges how &quot;good&quot; each state is</li>
          </ul>
          
          <p>
            What&apos;s clever is the asymmetric design – the actor gets minimal observations for fast real-time control, 
            while the critic analyzes rich state information for accurate learning.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Smart Action Representation
          </h3>
          
          <p>
            Instead of simple joint commands, their actor outputs a &quot;mixture of Gaussians&quot; for each joint. 
            This means the robot can represent multiple possible actions with different confidence levels – 
            similar to how humans have multiple ways to take a step.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Robust Training Philosophy
          </h3>
          
          <p>
            The framework includes extensive domain randomization:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Random physics parameters (friction, mass, joint stiffness)</li>
            <li>Sensor noise that mimics real hardware</li>
            <li>Action delays and dropouts</li>
            <li>External disturbances (random pushes)</li>
          </ul>
          
          <p>
            This isn&apos;t just academic – it&apos;s designed to transfer to real hardware.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            The Learning Process
          </h2>
          
          <p>
            Watching the training process is fascinating. The robot starts with completely random movements, 
            gradually learning through trial and error:
          </p>
          
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Survival Phase</strong>: First learns to avoid falling over</li>
            <li><strong>Movement Phase</strong>: Discovers how to move forward</li>
            <li><strong>Optimization Phase</strong>: Refines gait for efficiency and stability</li>
            <li><strong>Robustness Phase</strong>: Handles disturbances and variations</li>
          </ol>
          
          <p>
            The reward system elegantly balances multiple objectives:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Forward progress</strong> (main goal)</li>
            <li><strong>Staying upright</strong> (stability)</li>
            <li><strong>Energy efficiency</strong> (smooth movements)</li>
            <li><strong>Natural posture</strong> (human-like appearance)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            What We&apos;ve Learned So Far
          </h2>
          
          <p>
            Diving into KSimGym has been eye-opening. Here are our key takeaways:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Walking is Incredibly Complex
          </h3>
          
          <p>
            Even with 20 degrees of freedom, creating natural humanoid locomotion requires balancing hundreds 
            of competing factors. The robot must coordinate:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Dynamic balance</li>
            <li>Forward momentum</li>
            <li>Joint limits</li>
            <li>Energy efficiency</li>
            <li>Robustness to disturbances</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Modern AI Makes It Possible
          </h3>
          
          <p>
            Reinforcement learning, particularly PPO (Proximal Policy Optimization), provides a principled 
            way to solve this multi-objective optimization problem. The robot literally learns to walk the 
            same way humans do – through practice and feedback.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Simulation Quality Matters
          </h3>
          
          <p>
            High-fidelity physics simulation (MuJoCo) is crucial. The robot must learn behaviors that will 
            transfer to the real world, which requires realistic modeling of:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Joint dynamics</li>
            <li>Contact forces</li>
            <li>Sensor noise</li>
            <li>Actuator limits</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Engineering Excellence
          </h3>
          
          <p>
            KSimGym isn&apos;t just a research demo – it&apos;s production-ready code with:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Massive parallelization (2048 environments)</li>
            <li>Comprehensive logging and monitoring</li>
            <li>Professional hyperparameter tuning</li>
            <li>Robust checkpointing and recovery</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Our Next Steps
          </h2>
          
          <p>
            This exploration of KSimGym has given us the foundation we need to start our own humanoid journey. 
            We&apos;re now confident in:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>The fundamental RL algorithms for humanoid control</li>
            <li>The importance of simulation-to-real transfer</li>
            <li>The engineering requirements for production systems</li>
          </ul>
          

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Why This Matters
          </h2>
          
          <p>
            Open-source frameworks like KSimGym are democratizing robotics. What used to require massive 
            corporate R&D budgets can now be explored by anyone with curiosity and computational resources.
          </p>
          
          <p>
            We&apos;re standing at the threshold of an era where humanoid robots will become as common as 
            smartphones. By understanding and building upon these foundational technologies, we&apos;re not 
            just observers – we&apos;re participants in creating that future.
          </p>

          <hr className="border-gray-700 my-8" />

          <p className="text-gray-400 italic">
            Follow along as we document our journey from simulation to real walking humanoids. The future of 
            humanoid AI isn&apos;t just in corporate labs – it&apos;s in the hands of builders, makers, 
            and dreamers willing to take the first step.
          </p>

          <p className="text-lg font-semibold mt-6">
            <strong>Coming Next</strong>: <em>we'll see</em>
          </p>
        </article>
      </div>
    </div>
  );
} 