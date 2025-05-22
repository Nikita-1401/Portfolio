"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Check if page is scrolled for navbar background
      setIsScrolled(window.scrollY > 10);

      // Active section detection
      const sections = ['home', 'about', 'skills', 'project', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run immediately on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (id) => {
    setIsOpen(false); // Close mobile menu when a link is clicked
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-black'} h-14 sm:h-16`}>
      <div className="mx-auto px-4 sm:px-6 h-full flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-7 sm:h-8" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm sm:text-base font-semibold font-grotesk">
          {['home', 'about', 'skills', 'project', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => smoothScroll(section)}
              className={`capitalize transition-colors duration-300 ${
                activeSection === section
                  ? 'text-[#e91e63]'
                  : 'text-white hover:text-[#e91e63]'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {!isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-14 sm:top-16 left-0 right-0 bg-black/95 backdrop-blur-lg py-4 px-6 flex flex-col gap-4 border-t border-gray-800">
            {['home', 'about', 'skills', 'project', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => smoothScroll(section)}
                className={`capitalize text-left py-2 px-4 rounded-lg transition-colors duration-300 ${
                  activeSection === section
                    ? 'text-[#e91e63] bg-gray-900'
                    : 'text-white hover:text-[#e91e63] hover:bg-gray-800'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;