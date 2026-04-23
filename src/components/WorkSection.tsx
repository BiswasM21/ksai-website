"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    industry: "Healthcare",
    title: "Patient Query AI Assistant",
    problem:
      "A 50-bed hospital was losing patient satisfaction due to 10-minute average wait times on phone queries.",
    solution:
      "Deployed a RAG-based assistant trained on hospital SOPs, FAQs, and appointment data. Integrated with WhatsApp and their website.",
    outcome: "72% reduction in call volume · 4.6/5 patient satisfaction",
    tags: ["RAG", "WhatsApp API", "FastAPI", "PostgreSQL"],
  },
  {
    industry: "Manufacturing",
    title: "Inventory Forecasting Engine",
    problem:
      "A mid-size manufacturer was sitting on 30% excess raw material inventory due to manual, spreadsheet-based forecasting.",
    solution:
      "Built an ML forecasting pipeline with demand prediction, supplier lead-time modeling, and automated reorder alerts.",
    outcome: "22% inventory reduction · 3× faster planning cycles",
    tags: ["Python", "XGBoost", "Airflow", "Tableau"],
  },
  {
    industry: "E-commerce",
    title: "AI-Powered Product Categorization",
    problem:
      "A 10,000+ SKU catalog required manual tagging. New products took 2 days to list correctly.",
    solution:
      "Fine-tuned a vision + text model for automatic product tagging, attribute extraction, and SEO description generation.",
    outcome: "2-day → 15 minutes per product · 94% tagging accuracy",
    tags: ["PyTorch", "CLIP", "Next.js", "Shopify API"],
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-xs font-mono">
            CASE STUDIES
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Work That <span className="gradient-text">Delivers</span>
          </h2>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-lg">
            Real problems. Measurable outcomes. Every project ships to
            production — not just to a demo deck.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="group h-full flex flex-col hover:border-[var(--color-accent)]/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/20">
                <CardContent className="p-6 flex flex-col flex-1">
                  {/* Industry badge */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs font-mono">
                      {project.industry}
                    </Badge>
                    <ArrowUpRight className="w-4 h-4 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>

                  {/* Problem */}
                  <p className="text-[var(--color-muted)] text-sm mb-3">
                    <span className="text-[var(--color-text)] font-medium">Problem: </span>
                    {project.problem}
                  </p>

                  {/* Solution */}
                  <p className="text-[var(--color-muted)] text-sm mb-4">
                    <span className="text-[var(--color-text)] font-medium">Solution: </span>
                    {project.solution}
                  </p>

                  <div className="flex-1" />

                  {/* Outcome */}
                  <div className="rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] p-3 mb-4">
                    <p className="text-[var(--color-accent)] text-xs font-semibold font-mono">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] font-mono"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
