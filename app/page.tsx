'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SocialProof from '@/components/SocialProof';
import CallToAction from '@/components/CallToAction';
import LeadForms from '@/components/LeadForms';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <CallToAction />
      <LeadForms />
      <Footer />
    </div>
  );
}
