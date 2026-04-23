# KSAI Website Design Spec

## Project: Kalinga Sovereign AI — ksal-website

**Date:** 2026-04-23
**Status:** Approved

---

## Overview

Corporate website for Kalinga Sovereign AI Pvt. Ltd. (KSAI) — a client-facing site for AI consulting and custom development services targeting SMEs, enterprises, and institutions in India and the Global South.

**Goal:** Convert visitors into consulting enquiries and project leads.
**Tone:** Authoritative, modern, practical — engineers who deliver.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | shadcn/ui + Tailwind CSS |
| Type safety | TypeScript |
| 3D / Motion | React Three Fiber (WebGPU) + Three.js TSL |
| Animations | Framer Motion |
| Forms | React Hook Form + Next.js Server Actions |
| Icons | Lucide React |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Hosting | Vercel |

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Background | `#0a0f1e` | Page background |
| Surface | `#111827` | Cards, nav |
| Accent | `#3b82f6` | CTAs, links, highlights |
| Border | `#1f2937` | Card borders |
| Text primary | `#ffffff` | Headlines, body |
| Text muted | `#9ca3af` | Subtitles, labels |

---

## Pages

### `/` — Homepage (long-scroll)

| Section | Notes |
|---|---|
| **Hero** | Full-screen 3D. Headline: "Sovereign AI for the Global South." Subtitle: "We call." CTA: "Talk to Us." WebGPU bloom + scan-line + parallax depth-map. |
| **Services** | 4-card grid: AI Integration, Workflow Automation, Custom App Dev, AI Consulting. |
| **Seva Sahayak** | Robot photo (left) + copy (right). Explains AI assistant product. |
| **Work** | 2–3 case study cards: industry, problem, solution, metric. |
| **Testimonials** | 2–3 quotes. |
| **CTA Banner** | Dark accent band + "Talk to Us" button. |
| **Footer** | Logo, nav links, email, LinkedIn, copyright. |

### `/about` — Mission, company story, tech partnerships.

### `/contact` — Enquiry form: name, company, email, budget range, project brief.

---

## SEO

- `metadata` export on every page (title, description, openGraph)
- Semantic HTML (`<main>`, `<section>`, `<article>`, heading hierarchy)
- Vercel-ready (`robots.txt`, `sitemap.xml` via Next.js)
- Canonical URLs via Next.js metadata API

---

## Components

```
/components
 /ui              — shadcn: button, card, input, textarea, badge, sheet
 Nav.tsx           — sticky nav, mobile hamburger (sheet)
 HeroSection.tsx    — wraps hero-futuristic with KSAI copy
 ServicesSection.tsx
 SevaSahayakSection.tsx
 WorkSection.tsx
 TestimonialsSection.tsx
 CTABanner.tsx
 Footer.tsx
 ContactForm.tsx
/lib
 actions.ts       — contact form server action
```

---

## NPM Dependencies

```bash
# 3D
three @react-three/fiber @react-three/drei

# Motion
framer-motion

# shadcn
# (via npx shadcn@latest add button card input textarea badge sheet)

# Icons
lucide-react
```

---

## Content

- **Hero headline:** "Sovereign AI for the Global South."
- **Hero subtitle:** "We call."
- **CTA:** "Talk to Us"
- **Seva Sahayak image:** Provided robot photo (Desktop screenshot)
- **Team section:** Blank (no team page yet)
- **Case studies:** Placeholder content, easy to swap for real ones

---

## Design Principles

- No carousels, no heavy video backgrounds, no stock photo grids
- Motion is targeted: hero (full 3D), Services/CTA sections (Framer scroll animations)
- Fast, accessible, SEO-first
- Mobile-first responsive
