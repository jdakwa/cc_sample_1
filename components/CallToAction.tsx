'use client';

export default function CallToAction() {
  const scrollToForms = () => {
    document.getElementById('lead-forms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 text-white overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.2),transparent_50%)]"></div>
        
        {/* Stars */}
        <div className="absolute top-20 left-[15%] text-white text-5xl animate-pulse opacity-80" style={{filter: 'brightness(0) invert(1)'}}>⭐</div>
        <div className="absolute bottom-32 right-[20%] text-white text-4xl animate-pulse opacity-80" style={{animationDelay: '1s', filter: 'brightness(0) invert(1)'}}>⭐</div>
        <div className="absolute top-40 right-[35%] text-white text-6xl animate-pulse opacity-80" style={{animationDelay: '0.5s', filter: 'brightness(0) invert(1)'}}>⭐</div>
        <div className="absolute bottom-20 left-[25%] text-white text-3xl animate-pulse opacity-80" style={{animationDelay: '1.5s', filter: 'brightness(0) invert(1)'}}>⭐</div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6">
          <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg border border-white/30">
            Take Action Today
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Ready to Make Your Move?
          </span>
        </h2>
        
        <p className="text-xl sm:text-2xl md:text-3xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
          Whether you&apos;re buying your first home or selling your current one, 
          we&apos;re here to make the process smooth and successful.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={scrollToForms}
            className="group relative w-full sm:w-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-white rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3 px-10 py-5 text-blue-900 font-bold text-xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
              <span className="text-2xl">📅</span>
              <span>Schedule Consultation</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>
          
          <a 
            href="tel:+1-555-123-4567"
            className="group relative w-full sm:w-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3 px-10 py-5 text-white font-bold text-xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
              <span className="text-2xl">📞</span>
              <span>Call: (555) 123-4567</span>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="font-black text-2xl mb-3">Fast Response</h3>
            <p className="text-blue-100 text-lg leading-relaxed">We respond to all inquiries within 2 hours during business hours</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="font-black text-2xl mb-3">No Obligation</h3>
            <p className="text-blue-100 text-lg leading-relaxed">Free consultation with zero pressure or commitment required</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="font-black text-2xl mb-3">Expert Guidance</h3>
            <p className="text-blue-100 text-lg leading-relaxed">15+ years of experience helping families like yours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
