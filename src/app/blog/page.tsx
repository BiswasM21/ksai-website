import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — AI, Web Development & Business Insights",
  description: "Expert insights on AI automation, web development, and business technology. Learn how to leverage AI for your startup or SME. Practical guides and industry analysis.",
  keywords: [
    "AI blog",
    "web development blog",
    "business automation",
    "tech insights",
    "startup technology",
    "SME technology",
  ],
  openGraph: {
    title: "Blog | Kalinga Sovereign AI",
    description: "Expert insights on AI automation, web development, and business technology.",
    url: "https://kalingasovereignai.com/blog",
  },
};

const posts = [
  {
    slug: "why-indian-startups-need-custom-ai",
    title: "Why Indian Startups Need Custom AI Solutions in 2026",
    excerpt: "Discover why Indian startups are increasingly choosing custom AI solutions over generic tools. Learn how tailored AI can give your startup a competitive edge.",
    date: "May 25, 2026",
    readTime: "8 min read",
    category: "AI",
  },
  {
    slug: "web-development-trends-2026",
    title: "Web Development Trends 2026: What SMEs Need to Know",
    excerpt: "Stay ahead with the latest web development trends. Learn about AI integration, edge computing, and performance optimization that can transform your business.",
    date: "May 20, 2026",
    readTime: "7 min read",
    category: "Web Development",
  },
  {
    slug: "ai-automation-small-business-guide",
    title: "AI Automation for Small Business: A Practical Guide",
    excerpt: "Learn how small businesses can leverage AI automation to save time, reduce costs, and compete with larger players. A practical guide with real examples.",
    date: "May 15, 2026",
    readTime: "10 min read",
    category: "Automation",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)]">
              Expert perspectives on AI, web development, and business technology. Practical guides for startups and SMEs.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-[var(--color-bg)] rounded-2xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-all">
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] mb-4">
                    <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text)] mb-4">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[var(--color-primary)] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Stay Updated
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              Get our latest insights on AI, web development, and business automation delivered to your inbox.
            </p>
            <Link href="/contact">
              <Button size="lg" className="font-semibold">
                Subscribe to Updates
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
