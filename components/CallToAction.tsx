export default function CallToAction() {
  const newsItems = [
    {
      title: "What's Really Happening with Real Estate Commissions?",
      category: "The Evergreen Pulse",
      date: "December 10 2025"
    },
    {
      title: "The Evergreen Insight - September 2025",
      category: "Evergreen Insight",
      date: "September 04 2025"
    },
    {
      title: "The Evergreen Insight - July 2025",
      category: "Evergreen Insight",
      date: "July 01 2025"
    },
    {
      title: "Agents Push for \"Pocket,\" \"Private,\" or \"Exclusive\" a.k.a. Hidden Listings",
      category: "The Evergreen Pulse",
      date: "July 01 2025"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Open House & Events - Asymmetric positioning */}
          <div className="md:pr-8">
            <h2 className="text-3xl font-bold text-green-900 mb-8">
              Open House & Events
            </h2>
            <div className="bg-amber-50 p-8 rounded-xl border-2 border-amber-800 shadow-lg relative">
              {/* Asymmetric accent */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-green-600 rounded-full opacity-20"></div>
              <div className="text-center relative">
                <div className="text-2xl font-bold text-amber-900 mb-2">January, 2026</div>
                <div className="text-amber-700 font-semibold">Current Month</div>
              </div>
            </div>
          </div>

          {/* News - Asymmetric positioning */}
          <div className="md:pl-8 md:pt-8">
            <h2 className="text-3xl font-bold text-green-900 mb-8">
              News
            </h2>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div key={index} className="border-l-4 border-green-600 pl-4 pb-6 last:pb-0 relative">
                  {/* Asymmetric dot */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-amber-800 rounded-full"></div>
                  <h3 className="text-xl font-bold text-green-900 mb-2 hover:text-green-700 transition-colors">
                    <a href="/news-events/">{item.title}</a>
                  </h3>
                  <div className="text-sm text-green-700">
                    <span className="font-semibold">{item.category}</span>
                    <span className="mx-2">•</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
