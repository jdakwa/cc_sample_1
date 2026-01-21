'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const properties = [
    {
      address: '1837 Brewster Avenue, Redwood City',
      status: 'SOLD!',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop'
    },
    {
      address: '3467 Waverley Street, Palo Alto',
      status: 'SOLD!',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=800&fit=crop'
    },
    {
      address: '3165 Morris Drive, Palo Alto',
      status: 'SOLD!',
      image: 'https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      address: '653 Wildwood Lane, Palo Alto',
      status: 'SOLD!',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=800&fit=crop'
    },
    {
      address: '5 Oak Forest Court, Portola Valley',
      status: 'SOLD!',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop'
    },
    {
      address: '188 Fair Oaks Lane, Atherton',
      status: 'SOLD!',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=800&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % properties.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [properties.length]);

  return (
    <section className="relative bg-white">
      {/* Property Carousel */}
      <div className="relative h-[600px] overflow-hidden">
        {properties.map((property, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${property.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-800/40 to-amber-900/60"></div>
            </div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {property.address}
                </h1>
                <p className="text-2xl md:text-4xl font-semibold drop-shadow-lg bg-green-800/80 px-6 py-3 rounded-lg inline-block">
                  {property.status}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-800 p-3 rounded-full transition-all shadow-lg"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % properties.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-800 p-3 rounded-full transition-all shadow-lg"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Get to Know Our Approach Section */}
      <div className="bg-white py-16 border-y-2 border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
              <a href="/about/" className="block">
                <div className="relative h-64 md:h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Real estate approach"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-green-800/25 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Get to Know Our Approach
                  </h2>
                  <span className="inline-block px-6 py-2 bg-amber-900 text-white font-semibold hover:bg-amber-800 transition-colors rounded-lg">
                    Learn more
                  </span>
                </div>
              </a>
            </div>

            {/* List With Us Section */}
            <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
              <a href="/sellers/" className="block">
                <div className="relative h-64 md:h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="List your property"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-green-800/25 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    List With Us for Only 3% Commission
                  </h2>
                  <span className="inline-block px-6 py-2 bg-amber-900 text-white font-semibold hover:bg-amber-800 transition-colors rounded-lg">
                    Learn how
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
