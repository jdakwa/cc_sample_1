import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import NeighborhoodMapWrapper from '@/components/NeighborhoodMapWrapper';

const neighborhoodData: Record<string, {
  name: string;
  description: string;
  image: string;
  details: {
    population?: string;
    medianHomePrice?: string;
    schools?: string;
    highlights: string[];
    boundaries?: {
      areas: string[];
      coordinates: [number, number]; // [lat, lng]
    };
    publicSchools?: {
      elementary: Array<{ name: string; district: string; link?: string }>;
      middle: Array<{ name: string; district: string; link?: string }>;
      high: Array<{ name: string; district: string; link?: string }>;
    };
    parks?: Array<{ name: string; type: string; features?: string[] }>;
    libraries?: Array<{ name: string; address?: string; link?: string }>;
    communityCenters?: Array<{ name: string; address?: string; link?: string }>;
  };
}> = {
  'palo-alto': {
    name: 'Palo Alto',
    description: 'Vibrant downtown, excellent schools, and proximity to Stanford University',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=800&fit=crop',
    details: {
      population: '67,000+',
      medianHomePrice: '$3.2M',
      schools: 'Top-rated public and private schools',
      highlights: [
        'Downtown shopping and dining',
        'Stanford University nearby',
        'Excellent public schools',
        'Tech company headquarters',
        'Beautiful parks and recreation'
      ],
      boundaries: {
        areas: ['Downtown', 'Old Palo Alto', 'Crescent Park', 'Professorville', 'South of Forest Avenue (SOFA)', 'Barron Park', 'Midtown', 'College Terrace'],
        coordinates: [37.4419, -122.1430] // Palo Alto center
      },
      publicSchools: {
        elementary: [
          { name: 'Addison Elementary', district: 'Palo Alto Unified School District', link: 'https://www.greatschools.org' },
          { name: 'Barron Park Elementary', district: 'Palo Alto Unified School District', link: 'https://www.greatschools.org' },
          { name: 'Duveneck Elementary', district: 'Palo Alto Unified School District', link: 'https://www.greatschools.org' },
          { name: 'El Carmelo Elementary', district: 'Palo Alto Unified School District', link: 'https://www.greatschools.org' }
        ],
        middle: [
          { name: 'Jane Lathrop Stanford Middle School', district: 'Palo Alto Unified School District', link: 'https://www.greatschools.org' },
          { name: 'Terman Middle School', district: 'Palo Alto Unified School District', link: 'https://www.greatschools.org' }
        ],
        high: [
          { name: 'Palo Alto High School', district: 'Palo Alto Unified School District', link: 'https://www.greatschools.org' },
          { name: 'Gunn High School', district: 'Palo Alto Unified School District', link: 'https://www.greatschools.org' }
        ]
      },
      parks: [
        { name: 'Rinconada Park', type: 'Community Park', features: ['Playground', 'Tennis Courts', 'Swimming Pool'] },
        { name: 'Mitchell Park', type: 'Community Park', features: ['Library', 'Community Center', 'Playground'] },
        { name: 'El Camino Park', type: 'Neighborhood Park', features: ['Playground', 'Picnic Areas', 'Sports Fields'] },
        { name: 'Baylands Nature Preserve', type: 'Nature Preserve', features: ['Hiking Trails', 'Bird Watching', 'Wetlands'] }
      ],
      libraries: [
        { name: 'Palo Alto City Library - Main', address: '1213 Newell Road', link: 'https://library.cityofpaloalto.org' },
        { name: 'Mitchell Park Library', address: '3700 Middlefield Road', link: 'https://library.cityofpaloalto.org' }
      ],
      communityCenters: [
        { name: 'Mitchell Park Community Center', address: '3700 Middlefield Road' },
        { name: 'Lucie Stern Community Center', address: '1305 Middlefield Road' }
      ]
    }
  },
  'menlo-park': {
    name: 'Menlo Park',
    description: 'Charming community with tree-lined streets and top-rated schools',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
    details: {
      population: '33,000+',
      medianHomePrice: '$2.8M',
      schools: 'Highly rated school district',
      highlights: [
        'Tree-lined residential streets',
        'Vibrant downtown area',
        'Close to Facebook headquarters',
        'Family-friendly atmosphere',
        'Excellent parks and trails'
      ],
      boundaries: {
        areas: ['Downtown', 'Sharon Heights', 'West Menlo Park', 'Felton Gables', 'Allied Arts', 'Suburban Park', 'Willows'],
        coordinates: [37.4538, -122.1821] // Menlo Park center
      },
      publicSchools: {
        elementary: [
          { name: 'Oak Knoll Elementary', district: 'Menlo Park City School District', link: 'https://www.greatschools.org' },
          { name: 'Laurel Elementary', district: 'Menlo Park City School District', link: 'https://www.greatschools.org' },
          { name: 'Encinal Elementary', district: 'Menlo Park City School District', link: 'https://www.greatschools.org' }
        ],
        middle: [
          { name: 'Hillview Middle School', district: 'Menlo Park City School District', link: 'https://www.greatschools.org' }
        ],
        high: [
          { name: 'Menlo-Atherton High School', district: 'Sequoia Union High School District', link: 'https://www.greatschools.org' }
        ]
      },
      parks: [
        { name: 'Sharon Park', type: 'Community Park', features: ['Playground', 'Picnic Areas', 'Sports Fields'] },
        { name: 'Bedwell Bayfront Park', type: 'Nature Park', features: ['Hiking Trails', 'Bay Views', 'Wildlife'] },
        { name: 'Burgess Park', type: 'Community Park', features: ['Playground', 'Tennis Courts', 'Community Center'] },
        { name: 'Willows Park', type: 'Neighborhood Park', features: ['Playground', 'Picnic Areas'] }
      ],
      libraries: [
        { name: 'Menlo Park Library', address: '800 Alma Street', link: 'https://www.menlopark.org/library' }
      ],
      communityCenters: [
        { name: 'Burgess Recreation Center', address: '701 Laurel Street' }
      ]
    }
  },
  'atherton': {
    name: 'Atherton',
    description: 'Exclusive enclave known for luxury estates and privacy',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
    details: {
      population: '7,000+',
      medianHomePrice: '$7.5M',
      schools: 'Premium private and public schools',
      highlights: [
        'Luxury estate properties',
        'Privacy and exclusivity',
        'Large lot sizes',
        'Prestigious address',
        'Close to Silicon Valley'
      ],
      boundaries: {
        areas: ['West Atherton', 'Central Atherton', 'East Atherton', 'Lindenwood'],
        coordinates: [37.4613, -122.1977] // Atherton center
      },
      publicSchools: {
        elementary: [
          { name: 'Laurel Elementary', district: 'Menlo Park City School District', link: 'https://www.greatschools.org' },
          { name: 'Encinal Elementary', district: 'Menlo Park City School District', link: 'https://www.greatschools.org' }
        ],
        middle: [
          { name: 'Hillview Middle School', district: 'Menlo Park City School District', link: 'https://www.greatschools.org' }
        ],
        high: [
          { name: 'Menlo-Atherton High School', district: 'Sequoia Union High School District', link: 'https://www.greatschools.org' }
        ]
      },
      parks: [
        { name: 'Holbrook-Palmer Park', type: 'Community Park', features: ['Historic Mansion', 'Gardens', 'Event Space'] },
        { name: 'Atherton Linear Park', type: 'Trail', features: ['Walking Path', 'Natural Setting'] }
      ],
      libraries: [
        { name: 'Atherton Library', address: '2 Dinkelspiel Station Lane', link: 'https://www.athertonlibrary.org' }
      ],
      communityCenters: [
        { name: 'Holbrook-Palmer Park', address: '150 Watkins Avenue' }
      ]
    }
  },
  'mountain-view': {
    name: 'Mountain View',
    description: 'Tech hub with diverse dining, parks, and excellent public transit',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&h=800&fit=crop',
    details: {
      population: '82,000+',
      medianHomePrice: '$2.1M',
      schools: 'Strong public school system',
      highlights: [
        'Google headquarters',
        'Castro Street dining scene',
        'Excellent public transit',
        'Shoreline Park and recreation',
        'Diverse community'
      ],
      boundaries: {
        areas: ['Downtown', 'Old Mountain View', 'Whisman Station', 'Rengstorff Park', 'Cuesta Park', 'Sylvan Park'],
        coordinates: [37.3861, -122.0839] // Mountain View center
      },
      publicSchools: {
        elementary: [
          { name: 'Castro Elementary', district: 'Mountain View Whisman School District', link: 'https://www.greatschools.org' },
          { name: 'Landels Elementary', district: 'Mountain View Whisman School District', link: 'https://www.greatschools.org' },
          { name: 'Bubb Elementary', district: 'Mountain View Whisman School District', link: 'https://www.greatschools.org' }
        ],
        middle: [
          { name: 'Graham Middle School', district: 'Mountain View Whisman School District', link: 'https://www.greatschools.org' },
          { name: 'Crittenden Middle School', district: 'Mountain View Whisman School District', link: 'https://www.greatschools.org' }
        ],
        high: [
          { name: 'Mountain View High School', district: 'Mountain View Los Altos Union High School District', link: 'https://www.greatschools.org' }
        ]
      },
      parks: [
        { name: 'Shoreline Park', type: 'Regional Park', features: ['Lake', 'Golf Course', 'Hiking Trails', 'Boating'] },
        { name: 'Cuesta Park', type: 'Community Park', features: ['Playground', 'Tennis Courts', 'Picnic Areas'] },
        { name: 'Rengstorff Park', type: 'Community Park', features: ['Aquatic Center', 'Playground', 'Sports Fields'] },
        { name: 'Pioneer Park', type: 'Neighborhood Park', features: ['Playground', 'Picnic Areas'] }
      ],
      libraries: [
        { name: 'Mountain View Public Library', address: '585 Franklin Street', link: 'https://www.mountainview.gov/depts/library' }
      ],
      communityCenters: [
        { name: 'Rengstorff House', address: '3070 N. Rengstorff Avenue' },
        { name: 'Community Center', address: '201 S. Rengstorff Avenue' }
      ]
    }
  },
  'los-altos': {
    name: 'Los Altos',
    description: 'Family-friendly community with strong schools and community spirit',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=800&fit=crop',
    details: {
      population: '31,000+',
      medianHomePrice: '$3.5M',
      schools: 'Top-performing schools',
      highlights: [
        'Charming downtown village',
        'Excellent schools',
        'Family-oriented community',
        'Beautiful residential areas',
        'Community events and activities'
      ],
      boundaries: {
        areas: ['Downtown', 'North Los Altos', 'South Los Altos', 'Loyola Corners', 'Rancho Shopping Center'],
        coordinates: [37.3852, -122.1141] // Los Altos center
      },
      publicSchools: {
        elementary: [
          { name: 'Loyola Elementary', district: 'Los Altos School District', link: 'https://www.greatschools.org' },
          { name: 'Oak Avenue Elementary', district: 'Los Altos School District', link: 'https://www.greatschools.org' },
          { name: 'Santa Rita Elementary', district: 'Los Altos School District', link: 'https://www.greatschools.org' }
        ],
        middle: [
          { name: 'Blach Intermediate School', district: 'Los Altos School District', link: 'https://www.greatschools.org' },
          { name: 'Egan Junior High School', district: 'Los Altos School District', link: 'https://www.greatschools.org' }
        ],
        high: [
          { name: 'Los Altos High School', district: 'Mountain View Los Altos Union High School District', link: 'https://www.greatschools.org' }
        ]
      },
      parks: [
        { name: 'Shoup Park', type: 'Community Park', features: ['Playground', 'Picnic Areas', 'Tennis Courts'] },
        { name: 'Redwood Grove Nature Preserve', type: 'Nature Preserve', features: ['Hiking Trails', 'Redwood Trees', 'Nature Center'] },
        { name: 'Hillview Community Center Park', type: 'Community Park', features: ['Playground', 'Sports Fields', 'Community Center'] },
        { name: 'McKenzie Park', type: 'Neighborhood Park', features: ['Playground', 'Picnic Areas'] }
      ],
      libraries: [
        { name: 'Los Altos Library', address: '13 S. San Antonio Road', link: 'https://sccl.org/locations/los-altos' }
      ],
      communityCenters: [
        { name: 'Hillview Community Center', address: '97 Hillview Avenue' }
      ]
    }
  },
  'redwood-city': {
    name: 'Redwood City',
    description: 'Historic downtown, waterfront, and growing tech scene',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=800&fit=crop',
    details: {
      population: '86,000+',
      medianHomePrice: '$1.8M',
      schools: 'Quality public and private options',
      highlights: [
        'Historic downtown district',
        'Waterfront location',
        'Growing tech presence',
        'Diverse housing options',
        'Cultural attractions'
      ],
      boundaries: {
        areas: ['Downtown', 'Redwood Shores', 'Friendly Acres', 'Mt. Carmel', 'Farm Hill', 'Stambaugh-Heller'],
        coordinates: [37.4852, -122.2364] // Redwood City center
      },
      publicSchools: {
        elementary: [
          { name: 'Roosevelt Elementary', district: 'Redwood City School District', link: 'https://www.greatschools.org' },
          { name: 'Orion Elementary', district: 'Redwood City School District', link: 'https://www.greatschools.org' },
          { name: 'John Gill Elementary', district: 'Redwood City School District', link: 'https://www.greatschools.org' }
        ],
        middle: [
          { name: 'Kennedy Middle School', district: 'Redwood City School District', link: 'https://www.greatschools.org' },
          { name: 'McKinley Institute of Technology', district: 'Redwood City School District', link: 'https://www.greatschools.org' }
        ],
        high: [
          { name: 'Sequoia High School', district: 'Sequoia Union High School District', link: 'https://www.greatschools.org' },
          { name: 'Woodside High School', district: 'Sequoia Union High School District', link: 'https://www.greatschools.org' }
        ]
      },
      parks: [
        { name: 'Stafford Park', type: 'Community Park', features: ['Playground', 'Tennis Courts', 'Picnic Areas'] },
        { name: 'Red Morton Community Park', type: 'Community Park', features: ['Sports Fields', 'Playground', 'Community Center'] },
        { name: 'Marine Park', type: 'Waterfront Park', features: ['Marina', 'Walking Path', 'Bay Views'] },
        { name: 'Stulsaft Park', type: 'Nature Park', features: ['Hiking Trails', 'Natural Setting'] }
      ],
      libraries: [
        { name: 'Redwood City Public Library', address: '1044 Middlefield Road', link: 'https://www.redwoodcity.org/departments/library' }
      ],
      communityCenters: [
        { name: 'Red Morton Community Center', address: '1120 Roosevelt Avenue' },
        { name: 'Community Activities Building', address: '1400 Roosevelt Avenue' }
      ]
    }
  }
};

