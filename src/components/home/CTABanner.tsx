"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Call-to-action banner section with gradient background.
 * Encourages visitors to start their project.
 */
export function CTABanner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, var(--color-primary) 0%, #1E3A8A 100%)",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top right decoration */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
          }}
        />
        {/* Bottom left decoration */}
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            Ready to Transform Your Business?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss how our solutions can help you achieve your goals.
            From initial concept to final deployment, we&apos;re with you every step
            of the way.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            asChild
            className="text-base px-8 py-5 bg-white text-[var(--color-primary)] hover:bg-white/90 hover:shadow-xl transition-all duration-200"
          >
            <a href="/contact" className="inline-flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
