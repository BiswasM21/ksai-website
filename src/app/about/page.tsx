import type { Metadata } from "next";
import { Target, Lightbulb, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About KSAI",
  description:
    "Learn about Kalinga Sovereign AI's mission to bring world-class AI, web development, and automation solutions to businesses in India and the Global South.",
  keywords: [
    "about KSAI",
    "Kalinga Sovereign AI mission",
    "AI company Bhubaneswar",
    "AI solutions India",
    "Global South AI",
    "custom web development",
    "AI automation",
    "robotics solutions",
  ],
  alternates: {
    canonical: "https://kalinga-ai.com/about",
  },
  openGraph: {
    title: "About KSAI — Kalinga Sovereign AI",
    description:
      "We believe every business deserves access to world-class AI solutions. Learn about our mission, story, and values.",
    url: "https://kalinga-ai.com/about",
    siteName: "Kalinga Sovereign AI",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Kalinga Sovereign AI" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About KSAI — Kalinga Sovereign AI",
    description: "World-class AI solutions for businesses in India and the Global South.",
    images: ["/og-image.png"],
  },
};

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We deliver solutions with meticulous attention to detail",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of technology",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We view every project as a collaboration",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "You can count on us for consistent quality",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Page Header */}
      <section className="container section">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About KSAI
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
            Building world-class technology solutions from Bhubaneswar, Odisha — empowering businesses across India and the Global South.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-sm font-semibold mb-6">
              Our Mission
            </div>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
              We believe that every business deserves access to world-class websites, applications, AI automation, and robotics solutions. Founded in Bhubaneswar, Odisha, we&apos;re building a team that combines deep technical expertise with a genuine passion for solving real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold mb-6">
              Our Story
            </div>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
              Kalinga Sovereign AI was born from a simple observation: the best technology shouldn&apos;t be reserved for the biggest companies. Too many promising businesses in India and the Global South were being left behind in the AI revolution. We set out to change that by combining expertise in web development, mobile applications, AI, and robotics.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card text-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
