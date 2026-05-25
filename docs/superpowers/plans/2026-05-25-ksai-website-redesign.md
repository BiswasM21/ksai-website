# KSAI Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete redesign of KSAI website with new brand colors, logo animation, and 4 pages (Home, Services, About, Contact). Mobile-optimized, conversion-focused, with dark/light mode toggle.

**Architecture:**
- Next.js 15 App Router (existing)
- Tailwind CSS 4 with CSS variables for theming
- shadcn/ui components (existing)
- CSS-only animations (no 3D libraries)
- Remove heavy dependencies (Three.js, Spline, Framer Motion)

**Tech Stack:** Next.js 15, Tailwind CSS 4, shadcn/ui, Lucide icons, CSS animations

---

## File Structure Overview

```
src/
├── app/
│   ├── globals.css          # REDESIGN: New color palette, animations
│   ├── layout.tsx            # MODIFY: Update metadata, remove heavy scripts
│   ├── page.tsx             # REDESIGN: New homepage sections
│   ├── services/page.tsx     # CREATE: Services page
│   ├── about/page.tsx        # CREATE: About page
│   └── contact/page.tsx      # REDESIGN: Contact page
├── components/
│   ├── layout/
│   │   ├── Nav.tsx          # MODIFY: New styling, remove 3D references
│   │   └── Footer.tsx       # MODIFY: New styling
│   ├── home/
│   │   ├── Hero.tsx         # CREATE: Hero section with logo animation
│   │   ├── ServicesPreview.tsx  # CREATE: Services overview cards
│   │   └── CTABanner.tsx    # CREATE: CTA section
│   ├── shared/
│   │   ├── Logo.tsx         # CREATE: SVG logo with CSS animation
│   │   ├── ServiceCard.tsx  # CREATE: Reusable service card
│   │   └── ThemeToggle.tsx  # MODIFY: Refactor theme toggle
│   └── ui/                  # Keep existing components
└── contexts/
    └── ThemeContext.tsx      # MODIFY: Clean up, use next-themes pattern

public/
├── images/
│   ├── ksai-logo.svg        # CREATE: SVG logo for web use
│   ├── kalinga-logo-optimized.png  # REMOVE (replaced by SVG)
│   └── ... other images     # KEEP
```

---

## Dependencies to Remove

Package.json changes (run `npm uninstall`):
- `@react-three/drei`
- `@react-three/fiber`
- `@splinetool/react-spline`
- `@splinetool/runtime`
- `three`
- `framer-motion`

---

## Task 1: Clean Up Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Remove heavy 3D/animation dependencies**

Run: `npm uninstall @react-three/drei @react-three/fiber @splinetool/react-spline @splinetool/runtime three framer-motion`

Expected: Dependencies removed, package.json updated

- [ ] **Step 2: Verify package.json**

Read `package.json` and confirm only essential dependencies remain:
```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^1.9.0",
    "next": "16.2.4",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "tailwind-merge": "^3.5.0"
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: remove 3D libraries and heavy dependencies for performance"
```

---

## Task 2: Create SVG Logo Component

**Files:**
- Create: `src/components/shared/Logo.tsx`
- Create: `public/images/ksai-logo.svg`

- [ ] **Step 1: Create the SVG logo file**

Create `public/images/ksai-logo.svg` with the shield/K logo as inline SVG:

```svg
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Shield shape -->
  <path d="M24 4L42 12V24C42 34 34 42 24 46C14 42 6 34 6 24V12L24 4Z" fill="url(#shieldGradient)" />
  <!-- Inner shield -->
  <path d="M24 8L38 14V24C38 32 32 38 24 42C16 38 10 32 10 24V14L24 8Z" fill="#1E40AF" />
  <!-- K+i monogram -->
  <text x="16" y="32" font-family="Inter, sans-serif" font-weight="700" font-size="18" fill="white">K</text>
  <text x="28" y="32" font-family="Inter, sans-serif" font-weight="400" font-size="18" fill="#93C5FD">i</text>
  <defs>
    <linearGradient id="shieldGradient" x1="24" y1="4" x2="24" y2="46" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2563EB" />
      <stop offset="1" stop-color="#1E40AF" />
    </linearGradient>
  </defs>
</svg>
```

- [ ] **Step 2: Create Logo.tsx component with animation**

