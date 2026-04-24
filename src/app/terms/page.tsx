import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Kalinga Sovereign AI Pvt. Ltd. — Read our terms governing the use of our website and services.",
  alternates: {
    canonical: "https://kalinga-ai.com/terms",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-24">
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-muted)]">
          <p className="text-sm">Last updated: April 2026</p>
          <p>
            By accessing and using the website https://kalinga-ai.com, you accept
            and agree to be bound by the terms and provisions of this agreement.
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Use of Website
          </h2>
          <p>
            The content of this website is for general information purposes only.
            Kalinga Sovereign AI Pvt. Ltd. reserves the right to modify or
            discontinue any aspect of the website at any time. We do not guarantee
            that the website will be available uninterrupted or error-free.
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Intellectual Property
          </h2>
          <p>
            All content, designs, and materials on this website, including text,
            graphics, logos, and images, are the property of Kalinga Sovereign AI
            Pvt. Ltd. or its content suppliers and are protected by applicable
            intellectual property laws. Unauthorized reproduction or distribution
            is prohibited.
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Services
          </h2>
          <p>
            Information about our services on this website is provided for
            informational purposes only and does not constitute a binding offer.
            All engagements are subject to separate service agreements with defined
            scope, timelines, and deliverables.
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Limitation of Liability
          </h2>
          <p>
            Kalinga Sovereign AI Pvt. Ltd. shall not be held liable for any
            direct, indirect, incidental, or consequential damages arising from
            your use of this website or reliance on any information provided
            herein.
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Governing Law
          </h2>
          <p>
            These terms are governed by and construed in accordance with the laws
            of India. Any disputes shall be subject to the exclusive jurisdiction
            of the courts of Bhubaneswar, Odisha.
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Contact Us
          </h2>
          <p>
            For questions about these Terms of Service, contact us at{" "}
            <a
              href="mailto:Kalingasovereignai@gmail.com"
              className="text-[var(--color-accent)] hover:underline"
            >
              Kalingasovereignai@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
