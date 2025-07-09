'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { text: 'Home', href: '/' },
    { text: 'Timeline', href: '/timeline' },
    { text: 'Gallery', href: '/gallery' },
    { text: 'Blog', href: '/blog' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-lg font-mono">
        {navItems.map((item) => (
          <li key={item.text}>
            <Link
              href={item.href}
              className={`hover:text-gray-300 transition-colors ${
                isActive(item.href) 
                  ? 'text-white border-b-2 border-white' 
                  : 'text-white'
              }`}
            >
              {item.text}
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

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden w-full px-4 pb-4 relative z-10">
          <ul className="flex flex-col gap-4 text-lg font-mono text-white bg-black rounded-md border border-gray-700 p-4">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.href}
                  className={`block w-full hover:text-gray-300 transition-colors ${
                    isActive(item.href) ? 'text-white border-b border-white' : ''
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
} 