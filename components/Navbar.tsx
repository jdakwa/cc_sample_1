'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center gap-6">
            <a href="tel:+15551234567" className="hover:text-green-200 transition-colors">
              Tel: 555.123.4567
            </a>
            <a href="/contact/" className="hover:text-green-200 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌲</span>
              <a href="/" className="text-2xl font-bold text-amber-900 hover:text-amber-800 transition-colors">
                Realty Integrity and Funding
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="/properties/" className="text-gray-700 hover:text-green-700 font-semibold uppercase text-sm transition-colors">
                PROPERTIES
              </a>
              <a href="/sellers/" className="text-gray-700 hover:text-green-700 font-semibold uppercase text-sm transition-colors">
                SELLERS
              </a>
              <a href="/buyers/" className="text-gray-700 hover:text-green-700 font-semibold uppercase text-sm transition-colors">
                BUYERS
              </a>
              <a href="/neighborhoods/" className="text-gray-700 hover:text-green-700 font-semibold uppercase text-sm transition-colors">
                NEIGHBORHOODS
              </a>
              <a href="/news-events/" className="text-gray-700 hover:text-green-700 font-semibold uppercase text-sm transition-colors">
                NEWS
              </a>
              <a href="/about/" className="text-gray-700 hover:text-green-700 font-semibold text-sm transition-colors">
                About
              </a>
              <div className="flex items-center gap-3 ml-4 pl-4 border-l-2 border-green-200">
                <a 
                  href="tel:+15551234567" 
                  className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors text-sm font-semibold"
                >
                  <span>📞</span>
                  <span>Call</span>
                </a>
                <a 
                  href="mailto:info@evergreenrealty.com" 
                  className="flex items-center gap-2 px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors text-sm font-semibold"
                >
                  <span>✉️</span>
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50 transition-colors"
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
            <div className="lg:hidden pb-6 border-t border-green-100 mt-4 pt-4">
              <div className="flex flex-col gap-4">
                <a href="/properties/" className="text-gray-700 hover:text-green-700 font-semibold uppercase text-sm py-2 transition-colors">
                  PROPERTIES
                </a>
                <a href="/sellers/" className="text-gray-700 hover:text-green-700 font-semibold uppercase text-sm py-2 transition-colors">
                  SELLERS
                </a>
                <a href="/buyers/" className="text-gray-700 hover:text-green-700 font-semibold uppercase text-sm py-2 transition-colors">
                  BUYERS
                </a>
                <a href="/neighborhoods/" className="text-gray-700 hover:text-green-700 font-semibold uppercase text-sm py-2 transition-colors">
                  NEIGHBORHOODS
                </a>
                <a href="/news-events/" className="text-gray-700 hover:text-green-700 font-semibold uppercase text-sm py-2 transition-colors">
                  NEWS
                </a>
                <a href="/about/" className="text-gray-700 hover:text-green-700 font-semibold text-sm py-2 transition-colors">
                  About
                </a>
                <div className="flex flex-col gap-3 pt-4 border-t border-green-200">
                  <a 
                    href="tel:+15551234567" 
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold"
                  >
                    <span>📞</span>
                    <span>Call: 555.123.4567</span>
                  </a>
                  <a 
                    href="mailto:info@evergreenrealty.com" 
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors font-semibold"
                  >
                    <span>✉️</span>
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
