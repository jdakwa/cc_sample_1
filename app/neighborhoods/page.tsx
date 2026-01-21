import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NeighborhoodsPage() {
  const neighborhoods = [
    { 
      name: 'Palo Alto', 
      slug: 'palo-alto',
      description: 'Vibrant downtown, excellent schools, and proximity to Stanford University',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop'
    },
    { 
      name: 'Menlo Park', 
      slug: 'menlo-park',
      description: 'Charming community with tree-lined streets and top-rated schools',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
    },
    { 
      name: 'Atherton', 
      slug: 'atherton',
      description: 'Exclusive enclave known for luxury estates and privacy',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
    },
    { 
      name: 'Mountain View', 
      slug: 'mountain-view',
      description: 'Tech hub with diverse dining, parks, and excellent public transit',
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&h=600&fit=crop'
    },
    { 
      name: 'Los Altos', 
      slug: 'los-altos',
      description: 'Family-friendly community with strong schools and community spirit',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop'
    },
    { 
      name: 'Redwood City', 
      slug: 'redwood-city',
      description: 'Historic downtown, waterfront, and growing tech scene',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-8 pb-16 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Silicon Valley Neighborhoods
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Explore the unique character and charm of each community we serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <a
                key={index}
                href={`/neighborhoods/${neighborhood.slug}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                      {neighborhood.name}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {neighborhood.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 bg-amber-900 text-white p-12 rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore a Neighborhood?
            </h2>
            <p className="text-xl mb-8 text-amber-100">
              Contact us to learn more about any of these communities
            </p>
            <a 
              href="/#lead-forms"
              className="inline-block px-10 py-4 bg-white text-amber-900 font-bold hover:bg-amber-50 transition-colors rounded-lg shadow-xl text-lg"
            >
              Get Neighborhood Guide
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
