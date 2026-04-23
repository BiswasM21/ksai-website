import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kalinga Sovereign AI. Start your AI project or request a free scoping call.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Kalingasovereignai@gmail.com",
    href: "mailto:Kalingasovereignai@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhubaneswar, Odisha, India",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <Badge variant="default" className="mb-6 text-xs font-mono">
            CONTACT
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-4">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-[var(--color-muted)] text-lg max-w-xl leading-relaxed">
            Tell us about your project. We&apos;ll respond within 24 hours with
            honest, practical feedback — no sales pitch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info cards */}
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="text-[var(--color-muted-dark)] text-xs uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-[var(--color-text)] font-medium">{item.value}</p>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5 hover:border-[var(--color-accent)]/40 transition-colors"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={item.label}
                  className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5"
                >
                  {content}
                </div>
              );
            })}

            {/* Availability note */}
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl p-5">
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                <span className="text-[var(--color-text)] font-medium">
                  Currently accepting new projects.
                </span>{" "}
                We typically take on 2–3 active engagements at a time to ensure
                quality delivery.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
