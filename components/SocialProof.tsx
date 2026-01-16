export default function SocialProof() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Austin, TX',
      rating: 5,
      text: 'Best real estate experience ever! Found our dream home in just 3 weeks. The team was professional, responsive, and truly cared about our needs.',
      image: '👩🏼',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Michael Chen',
      location: 'Denver, CO',
      rating: 5,
      text: 'Sold our house for $50K above asking price! Their marketing strategy and negotiation skills are second to none. Highly recommend!',
      image: '👨🏻',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Phoenix, AZ',
      rating: 5,
      text: 'As a first-time buyer, I was nervous. They guided me through every step with patience and expertise. Couldn\'t be happier with my new home!',
      image: '👩🏽',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '$2.5B+', label: 'Total Sales Volume', icon: '💵', gradient: 'from-green-500 to-emerald-600' },
    { number: '500+', label: 'Happy Families', icon: '🏡', gradient: 'from-blue-500 to-indigo-600' },
    { number: '15+', label: 'Years of Excellence', icon: '⭐', gradient: 'from-yellow-500 to-orange-600' },
    { number: '98%', label: 'Client Satisfaction', icon: '🎯', gradient: 'from-red-500 to-pink-600' }
  ];

  const recentSales = [
    { address: '123 Oak Street', city: 'Dallas, TX', price: '$425,000', days: '5 days' },
    { address: '456 Maple Ave', city: 'Houston, TX', price: '$575,000', days: '8 days' },
    { address: '789 Pine Road', city: 'San Antonio, TX', price: '$350,000', days: '3 days' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Our Numbers
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Proven Track Record
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative">
                  <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                  <div className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 mb-3 group-hover:text-white transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-bold text-lg group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600">Real stories from real families</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Top gradient bar */}
                <div className={`h-2 bg-gradient-to-r ${testimonial.gradient}`}></div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} text-4xl shadow-lg mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 font-semibold">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg italic">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Quote decoration */}
                  <div className={`absolute bottom-4 right-4 text-6xl opacity-10 bg-gradient-to-br ${testimonial.gradient} bg-clip-text text-transparent`}>
                    &quot;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Sales */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Recent Success
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Recent Sales
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600">Helping families achieve their real estate goals</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white">
                    <th className="px-8 py-5 text-left font-black text-lg">Address</th>
                    <th className="px-8 py-5 text-left font-black text-lg">Location</th>
                    <th className="px-8 py-5 text-left font-black text-lg">Sale Price</th>
                    <th className="px-8 py-5 text-left font-black text-lg">Time on Market</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSales.map((sale, index) => (
                    <tr 
                      key={index}
                      className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-red-50 transition-all duration-300"
                    >
                      <td className="px-8 py-5 font-bold text-gray-900 text-lg">{sale.address}</td>
                      <td className="px-8 py-5 text-gray-700 text-lg">{sale.city}</td>
                      <td className="px-8 py-5 font-black text-green-600 text-lg">{sale.price}</td>
                      <td className="px-8 py-5 font-bold text-blue-600 text-lg">{sale.days}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-8 p-10 bg-white rounded-3xl shadow-2xl border border-gray-100">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl mb-3">🏆</div>
              <div className="text-sm font-black text-gray-700 group-hover:text-blue-600 transition-colors">Top Producer</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl mb-3">✅</div>
              <div className="text-sm font-black text-gray-700 group-hover:text-green-600 transition-colors">Licensed & Insured</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl mb-3">💼</div>
              <div className="text-sm font-black text-gray-700 group-hover:text-purple-600 transition-colors">Full Service</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl mb-3">🇺🇸</div>
              <div className="text-sm font-black text-gray-700 group-hover:text-red-600 transition-colors">American Owned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
