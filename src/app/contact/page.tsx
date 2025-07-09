'use client';

import Navigation from '../../components/Navigation';

export default function Contact() {
  const contactInfo = [
    {
      type: 'Email',
      value: 'archerlin0530@gmail.com | kathermaa@gmail.com',
      icon: '✉️'
    },
    {
      type: 'GitHub',
      value: 'github.com/archerlinn | github.com/kathermaa',
      icon: '🐙'
    },
    {
      type: 'Twitter',
      value: '@not_yet',
      icon: '🐦'
    },
    {
      type: 'YouTube',
      value: '@not_yet',
      icon: '📺'
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
        <h1 className="text-5xl font-bold text-center mb-16">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p className="font-medium">{info.type}</p>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-xl font-bold mb-4">Follow Our Progress</h3>
              <p className="text-gray-300 mb-6">
                Stay updated with our latest developments, behind-the-scenes content, and technical insights.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">📱</span>
                  <span className="text-gray-300">Subscribe to our newsletter</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🎥</span>
                  <span className="text-gray-300">Watch our development videos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg">📊</span>
                  <span className="text-gray-300">View live project metrics</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-3">When will the robot be completed?</h3>
              <p className="text-gray-300">
                We&apos;re targeting completion by Q2 2025. Check our timeline page for detailed milestones.
              </p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-3">Can I contribute to the project?</h3>
              <p className="text-gray-300">
                Yes! We welcome contributions from the community. Contact us to discuss collaboration opportunities.
              </p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-3">Is the project open source?</h3>
              <p className="text-gray-300">
                Parts of our software stack will be open source. Hardware designs will be shared for educational purposes.
              </p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-3">How can I stay updated?</h3>
              <p className="text-gray-300">
                Follow us on social media, subscribe to our newsletter, or check our blog for regular updates.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 