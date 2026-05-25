"use client";

import { useEffect, useState } from "react";
import { Globe, Smartphone, Brain, Cpu } from "lucide-react";
import ServiceCard from "@/components/shared/ServiceCard";

const services = [
  {
    icon: <Globe className="w-7 h-7 text-[var(--color-primary)]" />,
    title: "Website Building",
    description:
      "Modern, responsive websites built with the latest technologies. From landing pages to complex web applications, we create digital experiences that convert.",
    href: "/services#website",
  },
  {
    icon: <Smartphone className="w-7 h-7 text-[var(--color-primary)]" />,
    title: "App Building",
    description:
      "Cross-platform mobile applications that deliver native-like experiences. iOS, Android, or Progressive Web Apps—we build for your audience.",
    href: "/services#app",
  },
  {
    icon: <Brain className="w-7 h-7 text-[var(--color-primary)]" />,
    title: "AI Automations",
    description:
      "Intelligent automation powered by machine learning. Streamline workflows, automate repetitive tasks, and unlock insights from your data.",
    href: "/services#ai",
  },
  {
    icon: <Cpu className="w-7 h-7 text-[var(--color-primary)]" />,
    title: "Robotics Solutions",
    description:
      "Custom robotics systems and IoT integrations. From industrial automation to smart systems, we engineer solutions that move your business forward.",
    href: "/services#robotics",
  },
];

export default function ServicesPreview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="services" className="section bg-[var(--color-bg)] relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--color-text)] mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-lg">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
