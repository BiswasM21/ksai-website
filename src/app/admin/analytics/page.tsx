"use client";

import { useState, useEffect } from "react";
import { Eye, Users, Clock, TrendingUp, ExternalLink, CheckCircle2, XCircle, RefreshCw } from "lucide-react";

interface AnalyticsData {
  connected: boolean;
  totalViews: number;
  uniqueVisitors: number;
  avgSessionTime: string;
  bounceRate: string;
  topPages: { path: string; views: number }[];
  topKeywords: { keyword: string; clicks: number }[];
  setupRequired?: boolean;
}

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/analytics");
      const data = await res.json();
      setAnalytics(data);
    } catch {
      setAnalytics({ connected: false, totalViews: 0, uniqueVisitors: 0, avgSessionTime: "0:00", bounceRate: "0%", topPages: [], topKeywords: [] });
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <RefreshCw className="w-6 h-6 animate-spin text-[var(--color-primary)]" />
        <span className="ml-2 text-[var(--color-text-secondary)]">Loading analytics...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Analytics</h1>
          <p className="text-[var(--color-text-secondary)]">Website traffic and performance</p>
        </div>
        <div className="flex items-center gap-4">
          <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${analytics?.connected ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"}`}>
            {analytics?.connected ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
            {analytics?.connected ? "Connected" : "Not Connected"}
          </span>
          <button onClick={fetchAnalytics} className="p-2 hover:bg-[var(--color-surface)] rounded-lg">
            <RefreshCw className="w-5 h-5 text-[var(--color-text-secondary)]" />
          </button>
        </div>
      </div>

      {/* Not Connected - Setup Instructions */}
      {!analytics?.connected && (
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Connect Google Analytics 4</h2>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Follow these steps to see real traffic data from your website.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-medium text-[var(--color-text)]">Create Google Cloud Project</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Go to <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">console.cloud.google.com</a> and create a new project.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-medium text-[var(--color-text)]">Enable Analytics Data API</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    In Google Cloud Console, go to APIs &amp; Services and enable &quot;Google Analytics Data API&quot;.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-medium text-[var(--color-text)]">Create Service Account</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Go to IAM &amp; Admin &rarr; Service Accounts &rarr; Create. Download the JSON key file.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-medium text-[var(--color-text)]">Get GA4 Property ID</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    In GA4 Admin &rarr; Property Settings &rarr; Copy the Property ID (number only).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="font-medium text-[var(--color-text)]">Add Service Account to GA4</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    In GA4 Admin &rarr; Property Access Management &rarr; Add User &rarr; Enter service account email.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold flex-shrink-0">6</div>
                <div>
                  <h3 className="font-medium text-[var(--color-text)]">Add Environment Variables</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Add to your .env file or deployment platform (see below).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)]">
            <h4 className="font-medium text-[var(--color-text)] mb-2">Environment Variables Required:</h4>
            <code className="block text-green-400 text-sm bg-[#1a1a24] p-3 rounded-lg overflow-x-auto">
              GA_PROPERTY_ID=123456789{`\n`}
              GOOGLE_APPLICATION_CREDENTIALS={"{" + '"' + "type" + '"' + ": " + '"' + "service_account" + '"' + ", ...}"}
            </code>
            <p className="text-xs text-[var(--color-text-muted)] mt-2">
              See .env.example file for full setup instructions.
            </p>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
          <div className="flex items-center justify-between mb-4">
            <Eye className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--color-text)]">
            {analytics?.totalViews.toLocaleString() || "—"}
          </div>
          <div className="text-sm text-[var(--color-text-muted)]">Total Page Views</div>
        </div>
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--color-text)]">
            {analytics?.uniqueVisitors.toLocaleString() || "—"}
          </div>
          <div className="text-sm text-[var(--color-text-muted)]">Unique Visitors</div>
        </div>
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
          <div className="flex items-center justify-between mb-4">
            <Clock className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--color-text)]">
            {analytics?.avgSessionTime || "—"}
          </div>
          <div className="text-sm text-[var(--color-text-muted)]">Avg. Session</div>
        </div>
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--color-text)]">
            {analytics?.bounceRate || "—"}
          </div>
          <div className="text-sm text-[var(--color-text-muted)]">Bounce Rate</div>
        </div>
      </div>

      {/* Top Pages */}
      {analytics?.topPages && analytics.topPages.length > 0 && (
        <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Top Pages</h2>
          <div className="space-y-3">
            {analytics.topPages.map((page, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0">
                <span className="text-[var(--color-text)] font-mono text-sm">{page.path}</span>
                <span className="text-[var(--color-text-secondary)]">{page.views.toLocaleString()} views</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* External Links */}
      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-[var(--color-bg)] rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center text-white font-bold">A</div>
            <div>
              <div className="text-[var(--color-text)] font-medium">Google Analytics</div>
              <div className="text-xs text-[var(--color-text-muted)]">Full analytics dashboard</div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] ml-auto" />
          </a>
          <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-[var(--color-bg)] rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold">G</div>
            <div>
              <div className="text-[var(--color-text)] font-medium">Search Console</div>
              <div className="text-xs text-[var(--color-text-muted)]">Search performance</div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] ml-auto" />
          </a>
          <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-[var(--color-bg)] rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white font-bold">P</div>
            <div>
              <div className="text-[var(--color-text)] font-medium">PageSpeed</div>
              <div className="text-xs text-[var(--color-text-muted)]">Site speed testing</div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] ml-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}
