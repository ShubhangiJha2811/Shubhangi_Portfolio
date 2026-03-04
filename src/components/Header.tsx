import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume', icon: '📄' },
    { name: 'Contact', path: '/contact' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-strong shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-xl transform group-hover:scale-110 transition-transform">
                  SJ
                </div>
              </div>
              <h1 className={`text-2xl font-black ${isScrolled ? 'text-gray-900' : 'text-white'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all`}>
                Shubhangi Jha
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl transform hover:scale-105 flex items-center space-x-1 ${
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600'
                      : isScrolled
                      ? 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600'
                      : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-xl ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'} transition-all`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-2 glass-strong rounded-2xl shadow-2xl mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-5 py-3 text-base font-semibold transition-all rounded-xl flex items-center space-x-2 ${
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600'
                      : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;