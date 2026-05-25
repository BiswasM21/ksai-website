import type { Metadata } from "next";
import { Globe, Smartphone, Brain, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Kalinga Sovereign AI's comprehensive suite of services: Website Building, App Development, AI Automations, and Robotics Solutions designed for the Global South.",
  keywords: [
    "website development",
    "mobile app development",
    "AI automation services",
    "robotics solutions",
    "custom software development",
    "digital transformation",
    "AI integration",
    "industrial robotics",
  ],
};

const services = [
  {
    id: "website",
    icon: Globe,
    title: "Website Building",
    description:
      "We create modern, responsive websites that load fast, look great on all devices, and convert visitors into customers. Using the latest frameworks and best practices, we build websites that grow with your business.",
  },
  {
    id: "app",
    icon: Smartphone,
    title: "App Building",
    description:
      "From concept to app store, we build native and cross-platform mobile applications that users love. Our apps are performant, intuitive, and designed to solve real problems for your customers.",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Automations",
    description:
      "Harness the power of artificial intelligence to automate repetitive tasks, gain insights from data, and create intelligent workflows. We integrate AI into your existing systems seamlessly.",
  },
  {
    id: "robotics",
    icon: Cpu,
    title: "Robotics Solutions",
    description:
      "We design and develop custom robotics systems for industrial, commercial, and research applications. From hardware design to control software, we bring your robotics vision to life.",
  },
];

export default function ServicesPage() {
  return (
    <div className="section">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            From websites to AI-powered solutions, we deliver technology that drives real business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="card group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[var(--color-primary)] bg-opacity-10 group-hover:bg-opacity-20 transition-colors">
                    <IconComponent className="w-8 h-8 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                </div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to start your project?
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-6 max-w-lg mx-auto">
            Let&apos;s discuss how our services can help transform your business.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