export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const neighborhood = neighborhoodData[slug];

  if (!neighborhood) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Neighborhood Not Found</h1>
          <Link href="/neighborhoods" className="text-amber-900 hover:text-amber-800">
            Return to Neighborhoods
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={neighborhood.image}
          alt={neighborhood.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/50 to-amber-900/70"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-white">
              {neighborhood.name}
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-lg max-w-3xl mx-auto text-white">
              {neighborhood.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {neighborhood.details.population && (
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-amber-900 mb-1">
                  {neighborhood.details.population}
                </div>
                <div className="text-gray-600 text-sm">Residents</div>
              </div>
            )}
            {neighborhood.details.medianHomePrice && (
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-amber-900 mb-1">
                  {neighborhood.details.medianHomePrice}
                </div>
                <div className="text-gray-600 text-sm">Median Home Price</div>
              </div>
            )}
            {neighborhood.details.schools && (
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-base font-bold text-amber-900 mb-1">
                  {neighborhood.details.schools}
                </div>
                <div className="text-gray-600 text-sm">Education</div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Neighborhood Highlights</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {neighborhood.details.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Neighborhood Boundaries & Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Neighborhood Boundaries */}
            {neighborhood.details.boundaries && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
                  <span className="mr-2">📍</span>
                  Neighborhood Boundaries
                </h2>
                <div className="mb-3">
                  <NeighborhoodMapWrapper
                    center={neighborhood.details.boundaries.coordinates}
                    zoom={13}
                    areas={neighborhood.details.boundaries.areas}
                    neighborhoodName={neighborhood.name}
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800 mb-2">Areas Served:</h3>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.details.boundaries.areas.map((area, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Public Schools */}
            {neighborhood.details.publicSchools && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
                  <span className="mr-2">🏫</span>
                  Public Schools
                </h2>
                
                {neighborhood.details.publicSchools.elementary && neighborhood.details.publicSchools.elementary.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-gray-800 mb-2">Elementary</h3>
                    <div className="space-y-2">
                      {neighborhood.details.publicSchools.elementary.map((school, index) => (
                        <div key={index} className="border-l-2 border-green-500 pl-3 py-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 text-sm">{school.name}</h4>
                              <p className="text-gray-600 text-xs">{school.district}</p>
                            </div>
                            {school.link && (
                              <a 
                                href={school.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800 text-xs font-medium ml-2 whitespace-nowrap"
                              >
                                More →
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {neighborhood.details.publicSchools.middle && neighborhood.details.publicSchools.middle.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-gray-800 mb-2">Middle</h3>
                    <div className="space-y-2">
                      {neighborhood.details.publicSchools.middle.map((school, index) => (
                        <div key={index} className="border-l-2 border-amber-500 pl-3 py-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 text-sm">{school.name}</h4>
                              <p className="text-gray-600 text-xs">{school.district}</p>
                            </div>
                            {school.link && (
                              <a 
                                href={school.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800 text-xs font-medium ml-2 whitespace-nowrap"
                              >
                                More →
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {neighborhood.details.publicSchools.high && neighborhood.details.publicSchools.high.length > 0 && (
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-2">High</h3>
                    <div className="space-y-2">
                      {neighborhood.details.publicSchools.high.map((school, index) => (
                        <div key={index} className="border-l-2 border-green-700 pl-3 py-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 text-sm">{school.name}</h4>
                              <p className="text-gray-600 text-xs">{school.district}</p>
                            </div>
                            {school.link && (
                              <a 
                                href={school.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800 text-xs font-medium ml-2 whitespace-nowrap"
                              >
                                More →
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Parks & Recreation & Libraries Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Parks & Recreation */}
            {neighborhood.details.parks && neighborhood.details.parks.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
                  <span className="mr-2">🌳</span>
                  Parks & Recreation
                </h2>
                <div className="space-y-3">
                  {neighborhood.details.parks.map((park, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{park.name}</h3>
                      <p className="text-gray-600 text-xs mb-2">{park.type}</p>
                      {park.features && park.features.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {park.features.map((feature, fIndex) => (
                            <span key={fIndex} className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Libraries & Community Spots */}
            {(neighborhood.details.libraries || neighborhood.details.communityCenters) && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
                  <span className="mr-2">📚</span>
                  Libraries & Community
                </h2>
                
                {neighborhood.details.libraries && neighborhood.details.libraries.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-gray-800 mb-2">Libraries</h3>
                    <div className="space-y-2">
                      {neighborhood.details.libraries.map((library, index) => (
                        <div key={index} className="border-l-2 border-amber-500 pl-3 py-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{library.name}</h4>
                          {library.address && (
                            <p className="text-gray-600 text-xs">{library.address}</p>
                          )}
                          {library.link && (
                            <a 
                              href={library.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-green-600 hover:text-green-800 text-xs font-medium inline-block mt-1"
                            >
                              Website →
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {neighborhood.details.communityCenters && neighborhood.details.communityCenters.length > 0 && (
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-2">Community Centers</h3>
                    <div className="space-y-2">
                      {neighborhood.details.communityCenters.map((center, index) => (
                        <div key={index} className="border-l-2 border-green-500 pl-3 py-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{center.name}</h4>
                          {center.address && (
                            <p className="text-gray-600 text-xs">{center.address}</p>
                          )}
                          {center.link && (
                            <a 
                              href={center.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-green-600 hover:text-green-800 text-xs font-medium inline-block mt-1"
                            >
                              Website →
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="bg-amber-900 text-white p-8 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Interested in {neighborhood.name}?
            </h2>
            <p className="text-lg mb-6 text-amber-100">
              Contact us to learn more about properties in this neighborhood
            </p>
            <Link 
              href="/#lead-forms"
              className="inline-block px-8 py-3 bg-white text-amber-900 font-bold hover:bg-amber-50 transition-colors rounded-lg shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
