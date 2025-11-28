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
    <div className="relative overflow-x-hidden bg-[#020805] min-h-screen flex flex-col">
      <NewHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pb-20 bg-[#05110e] text-white overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0a1f1a] via-[#05110e] to-[#020805]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 space-y-6">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#F2611D]">Insights & Systems</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">Blogs & Field Notes</h1>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl">
            Compounding systems, credibility engines, and digital architecture breakdowns. Everything I build for clients starts
            here—with a practical blueprint.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Writing</h2>
            <p className="text-base text-gray-400 max-w-3xl">
              Thoughts on development, architecture, and building systems that compound over time.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#050505] rounded-2xl border border-white/10 shadow-sm hover:border-[#F2611D]/50 hover:shadow-lg transition-all p-6 flex flex-col gap-4 group"
              >
                <div className="text-xs font-semibold text-[#F2611D] uppercase tracking-[0.25em]">Featured Insight</div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white group-hover:text-[#F2611D] transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-400">{post.excerpt}</p>
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
                      className="text-xs uppercase tracking-wide bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/10"
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