Create `src/components/shared/Logo.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";

type LogoProps = {
  size?: number;
  animated?: boolean;
  className?: string;
};

export default function Logo({ size = 48, animated = false, className = "" }: LogoProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const shouldAnimate = animated && isDesktop;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${shouldAnimate ? "logo-animated" : ""} ${className}`}
    >
      <defs>
        <linearGradient id={`shieldGradient-${size}`} x1="24" y1="4" x2="24" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#1E40AF" />
        </linearGradient>
        <filter id={`glow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Shield */}
      <path
        d="M24 4L42 12V24C42 34 34 42 24 46C14 42 6 34 6 24V12L24 4Z"
        fill={`url(#shieldGradient-${size})`}
        filter={shouldAnimate ? `url(#glow-${size})` : undefined}
        className={shouldAnimate ? "logo-shield" : ""}
      />
      {/* Inner shield */}
      <path d="M24 8L38 14V24C38 32 32 38 24 42C16 38 10 32 10 24V14L24 8Z" fill="#1E40AF" />
      {/* K */}
      <text x="16" y="32" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18" fill="white">K</text>
      {/* i */}
      <text x="28" y="32" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="18" fill="#93C5FD">i</text>
    </svg>
  );
}
```

- [ ] **Step 3: Add logo animation CSS to globals.css**

Add to `globals.css`:

```css
/* ===== LOGO ANIMATION ===== */
.logo-animated .logo-shield {
  animation: logoGlow 3s ease-in-out infinite;
}

@keyframes logoGlow {
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(37, 99, 235, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 16px rgba(37, 99, 235, 0.6));
  }
}

@media (max-width: 768px) {
  .logo-animated {
    animation: none;
  }
  .logo-animated .logo-shield {
    animation: none;
    filter: none;
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add public/images/ksai-logo.svg src/components/shared/Logo.tsx src/app/globals.css
git commit -m "feat: add SVG logo component with CSS animation"
```

---

## Task 3: Redesign Global CSS with New Color Palette

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace globals.css with new color palette**

Replace entire content of `src/app/globals.css` with:

```css
@import "tailwindcss";

/* ===== DARK THEME (default) ===== */
:root,
[data-theme="dark"] {
  /* Backgrounds */
  --color-bg: #0F172A;
  --color-surface: #1E293B;
  --color-surface-2: #334155;
  --color-surface-3: #475569;

  /* Borders */
  --color-border: #334155;
  --color-border-strong: #475569;

  /* Primary (Blue brand) */
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-primary-subtle: rgba(37, 99, 235, 0.1);

  /* Accent (Orange for CTAs) */
  --color-accent: #F97316;
  --color-accent-hover: #EA580C;
  --color-accent-subtle: rgba(249, 115, 22, 0.1);

  /* Text */
  --color-text: #F8FAFC;
  --color-text-secondary: #94A3B8;
  --color-text-muted: #64748B;

  /* Success/Error */
  --color-success: #22C55E;
  --color-error: #EF4444;

  color-scheme: dark;
  --font-sans: "Inter", system-ui, sans-serif;
}

/* ===== LIGHT THEME ===== */
[data-theme="light"] {
  /* Backgrounds */
  --color-bg: #F8FAFC;
  --color-surface: #FFFFFF;
  --color-surface-2: #F1F5F9;
  --color-surface-3: #E2E8F0;

  /* Borders */
  --color-border: #E2E8F0;
  --color-border-strong: #CBD5E1;

  /* Primary (Blue brand) */
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-primary-subtle: rgba(37, 99, 235, 0.05);

  /* Accent (Orange for CTAs) */
  --color-accent: #F97316;
  --color-accent-hover: #EA580C;
  --color-accent-subtle: rgba(249, 115, 22, 0.05);

  /* Text */
  --color-text: #0F172A;
  --color-text-secondary: #475569;
  --color-text-muted: #64748B;

  /* Success/Error */
  --color-success: #16A34A;
  --color-error: #DC2626;

  color-scheme: light;
  --font-sans: "Inter", system-ui, sans-serif;
}

/* ===== BASE STYLES ===== */
* {
  box-sizing: border-box;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  transition: background-color 0.3s ease, color 0.3s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
}

/* ===== REDUCED MOTION ===== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ===== CUSTOM SCROLLBAR ===== */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-bg);
}
::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}

::selection {
  background: var(--color-primary);
  color: white;
}

html {
  scroll-behavior: smooth;
}

/* ===== TYPOGRAPHY UTILITIES ===== */
.gradient-text {
  background: linear-gradient(135deg, var(--color-primary) 0%, #60A5FA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ===== ANIMATIONS ===== */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out forwards;
}

/* Animation delays for staggered effects */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }

