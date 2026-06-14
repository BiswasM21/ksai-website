import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Mail, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Kalinga Sovereign AI",
  description: "Privacy policy for Kalinga Sovereign AI - Learn how we collect, use, and protect your data. Contact us for privacy-related inquiries.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Last updated: June 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none text-[var(--color-text-secondary)] space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you fill out a form,
                  send us a message, or contact us through our website. This may include your name,
                  email address, phone number, and any other information you choose to provide.
                </p>
                <p>
                  We do not collect personal data through our products or services. Our Privacy by Physics
                  architecture ensures that AI inference occurs entirely on your device, with no data
                  transmitted to our servers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you information about our services, with your consent</li>
                  <li>Improve our website and services</li>
                  <li>Comply with our legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Data Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties
                  without your consent, except as described in this policy or as required by law.
                </p>
                <p>
                  We may share information with service providers who assist us in operating our website
                  and conducting our business, subject to confidentiality obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Cookies and Tracking</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to enhance your browsing
                  experience. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly
                  collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes
                  by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please
                  contact us at:
                </p>
                <div className="bg-[var(--color-bg)] p-6 rounded-xl border border-[var(--color-border)] mt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                    <span className="font-medium text-[var(--color-text)]">Email</span>
                  </div>
                  <a
                    href="mailto:privacy@kalingasovereignai.com"
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    privacy@kalingasovereignai.com
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[var(--color-text-secondary)] mb-6">
              For questions about our Privacy by Physics approach, visit our philosophy page.
            </p>
            <Link href="/privacy-by-physics">
              <Button variant="outline" className="font-semibold">
                <FileText className="w-4 h-4 mr-2" />
                Privacy by Physics
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}