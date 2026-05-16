"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Brain,
  Zap,
  Layers,
  Compass,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Embed intelligence into your existing systems. We connect LLMs, vision models, and custom AI agents to your workflows, CRMs, ERPs, and data pipelines.",
    badge: "LLM · Vision · NLP",
  },
  {
    icon: Zap,
    title: "AI Agents & Automation",
    description:
      "Build custom AI agents that run 24/7 — eliminating repetitive tasks, automating document processing, customer onboarding, and backend operations without human intervention.",
    badge: "AI Agents · RPA · APIs",
  },
  {
    icon: Layers,
    title: "Custom App Development",
    description:
      "We build full-stack applications with AI at their core — web apps, dashboards, mobile backends, and APIs designed for performance at scale.",
    badge: "Next.js · Python · FastAPI",
  },
  {
    icon: Compass,
    title: "AI Consulting",
    description:
      "Not sure where to start? We assess your business, map AI agent opportunities, and deliver a clear roadmap — no hype, just practical steps with ROI.",
    badge: "Strategy · Audit · Roadmap",
  },
];

export default function ServicesSection() {
  const prefersReducedMotion = useReducedMotion();

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
                <Card className="group hover:border-[var(--color-accent)]/50 transition-all duration-300 h-full">
                  <CardContent className="p-4 md:p-6 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-[var(--color-accent)]/20 group-hover:border-[var(--color-accent)]/40 transition-all duration-300">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-accent)]" />
                    </div>

                    {/* Badge */}
                    <Badge variant="outline" className="w-fit mb-2 md:mb-3 text-[10px] font-mono">
                      {service.badge}
                    </Badge>

                    {/* Content */}
                    <h3 className="text-base md:text-lg font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[var(--color-muted)] text-xs md:text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
