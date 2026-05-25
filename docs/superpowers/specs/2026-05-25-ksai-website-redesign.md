# KSAI Website Redesign — Design Spec

## Overview

Complete redesign of the KSAI (Kalinga Sovereign AI) website for lead generation. Current site has performance issues (3D logo animation laggy on mobile). Goal: Fast, conversion-focused, professional website that builds trust.

**Company:** KSAI — Kalinga Sovereign AI
**Services:** Website building, Application building, AI Automations, Robotics Solutions
**Primary Goal:** Get clients to contact us

---

## Design Direction

**Theme:** Hybrid — Impactful hero + clean, fast inner pages
**Mode:** Dark + Light toggle (user preference)

### Brand Colors (from logo)

| Role | Color | Hex |
|------|-------|-----|
| Primary/Brand | Vibrant blue | `#2563EB` |
| Secondary | Light blue | `#60A5FA` |
| CTA/Action | Orange | `#F97316` |
| Dark BG | Deep navy | `#0F172A` |
| Light BG | Off-white | `#F8FAFC` |
| Text Dark (light mode) | Slate | `#1E293B` |
| Text Light (dark mode) | Gray | `#94A3B8` |

### Typography
- **Headings:** Inter (Bold, 700)
- **Body:** Inter (Regular, 400)
- **Fallback:** system-ui, sans-serif

### Logo Treatment
- **Static:** SVG shield with K+i monogram
- **Desktop:** Subtle blue glow animation (CSS only, no 3D library)
- **Mobile:** Static SVG (zero performance cost)

---

## Pages & Structure

### 1. Home (`/`)
**Sections (top to bottom):**
1. **Hero** — Bold headline, subheadline, primary CTA button, logo animation (desktop)
2. **Services Preview** — 4 service cards with icons, hover effects
3. **Trust Signals** — Client count, project count, or testimonial snippet
4. **CTA Banner** — Strong call-to-action before footer

### 2. Services (`/services`)
- Page header with title and brief intro
- 4 service cards: Website Building, App Building, AI Automations, Robotics Solutions
- Each card: Icon, title, brief description (2 lines), "Learn More" link
- Expandable on click for more detail

### 3. About (`/about`)
- Page header with title
- **Mission** — "We build AI-powered solutions..."
- **Story** — Company origin and journey
- **Values** — 4 core values with icons
- **Team** — Brief intro of 2-3 team members (placeholder if needed)

### 4. Contact (`/contact`)
- Contact form: Name, Email, Company, Message, Submit button
- Company info: Email, phone
- Office address
- Social links: LinkedIn, Twitter, GitHub (placeholder URLs)

---

## Components

### Navigation
- **Desktop:** Sticky top nav — Logo (left), Links (center), Theme toggle (right), CTA button (right)
- **Mobile:** Logo + hamburger icon → slide-out drawer
- **Links:** Home, Services, About, Contact
- **CTA:** "Get in Touch" — Orange button, high contrast

### Footer
- Logo + tagline
- Quick links
- Social icons
- Copyright

### Buttons
- **Primary:** Orange background, white text, hover darken
- **Secondary:** Blue outline, blue text, hover fill
- **Ghost:** Transparent, text color, hover background

### Cards
- Rounded corners (12px)
- Subtle shadow or border
- Hover: slight lift + glow effect

### Theme Toggle
- Sun icon (light mode active) / Moon icon (dark mode active)
- Smooth transition on toggle

---

## Technical Decisions

### Stack
- **Framework:** Next.js 15 (App Router) — existing
- **Styling:** Tailwind CSS — existing
- **Components:** shadcn/ui
- **Fonts:** Inter via next/font
- **Hosting:** Netlify (existing)

### Performance
- No 3D libraries — CSS animations only
- Static logo on mobile
- Optimized images (next/image)
- Minimal dependencies

### Dark/Light Mode
- CSS variables for theming
- Tailwind `dark:` variants
- System preference detection on first load
- User preference persisted in localStorage

### Animation Guidelines
- Hero entrance: fade-in + slide-up, staggered 100ms
- Cards: subtle scale (1.02) + shadow on hover
- Page transitions: minimal, fast
- Logo glow: CSS keyframe pulse on desktop only

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home
│   ├── globals.css          # Tailwind + CSS variables
│   ├── services/page.tsx   # Services
│   ├── about/page.tsx      # About
│   └── contact/page.tsx    # Contact
├── components/
│   ├── ui/                 # shadcn components
│   ├── layout/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ServicesPreview.tsx
│   │   └── CTABanner.tsx
│   └── shared/
│       ├── ThemeToggle.tsx
│       ├── Logo.tsx
│       └── ServiceCard.tsx
└── lib/
    └── utils.ts            # Existing
```

---

## Not in Scope (v1)

- Blog
- Portfolio/Case studies
- Pricing page
- Testimonials carousel
- Complex animations
- 3D elements

---

## Success Criteria

1. Lighthouse Performance score > 90 on mobile
2. Logo animation smooth on desktop (60fps)
3. Static logo on mobile (no lag)
4. Dark/Light toggle works instantly
5. All 4 pages accessible and functional
6. Contact form submission works
7. Netlify deployment successful
