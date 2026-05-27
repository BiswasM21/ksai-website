"use client";

import { useState } from "react";
import { Bot, Workflow, Globe, Cpu, Sparkles, ArrowRight, CheckCircle2, Send, Loader2, Zap, Shield, Users, TrendingUp, Smartphone, Tablet } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "919692000359";

const services = [
  {
    id: "ai-agents",
    icon: Bot,
    title: "AI Agents & Intelligent Chatbots",
    tagline: "Autonomous Intelligence, Available 24/7",
    description:
      "Deploy AI agents that comprehend context, learn from interactions, and autonomously handle complex queries. From sophisticated customer support systems to specialized domain expertise, our agents deliver human-caliber conversations at enterprise scale.",
    features: [
      "Advanced natural language understanding with contextual memory",
      "Seamless multi-channel deployment (Web, WhatsApp, Slack, Teams)",
      "Deep integration with your knowledge base and existing systems",
      "Continuous learning with comprehensive performance analytics",
      "Intelligent escalation to human agents when required",
    ],
    stats: [
      { value: "98%", label: "Accuracy Rate" },
      { value: "24/7", label: "Availability" },
      { value: "60%", label: "Cost Reduction" },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "workflow",
    icon: Workflow,
    title: "Workflow Automation",
    tagline: "Eliminate Repetitive Work",
    description:
      "Free your team from manual, repetitive tasks. We design and implement automation workflows that connect your apps, streamline operations, and give you back hours every week. Built on proven platforms like Zapier, n8n, and custom solutions.",
    features: [
      "Cross-application data synchronization and updates",
      "Automated reporting and notification systems",
      "Lead management and follow-up sequences",
      "Document generation and processing pipelines",
      "Custom API integrations with legacy systems",
    ],
    stats: [
      { value: "15+", label: "Hours Saved/Week" },
      { value: "40%", label: "Efficiency Gain" },
      { value: "3x", label: "Faster Processes" },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "web",
    icon: Globe,
    title: "Custom Web Development",
    tagline: "Fast, Beautiful, Scalable",
    description:
      "From landing pages to complex web applications. We build with modern frameworks like Next.js, React, and Vue, ensuring your site is fast, secure, and built to grow. Every project gets a custom design that reflects your brand.",
    features: [
      "Responsive design that works on every device",
      "SEO-optimized architecture from day one",
      "Progressive Web Apps (PWA) for mobile-like experience",
      "E-commerce and payment gateway integration",
      "Cloud deployment with auto-scaling",
    ],
    stats: [
      { value: "99.9%", label: "Uptime Guaranteed" },
      { value: "<2s", label: "Load Time" },
      { value: "100+", label: "Projects Delivered" },
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Native & Cross-Platform Apps",
    description:
      "Beautiful, performant mobile apps for iOS and Android. Whether you need native apps or cross-platform solutions with Flutter and React Native, we build apps that users love and businesses grow with.",
    features: [
      "Native iOS apps using Swift",
      "Native Android apps using Kotlin",
      "Cross-platform apps with Flutter & React Native",
      "App Store & Google Play submission support",
      "Push notifications and analytics integration",
    ],
    stats: [
      { value: "50+", label: "Apps Delivered" },
      { value: "4.8", label: "Avg App Rating" },
      { value: "100%", label: "App Store Success" },
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "embedded",
    icon: Cpu,
    title: "Edge AI & Embedded Systems",
    tagline: "AI That Runs Where Data Lives",
    description:
      "We implement edge AI solutions that process data locally, reducing latency, ensuring privacy, and working offline. Perfect for IoT applications, embedded systems, and scenarios where cloud connectivity isn't reliable.",
    features: [
      "On-device machine learning model deployment",
      "IoT sensor data processing and analytics",
      "Real-time computer vision applications",
      "Low-power embedded AI implementations",
      "Custom hardware integration",
    ],
    stats: [
      { value: "<50ms", label: "Latency" },
      { value: "100%", label: "Data Privacy" },
      { value: "Offline", label: "Capability" },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "ai-integration",
    icon: Sparkles,
    title: "AI Integration Services",
    tagline: "Add Intelligence to Your Stack",
    description:
      "Bring AI capabilities into your existing systems without ripping and replacing. We integrate LLMs, computer vision, speech recognition, and custom ML models into your workflows, ERPs, CRMs, and custom applications.",
    features: [
      "LLM integration (OpenAI, Anthropic, open-source)",
      "Document processing and extraction (OCR + AI)",
      "Sentiment analysis and classification",
      "Predictive analytics and forecasting",
      "Multi-modal AI (vision + language)",
    ],
    stats: [
      { value: "10+", label: "LLM Providers" },
      { value: "85%", label: "Time Saved" },
      { value: "50+", label: "Integrations" },
    ],
    color: "from-indigo-500 to-blue-500",
  },
];

const faqs = [
  {
    question: "What technologies do you work with?",
    answer: "We specialize in React, Next.js, Vue, Flutter, Node.js, Python, and various AI/ML frameworks. We choose the right tool for each project based on requirements.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Simple projects take 4-8 weeks. Complex projects with AI integration typically take 3-6 months. We provide detailed timelines after discovery.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we offer flexible support packages including bug fixes, updates, and feature additions. All projects include 30 days of free post-launch support.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely. We often collaborate with in-house teams as specialists, providing technical leadership and execution for specific components.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const text = `*New Service Inquiry from KSAI Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Service:* ${formData.service}
*Message:* ${formData.message}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-6 tracking-tight">
              Web Development, App Development &{" "}
              <span className="text-[var(--color-primary)]">AI Automation</span>
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
              We build custom web applications, mobile apps, and AI-powered solutions that help startups and SMEs scale faster. From concept to deployment, we handle everything.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#services">
                <Button size="lg" className="font-semibold">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-semibold">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              What We Build
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              End-to-end solutions tailored for startups and growing businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[var(--color-bg)] rounded-2xl p-8 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-4">
                  {service.tagline}
                </p>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-6 pt-4 border-t border-[var(--color-border)]">
                  {service.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold text-[var(--color-text)]">{stat.value}</div>
                      <div className="text-xs text-[var(--color-text-muted)]">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <a href={`/book?service=${service.id}`} className="block mt-6">
                  <Button className="w-full">
                    Book Consultation
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
                Why Work With Us
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Zap, title: "Fast Delivery", desc: "Agile methodology with weekly sprints. See progress from day one." },
                  { icon: Shield, title: "Quality Assured", desc: "Code reviews, testing, and documentation on every project." },
                  { icon: Users, title: "Direct Access", desc: "Work directly with senior developers, no account managers." },
                  { icon: TrendingUp, title: "Scale Ready", desc: "Architecture designed for growth, not just today's needs." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text)] mb-1">{item.title}</h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 rounded-2xl p-8 border border-[var(--color-primary)]/20">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">
                Ready to Start?
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Book a free 30-minute call to discuss your project. We&apos;ll help you scope, estimate, and plan.
              </p>
              <Link href="/contact">
                <Button className="w-full font-semibold">
                  Schedule Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-medium text-[var(--color-text)]">{faq.question}</span>
                    <span className={`text-[var(--color-primary)] transition-transform ${openFaq === i ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 pt-0 text-[var(--color-text-secondary)]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                Start Your Project
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Fill out the form and we&apos;ll get back within 24 hours
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 bg-green-500/10 rounded-2xl border border-green-500/20">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Thank You!</h3>
                <p className="text-[var(--color-text-secondary)]">
                  We&apos;ve opened WhatsApp. Send us a message and we&apos;ll respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Your Name
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Rahul Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Email Address
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Service Interested In
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-10 px-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="ai">AI & Automation</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Tell us about your project
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, timeline, and budget..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full font-semibold" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
