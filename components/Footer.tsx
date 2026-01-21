export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-white font-bold mb-4">About Evergreen</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about/" className="hover:text-white transition-colors">About Evergreen</a></li>
              <li><a href="/properties/" className="hover:text-white transition-colors">Evergreen Properties</a></li>
              <li><a href="/properties/" className="hover:text-white transition-colors">Home Search</a></li>
              <li><a href="/contact/" className="hover:text-white transition-colors">What is My Home Worth?</a></li>
              <li><a href="/contact/" className="hover:text-white transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          {/* Sellers */}
          <div>
            <h4 className="text-white font-bold mb-4">SELLER SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/sellers/" className="hover:text-white transition-colors">Platinum Sellers</a></li>
              <li><a href="/sellers/" className="hover:text-white transition-colors">Listing Approach</a></li>
              <li><a href="/sellers/" className="hover:text-white transition-colors">Home Preparation</a></li>
              <li><a href="/sellers/" className="hover:text-white transition-colors">Marketing</a></li>
              <li><a href="/sellers/" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="/sellers/" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Buyers */}
          <div>
            <h4 className="text-white font-bold mb-4">BUYER SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/buyers/" className="hover:text-white transition-colors">Complimentary Services</a></li>
              <li><a href="/buyers/" className="hover:text-white transition-colors">Post Purchase Assistance</a></li>
              <li><a href="/buyers/" className="hover:text-white transition-colors">Step by Step Buying Guide</a></li>
              <li><a href="/properties/" className="hover:text-white transition-colors">Home Search</a></li>
            </ul>
          </div>

          {/* Neighborhoods */}
          <div>
            <h4 className="text-white font-bold mb-4">NEIGHBORHOODS</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/neighborhoods/" className="hover:text-white transition-colors">Palo Alto</a></li>
              <li><a href="/neighborhoods/" className="hover:text-white transition-colors">Menlo Park</a></li>
              <li><a href="/neighborhoods/" className="hover:text-white transition-colors">Atherton</a></li>
              <li><a href="/neighborhoods/" className="hover:text-white transition-colors">Mountain View</a></li>
              <li><a href="/neighborhoods/" className="hover:text-white transition-colors">Los Altos</a></li>
              <li><a href="/neighborhoods/" className="hover:text-white transition-colors">Los Altos Hills</a></li>
              <li><a href="/neighborhoods/" className="hover:text-white transition-colors">Sunnyvale</a></li>
              <li><a href="/neighborhoods/" className="hover:text-white transition-colors">Cupertino</a></li>
              <li><a href="/neighborhoods/" className="hover:text-white transition-colors">Redwood City</a></li>
              <li><a href="/neighborhoods/" className="hover:text-white transition-colors">Portola Valley</a></li>
              <li><a href="/neighborhoods/" className="hover:text-white transition-colors">Woodside</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              <p className="mb-2">
                Privacy Notice | Legal Disclaimer | Evergreen Realty Inc., DRE #01234567
              </p>
              <p>
                © Copyright {currentYear} Evergreen Realty
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
