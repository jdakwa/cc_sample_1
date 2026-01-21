export default function Features() {
  const featuredProperties = [
    {
      address: '1837 Brewster Avenue, Redwood City',
      price: '$3,488,000',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop'
    },
    {
      address: '3467 Waverley Street, Palo Alto',
      price: '$2,988,000',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop'
    },
    {
      address: '3165 Morris Drive, Palo Alto',
      price: '$2,488,000',
      image: 'https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      address: '653 Wildwood Lane, Palo Alto',
      price: '$4,880,000',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop'
    },
    {
      address: '5 Oak Forest Court, Portola Valley',
      price: '$5,188,000',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop'
    },
    {
      address: '188 Fair Oaks Lane, Atherton',
      price: '$14,988,000',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-green-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12 text-center">
          OUR FEATURED PROPERTIES
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => {
            const slug = property.address.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            // Add asymmetric positioning for visual interest
            const asymmetricClass = index === 1 ? 'md:mt-8' : index === 4 ? 'md:-mt-4' : '';
            return (
              <a 
                key={index} 
                href={`/properties/${slug}`}
                className={`bg-white shadow-lg hover:shadow-xl transition-all overflow-hidden rounded-2xl group ${asymmetricClass} border-[0.25px] border-gray-200`}
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.address}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {property.address}
                  </h3>
                  <p className="text-2xl font-bold text-amber-800">
                    {property.price}
                  </p>
                  <p className="text-sm text-amber-600 mt-2 group-hover:text-amber-700">View Details →</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/properties/" 
            className="inline-block px-8 py-3 bg-amber-900 text-white font-semibold hover:bg-amber-800 transition-colors rounded-lg shadow-lg"
          >
            VIEW ALL PROPERTIES
          </a>
        </div>
      </div>
    </section>
  );
}
