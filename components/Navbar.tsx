'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToForms = () => {
    document.getElementById('lead-forms')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">🏠</span>
            <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
              Realty Integrity and Funding
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#lead-forms" 
              onClick={(e) => { e.preventDefault(); scrollToForms(); }}
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
            >
              Buy
            </a>
            <a 
              href="#lead-forms" 
              onClick={(e) => { e.preventDefault(); scrollToForms(); }}
              className="text-gray-700 hover:text-red-600 font-semibold transition-colors"
            >
              Sell
            </a>
            <a 
              href="#lead-forms" 
              onClick={(e) => { e.preventDefault(); scrollToForms(); }}
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
            >
              Services
            </a>
            <a 
              href="#lead-forms" 
              onClick={(e) => { e.preventDefault(); scrollToForms(); }}
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
            >
              About
            </a>
          </div>

          {/* Call and Mail Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+1-661-878-5569"
              className="group flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="text-xl">📞</span>
              <span className="hidden lg:inline">(661) 878-5569</span>
              <span className="lg:hidden">Call</span>
            </a>
            <a 
              href="mailto:samdakwa@gmail.com"
              className="group flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="text-xl">✉️</span>
              <span className="hidden lg:inline">Email Us</span>
              <span className="lg:hidden">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-gray-200 mt-4 pt-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#lead-forms" 
                onClick={(e) => { e.preventDefault(); scrollToForms(); }}
                className="text-gray-700 hover:text-blue-600 font-semibold py-2 transition-colors"
              >
                Buy
              </a>
              <a 
                href="#lead-forms" 
                onClick={(e) => { e.preventDefault(); scrollToForms(); }}
                className="text-gray-700 hover:text-red-600 font-semibold py-2 transition-colors"
              >
                Sell
              </a>
              <a 
                href="#lead-forms" 
                onClick={(e) => { e.preventDefault(); scrollToForms(); }}
                className="text-gray-700 hover:text-blue-600 font-semibold py-2 transition-colors"
              >
                Services
              </a>
              <a 
                href="#lead-forms" 
                onClick={(e) => { e.preventDefault(); scrollToForms(); }}
                className="text-gray-700 hover:text-blue-600 font-semibold py-2 transition-colors"
              >
                About
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <a 
                  href="tel:+1-555-123-4567"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-md"
                >
                  <span className="text-xl">📞</span>
                  <span>(555) 123-4567</span>
                </a>
                <a 
                  href="mailto:info@realtyintegrity.com"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-md"
                >
                  <span className="text-xl">✉️</span>
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
