'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NewHeader from '@/components/NewHeader';
import FooterV2 from '@/components/FooterV2';
import TextType from '@/components/TextType';
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#1a4d3a] to-[#1a4d3a]/95">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <span className="bg-[#F2611D]/20 border border-[#F2611D]/40 rounded-lg px-3 py-1 text-[#F2611D] font-bold text-xs uppercase tracking-wide mb-6 inline-block">
              Case Study
            </span>
            
            <TextType
              as="h1"
              text="VITO Fryfilter: From $500 Crisis to Market Leader"
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 block"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              loop={false}
              startOnVisible={true}
            />
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Complete digital transformation that eliminated customer confusion, generated 40+ video testimonials, 
              and drove 285% traffic growth through strategic systems and modern design.
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20"
                >
                  <Icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                  <div className={`text-3xl md:text-4xl font-black ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-6 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <TextType
              as="h2"
              text="The Challenge"
              className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1a4d3a] mb-6 block"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              loop={false}
              startOnVisible={true}
            />
            <p className="text-xl text-gray-700 max-w-3xl">
              VITO Fryfilter came to us with a critical problem: despite having an innovative product, 
              they were struggling with low website traffic, customer confusion, and minimal social proof. 
              With a starting budget of just $500, we needed to create maximum impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
              >
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#F2611D] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{challenge}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <TextType
              as="h2"
              text="The Approach"
              className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1a4d3a] mb-6 block"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              loop={false}
              startOnVisible={true}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#f5f5f0] rounded-lg p-8 lg:p-10 xl:p-12 border-2 border-gray-200 cursor-pointer transition-all duration-300 hover:border-[#F2611D] hover:shadow-lg group lg:min-h-[280px] xl:min-h-[320px] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl lg:text-3xl font-black text-[#1a4d3a] mb-4 group-hover:text-[#F2611D] transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 text-lg lg:text-xl leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 bg-[#1a4d3a]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TextType
              as="h2"
              text="The Results"
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 block"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              loop={false}
              startOnVisible={true}
            />
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Through strategic design, content creation, and system optimization, we transformed VITO Fryfilter 
              from a struggling startup into a market leader with measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <TextType
              as="h2"
              text="Client Success Stories"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 block"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              loop={false}
              startOnVisible={true}
            />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real results from real clients. See how our digital solutions drive measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl"
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
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {testimonial.title}
                  </h4>
                  {(testimonial.clientName || testimonial.company) && (
                    <p className="text-sm text-gray-500 mb-3">
                      {testimonial.clientName && <span className="font-semibold">{testimonial.clientName}</span>}
                      {testimonial.clientName && testimonial.company && ' at '}
                      {testimonial.company && <span>{testimonial.company}</span>}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#f5f5f0]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1a4d3a] mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#1a4d3a] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#2a5d4a] transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterV2 />
    </div>
  );
}

