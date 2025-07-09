'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="relative" ref={menuRef}>
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
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full right-0 mt-2 w-56 sm:w-64 bg-black rounded-md border border-gray-700 shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col p-2">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.href}
                  className={`block w-full py-3 px-4 hover:text-gray-300 transition-colors rounded text-sm ${
                    isActive(item.href) 
                      ? 'text-white bg-gray-800 border-l-2 border-white' 
                      : 'text-white'
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
    </div>
  );
} 