/* ===== CARD STYLES ===== */
.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary);
}

/* ===== BUTTON STYLES ===== */
.btn-primary {
  background-color: var(--color-accent);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--color-accent-hover);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: white;
}

/* ===== SECTION STYLES ===== */
.section {
  padding: 5rem 1.5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ===== GRID BACKGROUND ===== */
.grid-bg {
  background-image:
    linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px);
  background-size: 48px 48px;
}

/* ===== LOGO ANIMATION ===== */
.logo-animated .logo-shield {
  animation: logoGlow 3s ease-in-out infinite;
}

@keyframes logoGlow {
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(37, 99, 235, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 16px rgba(37, 99, 235, 0.6));
  }
}

@media (max-width: 768px) {
  .logo-animated .logo-shield {
    animation: none;
    filter: none;
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .section {
    padding: 3rem 1rem;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: redesign globals.css with new brand color palette"
```

---

## Task 4: Create Layout Components (Nav + Footer)

**Files:**
- Modify: `src/components/Nav.tsx`
- Modify: `src/components/Footer.tsx`
- Create: `src/components/layout/Nav.tsx` (will replace)
- Create: `src/components/layout/Footer.tsx` (will replace)

- [ ] **Step 1: Create new Nav component**

Create `src/components/layout/Nav.tsx`:

```tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/shared/Logo";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo size={40} animated className="transition-transform group-hover:scale-105" />
          <span className="font-bold text-lg text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors hidden sm:block">
            KSAI
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)] rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact">
            <Button className="btn-primary">Get in Touch</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-[var(--color-text)]">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[var(--color-surface)] border-[var(--color-border)] w-72"
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[var(--color-border)]">
                <ThemeToggle />
              </div>
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button className="btn-primary w-full">Get in Touch</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Create new Footer component**

Create `src/components/layout/Footer.tsx`:

```tsx
import Link from "next/link";
import Logo from "@/components/shared/Logo";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#website", label: "Website Building" },
    { href: "/services#app", label: "App Building" },
    { href: "/services#ai", label: "AI Automations" },
    { href: "/services#robotics", label: "Robotics Solutions" },
  ],
};

const socialLinks = [
  { href: "https://linkedin.com/company/kalinga-sovereign-ai", label: "LinkedIn" },
  { href: "https://x.com/Kalinga_Sov_Ai", label: "X (Twitter)" },
  { href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Logo size={36} />
              <span className="font-bold text-lg text-[var(--color-text)]">KSAI</span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)]">
              Kalinga Sovereign AI — Building intelligent solutions for the modern world.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-text)] mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-text)] mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-text)] mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-muted)] text-center">
            &copy; {currentYear} Kalinga Sovereign AI Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Delete old Nav.tsx and Footer.tsx, update imports**

Run:
```bash
rm src/components/Nav.tsx src/components/Footer.tsx
```

- [ ] **Step 4: Update layout.tsx imports**

Modify `src/app/layout.tsx` to import from new locations:
```tsx
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
```

Also remove these lines (they're not needed anymore):
- Remove `<link rel="preconnect" href="https://prod.spline.design" />`
- Remove `<link rel="dns-prefetch" href="https://prod.spline.design" />`

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: create new Nav and Footer components"
```

---

## Task 5: Create ThemeToggle Component

**Files:**
- Create: `src/components/shared/ThemeToggle.tsx`

- [ ] **Step 1: Create ThemeToggle component**

Create `src/components/shared/ThemeToggle.tsx`:

```tsx
"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </Button>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/shared/ThemeToggle.tsx
git commit -m "feat: create ThemeToggle component"
```

---

## Task 6: Create Home Page Components

**Files:**
- Create: `src/components/home/Hero.tsx`
- Create: `src/components/home/ServicesPreview.tsx`
- Create: `src/components/home/CTABanner.tsx`
- Create: `src/components/shared/ServiceCard.tsx`

- [ ] **Step 1: Create ServiceCard component**

Create `src/components/shared/ServiceCard.tsx`:

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block">
      <div className="card p-6 h-full">
        <div className="mb-4 p-3 bg-[var(--color-primary-subtle)] rounded-xl w-fit">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">{title}</h3>
        <p className="text-[var(--color-text-secondary)] mb-4">{description}</p>
        <div className="flex items-center text-[var(--color-primary)] font-medium text-sm group-hover:gap-2 transition-all">
          Learn More
          <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Create Hero component**

Create `src/components/home/Hero.tsx`:

```tsx
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10 pt-16">
        {/* Animated Logo */}
        <div className="mb-8 animate-fade-in">
          <Logo size={80} animated />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text)] mb-6 animate-fade-in-up">
          <span className="gradient-text">Intelligent Solutions</span>
          <br />
          for the Modern World
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
          We build websites, applications, AI automations, and robotics solutions
          that transform how businesses operate and grow.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <Link href="/contact">
            <Button className="btn-primary text-lg px-8 py-4">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/services">
            <Button className="btn-secondary text-lg px-8 py-4">
              Our Services
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[var(--color-border)] rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[var(--color-primary)] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create ServicesPreview component**

Create `src/components/home/ServicesPreview.tsx`:

```tsx
import { Globe, Smartphone, Brain, Cpu } from "lucide-react";
import ServiceCard from "@/components/shared/ServiceCard";

const services = [
  {
    title: "Website Building",
    description: "Modern, responsive websites built with the latest technologies for maximum performance.",
    icon: <Globe className="w-6 h-6 text-[var(--color-primary)]" />,
    href: "/services#website",
  },
  {
    title: "App Building",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: <Smartphone className="w-6 h-6 text-[var(--color-primary)]" />,
    href: "/services#app",
  },
  {
    title: "AI Automations",
    description: "Intelligent workflows and automations powered by cutting-edge AI technology.",
    icon: <Brain className="w-6 h-6 text-[var(--color-primary)]" />,
    href: "/services#ai",
  },
  {
    title: "Robotics Solutions",
    description: "Innovative robotics systems designed to streamline operations and boost efficiency.",
    icon: <Cpu className="w-6 h-6 text-[var(--color-primary)]" />,
    href: "/services#robotics",
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="section bg-[var(--color-bg)]">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
            Our Services
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs, from web presence to intelligent automation.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create CTABanner component**

Create `src/components/home/CTABanner.tsx`:

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[#1E40AF] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss how our solutions can help you achieve your goals.
            Get in touch today for a free consultation.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[var(--color-primary)] hover:bg-white/90 text-lg px-8 py-4 font-semibold">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/home/Hero.tsx src/components/home/ServicesPreview.tsx src/components/home/CTABanner.tsx src/components/shared/ServiceCard.tsx
git commit -m "feat: create home page section components"
```

---

## Task 7: Rebuild Home Page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace page.tsx with new home page**

Replace `src/app/page.tsx` with:

```tsx
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <CTABanner />
    </>
  );
}
```

- [ ] **Step 2: Clean up unused components**

Remove old components that are no longer needed:
```bash
rm src/components/hero-futuristic.tsx src/components/HeroSection.tsx src/components/ServicesSection.tsx src/components/WorkSection.tsx src/components/SevaSahayakSection.tsx src/components/TestimonialsSection.tsx src/components/CTABanner.tsx
```

- [ ] **Step 3: Update layout.tsx metadata**

Update the title and description in `layout.tsx` if needed to match new branding.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git rm src/components/hero-futuristic.tsx src/components/HeroSection.tsx src/components/ServicesSection.tsx src/components/WorkSection.tsx src/components/SevaSahayakSection.tsx src/components/TestimonialsSection.tsx
git commit -m "feat: rebuild home page with new sections"
```

---

## Task 8: Create Services Page

**Files:**
- Create: `src/app/services/page.tsx`

- [ ] **Step 1: Create services page**

Create `src/app/services/page.tsx`:

```tsx
import { Globe, Smartphone, Brain, Cpu } from "lucide-react";
import type { Metadata } from "next";
import ServiceCard from "@/components/shared/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive AI, web, and robotics solutions.",
};

const services = [
  {
    id: "website",
    title: "Website Building",
    description: "We create modern, responsive websites that load fast, look great on all devices, and convert visitors into customers. Using the latest frameworks and best practices, we build websites that grow with your business.",
    icon: <Globe className="w-8 h-8 text-[var(--color-primary)]" />,
  },
  {
    id: "app",
    title: "App Building",
    description: "From concept to app store, we build native and cross-platform mobile applications that users love. Our apps are performant, intuitive, and designed to solve real problems for your customers.",
    icon: <Smartphone className="w-8 h-8 text-[var(--color-primary)]" />,
  },
  {
    id: "ai",
    title: "AI Automations",
    description: "Harness the power of artificial intelligence to automate repetitive tasks, gain insights from data, and create intelligent workflows. We integrate AI into your existing systems seamlessly.",
    icon: <Brain className="w-8 h-8 text-[var(--color-primary)]" />,
  },
  {
    id: "robotics",
    title: "Robotics Solutions",
    description: "We design and develop custom robotics systems for industrial, commercial, and research applications. From hardware design to control software, we bring your robotics vision to life.",
    icon: <Cpu className="w-8 h-8 text-[var(--color-primary)]" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Our Services
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital age.
            From websites to AI-powered automation, we&apos;ve got you covered.
          </p>
        </div>

        {/* Services list */}
        <div className="space-y-6">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <div className="card p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="p-4 bg-[var(--color-primary-subtle)] rounded-xl">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "feat: create services page"
```

---

## Task 9: Create About Page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create about page**

Create `src/app/about/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Target, Lightbulb, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Kalinga Sovereign AI and our mission to build intelligent solutions.",
};

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precision",
    description: "We deliver solutions with meticulous attention to detail, ensuring every project exceeds expectations.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description: "We stay at the forefront of technology to bring you cutting-edge solutions that give you a competitive edge.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partnership",
    description: "We view every project as a collaboration, working closely with you to understand and achieve your goals.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Reliability",
    description: "You can count on us for consistent quality, transparent communication, and deliverables that stand the test of time.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            About KSAI
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Kalinga Sovereign AI — Building the future of intelligent solutions.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <div className="card p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
              Our Mission
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-4">
              At Kalinga Sovereign AI, our mission is to democratize access to powerful technology.
              We believe that every business, regardless of size, deserves access to world-class
              websites, applications, AI automation, and robotics solutions.
            </p>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              Founded in Bhubaneswar, Odisha, we&apos;re building a team that combines deep technical
              expertise with a genuine passion for solving real-world problems. We&apos;re not just
              developers — we&apos;re partners in your digital transformation journey.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="mb-16">
          <div className="card p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
              Our Story
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-4">
              Kalinga Sovereign AI was born from a simple observation: the best technology
              shouldn&apos;t be reserved for the biggest companies. Too many promising businesses
              in India and the Global South were being left behind in the AI revolution.
            </p>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              We set out to change that. By combining our expertise in web development,
              mobile applications, AI, and robotics, we created a one-stop destination for
              businesses looking to embrace modern technology. Every project we take on is
              an opportunity to prove that quality and affordability can go hand in hand.
            </p>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card p-6 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-[var(--color-primary-subtle)] rounded-xl mb-4 text-[var(--color-primary)]">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: create about page"
```

---

## Task 10: Create Contact Page

**Files:**
- Modify: `src/components/ContactForm.tsx`
- Modify: `src/app/contact/page.tsx`

- [ ] **Step 1: Update ContactForm component**

Read current `src/components/ContactForm.tsx` and update to use new styling:

```tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send } from "lucide-react";

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/kalinga-sovereign-ai", label: "LinkedIn" },
  { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/Kalinga_Sov_Ai", label: "X (Twitter)" },
  { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">
          Message Sent!
        </h3>
        <p className="text-[var(--color-text-secondary)]">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-2">
          Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-2">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-[var(--color-text)] mb-2">
          Company
        </label>
        <Input
          id="company"
          name="company"
          type="text"
          placeholder="Your company (optional)"
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-2">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project..."
          rows={5}
          className="w-full"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

export { socialLinks };
```

- [ ] **Step 2: Create updated contact page**

Create `src/app/contact/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm, { socialLinks } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kalinga Sovereign AI. We'd love to hear from you.",
};

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "Kalingasovereignai@gmail.com",
    href: "mailto:Kalingasovereignai@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Address",
    value: "Bhubaneswar, Odisha, India",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {/* Contact details */}
            <div className="card p-6 space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <div className="mt-1 text-[var(--color-primary)]">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-muted)]">
                      {info.label}
                    </p>
                    <p className="text-[var(--color-text)]">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="card p-6">
              <p className="text-sm font-medium text-[var(--color-text)] mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[var(--color-surface-2)] rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-subtle)] transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ContactForm.tsx src/app/contact/page.tsx
git commit -m "feat: redesign contact page with new styling"
```

---

## Task 11: Remove Legacy Pages

**Files:**
- Remove: `src/app/privacy/page.tsx`
- Remove: `src/app/terms/page.tsx`

- [ ] **Step 1: Remove unused pages**

```bash
rm src/app/privacy/page.tsx src/app/terms/page.tsx
```

- [ ] **Step 2: Commit**

```bash
git rm src/app/privacy/page.tsx src/app/terms/page.tsx
git commit -m "chore: remove legacy privacy/terms pages"
```

---

## Task 12: Update Theme Context

**Files:**
- Modify: `src/contexts/ThemeContext.tsx`

- [ ] **Step 1: Clean up ThemeContext**

Replace `src/contexts/ThemeContext.tsx` with:

```tsx
"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  initialTheme = "dark",
}: {
  children: ReactNode;
  initialTheme?: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute("data-theme", theme);
    document.cookie = `ksai-theme=${theme};path=/;max-age=31536000;SameSite=Lax`;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("ksai-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
```

- [ ] **Step 2: Simplify layout.tsx theme initialization**

Update `src/app/layout.tsx` to simplify the theme initialization:

Remove the inline script in the `<head>` that sets theme via localStorage (since ThemeProvider handles it). Keep only the cookie reading:

```tsx
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const storedTheme = cookieStore.get("ksai-theme")?.value;
  const initialTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";

  return (
    <html lang="en" data-theme={initialTheme} suppressHydrationWarning>
      <head>
        {/* Keep existing metadata, JSON-LD, favicons */}
        {/* Remove spline preconnect links */}
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider initialTheme={initialTheme}>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Add suppressHydrationWarning to html tag**

The `data-theme` attribute can cause hydration mismatch, so add `suppressHydrationWarning` to the `<html>` tag.

- [ ] **Step 4: Commit**

```bash
git add src/contexts/ThemeContext.tsx src/app/layout.tsx
git commit -m "refactor: simplify theme context and layout"
```

---

## Task 13: Add Favicon

**Files:**
- Create: `public/images/ksai-favicon.svg`
- Modify: `src/app/layout.tsx` (update favicon references)

- [ ] **Step 1: Create SVG favicon**

Create `public/images/ksai-favicon.svg`:

```svg
<svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 4L42 12V24C42 34 34 42 24 46C14 42 6 34 6 24V12L24 4Z" fill="url(#g)"/>
  <path d="M24 8L38 14V24C38 32 32 38 24 42C16 38 10 32 10 24V14L24 8Z" fill="#1E40AF"/>
  <text x="16" y="32" font-family="Inter,sans-serif" font-weight="700" font-size="18" fill="white">K</text>
  <text x="28" y="32" font-family="Inter,sans-serif" font-weight="400" font-size="18" fill="#93C5FD">i</text>
  <defs>
    <linearGradient id="g" x1="24" y1="4" x2="24" y2="46" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2563EB"/>
      <stop offset="1" stop-color="#1E40AF"/>
    </linearGradient>
  </defs>
</svg>
```

- [ ] **Step 2: Update layout.tsx favicon references**

Update the icons section in layout.tsx:

```tsx
icons: {
  icon: "/images/ksai-favicon.svg",
  apple: "/images/ksai-favicon.svg",
},
```

- [ ] **Step 3: Commit**

```bash
git add public/images/ksai-favicon.svg src/app/layout.tsx
git commit -m "feat: add SVG favicon matching brand"
```

---

## Task 14: Test Locally

- [ ] **Step 1: Install dependencies**

```bash
npm install
```

- [ ] **Step 2: Start dev server**

```bash
npm run dev
```

- [ ] **Step 3: Test all pages**

Open http://localhost:3000 and verify:
- [ ] Home page loads with hero, services preview, CTA
- [ ] Dark/light mode toggle works
- [ ] Logo animation on desktop, static on mobile
- [ ] Navigation works (Home, Services, About, Contact)
- [ ] Services page shows all 4 services
- [ ] About page shows mission, story, values
- [ ] Contact page shows form and info
- [ ] Mobile responsive
- [ ] No console errors

- [ ] **Step 4: Test contact form**

Fill out and submit the contact form to verify it works.

---

## Task 15: Commit All Changes and Push

- [ ] **Step 1: Stage all changes**

```bash
git add -A
```

- [ ] **Step 2: Check git status**

```bash
git status
```

- [ ] **Step 3: Commit**

```bash
git commit -m "feat: complete website redesign - new brand, 4 pages, dark/light mode"
```

---

## Success Criteria Checklist

After all tasks complete, verify:

- [ ] Lighthouse Performance > 90 on mobile
- [ ] Logo animation smooth on desktop (60fps)
- [ ] Static logo on mobile (no lag)
- [ ] Dark/Light toggle works instantly
- [ ] All 4 pages accessible and functional
- [ ] Contact form submission works
- [ ] No console errors
- [ ] Netlify deployment successful
