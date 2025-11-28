'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NewHeader from '@/components/NewHeader';
import FooterV2 from '@/components/FooterV2';
import TextType from '@/components/TextType';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative overflow-x-hidden bg-[#f5f5f0] min-h-screen flex flex-col">
      <NewHeader />

      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TextType
              as="h1"
              text="404"
              className="text-9xl md:text-[12rem] lg:text-[15rem] font-black text-[#1a4d3a] mb-4 block"
              typingSpeed={50}
              pauseDuration={1500}
              showCursor={false}
              loop={false}
              startOnVisible={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <TextType
              as="h2"
              text="Page Not Found"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a4d3a] mb-4 block"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              loop={false}
              startOnVisible={true}
              initialDelay={2000}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#1a4d3a] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#2a5d4a] transition-colors shadow-lg"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[#1a4d3a] px-8 py-4 rounded-md font-semibold text-lg border-2 border-[#1a4d3a] hover:bg-[#1a4d3a]/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>
        </div>
      </main>

      <FooterV2 />
    </div>
  );
}


