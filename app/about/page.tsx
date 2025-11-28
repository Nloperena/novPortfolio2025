'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import NewHeader from '@/components/NewHeader';
import FooterV2 from '@/components/FooterV2';
import LegacyInfrastructure from '@/components/LegacyInfrastructure';
import { X } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="relative overflow-x-hidden bg-[#FAFAFA] text-[#0a0a0a] min-h-screen">
      <NewHeader />

      {/* Hero Section - The Hook */}
      <section className="pt-32 pb-20 md:pb-24 bg-[#ffffff] border-b border-[#0a0a0a]/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Subtle Grid Background */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #0a0a0a 1px, transparent 1px),
                  linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
            
            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xs font-mono uppercase tracking-[0.3em] text-[#0a0a0a]/60 mb-6"
              >
                System Architecture & Digital Infrastructure
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0a0a0a] tracking-tight mb-6 leading-[1.1]"
              >
                Inherited Precision.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl md:text-2xl text-[#0a0a0a]/70 font-light leading-relaxed max-w-2xl"
              >
                I come from a line of architects—some built with stone, others with law. I build with code.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Biography Section - The Narrative */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <p className="font-serif text-lg md:text-xl text-[#0a0a0a]/80 leading-relaxed mb-6">
              In the 18th century, the Loperena family held the office of <strong className="font-semibold text-[#0a0a0a]">Rey de Armas</strong> (King of Arms) in Navarre. Their job was <strong className="font-semibold text-[#0a0a0a]">Data Integrity</strong>—verifying lineages, maintaining registries, and ensuring the 'source of truth' was preserved.
            </p>
            
            <p className="font-serif text-lg md:text-xl text-[#0a0a0a]/80 leading-relaxed mb-6">
              In the 20th century, my grandfather shifted to <strong className="font-semibold text-[#0a0a0a]">Industrial Infrastructure</strong>, building the logistics networks (Salutaris, Borinquen Lines) that modernized Puerto Rico.
            </p>
            
            <p className="font-serif text-lg md:text-xl text-[#0a0a0a]/80 leading-relaxed">
              Today, I apply that same obsessive discipline to <strong className="font-semibold text-[#0a0a0a]">Digital Infrastructure</strong>. As a Senior Software Engineer, I don't just write functions; I architect systems. I build applications designed to handle complexity, scale without breaking, and stand the test of time.
            </p>
            
            <p className="font-serif text-lg md:text-xl text-[#0a0a0a]/80 leading-relaxed mt-6 italic text-[#0a0a0a]/60">
              The tools have changed—from quill and seal to TypeScript and Cloud—but the mandate remains the same: <strong className="font-semibold text-[#0a0a0a] not-italic">Build things that last.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Portal Section - The Centerpiece */}
      <section className="py-24 md:py-32 bg-[#ffffff] border-y border-[#0a0a0a]/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#0a0a0a]/60 mb-4">
              The Archive
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight">
              THE PROOF
            </h2>
          </motion.div>
          
          <LegacyInfrastructure />
        </div>
      </section>

      {/* Technical Arsenal Section - The Modern Capability */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#0a0a0a]/60 mb-4 text-center">
              The Modern Architecture
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight text-center">
              Technical Arsenal
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="border border-[#0a0a0a] bg-[#ffffff] p-6 md:p-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#0a0a0a]/60 mb-4">
                Frontend
              </h3>
              <ul className="space-y-2">
                <li className="font-sans text-base text-[#0a0a0a]">React</li>
                <li className="font-sans text-base text-[#0a0a0a]">Next.js</li>
                <li className="font-sans text-base text-[#0a0a0a]">Tailwind CSS</li>
                <li className="font-sans text-base text-[#0a0a0a]">TypeScript</li>
              </ul>
            </motion.div>

            {/* Card 2: Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="border border-[#0a0a0a] bg-[#ffffff] p-6 md:p-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#0a0a0a]/60 mb-4">
                Systems
              </h3>
              <ul className="space-y-2">
                <li className="font-sans text-base text-[#0a0a0a]">Node.js</li>
                <li className="font-sans text-base text-[#0a0a0a]">PostgreSQL</li>
                <li className="font-sans text-base text-[#0a0a0a]">System Design</li>
                <li className="font-sans text-base text-[#0a0a0a]">Cloud Architecture</li>
              </ul>
            </motion.div>

            {/* Card 3: The Wolf */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="border border-[#0a0a0a] bg-[#ffffff] p-6 md:p-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#0a0a0a]/60 mb-4">
                The Wolf
              </h3>
              <ul className="space-y-2">
                <li className="font-sans text-base text-[#0a0a0a]">Legacy Code Refactoring</li>
                <li className="font-sans text-base text-[#0a0a0a]">Scalability</li>
                <li className="font-sans text-base text-[#0a0a0a]">Optimization</li>
                <li className="font-sans text-base text-[#0a0a0a]">Performance Engineering</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Signature */}
      <section className="py-16 bg-[#ffffff] border-t border-[#0a0a0a]/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-lg text-[#0a0a0a]/60"
          >
            Nicholas Loperena. Est. 199X.
          </motion.p>
        </div>
      </section>

      <FooterV2 />
    </div>
  );
}
