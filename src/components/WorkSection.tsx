"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    industry: "Healthcare",
    title: "Patient Query AI Assistant",
    shortProblem:
      "Hospital losing patient satisfaction due to 10-minute phone wait times.",
    problem:
      "A 50-bed hospital was losing patient satisfaction due to 10-minute average wait times on phone queries. Staff were overwhelmed answering the same questions repeatedly.",
    solution:
      "Deployed a RAG-based assistant trained on hospital SOPs, FAQs, and appointment data. Integrated with WhatsApp and their website for instant responses.",
    outcome: "72% reduction in call volume · 4.6/5 patient satisfaction",
    tags: ["RAG", "WhatsApp API", "FastAPI", "PostgreSQL"],
    metrics: ["60% of queries handled by AI", "Average response time: 3 seconds", "24/7 availability"],
  },
  {
    industry: "Manufacturing",
    title: "Inventory Forecasting Engine",
    shortProblem:
      "30% excess raw material inventory from manual spreadsheet forecasting.",
    problem:
      "A mid-size manufacturer was sitting on 30% excess raw material inventory due to manual, spreadsheet-based forecasting. Planning cycles took days and human errors led to stockouts.",
    solution:
      "Built an ML forecasting pipeline with demand prediction, supplier lead-time modeling, and automated reorder alerts. Integrated with existing ERP.",
    outcome: "22% inventory reduction · 3× faster planning cycles",
    tags: ["Python", "XGBoost", "Airflow", "Tableau"],
    metrics: ["₹18 lakhs saved in Q1", "Forecasting accuracy: 94%", "Automated reorder alerts"],
  },
  {
    industry: "E-commerce",
    title: "AI-Powered Product Categorization",
    shortProblem:
      "10,000+ SKU catalog required 2 days to list new products correctly.",
    problem:
      "A 10,000+ SKU catalog required manual tagging. New products took 2 days to list correctly. Inconsistent tagging led to poor search results.",
    solution:
      "Fine-tuned a vision + text model for automatic product tagging, attribute extraction, and SEO description generation. Direct Shopify integration.",
    outcome: "2-day → 15 minutes per product · 94% tagging accuracy",
    tags: ["PyTorch", "CLIP", "Next.js", "Shopify API"],
    metrics: ["98% time savings", "Consistent tagging across catalog", "SEO scores improved 40%"],
  },
];

export default function WorkSection() {
  const prefersReducedMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="work" className="py-16 md:py-24 lg:py-32 bg-[var(--color-bg)]">
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
            CASE STUDIES
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4">
            Work That <span className="gradient-text">Delivers</span>
          </h2>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-base md:text-lg">
            Real problems. Measurable outcomes. Every project ships to
            production — not just to a demo deck.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.15 }}
              >
                <Card
                  className={`group cursor-pointer h-full transition-all duration-300 ${
                    isExpanded
                      ? "border-[var(--color-accent)]/50 shadow-lg shadow-blue-500/10"
                      : "hover:border-[var(--color-accent)]/40 hover:shadow-xl hover:shadow-black/20"
                  }`}
                  onClick={() => toggleCard(index)}
                >
                  <CardContent className="p-4 md:p-6 flex flex-col h-full">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-2 mb-3 md:mb-4">
                      <Badge variant="outline" className="text-xs font-mono">
                        {project.industry}
                      </Badge>
                      <div className={`flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-5 h-5 text-[var(--color-muted)]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg font-semibold text-[var(--color-text)] mb-2 md:mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                      {project.title}
                    </h3>

                    {/* Short problem */}
                    <p className="text-[var(--color-muted)] text-xs md:text-sm leading-relaxed flex-1">
                      {project.shortProblem}
                    </p>

                    {/* Outcome badge */}
                    <div className="rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] p-2.5 md:p-3 mt-4">
                      <p className="text-[var(--color-accent)] text-xs font-semibold font-mono">
                        {project.outcome}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[9px] md:text-[10px] font-mono"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

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
                            {/* Full problem */}
                            <div className="mb-3">
                              <h4 className="text-[var(--color-text)] font-medium text-xs md:text-sm mb-1">The Problem</h4>
                              <p className="text-[var(--color-muted)] text-xs md:text-sm leading-relaxed">
                                {project.problem}
                              </p>
                            </div>

                            {/* Solution */}
                            <div className="mb-3">
                              <h4 className="text-[var(--color-text)] font-medium text-xs md:text-sm mb-1">Our Solution</h4>
                              <p className="text-[var(--color-muted)] text-xs md:text-sm leading-relaxed">
                                {project.solution}
                              </p>
                            </div>

                            {/* Key metrics */}
                            <div className="mb-4">
                              <h4 className="text-[var(--color-text)] font-medium text-xs md:text-sm mb-2">Key Results</h4>
                              <ul className="space-y-1.5">
                                {project.metrics.map((metric, i) => (
                                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                                    <span className="text-[var(--color-text)]">{metric}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* CTA */}
                            <Button size="sm" variant="outline" asChild className="w-full">
                              <a href="/contact" className="inline-flex items-center gap-2">
                                Discuss Your Project
                                <ArrowUpRight className="w-4 h-4" />
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
          Tap a case study to learn more
        </p>
      </div>
    </section>
  );
}
