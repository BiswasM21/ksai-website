import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Cpu, Globe, Award, Wrench, Target, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Values",
  description: "What Kalinga Sovereign AI stands for - our core principles and values.",
  openGraph: {
    title: "Our Values | Kalinga Sovereign AI",
    description: "What Kalinga Sovereign AI stands for - our core principles and values.",
    url: "https://kalingasovereignai.com/about/values",
    type: "website",
  },
};

const values = [
  {
    icon: Shield,
    title: "Privacy by Physics, Not by Promise",
    description: "We do not ask users to trust us with their data. We design our systems so we never touch it in the first place.",
  },
  {
    icon: Cpu,
    title: "Hardware Truth Over Software Hype",
    description: "We respect the constraints of real devices: memory, power, heat, cost. Engineers who treat hardware as someone else's problem do not belong here.",
  },
  {
    icon: Globe,
    title: "Sovereignty Over Convenience",
    description: "Every architectural decision favors the user's jurisdiction, language, and ownership — even when it makes our work harder.",
  },
  {
    icon: Award,
    title: "Excellence for the Underserved",
    description: "A child in a remote village deserves the same engineering rigor as a Fortune 500 client.",
  },
  {
    icon: Wrench,
    title: "Builders, Not Wrappers",
    description: "We do not chain together someone else's APIs and call it innovation. We build from the silicon up.",
  },
  {
    icon: Target,
    title: "Mission Before Margin",
    description: "Profit funds the mission. The mission does not bend to fit the profit.",
  },
];

export default function ValuesPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-6 tracking-tight">
              What We Stand For
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              Six principles that guide every decision we make.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{value.title}</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">{value.description}</p>
                    </div>
                  </div>
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
              Align with our values?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              We&apos;re always looking for partners and team members who share these principles.
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
