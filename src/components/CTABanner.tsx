"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface)] relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-transparent to-[var(--color-bg)] opacity-50" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--color-text)] mb-4 tracking-tight">
            Ready to add AI to your
            <br />
            <span className="gradient-text">business?</span>
          </h2>
          <p className="text-[var(--color-muted)] text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Whether you&apos;re automating a workflow or exploring what&apos;s possible —
            let&apos;s talk. No sales pitch, just a focused conversation.
          </p>

          <Button
            asChild
            size="lg"
            className="text-base px-8 py-5 font-medium shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <a href="/contact" className="inline-flex items-center gap-2">
              Talk to Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
