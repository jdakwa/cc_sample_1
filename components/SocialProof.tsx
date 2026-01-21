export default function SocialProof() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* REDEFINING REAL ESTATE Section with Brown Background */}
        <div className="bg-amber-900 py-20 px-8 md:px-16 rounded-3xl mb-16 relative overflow-hidden">
          {/* Asymmetric decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-700/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              REDEFINING REAL ESTATE
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-100 mb-10">
              Evergreen Realty Can Save You Money
            </h3>
            <a 
              href="/sellers/" 
              className="inline-block px-10 py-4 bg-white text-amber-900 font-bold hover:bg-amber-50 transition-colors rounded-lg shadow-xl text-lg"
            >
              MORE INFO &gt;
            </a>
          </div>
        </div>

        {/* Commission Section - Asymmetric layout */}
        <div className="bg-white p-8 md:p-12 shadow-xl rounded-2xl mb-16 relative">
          {/* Asymmetric accent */}
          <div className="absolute top-0 left-0 w-32 h-2 bg-amber-900 rounded-r-full"></div>
          <div className="absolute bottom-0 right-0 w-24 h-2 bg-green-700 rounded-l-full"></div>
          
          <div className="pl-0 md:pl-8">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6">
            List With The Evergreen Team for only 3% Commission
          </h2>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Due to a recent court case and massive legal settlement, we have entered a new era in real estate. Now sellers only have to pay their listing agent—they do not have to pay 2.5% or more for the buyer&apos;s agent. In fact, since August 17, 2024, sellers and listing agents are prohibited from advertising any offers of commission to the buyer&apos;s agent on the MLS and most other real estate websites. Evergreen Realty embraces these client-favorable changes.
            </p>
            <p className="mb-4">
              Despite these new rules, some listing agents are still trying to persuade or pressure sellers to pay 5% commission to list their home— This no longer makes any sense. With Evergreen Realty, sellers can list with our expert team for only 3%, while still getting access to our industry leading home prep, complementary staging, inspection reports, legal services, and so much more.
            </p>
            <p className="mb-4">
              Additionally, buyers are now required to sign agreements in which they commit to the amount that they will pay their own agent. If the agent wants more than the buyer is willing to pay, then our buyer&apos;s team will represent that buyer on our listings at no charge. That&apos;s right, neither the buyer nor the seller will pay any buyer&apos;s-side commission.
            </p>
            <p>
              This client-centric business model saves our sellers money and attracts more buyers to our listings. It&apos;s no wonder we are the #1 Listing Team in Silicon Valley!
            </p>
          </div>
          </div>
        </div>

        {/* The Evergreen Difference - Asymmetric grid */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 text-center">
            THE EVERGREEN DIFFERENCE
          </h2>
          <div className="text-center text-green-700 mb-8 text-sm md:text-base font-semibold">
            PALO ALTO / MENLO PARK / ATHERTON / MOUNTAIN VIEW / LOS ALTOS / LOS ALTOS HILLS / SUNNYVALE / CUPERTINO / REDWOOD CITY / PORTOLA VALLEY / WOODSIDE
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-amber-900 mb-3">SELLER SERVICES</h3>
              <p className="text-gray-700">
                Our listing team does not work with buyers: we are dedicated to you
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow md:mt-8">
              <h3 className="text-xl font-bold text-amber-900 mb-3">BUYER SERVICES</h3>
              <p className="text-gray-700">
                Buyers will have access to a plethora of services and specialists for post-home purchasing assistance…
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-amber-900 mb-3">SILICON VALLEY HOMES</h3>
              <p className="text-gray-700">
                Provide with the right tools, unbiased advice, and specialists for each city…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
