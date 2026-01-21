import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Features from '@/components/Features';

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-8 pb-16 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Evergreen Properties
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Discover exceptional homes in Silicon Valley&apos;s most desirable neighborhoods
            </p>
          </div>
        </div>
        <Features />
      </div>
      <Footer />
    </div>
  );
}
