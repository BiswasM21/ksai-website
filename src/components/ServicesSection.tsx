"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Zap,
  Layers,
  Compass,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "AI Integration",
    shortDesc:
      "Embed intelligence into your existing systems. We connect LLMs, vision models, and custom AI agents to your workflows.",
    fullDesc:
      "We connect Large Language Models, computer vision systems, and custom AI agents to your existing workflows. Whether it's your CRM, ERP, or data pipelines — we make AI work with what you already have.",
    badge: "LLM · Vision · NLP",
    capabilities: [
      "LLM Integration (OpenAI, Anthropic, open-source)",
      "RAG systems with your data",
      "CRM/ERP connectors",
      "Custom API development",
    ],
  },
  {
    icon: Zap,
    title: "AI Agents & Automation",
    shortDesc:
      "Build custom AI agents that run 24/7 — eliminating repetitive tasks and automating operations.",
    fullDesc:
      "Custom AI agents that work around the clock. From customer support to document processing, from data entry to backend operations — we build agents that handle the work so your team can focus on what matters.",
    badge: "AI Agents · RPA · APIs",
    capabilities: [
      "24/7 customer support agents",
      "Document processing & extraction",
      "Workflow automation",
      "Multi-channel integration",
    ],
  },
  {
    icon: Layers,
    title: "Custom App Development",
    shortDesc:
      "Full-stack applications with AI at their core — built for performance at scale.",
    fullDesc:
      "We build web apps, dashboards, mobile backends, and APIs designed for performance. From AI-powered SaaS products to internal tools — if you can imagine it, we can build it.",
    badge: "Next.js · Python · FastAPI",
    capabilities: [
      "Next.js / React applications",
      "Python/FastAPI backends",
      "Real-time AI features",
      "Cloud deployment (AWS, GCP, Azure)",
    ],
  },
  {
    icon: Compass,
    title: "AI Consulting",
    shortDesc:
      "Assess your business, map AI opportunities, and deliver a clear roadmap with ROI.",
    fullDesc:
      "Not sure where to start? We assess your current operations, identify high-impact AI opportunities, and deliver a practical roadmap. No hype — just actionable steps with clear ROI projections.",
    badge: "Strategy · Audit · Roadmap",
    capabilities: [
      "AI readiness assessment",
      "Use case identification",
      "ROI analysis",
      "Implementation roadmap",
    ],
  },
];

export default function ServicesSection() {
  const prefersReducedMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-xs font-mono">
            WHAT WE DO
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4">
            AI Solutions,{" "}
            <span className="gradient-text">End to End</span>
          </h2>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-base md:text-lg">
            From strategy to deployment, we build AI systems that ship and
            deliver measurable outcomes — not proof-of-concept demos.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
              >
                <Card
                  className={`group cursor-pointer transition-all duration-300 h-full ${
                    isExpanded
                      ? "border-[var(--color-accent)]/50 shadow-lg shadow-blue-500/10"
                      : "hover:border-[var(--color-accent)]/50"
                  }`}
                  onClick={() => toggleCard(index)}
                >
                  <CardContent className="p-4 md:p-6 flex flex-col h-full">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-2">
                      {/* Icon */}
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 group-hover:border-[var(--color-accent)]/40 transition-all duration-300">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-accent)]" />
                      </div>

                      {/* Expand indicator */}
                      <div className={`flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-5 h-5 text-[var(--color-muted)]" />
                      </div>
                    </div>

                    {/* Badge */}
                    <Badge variant="outline" className="w-fit mt-4 mb-2 md:mb-3 text-[10px] font-mono">
                      {service.badge}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-base md:text-lg font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                      {service.title}
                    </h3>

                    {/* Short description */}
                    <p className="text-[var(--color-muted)] text-xs md:text-sm leading-relaxed flex-1">
                      {service.shortDesc}
                    </p>

                    {/* Expandable content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                            {/* Full description */}
                            <p className="text-[var(--color-muted)] text-xs md:text-sm leading-relaxed mb-4">
                              {service.fullDesc}
                            </p>

                            {/* Capabilities list */}
                            <ul className="space-y-2 mb-4">
                              {service.capabilities.map((cap, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                                  <span className="text-[var(--color-text)]">{cap}</span>
                                </li>
                              ))}
                            </ul>

                            {/* CTA */}
                            <Button size="sm" asChild className="w-full">
                              <a href="/contact" className="inline-flex items-center gap-2">
                                Get Started
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tap hint for mobile */}
        <p className="text-center text-[var(--color-muted-dark)] text-xs mt-6 md:hidden">
          Tap a card to learn more
        </p>
      </div>
    </section>
  );
}
