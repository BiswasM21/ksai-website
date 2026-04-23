"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    quote:
      "Kalinga built us an AI assistant that handles 60% of our inbound patient queries. The team understood our constraints — we needed something that worked, not something flashy. It shipped in 6 weeks.",
    name: "Dr. Priya Mehta",
    title: "Director, City Medicare Hospital",
    industry: "Healthcare",
  },
  {
    quote:
      "The inventory forecasting model alone saved us ₹18 lakhs in the first quarter. No hype, no over-promising. They scoped the problem, built it, and it works.",
    name: "Rajesh Nair",
    title: "Operations Head, Apex Industries",
    industry: "Manufacturing",
  },
  {
    quote:
      "Fastest AI deployment I've worked with. From scoping to production in 3 weeks. The team knows how to translate business problems into working systems.",
    name: "Ananya Krishnan",
    title: "CTO, RetailMart India",
    industry: "E-commerce",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface-2)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-xs font-mono">
            CLIENT VOICES
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)]">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
              }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-5xl text-[var(--color-accent)]/30 font-serif leading-none mb-4">
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="text-[var(--color-text)] text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              {/* Author */}
              <div className="border-t border-[var(--color-border)] pt-4">
                <p className="text-[var(--color-text)] font-semibold text-sm">{t.name}</p>
                <p className="text-[var(--color-muted)] text-xs mt-0.5">{t.title}</p>
                <Badge variant="outline" className="mt-2 text-[10px] font-mono">
                  {t.industry}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
