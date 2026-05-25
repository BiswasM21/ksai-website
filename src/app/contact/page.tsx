import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Kalinga Sovereign AI",
  description:
    "Get in touch with Kalinga Sovereign AI. Start your AI project or request a free scoping call. We build custom AI agents and AI solutions for SMEs and enterprises.",
  keywords: [
    "contact AI company",
    "custom AI agents enquiry",
    "AI solutions quote",
    "AI development consultation",
    "AI automation contact",
    "Kalinga Sovereign AI contact",
    "AI company Bhubaneswar",
    "AI solutions India",
  ],
  alternates: {
    canonical: "https://kalinga-ai.com/contact",
  },
  openGraph: {
    title: "Contact Kalinga Sovereign AI — Start Your AI Project",
    description:
      "Ready to build custom AI agents or automate your workflows? Get in touch for a free 30-minute scoping call.",
    url: "https://kalinga-ai.com/contact",
    siteName: "Kalinga Sovereign AI",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Kalinga Sovereign AI" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kalinga Sovereign AI",
    description: "Start your custom AI agent project today.",
    images: ["/og-image.png"],
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Kalingasovereignai@gmail.com",
    href: "mailto:Kalingasovereignai@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Bhubaneswar, Odisha, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/kalinga-sovereign-ai",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/kalingaai",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/kalinga-sovereign-ai",
  },
];

function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
}: (typeof contactInfo)[number]) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[var(--color-accent)]" />
      </div>
      <div>
        <p className="text-[var(--color-text-muted)] text-xs uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-[var(--color-text)] font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5 hover:border-[var(--color-accent)]/40 transition-colors"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5">
      {content}
    </div>
  );
}

function SocialLinkCard({
  icon: Icon,
  label,
  href,
}: (typeof socialLinks)[number]) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)]/40 transition-colors"
      aria-label={`Visit our ${label} page`}
    >
      <Icon className="w-5 h-5 text-[var(--color-text-secondary)]" />
      <span className="text-[var(--color-text)] font-medium">{label}</span>
    </a>
  );
}

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
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-xl leading-relaxed">
            Tell us about your project. We&apos;ll respond within 24 hours with
            honest, practical feedback — no sales pitch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Info cards */}
            {contactInfo.map((item) => (
              <ContactInfoCard key={item.label} {...item} />
            ))}

            {/* Social links */}
            <div className="pt-4">
              <p className="text-[var(--color-text-muted)] text-sm uppercase tracking-wider mb-4">
                Connect with us
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((item) => (
                  <SocialLinkCard key={item.label} {...item} />
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5 mt-8">
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                <span className="text-[var(--color-text)] font-medium">
                  Currently accepting new projects.
                </span>{" "}
                We typically take on 2–3 active engagements at a time to ensure
                quality delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
