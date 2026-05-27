"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Eye, Users, TrendingUp, ArrowRight, Calendar, ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    blogPosts: 0,
    loading: true,
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const res = await fetch("/api/admin/blog");
      const data = await res.json();
      if (data.posts) {
        const publishedCount = data.posts.filter((p: { status: string }) => p.status === "published").length;
        setStats({
          blogPosts: publishedCount,
          loading: false,
        });
      }
    } catch {
      setStats({ blogPosts: 0, loading: false });
    }
  };

  const quickActions = [
    { label: "Create Blog Post", href: "/admin/blog/new", color: "default" },
    { label: "Manage Blog", href: "/admin/blog", color: "outline" },
    { label: "Analytics", href: "/admin/analytics", color: "outline" },
    { label: "Settings", href: "/admin/settings", color: "outline" },
  ];

  const externalLinks = [
    { label: "Google Search Console", url: "https://search.google.com/search-console" },
    { label: "Google Analytics", url: "https://analytics.google.com" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Dashboard</h1>
          <p className="text-[var(--color-text-secondary)]">Welcome back! Manage your website content.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
          <Calendar className="w-4 h-4" />
          {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
          <div className="flex items-center justify-between mb-4">
            <FileText className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--color-text)]">
            {stats.loading ? "..." : stats.blogPosts}
          </div>
          <div className="text-sm text-[var(--color-text-muted)]">Published Blog Posts</div>
        </div>
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
          <div className="flex items-center justify-between mb-4">
            <Eye className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--color-text)]">—</div>
          <div className="text-sm text-[var(--color-text-muted)]">Page Views</div>
          <Link href="/admin/analytics" className="text-xs text-[var(--color-primary)] hover:underline">
            Connect Analytics →
          </Link>
        </div>
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--color-text)]">—</div>
          <div className="text-sm text-[var(--color-text-muted)]">Unique Visitors</div>
          <Link href="/admin/analytics" className="text-xs text-[var(--color-primary)] hover:underline">
            Connect Analytics →
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {quickActions.map((action, i) => (
            <Link key={i} href={action.href}>
              <Button variant={action.color as "default" | "outline"}>{action.label}</Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Analytics Setup Notice */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-[var(--color-text)]">Connect Google Analytics</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Add your Google Analytics Measurement ID to see real traffic data in the dashboard.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {externalLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SEO Overview */}
      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">SEO Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-500/10 rounded-lg">
            <div className="text-2xl font-bold text-green-500">✓</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Sitemap</div>
          </div>
          <div className="text-center p-4 bg-green-500/10 rounded-lg">
            <div className="text-2xl font-bold text-green-500">✓</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Robots.txt</div>
          </div>
          <div className="text-center p-4 bg-green-500/10 rounded-lg">
            <div className="text-2xl font-bold text-green-500">✓</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Meta Tags</div>
          </div>
          <div className="text-center p-4 bg-green-500/10 rounded-lg">
            <div className="text-2xl font-bold text-green-500">✓</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Open Graph</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
          <Link href="/admin/seo" className="text-sm text-[var(--color-primary)] hover:underline">
            Manage SEO Settings →
          </Link>
        </div>
      </div>
    </div>
  );
}
