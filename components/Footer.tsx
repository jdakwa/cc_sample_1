export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900 rounded-full blur-3xl opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black text-white mb-6 flex items-center">
              <span className="text-4xl mr-3">🏠</span>
              Realty Integrity and Funding
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              Your trusted partner in real estate. We&apos;re dedicated to helping families 
              find their perfect home and achieve their real estate goals with integrity and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-lg hover:text-white hover:translate-x-2 inline-block transition-all duration-300">→ Home</a></li>
              <li><a href="#lead-forms" className="text-lg hover:text-white hover:translate-x-2 inline-block transition-all duration-300">→ Buy a Home</a></li>
              <li><a href="#lead-forms" className="text-lg hover:text-white hover:translate-x-2 inline-block transition-all duration-300">→ Sell Your Home</a></li>
              <li><a href="#" className="text-lg hover:text-white hover:translate-x-2 inline-block transition-all duration-300">→ About Us</a></li>
              <li><a href="#" className="text-lg hover:text-white hover:translate-x-2 inline-block transition-all duration-300">→ Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <span className="text-2xl mr-3 group-hover:scale-125 transition-transform">📞</span>
                <div>
                  <div className="text-white font-bold text-lg">(661) 878-5569</div>
                  <div className="text-sm text-gray-500">Mon-Fri 8am-7pm</div>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="text-2xl mr-3 group-hover:scale-125 transition-transform">✉️</span>
                <div>
                  <a href="mailto:samdakwa@gmail.com" className="text-lg hover:text-white transition-colors">
                    samdakwa@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="text-2xl mr-3 group-hover:scale-125 transition-transform">📍</span>
                <div className="text-lg">
                  123 Main Street<br />
                  Suite 100<br />
                  Your City, ST 12345
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-base font-semibold">
                © {currentYear} Realty, Integrity and Funding. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Licensed Real Estate Broker | Equal Housing Opportunity 🏡
              </p>
            </div>
            <div className="flex gap-8 text-base">
              <a href="#" className="hover:text-white transition-colors font-semibold">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors font-semibold">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors font-semibold">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
