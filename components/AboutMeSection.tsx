'use client'

import React from 'react';
import { motion } from 'framer-motion';
import CurvedLoop from './CurvedLoop';
import TextType from './TextType';

import TiltCard from '@/components/TiltCard';

const AboutMeSection = () => {
  return (
    <section
      aria-label="About Me"
      className="bg-[#05110e] py-20 md:py-24 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <TextType
            as="h2"
            text="Beyond Code: Architecting Digital Dominance"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white block text-left"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={false}
            loop={false}
            startOnVisible={true}
          />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Left Column - Text Focus */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Where I started */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                The Foundation
              </h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                My roots in IT and marketing revealed a critical gap: the disconnect between technical execution and business strategy. I realized that code without purpose is just noise.
              </p>
            </div>

            {/* What I do now */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                The Architecture
              </h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                I bridge that gap. As a Digital Architect, I engineer systems that are not just functional, but foundational to organizational revenue growth. I build engines of conversion.
              </p>
            </div>

            {/* Who I help */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                The Partners
              </h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                Visionary B2B and industrial leaders ready to transform their digital presence from a liability into their strongest asset.
              </p>
            </div>

            {/* The Legacy */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                The Legacy
              </h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                My work is built on a foundation that spans <strong className="text-white">300 years</strong>—from the Pyrenees to Puerto Rico to Florida. Systems thinking runs in the bloodline: logistics, law, industry, and now code. Every architecture I build carries that lineage forward.
              </p>
            </div>

            {/* Key Qualifications */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-base md:text-lg font-semibold text-white mb-3">Key Qualifiers</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#F2611D] font-bold mt-1">•</span>
                  <span className="text-base md:text-lg text-gray-400">
                    <strong>Alumnus</strong> – Computer Science foundation with 6+ years building production systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F2611D] font-bold mt-1">•</span>
                  <span className="text-base md:text-lg text-gray-400">
                    <strong>Proven Impact</strong> – VITO (70+ testimonials, record traffic), RuggedRed, and more
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F2611D] font-bold mt-1">•</span>
                  <span className="text-base md:text-lg text-gray-400">
                    <strong>Conversion Obsessed</strong> – Every line of code serves a business outcome
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Architect's Focus */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative perspective-1000 md:sticky md:top-24"
          >
            {/* Single, Dominant Headshot */}
            <TiltCard>
              <div className="w-full max-w-sm ml-auto rounded-lg overflow-hidden shadow-[0_0_40px_rgba(242,97,29,0.15)] border border-[#F2611D]/30">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGkyoWF6XLw_Q/profile-displayphoto-crop_800_800/B4EZk5boiUIkAI-/0/1757605170745?e=1764806400&v=beta&t=dAWY-djuCly_Y7PJV1JJ_yRFc165bpj8PQPZbJNphi4"
                  alt="Nicholas Loperena - Digital Architect"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </TiltCard>

            {/* Elegant "About Me" Card - Bottom Corner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 200
              }}
              className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-5 shadow-xl border border-gray-200 z-20"
            >
              {/* UCF Badge */}
              <div className="flex items-center gap-3">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E0BAQFOIyEFFfAtYQ/company-logo_200_200/B4EZpuJz_NHgAQ-/0/1762784657766/university_of_central_florida_logo?e=1764806400&v=beta&t=HW7fi2vrMBGr8bysoiY0r7REYkHDLWK_KOhZX5phCcE"
                  alt="UCF Logo"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain flex-shrink-0"
                />
                <div className="text-sm md:text-base font-semibold text-[#1a4d3a]">UCF Alumnus</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Curved Loop Marquee at tail end of About section - Slowed down and spaced out */}
      <div className="mb-32">
      <CurvedLoop
        marqueeText="Creative ✦ Developer ✦ Architect ✦ Designer ✦"
            speed={0.2}
        curveAmount={180}
        direction="right"
        interactive={true}
      />
      </div>
    </section>
  );
};

export default AboutMeSection;

