"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import NewHeader from "@/components/NewHeader";
import FooterV2 from "@/components/FooterV2";
import SimplifiedCTA from "@/components/SimplifiedCTA";
import LetterGlitch from "@/components/LetterGlitch";
import { blogPosts } from "@/data/blogPosts";

interface BlogDetailPageProps {
  params: { slug: string };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative overflow-x-hidden bg-[#f5f5f0] min-h-screen flex flex-col">
      <NewHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pb-20 bg-[#1a4d3a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-35 pointer-events-none">
          <LetterGlitch
            glitchColors={['#1a4d3a', '#61dca3', '#61b3dc', '#F2611D']}
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blogs
            </Link>
            <span>/</span>
            <span>{post.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">{post.title}</h1>
          <p className="text-base md:text-lg text-white/85 max-w-3xl">{post.heroHighlight}</p>
          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-[0.2em] bg-white/10 border border-white/30 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-12">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-10 space-y-10">
            {post.sections.map((section) => (
              <article key={section.heading} className="space-y-3">
                <h2 className="text-2xl font-bold text-[#1a4d3a]">{section.heading}</h2>
                {section.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-base text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-[#1a4d3a] mb-3 uppercase tracking-[0.2em]">Key Takeaways</h3>
              <ul className="space-y-2 text-gray-700">
                {post.keyTakeaways.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#F2611D] font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SimplifiedCTA />
      <FooterV2 />
    </div>
  );
}

