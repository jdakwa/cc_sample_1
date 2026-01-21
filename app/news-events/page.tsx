import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';

export default function NewsEventsPage() {
  const newsItems = [
    {
      title: "What's Really Happening with Real Estate Commissions?",
      category: "The Evergreen Pulse",
      date: "December 10 2025",
      excerpt: "An in-depth look at the recent changes in real estate commission structures and what they mean for buyers and sellers."
    },
    {
      title: "The Evergreen Insight - September 2025",
      category: "Evergreen Insight",
      date: "September 04 2025",
      excerpt: "Market trends, neighborhood highlights, and expert insights from the Evergreen Realty team."
    },
    {
      title: "The Evergreen Insight - July 2025",
      category: "Evergreen Insight",
      date: "July 01 2025",
      excerpt: "Summer market analysis and tips for buyers and sellers in Silicon Valley."
    },
    {
      title: "Agents Push for \"Pocket,\" \"Private,\" or \"Exclusive\" a.k.a. Hidden Listings",
      category: "The Evergreen Pulse",
      date: "July 01 2025",
      excerpt: "Understanding off-market listings and how they impact the real estate market."
    },
    {
      title: "The Evergreen Insight - May 2025",
      category: "Evergreen Insight",
      date: "May 09 2025",
      excerpt: "Spring market update with pricing trends and inventory analysis."
    },
    {
      title: "Seller's Bill of Rights",
      category: "The Evergreen Pulse",
      date: "May 09 2025",
      excerpt: "Know your rights as a seller in today's real estate market."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-8 pb-16 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              News & Events
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Stay informed with the latest real estate news, market insights, and community events
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {newsItems.map((item, index) => (
              <article 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-amber-900 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}
