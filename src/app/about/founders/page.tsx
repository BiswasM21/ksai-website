import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Founders",
  description: "Meet the founders and team behind Kalinga Sovereign AI.",
  openGraph: {
    title: "Our Founders | Kalinga Sovereign AI",
    description: "Meet the founders and team behind Kalinga Sovereign AI.",
    url: "https://kalingasovereignai.com/about/founders",
    type: "website",
  },
};

const founders = [
  {
    name: "Biswas Mishra",
    role: "Founder & CEO",
    credentials: "DeepTech Founder | AI Infrastructure Architect",
    bio: "Biswas brings a unique blend of academic rigor and technical hands-on experience to KSAI. His vision for sovereign AI infrastructure stems from a deep understanding of both technological systems and the populations they should serve. With extensive experience in AI development and web technologies, he leads KSAI's mission to build AI that respects user sovereignty.",
    linkedin: "https://www.linkedin.com/in/biswas-mishra-690032112/",
    email: "biswas@ksai.com",
    initials: "BM",
  },
  {
    name: "Sanjukta Mishra",
    role: "Co-Founder & COO",
    credentials: "Operations & Strategy",
    bio: "Sanjukta brings strategic operational expertise to KSAI, ensuring that the company's mission translates into effective execution. Her leadership ensures that KSAI remains focused on its core mission while scaling operations.",
    linkedin: "#",
    email: "sanjukta@ksai.com",
    initials: "SM",
  },
];

const advisoryBoard = [
  {
    name: "Dr. Rajesh Kumar",
    role: "AI Research Advisor",
    institution: "IIT Bhubaneswar",
    status: "pending",
  },
  {
    name: "Prof. Anita Patel",
    role: "Policy & Compliance Advisor",
    institution: "NIT Rourkela",
    status: "pending",
  },
];

export default function FoundersPage() {
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
              The Founders
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              Building the infrastructure that should have existed from the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="space-y-12 max-w-4xl mx-auto">
            {founders.map((founder) => (
              <div key={founder.name} className="card p-8 md:flex md:gap-8">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[#EA580C] flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 mb-6 md:mb-0">
                  <span className="text-4xl font-bold text-white">{founder.initials}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[var(--color-text)] mb-1">{founder.name}</h2>
                  <p className="text-[var(--color-primary)] font-medium mb-2">{founder.role}</p>
                  <p className="text-sm text-[var(--color-text-muted)] mb-4 italic">{founder.credentials}</p>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">{founder.bio}</p>
                  <div className="flex gap-4">
                    {founder.linkedin !== "#" ? (
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
                      >
                        <Link2 className="w-4 h-4" />
                        LinkedIn
                      </a>
                    ) : null}
                    <a
                      href={`mailto:${founder.email}`}
                      className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <blockquote className="border-l-4 border-[var(--color-primary)] pl-8 py-4">
              <p className="text-2xl font-serif italic text-[var(--color-text-secondary)] leading-relaxed mb-6">
                &ldquo;Every village hospital, every rural school, every small business deserves the same AI infrastructure as the biggest tech companies. Not because it&rsquo;s charity — because it&rsquo;s the only way to build technology that truly scales.&rdquo;
              </p>
              <cite className="text-[var(--color-text)] font-medium not-italic">
                — On the conviction behind KSAI
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Advisory Board</h2>
              <p className="text-[var(--color-text-secondary)]">Distinguished advisors guiding our mission.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advisoryBoard.map((advisor) => (
                <div key={advisor.name} className="card p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">{advisor.name}</h3>
                  <p className="text-[var(--color-primary)] text-sm mb-1">{advisor.role}</p>
                  <p className="text-[var(--color-text-muted)] text-sm">{advisor.institution}</p>
                  {advisor.status === "pending" && (
                    <span className="inline-block mt-2 px-2 py-1 rounded text-xs bg-[var(--color-surface-2)] text-[var(--color-text-muted)]">
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">
              Join our mission?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              We&apos;re looking for talented people who share our vision for sovereign AI.
            </p>
            <Link href="/contact?type=careers">
              <Button className="text-base px-8 py-6">
                Join the Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
