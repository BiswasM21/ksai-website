"use client";

import { useState, useEffect } from "react";
import { Save, Globe, Bell, Shield, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "Kalinga Sovereign AI",
    tagline: "Web Dev, App Dev & AI Automation Company",
    email: "Kalingasovereignai@gmail.com",
    whatsapp: "919692000359",
    address: "Bhubaneswar, Odisha, India",
    linkedin: "https://linkedin.com/company/kalinga-sovereign-ai",
    twitter: "https://x.com/Kalinga_Sov_Ai",
    instagram: "https://www.instagram.com/kalingasovereignai/",
    github: "",
    primaryColor: "#0C6DA2",
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      if (data.settings) {
        setSettings({ ...settings, ...data.settings });
      }
    } catch {
      // Use defaults
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    setSaved(false);

    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        setError("Failed to save settings");
      }
    } catch {
      setError("Failed to save settings. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Settings</h1>
          <p className="text-[var(--color-text-secondary)]">Manage your website settings</p>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          <Save className="w-4 h-4 mr-2" />
          {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
        </Button>
      </div>

      {/* Success/Error Messages */}
      {saved && (
        <div className="flex items-center gap-2 p-4 bg-green-500/10 rounded-lg text-green-500">
          <CheckCircle2 className="w-5 h-5" />
          Settings saved successfully!
        </div>
      )}
      {error && (
        <div className="flex items-center gap-2 p-4 bg-red-500/10 rounded-lg text-red-500">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      {/* General Settings */}
      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-5 h-5 text-[var(--color-primary)]" />
          <h2 className="text-lg font-semibold text-[var(--color-text)]">General</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Website Name</label>
            <Input
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Tagline</label>
            <Input
              value={settings.tagline}
              onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Contact Email</label>
            <Input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">WhatsApp Number</label>
            <Input
              value={settings.whatsapp}
              onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Address</label>
            <Input
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-5 h-5 text-[var(--color-primary)]" />
          <h2 className="text-lg font-semibold text-[var(--color-text)]">Social Links</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">LinkedIn</label>
            <Input
              value={settings.linkedin}
              onChange={(e) => setSettings({ ...settings, linkedin: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Twitter/X</label>
            <Input
              value={settings.twitter}
              onChange={(e) => setSettings({ ...settings, twitter: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Instagram</label>
            <Input
              value={settings.instagram}
              onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">GitHub</label>
            <Input
              value={settings.github}
              onChange={(e) => setSettings({ ...settings, github: e.target.value })}
              placeholder="https://github.com/your-org"
            />
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-5 h-5 text-[var(--color-primary)]" />
          <h2 className="text-lg font-semibold text-[var(--color-text)]">Appearance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Primary Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={settings.primaryColor}
                onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                className="w-12 h-10 rounded cursor-pointer"
              />
              <Input
                value={settings.primaryColor}
                onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Environment Info */}
      <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-5 h-5 text-[var(--color-primary)]" />
          <h2 className="text-lg font-semibold text-[var(--color-text)]">Environment</h2>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between py-2 border-b border-[var(--color-border)]">
            <span className="text-[var(--color-text-muted)]">Admin Email</span>
            <code className="text-[var(--color-text)]">ADMIN_EMAIL (env var)</code>
          </div>
          <div className="flex justify-between py-2 border-b border-[var(--color-border)]">
            <span className="text-[var(--color-text-muted)]">Analytics</span>
            <code className="text-[var(--color-text)]">GA_MEASUREMENT_ID (env var)</code>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-[var(--color-text-muted)]">Data Storage</span>
            <code className="text-[var(--color-text)]">File-based (data/ directory)</code>
          </div>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mt-4">
          Update environment variables in your deployment platform (Vercel, Netlify, etc.) or .env file.
        </p>
      </div>
    </div>
  );
}
