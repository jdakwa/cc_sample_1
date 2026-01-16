export default function Features() {
  const features = [
    {
      icon: '📱',
      title: 'Mobile-First Experience',
      description: 'Browse properties seamlessly on any device, anywhere, anytime.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🎯',
      title: 'Expert Market Knowledge',
      description: 'Local expertise backed by nationwide market insights and trends.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast Response',
      description: 'Get answers to your questions within hours, not days.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🤝',
      title: 'Personalized Service',
      description: 'Tailored strategies for your unique home buying or selling needs.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: '💰',
      title: 'Maximum Value',
      description: 'Proven negotiation tactics that save buyers and earn sellers more.',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: '🏆',
      title: 'Award-Winning Team',
      description: 'Recognized excellence in customer service and sales performance.',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re committed to making your real estate journey smooth and successful
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-red-600 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-12 h-12 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-full blur-xl`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
