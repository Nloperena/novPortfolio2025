'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NewHeader from '@/components/NewHeader';
import FooterV2 from '@/components/FooterV2';
import TextType from '@/components/TextType';
import SimplifiedCTA from '@/components/SimplifiedCTA';
import { ArrowLeft, TrendingUp, Users, Video, Target, Zap } from 'lucide-react';

export default function VITOCaseStudy() {
  const metrics = [
    {
      icon: TrendingUp,
      value: '285%',
      label: 'Traffic Growth',
      color: 'text-[#1a4d3a]'
    },
    {
      icon: Video,
      value: '40+',
      label: 'Video Testimonials',
      color: 'text-[#F2611D]'
    },
    {
      icon: Users,
      value: '100%',
      label: 'Customer Confusion Eliminated',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      value: '$500',
      label: 'Starting Budget',
      color: 'text-purple-600'
    }
  ];

  const challenges = [
    'Customer confusion about product benefits and usage',
    'Low website traffic and poor conversion rates',
    'Lack of social proof and customer testimonials',
    'Outdated design that didn\'t reflect brand quality',
    'Ineffective marketing systems and processes'
  ];

  const solutions = [
    {
      title: 'Complete Digital Transformation',
      description: 'Redesigned the entire website with modern UI/UX, clear messaging, and strategic information architecture that eliminated customer confusion.'
    },
    {
      title: 'Strategic Content System',
      description: 'Implemented a comprehensive content strategy that generated 40+ authentic video testimonials from satisfied customers.'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimized site performance, SEO, and conversion funnels to drive massive traffic growth and improve user engagement.'
    },
    {
      title: 'Modern Design System',
      description: 'Created a cohesive brand experience across all touchpoints with professional design that reflects the quality of the product.'
    }
  ];

  const testimonials = [
    {
      videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/Caption_video_project-1_1__1_dbbb9822-d82e-45ee-9225-a25be9f41f0b.mp4?v=1724180981',
      title: 'VITO Fryfilter',
      description: 'Complete digital transformation that eliminated customer confusion, generated 40+ video testimonials, and drove massive traffic growth through strategic systems and modern design.',
      clientName: 'VITO Team',
      company: 'VITO Fryfilter Inc.'
    },
    {
      videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/Caption_video_project_1.mp4?v=1724354006',
      title: 'Good Ol Days Diner',
      description: 'Good Ol\' Days Diner welcomes Smarter Frying with VITO! They\'ve maintained the flavor of yesteryears while stepping into the future.',
      company: 'Good Ol\' Days Diner',
    },
    {
      videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/Untitled-1_17.mp4?v=1726158775',
      title: 'Nineveh Assyrian',
      description: 'Jacob from Nineveh has seen the difference VITO makes in both their food truck and restaurant kitchens! Easy to use, keeps their oil cleaner, and extends its life.',
      clientName: 'Jacob',
      company: 'Nineveh Assyrian',
    },
    {
      videoUrl: 'https://cdn.shopify.com/s/files/1/0004/2496/8203/files/Caption_video_project_2.mp4?v=1724179828',
      title: 'Teters Market',
      description: 'Teter\'s Market has discovered the secret for magical savings with VITO, and they\'ve nicknamed it \'The Wizard\'!',
      company: 'Teter\'s Market',
    }
  ];

  return (
    <div className="relative overflow-x-hidden bg-[#f5f5f0] min-h-screen flex flex-col">
      <NewHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-20 bg-[#1a4d3a] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
              <span className="text-[10px] uppercase tracking-[0.25em] bg-white/10 px-2 py-0.5 rounded-full">
                Case Study
              </span>
            </Link>

            <div className="space-y-4 max-w-4xl">
              <TextType
                as="h1"
                text="VITO Fryfilter: From $500 Crisis to Market Leader"
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white block"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                loop={false}
                startOnVisible={true}
              />
              <p className="text-base md:text-lg text-white/85 leading-relaxed">
                A $500 diagnostic engagement turned into a full-stack transformation: new architecture, credibility systems, and
                compounding growth engines that eliminated confusion, generated 40+ testimonials, and delivered 285% traffic growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#results"
                className="inline-flex items-center justify-center rounded-full bg-[#F2611D] px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View the Outcomes
              </Link>
              <Link
                href="#contact-section"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 space-y-3"
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a4d3a]/70">VITO Fryfilter · The Challenge</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a4d3a]">The Challenge</h2>
            <p className="text-base md:text-lg text-[#1a4d3a]/80 max-w-3xl">
              VITO had a world-class product yet a fragile U.S. presence: limited traffic, inconsistent messaging, and almost zero
              social proof. We had to build trust quickly, starting with only $500.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm space-y-2"
              >
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#F2611D] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base leading-relaxed">{challenge}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 space-y-3"
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a4d3a]/70">VITO Fryfilter · The Approach</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a4d3a]">The Approach</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl">
              Layered systems across product education, credibility, and conversion—engineered to keep compounding long after launch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#f5f5f0] rounded-2xl p-6 border border-gray-200 transition-all duration-300 hover:border-[#F2611D] hover:shadow-lg group flex flex-col gap-3"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-[#1a4d3a] group-hover:text-[#F2611D] transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 md:py-20 bg-[#1a4d3a] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/60">VITO Fryfilter · Results</p>
            <h2 className="text-3xl md:text-4xl font-bold">The Results: From Hidden Player to Market Leader</h2>
            <p className="text-sm md:text-base text-white/80 max-w-3xl">
              Within months, VITO went from a low-visibility importer to a category authority with reliable demand, social proof, and
              systems that continue generating new business organically.
            </p>
          </motion.div>

          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 rounded-xl p-5 text-center border border-white/20 space-y-2"
                >
                  <Icon className="w-8 h-8 text-[#F2611D] mx-auto" />
                  <div className="text-3xl font-extrabold">{metric.value}</div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-white/90">{metric.label}</div>
                  <p className="text-sm text-white/70">
                    {metric.label === 'Traffic Growth' && 'Highest site traffic since entering the US market.'}
                    {metric.label === 'Video Testimonials' && 'Authentic proof captured from chefs, owners, and operators.'}
                    {metric.label === 'Customer Confusion Eliminated' && 'Clear messaging and flows that convert interest to purchase.'}
                    {metric.label === 'Starting Budget' && 'Scaled from a $500 test to multi-market rollout.'}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 space-y-3 text-left"
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a4d3a]/70">
              VITO Fryfilter · Client Success Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a4d3a]">Client Success Stories</h2>
            <p className="text-base md:text-lg text-[#1a4d3a]/80 max-w-3xl">
              Real kitchens, real operators—captured through the testimonial engine built specifically for VITO Fryfilter.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              >
                <div className="relative aspect-[9/16] bg-black">
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
                </div>
                <div className="p-5 space-y-2">
                  <div className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-[#F2611D] font-semibold">
                    VITO
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {testimonial.title}
                  </h4>
                  {(testimonial.clientName || testimonial.company) && (
                    <p className="text-sm text-gray-500">
                      {testimonial.clientName && <span className="font-semibold">{testimonial.clientName}</span>}
                      {testimonial.clientName && testimonial.company && ' at '}
                      {testimonial.company && <span>{testimonial.company}</span>}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SimplifiedCTA />

      <FooterV2 />
    </div>
  );
}

