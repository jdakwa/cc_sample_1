import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BuyersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-8 pb-16 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Buyer Services
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Your trusted partner in finding your dream home in Silicon Valley
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Complimentary Services</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We provide comprehensive buyer services to make your home purchase smooth and successful. Our team is dedicated to finding you the perfect property.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Property search & market analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Home tours & property evaluations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Negotiation & offer strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Financing guidance & referrals</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Post Purchase Assistance</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our commitment doesn&apos;t end at closing. We provide ongoing support to help you settle into your new home.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Home warranty recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Contractor & service referrals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Moving & relocation resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Ongoing support & consultation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-700 text-white p-12 rounded-3xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Step by Step Buying Guide
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Learn everything you need to know about the home buying process
            </p>
            <Link 
              href="/#lead-forms"
              className="inline-block px-10 py-4 bg-white text-green-700 font-bold hover:bg-green-50 transition-colors rounded-lg shadow-xl text-lg"
            >
              Start Your Home Search
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Home Search</h3>
              <p className="text-gray-700">
                Access our comprehensive property database and get notified about new listings that match your criteria.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Market Insights</h3>
              <p className="text-gray-700">
                Stay informed with our expert analysis of Silicon Valley real estate trends and market conditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-700">
                Benefit from our team&apos;s deep knowledge of local neighborhoods, schools, and market dynamics.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
