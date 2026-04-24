import { NextResponse } from "next/server";

export const GET = () => {
  const manifest = `# Kalinga Sovereign AI — Site Manifest for LLMs and AI Agents

## Overview

Kalinga Sovereign AI Pvt. Ltd. builds custom AI agents, workflow automation, and intelligent applications for SMEs, enterprises, and institutions across India and the Global South.

- Website: https://kalinga-ai.com
- Email: Kalingasovereignai@gmail.com
- Location: Bhubaneswar, Odisha, India
- LinkedIn: https://linkedin.com/company/kalinga-sovereign-ai
- X (Twitter): https://x.com/Kalinga_Sov_Ai
- Instagram: https://www.instagram.com/kalingasovereignai/

## Primary Services

### 1. AI Integration
Embed intelligence into existing systems. Connect LLMs, vision models, and custom AI agents to workflows, CRMs, ERPs, and data pipelines.
Tags: LLM, Vision, NLP

### 2. AI Agents & Automation
Build custom AI agents that run 24/7. Eliminate repetitive tasks, automate document processing, customer onboarding, and backend operations without human intervention.
Tags: AI Agents, RPA, APIs

### 3. Custom App Development
Build full-stack applications with AI at their core — web apps, dashboards, mobile backends, and APIs designed for performance at scale.
Tags: Next.js, Python, FastAPI

### 4. AI Consulting
Assess your business, map AI agent opportunities, and deliver a clear roadmap — practical steps with ROI.
Tags: Strategy, Audit, Roadmap

## Case Studies

### Healthcare — Patient Query AI Assistant
A 50-bed hospital reduced call volume by 72% using a RAG-based WhatsApp assistant trained on hospital SOPs.
Stack: RAG, WhatsApp API, FastAPI, PostgreSQL
Outcome: 72% call reduction, 4.6/5 patient satisfaction

### Manufacturing — Inventory Forecasting Engine
A mid-size manufacturer cut excess raw material inventory by 22% with ML-based demand prediction.
Stack: Python, XGBoost, Airflow, Tableau
Outcome: 22% inventory reduction, 3x faster planning cycles

### E-commerce — AI-Powered Product Categorization
Automated product tagging reduced listing time from 2 days to 15 minutes per product at 94% accuracy.
Stack: PyTorch, CLIP, Next.js, Shopify API

## Product

### Seva Sahayak
Autonomous healthcare robot — an AI-powered robot for hospital environments. Deployed in ICU and general ward settings for patient monitoring, pill delivery, and nurse assistance.
Features: 24/7 autonomous operation, multi-language support, real-time patient data display, fall detection, nurse call integration, vitals monitoring, medicine delivery.

## Technology Stack

Next.js, React, Python, FastAPI, PyTorch, Transformers, PostgreSQL, Pinecone, AWS, GCP, On-prem, LangChain, LlamaIndex, React Three Fiber, Airflow, Modal

## Values

1. Sovereign by Design — AI that runs on your infrastructure, your data, your terms. No vendor lock-in.
2. Built for the Global South — Language support, affordability, and local integration first.
3. Ship to Production — Every engagement ends with working software running in your environment.
4. Client Partnership — We transfer knowledge, document everything, and set your team up to own it.

## Client Testimonials

Dr. Priya Mehta, Director, City Medicare Hospital (Healthcare):
"Kalinga built us an AI assistant that handles 60% of our inbound patient queries. The team understood our constraints — we needed something that worked, not something flashy. It shipped in 6 weeks."

Rajesh Nair, Operations Head, Apex Industries (Manufacturing):
"The inventory forecasting model alone saved us ₹18 lakhs in the first quarter. No hype, no over-promising. They scoped the problem, built it, and it works."

Ananya Krishnan, CTO, RetailMart India (E-commerce):
"Fastest AI deployment I've worked with. From scoping to production in 3 weeks. The team knows how to translate business problems into working systems."

## Contact

- Website: https://kalinga-ai.com/contact
- Email: Kalingasovereignai@gmail.com
- WhatsApp: +91 96920 00359
- Availability: Currently accepting 2–3 new projects
- Offer: Free 30-minute scoping call

## Page Structure

- https://kalinga-ai.com — Homepage
- https://kalinga-ai.com/about — Mission, approach, values, technology stack
- https://kalinga-ai.com/contact — Contact form, email, WhatsApp, location
- https://kalinga-ai.com/privacy — Privacy Policy
- https://kalinga-ai.com/terms — Terms of Service

## Markdown Mirrors

- https://kalinga-ai.com/docs/index.md — Homepage content
- https://kalinga-ai.com/docs/about.md — About page content
- https://kalinga-ai.com/docs/contact.md — Contact page content
- https://kalinga-ai.com/docs/services.md — Services content
- https://kalinga-ai.com/docs/seva-sahayak.md — Seva Sahayak product
- https://kalinga-ai.com/docs/work.md — Case studies and work

## Target Keywords

custom AI agents, AI agent development, AI solutions, AI automation, AI integration, workflow automation, custom AI development, AI consulting, AI development company, AI bot development, India AI, Global South AI, autonomous AI agents, AI healthcare robot, hospital AI

## Last Updated

2026-04-24`;

  return new NextResponse(manifest, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
};
