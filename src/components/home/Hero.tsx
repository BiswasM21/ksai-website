"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg)]">
      {/* Grid background pattern */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Animated Logo */}
        <div className={`mb-8 ${mounted ? "animate-fade-in" : "opacity-0"}`}>
          <Logo size={80} animated />
        </div>

        {/* Headline */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 ${mounted ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          <span className="gradient-text">Intelligent Solutions</span>
          <br />
          <span className="text-[var(--color-text)]">for the Modern World</span>
        </h1>

        {/* Subheadline */}
        <p className={`text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mb-10 leading-relaxed ${mounted ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
          We build websites, applications, AI automations, and robotics solutions
          that transform businesses and drive innovation. From concept to
          deployment, we deliver cutting-edge technology tailored to your needs.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 ${mounted ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
          <Link href="/contact">
            <Button className="btn-primary text-base px-8 py-5">
              Get Started
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="btn-secondary text-base px-8 py-5">
              Our Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${mounted ? "animate-fade-in delay-500" : "opacity-0"}`}>
        <div className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
