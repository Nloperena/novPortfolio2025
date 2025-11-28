'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import TextType from './TextType';
import TiltCard from '@/components/TiltCard';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Video, BarChart3, Sprout } from 'lucide-react';

// --- Shared Components ---

const SectionHeader = ({ label, title, subtitle }: { label: string, title: string, subtitle?: string }) => (
  <div className="space-y-4 mb-12 md:mb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-2"
    >
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#F2611D]">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white block text-left leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  </div>
);

const ProjectStats = ({ stats }: { stats: { icon: React.ElementType, value: string, label: string, sub: string }[] }) => (
  <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-3 mt-12">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white/5 border border-white/10 rounded-lg p-5 md:p-6 text-center space-y-2 hover:bg-white/10 transition-colors"
      >
        <stat.icon className="w-6 h-6 text-[#F2611D] mx-auto mb-2" />
        <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
        <div className="text-white/90 font-semibold text-xs uppercase tracking-wide">
          {stat.label}
        </div>
        <p className="text-gray-500 text-xs">
          {stat.sub}
        </p>
      </motion.div>
    ))}
  </div>
);

// --- Rugged Red Project ---

const RuggedRedProject = () => (
  <div className="py-20 md:py-32 border-b border-white/5">
    <div className="max-w-6xl mx-auto px-4 md:px-6">
      <SectionHeader 
        label="Featured Project · 01" 
        title="RuggedRed: A Digital Renaissance" 
      />

      <div className="grid gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-start">
        {/* Visual - Sticky */}
        <div className="order-2 md:order-1 md:sticky md:top-32">
          <TiltCard>
            <div className="relative mx-auto" style={{ width: '100%', maxWidth: '380px' }}>
              <div className="relative bg-[#0f0f0f] rounded-[2.5rem] p-3 shadow-2xl border border-white/10">
                 {/* Frame highlight */}
                 <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none" />
                <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                   {/* Mockup Content - Image would go here, using iframe for now as requested previously */}
                   <iframe
                      src="https://ruggedRed.com"
                      className="w-full h-full border-0 pointer-events-none bg-white"
                      title="RuggedRed.com"
                      loading="lazy"
                    />
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2 space-y-10">
          <div className="space-y-6">
             <h3 className="text-2xl font-bold text-white">The Challenge</h3>
             <p className="text-lg text-gray-400 leading-relaxed">
                RuggedRed possessed a <strong className="text-white">market-leading industrial solution</strong>, yet their digital footprint failed to convey their premium status. They were losing engagement to <strong className="text-white">competitors with inferior products but superior brands</strong>.
             </p>
             
             <div className="h-px bg-gradient-to-r from-white/20 to-transparent" />

             <h3 className="text-2xl font-bold text-white">The Solution</h3>
             <p className="text-lg text-gray-400 leading-relaxed">
                I engineered a <strong className="text-white">high-velocity Next.js experience</strong> featuring bold, authoritative branding. The architecture is <strong className="text-white">conversion-centric</strong>, designed not just to inform, but to dominate the market presence.
             </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
             <div>
                <div className="text-[#F2611D] font-bold text-xl mb-1">Next.js 14</div>
                <div className="text-sm text-gray-500">App Router Architecture</div>
             </div>
             <div>
                <div className="text-[#F2611D] font-bold text-xl mb-1">100/100</div>
                <div className="text-sm text-gray-500">Lighthouse Performance</div>
             </div>
          </div>

          <div className="pt-4">
            <a
              href="https://ruggedRed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-white font-semibold text-lg hover:text-[#F2611D] transition-colors"
            >
              <span>Visit Live Platform</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- VITO Project ---

interface VideoTestimonial {
    videoUrl: string;
    quote: string;
    clientName: string;
    clientTitle: string;
    company: string;
}

const vitoTestimonials: VideoTestimonial[] = [
    {
        videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/Caption_video_project-1_1__1_dbbb9822-d82e-45ee-9225-a25be9f41f0b.mp4?v=1724180981',
        quote: 'Complete digital transformation that eliminated customer confusion and drove unprecedented growth.',
        clientName: 'VITO Team',
        clientTitle: 'Executive Team',
        company: 'VITO Fryfilter Inc.'
    },
    {
        videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/Caption_video_project_1.mp4?v=1724354006',
        quote: 'They\'ve maintained the flavor of yesteryears while stepping into the future.',
        clientName: 'Good Ol\' Days Diner',
        clientTitle: 'Restaurant Owner',
        company: 'Good Ol\' Days Diner'
    },
    {
        videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/Caption_video_project_2.mp4?v=1724179828',
        quote: 'Teter\'s Market has discovered the secret for magical savings with VITO!',
        clientName: 'Teter\'s Market',
        clientTitle: 'Market Owner',
        company: 'Teter\'s Market'
    }
];

const VitoProject = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollToIndex = (index: number) => {
        const newIndex = Math.max(0, Math.min(index, vitoTestimonials.length - 1));
        setCurrentIndex(newIndex);
        if (carouselRef.current) {
            const card = carouselRef.current.children[newIndex] as HTMLElement;
            if (card) {
                const gap = 24;
                carouselRef.current.scrollTo({
                    left: newIndex * (card.offsetWidth + gap),
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className="py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <SectionHeader 
                    label="Featured Project · 02" 
                    title="VITO: From Invisible to Industry Leader"
                    subtitle="Complete digital transformation + automated credibility engine that generated 70+ video testimonials."
                />

                <div className="grid gap-16 md:grid-cols-[1.2fr_1fr] items-start mb-20">
                    {/* Content - Sticky Left */}
                    <div className="order-1 md:sticky md:top-32 space-y-10">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">The Void</h3>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                German market leader VITO was <strong className="text-white">invisible in the US</strong>—outdated site, <strong className="text-white">zero credibility, 6 reviews</strong>. They had a world-class product with zero digital footprint.
                            </p>

                            <div className="h-px bg-gradient-to-r from-white/20 to-transparent" />

                            <h3 className="text-2xl font-bold text-white">The Engine</h3>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                I didn't just build a website; I built a <strong className="text-white">credibility engine</strong>. A proprietary system that consistently captures <strong className="text-white">authentic video testimonials</strong> from real customers, solving the social proof problem permanently.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link href="/projects/vito-fryfilter">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full md:w-auto bg-[#F2611D] text-white px-8 py-4 rounded-md font-semibold text-lg shadow-lg hover:shadow-[#F2611D]/25 transition-all"
                                >
                                    View Full Case Study
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    {/* Visuals - Right */}
                    <div className="order-2 space-y-8">
                        {/* Before Visual */}
                        <TiltCard>
                            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0f0f0f] p-2 shadow-2xl">
                                <div className="absolute top-4 right-4 z-10 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                                    BEFORE
                                </div>
                                <Image
                                    src="/vito-before-website.png"
                                    alt="Original VITO Website"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                        </TiltCard>

                        {/* Stats Grid */}
                        <ProjectStats 
                            stats={[
                                { icon: Video, value: "70+", label: "Video Testimonials", sub: "Automated Capture" },
                                { icon: BarChart3, value: "Record", label: "Traffic Volume", sub: "Organic Growth" },
                                { icon: Sprout, value: "$0", label: "Ad Spend", sub: "Pure Organic" }
                            ]}
                        />
                    </div>
                </div>

                {/* Testimonial Carousel - Full Width */}
                <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold text-white">The Credibility Engine in Action</h3>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => scrollToIndex(currentIndex - 1)}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button 
                                onClick={() => scrollToIndex(currentIndex + 1)}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div 
                        ref={carouselRef}
                        className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x"
                    >
                        {vitoTestimonials.map((t, i) => (
                            <div 
                                key={i}
                                className="snap-start flex-shrink-0 w-[300px] md:w-[350px] bg-[#050505] border border-white/10 rounded-xl overflow-hidden group"
                            >
                                <div className="relative h-48 bg-black">
                                    <video
                                        playsInline
                                        autoPlay
                                        muted
                                        loop
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                    >
                                        <source src={t.videoUrl} type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-16 h-16 rounded-full bg-[#F2611D] flex items-center justify-center shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300">
                                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="text-gray-300 text-sm italic mb-4 line-clamp-3">"{t.quote}"</p>
                                    <div className="flex items-center justify-between border-t border-white/10 pt-3">
                                        <span className="text-white font-semibold text-sm">{t.clientName}</span>
                                        <span className="text-gray-500 text-xs">{t.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SelectedWorkSection = () => {
  return (
    <section id="work" className="relative bg-[#05110e] border-t border-white/5">
        {/* Shared Background Grain/Texture if needed */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
        
        <RuggedRedProject />
        <VitoProject />
    </section>
  );
};

export default SelectedWorkSection;

