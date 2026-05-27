import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Globe, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Mission",
  description: "Kalinga Sovereign AI's mission to build sovereign, offline-first AI infrastructure for the Global South.",
  openGraph: {
    title: "Our Mission | Kalinga Sovereign AI",
    description: "Kalinga Sovereign AI's mission to build sovereign, offline-first AI infrastructure for the Global South.",
    url: "https://kalingasovereignai.com/about/mission",
    type: "website",
  },
};

const pillars = [
  {
    icon: Shield,
    title: "Sovereignty",
    description: "Data stays where it is generated. The village, the hospital, the factory, the home. No exceptions, no exfiltration.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Every system we build must work without internet, without grid power, and without literacy in English. If it doesn't, it isn't ours.",
  },
  {
    icon: Award,
    title: "Dignity",
    description: "Technology built for the Global South must be excellent, not charitable. We build with the same rigor as any frontier lab.",
  },
];

export default function MissionPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Back Link */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <Link href="/about" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to About</span>
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-8 tracking-tight">
              Our Mission
            </h1>
            <p className="text-2xl md:text-3xl font-serif italic text-[var(--color-primary)] leading-relaxed">
              &ldquo;To build sovereign, offline-first AI infrastructure that serves the populations the cloud was never built for — ensuring that geography, language, or connectivity never becomes a barrier to dignity, opportunity, or access.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="card p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary-subtle)] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">{pillar.title}</h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Ready to join our mission?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Let&apos;s build sovereign AI infrastructure together.
            </p>
            <Link href="/contact">
              <Button className="text-base px-8 py-6">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
