import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Kalinga Sovereign AI Pvt. Ltd. — Learn how we collect, use, and protect your data.",
  alternates: {
    canonical: "https://kalinga-ai.com/privacy",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-24">
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none space-y-6 text-[var(--color-muted)]">
          <p className="text-sm">Last updated: April 2026</p>
          <p>
            Kalinga Sovereign AI Pvt. Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
            https://kalinga-ai.com. This page informs you of our policies regarding
            the collection, use, and disclosure of personal data when you use our
            website and the choices you have associated with that data.
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Information We Collect
          </h2>
          <p>
            We collect information you voluntarily provide to us, including name,
            email address, phone number, company name, and project description when
            you fill out our contact form or reach out via email or WhatsApp.
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            How We Use Your Information
          </h2>
          <p>
            We use the information collected solely to respond to your enquiries,
            communicate about our services, and provide relevant information about
            Kalinga Sovereign AI. We do not sell or share your personal data with
            third parties for marketing purposes.
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Data Storage and Security
          </h2>
          <p>
            Personal data submitted through our contact form is stored securely and
            accessed only by authorized Kalinga Sovereign AI team members. We employ
            industry-standard security measures to protect your data.
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Cookies
          </h2>
          <p>
            Our website uses only essential cookies for theme preference (light/dark
            mode). No tracking or advertising cookies are used.
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, contact us at{" "}
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
