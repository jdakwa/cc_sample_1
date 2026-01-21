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
    <section id="lead-forms" className="py-16 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-green-700">
            Fill out the form below and we&apos;ll reach out within 24 hours
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex mb-8 bg-white p-2 rounded-lg shadow-lg border-2 border-amber-800">
          <button
            onClick={() => setActiveTab('buyer')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
              activeTab === 'buyer'
                ? 'bg-amber-900 text-white'
                : 'text-gray-700 hover:bg-amber-50'
            }`}
          >
            I&apos;m Buying
          </button>
          <button
            onClick={() => setActiveTab('seller')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
              activeTab === 'seller'
                ? 'bg-amber-900 text-white'
                : 'text-gray-700 hover:bg-amber-50'
            }`}
          >
            I&apos;m Selling
          </button>
        </div>

        {/* Buyer Form */}
        {activeTab === 'buyer' && (
          <form onSubmit={handleBuyerSubmit} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="buyer-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="buyer-name"
                    type="text"
                    required
                    value={buyerForm.name}
                    onChange={(e) => setBuyerForm({ ...buyerForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="buyer-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="buyer-email"
                    type="email"
                    required
                    value={buyerForm.email}
                    onChange={(e) => setBuyerForm({ ...buyerForm, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="buyer-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="buyer-phone"
                    type="tel"
                    required
                    value={buyerForm.phone}
                    onChange={(e) => setBuyerForm({ ...buyerForm, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="buyer-budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="buyer-budget"
                    value={buyerForm.budget}
                    onChange={(e) => setBuyerForm({ ...buyerForm, budget: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
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

              <div>
                <label htmlFor="buyer-location" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Location
                </label>
                <input
                  id="buyer-location"
                  type="text"
                  value={buyerForm.location}
                  onChange={(e) => setBuyerForm({ ...buyerForm, location: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  placeholder="City, State or Zip Code"
                />
              </div>

              <div>
                <label htmlFor="buyer-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="buyer-message"
                  value={buyerForm.message}
                  onChange={(e) => setBuyerForm({ ...buyerForm, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
                  placeholder="Tell us about your ideal home..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-400 text-green-800 rounded-md">
                  Thank you! We&apos;ll contact you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-400 text-red-800 rounded-md">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-amber-900 text-white font-semibold rounded-md hover:bg-amber-800 transition-colors disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        )}

        {/* Seller Form */}
        {activeTab === 'seller' && (
          <form onSubmit={handleSellerSubmit} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="seller-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="seller-name"
                    type="text"
                    required
                    value={sellerForm.name}
                    onChange={(e) => setSellerForm({ ...sellerForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="seller-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="seller-email"
                    type="email"
                    required
                    value={sellerForm.email}
                    onChange={(e) => setSellerForm({ ...sellerForm, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="seller-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="seller-phone"
                    type="tel"
                    required
                    value={sellerForm.phone}
                    onChange={(e) => setSellerForm({ ...sellerForm, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    placeholder="(555) 987-6543"
                  />
                </div>
                <div>
                  <label htmlFor="seller-property-type" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    id="seller-property-type"
                    value={sellerForm.propertyType}
                    onChange={(e) => setSellerForm({ ...sellerForm, propertyType: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
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

              <div>
                <label htmlFor="seller-address" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Address *
                </label>
                <input
                  id="seller-address"
                  type="text"
                  required
                  value={sellerForm.address}
                  onChange={(e) => setSellerForm({ ...sellerForm, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>

              <div>
                <label htmlFor="seller-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="seller-message"
                  value={sellerForm.message}
                  onChange={(e) => setSellerForm({ ...sellerForm, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
                  placeholder="Tell us about your property and selling timeline..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-400 text-green-800 rounded-md">
                  Thank you! We&apos;ll contact you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-400 text-red-800 rounded-md">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-amber-900 text-white font-semibold rounded-md hover:bg-amber-800 transition-colors disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
