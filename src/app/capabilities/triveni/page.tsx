import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cpu, Shield, WifiOff, Server, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "TRIVENI Architecture — Sovereign Edge AI | Kalinga Sovereign AI",
  description: "Our proprietary three-unit edge AI architecture designed for sovereign, offline-first deployments. Patent filing pending.",
};

const features = [
  {
    icon: Cpu,
    title: "On-Device Inference",
    description: "All AI inference runs directly on the edge device. No data leaves the hardware in front of the user.",
  },
  {
    icon: Shield,
    title: "Zero Telemetry",
    description: "No outbound connections by default. Every deployment is network-auditable with zero data exfiltration.",
  },
  {
    icon: WifiOff,
    title: "Offline-First",
    description: "Designed to work in connectivity-challenged environments. The cloud is optional, not required.",
  },
  {
    icon: Server,
    title: "Sovereign Updates",
    description: "Update channels controlled by the deploying institution, not by KSAI. You decide when and how.",
  },
];

export default function TriveniPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section">
        <div className="container mx-auto px-6">
          <Link href="/about" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-8">
              <Cpu className="w-10 h-10 text-[var(--color-primary)]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-6 tracking-tight">
              TRIVENI Architecture
            </h1>
            <p className="text-xl text-[var(--color-primary)] font-medium mb-8">
              Sovereign Edge AI for the Global South
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Our proprietary three-unit edge AI architecture designed for sovereign,
              offline-first deployments. Patent filing pending.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tracking-tight">
              Four Principles of TRIVENI
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="card p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">{feature.title}</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8 tracking-tight text-center">
              Architecture Overview
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--color-text-secondary)] space-y-6">
              <p>
                TRIVENI is built on a fundamental insight: the most privacy-preserving AI system is one
                that never receives your data in the first place. Unlike cloud-based AI that requires
                transmitting queries to remote servers, TRIVENI processes everything locally.
              </p>
              <p>
                The architecture consists of three coordinated units that work together to deliver
                enterprise-grade AI capabilities while maintaining complete data sovereignty. Each unit
                is optimized for a specific aspect of the AI pipeline.
              </p>
              <p>
                <strong className="text-[var(--color-text)]">The result:</strong> AI that works
                offline, doesn't phone home, and can be deployed in environments where cloud
                connectivity is unreliable, expensive, or simply unacceptable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Contact us to discuss how TRIVENI can power your sovereign AI deployment.
            </p>
            <Link href="/contact">
              <Button size="lg" className="font-semibold">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}