"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const HeroFuturistic = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleExploreClick = useCallback(() => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleContactClick = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  if (!isMounted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
        <div className="w-6 h-6 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg)]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Ambient orbs - very subtle depth */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] orb orb-indigo" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] orb orb-violet" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Delivering AI solutions across India</span>
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.2 }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--color-text)] leading-[1.1]"
        >
          AI That Works
          <br />
          <span className="gradient-text">For Your Business</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.35 }}
          className="mt-6 text-lg sm:text-xl text-[var(--color-muted)] max-w-xl mx-auto leading-relaxed"
        >
          We build custom AI agents, automate workflows, and integrate intelligence
          into your systems — from strategy to production.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleExploreClick}
            className="group relative px-8 py-4 bg-[var(--color-accent)] text-white font-medium rounded-xl hover:bg-[var(--color-accent-hover)] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore Services
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

          <button
            onClick={handleContactClick}
            className="px-8 py-4 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] font-medium rounded-xl hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-200"
          >
            Talk to Us
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.7 }}
          className="mt-20 pt-8 border-t border-[var(--color-border)]"
        >
          <p className="text-xs text-[var(--color-muted-dark)] uppercase tracking-widest mb-6">
            Trusted by enterprises across
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[var(--color-muted)] text-sm font-medium">
            <span>Healthcare</span>
            <span className="text-[var(--color-border)]">•</span>
            <span>Manufacturing</span>
            <span className="text-[var(--color-border)]">•</span>
            <span>E-commerce</span>
            <span className="text-[var(--color-border)]">•</span>
            <span>Finance</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={handleExploreClick}
          className="flex flex-col items-center gap-2 text-[var(--color-muted-dark)] hover:text-[var(--color-muted)] transition-colors cursor-pointer"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border border-[var(--color-border)] rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-[var(--color-accent)] rounded-full animate-bounce" />
          </div>
        </button>
      </motion.div>
    </section>
  );
};

export default HeroFuturistic;
