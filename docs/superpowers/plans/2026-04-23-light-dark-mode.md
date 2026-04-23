# Light / Dark Mode Toggle — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a persistent light/dark mode toggle to the entire KSAI website. All sections (Hero, Services, Seva Sahayak, Work, Testimonials, CTA, Footer, About, Contact) switch themes. Preference persists in localStorage and respects system preference on first visit.

**Architecture:**
- Theme state lives in a React context (`ThemeProvider`), mounted at root of `layout.tsx`
- A `data-theme` attribute (`"dark"` / `"light"`) is set on `<html>` — this is what Tailwind v4's `darkMode: 'class'` reads
- All hardcoded hex colors are replaced with CSS custom properties (`--color-*`) in `globals.css`
- Light mode overrides are scoped to `[data-theme="light"]` on `:root`
- Dark mode is the default (current appearance)
- Toggle button lives in `Nav.tsx` — a sun/moon icon button

**Tech Stack:** React Context, localStorage, CSS custom properties, Tailwind v4 `darkMode: 'class'`

---

## File Inventory

| File | Action | Responsibility |
|---|---|---|
| `src/contexts/ThemeContext.tsx` | **Create** | Theme state, localStorage sync, system preference detection |
| `src/components/ThemeProvider.tsx` | **Create** | Client component wrapping children, sets `data-theme` on `<html>` |
| `src/app/globals.css` | **Modify** | Replace all hardcoded hex values with CSS custom properties; add light mode overrides |
| `tailwind.config.ts` | **Create** | Add `darkMode: 'class'` + map CSS vars to Tailwind colors |
| `src/app/layout.tsx` | **Modify** | Wrap children in `<ThemeProvider>` |
| `src/components/Nav.tsx` | **Modify** | Add theme toggle button with sun/moon icon |
| `src/components/Footer.tsx` | **Modify** | Replace hardcoded colors with CSS vars |
| `src/components/ServicesSection.tsx` | **Modify** | Replace hardcoded colors with CSS vars |
| `src/components/SevaSahayakSection.tsx` | **Modify** | Replace hardcoded colors with CSS vars |
| `src/components/WorkSection.tsx` | **Modify** | Replace hardcoded colors with CSS vars |
| `src/components/TestimonialsSection.tsx` | **Modify** | Replace hardcoded colors with CSS vars |
| `src/components/CTABanner.tsx` | **Modify** | Replace hardcoded colors with CSS vars |
| `src/components/ContactForm.tsx` | **Modify** | Replace hardcoded colors with CSS vars |
| `src/app/about/page.tsx` | **Modify** | Replace hardcoded colors with CSS vars |
| `src/app/contact/page.tsx` | **Modify** | Replace hardcoded colors with CSS vars |
| `src/components/ui/*.tsx` | **Modify** | Replace hardcoded colors in all shadcn UI components |

---

## Color Mapping

Every hardcoded hex gets a CSS variable. The `--color-*` vars default to dark values. Light mode (`[data-theme="light"]`) overrides them.

| CSS Variable | Dark (default) | Light override |
|---|---|---|
| `--color-bg` | `#0a0f1e` | `#ffffff` |
| `--color-surface` | `#111827` | `#f3f4f6` |
| `--color-surface-2` | `#060c1a` | `#e5e7eb` |
| `--color-surface-3` | `#0d1424` | `#ffffff` |
| `--color-border` | `#1f2937` | `#d1d5db` |
| `--color-accent` | `#3b82f6` | `#2563eb` |
| `--color-accent-hover` | `#2563eb` | `#1d4ed8` |
| `--color-text` | `#ffffff` | `#111827` |
| `--color-muted` | `#9ca3af` | `#6b7280` |
| `--color-muted-dark` | `#6b7280` | `#9ca3af` |
| `--color-red-accent` | `1.0, 0.15, 0.05` | `same` |
| `--color-scanline` | `rgba(0,212,255,0.015)` | `rgba(0,0,0,0.03)` |

---

## Tasks

### Task 1: ThemeContext and ThemeProvider

**Files:**
- Create: `src/contexts/ThemeContext.tsx`
- Create: `src/components/ThemeProvider.tsx`

- [ ] **Step 1: Create ThemeContext**

```tsx
// src/contexts/ThemeContext.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read persisted preference or fall back to system preference
    const stored = localStorage.getItem("ksai-theme") as Theme | null;
    if (stored === "light" || stored === "dark") {
      setThemeState(stored);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setThemeState("light");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Sync data-theme attribute to html element
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ksai-theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

- [ ] **Step 2: Create ThemeProvider wrapper component**

```tsx
// src/components/ThemeProvider.tsx
"use client";

