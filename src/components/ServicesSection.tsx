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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "AI Integration",
    shortDesc:
      "Embed intelligence into your existing systems. We connect LLMs, vision models, and custom AI agents to your workflows.",
    badge: "LLM · Vision · NLP",
  },
  {
    icon: Zap,
    title: "AI Agents & Automation",
    shortDesc:
      "Build custom AI agents that run 24/7 — eliminating repetitive tasks and automating operations.",
    badge: "AI Agents · RPA · APIs",
  },
  {
    icon: Layers,
    title: "Custom App Development",
    shortDesc:
      "Full-stack applications with AI at their core — built for performance at scale.",
    badge: "Next.js · Python · FastAPI",
  },
  {
    icon: Compass,
    title: "AI Consulting",
    shortDesc:
      "Assess your business, map AI opportunities, and deliver a clear roadmap with ROI.",
    badge: "Strategy · Audit · Roadmap",
  },
];

export default function ServicesSection() {
  const prefersReducedMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-xs font-medium tracking-wider">
            WHAT WE DO
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--color-text)] mb-4 tracking-tight">
            AI Solutions,{" "}
            <span className="gradient-text">End to End</span>
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto text-lg">
            From strategy to deployment, we build AI systems that ship and deliver
            measurable outcomes.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
                className="group"
              >
                <div
                  className={`
                    relative h-full rounded-2xl p-6 cursor-pointer transition-all duration-300
                    bg-[var(--color-surface)] border
                    ${isExpanded
                      ? "border-[var(--color-accent)] shadow-lg"
                      : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]"
                    }
                    card-hover
                  `}
                  onClick={() => toggleCard(index)}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>

                  {/* Badge */}
                  <Badge variant="outline" className="mb-3 text-[11px] font-medium tracking-wide">
                    {service.badge}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Expand indicator */}
                  <div className={`mt-4 flex items-center gap-2 text-sm text-[var(--color-accent)] transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}>
                    <span>Learn more</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-[var(--color-border)]">
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
