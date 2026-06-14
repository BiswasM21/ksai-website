import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Accessibility, CheckCircle, Eye, Volume2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Kalinga Sovereign AI is committed to ensuring digital accessibility for people with disabilities.",
};

export default function AccessibilityPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Back Link */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <Accessibility className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
                Accessibility Statement
              </h1>
            </div>

            <div className="prose prose-lg max-w-none text-[var(--color-text-secondary)] space-y-6">
              <p className="text-lg">
                Kalinga Sovereign AI Pvt. Ltd. is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.
              </p>

              <h2 className="text-xl font-bold text-[var(--color-text)] mt-8">Conformance Status</h2>
              <p>
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
              </p>

              <h2 className="text-xl font-bold text-[var(--color-text)] mt-8">Measures We Have Taken</h2>
              <ul className="space-y-3">
                {[
                  { icon: CheckCircle, text: "Semantic HTML is used to convey meaning and structure" },
                  { icon: Eye, text: "Sufficient color contrast ratios (minimum 4.5:1 for text)" },
                  { icon: Volume2, text: "Alternative text provided for meaningful images" },
                  { icon: Smartphone, text: "Responsive design works across devices and screen sizes" },
                  { icon: CheckCircle, text: "Keyboard navigation support for all interactive elements" },
                  { icon: CheckCircle, text: "Focus indicators visible for keyboard users" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-[var(--color-text)] mt-8">Known Limitations</h2>
              <p>
                While we strive for accessibility, you may encounter some limitations:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Third-party content or embedded elements may not yet be fully accessible</li>
                <li>Some older PDFs or documents may not be fully accessible</li>
                <li>We are continuously working to improve the accessibility of our site</li>
              </ul>

              <h2 className="text-xl font-bold text-[var(--color-text)] mt-8">Feedback</h2>
              <p>
                We welcome your feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-border)]">
                <p className="mb-0">
                  <strong className="text-[var(--color-text)]">Email:</strong>{" "}
                  <a href="mailto:contact@kalingasovereignai.com" className="text-[var(--color-primary)] hover:underline">
                    contact@kalingasovereignai.com
                  </a>
                </p>
              </div>

              <h2 className="text-xl font-bold text-[var(--color-text)] mt-8">Assessment Approach</h2>
              <p>
                The accessibility of this website is evaluated through self-assessment. We conduct regular reviews and updates to ensure ongoing compliance with accessibility standards.
              </p>

              <h2 className="text-xl font-bold text-[var(--color-text)] mt-8">Date</h2>
              <p>
                This statement was last updated on May 25, 2026.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <Link href="/contact">
                <Button>
                  Contact Us About Accessibility
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