import { ReactNode } from "react";
import { ThemeProvider as TP } from "@/contexts/ThemeContext";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <TP>{children}</TP>;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/contexts/ThemeContext.tsx src/components/ThemeProvider.tsx
git commit -m "feat: add ThemeContext and ThemeProvider for light/dark mode"
```

---

### Task 2: Update globals.css with CSS custom properties

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace entire globals.css**

Replace all existing content with the following. Key changes:
1. `:root` defines dark mode vars (current defaults)
2. `[data-theme="light"]` overrides with light values
3. All hex colors replaced with `var(--color-*)`

```css
@import "tailwindcss";

/* ===== DARK MODE (default) ===== */
:root,
[data-theme="dark"] {
  --color-bg: #0a0f1e;
  --color-surface: #111827;
  --color-surface-2: #060c1a;
  --color-surface-3: #0d1424;
  --color-border: #1f2937;
  --color-accent: #3b82f6;
  --color-accent-hover: #2563eb;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-muted-dark: #6b7280;
  --color-red: 1.0, 0.15, 0.05;
  color-scheme: dark;

  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

/* ===== LIGHT MODE ===== */
[data-theme="light"] {
  --color-bg: #ffffff;
  --color-surface: #f3f4f6;
  --color-surface-2: #e5e7eb;
  --color-surface-3: #ffffff;
  --color-border: #d1d5db;
  --color-accent: #2563eb;
  --color-accent-hover: #1d4ed8;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-muted-dark: #9ca3af;
  --color-red: 0.8, 0.1, 0.05;
  color-scheme: light;
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
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--color-bg);
}
::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent);
}

::selection {
  background: var(--color-accent);
  color: white;
}

html {
  scroll-behavior: smooth;
}

/* ===== HERO ANIMATIONS ===== */
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

