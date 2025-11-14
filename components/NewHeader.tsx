'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal';

const NewHeader = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenContactModal = () => {
      setIsContactModalOpen(true);
    };

    window.addEventListener('openContactModal', handleOpenContactModal);
    return () => {
      window.removeEventListener('openContactModal', handleOpenContactModal);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a4d3a] shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-white text-2xl font-bold">
              N_
            </Link>

            {/* Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#services-section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services-section');
                }}
                className="text-white/95 hover:text-white transition-colors font-semibold text-base"
              >
                Work
              </a>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-[#F2611D] hover:bg-[#ea580c] text-white px-6 py-2 rounded-md transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white" 
              aria-label="Open menu"
              onClick={() => setIsContactModalOpen(true)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Under Construction Bar */}
        <div className="bg-[#F2611D] text-white text-center py-2 text-xs md:text-sm font-medium flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>Under Construction</span>
        </div>
      </header>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default NewHeader;

