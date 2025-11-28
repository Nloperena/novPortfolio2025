'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactModal from './ContactModal';
import TextType from './TextType';
import { ArrowRight, Sparkles } from 'lucide-react';

const SimplifiedCTA = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#020805]">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#1a4d3a] opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
            <Sparkles className="w-4 h-4 text-[#F2611D]" />
            <span className="text-sm font-medium text-white/90">Limited Availability for Q1 2025</span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
          Building Next-Generation <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
            Growth Systems
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          No sales pitches. Just a 20-minute strategy call to see if we can engineer a digital foundation that compounds organizational revenue.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsContactModalOpen(true)}
            className="w-full sm:w-auto rounded-lg bg-[#F2611D] hover:bg-[#ff7a3d] text-white px-8 py-4 text-lg font-bold transition-all shadow-lg shadow-[#F2611D]/25 flex items-center justify-center gap-2 group"
          >
            Schedule Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <Link href="/projects/vito-fryfilter" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 text-lg font-semibold transition-all backdrop-blur-sm"
            >
              View Case Studies
            </motion.button>
          </Link>
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
};

export default SimplifiedCTA;