@keyframes fadeInSubtitle {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scanlines {
  0% { background-position: 0 0; }
  100% { background-position: 0 100%; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.fade-in-subtitle {
  animation: fadeInSubtitle 0.8s ease-out forwards;
}

.explore-btn {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 60;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  font-family: var(--font-mono);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
  transition: color 0.3s ease;
}

[data-theme="light"] .explore-btn {
  color: rgba(0, 0, 0, 0.5);
}

.explore-btn:hover {
  color: rgba(255, 255, 255, 0.9);
}

[data-theme="light"] .explore-btn:hover {
  color: rgba(0, 0, 0, 0.8);
}

.explore-arrow {
  animation: bounce 2s ease-in-out infinite;
}

/* ===== GRADIENT TEXT ===== */
.gradient-text {
  background: linear-gradient(135deg, var(--color-accent) 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ===== GLOW EFFECT ===== */
.glow-accent {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3),
    0 0 40px rgba(59, 130, 246, 0.1);
}

/* ===== CANVAS ===== */
canvas {
  touch-action: none;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: replace hardcoded colors with CSS custom properties for theming"
```

---

### Task 3: Tailwind dark mode config

**Files:**
- Create: `tailwind.config.ts` (overwrite existing)

- [ ] **Step 1: Create tailwind.config.ts with darkMode and color mappings**

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        "surface-3": "var(--color-surface-3)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        "muted-dark": "var(--color-muted-dark)",
      },
    },
  },
  plugins: [],
};

export default config;
```

**Important:** Tailwind v4 by default uses CSS-based config (`@theme` in globals.css). Creating `tailwind.config.ts` might conflict. Instead, keep all color extensions in `globals.css` via `@theme` and use plain CSS variables directly in className. Skip the tailwind.config.ts — it's not needed for v4.

- [ ] **Step 2: Instead, add dark-mode-aware scrollbar to globals.css (already done above)**

No new file needed. The CSS vars in globals.css handle everything.

- [ ] **Step 3: Commit (no-op — colors handled in globals.css)**

---

### Task 4: Wire ThemeProvider into layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Import and wrap children in ThemeProvider**

```tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // ... (keep existing)
};

// Keep existing metadata, just wrap body:
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var stored = localStorage.getItem('ksai-theme');
                var theme = stored === 'light' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: wire ThemeProvider into root layout with FOUC prevention"
```

---

### Task 5: Add toggle button to Nav

**Files:**
- Modify: `src/components/Nav.tsx`

- [ ] **Step 1: Add Sun/Moon toggle to Nav**

Add to the imports:
```tsx
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";
```

Inside the `Nav` component, add:
```tsx
const { theme, toggleTheme } = useTheme();
```

Replace the mobile nav closing with mobile menu items, add the toggle as the last item in desktop nav:

```tsx
{/* Desktop — before the CTA button */}
<button
  onClick={toggleTheme}
  className="p-2 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
>
  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
</button>
```

And in the mobile Sheet, add the same toggle before the CTA button:
```tsx
<button
  onClick={toggleTheme}
  className="p-2 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors text-left"
  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
>
  {theme === "dark" ? <Sun className="w-5 h-5 inline mr-2" /> : <Moon className="w-5 h-5 inline mr-2" />}
  {theme === "dark" ? "Light Mode" : "Dark Mode"}
</button>
```

- [ ] **Step 2: Verify build**

```bash
npm run build 2>&1 | tail -15
```

Expected: clean build

- [ ] **Step 3: Commit**

```bash
git add src/components/Nav.tsx
git commit -m "feat: add sun/moon theme toggle to Nav"
```

---

### Task 6: Update all components to use CSS variables

This is the bulk of the work. For each component, replace every hardcoded hex color with the corresponding `var(--color-*)` CSS variable.

The mapping below is the complete reference:

| Old hex | Replace with |
|---|---|
| `#0a0f1e` | `var(--color-bg)` |
| `#060c1a` | `var(--color-surface-2)` |
| `#111827` | `var(--color-surface)` |
| `#0d1424` | `var(--color-surface-3)` |
| `#1f2937` | `var(--color-border)` |
| `#3b82f6` | `var(--color-accent)` |
| `#2563eb` | `var(--color-accent-hover)` |
| `#ffffff` | `var(--color-text)` |
| `#9ca3af` | `var(--color-muted)` |
| `#6b7280` | `var(--color-muted-dark)` |
| `#d1d5db` | `var(--color-text)` (for lighter text on dark) |
| `#374151` | `var(--color-border)` |

**Apply this mapping to all files:**

- [ ] **Step 1: `src/components/Footer.tsx`** — Replace all hardcoded hex colors with CSS vars

- [ ] **Step 2: `src/components/ServicesSection.tsx`** — Replace all hardcoded hex colors with CSS vars

- [ ] **Step 3: `src/components/SevaSahayakSection.tsx`** — Replace all hardcoded hex colors with CSS vars

- [ ] **Step 4: `src/components/WorkSection.tsx`** — Replace all hardcoded hex colors with CSS vars

- [ ] **Step 5: `src/components/TestimonialsSection.tsx`** — Replace all hardcoded hex colors with CSS vars

- [ ] **Step 6: `src/components/CTABanner.tsx`** — Replace all hardcoded hex colors with CSS vars

- [ ] **Step 7: `src/components/ContactForm.tsx`** — Replace all hardcoded hex colors with CSS vars

- [ ] **Step 8: `src/app/about/page.tsx`** — Replace all hardcoded hex colors with CSS vars

- [ ] **Step 9: `src/app/contact/page.tsx`** — Replace all hardcoded hex colors with CSS vars

- [ ] **Step 10: `src/components/ui/button.tsx`** — Replace hardcoded hex in button variants

- [ ] **Step 11: `src/components/ui/card.tsx`** — Replace hardcoded hex in card

- [ ] **Step 12: `src/components/ui/input.tsx`** — Replace hardcoded hex in input

- [ ] **Step 13: `src/components/ui/textarea.tsx`** — Replace hardcoded hex in textarea

- [ ] **Step 14: `src/components/ui/badge.tsx`** — Replace hardcoded hex in badge

- [ ] **Step 15: `src/components/ui/sheet.tsx`** — Replace hardcoded hex in sheet overlay

- [ ] **Step 16: Build and verify**

```bash
npm run build 2>&1 | tail -15
```

Expected: clean build with all pages

- [ ] **Step 17: Commit**

```bash
git add src/
git commit -m "feat: apply CSS variable theming to all components"
```

---

### Task 7: Verify light mode renders correctly

- [ ] **Step 1: Test in browser with Playwright**

```bash
node << 'EOF'
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text().substring(0, 80)); });
  page.on('pageerror', err => errors.push(err.message.substring(0, 80)));
  
  // Test homepage dark (default)
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  const darkTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  console.log('Default theme:', darkTheme);
  
  // Toggle to light
  const toggle = await page.$('[aria-label*="Switch to light mode"]') || await page.$('[aria-label*="light mode"]');
  if (toggle) {
    await toggle.click();
    await page.waitForTimeout(500);
    const lightTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    console.log('After toggle:', lightTheme);
  }
  
  console.log('Errors:', errors.filter(e => !e.includes('extension')).join('; ') || 'none');
  await browser.close();
})();
EOF
```

Expected output:
```
Default theme: dark
After toggle: light
Errors: none
```

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "feat: complete light/dark mode toggle with persistent preferences"
```
