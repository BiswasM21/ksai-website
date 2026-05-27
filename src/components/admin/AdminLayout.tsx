"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Globe,
  Image,
  Calendar,
  Loader2,
} from "lucide-react";

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/bookings", icon: Calendar, label: "Bookings" },
  { href: "/admin/blog", icon: FileText, label: "Blog Posts" },
  { href: "/admin/analytics", icon: BarChart3, label: "Analytics" },
  { href: "/admin/media", icon: Image, label: "Media Library" },
  { href: "/admin/seo", icon: Globe, label: "SEO Settings" },
  { href: "/admin/settings", icon: Settings, label: "Settings" },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checking, setChecking] = useState(true);

  const checkAuth = useCallback(() => {
    // Check for cookies
    const hasSession = document.cookie.includes("admin_session");
    const hasVerified = document.cookie.includes("admin_verified");

    if (!hasSession && !hasVerified) {
      router.push("/admin/login");
      return false;
    }
    return true;
  }, [router]);

  useEffect(() => {
    if (pathname !== "/admin/login") {
      const isAuth = checkAuth();
      setChecking(!isAuth);
    } else {
      setChecking(false);
    }
  }, [pathname, checkAuth]);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch {
      // Continue even if fetch fails
    }
    // Clear cookies manually
    document.cookie = "admin_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "admin_verified=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/admin/login");
  };

  // Show loading while checking auth
  if (checking && pathname !== "/admin/login") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--color-primary)]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[var(--color-surface)] border-b border-[var(--color-border)] z-40 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 hover:bg-[var(--color-bg)] rounded-lg"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link href="/admin" className="flex items-center gap-2">
            <span className="font-bold text-[var(--color-text)]">KSAI</span>
            <span className="text-[var(--color-text-muted)] text-sm">Admin</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" target="_blank">
            <button className="px-4 py-2 text-sm border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg)] transition-colors">
              View Website
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="p-2 hover:bg-[var(--color-bg)] rounded-lg"
            title="Logout"
          >
            <LogOut className="w-5 h-5 text-[var(--color-text-secondary)]" />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 bottom-0 w-64 bg-[var(--color-surface)] border-r border-[var(--color-border)] z-30 transform transition-transform md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)] hover:text-[var(--color-text)]"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="pt-16 md:pl-64">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
