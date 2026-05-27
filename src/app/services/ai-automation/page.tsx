import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bot, Workflow, Cpu, Sparkles, CheckCircle2, Zap, Shield, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation Services | Chatbot, Workflow Automation, AI Integration",
  description: "Expert AI automation services for businesses. Custom chatbots, workflow automation, and AI integration. Boost efficiency by 40% with our AI solutions. Based in Bhubaneswar.",
  keywords: [
    "AI automation services",
    "chatbot development",
    "workflow automation",
    "AI integration",
    "business automation",
    "AI chatbot development",
    "automation company",
    "AI agents",
    "LLM integration",
    "business process automation",
  ],
  openGraph: {
    title: "AI Automation Services | Kalinga Sovereign AI",
    description: "Custom chatbots, workflow automation, and AI integration for businesses.",
    url: "https://kalingasovereignai.com/services/ai-automation",
  },
};

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Agents",
    description: "Intelligent chatbots that understand context, learn from interactions, and handle complex queries 24/7.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks. Connect apps, sync data, and eliminate manual work.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Add AI capabilities to your existing systems. LLM integration, document processing, and more.",
  },
  {
    icon: Cpu,
    title: "Custom AI Solutions",
    description: "Build custom AI models and solutions tailored to your specific business needs.",
  },
  {
    icon: Zap,
    title: "Process Optimization",
    description: "Analyze and optimize your business processes with AI-powered insights.",
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Implement AI securely. Data privacy, compliance, and ethical AI practices.",
  },
];

const benefits = [
  { value: "40%", label: "Efficiency Increase" },
  { value: "60%", label: "Cost Reduction" },
  { value: "24/7", label: "AI Availability" },
  { value: "70%", label: "Tasks Automated" },
];

const industries = [
  "Customer Service",
  "Sales & Marketing",
  "Operations",
  "HR & Recruitment",
  "Finance & Accounting",
  "Healthcare Admin",
];

const process = [
  { step: "01", title: "Audit", description: "Analyze your current workflows and identify automation opportunities" },
  { step: "02", title: "Design", description: "Design AI solutions that fit your business processes" },
  { step: "03", title: "Build", description: "Develop and train custom AI models and automations" },
  { step: "04", title: "Deploy", description: "Integrate into your systems with minimal disruption" },
  { step: "05", title: "Optimize", description: "Monitor, learn, and continuously improve" },
];

export default function AIAutomationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section">
        <div className="container mx-auto px-6">
          <Link href="/services" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
              AI Automation Services
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8">
              Transform your business with AI. We build custom chatbots, automate workflows, and integrate AI into your existing systems. Save time, reduce costs, and scale faster.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="font-semibold">Get Free AI Audit</Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="font-semibold">View Case Studies</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="text-center p-6 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]">
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">{item.value}</div>
                <div className="text-sm text-[var(--color-text-secondary)]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">What We Automate</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all">
                <service.icon className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Industries We Transform</h2>
            <p className="text-[var(--color-text-secondary)]">AI automation benefits every industry</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <span key={i} className="px-6 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-full text-[var(--color-text-secondary)]">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Our Process</h2>
            <p className="text-[var(--color-text-secondary)]">From analysis to continuous optimization</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((item, i) => (
              <div key={i} className="text-center p-6 bg-[var(--color-surface)] rounded-xl">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[var(--color-text)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">Ready to Automate?</h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Get a free AI audit. We&apos;ll analyze your workflows and identify the best automation opportunities for your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="font-semibold">Schedule Free AI Audit</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
