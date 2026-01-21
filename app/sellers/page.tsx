import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SellersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-8 pb-16 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Seller Services
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              List with The Evergreen Team for only 3% Commission
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Platinum Sellers</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our exclusive Platinum Seller program provides white-glove service with industry-leading home preparation, complementary staging, and comprehensive marketing strategies.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Professional home staging included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Professional photography & videography</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Pre-listing inspection reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Legal services included</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Listing Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our strategic approach ensures your home sells quickly and for the best possible price. We focus exclusively on sellers—no buyer conflicts of interest.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Dedicated listing team (no buyer representation)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Market analysis & pricing strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Multi-channel marketing campaign</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Negotiation expertise</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-900 text-white p-12 rounded-3xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What is My Home Worth?
            </h2>
            <p className="text-xl mb-8 text-amber-100">
              Get a free, no-obligation home valuation from our expert team
            </p>
            <Link 
              href="/#lead-forms"
              className="inline-block px-10 py-4 bg-white text-amber-900 font-bold hover:bg-amber-50 transition-colors rounded-lg shadow-xl text-lg"
            >
              Get Free Home Valuation
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Home Preparation</h3>
              <p className="text-gray-700">
                We guide you through every step of preparing your home for sale, from repairs to staging.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Marketing</h3>
              <p className="text-gray-700">
                Comprehensive marketing strategy including digital, print, and social media campaigns.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Success Stories</h3>
              <p className="text-gray-700">
                Read testimonials from satisfied sellers who achieved exceptional results with our team.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
