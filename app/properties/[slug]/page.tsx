'use client';

import { use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Property data - in a real app, this would come from a database or API
const properties = {
  '1837-brewster-avenue-redwood-city': {
    address: '1837 Brewster Avenue, Redwood City',
    price: '$3,488,000',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    lotSize: '0.25 acres',
    yearBuilt: 1958,
    description: 'Nestled in the heart of Redwood City, this stunning property offers a perfect blend of classic charm and modern amenities. Surrounded by mature trees and lush landscaping, this home provides a serene retreat while being minutes from downtown.',
    features: [
      'Updated kitchen with granite countertops',
      'Hardwood floors throughout',
      'Large backyard with mature trees',
      'Two-car garage',
      'Central air conditioning',
      'Energy-efficient windows',
      'Private master suite',
      'Formal dining room'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop'
    ],
    mapLocation: 'Redwood City, CA'
  },
  '3467-waverley-street-palo-alto': {
    address: '3467 Waverley Street, Palo Alto',
    price: '$2,988,000',
    status: 'For Sale',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    lotSize: '0.18 acres',
    yearBuilt: 1965,
    description: 'A beautifully maintained mid-century modern home in the desirable Waverley Park neighborhood. This property features an open floor plan, updated systems, and a private backyard perfect for entertaining.',
    features: [
      'Mid-century modern architecture',
      'Open concept living',
      'Updated electrical and plumbing',
      'Large windows with natural light',
      'Private backyard patio',
      'Two-car carport',
      'Close to parks and schools',
      'Low-maintenance landscaping'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop'
    ],
    mapLocation: 'Palo Alto, CA'
  },
  '3165-morris-drive-palo-alto': {
    address: '3165 Morris Drive, Palo Alto',
    price: '$2,488,000',
    status: 'For Sale',
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2400,
    lotSize: '0.20 acres',
    yearBuilt: 1972,
    description: 'This charming home features a beautiful garden setting with mature trees and professional landscaping. The interior has been thoughtfully updated while maintaining its original character.',
    features: [
      'Gourmet kitchen with stainless appliances',
      'Spacious family room with fireplace',
      'Master suite with walk-in closet',
      'Beautiful garden with fruit trees',
      'Two-car garage with storage',
      'Solar panels for energy efficiency',
      'Hardwood floors in main living areas',
      'Updated bathrooms'
    ],
    images: [
      'https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop'
    ],
    mapLocation: 'Palo Alto, CA'
  },
  '653-wildwood-lane-palo-alto': {
    address: '653 Wildwood Lane, Palo Alto',
    price: '$4,880,000',
    status: 'For Sale',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3800,
    lotSize: '0.35 acres',
    yearBuilt: 2005,
    description: 'A stunning contemporary home set on a private, tree-lined street. This property offers luxury living with high-end finishes, spacious rooms, and a resort-style backyard.',
    features: [
      'Chef\'s kitchen with premium appliances',
      'Open floor plan with high ceilings',
      'Luxury master suite with spa bathroom',
      'Resort-style pool and spa',
      'Outdoor kitchen and dining area',
      'Home office/library',
      'Three-car garage',
      'Smart home technology'
    ],
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop'
    ],
    mapLocation: 'Palo Alto, CA'
  },
  '5-oak-forest-court-portola-valley': {
    address: '5 Oak Forest Court, Portola Valley',
    price: '$5,188,000',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    lotSize: '0.50 acres',
    yearBuilt: 1998,
    description: 'An elegant estate home surrounded by oak trees and natural beauty. This property offers privacy, tranquility, and stunning views of the surrounding hills.',
    features: [
      'Gourmet kitchen with island',
      'Formal living and dining rooms',
      'Family room with built-ins',
      'Private master wing',
      'Guest suite on main level',
      'Expansive deck with views',
      'Mature oak trees throughout',
      'Three-car garage'
    ],
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop'
    ],
    mapLocation: 'Portola Valley, CA'
  },
  '188-fair-oaks-lane-atherton': {
    address: '188 Fair Oaks Lane, Atherton',
    price: '$14,988,000',
    status: 'For Sale',
    bedrooms: 6,
    bathrooms: 6.5,
    sqft: 8500,
    lotSize: '1.2 acres',
    yearBuilt: 2018,
    description: 'A magnificent estate property featuring world-class design and craftsmanship. This home represents the pinnacle of luxury living with every amenity imaginable.',
    features: [
      'Chef\'s kitchen with butler\'s pantry',
      'Wine cellar and tasting room',
      'Home theater with stadium seating',
      'Gym and spa facilities',
      'Guest house with full kitchen',
      'Tennis court and pool complex',
      'Formal gardens and landscaping',
      'Gated entry with security system'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop'
    ],
    mapLocation: 'Atherton, CA'
  }
};

export default function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const property = properties[slug as keyof typeof properties];

  if (!property) {
    return (
      <div className="min-h-screen bg-amber-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Property Not Found</h1>
          <p className="text-amber-700 mb-8">The property you're looking for doesn't exist.</p>
          <Link href="/" className="inline-block px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors">
            Return Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const [mainImage, ...galleryImages] = property.images;

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-amber-100 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-amber-800">
            <Link href="/" className="hover:text-amber-900">Home</Link>
            <span>/</span>
            <Link href="/properties/" className="hover:text-amber-900">Properties</Link>
            <span>/</span>
            <span className="text-amber-900 font-semibold">{property.address}</span>
          </nav>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img 
          src={mainImage} 
          alt={property.address}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">{property.address}</h1>
          <p className="text-2xl md:text-3xl font-semibold drop-shadow-lg">{property.price}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Property Details</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🛏️</span>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 font-semibold">Bedrooms</div>
                    <div className="text-xl font-bold text-amber-900">{property.bedrooms}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚿</span>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 font-semibold">Bathrooms</div>
                    <div className="text-xl font-bold text-amber-900">{property.bathrooms}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📐</span>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 font-semibold">Square Feet</div>
                    <div className="text-xl font-bold text-amber-900">{property.sqft.toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌳</span>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 font-semibold">Lot Size</div>
                    <div className="text-xl font-bold text-amber-900">{property.lotSize}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 font-semibold">Year Built</div>
                    <div className="text-xl font-bold text-amber-900">{property.yearBuilt}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏷️</span>
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 font-semibold">Status</div>
                    <div className="text-xl font-bold text-green-700">{property.status}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">About This Property</h2>
              <p className="text-amber-800 leading-relaxed text-lg">{property.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-amber-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {galleryImages.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
                <h2 className="text-3xl font-bold text-amber-900 mb-6">Photo Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${property.address} - Image ${index + 2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl shadow-xl p-8 text-white sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Schedule a Showing</h3>
              <p className="mb-6 text-amber-100">Interested in this property? Contact us to schedule a private viewing.</p>
              <div className="space-y-4">
                <a 
                  href="tel:+15551234567" 
                  className="block w-full bg-white text-amber-900 text-center py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
                >
                  📞 Call: 555.123.4567
                </a>
                <a 
                  href="/contact/" 
                  className="block w-full bg-amber-800 text-white text-center py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  📧 Email Us
                </a>
                <a 
                  href="#lead-forms" 
                  className="block w-full bg-green-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  📝 Request Info
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Location</h3>
              <div className="h-64 bg-amber-100 rounded-lg flex items-center justify-center border-2 border-amber-300 border-dashed">
                <div className="text-center text-amber-600">
                  <span className="text-4xl mb-2 block">📍</span>
                  <p className="font-semibold">{property.mapLocation}</p>
                  <p className="text-sm mt-2">Map integration available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
