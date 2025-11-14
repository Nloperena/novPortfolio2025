'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TextType from './TextType';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Star, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Play,
  User,
  Briefcase
} from 'lucide-react';

interface VideoTestimonial {
  videoUrl: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  company: string;
  type: 'executive' | 'user';
}

const vitoTestimonials: VideoTestimonial[] = [
  {
    videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/Caption_video_project-1_1__1_dbbb9822-d82e-45ee-9225-a25be9f41f0b.mp4?v=1724180981',
    quote: 'Complete digital transformation that eliminated customer confusion and drove unprecedented growth.',
    clientName: 'VITO Team',
    clientTitle: 'Executive Team',
    company: 'VITO Fryfilter Inc.',
    type: 'executive'
  },
  {
    videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/Caption_video_project_1.mp4?v=1724354006',
    quote: 'Good Ol\' Days Diner welcomes Smarter Frying with VITO! They\'ve maintained the flavor of yesteryears while stepping into the future.',
    clientName: 'Good Ol\' Days Diner',
    clientTitle: 'Restaurant Owner',
    company: 'Good Ol\' Days Diner',
    type: 'user'
  },
  {
    videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/Untitled-1_17.mp4?v=1726158775',
    quote: 'Jacob from Nineveh has seen the difference VITO makes in both their food truck and restaurant kitchens!',
    clientName: 'Jacob',
    clientTitle: 'Owner',
    company: 'Nineveh Assyrian',
    type: 'user'
  },
  {
    videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/Caption_video_project_2.mp4?v=1724179828',
    quote: 'Teter\'s Market has discovered the secret for magical savings with VITO, and they\'ve nicknamed it \'The Wizard\'!',
    clientName: 'Teter\'s Market',
    clientTitle: 'Market Owner',
    company: 'Teter\'s Market',
    type: 'user'
  },
  {
    videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/Baily_Testimonial_-_Short_1_1.mp4?v=1724180955',
    quote: 'Freshness is king, and VITO helps us keep it fresh. Serving Buffalo\'s best seafood for decades.',
    clientName: 'Bailey Seafood',
    clientTitle: 'Restaurant Manager',
    company: 'Bailey Seafood',
    type: 'user'
  },
  {
    videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/platime_1_033ab9cd-3ced-4972-9eda-487b96bd0412.mp4?v=1724180986',
    quote: 'At Playtime Arcade & Bar, the fun never stops! With VITO, they\'re keeping their kitchen clean and efficient.',
    clientName: 'Playtime Arcade',
    clientTitle: 'Operations Manager',
    company: 'Playtime Arcade & Bar',
    type: 'user'
  }
];

const VITOCaseStudySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, vitoTestimonials.length - 1));
    setCurrentIndex(newIndex);
    if (carouselRef.current) {
      const card = carouselRef.current.children[newIndex] as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 24; // gap-6 = 24px
        carouselRef.current.scrollTo({
          left: newIndex * (cardWidth + gap),
          behavior: 'smooth'
        });
      }
    }
  };

  const nextTestimonial = () => {
    scrollToIndex(currentIndex + 1);
  };

  const prevTestimonial = () => {
    scrollToIndex(currentIndex - 1);
  };

  // Track scroll position to update currentIndex
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = 400; // Approximate width including gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(newIndex, vitoTestimonials.length - 1));
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-x-hidden bg-[#f5f5f0] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* A. Main Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TextType
            as="h2"
            text="From US Obscurity to Market Leader: The VITO Fryfilter Transformation"
            className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1a4d3a] mb-6 block"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={false}
            loop={false}
            startOnVisible={true}
          />
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            How strategic technology and executive consultation drove unprecedented growth and credibility.
          </p>
        </motion.div>

        {/* B. Narrative Introduction Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 max-w-4xl"
        >
          <h3 className="text-3xl md:text-4xl font-black text-[#1a4d3a] mb-6">
            The Challenge: Building Trust & Scale
          </h3>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              When VITO Fryfilter, a successful German company, embarked on its US market entry, they were virtually invisible. Their digital presence was non-existent.
            </p>
            <p>
              They had zero credibility—going from literally 0 to 70+ video testimonials. They faced significant challenges: a terrible website, outdated branding that failed to resonate with American consumers, and just 6 Google reviews, 3 of which were internal. For their entire existence, they were effectively unknown in the competitive US market.
            </p>
            <p>
              I partnered directly with their executives to architect a new foundation for their US operation. This wasn't just a redesign; I designed and built the compounding systems they needed to build their market presence—systems that continue to generate value long after implementation:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong>Digital Architecture:</strong> A new, high-performance web platform engineered for the US audience.</li>
              <li><strong>Brand & Strategy:</strong> A complete visual and messaging overhaul to establish authority and trust.</li>
              <li><strong>The Credibility Engine:</strong> A proprietary, automated system I built to consistently capture authentic video testimonials from real customers, directly addressing their critical lack of social proof. This system generated 70+ video testimonials, transforming them from zero credibility to market leaders.</li>
            </ul>
          </div>
        </motion.div>

        {/* C. Key Metrics & Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#1a4d3a] rounded-2xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
            Tangible Results & Compounding Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20"
            >
              <Users className="w-10 h-10 text-[#F2611D] mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-black text-white mb-2">70+</div>
              <div className="text-white/90 font-semibold mb-1">Video Testimonials</div>
              <div className="text-white/70 text-sm">from 0 reviews</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20"
            >
              <TrendingUp className="w-10 h-10 text-[#F2611D] mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-black text-white mb-2">520K+</div>
              <div className="text-white/90 font-semibold mb-1">New Users Acquired</div>
              <div className="text-white/70 text-sm">Driving Market Reach</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20"
            >
              <Target className="w-10 h-10 text-[#F2611D] mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-black text-white mb-2">24x</div>
              <div className="text-white/90 font-semibold mb-1">Return on Ad Spend</div>
              <div className="text-white/70 text-sm">Unlocking New Profit</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20"
            >
              <Star className="w-10 h-10 text-[#F2611D] mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-black text-white mb-2">Highest Ever</div>
              <div className="text-white/90 font-semibold mb-1">Monthly Traffic</div>
              <div className="text-white/70 text-sm">And Continues to Grow</div>
            </motion.div>
          </div>

          <p className="text-white/90 text-center text-lg max-w-3xl mx-auto mb-6">
            These achievements weren't just about marketing; they were built on a foundation of technology and strategic executive consultation.
          </p>
          <p className="text-white/80 text-center text-base max-w-3xl mx-auto italic">
            My focus is on creating solutions that generate compounding interest long after I am gone, ensuring sustained growth and impact—even when a direct client relationship concludes.
          </p>
        </motion.div>

        {/* Enduring Systems Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black text-[#1a4d3a] mb-6">
            Enduring Systems, Enduring Results
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            From 2023 to 2025, these foundational systems transformed VITO from an unknown entity into a market leader. The results speak for themselves—demonstrating that well-architected systems continue to deliver compounding value independently.
          </p>
        </motion.div>

        {/* D. Testimonial Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-black text-[#1a4d3a] mb-2">
                The Credibility Engine: See the 70+ Video Testimonials My Systems Created for VITO
              </h3>
              <p className="text-gray-600">
                From zero reviews to authentic social proof—each testimonial generated by the systems I built
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={prevTestimonial}
                disabled={currentIndex === 0}
                className="p-2 rounded-full bg-[#1a4d3a] text-white hover:bg-[#2a5d4a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                disabled={currentIndex >= vitoTestimonials.length - 1}
                className="p-2 rounded-full bg-[#1a4d3a] text-white hover:bg-[#2a5d4a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Carousel Container - Show 2 videos side-by-side with peeking effect */}
          <div className="relative">
            {/* Peeking effect overlay on right */}
            <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 hidden md:block" />
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
              style={{
                scrollSnapType: 'x mandatory',
                scrollPaddingLeft: '0px',
                scrollPaddingRight: '20px'
              }}
            >
              {vitoTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[280px] md:w-[320px] bg-[#f5f5f0] rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {/* Video Thumbnail - Reduced height for better carousel display */}
                  <div className="relative bg-black rounded-t-xl overflow-hidden group cursor-pointer" style={{ height: '280px' }}>
                    <video
                      playsInline
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    >
                      <source src={testimonial.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-3 right-3">
                      {testimonial.type === 'executive' ? (
                        <div className="bg-[#F2611D] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          Executive Insight
                        </div>
                      ) : (
                        <div className="bg-[#1a4d3a] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <User className="w-3 h-3" />
                          User Experience
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quote and Client Info - More concise */}
                  <div className="p-4">
                    <p className="text-gray-700 text-sm leading-relaxed mb-3 italic line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-gray-200 pt-3">
                      <p className="font-bold text-gray-900 text-sm">{testimonial.clientName}</p>
                      <p className="text-xs text-gray-600">
                        {testimonial.clientTitle}
                        {testimonial.company && ` • ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Navigation Dots */}
            <div className="md:hidden flex justify-center gap-2 mt-6">
              {vitoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#F2611D]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* E. Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black text-[#1a4d3a] mb-4">
            Want to achieve similar results?
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can build a strategic foundation for your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
              className="bg-[#F2611D] hover:bg-[#ff7a3d] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors shadow-lg"
            >
              Schedule a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const servicesButton = document.querySelector('button[onclick*="setIsServicesDrawerOpen"]');
                if (servicesButton) {
                  (servicesButton as HTMLElement).click();
                }
              }}
              className="bg-transparent border-2 border-[#1a4d3a] text-[#1a4d3a] hover:bg-[#1a4d3a] hover:text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Explore My Services
            </motion.button>
          </div>
          
          {/* Link to Full Case Study */}
          <div className="mt-8">
            <Link
              href="/projects/vito-fryfilter"
              className="inline-flex items-center gap-2 text-[#F2611D] hover:text-[#ea580c] font-semibold transition-colors"
            >
              View Full Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VITOCaseStudySection;

