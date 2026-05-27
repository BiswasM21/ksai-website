import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Clock, DollarSign, ShoppingCart, Heart, MessageCircle, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work — Case Studies & Portfolio",
  description: "See how we've helped startups and SMEs transform their business with custom web development, mobile apps, and AI automation. Real results, anonymized case studies.",
  keywords: [
    "portfolio",
    "case studies",
    "our work",
    "web development projects",
    "app development projects",
    "AI automation examples",
    "client success stories",
  ],
  openGraph: {
    title: "Our Work | Kalinga Sovereign AI",
    description: "Case studies showing real business results from our web, app, and AI projects.",
    url: "https://kalingasovereignai.com/portfolio",
  },
};

const caseStudies = [
  {
    category: "E-commerce",
    clientType: "Retail Chain in Odisha",
    title: "Modernizing a Legacy Retail Business",
    challenge: "A mid-sized retail chain with 15 stores struggled with manual inventory tracking, no online presence, and disconnected systems. They were losing customers to online competitors and wasting hours daily on manual work.",
    solution: "We built a custom e-commerce platform integrated with their existing POS system, implemented AI-powered inventory prediction, and created a mobile app for store managers. The entire system worked offline with automatic sync.",
    results: [
      { icon: TrendingUp, value: "40%", label: "Increase in Sales" },
      { icon: DollarSign, value: "60%", label: "Reduction in Inventory Costs" },
      { icon: Clock, value: "20+", label: "Hours Saved Weekly" },
      { icon: Users, value: "5000+", label: "New Online Customers" },
    ],
    testimonial: {
      text: "They transformed our business completely. We went from drowning in manual work to having a system that practically runs itself. The AI inventory prediction alone saved us lakhs in prevented stockouts.",
      author: "Operations Director",
    },
    services: ["Web Development", "AI Integration", "Mobile App"],
    duration: "4 months",
  },
  {
    category: "Healthcare",
    clientType: "Private Hospital Network",
    title: "Digitizing Patient Experience",
    challenge: "A multi-specialty hospital network with 3 facilities faced chaotic appointment scheduling, long wait times, and no digital patient records. Staff spent 60% of their time on phone calls for appointment management.",
    solution: "We developed a comprehensive patient management system with AI-powered appointment scheduling, digital queue management, and a patient portal. The system sends automated reminders and allows online booking 24/7.",
    results: [
      { icon: Heart, value: "80%", label: "Reduction in Missed Appointments" },
      { icon: Clock, value: "50%", label: "Faster Patient Check-in" },
      { icon: Users, value: "95%", label: "Patient Satisfaction" },
      { icon: BarChart3, value: "30%", label: "Increase in Daily Patients" },
    ],
    testimonial: {
      text: "Patient satisfaction scores went up dramatically. Our staff can finally focus on patient care instead of managing phone calls. The automated reminders reduced no-shows by 80%.",
      author: "Hospital Administrator",
    },
    services: ["Custom Software", "AI Automation", "Mobile App"],
    duration: "6 months",
  },
  {
    category: "Technology",
    clientType: "Tech Startup in Bangalore",
    title: "Scaling Customer Support with AI",
    challenge: "A B2B SaaS startup was growing fast but couldn't hire support staff fast enough. Support tickets were piling up, response times were 48+ hours, and customers were churning due to poor support.",
    solution: "We built a custom AI support chatbot trained on their documentation and knowledge base. The chatbot handled 70% of tier-1 support automatically, intelligently escalating complex issues to human agents.",
    results: [
      { icon: MessageCircle, value: "70%", label: "Tickets Handled by AI" },
      { icon: Clock, value: "<2min", label: "Response Time (was 48hrs)" },
      { icon: DollarSign, value: "50%", label: "Reduction in Support Costs" },
      { icon: Users, value: "24/7", label: "AI Availability" },
    ],
    testimonial: {
      text: "Game changer for us. We went from 48-hour response times to instant responses 24/7. Customer satisfaction improved, churn dropped, and we actually started winning deals because of our support quality.",
      author: "Founder & CEO",
    },
    services: ["AI Chatbot", "Custom Integration", "Analytics Dashboard"],
    duration: "2 months",
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
              Our Work
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8">
              Real results from real projects. See how we&apos;ve helped startups and SMEs transform their business with custom technology solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="font-semibold">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-[var(--color-bg)] rounded-2xl border border-[var(--color-border)] overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-[var(--color-border)]">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium rounded-full">
                      {study.category}
                    </span>
                    <span className="text-sm text-[var(--color-text-muted)]">
                      {study.clientType}
                    </span>
                    <span className="text-sm text-[var(--color-text-muted)]">
                      Duration: {study.duration}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                    {study.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.services.map((service, i) => (
                      <span key={i} className="px-3 py-1 bg-[var(--color-surface)] text-[var(--color-text-secondary)] text-sm rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div>
                      <h3 className="font-semibold text-[var(--color-text)] mb-2">The Challenge</h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text)] mb-2">The Solution</h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">{study.solution}</p>
                    </div>
                    <div className="bg-[var(--color-surface)] p-4 rounded-xl">
                      <h3 className="font-semibold text-[var(--color-text)] mb-2">What They Said</h3>
                      <p className="text-sm text-[var(--color-text-secondary)] italic">&ldquo;{study.testimonial.text}&rdquo;</p>
                      <p className="text-xs text-[var(--color-text-muted)] mt-2">— {study.testimonial.author}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-[var(--color-primary)]/10 to-transparent p-6 rounded-xl">
                    <h3 className="font-semibold text-[var(--color-text)] mb-4">Results</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <result.icon className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
                          <div className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">{result.value}</div>
                          <div className="text-sm text-[var(--color-text-muted)]">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Let&apos;s discuss how we can help transform your business with custom technology solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="font-semibold">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
