import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cpu,
  Globe,
  Users,
  Zap,
  Shield,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kalinga Sovereign AI builds custom AI solutions for SMEs, enterprises, and institutions. Learn about our mission, approach, and technology.",
  keywords: [
    "AI solutions company",
    "AI development India",
    "custom AI agents",
    "AI agent development",
    "Kalinga Sovereign AI about",
    "AI consulting",
    "Global South AI",
  ],
  alternates: {
    canonical: "https://kalinga-ai.com/about",
  },
  openGraph: {
    title: "About Kalinga Sovereign AI — Custom AI Solutions for the Global South",
    description:
      "We build custom AI agents, workflow automation, and intelligent applications for SMEs, enterprises, and institutions across India and the Global South.",
    url: "https://kalinga-ai.com/about",
    siteName: "Kalinga Sovereign AI",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Kalinga Sovereign AI" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kalinga Sovereign AI",
    description: "Custom AI agents and AI solutions for the Global South.",
    images: ["/og-image.png"],
  },
};

const values = [
  {
    icon: Shield,
    title: "Sovereign by Design",
    desc: "AI that runs on your infrastructure, your data, your terms. No vendor lock-in, no data leaving your control.",
  },
  {
    icon: Globe,
    title: "Built for the Global South",
    desc: "Solutions designed for Indian and emerging market realities — language support, affordability, and local integration first.",
  },
  {
    icon: Zap,
    title: "Ship to Production",
    desc: "We don't leave you with a deck. Every engagement ends with working software running in your environment.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    desc: "We're not vendors — we're collaborators. We transfer knowledge, document everything, and set your team up to own it.",
  },
];

const stack = [
  "Next.js / React",
  "Python / FastAPI",
  "PyTorch / Transformers",
  "PostgreSQL / Pinecone",
  "AWS / GCP / On-prem",
  "LangChain / LlamaIndex",
  "React Three Fiber",
  "Airflow / Modal",
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <Badge variant="default" className="mb-6 text-xs font-mono">
          ABOUT US
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-6 max-w-3xl">
          We build AI that{" "}
          <span className="gradient-text">ships and performs</span>
        </h1>
        <p className="text-[var(--color-muted)] text-lg md:text-xl max-w-2xl leading-relaxed">
          Kalinga Sovereign AI was founded with one mission: make powerful AI
          accessible and practical for businesses in India and the Global South.
          Not as a buzzword, but as working infrastructure.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-[var(--color-surface-2)] border-y border-[var(--color-border)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Badge variant="secondary" className="mb-4 text-xs font-mono">
                OUR MISSION
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                Democratize sovereign AI for the Global South
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                The AI revolution is happening — but most of it is built for
                Silicon Valley startups and Fortune 500 companies. SMEs,
                hospitals, manufacturers, and government bodies in India and
                across the Global South are being left out.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We change that. By building on open models, deploying on local
                infrastructure, and charging fair prices for real work — we make
                AI that serves real people, not just demos.
              </p>
            </div>
            <div>
              <Badge variant="secondary" className="mb-4 text-xs font-mono">
                OUR APPROACH
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                Practical AI, not proof-of-concept
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                We start with the business problem, not the technology. We
                validate with data, build incrementally, and ship to production —
                not to a presentation.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our engagements are scoped with clear deliverables, timelines, and
                success metrics. We communicate weekly, hand over documentation
                at the end, and train your team to own the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-xs font-mono">
              WHAT WE STAND FOR
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
              How we work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title}>
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-[var(--color-text)] font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-[var(--color-surface-2)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-xs font-mono">
              TECHNOLOGY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">
              Our Stack
            </h2>
            <p className="text-[var(--color-muted)] max-w-xl mx-auto">
              Modern tools, battle-tested patterns. We pick the right tool for
              each problem — not the trendiest one.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tech) => (
              <Badge key={tech} variant="outline" className="px-4 py-2 text-sm font-mono">
                <Cpu className="w-3 h-3 mr-2 inline" />
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Handshake className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">
            Let&apos;s build together
          </h2>
          <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
            If you have a project in mind — or just want to explore what's
            possible — reach out. We offer a free 30-minute scoping call.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-text)] font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
