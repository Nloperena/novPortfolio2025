import React from 'react';
import ScrollProgress from '@/components/ScrollProgress';
import NewHeader from '@/components/NewHeader';
import ThreeDHero from '@/components/ThreeDHero';
import StatsBar from '@/components/StatsBar';
import CredibilityStrip from '@/components/CredibilityStrip';
import AboutMeSection from '@/components/AboutMeSection';
import SelectedWorkSection from '@/components/SelectedWorkSection';
import SimplifiedCTA from '@/components/SimplifiedCTA';
import FooterV2 from '@/components/FooterV2';
import FloatingContactButton from '@/components/FloatingContactButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nico Loperena - Digital Architect',
  description: 'Forging digital realities. Transforming complex business needs into immersive, high-performance digital experiences.',
  openGraph: {
    title: 'Nico Loperena - Digital Architect',
    description: 'Forging digital realities. Transforming complex business needs into immersive, high-performance digital experiences.',
    type: 'website',
    url: '/',
  },
};

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-[#020805] text-white selection:bg-[#F2611D] selection:text-white">
      <ScrollProgress />
      <NewHeader />

      {/* Hero Section - Full Screen Immersive */}
        <ThreeDHero />

      {/* Stats Bar - Floating Glass */}
        <StatsBar />

      {/* Credibility Strip - Dark Mode */}
      <div className="border-t border-white/5 bg-[#020805]/80">
        <CredibilityStrip />
      </div>

      {/* Main Content - Dark Theme Wrapper */}
      <div className="space-y-0 relative z-10">

        {/* Selected Work Section - Consolidated */}
        <SelectedWorkSection />

      {/* About Me / Story Section */}
         <div className="bg-[#05110e]">
        <AboutMeSection />
         </div>

      {/* Simplified CTA Section */}
        <SimplifiedCTA />
      </div>

      {/* Footer */}
      <FooterV2 />

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
}

