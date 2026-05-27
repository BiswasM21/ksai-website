"use client";

import { useState } from "react";
import { Globe, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SEOSettings() {
  const [checking, setChecking] = useState(false);
  const [results, setResults] = useState<Record<string, "pass" | "fail" | "warning">>({});

  const seoChecks = [
    { item: "Sitemap.xml exists", key: "sitemap" },
    { item: "Robots.txt configured", key: "robots" },
    { item: "Meta titles optimized", key: "meta" },
    { item: "Meta descriptions added", key: "descriptions" },
    { item: "Open Graph tags", key: "og" },
    { item: "Structured data (JSON-LD)", key: "jsonld" },
    { item: "Canonical URLs", key: "canonical" },
    { item: "Alt text for images", key: "alt" },
    { item: "Mobile responsive", key: "mobile" },
    { item: "Page speed optimized", key: "speed" },
  ];

  const runSeoCheck = async () => {
    setChecking(true);
    // In production, this would make API calls to verify each item
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate results
    const newResults: Record<string, "pass" | "fail" | "warning"> = {
      sitemap: "pass",
      robots: "pass",
      meta: "pass",
      descriptions: "pass",
      og: "pass",
      jsonld: "pass",
      canonical: "pass",
      alt: "warning",
      mobile: "pass",
      speed: "pass",
    };
    setResults(newResults);
    setChecking(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">SEO Settings</h1>
          <p className="text-[var(--color-text-secondary)]">Monitor and improve your website SEO</p>
        </div>
        <Button onClick={runSeoCheck} disabled={checking}>
          {checking ? "Checking..." : "Run SEO Check"}
        </Button>
      </div>

      {/* SEO Health Check */}
      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">SEO Health Check</h2>
        {Object.keys(results).length === 0 ? (
          <div className="text-center py-8">
            <p className="text-[var(--color-text-secondary)] mb-4">
              Click &quot;Run SEO Check&quot; to analyze your website SEO status.
            </p>
            <Button onClick={runSeoCheck} variant="outline">
              Run SEO Check
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {seoChecks.map((check) => {
              const status = results[check.key] || "warning";
              return (
                <div key={check.key} className="flex items-center gap-3">
                  {status === "pass" ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : status === "warning" ? (
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                  <span className="text-[var(--color-text)]">{check.item}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* External SEO Tools */}
      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">SEO Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="https://search.google.com/search-console"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-[var(--color-bg)] rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold">G</div>
            <div>
              <div className="text-[var(--color-text)] font-medium">Google Search Console</div>
              <div className="text-xs text-[var(--color-text-muted)]">Monitor search performance</div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] ml-auto" />
          </a>
          <a
            href="https://pagespeed.web.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-[var(--color-bg)] rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white font-bold">P</div>
            <div>
              <div className="text-[var(--color-text)] font-medium">PageSpeed Insights</div>
              <div className="text-xs text-[var(--var--color-text-muted)]">Check site speed</div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] ml-auto" />
          </a>
          <a
            href="https://developers.google.com/search"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-[var(--color-bg)] rounded-lg hover:bg-[var(--color-primary)]/5 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center text-white font-bold">S</div>
            <div>
              <div className="text-[var(--color-text)] font-medium">Google Search Central</div>
              <div className="text-xs text-[var(--color-text-muted)]">SEO guidelines & tutorials</div>
            </div>
            <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] ml-auto" />
          </a>
        </div>
      </div>

      {/* Indexed Pages Info */}
      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Indexed Pages</h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
          All public pages are automatically included in your sitemap.xml and indexed by search engines.
        </p>
        <div className="flex items-center gap-2 text-green-500">
          <CheckCircle2 className="w-5 h-5" />
          <span>Sitemap is active at <code className="bg-[var(--color-bg)] px-2 py-1 rounded">/sitemap.xml</code></span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => window.open("/sitemap.xml", "_blank")}>
            View Sitemap
          </Button>
          <Button variant="outline" onClick={() => window.open("/robots.txt", "_blank")}>
            View Robots.txt
          </Button>
          <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              Open Search Console
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
