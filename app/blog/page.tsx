'use client';

import React from 'react';
import Link from 'next/link';
import NewHeader from '@/components/NewHeader';
import FooterV2 from '@/components/FooterV2';
import SimplifiedCTA from '@/components/SimplifiedCTA';
import FaultyTerminal from '@/components/FaultyTerminal';
import { blogPosts } from '@/data/blogPosts';

export default function BlogIndexPage() {
  return (
    <div className="relative overflow-x-hidden bg-[#f5f5f0] min-h-screen flex flex-col">
      <NewHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pb-20 bg-[#1a4d3a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <FaultyTerminal
            pause={false}
            mouseReact={false}
            brightness={0.9}
            timeScale={0.2}
            className="w-full h-full"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 space-y-6">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/70">Insights & Systems</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">Blogs & Field Notes</h1>
          <p className="text-base md:text-lg text-white/85 max-w-3xl">
            Compounding systems, credibility engines, and digital architecture breakdowns. Everything I build for clients starts
            here—with a practical blueprint.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a4d3a]">Latest Writing</h2>
            <p className="text-base text-[#1a4d3a]/80 max-w-3xl">
              Curated breakdowns from active client work, including the exact systems that turn a $500 diagnostic into enduring
              market leverage.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col gap-4"
              >
                <div className="text-xs font-semibold text-[#F2611D] uppercase tracking-[0.25em]">Featured Insight</div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-[#1a4d3a]">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.excerpt}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wide bg-[#f5f5f0] text-[#1a4d3a] px-3 py-1 rounded-full border border-[#1a4d3a]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#F2611D] font-semibold hover:translate-x-1 transition-transform"
                  >
                    Read the full breakdown
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SimplifiedCTA />
      <FooterV2 />
    </div>
  );
}

