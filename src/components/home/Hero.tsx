"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";

/**
 * Hero section with animated logo, headline, subheadline, and CTAs.
 * Full viewport height with centered content and scroll indicator.
 */
export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg)]">
      {/* Grid background pattern */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />
      <div className="absolute inset-0 bg-gradient-radial from-[var(--color-accent)]/5 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="mb-8"
        >
          <Logo size={80} animated={!prefersReducedMotion} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : 0.2,
            ease: "easeOut",
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text">Intelligent Solutions</span>
          <br />
          <span className="text-[var(--color-text)]">for the Modern World</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : 0.4,
            ease: "easeOut",
          }}
          className="text-lg sm:text-xl text-[var(--color-muted)] max-w-2xl mb-10 leading-relaxed"
        >
          We build websites, applications, AI automations, and robotics solutions
          that transform businesses and drive innovation. From concept to
          deployment, we deliver cutting-edge technology tailored to your needs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" asChild className="text-base px-8 py-5">
            <a href="/contact">
              Get Started
            </a>
          </Button>
          <Button variant="secondary" size="lg" asChild className="text-base px-8 py-5">
            <a href="/services">
              Our Services
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.6,
          delay: prefersReducedMotion ? 0 : 1,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, 8, 0],
                }
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-[var(--color-muted)]"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
