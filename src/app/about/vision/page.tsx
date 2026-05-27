import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Vision",
  description: "Kalinga Sovereign AI's vision for a world where everyone has access to quality AI.",
  openGraph: {
    title: "Our Vision | Kalinga Sovereign AI",
    description: "Kalinga Sovereign AI's vision for a world where everyone has access to quality AI.",
    url: "https://kalingasovereignai.com/about/vision",
    type: "website",
  },
};

const horizons = [
  {
    number: "1",
    title: "Prove the Ground Layer",
    period: "2026–2028",
    description: "Validate the 'Privacy by Physics' architecture at scale through institutional and defence-grade engagements.",
  },
  {
    number: "2",
    title: "Expand the Global South Footprint",
    period: "2028–2031",
    description: "Establish KSAI as the default sovereign-AI infrastructure layer for emerging economies across Latin America, Africa, and Southeast Asia.",
  },
  {
    number: "3",
    title: "Set the Standard",
    period: "2031–2036",
    description: "Become the reference architecture for sovereign edge AI globally, cited in policy frameworks alongside the EU AI Act and India's DPDP Act.",
  },
];

export default function VisionPage() {
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-8 tracking-tight">
              Our Vision
            </h1>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed font-serif">
                &ldquo;A world where every individual — regardless of where they live, what they speak,
                or whether they have a signal — has access to the same quality of AI as the most
                connected citizens on Earth.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Horizons */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4 tracking-tight">
              Three Horizons
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Our roadmap to building the sovereign AI infrastructure layer.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {horizons.map((horizon, index) => (
              <div key={horizon.number} className="relative pl-8 pb-12 last:pb-0">
                {index < horizons.length - 1 && (
                  <div className="absolute left-3 top-3 bottom-0 w-px bg-[var(--color-border)]" />
                )}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-sm font-bold">
                  {horizon.number}
                </div>
                <div className="ml-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[var(--color-text)]">{horizon.title}</h3>
                    <span className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
                      <Clock className="w-4 h-4" />
                      {horizon.period}
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)]">{horizon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4 tracking-tight">
              Join Our Mission
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8">
              Ready to help us build the future of sovereign AI?
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-base">
                Get in Touch <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
