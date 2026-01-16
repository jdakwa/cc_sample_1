'use client';

export default function Hero() {
  const scrollToForms = () => {
    document.getElementById('lead-forms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 text-white overflow-hidden pt-20">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        {/* Stars scattered */}
        <div className="absolute top-20 left-[10%] text-white text-4xl animate-pulse opacity-80" style={{filter: 'brightness(0) invert(1)'}}>⭐</div>
        <div className="absolute top-40 right-[15%] text-white text-3xl animate-pulse opacity-80" style={{animationDelay: '0.5s', filter: 'brightness(0) invert(1)'}}>⭐</div>
        <div className="absolute bottom-40 left-[20%] text-white text-5xl animate-pulse opacity-80" style={{animationDelay: '1s', filter: 'brightness(0) invert(1)'}}>⭐</div>
        <div className="absolute top-60 left-[45%] text-white text-2xl animate-pulse opacity-80" style={{animationDelay: '1.5s', filter: 'brightness(0) invert(1)'}}>⭐</div>
        <div className="absolute bottom-20 right-[25%] text-white text-4xl animate-pulse opacity-80" style={{animationDelay: '2s', filter: 'brightness(0) invert(1)'}}>⭐</div>
        <div className="absolute top-[30%] right-[40%] text-white text-3xl animate-pulse opacity-80" style={{animationDelay: '0.8s', filter: 'brightness(0) invert(1)'}}>⭐</div>
        
        {/* Subtle stripes */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-red-600"></div>
        <div className="absolute top-2 left-0 right-0 h-2 bg-white opacity-90"></div>
        <div className="absolute top-4 left-0 right-0 h-2 bg-red-600"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase shadow-xl border border-white/30">
              <span className="text-2xl">🇺🇸</span>
              Your Trusted Real Estate Partner
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl">
            Helping You Make the Right Move
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl mb-12 max-w-4xl mx-auto text-blue-50 leading-relaxed font-light">
            Expert guidance for buyers and sellers. 
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={scrollToForms}
              className="group relative w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3 px-10 py-5 text-white font-bold text-xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <span className="text-2xl">📅</span>
                <span>Book a Showing</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
            
            <button 
              onClick={scrollToForms}
              className="group relative w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 bg-white rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3 px-10 py-5 text-blue-900 font-bold text-xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <span className="text-2xl">🏠</span>
                <span>Free Home Valuation</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 mb-2">500+</div>
              <div className="text-sm sm:text-base text-blue-100 font-semibold">Homes Sold</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 mb-2">98%</div>
              <div className="text-sm sm:text-base text-blue-100 font-semibold">Satisfaction</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 mb-2">15+</div>
              <div className="text-sm sm:text-base text-blue-100 font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white text-4xl opacity-60">↓</div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
