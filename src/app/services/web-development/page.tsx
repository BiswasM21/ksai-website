import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Zap, Globe, Smartphone, Server, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Development Services | React, Next.js, Vue",
  description: "Expert custom web development services using React, Next.js, Vue. Fast, scalable, SEO-optimized websites and web applications for startups and SMEs. Based in Bhubaneswar.",
  keywords: [
    "web development services",
    "custom web development",
    "React development",
    "Next.js development",
    "Vue development",
    "website development company",
    "web application development",
    "frontend development",
    "React developer India",
  ],
  openGraph: {
    title: "Custom Web Development Services | Kalinga Sovereign AI",
    description: "Expert web development with React, Next.js, Vue. Fast, scalable, SEO-optimized.",
    url: "https://kalingasovereignai.com/services/web-development",
  },
};

const services = [
  {
    icon: Code,
    title: "Custom Web Applications",
    description: "Build complex web applications from scratch with React, Next.js, or Vue. Full-stack solutions with Node.js or Python backends.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Beautiful, fast, SEO-optimized websites. Landing pages, portfolio sites, blogs, and corporate websites.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach. Your site looks perfect on every device - phones, tablets, and desktops.",
  },
  {
    icon: Server,
    title: "Progressive Web Apps",
    description: "PWA development for app-like experiences. Offline support, push notifications, and home screen installation.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times. We optimize Core Web Vitals for better SEO and user experience.",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Custom e-commerce stores with payment integration, inventory management, and order tracking.",
  },
];

const techStack = [
  "React", "Next.js", "Vue.js", "TypeScript", "Node.js",
  "Python", "PostgreSQL", "MongoDB", "Tailwind CSS", "GraphQL",
];

const process = [
  { step: "01", title: "Discovery", description: "We understand your requirements, target audience, and business goals." },
  { step: "02", title: "Design", description: "UI/UX design with wireframes and mockups for your approval." },
  { step: "03", title: "Development", description: "Agile development with weekly progress updates." },
  { step: "04", title: "Testing", description: "Comprehensive testing across devices and browsers." },
  { step: "05", title: "Launch", description: "Deployment with monitoring and 30-day support." },
];

export default function WebDevelopmentPage() {
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
              Custom Web Development Services
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8">
              We build fast, scalable, and beautiful web applications using modern technologies. From landing pages to complex enterprise software, we deliver solutions that help your business grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="font-semibold">Get Free Quote</Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="font-semibold">View Our Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">What We Build</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-[var(--color-bg)] p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all">
                <service.icon className="w-10 h-10 text-[var(--color-primary)] mb-4" />
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Our Technology Stack</h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              We use modern, battle-tested technologies that ensure your project is maintainable, scalable, and secure.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full text-sm text-[var(--color-text-secondary)]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Our Process</h2>
            <p className="text-[var(--color-text-secondary)]">Transparent, agile development from concept to launch</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((item, i) => (
              <div key={i} className="text-center p-6">
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

      {/* Why Choose */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                {[
                  "Senior developers with 5+ years of experience",
                  "Direct communication - no account managers",
                  "Clean, maintainable code",
                  "SEO-optimized from day one",
                  "30-day post-launch support included",
                  "Transparent pricing with no hidden costs",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text-secondary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 rounded-2xl p-8 border border-[var(--color-primary)]/20">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">Ready to Start?</h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Get a free consultation and project estimate. We&apos;ll review your requirements and provide a detailed proposal within 48 hours.
              </p>
              <Link href="/contact">
                <Button className="w-full font-semibold">Schedule Free Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
