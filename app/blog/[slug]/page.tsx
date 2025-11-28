"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NewHeader from "@/components/NewHeader";
import FooterV2 from "@/components/FooterV2";
import SimplifiedCTA from "@/components/SimplifiedCTA";
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
    <div className="relative overflow-x-hidden bg-[#020805] min-h-screen flex flex-col">
      <NewHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pb-20 bg-[#05110e] text-white overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0a1f1a] via-[#05110e] to-[#020805]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-400">
            <Link href="/blog" className="hover:text-[#F2611D] transition-colors">
              Blogs
            </Link>
            <span>/</span>
            <span className="text-white/60">{post.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">{post.title}</h1>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed">{post.heroHighlight}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-[0.2em] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300"
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
          <div className="bg-[#050505] rounded-3xl border border-white/10 shadow-sm p-6 md:p-10 space-y-10">
            {post.sections.map((section) => (
              <article key={section.heading} className="space-y-4">
                {section.heading && (
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{section.heading}</h2>
                )}
                {section.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-base md:text-lg text-gray-400 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white mb-3 uppercase tracking-[0.2em]">Key Takeaways</h3>
              <ul className="space-y-2 text-gray-400">
                {post.keyTakeaways.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#F2611D] font-bold mt-1">•</span>
                    <span className="text-base leading-relaxed">{item}</span>
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

