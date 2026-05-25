"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe, Smartphone, Brain, Cpu } from "lucide-react";
import { ServiceCard } from "@/components/shared/ServiceCard";

const services = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Website Building",
    description:
      "Modern, responsive websites built with the latest technologies. From landing pages to complex web applications, we create digital experiences that convert.",
    href: "/services#website",
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "App Building",
    description:
      "Cross-platform mobile applications that deliver native-like experiences. iOS, Android, or Progressive Web Apps—we build for your audience.",
    href: "/services#app",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "AI Automations",
    description:
      "Intelligent automation powered by machine learning. Streamline workflows, automate repetitive tasks, and unlock insights from your data.",
    href: "/services#ai",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Robotics Solutions",
    description:
      "Custom robotics systems and IoT integrations. From industrial automation to smart systems, we engineer solutions that move your business forward.",
    href: "/services#robotics",
  },
];

/**
 * Services preview section displaying a grid of service cards.
 * Links to the full services page for more details.
 */
export function ServicesPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="section bg-[var(--color-bg)] relative"
    >
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--color-text)] mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto text-lg">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.1,
                ease: "easeOut",
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
