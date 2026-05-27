"use client";

import { useEffect, useState } from "react";
import { Bot, Workflow, Globe, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    description: "Deploy autonomous AI agents that comprehend context, learn from interactions, and handle complex queries 24/7. Built with advanced LLM technology.",
    href: "/services#ai-agents",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Transform operational efficiency by automating complex workflows. From document processing to customer onboarding, we eliminate manual bottlenecks.",
    href: "/services#automation",
  },
  {
    icon: Sparkles,
    title: "Website Development",
    description: "Craft exceptional digital experiences that captivate visitors and drive conversions. Enterprise-grade applications with modern frameworks.",
    href: "/services#web-development",
  },
  {
    icon: Globe,
    title: "Web & Mobile Apps",
    description: "Engineer fast, beautiful, and scalable applications. From MVPs to enterprise systems, we deliver software that users trust.",
    href: "/services#apps",
  },
  {
    icon: Cpu,
    title: "Custom AI Solutions",
    description: "Sentiment analysis, document processing, predictive models, and specialized ML solutions tailored to your industry requirements.",
    href: "/services#custom-ai",
  },
];

export default function ServicesPreview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => { setMounted(true); });
  }, []);

  return (
    <section id="services" className="section bg-[var(--color-surface)]">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--color-primary-subtle)] text-[var(--color-primary)] mb-4">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4 tracking-tight">
            Deep Tech, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            We engineer intelligent systems that automate operations and elevate user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group card p-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-[var(--color-primary-subtle)] group-hover:bg-[var(--color-primary)] transition-colors">
                  <service.icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={`text-center mt-12 ${mounted ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
          <Link href="/services">
            <Button variant="outline" className="btn-secondary">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
