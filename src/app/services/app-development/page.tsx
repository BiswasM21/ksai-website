import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, Apple, Globe, Code, Layers, Tablet } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Services | Flutter, React Native, iOS, Android",
  description: "Expert mobile app development using Flutter, React Native, iOS, and Android. Beautiful, performant apps for startups and SMEs. Based in Odisha, serving globally.",
  keywords: [
    "mobile app development",
    "Flutter app development",
    "React Native development",
    "iOS app development",
    "Android app development",
    "app development company",
    "mobile app developer",
    "cross-platform app development",
    "Flutter developer India",
  ],
  openGraph: {
    title: "Mobile App Development Services | Kalinga Sovereign AI",
    description: "Expert mobile app development with Flutter, React Native, iOS & Android.",
    url: "https://kalingasovereignai.com/services/app-development",
  },
};

const services = [
  {
    icon: Apple,
    title: "iOS Development",
    description: "Native iOS apps using Swift. App Store submission and maintenance included.",
  },
  {
    icon: Tablet,
    title: "Android Development",
    description: "Native Android apps using Kotlin. Google Play submission and maintenance included.",
  },
  {
    icon: Globe,
    title: "Cross-Platform Apps",
    description: "Flutter and React Native for apps that work on both iOS and Android from a single codebase.",
  },
  {
    icon: Smartphone,
    title: "App Modernization",
    description: "Update legacy apps with modern UI, better performance, and new features.",
  },
  {
    icon: Layers,
    title: "App Integration",
    description: "Connect your app to existing systems - APIs, databases, and third-party services.",
  },
  {
    icon: Code,
    title: "Custom Features",
    description: "Build complex features like real-time chat, payment processing, or AI integration.",
  },
];

const industries = [
  "E-commerce & Retail",
  "Healthcare & Wellness",
  "Education & EdTech",
  "Finance & Fintech",
  "Food & Delivery",
  "Travel & Hospitality",
];

const process = [
  { step: "01", title: "Requirements", description: "Detailed feature planning and technical architecture" },
  { step: "02", title: "Design", description: "UI/UX design with interactive prototypes" },
  { step: "03", title: "Development", description: "Iterative development with weekly builds" },
  { step: "04", title: "Testing", description: "Comprehensive QA across multiple devices" },
  { step: "05", title: "Launch", description: "App Store & Play Store submission support" },
];

export default function AppDevelopmentPage() {
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
              Mobile App Development Services
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8">
              Beautiful, performant mobile apps for iOS and Android. Whether you need a native app or a cross-platform solution, we build apps that users love and businesses grow with.
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

      {/* Industries */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Industries We Serve</h2>
            <p className="text-[var(--color-text-secondary)]">We have experience building apps across various industries</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <span key={i} className="px-6 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full text-[var(--color-text-secondary)]">
                {industry}
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
            <p className="text-[var(--color-text-secondary)]">From idea to App Store - we handle everything</p>
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

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">Ready to Build Your App?</h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Get a free consultation and project estimate. We&apos;ll help you choose the right technology and provide a detailed roadmap.
            </p>
            <Link href="/contact">
              <Button size="lg" className="font-semibold">Schedule Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
