import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Kalinga Sovereign AI",
  description: "Contact Kalinga Sovereign AI for web development, mobile app development, and AI automation projects. Get a free 30-minute consultation. Based in Odisha, serving globally.",
  keywords: [
    "contact Kalinga Sovereign AI",
    "hire web developer",
    "hire AI developer",
    "app development inquiry",
    "web development consultation",
  ],
};

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@kalingasovereignai.com",
    href: "mailto:contact@kalingasovereignai.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9692000359",
    href: "tel:+919692000359",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhubaneswar, Odisha, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/company/kalinga-sovereign-ai",
  },
  {
    icon: XIcon,
    label: "X",
    href: "https://x.com/Kalinga_Sov_Ai",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/kalingasovereignai/",
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
      <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-subtle)] flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[var(--color-primary)]" />
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
        className="block card p-5 hover:border-[var(--color-primary)] transition-colors"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="card p-5">
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
      className="flex items-center gap-3 p-4 card hover:border-[var(--color-primary)] transition-colors"
      aria-label={`Visit our ${label} page`}
    >
      <span className="w-5 h-5 text-[var(--color-text-secondary)]">
        <Icon />
      </span>
      <span className="text-[var(--color-text)] font-medium">{label}</span>
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <Badge variant="default" className="mb-6">
            Contact
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-4">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
            Have a project in mind? We offer free 30-minute scoping calls to understand
            your needs and provide honest recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <div className="card p-6 md:p-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            {contactInfo.map((item) => (
              <ContactInfoCard key={item.label} {...item} />
            ))}

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

            <div className="card p-5 mt-8 border-[var(--color-primary)]">
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                <span className="text-[var(--color-text)] font-medium">
                  Currently accepting new projects.
                </span>{" "}
                We typically take on 2–3 active engagements at a time to ensure quality delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
