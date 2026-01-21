import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-8 pb-16 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              About Evergreen Realty
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Silicon Valley&apos;s #1 Listing Team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Evergreen Realty is committed to redefining the real estate experience for our clients. We believe in transparency, integrity, and putting our clients&apos; interests first.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our innovative 3% commission model saves sellers money while our dedicated listing team focuses exclusively on sellers—no buyer conflicts of interest.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With over 15 years of experience and $2.5B+ in sales volume, we&apos;ve built a reputation for excellence in Silicon Valley real estate.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We embrace the new era of real estate, where sellers only pay their listing agent. We don&apos;t pressure clients to pay unnecessary commissions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team provides industry-leading services including home preparation, complementary staging, inspection reports, and legal services—all while charging only 3% commission.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For buyers, we offer comprehensive services and post-purchase assistance, ensuring a smooth experience from search to closing and beyond.
              </p>
            </div>
          </div>

          <div className="bg-amber-900 text-white p-12 rounded-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Evergreen Realty?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-2">#1 Listing Team</h3>
                <p className="text-amber-100">Top producer in Silicon Valley</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">3% Commission</h3>
                <p className="text-amber-100">Save money with our transparent pricing</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Client-Focused</h3>
                <p className="text-amber-100">Your interests come first, always</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-900 mb-8">Get In Touch</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="tel:+15551234567"
                className="inline-block px-8 py-4 bg-green-700 text-white font-bold hover:bg-green-800 transition-colors rounded-lg shadow-lg"
              >
                📞 Call: 555.123.4567
              </Link>
              <Link 
                href="mailto:info@evergreenrealty.com"
                className="inline-block px-8 py-4 bg-amber-900 text-white font-bold hover:bg-amber-800 transition-colors rounded-lg shadow-lg"
              >
                ✉️ Email Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
