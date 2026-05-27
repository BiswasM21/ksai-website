"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, ArrowRight, Shield, Cpu } from "lucide-react";

const quickFacts = [
  { label: "Founded", value: "2026" },
  { label: "Headquarters", value: "Bhubaneswar, Odisha" },
  { label: "CIN", value: "U62013OD2026PTC052646" },
  { label: "Reach", value: "India + Global South" },
];

const navTiles = [
  { href: "/about/mission", icon: Target, title: "Mission", description: "Our purpose and driving force" },
  { href: "/about/vision", icon: Eye, title: "Vision", description: "The world we're building" },
  { href: "/about/values", icon: Heart, title: "Values", description: "What we stand for" },
  { href: "/about/founders", icon: Users, title: "Founders", description: "The people behind KSAI" },
];

const whatWeBuild = [
  {
    title: "TRIVENI Architecture",
    description: "Our proprietary three-unit edge AI architecture designed for sovereign, offline-first deployments. Patent filing pending.",
    href: "/capabilities/triveni",
    icon: Cpu,
  },
  {
    title: "SevaBot",
    description: "Reference Implementation of TRIVENI — Our flagship technology demonstration applied to autonomous medical robotics for the Global South. Concept-level only; component specifications under NDA.",
    icon: Shield,
  },
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 via-transparent to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-6 tracking-tight ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
              We Are Building the <span className="gradient-text">Sovereign Ground Layer</span> of AI
            </h1>
            <p className={`text-xl text-[var(--color-text-secondary)] leading-relaxed ${mounted ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
              Kalinga Sovereign AI Pvt. Ltd. — a DeepTech company headquartered in Bhubaneswar,
              building offline-first, edge-native AI infrastructure for the populations the cloud forgot.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts Strip */}
      <section className="py-8 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="text-center">
                <p className="text-sm text-[var(--color-text-muted)] mb-1">{fact.label}</p>
                <p className="text-lg font-semibold text-[var(--color-text)]">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {navTiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <Link
                  key={tile.href}
                  href={tile.href}
                  className="card p-8 text-center group hover:border-[var(--color-primary)] transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary-subtle)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                    <Icon className="w-8 h-8 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">{tile.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{tile.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Are Building */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4 tracking-tight">
              What We Are Building
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whatWeBuild.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-subtle)] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  {item.href && (
                    <Link href={item.href} className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium hover:underline">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <blockquote className="border-l-4 border-[var(--color-primary)] pl-8 py-4">
              <p className="text-2xl md:text-3xl font-serif italic text-[var(--color-text-secondary)] leading-relaxed mb-6">
                &ldquo;We are not building another AI wrapper. We are building the infrastructure that should have existed from the beginning — systems that respect the user&apos;s sovereignty by design, not by policy.&rdquo;
              </p>
              <cite className="text-[var(--color-text)] font-medium not-italic">
                — Biswas Mishra, Founder & CEO
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="text-base px-8 py-6">
                Partner With Us
              </Button>
            </Link>
            <Link href="/contact?type=careers">
              <Button variant="outline" className="btn-secondary text-base px-8 py-6">
                Join the Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
