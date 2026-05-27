"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Eye, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NewBlogPost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("AI");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [featuredImage, setFeaturedImage] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (text: string) => {
    setTitle(text);
    if (!slug || slug === generateSlug(title)) {
      setSlug(generateSlug(text));
    }
  };

  const handleSave = async (publishStatus?: "draft" | "published") => {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const res = await fetch("/api/admin/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: slug || generateSlug(title),
          excerpt,
          content,
          category,
          status: publishStatus || status,
          featuredImage,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/admin/blog");
        }, 1500);
      } else {
        setError(data.error || "Failed to save post");
      }
    } catch {
      setError("Failed to save post. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/admin/blog" className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => handleSave("draft")} disabled={saving}>
            Save Draft
          </Button>
          <Button onClick={() => handleSave("published")} disabled={saving}>
            {saving ? "Saving..." : "Publish"}
          </Button>
        </div>
      </div>

      {/* Success Message */}
      {success && (
        <div className="flex items-center gap-2 p-4 bg-green-500/10 rounded-lg text-green-500">
          <CheckCircle2 className="w-5 h-5" />
          Post saved successfully! Redirecting...
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 rounded-lg text-red-500">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
            <input
              type="text"
              placeholder="Post title..."
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full text-2xl font-bold bg-transparent border-0 p-0 focus:outline-none text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"
            />
            <div className="mt-2">
              <input
                type="text"
                placeholder="url-slug"
                value={slug}
                onChange={(e) => setSlug(generateSlug(e.target.value))}
                className="w-full text-sm bg-transparent border-0 p-0 text-[var(--color-text-muted)]"
              />
              <div className="text-xs text-[var(--color-text-muted)]">
                kalingasovereignai.com/blog/{slug || "url-slug"}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
            <Textarea
              placeholder="Write your post content here... (Markdown supported)"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[400px] font-mono text-sm"
            />
            <p className="text-sm text-[var(--color-text-muted)] mt-2">
              Tip: Use Markdown for formatting. ## for headings, ** for bold, - for lists.
            </p>
          </div>

          {/* Excerpt */}
          <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Excerpt (Meta Description)
            </label>
            <Textarea
              placeholder="Brief summary for search engines and social sharing..."
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="min-h-[100px]"
            />
            <p className="text-xs text-[var(--color-text-muted)] mt-2">
              {excerpt.length}/160 characters (recommended for SEO)
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish Settings */}
          <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
            <h3 className="font-semibold text-[var(--color-text)] mb-4">Publish Settings</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[var(--color-text-secondary)] mb-2">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as "draft" | "published")}
                  className="w-full px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-[var(--color-text-secondary)] mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]"
                >
                  <option value="AI">AI & Machine Learning</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="business">Business & Strategy</option>
                </select>
              </div>

              <Button onClick={() => handleSave()} className="w-full" disabled={saving}>
                {saving ? "Saving..." : status === "draft" ? "Save Draft" : "Publish Now"}
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
            <h3 className="font-semibold text-[var(--color-text)] mb-4">Featured Image</h3>

            {featuredImage ? (
              <div className="relative aspect-video bg-[var(--color-bg)] rounded-lg overflow-hidden">
                <img src={featuredImage} alt="Featured" className="w-full h-full object-cover" />
                <Button
                  className="absolute top-2 right-2 bg-red-500 text-white hover:bg-red-600"
                  size="sm"
                  onClick={() => setFeaturedImage("")}
                >
                  Remove
                </Button>
              </div>
            ) : (
              <div
                className="aspect-video border-2 border-dashed border-[var(--color-border)] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-[var(--color-primary)] transition-colors"
                onClick={() => setFeaturedImage("https://picsum.photos/800/450")}
              >
                <ImageIcon className="w-8 h-8 text-[var(--color-text-muted)] mb-2" />
                <p className="text-sm text-[var(--color-text-muted)]">Click to add</p>
              </div>
            )}
          </div>

          {/* SEO Preview */}
          <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
            <h3 className="font-semibold text-[var(--color-text)] mb-4">SEO Preview</h3>
            <div className="space-y-2">
              <div className="text-blue-600 text-lg truncate">{title || "Post Title"}</div>
              <div className="text-green-700 text-sm">https://kalingasovereignai.com/blog/{slug || "post-slug"}</div>
              <div className="text-[var(--color-text-muted)] text-sm line-clamp-2">
                {excerpt || "Post excerpt will appear here in search results..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
