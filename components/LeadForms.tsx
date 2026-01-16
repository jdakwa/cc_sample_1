'use client';

import { useState } from 'react';

export default function LeadForms() {
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');
  const [buyerForm, setBuyerForm] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    location: '',
    message: ''
  });
  const [sellerForm, setSellerForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleBuyerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'buyer', ...buyerForm })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setBuyerForm({ name: '', email: '', phone: '', budget: '', location: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSellerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'seller', ...sellerForm })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSellerForm({ name: '', email: '', phone: '', address: '', propertyType: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="lead-forms" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Let&apos;s Get Started
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600">
            Fill out the form below and we&apos;ll reach out within 24 hours
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex mb-10 bg-white p-3 rounded-2xl shadow-xl border border-gray-100">
          <button
            onClick={() => setActiveTab('buyer')}
            className={`flex-1 py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'buyer'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <span className="text-2xl mr-2">🏠</span>
            I&apos;m Buying
          </button>
          <button
            onClick={() => setActiveTab('seller')}
            className={`flex-1 py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'seller'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <span className="text-2xl mr-2">💰</span>
            I&apos;m Selling
          </button>
        </div>

        {/* Buyer Form */}
        {activeTab === 'buyer' && (
          <form onSubmit={handleBuyerSubmit} className="relative bg-white rounded-3xl shadow-2xl border-2 border-blue-100 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="buyer-name" className="block text-gray-800 font-bold mb-3 text-lg">
                    Full Name *
                  </label>
                  <input
                    id="buyer-name"
                    type="text"
                    required
                    value={buyerForm.name}
                    onChange={(e) => setBuyerForm({ ...buyerForm, name: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-lg bg-gray-50 focus:bg-white"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="buyer-email" className="block text-gray-800 font-bold mb-3 text-lg">
                    Email Address *
                  </label>
                  <input
                    id="buyer-email"
                    type="email"
                    required
                    value={buyerForm.email}
                    onChange={(e) => setBuyerForm({ ...buyerForm, email: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-lg bg-gray-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="buyer-phone" className="block text-gray-800 font-bold mb-3 text-lg">
                    Phone Number *
                  </label>
                  <input
                    id="buyer-phone"
                    type="tel"
                    required
                    value={buyerForm.phone}
                    onChange={(e) => setBuyerForm({ ...buyerForm, phone: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-lg bg-gray-50 focus:bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="buyer-budget" className="block text-gray-800 font-bold mb-3 text-lg">
                    Budget Range
                  </label>
                  <select
                    id="buyer-budget"
                    value={buyerForm.budget}
                    onChange={(e) => setBuyerForm({ ...buyerForm, budget: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-lg bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select a range</option>
                    <option value="under-300k">Under $300,000</option>
                    <option value="300k-500k">$300,000 - $500,000</option>
                    <option value="500k-750k">$500,000 - $750,000</option>
                    <option value="750k-1m">$750,000 - $1,000,000</option>
                    <option value="over-1m">Over $1,000,000</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="buyer-location" className="block text-gray-800 font-bold mb-3 text-lg">
                  Preferred Location
                </label>
                <input
                  id="buyer-location"
                  type="text"
                  value={buyerForm.location}
                  onChange={(e) => setBuyerForm({ ...buyerForm, location: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-lg bg-gray-50 focus:bg-white"
                  placeholder="City, State or Zip Code"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="buyer-message" className="block text-gray-800 font-bold mb-3 text-lg">
                  Additional Details
                </label>
                <textarea
                  id="buyer-message"
                  value={buyerForm.message}
                  onChange={(e) => setBuyerForm({ ...buyerForm, message: e.target.value })}
                  rows={4}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-lg bg-gray-50 focus:bg-white resize-none"
                  placeholder="Tell us about your ideal home..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 text-green-800 rounded-xl flex items-center gap-3 text-lg font-semibold">
                  <span className="text-2xl">✅</span>
                  Thank you! We&apos;ll contact you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-5 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-400 text-red-800 rounded-xl flex items-center gap-3 text-lg font-semibold">
                  <span className="text-2xl">❌</span>
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="group relative w-full overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3 py-5 text-white font-bold text-xl shadow-xl transform group-hover:scale-[1.02] transition-all duration-300">
                  <span className="text-2xl">{submitting ? '⏳' : '📅'}</span>
                  <span>{submitting ? 'Sending...' : 'Schedule a Showing'}</span>
                  {!submitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                </div>
              </button>
            </div>
          </form>
        )}

        {/* Seller Form */}
        {activeTab === 'seller' && (
          <form onSubmit={handleSellerSubmit} className="relative bg-white rounded-3xl shadow-2xl border-2 border-red-100 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-pink-600 to-red-600"></div>
            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="seller-name" className="block text-gray-800 font-bold mb-3 text-lg">
                    Full Name *
                  </label>
                  <input
                    id="seller-name"
                    type="text"
                    required
                    value={sellerForm.name}
                    onChange={(e) => setSellerForm({ ...sellerForm, name: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none text-lg bg-gray-50 focus:bg-white"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="seller-email" className="block text-gray-800 font-bold mb-3 text-lg">
                    Email Address *
                  </label>
                  <input
                    id="seller-email"
                    type="email"
                    required
                    value={sellerForm.email}
                    onChange={(e) => setSellerForm({ ...sellerForm, email: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none text-lg bg-gray-50 focus:bg-white"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="seller-phone" className="block text-gray-800 font-bold mb-3 text-lg">
                    Phone Number *
                  </label>
                  <input
                    id="seller-phone"
                    type="tel"
                    required
                    value={sellerForm.phone}
                    onChange={(e) => setSellerForm({ ...sellerForm, phone: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none text-lg bg-gray-50 focus:bg-white"
                    placeholder="(555) 987-6543"
                  />
                </div>
                <div>
                  <label htmlFor="seller-property-type" className="block text-gray-800 font-bold mb-3 text-lg">
                    Property Type
                  </label>
                  <select
                    id="seller-property-type"
                    value={sellerForm.propertyType}
                    onChange={(e) => setSellerForm({ ...sellerForm, propertyType: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none text-lg bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select type</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="condo">Condo/Townhouse</option>
                    <option value="multi-family">Multi-Family</option>
                    <option value="land">Land/Lot</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="seller-address" className="block text-gray-800 font-bold mb-3 text-lg">
                  Property Address *
                </label>
                <input
                  id="seller-address"
                  type="text"
                  required
                  value={sellerForm.address}
                  onChange={(e) => setSellerForm({ ...sellerForm, address: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none text-lg bg-gray-50 focus:bg-white"
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="seller-message" className="block text-gray-800 font-bold mb-3 text-lg">
                  Additional Details
                </label>
                <textarea
                  id="seller-message"
                  value={sellerForm.message}
                  onChange={(e) => setSellerForm({ ...sellerForm, message: e.target.value })}
                  rows={4}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none text-lg bg-gray-50 focus:bg-white resize-none"
                  placeholder="Tell us about your property and selling timeline..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 text-green-800 rounded-xl flex items-center gap-3 text-lg font-semibold">
                  <span className="text-2xl">✅</span>
                  Thank you! We&apos;ll contact you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-5 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-400 text-red-800 rounded-xl flex items-center gap-3 text-lg font-semibold">
                  <span className="text-2xl">❌</span>
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="group relative w-full overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-3 py-5 text-white font-bold text-xl shadow-xl transform group-hover:scale-[1.02] transition-all duration-300">
                  <span className="text-2xl">{submitting ? '⏳' : '💰'}</span>
                  <span>{submitting ? 'Sending...' : 'Get Free Home Valuation'}</span>
                  {!submitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                </div>
              </button>
            </div>
          </form>
        )}

        <div className="text-center mt-8">
          <p className="text-gray-500 text-base flex items-center justify-center gap-2">
            <span className="text-xl">🔒</span>
            <span className="font-semibold">Your information is secure and will never be shared with third parties</span>
          </p>
        </div>
      </div>
    </section>
  );
}
