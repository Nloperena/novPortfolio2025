export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  heroHighlight: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  sections: BlogSection[];
  keyTakeaways: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'strategic-digital-architecture',
    title: 'Strategic Digital Architecture for Compounding Growth',
    heroHighlight: 'How a systems-first mindset compounds value beyond any single launch.',
    excerpt:
      'The compounding impact of digital architecture isn’t about flash—it’s about building foundations that continue to work long after the project “ends.” Here’s how I approach every engagement so the systems keep paying dividends.',
    date: 'November 14, 2025',
    readTime: '6 min read',
    tags: ['Systems Thinking', 'Case Studies', 'Digital Architecture'],
    sections: [
      {
        heading: 'Lead with Architecture, Not Aesthetics',
        paragraphs: [
          'Design still matters, but not before the architecture. Before I ever touch typography or color, I map the customer journey, decision points, and proof moments. That’s how you eliminate confusion and reduce friction—by engineering intentional paths.',
          'When we built VITO’s new platform, the earliest work happened under the hood: reorganizing navigation, rewriting product education flows, and building the credibility engine that now feeds 70+ testimonials. Pixel polish came after the system worked.'
        ]
      },
      {
        heading: 'Build Proof Engines, Not “Testimonials Pages”',
        paragraphs: [
          'Most teams treat testimonials as a checkbox. I build them like products. The VITO testimonial engine runs like a manufacturing line—automated outreach, easy filming pipelines, and distribution templates so each video is repurposed everywhere.',
          'That’s the difference between “we collected a few quotes” and “we built an asset that continues to grow without manual effort.”'
        ]
      },
      {
        heading: 'Every System Should Outlive the Engagement',
        paragraphs: [
          'My favorite projects are the ones where I become less necessary over time. When you document the architecture, align the team, and ship modular components, the client keeps compounding value long after the initial build.',
          'That mindset is how a $500 diagnostic turned into a multi-market rollout—because the systems created trust, revenue, and headroom for the next initiative.'
        ]
      }
    ],
    keyTakeaways: [
      'Architecture sets the ceiling for performance. Design makes it approachable.',
      'Proof engines should run like products—repeatable, automated, always-on.',
      'Deliverables matter, but the systems behind them create the compounding effect.'
    ]
  }
];

